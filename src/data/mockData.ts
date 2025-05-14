
/**
 * Централизованный экспорт всех данных о сериалах.
 * Этот файл реэкспортирует все данные из отдельных модулей
 * для поддержания обратной совместимости.
 */

// Типы данных
export { type Series, type Genre, SeriesCategory } from '@/types/series';

// Данные о сериалах по категориям
export { popularSeries } from './series/popular';
export { newSeries } from './series/new';
export { topSeries } from './series/top';

// Данные о жанрах
export { allGenres, getPopularGenres, getUniqueGenresFromSeries } from './genres';

// Утилиты для работы с данными
export { 
  getRandomSeries,
  getTopRatedSeries,
  filterSeriesByGenre,
  searchSeriesByTitle 
} from './series/utils';

/**
 * Получить все сериалы одним массивом
 * @returns Объединенный массив всех сериалов
 */
import { popularSeries } from './series/popular';
import { newSeries } from './series/new'; 
import { topSeries } from './series/top';

export const getAllSeries = () => {
  return [...popularSeries, ...newSeries, ...topSeries];
};
