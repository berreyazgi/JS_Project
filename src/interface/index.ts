export interface BaseItem {
  id: string;
  name: string;
  parentId: string | null;
  pinned: boolean;
}

export interface Note extends BaseItem {
  type: 'note';
  content: string;
}

export interface Folder extends BaseItem {
  type: 'folder';
  children: (Note | Folder)[];
}

export type NestedSystem = (Note | Folder)[];

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface StickyNote {
  id: string;
  title: string;
  content: string;
  color: string;
}
