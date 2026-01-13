import { Place, Folder } from './types';

export const mockFolders: Folder[] = [
  { id: '1', name: '카페', icon: '☕', parentId: null, placeCount: 24, color: '#f59e0b' }, // amber-500
  { id: '2', name: '다이닝', icon: '🍷', parentId: null, placeCount: 18, color: '#ef4444' }, // red-500
  { id: '3', name: '여행', icon: '✈️', parentId: null, placeCount: 32, color: '#3b82f6' }, // blue-500
  { id: '4', name: '운동/활동', icon: '🏃', parentId: null, placeCount: 12, color: '#10b981' }, // emerald-500
  { id: '1-1', name: '강남/역삼 카페', icon: '📁', parentId: '1', placeCount: 8, color: '#f59e0b' },
  { id: '1-2', name: '성수동 카페', icon: '📁', parentId: '1', placeCount: 6, color: '#f59e0b' },
  { id: '1-3', name: '홍대 카페', icon: '📁', parentId: '1', placeCount: 5, color: '#f59e0b' },
  { id: '1-1-1', name: '조용한', icon: '📂', parentId: '1-1', placeCount: 4, color: '#f59e0b' },
  { id: '1-1-2', name: '데이트 추천', icon: '📂', parentId: '1-1', placeCount: 3, color: '#f59e0b' },
  { id: '2-1', name: '강남구 맛집', icon: '📁', parentId: '2', placeCount: 10, color: '#ef4444' },
  { id: '2-2', name: '이탈리안', icon: '📁', parentId: '2', placeCount: 5, color: '#ef4444' },
  { id: '2-1-1', name: '데이트 추천', icon: '📂', parentId: '2-1', placeCount: 5, color: '#ef4444' },
  { id: '3-1', name: '제주도', icon: '📁', parentId: '3', placeCount: 15, color: '#3b82f6' },
  { id: '3-2', name: '부산', icon: '📁', parentId: '3', placeCount: 12, color: '#3b82f6' },
];

