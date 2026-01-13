import { Star, MapPin, Clock, Wifi, Zap, Eye, Calendar } from 'lucide-react';

export default function PlaceDetailScreen() {
  const privateRating = 4;
  const aiTags = [
    { name: '#조용함', icon: '🤫' },
    { name: '#전망좋음', icon: '🏞️' },
    { name: '#콘센트많음', icon: '🔌' },
    { name: '#장시간작업가능', icon: '⏰' },
  ];

  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header Image */}
      <div className="h-48 bg-gradient-to-br from-[#007AFF]/20 to-[#9D4EDD]/20 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="w-16 h-16 text-white/30" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Location */}
        <div className="mb-6">
          <h1 className="text-2xl mb-2">성수 카페 온리</h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>서울 성수동 · 카페</span>
          </div>
        </div>

        {/* Private Rating Section */}
        <div className="bg-[#1c1c1c] rounded-2xl p-5 mb-4 border border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm">나만의 평가</h2>
            <span className="text-xs text-gray-500">비공개</span>
          </div>
          
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= privateRating
                      ? 'fill-[#FFD700] text-[#FFD700]'
                      : 'text-gray-600'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Visit Stats */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#2a2a2a]">
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">방문 횟수</div>
              <div className="text-lg text-[#007AFF]">12회</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">최근 방문</div>
              <div className="text-sm">3일 전</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400 mb-1">첫 저장</div>
              <div className="text-sm">2023.03</div>
            </div>
          </div>
        </div>

        {/* AI Generated Tags */}
        <div className="bg-[#1c1c1c] rounded-2xl p-5 mb-4 border border-[#2a2a2a] relative overflow-hidden">
          {/* Subtle AI glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF]/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-[#007AFF]" />
              <h2 className="text-sm">AI 추천 태그</h2>
              <span className="text-xs text-gray-500">방문 기록 기반</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {aiTags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-[#007AFF]/10 border border-[#007AFF]/30 text-[#007AFF] px-3 py-1.5 rounded-full text-xs flex items-center gap-1"
                >
                  <span>{tag.icon}</span>
                  <span>{tag.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Private Memo */}
        <div className="bg-[#1c1c1c] rounded-2xl p-5 border border-[#2a2a2a]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm">나만의 메모</h2>
            <Eye className="w-4 h-4 text-gray-500" />
          </div>
          
          <textarea
            placeholder="이 장소에 대한 나만의 기록을 남겨보세요..."
            className="w-full bg-[#121212] rounded-xl p-4 text-sm border border-[#2a2a2a] focus:border-[#007AFF] focus:outline-none resize-none h-32 text-gray-300 placeholder:text-gray-600"
            defaultValue="창가 자리가 최고. 오전 10시쯤 오면 2층 구석 자리 잡을 수 있음. 콘센트 많고 와이파이 빠름. 브런치 메뉴 맛있음. 주말엔 사람 많으니 평일 추천."
          />

          <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            <span>마지막 수정: 2일 전</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl py-3 text-sm hover:border-[#007AFF] transition-colors flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>방문 기록</span>
          </button>
          <button className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl py-3 text-sm hover:border-[#007AFF] transition-colors flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>지도에서 보기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
