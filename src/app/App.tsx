import { useState, useEffect } from 'react';
import { Home, Search, Sparkles, BarChart3, User, Plus, Edit3, Navigation } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { HomePage } from '@/app/components/HomePage';
import { ListDetailPage } from '@/app/components/ListDetailPage';
import { PlaceDetailPage } from '@/app/components/PlaceDetailPage';
import { EmptyState } from '@/app/components/EmptyState';
import { FolderCuration } from '@/app/components/features/FolderCuration';
import { SemanticSearch } from '@/app/components/features/SemanticSearch';
import { Insights } from '@/app/components/features/Insights';
import { ProfilePage } from '@/app/components/ProfilePage';
import { mockPlaces } from '@/app/mockData';

type View =
  | { type: 'home' }
  | { type: 'empty' }
  | { type: 'folder'; folderId: string }
  | { type: 'place'; placeId: string }
  | { type: 'search' }
  | { type: 'curation' }
  | { type: 'insights' }
  | { type: 'profile' };

type Tab = 'home' | 'search' | 'curation' | 'insights' | 'profile';

interface SearchState {
  value: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>({ type: 'home' });
  const [navigationStack, setNavigationStack] = useState<View[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>({ type: 'home' }.type as Tab);
  const [initialSearch, setInitialSearch] = useState<string>('');
  const [currentTheme, setCurrentTheme] = useState('blue');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

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
      if (previousView.type === 'profile') setActiveTab('profile');
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
        setInitialSearch(''); // Reset when clicking tab
        break;
      case 'curation':
        setCurrentView({ type: 'curation' });
        break;
      case 'insights':
        setCurrentView({ type: 'insights' });
        break;
      case 'profile':
        setCurrentView({ type: 'profile' });
        break;
      default:
        break;
    }
  };

  const navigateToSearch = (query: string) => {
    setInitialSearch(query);
    setActiveTab('search');
    setCurrentView({ type: 'search' });
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
            onSearchTrigger={navigateToSearch}
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
        return <SemanticSearch onNavigateToPlace={navigateToPlace} initialQuery={initialSearch} />;
      case 'curation':
        return <FolderCuration onNavigateToPlace={navigateToPlace} />;
      case 'insights':
        return <Insights />;
      case 'profile':
        return <ProfilePage currentTheme={currentTheme} onThemeChange={setCurrentTheme} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-zinc-200/50 p-4 md:p-10 lg:p-12 overflow-hidden flex flex-col items-center justify-center">
      <div className={`max-w-2xl w-full h-full bg-white relative shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-zinc-200 rounded-[40px] overflow-hidden flex flex-col theme-${currentTheme}`}>

        {/* Main Content Area - Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="pb-[70px]">
            {renderContent()}
          </div>
        </div>

        {/* Floating Action Button - Only on Home View */}
        {currentView.type === 'home' && (
          <Button
            size="lg"
            className="absolute bottom-20 right-6 rounded-full w-14 h-14 shadow-2xl z-40 bg-brand hover:bg-brand-hover text-white"
          >
            <Plus className="w-6 h-6" />
          </Button>
        )}

        {/* Bottom Action Bar for Place Detail - Only on Place Detail View */}
        {currentView.type === 'place' && (
          <div className="absolute bottom-[65px] left-0 right-0 bg-white border-t border-zinc-200 p-4 z-40 shadow-[0_-8px_16px_rgba(0,0,0,0.06)] animate-in slide-in-from-bottom duration-300">
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-12 font-bold text-base text-zinc-700 border-zinc-200">
                <Edit3 className="w-5 h-5 mr-2" />
                정보 수정
              </Button>
              <Button className="flex-1 h-12 bg-brand hover:bg-brand-hover text-white font-bold text-base shadow-lg shadow-brand/20">
                <Navigation className="w-5 h-5 mr-2 text-white" />
                길찾기
              </Button>
            </div>
          </div>
        )}

        {/* Bottom Navigation - Fixed within the container */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-zinc-100 z-50">
          <div className="flex justify-around items-center h-[65px] px-2 pb-2">
            <button
              onClick={() => handleTabChange('home')}
              className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'home' ? 'text-brand' : 'text-zinc-400'}`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">홈</span>
            </button>

            <button
              onClick={() => handleTabChange('search')}
              className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'search' ? 'text-brand' : 'text-zinc-400'}`}
            >
              <Search className="w-6 h-6" />
              <span className="text-xs font-medium">검색</span>
            </button>

            <button
              onClick={() => handleTabChange('curation')}
              className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'curation' ? 'text-brand' : 'text-zinc-400'}`}
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-xs font-medium">AI 큐레이션</span>
            </button>

            <button
              onClick={() => handleTabChange('insights')}
              className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'insights' ? 'text-brand' : 'text-zinc-400'}`}
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs font-medium">인사이트</span>
            </button>

            <button
              onClick={() => handleTabChange('profile')}
              className={`flex flex-col items-center gap-1 w-full h-full justify-center ${activeTab === 'profile' ? 'text-brand' : 'text-zinc-400'}`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">프로필</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
