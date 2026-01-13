import { Sparkles, Star, MapPin, TrendingUp, Wifi, Coffee, Zap } from 'lucide-react';

export default function FolderCurationScreen() {
  const topPicks = [
    {
      name: '성수 카페 온리',
      location: '성수동',
      matchScore: 98,
      rating: 5,
      distance: '1.2km',
      reason: '5점 평가와 12회 방문 기록',
      features: ['콘센트', '조용함', '주차'],
      image: '☕',
    },
    {
      name: '망원 코워킹 스페이스',
      location: '망원동',
      matchScore: 95,
      rating: 5,
      distance: '2.8km',
      reason: '월요일 오전 방문 패턴 일치',
      features: ['와이파이', '회의실', '무료음료'],
      image: '💼',
    },
    {
      name: '한남동 북카페',
      location: '한남동',
      matchScore: 92,
      rating: 4,
      distance: '3.1km',
      reason: '조용한 환경 선호도 반영',
      features: ['조용함', '콘센트', '장시간'],
      image: '📚',
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-6">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Coffee className="w-6 h-6 text-[#FFE66D]" />
          <h1 className="text-2xl">업무하기 좋은</h1>
        </div>
        <p className="text-sm text-gray-400">156개 장소</p>
      </div>

      {/* AI Curation Header */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-r from-[#007AFF]/20 to-[#9D4EDD]/20 rounded-2xl p-5 border border-[#007AFF]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF]/20 rounded-full blur-3xl" />
          
          <div className="relative flex items-start gap-3">
            <div className="w-10 h-10 bg-[#007AFF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-sm mb-1">이번 월요일 오전에 최적</h2>
              <p className="text-xs text-gray-400">
                당신의 방문 패턴과 평가를 분석한 맞춤 추천입니다
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Picks */}
      <div className="px-6">
        <h2 className="text-sm text-gray-400 mb-4">AI 추천 순위</h2>
        
        <div className="space-y-4">
          {topPicks.map((place, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#007AFF]/50 transition-colors"
            >
              {/* Match Score Badge */}
              <div className="bg-gradient-to-r from-[#007AFF] to-[#9D4EDD] p-4 relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                      {place.image}
                    </div>
                    <div>
                      <div className="text-xs text-white/70 mb-0.5">매칭 점수</div>
                      <div className="text-2xl">{place.matchScore}%</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      {[...Array(place.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                    <div className="text-xs text-white/70">내 평가</div>
                  </div>
                </div>
              </div>

              {/* Place Info */}
              <div className="p-4">
                <h3 className="text-base mb-1">{place.name}</h3>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{place.location}</span>
                  <span>·</span>
                  <span>{place.distance}</span>
                </div>

                {/* AI Reason */}
                <div className="bg-[#121212] rounded-xl p-3 mb-3 border border-[#007AFF]/20">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-[#007AFF] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">AI가 선택한 이유</div>
                      <div className="text-xs text-[#007AFF]">{place.reason}</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {place.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#121212] px-2.5 py-1 rounded-full text-gray-400 border border-[#2a2a2a]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-4 pb-4">
                <button className="w-full bg-[#007AFF] text-white py-2.5 rounded-xl text-sm hover:bg-[#0066DD] transition-colors">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Options */}
      <div className="px-6 mt-6">
        <button className="w-full bg-[#1c1c1c] border border-[#2a2a2a] text-gray-400 py-3 rounded-xl text-sm hover:border-[#007AFF] transition-colors">
          더 많은 추천 보기
        </button>
      </div>
    </div>
  );
}
