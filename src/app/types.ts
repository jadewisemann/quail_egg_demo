export interface Place {
  id: string;
  name: string;
  address: string;
  image: string;
  rating?: number;
  memo?: string;
  tags: string[];
  aiTags?: string[];
  distance?: string;
  folderId: string;
  latitude?: number;
  longitude?: number;
  isOpen?: boolean;
}

export interface Folder {
  id: string;
  name: string;
  icon: string;
  parentId: string | null;
  placeCount: number;
}

export interface BreadcrumbItem {
  id: string;
  name: string;
}
