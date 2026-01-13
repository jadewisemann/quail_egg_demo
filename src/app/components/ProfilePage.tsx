import { User, Settings, Bell, Shield, HelpCircle, LogOut, ChevronRight, MapPin, Star, Heart, Palette, X, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface ProfilePageProps {
    currentTheme: string;
    onThemeChange: (theme: string) => void;
}

export function ProfilePage({ currentTheme, onThemeChange }: ProfilePageProps) {
    const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

    const themes = [
        { id: 'blue', label: '그라파이트 블루', color: 'bg-blue-600' },
        { id: 'forest', label: '포레스트 그린', color: 'bg-emerald-600' },
        { id: 'dark', label: '다크 모드', color: 'bg-zinc-900' },
        { id: 'light', label: '라이트 모드', color: 'bg-white' },
    ];

    return (
        <div className="bg-zinc-50 pb-10">
            {/* Header / Profile Info */}
            <div className="bg-white p-6 border-b border-zinc-200">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-colors">
                        <User className="w-10 h-10 text-brand" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-2xl font-bold text-zinc-900">John Doe</h1>
                            <Badge className="bg-brand text-xs h-5 px-1.5 font-bold transition-colors">PRO</Badge>
                        </div>
                        <p className="text-base text-zinc-500 mb-2 font-medium">@johndoe</p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-base font-bold">2.1k</div>
                                <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">장소</div>
                            </div>
                            <div className="text-center border-x border-zinc-100 px-6">
                                <div className="text-base font-bold">156</div>
                                <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">폴더</div>
                            </div>
                            <div className="text-center">
                                <div className="text-base font-bold">842</div>
                                <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">팔로워</div>
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
                        <div className="text-2xl font-bold">42</div>
                        <div className="text-sm text-zinc-500 font-bold">작성한 리뷰</div>
                    </Card>
                    <Card className="p-4 bg-white border-zinc-200 flex flex-col items-center text-center">
                        <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center mb-2">
                            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        </div>
                        <div className="text-2xl font-bold">1.2k</div>
                        <div className="text-sm text-zinc-500 font-bold">받은 좋아요</div>
                    </Card>
                </div>

                {/* Settings list */}
                <div className="space-y-1">
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 ml-1">계정 설정</h3>

                    {[
                        { icon: Bell, label: '알림 설정', detail: '푸시, 이메일' },
                        { icon: Shield, label: '개인정보 보호', detail: '비공개 폴더 관리' },
                    ].map((item, i) => (
                        <button key={i} className="w-full bg-white border border-zinc-100 rounded-2xl p-4 flex items-center gap-4 hover:border-brand/30 transition-colors shadow-sm mb-2">
                            <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center transition-colors">
                                <item.icon className="w-5 h-5 text-zinc-500" />
                            </div>
                            <div className="flex-1 text-left">
                                <div className="text-base font-bold text-zinc-900">{item.label}</div>
                                <div className="text-xs text-zinc-400 font-bold">{item.detail}</div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-zinc-300" />
                        </button>
                    ))}

                    <button
                        onClick={() => setIsThemeModalOpen(true)}
                        className="w-full bg-white border border-zinc-100 rounded-2xl p-4 flex items-center gap-4 hover:border-brand/30 transition-colors shadow-sm mb-2"
                    >
                        <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center transition-colors">
                            <Palette className="w-5 h-5 text-zinc-500" />
                        </div>
                        <div className="flex-1 text-left">
                            <div className="text-base font-bold text-zinc-900">테마 설정</div>
                            <div className="text-xs text-zinc-400 font-bold">
                                {themes.find(t => t.id === currentTheme)?.label || '라이트 모드'} 적용 중
                            </div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${themes.find(t => t.id === currentTheme)?.color || 'bg-white'} border border-zinc-200 transition-colors`} />
                        <ChevronRight className="w-5 h-5 text-zinc-300" />
                    </button>

                    <button className="w-full bg-white border border-zinc-100 rounded-2xl p-4 flex items-center gap-4 hover:border-blue-200 transition-colors shadow-sm mb-2">
                        <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                            <Settings className="w-5 h-5 text-zinc-500" />
                        </div>
                        <div className="flex-1 text-left">
                            <div className="text-base font-bold text-zinc-900">서비스 설정</div>
                            <div className="text-xs text-zinc-400 font-bold">언어, 단위 등</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-zinc-300" />
                    </button>

                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-6 mb-3 ml-1">고객 지원</h3>

                    {[
                        { icon: HelpCircle, label: '도움말 및 고객센터' },
                        { icon: LogOut, label: '로그아웃', color: 'text-rose-500' },
                    ].map((item, i) => (
                        <button key={i} className="w-full bg-white border border-zinc-100 rounded-2xl p-4 flex items-center gap-4 hover:border-brand/30 transition-colors shadow-sm mb-2">
                            <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center transition-colors">
                                <item.icon className={`w-5 h-5 ${item.color || 'text-zinc-500'}`} />
                            </div>
                            <div className="flex-1 text-left text-sm font-bold text-zinc-900">{item.label}</div>
                            <ChevronRight className="w-5 h-5 text-zinc-300" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 py-4 text-center">
                <p className="text-xs text-zinc-400 font-bold">버전 1.2.4 (Build 452)</p>
            </div>

            {/* Theme Selection Modal */}
            {isThemeModalOpen && (
                <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/40 animate-in fade-in duration-300">
                    <div className="w-full bg-white rounded-t-[32px] p-6 pb-12 shadow-2xl animate-in slide-in-from-bottom duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-zinc-900">테마 설정</h2>
                            <button
                                onClick={() => setIsThemeModalOpen(false)}
                                className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors"
                            >
                                <X className="w-5 h-5 text-zinc-500" />
                            </button>
                        </div>

                        <div className="space-y-3">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => {
                                        onThemeChange(theme.id);
                                    }}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${currentTheme === theme.id
                                        ? 'border-brand bg-brand-light'
                                        : 'border-zinc-100 bg-zinc-50 shadow-sm'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full ${theme.color} border border-zinc-200 shadow-inner`} />
                                    <span className={`flex-1 text-left font-bold transition-colors ${currentTheme === theme.id ? 'text-brand' : 'text-zinc-700'}`}>
                                        {theme.label}
                                    </span>
                                    {currentTheme === theme.id && (
                                        <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <Button
                            onClick={() => setIsThemeModalOpen(false)}
                            className="w-full h-14 mt-8 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl"
                        >
                            확인
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
