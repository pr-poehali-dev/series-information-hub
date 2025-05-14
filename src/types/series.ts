
/**
 * Типы данных для сериалов и связанных сущностей
 */

/**
 * Базовая информация о сериале
 */
export interface Series {
  id: number;
  title: string;
  year: string;
  imageUrl: string;
  rating: number;
  genres: string[];
  episodes?: number;
  seasons?: number;
}

/**
 * Категории сериалов
 */
export enum SeriesCategory {
  POPULAR = 'popular',
  NEW = 'new',
  TOP = 'top'
}

/**
 * Типы жанров сериалов
 */
export type Genre = 
  | 'Драма' 
  | 'Комедия' 
  | 'Фантастика' 
  | 'Криминал' 
  | 'Боевик' 
  | 'Фэнтези' 
  | 'Триллер' 
  | 'Детектив' 
  | 'Приключения' 
  | 'Ужасы' 
  | 'История' 
  | 'Анимация' 
  | 'Документальный';
