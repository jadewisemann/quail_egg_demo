import { Star, MapPin, Calendar, TrendingUp, Clock, Users, Zap } from 'lucide-react';

export default function CompareScreen() {
  const place1 = {
    name: '성수 카페 온리',
    location: '서울 성수동',
    rating: 5,
    visitCount: 12,
    lastVisit: '3일 전',
    traffic: '보통',
    trafficLevel: 50,
    distance: '1.2km',
    features: ['콘센트', '조용함', '주차', '장시간'],
  };

  const place2 = {
    name: '망원 코워킹 스페이스',
    location: '서울 망원동',
    rating: 5,
    visitCount: 8,
    lastVisit: '1주 전',
    traffic: '한산함',
    trafficLevel: 20,
    distance: '2.8km',
    features: ['와이파이', '회의실', '무료음료', '프린터'],
  };

  const aiPick = place1;

  return (
    <div className="min-h-screen bg-[#121212] pb-6">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-[#2a2a2a]">
        <h1 className="text-2xl mb-1">장소 비교</h1>
        <p className="text-sm text-gray-400">최적의 선택을 도와드립니다</p>
      </div>

      {/* AI Final Pick */}
      <div className="p-6 pb-4">
        <div className="bg-gradient-to-r from-[#007AFF]/20 to-[#9D4EDD]/20 rounded-2xl p-5 border border-[#007AFF]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AFF]/20 rounded-full blur-3xl" />
          
          <div className="relative flex items-center gap-3">
            <div className="w-12 h-12 bg-[#007AFF] rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-400 mb-1">AI 최종 추천</div>
              <div className="text-base">{aiPick.name}</div>
              <div className="text-xs text-[#007AFF] mt-1">
                방문 기록과 현재 혼잡도 기준 최적
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="px-6 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {/* Place 1 */}
          <div className={`bg-[#1c1c1c] rounded-2xl overflow-hidden border-2 ${
            aiPick === place1 ? 'border-[#007AFF]' : 'border-[#2a2a2a]'
          }`}>
            {aiPick === place1 && (
              <div className="bg-[#007AFF] text-center py-1.5 text-xs">
                ✨ AI 추천
              </div>
            )}
            <div className="p-4">
              <div className="text-2xl mb-2 text-center">☕</div>
              <h3 className="text-sm mb-1 text-center truncate">{place1.name}</h3>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-3">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{place1.location}</span>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                {/* Rating */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">내 평가</div>
                  <div className="flex items-center gap-0.5 justify-center">
                    {[...Array(place1.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                </div>

                {/* Visit Count */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">방문 횟수</div>
                  <div className="text-xl text-center text-[#007AFF]">{place1.visitCount}회</div>
                </div>

                {/* Last Visit */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">최근 방문</div>
                  <div className="text-sm text-center">{place1.lastVisit}</div>
                </div>

                {/* Traffic */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">현재 혼잡도</div>
                  <div className="text-sm text-center mb-1">{place1.traffic}</div>
                  <div className="w-full bg-[#2a2a2a] rounded-full h-1.5">
                    <div
                      className="bg-[#FFE66D] h-1.5 rounded-full transition-all"
                      style={{ width: `${place1.trafficLevel}%` }}
                    />
                  </div>
                </div>

                {/* Distance */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">거리</div>
                  <div className="text-sm text-center">{place1.distance}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Place 2 */}
          <div className={`bg-[#1c1c1c] rounded-2xl overflow-hidden border-2 ${
            aiPick === place2 ? 'border-[#007AFF]' : 'border-[#2a2a2a]'
          }`}>
            {aiPick === place2 && (
              <div className="bg-[#007AFF] text-center py-1.5 text-xs">
                ✨ AI 추천
              </div>
            )}
            <div className="p-4">
              <div className="text-2xl mb-2 text-center">💼</div>
              <h3 className="text-sm mb-1 text-center truncate">{place2.name}</h3>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-3">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{place2.location}</span>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                {/* Rating */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">내 평가</div>
                  <div className="flex items-center gap-0.5 justify-center">
                    {[...Array(place2.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                </div>

                {/* Visit Count */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">방문 횟수</div>
                  <div className="text-xl text-center text-gray-400">{place2.visitCount}회</div>
                </div>

                {/* Last Visit */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">최근 방문</div>
                  <div className="text-sm text-center">{place2.lastVisit}</div>
                </div>

                {/* Traffic */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">현재 혼잡도</div>
                  <div className="text-sm text-center mb-1">{place2.traffic}</div>
                  <div className="w-full bg-[#2a2a2a] rounded-full h-1.5">
                    <div
                      className="bg-[#4ECDC4] h-1.5 rounded-full transition-all"
                      style={{ width: `${place2.trafficLevel}%` }}
                    />
                  </div>
                </div>

                {/* Distance */}
                <div>
                  <div className="text-xs text-gray-400 mb-1">거리</div>
                  <div className="text-sm text-center">{place2.distance}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-[#1c1c1c] rounded-2xl p-4 border border-[#2a2a2a]">
          <h3 className="text-sm text-gray-400 mb-3">주요 특징 비교</h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="flex flex-wrap gap-1.5">
                {place1.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#121212] px-2 py-1 rounded-full text-gray-300 border border-[#2a2a2a]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5">
                {place2.features.map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#121212] px-2 py-1 rounded-full text-gray-300 border border-[#2a2a2a]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className="bg-[#007AFF] text-white py-3 rounded-xl text-sm hover:bg-[#0066DD] transition-colors">
            {place1.name.split(' ')[0]} 선택
          </button>
          <button className="bg-[#1c1c1c] border border-[#2a2a2a] text-gray-300 py-3 rounded-xl text-sm hover:border-[#007AFF] transition-colors">
            {place2.name.split(' ')[0]} 선택
          </button>
        </div>
      </div>
    </div>
  );
}
