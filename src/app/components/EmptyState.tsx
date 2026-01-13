import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Download, BookOpen } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-6">
      <div className="text-center max-w-sm">
        <div className="text-8xl mb-6">🗺️</div>
        <h2 className="text-xl font-semibold mb-2">아직 저장된 장소가 없어요</h2>
        <p className="text-zinc-500 mb-6">
          내가 좋아하는 장소들을 모아서<br />
          나만의 지도를 만들어보세요
        </p>

        <div className="space-y-3">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center transition-colors">
                <Download className="w-6 h-6 text-brand" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium">외부 지도 앱 데이터 가져오기</h3>
                <p className="text-sm text-zinc-500">카카오맵, 네이버지도 등</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium">샘플 리스트 구독하기</h3>
                <p className="text-sm text-zinc-500">인기 있는 리스트 둘러보기</p>
              </div>
            </div>
          </Card>
        </div>

        <Button className="w-full mt-6 bg-brand hover:bg-brand-hover text-white transition-all" size="lg">
          + 첫 장소 추가하기
        </Button>
      </div>
    </div>
  );
}
