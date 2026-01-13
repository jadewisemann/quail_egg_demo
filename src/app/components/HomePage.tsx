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
              className="flex items-center justify-center w-5 h-5"
            >
              {isExpanded ? <ChevronDown className="w-5 h-5 text-zinc-400" /> : <ChevronRight className="w-5 h-5 text-zinc-400" />}
            </button>
          )}
          <span className="text-2xl">{folder?.icon}</span>
          <span className="flex-1 text-left text-base font-medium">{folder?.name}</span>
          <span className="text-[13px] text-zinc-400 font-medium">
            {folder?.placeCount}개
          </span>
        </div>
        {isExpanded && (
          <div className="mt-1">
            {subFolders.map(folder => renderFolderTree(folder.id, level + 1))}
            {places.map(place => (
              <div
                key={place.id}
                className="flex items-start gap-3 p-3 hover:bg-zinc-50 rounded-lg cursor-pointer"
                style={{ paddingLeft: `${(level + 1) * 16 + 40}px` }}
                onClick={() => onNavigateToPlace(place.id)}
              >
                <img src={place.image} alt={place.name} className="w-14 h-14 rounded-xl object-cover shadow-sm" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="font-bold text-base truncate text-zinc-900">{place.name}</h4>
                    {place.rating && (
                      <span className="text-sm text-amber-500 font-bold flex items-center gap-0.5">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        {place.rating}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 truncate mb-1.5">{place.address}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {place.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[11px] h-5 px-1.5 font-semibold">
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
    <div className="bg-white pb-10">
      {/* Header with Search */}
      <div className="sticky top-0 bg-white z-10 border-b border-zinc-100 shadow-sm">
        <div className="p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-400" />
            <input
              type="text"
              placeholder="강남역 조용한 카페, 저장한 파스타집..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-12 pr-4 py-4 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none text-zinc-900 placeholder:text-zinc-500 transition-all font-medium"
            />
          </div>

          {/* Smart Filter Chips */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            <Button variant="outline" size="sm" className="whitespace-nowrap px-4 h-9 rounded-full text-sm font-semibold">
              📍현위치 주변
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap px-4 h-9 rounded-full text-sm font-semibold">
              ⭐최근 저장
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap px-4 h-9 rounded-full text-sm font-semibold">
              🏷️자주 찾는 태그
            </Button>
          </div>
        </div>

        {/* AI Context Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mx-6 mb-4 rounded-r-xl shadow-sm">
          <p className="text-[14px] text-blue-900 font-bold leading-relaxed">
            💡 저장하신 '성수동' 리스트 중 3곳이 현재 영업 중이에요!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Quick Folder Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-4 px-1">내 리스트</h2>
          <div className="grid grid-cols-2 gap-4">
            {topLevelFolders.map(folder => (
              <Card
                key={folder.id}
                className="p-5 cursor-pointer hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 border-zinc-100 rounded-2xl bg-white"
                onClick={() => onNavigateToFolder(folder.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-5xl mb-3 filter drop-shadow-sm">{folder.icon}</span>
                  <h3 className="font-bold text-base mb-1 text-zinc-800">{folder.name}</h3>
                  <p className="text-sm text-zinc-400 font-medium">{folder.placeCount}개의 장소</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Structured List View */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-zinc-900 mb-4 px-1">전체 리스트</h2>
          <div className="space-y-1">
            {topLevelFolders.map(folder => renderFolderTree(folder.id))}
          </div>
        </div>
      </div>
    </div>
  );
}