export const mockPlaces: Place[] = [
  // 강남/역삼 카페 (1-1) - 폴더 자체에도 장소 추가
  {
    id: 'p1',
    name: '알베르',
    address: '서울 강남구 역삼동 123-45',
    image: 'https://images.unsplash.com/photo-1648808694138-6706c5efc80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MjM5NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    memo: '2층 창가 자리가 좋음. 아메리카노 진하고 맛있음',
    tags: ['조용함', '노트북작업', '주말오픈'],
    aiTags: ['커피맛좋음', '콘센트있음'],
    distance: '250m',
    folderId: '1-1-1',
    isOpen: true,
  },
  {
    id: 'p1-1',
    name: '카페 뮤즈',
    address: '서울 강남구 역삼동 234-56',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBtaW5pbWFsfGVufDF8fHx8MTczNjgwNzAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    memo: '강남역 근처 숨은 맛집',
    tags: ['강남역', '브런치', '여유로움'],
    aiTags: ['주차편함', '친절함'],
    distance: '350m',
    folderId: '1-1',
    isOpen: true,
  },
  {
    id: 'p1-2',
    name: '롤랑',
    address: '서울 강남구 역삼동 345-67',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGVyeXxlbnwxfHx8fDE3MzY4MDcwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    memo: '스페셜티 커피 전문점',
    tags: ['로스팅', '전문가', '핸드드립'],
    aiTags: ['원두맛집', '커피향좋음'],
    distance: '280m',
    folderId: '1-1',
    isOpen: true,
  },
  {
    id: 'p4',
    name: '카페 온더코너',
    address: '서울 강남구 역삼동 234-56',
    image: 'https://images.unsplash.com/photo-1648808694138-6706c5efc80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MjM5NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    memo: '조명이 예쁨. 인스타 감성',
    tags: ['감성', '사진촬영', '데이트'],
    aiTags: ['인테리어예쁨', '디저트다양'],
    distance: '500m',
    folderId: '1-1-2',
    isOpen: false,
  },
  {
    id: 'p6',
    name: '조용한 책 카페',
    address: '서울 강남구 역삼동 456-78',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjgyMDU1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    memo: '책 많음. 매우 조용함',
    tags: ['조용함', '독서', '혼자'],
    aiTags: ['와이파이빠름', '오래앉아도됨'],
    distance: '600m',
    folderId: '1-1-1',
    isOpen: true,
  },
  {
    id: 'p12',
    name: '스튜디오 카페',
    address: '서울 강남구 역삼동 333-44',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBtaW5pbWFsfGVufDF8fHx8MTczNjgwNzAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.2,
    memo: '넓어서 회의하기 좋음',
    tags: ['넓음', '회의', '콘센트많음'],
    aiTags: ['조용함', '장시간작업가능'],
    distance: '400m',
    folderId: '1-1-1',
    isOpen: true,
  },

  // 성수동 카페 (1-2) - 폴더에 직접 장소들
  {
    id: 'p3',
    name: '커피 스미스',
    address: '서울 성동구 성수동2가 789-12',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NjgyMDU1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    memo: '주차 가능. 넓은 공간',
    tags: ['넓음', '주차', '모임'],
    aiTags: ['커피다양', '디저트맛있음'],
    distance: '3.5km',
    folderId: '1-2',
    isOpen: true,
  },
  {
    id: 'p7',
    name: '브루클린 로스터',
    address: '서울 성동구 성수동1가 123-45',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGVyeXxlbnwxfHx8fDE3MzY4MDcwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    memo: '핸드드립 커피가 정말 맛있음',
    tags: ['스페셜티커피', '전문가', '성수'],
    aiTags: ['원두신선', '바리스타친절'],
    distance: '3.2km',
    folderId: '1-2',
    isOpen: true,
  },
  {
    id: 'p8',
    name: '온다',
    address: '서울 성동구 성수동2가 456-78',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBtaW5pbWFsfGVufDF8fHx8MTczNjgwNzAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    memo: '빵이 맛있음. 크로와상 추천',
    tags: ['베이커리', '브런치', '인스타감성'],
    aiTags: ['사진맛집', '빵신선'],
    distance: '3.8km',
    folderId: '1-2',
    isOpen: true,
  },

  // 홍대 카페 (1-3)
  {
    id: 'p9',
    name: '연남동 카페거리',
    address: '서울 마포구 연남동 234-56',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwc3RyZWV0fGVufDF8fHx8MTczNjgwNzAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    memo: '루프탑 있음',
    tags: ['루프탑', '홍대', '분위기'],
    aiTags: ['뷰맛집', '주차어려움'],
    distance: '5.2km',
    folderId: '1-3',
    isOpen: true,
  },

  // 강남구 맛집 (2-1) - 폴더 자체에도 장소
  {
    id: 'p2-1',
    name: '스시야마',
    address: '서울 강남구 논현동 123-45',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzM2ODA3MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    memo: '오마카세가 훌륭함',
    tags: ['일식', '스시', '고급'],
    aiTags: ['신선함', '예약추천'],
    distance: '1.8km',
    folderId: '2-1',
    isOpen: true,
  },
  {
    id: 'p2',
    name: '더 테이블',
    address: '서울 강남구 신사동 567-89',
    image: 'https://images.unsplash.com/photo-1689789330285-18404b1b4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzY4MTkxMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    memo: '예약 필수. 스테이크 맛집',
    tags: ['데이트', '고급', '예약필수'],
    aiTags: ['분위기좋음', '서비스훌륭'],
    distance: '1.2km',
    folderId: '2-1-1',
    isOpen: true,
  },
  {
    id: 'p5',
    name: '파스타 하우스',
    address: '서울 강남구 신사동 345-67',
    image: 'https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjByZXN0YXVyYW50fGVufDF8fHx8MTc2ODI0MzY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    memo: '까르보나라 강추!',
    tags: ['파스타', '점심', '혼밥가능'],
    aiTags: ['가성비좋음', '맛있음'],
    distance: '800m',
    folderId: '2-1-1',
    isOpen: true,
  },
  {
    id: 'p10',
    name: '더바우하우스',
    address: '서울 강남구 청담동 111-22',
    image: 'https://images.unsplash.com/photo-1689789330285-18404b1b4b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzY4MTkxMjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    memo: '특별한 날 가기 좋음. 와인 리스트가 훌륭',
    tags: ['파인다이닝', '와인', '기념일'],
    aiTags: ['고급', '예약필수'],
    distance: '2.1km',
    folderId: '2-1-1',
    isOpen: true,
  },

  // 이탈리안 (2-2)
  {
    id: 'p11',
    name: '피렌체의 식탁',
    address: '서울 강남구 신사동 789-01',
    image: 'https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjByZXN0YXVyYW50fGVufDF8fHx8MTc2ODI0MzY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    memo: '리조또가 맛있음',
    tags: ['이탈리안', '정통', '가성비'],
    aiTags: ['현지맛', '재방문율높음'],
    distance: '1.5km',
    folderId: '2-2',
    isOpen: true,
  },
];

export const getPlacesByFolder = (folderId: string): Place[] => {
  return mockPlaces.filter(place => place.folderId === folderId);
};

export const getSubFolders = (parentId: string | null): Folder[] => {
  return mockFolders.filter(folder => folder.parentId === parentId);
};

export const getFolderById = (folderId: string): Folder | undefined => {
  return mockFolders.find(folder => folder.id === folderId);
};

export const getPlaceById = (placeId: string): Place | undefined => {
  return mockPlaces.find(place => place.id === placeId);
};

export const getAllPlacesRecursive = (folderId: string): (Place & { folderColor?: string; folderIcon?: string })[] => {
  const foldersToProcess = [folderId];
  const allSubFolderIds = new Set<string>();

  // Find all nested folder IDs
  let i = 0;
  while (i < foldersToProcess.length) {
    const cid = foldersToProcess[i++];
    allSubFolderIds.add(cid);
    const subs = getSubFolders(cid);
    subs.forEach(s => {
      if (!allSubFolderIds.has(s.id)) {
        foldersToProcess.push(s.id);
      }
    });
  }

  return mockPlaces
    .filter(place => allSubFolderIds.has(place.folderId))
    .map(place => {
      const folder = getFolderById(place.folderId);
      return {
        ...place,
        folderColor: folder?.color,
        folderIcon: folder?.icon
      };
    });
};

export const getBreadcrumbs = (folderId: string) => {
  const breadcrumbs: { id: string; name: string }[] = [];
  let currentFolder = getFolderById(folderId);

  while (currentFolder) {
    breadcrumbs.unshift({ id: currentFolder.id, name: currentFolder.name });
    if (currentFolder.parentId) {
      currentFolder = getFolderById(currentFolder.parentId);
    } else {
      break;
    }
  }

  breadcrumbs.unshift({ id: 'home', name: '홈' });
  return breadcrumbs;
};