import { Search, Sparkles, Star, MapPin, Folder, X, Filter } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { Badge } from '@/app/components/ui/badge';
import { mockPlaces, mockFolders } from '@/app/mockData';
import { Place } from '@/app/types';
import { hangulIncludes } from '@/app/utils/hangul';

interface SemanticSearchProps {
    onNavigateToPlace: (placeId: string) => void;
    initialQuery?: string;
}

export function SemanticSearch({ onNavigateToPlace, initialQuery = '' }: SemanticSearchProps) {
    const [searchValue, setSearchValue] = useState(initialQuery);
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    useEffect(() => {
        if (initialQuery !== undefined) {
            setSearchValue(initialQuery);
            setActiveFilters([]); // Ensure no tags are pre-selected when navigating from outside
        }
    }, [initialQuery]);

    const availableTags = ['카공', '조용함', '데이트', '주차', '베이커리', '루프탑', '콘센트많음', '분위기'];

    const filteredResults = useMemo(() => {
        return mockPlaces.filter((place: Place) => {
            const searchLower = searchValue.toLowerCase();
            const matchesSearch = searchValue === '' ||
                hangulIncludes(place.name, searchValue) ||
                hangulIncludes(place.address, searchValue) ||
                place.tags.some((t: string) => hangulIncludes(t, searchValue)) ||
                (place.memo && hangulIncludes(place.memo, searchValue));

            const matchesFilters = activeFilters.length === 0 ||
                activeFilters.every((filter: string) =>
                    place.tags.some((t: string) => hangulIncludes(t, filter)) ||
                    (place.aiTags && place.aiTags.some((t: string) => hangulIncludes(t, filter))) ||
                    hangulIncludes(place.name, filter)
                );

            return matchesSearch && matchesFilters;
        });
    }, [searchValue, activeFilters]);

    const toggleFilter = (filter: string) => {
        setActiveFilters(prev =>
            prev.includes(filter)
                ? prev.filter(f => f !== filter)
                : [...prev, filter]
        );
    };

    const handleSuggestionClick = (suggestion: string) => {
        setSearchValue(suggestion);
        setActiveFilters([]); // Clear any existing filters when clicking a suggestion
    };

    return (
        <div className="bg-white">
            {/* Search Header */}
            <div className="bg-white p-6 border-b border-zinc-200 sticky top-0 z-20 shadow-sm">
                <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="어떤 장소를 찾으시나요?"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-12 pr-12 py-4 text-base focus:border-brand focus:ring-2 focus:ring-brand-light focus:outline-none text-zinc-900 placeholder:text-zinc-500 transition-all font-bold"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {searchValue && (
                        <button
                            onClick={() => setSearchValue('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-zinc-200 rounded-full"
                        >
                            <X className="w-4 h-4 text-zinc-400" />
                        </button>
                    )}
                </div>

                {/* Tag Selection Row */}
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide mb-3">
                    {availableTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => toggleFilter(tag)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${activeFilters.includes(tag)
                                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100'
                                : 'bg-white border-zinc-200 text-zinc-600 hover:border-blue-300 hover:text-blue-600'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Active Filter Badges */}
                {activeFilters.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wider mr-1">
                            <Filter className="w-4 h-4" />
                            <span>적용됨</span>
                        </div>
                        {activeFilters.map((filter, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="bg-brand-light text-brand border-brand/20 px-2.5 py-1 rounded-full text-[11px] flex items-center gap-1.5 font-medium animate-in fade-in zoom-in duration-200"
                            >
                                <span>{filter}</span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFilter(filter);
                                    }}
                                    className="p-1 -mr-1 hover:bg-brand/20 rounded-full transition-colors flex items-center justify-center"
                                >
                                    <X className="w-4 h-4 text-brand/60 hover:text-brand" />
                                </button>
                            </Badge>
                        ))}
                        <button
                            onClick={() => setActiveFilters([])}
                            className="text-[11px] text-zinc-400 hover:text-zinc-600 underline font-medium ml-1"
                        >
                            초기화
                        </button>
                    </div>
                )}
            </div>

            {/* Results Header */}
            <div className="p-6 pb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="text-base font-bold text-zinc-500">검색 결과</h2>
                    <span className="text-xs bg-brand-light text-brand px-3 py-1 rounded-full font-bold">
                        {filteredResults.length}개
                    </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-brand-light to-zinc-50 rounded-full border border-brand/20">
                    <Sparkles className="w-3.5 h-3.5 text-brand" />
                    <span className="text-[11px] text-brand font-bold">AI 최적화</span>
                </div>
            </div>

            {/* Results List */}
            <div className="px-6 pb-6 space-y-4">
                {filteredResults.length > 0 ? (
                    filteredResults.map((place) => (
                        <div
                            key={place.id}
                            onClick={() => onNavigateToPlace(place.id)}
                            className="group bg-white rounded-2xl p-4 border border-zinc-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer active:scale-[0.98]"
                        >
                            {/* Folder Badge & Rating */}
                            <div className="flex items-center justify-between mb-3">
                                {(() => {
                                    const folder = mockFolders.find(f => f.id === place.folderId);
                                    return (
                                        <div
                                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
                                            style={{
                                                backgroundColor: `${folder?.color || '#3b82f6'}15`,
                                                color: folder?.color || '#3b82f6',
                                            }}
                                        >
                                            <Folder className="w-3 h-3" />
                                            <span>{folder?.name || '기본'}</span>
                                        </div>
                                    );
                                })()}
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-3.5 h-3.5 ${place.rating && i < place.rating ? 'fill-amber-400 text-amber-400' : 'fill-zinc-100 text-zinc-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Place Info */}
                            <h3 className="text-lg font-bold text-zinc-900 mb-1.5 group-hover:text-brand transition-colors">{place.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4 font-medium">
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-zinc-400" />
                                    <span className="truncate max-w-[200px]">{place.address}</span>
                                </div>
                                <span className="text-zinc-300">·</span>
                                <span className="whitespace-nowrap">{place.distance}</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {place.tags.filter(t => t !== '4점 이상').map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] px-2 py-0.5 bg-zinc-50 text-zinc-500 border border-zinc-100 rounded-md font-medium"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-20 text-center">
                        <div className="text-4xl mb-4 opacity-20">🔍</div>
                        <p className="text-sm font-medium text-zinc-400">필터에 맞는 장소가 없습니다</p>
                        <button
                            onClick={() => setActiveFilters([])}
                            className="mt-4 text-xs font-bold text-brand hover:underline"
                        >
                            필터 초기화하기
                        </button>
                    </div>
                )}
            </div>

            {/* Search Suggestions */}
            <div className="px-6 pb-6">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-bold text-zinc-800">이런 장소는 어때요?</h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                    {[
                        '조용하고 콘센트 많은 카페',
                        '데이트하기 좋은 분위기 맛집',
                        '비 오는 날 가기 좋은 실내',
                        '주차 편한 브런치 카페',
                    ].map((suggestion, index) => (
                        <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="group w-full bg-white border border-zinc-200 rounded-2xl px-4 py-3.5 text-left text-sm text-zinc-700 hover:border-blue-400 hover:bg-blue-50/30 transition-all flex items-center justify-between shadow-sm"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-zinc-50 group-hover:bg-white rounded-xl transition-colors">
                                    <Search className="w-4 h-4 text-zinc-400 group-hover:text-blue-500" />
                                </div>
                                <span className="font-medium group-hover:text-zinc-900 transition-colors">{suggestion}</span>
                            </div>
                            <X className="w-4 h-4 text-zinc-300 opacity-0 group-hover:opacity-100" />
                        </button>
                    ))}
                </div>
            </div>


        </div>
    );
}
