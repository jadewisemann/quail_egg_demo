import { Sparkles, TrendingUp, Archive, Coffee, MapPin, Calendar, BarChart3 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Insights() {
    const monthlyData = [
        { folder: '좋아하는 카페', visits: 28, color: '#f472b6' }, // pink-400
        { folder: '맛집', visits: 22, color: '#f87171' }, // red-400
        { folder: '업무하기 좋은', visits: 18, color: '#facc15' }, // yellow-400
        { folder: '데이트 장소', visits: 12, color: '#a855f7' }, // purple-500
        { folder: '비 오는 날', visits: 5, color: '#2dd4bf' }, // teal-400
    ];

    const maxVisits = Math.max(...monthlyData.map(d => d.visits));

    const insights = [
        {
            icon: Coffee,
            title: '가장 자주 방문',
            value: '성수 카페 온리',
            detail: '이번 달 12회 방문',
            color: '#2563eb', // blue-600
            bgColor: '#dbeafe', // blue-100
        },
        {
            icon: Calendar,
            title: '선호하는 요일',
            value: '월요일 오전',
            detail: '업무 장소 방문 패턴',
            color: '#d97706', // amber-600
            bgColor: '#fef3c7', // amber-100
        },
        {
            icon: MapPin,
            title: '주요 활동 지역',
            value: '성수동, 망원동',
            detail: '전체 방문의 68%',
            color: '#0d9488', // teal-600
            bgColor: '#ccfbf1', // teal-100
        },
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-7 h-7 text-brand" />
                    <h1 className="text-2xl font-bold">월간 리포트</h1>
                </div>
                <p className="text-base text-zinc-500 font-bold">2026년 1월</p>
            </div>

            {/* Summary Cards */}
            <div className="px-6 mb-6">
                <div className="bg-gradient-to-br from-brand-light to-zinc-50 rounded-2xl p-5 border border-brand/20 shadow-sm">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-black text-zinc-900 mb-1">85</div>
                            <div className="text-xs text-zinc-500 font-bold uppercase">총 방문</div>
                        </div>
                        <div className="text-center border-x border-zinc-200">
                            <div className="text-2xl font-black text-zinc-900 mb-1">24</div>
                            <div className="text-xs text-zinc-500 font-bold uppercase">새 장소</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-zinc-900 mb-1">2,148</div>
                            <div className="text-xs text-zinc-500 font-bold uppercase">저장된 장소</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Insights */}
            <div className="px-6 mb-6">
                <h2 className="text-sm font-semibold text-zinc-500 mb-3">주요 인사이트</h2>
                <div className="grid grid-cols-1 gap-3">
                    {insights.map((insight, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-4 border border-zinc-200 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: insight.bgColor }}
                            >
                                <insight.icon className="w-6 h-6" style={{ color: insight.color }} />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-zinc-500 mb-0.5 font-bold uppercase tracking-tight">{insight.title}</div>
                                <div className="text-base font-bold text-zinc-900 mb-0.5">{insight.value}</div>
                                <div className="text-xs text-zinc-400 font-bold">{insight.detail}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Most Visited Folders Chart */}
            <div className="px-6 mb-6">
                <h2 className="text-sm font-semibold text-zinc-500 mb-3">가장 많이 방문한 폴더</h2>
                <div className="bg-white rounded-2xl p-5 border border-zinc-200 shadow-sm">
                    <div className="space-y-4">
                        {monthlyData.map((item, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-3.5 h-3.5 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <span className="text-base font-bold text-zinc-700">{item.folder}</span>
                                    </div>
                                    <span className="text-sm text-zinc-500 font-bold">{item.visits}회</span>
                                </div>
                                <div className="relative w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
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
                <h2 className="text-sm font-semibold text-zinc-500 mb-3">AI 제안</h2>

                {/* Archive Suggestion */}
                <div className="bg-white rounded-2xl p-5 border border-zinc-200 mb-3 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl" />

                    <div className="relative">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                                <Sparkles className="w-5 h-5 text-brand" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-zinc-900 mb-1">1년 이상 미방문 장소 정리</h3>
                                <p className="text-sm text-zinc-500 font-medium">
                                    42개 장소를 1년 넘게 방문하지 않았습니다
                                </p>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full bg-brand-light border-brand/20 text-brand hover:bg-brand/10 hover:text-brand-hover rounded-xl h-10 transition-colors">
                            <Archive className="w-4 h-4 mr-2" />
                            보관함으로 이동
                        </Button>
                    </div>
                </div>

                {/* New Discoveries */}
                <div className="bg-white rounded-2xl p-5 border border-zinc-200 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full blur-2xl" />

                    <div className="relative">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-5 h-5 text-purple-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-bold text-zinc-900 mb-1">새로운 취향 발견</h3>
                                <p className="text-sm text-zinc-500 font-medium">
                                    최근 갤러리·전시 공간 방문이 증가했습니다
                                </p>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full bg-purple-50/50 border-purple-200 text-purple-600 hover:bg-purple-100 hover:text-purple-700 rounded-xl h-10">
                            <Sparkles className="w-4 h-4 mr-2" />
                            관련 장소 추천받기
                        </Button>
                    </div>
                </div>
            </div>

            {/* Export Report */}
            <div className="px-6 mt-6">
                <Button variant="secondary" className="w-full h-12 rounded-xl text-zinc-600 bg-zinc-100 hover:bg-zinc-200">
                    전체 리포트 내보내기
                </Button>
            </div>
        </div>
    );
}
