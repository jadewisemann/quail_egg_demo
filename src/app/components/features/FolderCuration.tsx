import { Sparkles, Star, MapPin, Zap, Coffee } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface FolderCurationProps {
    onNavigateToPlace: (placeId: string) => void;
}

export function FolderCuration({ onNavigateToPlace }: FolderCurationProps) {
    const topPicks = [
        {
            id: '1',
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
            id: '2',
            name: '한남동 브런치 카페',
            location: '한남동',
            matchScore: 95,
            rating: 4,
            distance: '2.8km',
            reason: '월요일 오전 방문 패턴 일치',
            features: ['와이파이', '회의실', '무료음료'],
            image: '💼',
        },
        {
            id: '3',
            name: '망원 로스터리',
            location: '망원동',
            matchScore: 92,
            rating: 5,
            distance: '3.1km',
            reason: '조용한 환경 선호도 반영',
            features: ['조용함', '콘센트', '장시간'],
            image: '📚',
        },
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header / content ... */}
            {/* skipping some lines for brevity in replacement but making sure it's contiguous */}
            <div className="p-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                    <Coffee className="w-6 h-6 text-amber-400" />
                    <h1 className="text-2xl font-bold">업무하기 좋은</h1>
                </div>
                <p className="text-sm text-zinc-500">156개 장소</p>
            </div>

            {/* AI Curation Header */}
            <div className="px-6 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl" />

                    <div className="relative flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-sm font-bold text-zinc-900 mb-1">이번 월요일 오전에 최적</h2>
                            <p className="text-xs text-zinc-600">
                                당신의 방문 패턴과 평가를 분석한 맞춤 추천입니다
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Picks */}
            <div className="px-6">
                <h2 className="text-sm font-semibold text-zinc-500 mb-4">AI 추천 순위</h2>

                <div className="space-y-4">
                    {topPicks.map((place, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-blue-400 transition-colors shadow-sm"
                        >
                            {/* Match Score Badge */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 relative text-white">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
                                            {place.image}
                                        </div>
                                        <div>
                                            <div className="text-xs text-white/80 mb-0.5 font-medium">매칭 점수</div>
                                            <div className="text-2xl font-bold">{place.matchScore}%</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 justify-end mb-1">
                                            {[...Array(place.rating)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                                            ))}
                                        </div>
                                        <div className="text-xs text-white/80 font-medium">내 평가</div>
                                    </div>
                                </div>
                            </div>

                            {/* Place Info */}
                            <div className="p-4">
                                <h3 className="text-base font-bold mb-1">{place.name}</h3>
                                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{place.location}</span>
                                    <span>·</span>
                                    <span>{place.distance}</span>
                                </div>

                                {/* AI Reason */}
                                <div className="bg-zinc-50 rounded-xl p-3 mb-3 border border-zinc-100">
                                    <div className="flex items-start gap-2">
                                        <Zap className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-xs text-zinc-500 mb-1 font-medium">AI가 선택한 이유</div>
                                            <div className="text-xs text-blue-700 font-semibold">{place.reason}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {place.features.map((feature, i) => (
                                        <Badge
                                            key={i}
                                            variant="secondary"
                                            className="text-xs font-normal"
                                        >
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="px-4 pb-4">
                                <Button
                                    onClick={() => onNavigateToPlace(place.id)}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                                >
                                    자세히 보기
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* More Options */}
            <div className="px-6 mt-6">
                <Button variant="outline" className="w-full h-12 rounded-xl text-zinc-600 border-zinc-200">
                    더 많은 추천 보기
                </Button>
            </div>
        </div>
    );
}
