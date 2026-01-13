import { useState } from 'react';
import { Home, Search, Sparkles, BarChart3, User } from 'lucide-react';
import { HomePage } from '@/app/components/HomePage';
import { ListDetailPage } from '@/app/components/ListDetailPage';
import { PlaceDetailPage } from '@/app/components/PlaceDetailPage';
import { EmptyState } from '@/app/components/EmptyState';
import { FolderCuration } from '@/app/components/features/FolderCuration';
import { SemanticSearch } from '@/app/components/features/SemanticSearch';
import { Insights } from '@/app/components/features/Insights';
import { mockPlaces } from '@/app/mockData';

type View =
  | { type: 'home' }
  | { type: 'empty' }
  | { type: 'folder'; folderId: string }
  | { type: 'place'; placeId: string }
  | { type: 'search' }
  | { type: 'curation' }
  | { type: 'insights' };

type Tab = 'home' | 'search' | 'curation' | 'insights' | 'profile';

export default function App() {
  const [currentView, setCurrentView] = useState<View>({ type: 'home' });
  const [navigationStack, setNavigationStack] = useState<View[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const hasPlaces = mockPlaces.length > 0;

  const navigateToFolder = (folderId: string) => {
    setNavigationStack([...navigationStack, currentView]);
    setCurrentView({ type: 'folder', folderId });
  };

  const navigateToPlace = (placeId: string) => {
    setNavigationStack([...navigationStack, currentView]);
    setCurrentView({ type: 'place', placeId });
  };

  const navigateBack = () => {
    if (navigationStack.length > 0) {
      const previousView = navigationStack[navigationStack.length - 1];
      setNavigationStack(navigationStack.slice(0, -1));
      setCurrentView(previousView);

      // Update active tab based on view type if needed
      if (previousView.type === 'home') setActiveTab('home');
      if (previousView.type === 'search') setActiveTab('search');
      if (previousView.type === 'curation') setActiveTab('curation');
      if (previousView.type === 'insights') setActiveTab('insights');
    } else {
      // Default fallback
      setCurrentView({ type: 'home' });
      setActiveTab('home');
    }
  };

  const navigateToBreadcrumb = (folderId: string) => {
    const stackIndex = navigationStack.findIndex(
      view => view.type === 'folder' && view.folderId === folderId
    );

    if (stackIndex >= 0) {
      setCurrentView(navigationStack[stackIndex]);
      setNavigationStack(navigationStack.slice(0, stackIndex));
    } else {
      setNavigationStack([...navigationStack, currentView]);
      setCurrentView({ type: 'folder', folderId });
    }
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setNavigationStack([]); // Reset stack on main tab switch usually

    switch (tab) {
      case 'home':
        setCurrentView({ type: 'home' });
        break;
      case 'search':
        setCurrentView({ type: 'search' });
        break;
      case 'curation':
        setCurrentView({ type: 'curation' });
        break;
      case 'insights':
        setCurrentView({ type: 'insights' });
        break;
      default:
        break;
    }
  };

  // Show empty state if no places
  if (!hasPlaces && currentView.type === 'home') {
    return (
      <div className="max-w-md mx-auto min-h-screen bg-white">
        <EmptyState />
      </div>
    );
  }

  const renderContent = () => {
    switch (currentView.type) {
      case 'home':
        return (
          <HomePage
            onNavigateToFolder={navigateToFolder}
            onNavigateToPlace={navigateToPlace}
          />
        );
      case 'folder':
        return (
          <ListDetailPage
            folderId={currentView.folderId}
            onNavigateBack={navigateBack}
            onNavigateToFolder={navigateToFolder}
            onNavigateToPlace={navigateToPlace}
            onNavigateToBreadcrumb={navigateToBreadcrumb}
          />
        );
      case 'place':
        return (
          <PlaceDetailPage
            placeId={currentView.placeId}
            onNavigateBack={navigateBack}
          />
        );
      case 'search':
        return <SemanticSearch />;
      case 'curation':
        return <FolderCuration />;
      case 'insights':
        return <Insights />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-white relative pb-[60px]">

      {/* Main Content Area */}
      <div className="min-h-screen">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-zinc-200 z-50">
        <div className="flex justify-around items-center h-[60px] pb-1">
          <button
            onClick={() => handleTabChange('home')}
            className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'home' ? 'text-blue-600' : 'text-zinc-400'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-medium">홈</span>
          </button>

          <button
            onClick={() => handleTabChange('search')}
            className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'search' ? 'text-blue-600' : 'text-zinc-400'}`}
          >
            <Search className="w-6 h-6" />
            <span className="text-[10px] font-medium">검색</span>
          </button>

          <button
            onClick={() => handleTabChange('curation')}
            className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'curation' ? 'text-blue-600' : 'text-zinc-400'}`}
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-[10px] font-medium">AI 큐레이션</span>
          </button>

          <button
            onClick={() => handleTabChange('insights')}
            className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'insights' ? 'text-blue-600' : 'text-zinc-400'}`}
          >
            <BarChart3 className="w-6 h-6" />
            <span className="text-[10px] font-medium">인사이트</span>
          </button>

          <button
            className="flex flex-col items-center gap-1 w-full h-full justify-center text-zinc-400"
          >
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">프로필</span>
          </button>
        </div>
      </div>
    </div>
  );
}
