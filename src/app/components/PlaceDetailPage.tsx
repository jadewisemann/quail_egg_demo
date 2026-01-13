import { ChevronLeft, MapPin, Star, Edit3, Navigation, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Textarea } from '@/app/components/ui/textarea';
import { getPlaceById, getFolderById, mockFolders } from '@/app/mockData';
import { Card } from '@/app/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

interface PlaceDetailPageProps {
  placeId: string;
  onNavigateBack: () => void;
}

export function PlaceDetailPage({ placeId, onNavigateBack }: PlaceDetailPageProps) {
  const place = getPlaceById(placeId);
  const [memo, setMemo] = useState(place?.memo || '');
  const [selectedFolder, setSelectedFolder] = useState(place?.folderId || '');

  if (!place) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-500">장소를 찾을 수 없습니다</p>
          <Button onClick={onNavigateBack} className="mt-4">돌아가기</Button>
        </div>
      </div>
    );
  }

  const currentFolder = getFolderById(place.folderId);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 border-b border-zinc-200">
        <div className="flex items-center gap-3 p-4">
          <Button variant="ghost" size="icon" onClick={onNavigateBack}>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold flex-1">장소 상세</h1>
          <Button variant="ghost" size="icon">
            <Edit3 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Place Image */}
        <div className="relative">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-64 object-cover"
          />
          {place.isOpen !== undefined && (
            <div className="absolute top-4 right-4">
              <Badge className={place.isOpen ? "bg-green-500" : "bg-red-500"}>
                {place.isOpen ? "영업 중" : "영업 종료"}
              </Badge>
            </div>
          )}
        </div>

        {/* Place Info */}
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{place.name}</h2>

          {/* Rating and Distance */}
          <div className="flex items-center gap-3 mb-3">
            {place.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span className="font-medium">{place.rating}</span>
              </div>
            )}
            {place.distance && (
              <span className="text-zinc-500 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {place.distance}
              </span>
            )}
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 mb-4 text-zinc-600">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p className="text-sm">{place.address}</p>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mb-6">
            {place.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-sm">
                #{tag}
              </Badge>
            ))}
            {place.aiTags?.map(tag => (
              <Badge key={tag} variant="outline" className="text-sm text-blue-600 border-blue-200">
                ✨#{tag}
              </Badge>
            ))}
          </div>

          {/* My Memo */}
          <Card className="p-4 mb-4">
            <label className="block text-sm font-medium mb-2">내 메모</label>
            <Textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="이 장소에 대한 메모를 작성해보세요..."
              className="min-h-24 resize-none"
            />
          </Card>

          {/* Folder Selection */}
          <Card className="p-4 mb-4">
            <label className="block text-sm font-medium mb-2">소속 폴더</label>
            <Select value={selectedFolder} onValueChange={setSelectedFolder}>
              <SelectTrigger className="w-full">
                <SelectValue>
                  {currentFolder && (
                    <span className="flex items-center gap-2">
                      <span>{currentFolder.icon}</span>
                      <span>{currentFolder.name}</span>
                    </span>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {mockFolders
                  .filter(f => f.parentId !== null)
                  .map(folder => (
                    <SelectItem key={folder.id} value={folder.id}>
                      <span className="flex items-center gap-2">
                        <span>{folder.icon}</span>
                        <span>{folder.name}</span>
                      </span>
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            {/* AI Folder Suggestions */}
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">AI 추천 폴더</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-xs border-blue-200">
                  📂 데이트 추천
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-blue-200">
                  📂 조용한
                </Button>
              </div>
            </div>
          </Card>

          {/* AI Review Summary */}
          <Card className="p-4 mb-4 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="font-medium text-purple-900">AI 리뷰 요약</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-2"></div>
                <p className="text-sm text-purple-900">
                  <span className="font-medium">긍정:</span> 커피 맛이 매우 좋고 분위기가 조용해서 작업하기 좋다는 평가가 많습니다.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-2"></div>
                <p className="text-sm text-purple-900">
                  <span className="font-medium">주의:</span> 주말에는 사람이 많아 자리 잡기 어려울 수 있습니다.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-2"></div>
                <p className="text-sm text-purple-900">
                  <span className="font-medium">팁:</span> 2층 창가 자리를 추천합니다.
                </p>
              </div>
            </div>
            <p className="text-xs text-purple-700 mt-3">📊 리뷰 300개를 분석했어요</p>
          </Card>

          {/* Additional Info */}
          <Card className="p-4">
            <h3 className="font-medium mb-3">운영 정보</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">영업 시간</span>
                <span>10:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">휴무일</span>
                <span>매주 월요일</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">전화번호</span>
                <span className="text-blue-600">02-1234-5678</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Fixed Action Bar */}
      <div className="fixed bottom-[60px] left-0 right-0 bg-white border-t border-zinc-200 p-4 max-w-md mx-auto">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 h-12">
            <Edit3 className="w-4 h-4 mr-2" />
            정보 수정
          </Button>
          <Button className="flex-1 h-12 bg-blue-600 hover:bg-blue-700">
            <Navigation className="w-4 h-4 mr-2" />
            길찾기
          </Button>
        </div>
      </div>
    </div>
  );
}
