import { Sparkles, FolderHeart, Cloud, Briefcase, Gem } from 'lucide-react';

export default function OnboardingScreen() {
  const progress = 2148;
  const progressPercent = 68;

  const suggestedFolders = [
    { icon: FolderHeart, name: '좋아하는 카페', count: 247, color: '#FF6B9D' },
    { icon: Cloud, name: '비 오는 날 장소', count: 89, color: '#4ECDC4' },
    { icon: Briefcase, name: '업무하기 좋은', count: 156, color: '#FFE66D' },
    { icon: Gem, name: '숨은 명소', count: 203, color: '#9D4EDD' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] p-6 pt-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl mb-2 flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-[#007AFF]" />
          AI 스마트 정리
        </h1>
        <p className="text-sm text-gray-400">
          저장된 장소를 AI가 자동으로 분류해드립니다
        </p>
      </div>

      {/* Progress Ring */}
      <div className="bg-[#1c1c1c] rounded-2xl p-8 mb-6 relative overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/10 to-transparent" />
        
        <div className="relative flex flex-col items-center">
          <div className="relative w-40 h-40 mb-4">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#2a2a2a"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - progressPercent / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007AFF" />
                  <stop offset="100%" stopColor="#9D4EDD" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-4xl mb-1">{progress.toLocaleString()}</div>
              <div className="text-xs text-gray-400">저장된 장소</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-300 mb-1">
              분석 완료 <span className="text-[#007AFF]">{progressPercent}%</span>
            </p>
            <p className="text-xs text-gray-500">
              약 {Math.ceil((100 - progressPercent) / 10)} 분 남음
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Folders */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-400 mb-3">AI 추천 폴더</h2>
        <div className="space-y-3">
          {suggestedFolders.map((folder, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] rounded-2xl p-4 flex items-center gap-4 border border-[#2a2a2a] hover:border-[#007AFF]/50 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${folder.color}20` }}
              >
                <folder.icon className="w-6 h-6" style={{ color: folder.color }} />
              </div>
              <div className="flex-1">
                <div className="text-sm mb-0.5">{folder.name}</div>
                <div className="text-xs text-gray-400">{folder.count}개 장소 예상</div>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#007AFF]" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-gradient-to-r from-[#007AFF] to-[#9D4EDD] text-white py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#007AFF]/20">
        <Sparkles className="w-5 h-5" />
        <span>자동 정리 시작하기</span>
      </button>

      {/* Info */}
      <p className="text-xs text-center text-gray-500 mt-4">
        기존 장소는 그대로 유지되며 복사본이 폴더에 추가됩니다
      </p>
    </div>
  );
}
