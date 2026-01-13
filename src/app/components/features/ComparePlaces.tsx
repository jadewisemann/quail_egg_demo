import { Star, MapPin, Zap } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';

export function ComparePlaces() {
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
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="p-6 pb-4 border-b border-zinc-200">
                <h1 className="text-2xl font-bold mb-1">장소 비교</h1>
                <p className="text-sm text-zinc-500">최적의 선택을 도와드립니다</p>
            </div>

            {/* AI Final Pick */}
            <div className="p-6 pb-4">
                <div className="bg-gradient-to-r from-brand-light to-zinc-50 rounded-2xl p-5 border border-brand/20 relative overflow-hidden shadow-sm transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-3xl transition-colors" />

                    <div className="relative flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand/20 transition-colors">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                            <div className="text-xs font-bold text-zinc-500 mb-1">AI 최종 추천</div>
                            <div className="text-base font-bold text-zinc-900">{aiPick.name}</div>
                            <div className="text-xs text-brand font-semibold mt-1">
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
                    <div className={`bg-white rounded-2xl overflow-hidden border-2 transition-all ${aiPick === place1 ? 'border-brand shadow-md transform scale-[1.02]' : 'border-zinc-100 shadow-sm'
                        }`}>
                        {aiPick === place1 && (
                            <div className="bg-brand text-white text-center py-1.5 text-xs font-bold transition-colors">
                                ✨ AI 추천
                            </div>
                        )}
                        <div className="p-4">
                            <div className="text-2xl mb-2 text-center">☕</div>
                            <h3 className="text-sm font-bold mb-1 text-center truncate">{place1.name}</h3>
                            <div className="flex items-center justify-center gap-1 text-xs text-zinc-500 mb-3">
                                <MapPin className="w-3 h-3" />
                                <span className="truncate">{place1.location}</span>
                            </div>

                            {/* Stats */}
                            <div className="space-y-3">
                                {/* Rating */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">내 평가</div>
                                    <div className="flex items-center gap-0.5 justify-center">
                                        {[...Array(place1.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>

                                {/* Visit Count */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">방문 횟수</div>
                                    <div className="text-xl text-center font-bold text-brand transition-colors">{place1.visitCount}회</div>
                                </div>

                                {/* Last Visit */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">최근 방문</div>
                                    <div className="text-sm text-center font-semibold text-zinc-700">{place1.lastVisit}</div>
                                </div>

                                {/* Traffic */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">현재 혼잡도</div>
                                    <div className="text-sm text-center mb-1 font-semibold text-zinc-700">{place1.traffic}</div>
                                    <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                        <div
                                            className="bg-amber-400 h-1.5 rounded-full transition-all"
                                            style={{ width: `${place1.trafficLevel}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Distance */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">거리</div>
                                    <div className="text-sm text-center font-semibold text-zinc-700">{place1.distance}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Place 2 */}
                    <div className={`bg-white rounded-2xl overflow-hidden border-2 transition-all ${aiPick === place2 ? 'border-brand shadow-md transform scale-[1.02]' : 'border-zinc-100 shadow-sm'
                        }`}>
                        {aiPick === place2 && (
                            <div className="bg-brand text-white text-center py-1.5 text-xs font-bold transition-colors">
                                ✨ AI 추천
                            </div>
                        )}
                        <div className="p-4">
                            <div className="text-2xl mb-2 text-center">💼</div>
                            <h3 className="text-sm font-bold mb-1 text-center truncate">{place2.name}</h3>
                            <div className="flex items-center justify-center gap-1 text-xs text-zinc-500 mb-3">
                                <MapPin className="w-3 h-3" />
                                <span className="truncate">{place2.location}</span>
                            </div>

                            {/* Stats */}
                            <div className="space-y-3">
                                {/* Rating */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">내 평가</div>
                                    <div className="flex items-center gap-0.5 justify-center">
                                        {[...Array(place2.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                </div>

                                {/* Visit Count */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">방문 횟수</div>
                                    <div className="text-xl text-center font-bold text-zinc-400">{place2.visitCount}회</div>
                                </div>

                                {/* Last Visit */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">최근 방문</div>
                                    <div className="text-sm text-center font-semibold text-zinc-700">{place2.lastVisit}</div>
                                </div>

                                {/* Traffic */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">현재 혼잡도</div>
                                    <div className="text-sm text-center mb-1 font-semibold text-zinc-700">{place2.traffic}</div>
                                    <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                        <div
                                            className="bg-emerald-400 h-1.5 rounded-full transition-all"
                                            style={{ width: `${place2.trafficLevel}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Distance */}
                                <div>
                                    <div className="text-xs text-zinc-400 mb-1 text-center font-medium">거리</div>
                                    <div className="text-sm text-center font-semibold text-zinc-700">{place2.distance}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Comparison */}
                <div className="bg-white rounded-2xl p-4 border border-zinc-200 shadow-sm">
                    <h3 className="text-sm font-semibold text-zinc-500 mb-3">주요 특징 비교</h3>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {place1.features.map((feature, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-[10px] bg-zinc-100 text-zinc-600 border-zinc-200 font-normal px-2"
                                    >
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {place2.features.map((feature, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-[10px] bg-zinc-100 text-zinc-600 border-zinc-200 font-normal px-2"
                                    >
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button className="w-full bg-brand hover:bg-brand-hover text-white rounded-xl h-11 transition-all">
                        {place1.name.split(' ')[0]} 선택
                    </Button>
                    <Button variant="outline" className="w-full border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-xl h-11">
                        {place2.name.split(' ')[0]} 선택
                    </Button>
                </div>
            </div>
        </div>
    );
}
