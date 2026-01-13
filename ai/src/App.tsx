import { useState } from 'react';
import { Home, FolderOpen, Sparkles, Map, User } from 'lucide-react';
import OnboardingScreen from './components/OnboardingScreen';
import FolderManagementScreen from './components/FolderManagementScreen';
import PlaceDetailScreen from './components/PlaceDetailScreen';
import FolderCurationScreen from './components/FolderCurationScreen';
import SemanticSearchScreen from './components/SemanticSearchScreen';
import CompareScreen from './components/CompareScreen';
import InsightsScreen from './components/InsightsScreen';

type Screen = 'onboarding' | 'folder-management' | 'place-detail' | 'folder-curation' | 'search' | 'compare' | 'insights';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen />;
      case 'folder-management':
        return <FolderManagementScreen />;
      case 'place-detail':
        return <PlaceDetailScreen />;
      case 'folder-curation':
        return <FolderCurationScreen />;
      case 'search':
        return <SemanticSearchScreen />;
      case 'compare':
        return <CompareScreen />;
      case 'insights':
        return <InsightsScreen />;
      default:
        return <OnboardingScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col max-w-md mx-auto relative">
      {/* Top Navigation Bar for Demo */}
      <div className="bg-[#1c1c1c] p-3 overflow-x-auto flex gap-2 border-b border-[#2a2a2a]">
        <button
          onClick={() => setCurrentScreen('onboarding')}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
            currentScreen === 'onboarding' ? 'bg-[#007AFF] text-white' : 'bg-[#2a2a2a] text-gray-400'
          }`}
        >
          온보딩
        </button>
        <button
          onClick={() => setCurrentScreen('folder-management')}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
            currentScreen === 'folder-management' ? 'bg-[#007AFF] text-white' : 'bg-[#2a2a2a] text-gray-400'
          }`}
        >
          폴더 관리
        </button>
        <button
          onClick={() => setCurrentScreen('place-detail')}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
            currentScreen === 'place-detail' ? 'bg-[#007AFF] text-white' : 'bg-[#2a2a2a] text-gray-400'
          }`}
        >
          장소 상세
        </button>
        <button
          onClick={() => setCurrentScreen('folder-curation')}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
            currentScreen === 'folder-curation' ? 'bg-[#007AFF] text-white' : 'bg-[#2a2a2a] text-gray-400'
          }`}
        >
          AI 큐레이션
        </button>
        <button
          onClick={() => setCurrentScreen('search')}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
            currentScreen === 'search' ? 'bg-[#007AFF] text-white' : 'bg-[#2a2a2a] text-gray-400'
          }`}
        >
          검색
        </button>
        <button
          onClick={() => setCurrentScreen('compare')}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
            currentScreen === 'compare' ? 'bg-[#007AFF] text-white' : 'bg-[#2a2a2a] text-gray-400'
          }`}
        >
          비교
        </button>
        <button
          onClick={() => setCurrentScreen('insights')}
          className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap ${
            currentScreen === 'insights' ? 'bg-[#007AFF] text-white' : 'bg-[#2a2a2a] text-gray-400'
          }`}
        >
          인사이트
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#1c1c1c] border-t border-[#2a2a2a] px-4 py-3">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-[#007AFF]" />
            <span className="text-[10px] text-[#007AFF]">홈</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <FolderOpen className="w-6 h-6 text-gray-400" />
            <span className="text-[10px] text-gray-400">내 폴더</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Sparkles className="w-6 h-6 text-gray-400" />
            <span className="text-[10px] text-gray-400">AI 큐레이션</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Map className="w-6 h-6 text-gray-400" />
            <span className="text-[10px] text-gray-400">스마트 맵</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-[10px] text-gray-400">프로필</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
