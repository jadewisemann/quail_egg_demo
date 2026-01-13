import { Search, MapPin, Star, Tag, Plus, Home, Map, Compass, Settings } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Card } from '@/app/components/ui/card';
import { mockFolders, mockPlaces, getSubFolders, getPlacesByFolder } from '@/app/mockData';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/app/components/ui/collapsible';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface HomePageProps {
  onNavigateToFolder: (folderId: string) => void;
  onNavigateToPlace: (placeId: string) => void;
}

export function HomePage({ onNavigateToFolder, onNavigateToPlace }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  const topLevelFolders = getSubFolders(null);

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFolderTree = (folderId: string, level: number = 0) => {
    const subFolders = getSubFolders(folderId);
    const places = getPlacesByFolder(folderId);
    const isExpanded = expandedFolders.has(folderId);
    const folder = mockFolders.find(f => f.id === folderId);

    return (
      <div key={folderId} className="mb-2">
        <div 
          className="flex items-center gap-2 p-3 hover:bg-zinc-50 rounded-lg cursor-pointer"
          style={{ paddingLeft: `${level * 16 + 12}px` }}
          onClick={() => onNavigateToFolder(folderId)}
        >
          {(subFolders.length > 0 || places.length > 0) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFolder(folderId);
              }}
              className="flex items-center justify-center w-4 h-4"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4 text-zinc-400" /> : <ChevronRight className="w-4 h-4 text-zinc-400" />}
            </button>
          )}
          <span className="text-xl">{folder?.icon}</span>
          <span className="flex-1 text-left">{folder?.name}</span>
          <span className="text-sm text-zinc-400">
            {folder?.placeCount}개
          </span>
        </div>
        {isExpanded && (
          <div>
            {subFolders.map(folder => renderFolderTree(folder.id, level + 1))}
            {places.map(place => (
              <div
                key={place.id}
                className="flex items-start gap-3 p-3 hover:bg-zinc-50 rounded-lg cursor-pointer"
                style={{ paddingLeft: `${(level + 1) * 16 + 36}px` }}
                onClick={() => onNavigateToPlace(place.id)}
              >
                <img src={place.image} alt={place.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium truncate">{place.name}</h4>
                    {place.rating && (
                      <span className="text-sm text-amber-500 flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-current" />
                        {place.rating}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 truncate">{place.address}</p>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {place.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header with Search */}
      <div className="sticky top-0 bg-white z-10 border-b border-zinc-200">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <Input
              type="text"
              placeholder="강남역 조용한 카페, 저장한 파스타집..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 text-base"
            />
          </div>

          {/* Smart Filter Chips */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              📍현위치 주변
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              ⭐최근 저장
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              🏷️자주 찾는 태그
            </Button>
          </div>
        </div>

        {/* AI Context Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mx-4 mb-3 rounded-r-lg">
          <p className="text-sm text-blue-900">
            💡 저장하신 '성수동' 리스트 중 3곳이 현재 영업 중이에요!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* Quick Folder Grid */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">내 리스트</h2>
          <div className="grid grid-cols-2 gap-3">
            {topLevelFolders.map(folder => (
              <Card
                key={folder.id}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigateToFolder(folder.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl mb-2">{folder.icon}</span>
                  <h3 className="font-medium mb-1">{folder.name}</h3>
                  <p className="text-sm text-zinc-500">{folder.placeCount}개의 장소</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Structured List View */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">전체 리스트</h2>
          <div className="space-y-1">
            {topLevelFolders.map(folder => renderFolderTree(folder.id))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Button
        size="lg"
        className="fixed bottom-20 right-4 rounded-full w-14 h-14 shadow-lg"
      >
        <Plus className="w-6 h-6" />
      </Button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-zinc-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xs text-blue-600">홈</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Map className="w-6 h-6 text-zinc-400" />
            <span className="text-xs text-zinc-400">지도 뷰</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Compass className="w-6 h-6 text-zinc-400" />
            <span className="text-xs text-zinc-400">탐색</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
            <Settings className="w-6 h-6 text-zinc-400" />
            <span className="text-xs text-zinc-400">설정</span>
          </Button>
        </div>
      </div>
    </div>
  );
}