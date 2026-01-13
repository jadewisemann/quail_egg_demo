import { Sparkles, TrendingUp, Archive, Coffee, MapPin, Calendar, BarChart3 } from 'lucide-react';

export default function InsightsScreen() {
  const monthlyData = [
    { folder: '좋아하는 카페', visits: 28, color: '#FF6B9D' },
    { folder: '맛집', visits: 22, color: '#FF6B6B' },
    { folder: '업무하기 좋은', visits: 18, color: '#FFE66D' },
    { folder: '데이트 장소', visits: 12, color: '#9D4EDD' },
    { folder: '비 오는 날', visits: 5, color: '#4ECDC4' },
  ];

  const maxVisits = Math.max(...monthlyData.map(d => d.visits));

  const insights = [
    {
      icon: Coffee,
      title: '가장 자주 방문',
      value: '성수 카페 온리',
      detail: '이번 달 12회 방문',
      color: '#007AFF',
    },
    {
      icon: Calendar,
      title: '선호하는 요일',
      value: '월요일 오전',
      detail: '업무 장소 방문 패턴',
      color: '#FFE66D',
    },
    {
      icon: MapPin,
      title: '주요 활동 지역',
      value: '성수동, 망원동',
      detail: '전체 방문의 68%',
      color: '#4ECDC4',
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-6">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-6 h-6 text-[#007AFF]" />
          <h1 className="text-2xl">월간 리포트</h1>
        </div>
        <p className="text-sm text-gray-400">2026년 1월</p>
      </div>

      {/* Summary Cards */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-br from-[#007AFF]/20 to-[#9D4EDD]/20 rounded-2xl p-5 border border-[#007AFF]/30">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-1">85</div>
              <div className="text-xs text-gray-400">총 방문</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-2xl mb-1">24</div>
              <div className="text-xs text-gray-400">새 장소</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">2,148</div>
              <div className="text-xs text-gray-400">저장된 장소</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Insights */}
      <div className="px-6 mb-6">
        <h2 className="text-sm text-gray-400 mb-3">주요 인사이트</h2>
        <div className="grid grid-cols-1 gap-3">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] rounded-2xl p-4 border border-[#2a2a2a] flex items-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${insight.color}20` }}
              >
                <insight.icon className="w-6 h-6" style={{ color: insight.color }} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-400 mb-0.5">{insight.title}</div>
                <div className="text-sm mb-0.5">{insight.value}</div>
                <div className="text-xs text-gray-500">{insight.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Visited Folders Chart */}
      <div className="px-6 mb-6">
        <h2 className="text-sm text-gray-400 mb-3">가장 많이 방문한 폴더</h2>
        <div className="bg-[#1c1c1c] rounded-2xl p-5 border border-[#2a2a2a]">
          <div className="space-y-4">
            {monthlyData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.folder}</span>
                  </div>
                  <span className="text-sm text-gray-400">{item.visits}회</span>
                </div>
                <div className="relative w-full bg-[#2a2a2a] rounded-full h-2 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(item.visits / maxVisits) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="px-6">
        <h2 className="text-sm text-gray-400 mb-3">AI 제안</h2>
        
        {/* Archive Suggestion */}
        <div className="bg-[#1c1c1c] rounded-2xl p-5 border border-[#2a2a2a] mb-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#007AFF]/10 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#007AFF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-[#007AFF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm mb-1">1년 이상 미방문 장소 정리</h3>
                <p className="text-xs text-gray-400">
                  42개 장소를 1년 넘게 방문하지 않았습니다
                </p>
              </div>
            </div>

            <button className="w-full bg-[#007AFF]/20 border border-[#007AFF]/30 text-[#007AFF] py-2.5 rounded-xl text-sm hover:bg-[#007AFF]/30 transition-colors flex items-center justify-center gap-2">
              <Archive className="w-4 h-4" />
              <span>보관함으로 이동</span>
            </button>
          </div>
        </div>

        {/* New Discoveries */}
        <div className="bg-[#1c1c1c] rounded-2xl p-5 border border-[#2a2a2a] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#9D4EDD]/10 rounded-full blur-2xl" />
          
          <div className="relative">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#9D4EDD]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-[#9D4EDD]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm mb-1">새로운 취향 발견</h3>
                <p className="text-xs text-gray-400">
                  최근 갤러리·전시 공간 방문이 증가했습니다
                </p>
              </div>
            </div>

            <button className="w-full bg-[#9D4EDD]/20 border border-[#9D4EDD]/30 text-[#9D4EDD] py-2.5 rounded-xl text-sm hover:bg-[#9D4EDD]/30 transition-colors flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>관련 장소 추천받기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Export Report */}
      <div className="px-6 mt-6">
        <button className="w-full bg-[#2a2a2a] text-gray-300 py-3 rounded-xl text-sm hover:bg-[#333] transition-colors">
          전체 리포트 내보내기
        </button>
      </div>
    </div>
  );
}
