import { ChevronRight, ChevronDown, ChevronLeft, List, MapPin, Edit3, MoreVertical, Star, FolderOpen } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { getSubFolders, getPlacesByFolder, getBreadcrumbs, getFolderById } from '@/app/mockData';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/app/components/ui/collapsible';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/app/components/ui/dropdown-menu';

interface ListDetailPageProps {
  folderId: string;
  onNavigateBack: () => void;
  onNavigateToFolder: (folderId: string) => void;
  onNavigateToPlace: (placeId: string) => void;
  onNavigateToBreadcrumb: (folderId: string) => void;
}

export function ListDetailPage({
  folderId,
  onNavigateBack,
  onNavigateToFolder,
  onNavigateToPlace,
  onNavigateToBreadcrumb
}: ListDetailPageProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [editMode, setEditMode] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const currentFolder = getFolderById(folderId);
  const subFolders = getSubFolders(folderId);
  const places = getPlacesByFolder(folderId);
  const breadcrumbs = getBreadcrumbs(folderId);

  const toggleFolder = (id: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFolders(newExpanded);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b border-zinc-200">
        <div className="flex items-center gap-3 p-4">
          <Button variant="ghost" size="icon" onClick={onNavigateBack}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold flex-1">{currentFolder?.name}</h1>
          <Button
            variant={editMode ? "default" : "ghost"}
            size="icon"
            onClick={() => setEditMode(!editMode)}
          >
            <Edit3 className="w-5 h-5" />
          </Button>
        </div>

        {/* Breadcrumb */}
        <div className="px-4 pb-3 overflow-x-auto">
          <Breadcrumb>
            <BreadcrumbList className="flex-nowrap">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.id} className="flex items-center gap-2">
                  {index > 0 && <BreadcrumbSeparator />}
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage className="whitespace-nowrap">{crumb.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      onClick={() => crumb.id === 'home' ? onNavigateBack() : onNavigateToBreadcrumb(crumb.id)}
                      className="cursor-pointer whitespace-nowrap"
                    >
                      {crumb.name}
                    </BreadcrumbLink>
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-2 px-4 pb-3">
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="flex-1"
          >
            <List className="w-4 h-4 mr-2" />
            리스트 보기
          </Button>
          <Button
            variant={viewMode === 'map' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('map')}
            className="flex-1"
          >
            <MapPin className="w-4 h-4 mr-2" />
            지도 위 핀 보기
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {viewMode === 'map' ? (
          /* Map View - Enhanced Mockup */
          <div className="relative h-[calc(100vh-180px)] -mx-4 -mb-4 -mt-4 overflow-hidden bg-[#E5E5E5]">
            {/* Map Background */}
            <div className="absolute inset-0">
              <img
                src="/map_bg.png"
                alt="Map Background"
                className="w-full h-full object-cover"
              />

              {/* Map Pins */}
              {places.map((place, index) => {
                const left = 20 + (index * 25) % 65;
                const top = 20 + (index * 30) % 60;

                return (
                  <div
                    key={place.id}
                    className="absolute z-10 group"
                    style={{ left: `${left}%`, top: `${top}%` }}
                    onClick={() => onNavigateToPlace(place.id)}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-full cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-[110%]">
                      {/* Custom Pin Shape */}
                      <div className="w-11 h-11 bg-red-600 rounded-full rounded-bl-none transform rotate-45 border-[3px] border-white shadow-xl flex items-center justify-center">
                        <span className="transform -rotate-45 text-white font-bold text-sm leading-none">
                          {place.rating || index + 1}
                        </span>
                      </div>
                      {/* Shadow */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/30 rounded-full blur-[2px]" />

                      {/* Simple Tooltip Name */}
                      <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded shadow-md text-xs font-bold text-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-zinc-100 mb-1 z-20">
                        {place.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
              <Button size="icon" variant="secondary" className="bg-white/90 backdrop-blur shadow-md rounded-full border border-zinc-100 w-10 h-10">
                <span className="text-xl leading-none mb-0.5">+</span>
              </Button>
              <Button size="icon" variant="secondary" className="bg-white/90 backdrop-blur shadow-md rounded-full border border-zinc-100 w-10 h-10">
                <span className="text-xl leading-none mb-0.5">−</span>
              </Button>
            </div>

            {/* Current Location */}
            <div className="absolute top-4 left-4 z-20">
              <Button size="icon" className="bg-white/90 text-blue-600 backdrop-blur shadow-md rounded-full border border-zinc-100 w-10 h-10 hover:bg-white">
                <MapPin className="w-5 h-5" />
              </Button>
            </div>

            {/* Floating Bottom List Carousel */}
            <div className="absolute bottom-0 left-0 right-0 z-30 pb-6 pt-4 bg-gradient-to-t from-black/20 to-transparent">
              <div className="flex overflow-x-auto px-6 gap-3 snap-x snap-mandatory scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {places.map(place => (
                  <div
                    key={place.id}
                    className="flex-none w-[85%] sm:w-[320px] snap-center bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer active:scale-95 transition-transform border border-zinc-100/50"
                    onClick={() => onNavigateToPlace(place.id)}
                  >
                    <div className="flex h-28">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-28 h-28 object-cover"
                      />
                      <div className="flex-1 p-3.5 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex justify-between items-start mb-0.5">
                            <h4 className="font-bold text-zinc-900 text-base truncate pr-2">{place.name}</h4>
                            {place.rating && (
                              <div className="flex items-center gap-0.5 bg-zinc-50 px-1.5 py-0.5 rounded-md">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                <span className="text-xs font-bold text-zinc-700">{place.rating}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-zinc-500 truncate">{place.address}</p>
                        </div>

                        <div className="flex items-end justify-between">
                          <div className="flex gap-1.5 overflow-hidden">
                            {place.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-[11px] px-1.5 py-0.5 bg-zinc-100 text-zinc-600 rounded-md font-medium whitespace-nowrap">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {place.distance && (
                            <span className="text-xs font-semibold text-zinc-400 whitespace-nowrap pl-2">{place.distance}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Spacer for end of list */}
                <div className="w-2 flex-none" />
              </div>
            </div>
          </div>
        ) : (
          /* List View */
          <>
            {/* Sub Folders */}
            {subFolders.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-zinc-500 mb-3 flex items-center gap-2">
                  <FolderOpen className="w-4 h-4" />
                  하위 폴더 ({subFolders.length})
                </h3>
                <div className="space-y-2">
                  {subFolders.map(folder => (
                    <div
                      key={folder.id}
                      className="flex items-center gap-3 p-4 bg-zinc-50 rounded-lg cursor-pointer hover:bg-zinc-100 transition-colors"
                      onClick={() => onNavigateToFolder(folder.id)}
                    >
                      <span className="text-2xl">{folder.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium">{folder.name}</h4>
                        <p className="text-sm text-zinc-500">{folder.placeCount}개의 장소</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-zinc-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Places */}
            {places.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-zinc-500 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  장소 ({places.length})
                </h3>
                <div className="space-y-3">
                  {places.map(place => (
                    <div
                      key={place.id}
                      className="flex gap-3 p-3 bg-white border border-zinc-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => onNavigateToPlace(place.id)}
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-medium">{place.name}</h4>
                          {editMode && (
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>폴더 이동</DropdownMenuItem>
                                <DropdownMenuItem>태그 수정</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">삭제</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          {place.rating && (
                            <span className="text-sm text-amber-500 flex items-center gap-0.5">
                              <Star className="w-3 h-3 fill-current" />
                              {place.rating}
                            </span>
                          )}
                          {place.distance && (
                            <span className="text-sm text-zinc-500">{place.distance}</span>
                          )}
                        </div>
                        <p className="text-sm text-zinc-500 mb-2 line-clamp-1">{place.address}</p>
                        <div className="flex gap-1 flex-wrap">
                          {place.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                          {place.aiTags?.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs text-blue-600 border-blue-200">
                              ✨#{tag}
                            </Badge>
                          ))}
                        </div>
                        {place.memo && (
                          <p className="text-sm text-zinc-600 mt-2 line-clamp-2 italic">
                            "{place.memo}"
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {subFolders.length === 0 && places.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📂</div>
                <h3 className="font-medium mb-2">이 폴더는 비어있어요</h3>
                <p className="text-sm text-zinc-500 mb-4">장소를 추가하거나 하위 폴더를 만들어보세요</p>
                <Button>+ 장소 추가</Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}