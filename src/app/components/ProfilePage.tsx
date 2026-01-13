import { User, Settings, Bell, Shield, HelpCircle, LogOut, ChevronRight, MapPin, Star, Heart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function ProfilePage() {
    return (
        <div className="min-h-screen bg-zinc-50 pb-20">
            {/* Header / Profile Info */}
            <div className="bg-white p-6 border-b border-zinc-200">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                        <User className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-xl font-bold text-zinc-900">John Doe</h1>
                            <Badge className="bg-blue-600 text-[10px] h-5">PRO</Badge>
                        </div>
                        <p className="text-sm text-zinc-500 mb-2">@johndoe</p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-sm font-bold">2.1k</div>
                                <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">장소</div>
                            </div>
                            <div className="text-center border-x border-zinc-100 px-4">
                                <div className="text-sm font-bold">156</div>
                                <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">폴더</div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-bold">842</div>
                                <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">팔로워</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full h-10 rounded-xl text-sm font-medium border-zinc-200">
                        프로필 수정
                    </Button>
                    <Button variant="outline" className="w-full h-10 rounded-xl text-sm font-medium border-zinc-200">
                        리스트 공유
                    </Button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <Card className="p-4 bg-white border-zinc-200 flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-2">
                            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                        </div>
                        <div className="text-lg font-bold">42</div>
                        <div className="text-xs text-zinc-500">작성한 리뷰</div>
                    </Card>
                    <Card className="p-4 bg-white border-zinc-200 flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center mb-2">
                            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        </div>
                        <div className="text-lg font-bold">1.2k</div>
                        <div className="text-xs text-zinc-500">받은 좋아요</div>
                    </Card>
                </div>

                {/* Settings list */}
                <div className="space-y-1">
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 ml-1">계정 설정</h3>

                    {[
                        { icon: Bell, label: '알림 설정', detail: '푸시, 이메일' },
                        { icon: Shield, label: '개인정보 보호', detail: '비공개 폴더 관리' },
                        { icon: Settings, label: '서비스 설정', detail: '언어, 테마' },
                    ].map((item, i) => (
                        <button key={i} className="w-full bg-white border border-zinc-100 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-200 transition-colors shadow-sm mb-2">
                            <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <item.icon className="w-5 h-5 text-zinc-500" />
                            </div>
                            <div className="flex-1 text-left">
                                <div className="text-sm font-bold text-zinc-900">{item.label}</div>
                                <div className="text-[11px] text-zinc-400 font-medium">{item.detail}</div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-zinc-300" />
                        </button>
                    ))}

                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-6 mb-3 ml-1">고객 지원</h3>

                    {[
                        { icon: HelpCircle, label: '도움말 및 고객센터' },
                        { icon: LogOut, label: '로그아웃', color: 'text-rose-500' },
                    ].map((item, i) => (
                        <button key={i} className="w-full bg-white border border-zinc-100 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-200 transition-colors shadow-sm mb-2">
                            <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center">
                                <item.icon className={`w-5 h-5 ${item.color || 'text-zinc-500'}`} />
                            </div>
                            <div className="flex-1 text-left text-sm font-bold text-zinc-900">{item.label}</div>
                            <ChevronRight className="w-5 h-5 text-zinc-300" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 py-4 text-center">
                <p className="text-[10px] text-zinc-400 font-medium">버전 1.2.4 (Build 452)</p>
            </div>
        </div>
    );
}
