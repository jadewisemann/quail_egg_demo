import { GripVertical, FolderOpen, Coffee, Umbrella, Briefcase, Sparkles } from 'lucide-react';

export default function FolderManagementScreen() {
  const unorganized = [
    { id: 1, name: '성수동 베이커리', category: '카페·베이커리', added: '3일 전' },
    { id: 2, name: '한남동 갤러리 카페', category: '문화공간', added: '5일 전' },
    { id: 3, name: '이태원 루프탑 바', category: '술집·바', added: '1주 전' },
    { id: 4, name: '망원동 서점', category: '서점·도서관', added: '2주 전' },
  ];

  const folders = [
    { icon: Coffee, name: '좋아하는 카페', count: 247, color: '#FF6B9D' },
    { icon: Umbrella, name: '비 오는 날', count: 89, color: '#4ECDC4' },
    { icon: Briefcase, name: '업무하기 좋은', count: 156, color: '#FFE66D' },
    { icon: FolderOpen, name: '데이트 장소', count: 134, color: '#9D4EDD' },
    { icon: FolderOpen, name: '맛집', count: 423, color: '#FF6B6B' },
    { icon: FolderOpen, name: '조용한 곳', count: 78, color: '#4DABF7' },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pb-6">
      {/* Header */}
      <div className="p-6 pb-4 border-b border-[#2a2a2a]">
        <h1 className="text-2xl mb-1">폴더 관리</h1>
        <p className="text-sm text-gray-400">드래그로 장소를 폴더에 추가하세요</p>
      </div>

      {/* Unorganized Section */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm text-gray-400">미분류 장소</h2>
          <span className="text-xs bg-[#007AFF]/20 text-[#007AFF] px-2 py-1 rounded-full">
            {unorganized.length}개
          </span>
        </div>
        
        <div className="space-y-2">
          {unorganized.map((place) => (
            <div
              key={place.id}
              className="bg-[#1c1c1c] rounded-xl p-3 flex items-center gap-3 border border-[#2a2a2a] active:scale-95 transition-transform"
            >
              <GripVertical className="w-5 h-5 text-gray-600" />
              <div className="flex-1 min-w-0">
                <div className="text-sm mb-0.5 truncate">{place.name}</div>
                <div className="text-xs text-gray-500">{place.category} · {place.added}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Folders Grid */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm text-gray-400">내 폴더</h2>
          <button className="text-xs text-[#007AFF] flex items-center gap-1">
            <span>+</span>
            <span>새 폴더</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {folders.map((folder, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] rounded-2xl p-4 border border-[#2a2a2a] hover:border-[#007AFF]/50 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${folder.color}20` }}
              >
                <folder.icon className="w-6 h-6" style={{ color: folder.color }} />
              </div>
              <div className="text-sm mb-1 truncate">{folder.name}</div>
              <div className="text-xs text-gray-400">{folder.count}개</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating AI Button */}
      <button className="fixed bottom-24 right-6 bg-gradient-to-r from-[#007AFF] to-[#9D4EDD] text-white p-4 rounded-full shadow-2xl shadow-[#007AFF]/40 flex items-center gap-2 hover:scale-105 transition-transform">
        <Sparkles className="w-5 h-5" />
        <span className="text-sm pr-1">AI 자동 분류</span>
      </button>
    </div>
  );
}
