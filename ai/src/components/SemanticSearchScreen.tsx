import { Search, Sparkles, Star, MapPin, Folder, X } from 'lucide-react';

export default function SemanticSearchScreen() {
  const activeFilters = [
    '4점 이상',
    '주차 가능',
  ];

  const results = [
    {
      name: '성수 카페 온리',
      folder: '업무하기 좋은',
      folderColor: '#FFE66D',
      location: '성수동',
      rating: 5,
      distance: '1.2km',
      tags: ['주차', '콘센트', '조용함'],
    },
    {
      name: '한남동 브런치 카페',
      folder: '좋아하는 카페',
      folderColor: '#FF6B9D',
      location: '한남동',
      rating: 4,
      distance: '2.3km',
      tags: ['주차', '브런치', '분위기'],
    },
    {
      name: '망원 로스터리',
      folder: '좋아하는 카페',
      folderColor: '#FF6B9D',
      location: '망원동',
      rating: 5,
      distance: '3.1km',
      tags: ['주차', '스페셜티', '넓음'],
    },
    {
      name: '이태원 갤러리 카페',
      folder: '데이트 장소',
      folderColor: '#9D4EDD',
      location: '이태원',
      rating: 4,
      distance: '3.8km',
      tags: ['주차', '전망', '특별함'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Search Header */}
      <div className="bg-[#1c1c1c] p-6 border-b border-[#2a2a2a] sticky top-0 z-10">
        <div className="relative mb-3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="카페에서 4점 이상이고 주차 가능한..."
            className="w-full bg-[#121212] border border-[#2a2a2a] rounded-2xl pl-12 pr-4 py-3.5 text-sm focus:border-[#007AFF] focus:outline-none text-white placeholder:text-gray-600"
            defaultValue="카페에서 4점 이상이고 주차 가능한"
          />
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Sparkles className="w-4 h-4 text-[#007AFF]" />
            {activeFilters.map((filter, index) => (
              <div
                key={index}
                className="bg-[#007AFF]/20 border border-[#007AFF]/30 text-[#007AFF] px-3 py-1 rounded-full text-xs flex items-center gap-2"
              >
                <span>{filter}</span>
                <X className="w-3 h-3 cursor-pointer hover:text-white" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Results Header */}
      <div className="p-6 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-sm text-gray-400">검색 결과</h2>
          <span className="text-xs bg-[#007AFF]/20 text-[#007AFF] px-2 py-0.5 rounded-full">
            {results.length}개
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#007AFF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI 필터링</span>
        </div>
      </div>

      {/* Results List */}
      <div className="px-6 pb-6 space-y-3">
        {results.map((place, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] rounded-2xl p-4 border border-[#2a2a2a] hover:border-[#007AFF]/50 transition-colors"
          >
            {/* Folder Badge */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                style={{
                  backgroundColor: `${place.folderColor}20`,
                  color: place.folderColor,
                }}
              >
                <Folder className="w-3.5 h-3.5" />
                <span>{place.folder}</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(place.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
            </div>

            {/* Place Info */}
            <h3 className="text-base mb-2">{place.name}</h3>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>{place.location}</span>
              <span>·</span>
              <span>{place.distance}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {place.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#121212] px-2.5 py-1 rounded-full text-gray-400 border border-[#2a2a2a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Search Suggestions */}
      <div className="px-6 pb-6">
        <h3 className="text-sm text-gray-400 mb-3">추천 검색</h3>
        <div className="space-y-2">
          {[
            '조용하고 콘센트 많은 카페',
            '데이트하기 좋은 분위기 맛집',
            '비 오는 날 가기 좋은 실내',
            '주차 편한 브런치 카페',
          ].map((suggestion, index) => (
            <button
              key={index}
              className="w-full bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl px-4 py-3 text-left text-sm text-gray-300 hover:border-[#007AFF] transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-gray-500" />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
