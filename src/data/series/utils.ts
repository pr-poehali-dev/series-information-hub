
import { Series, SeriesCategory } from "@/types/series";

/**
 * Получить случайные сериалы из списка
 * @param seriesList Список сериалов
 * @param count Количество случайных сериалов
 * @returns Массив случайных сериалов
 */
export const getRandomSeries = (seriesList: Series[], count: number): Series[] => {
  if (count >= seriesList.length) return [...seriesList];
  
  const shuffled = [...seriesList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Получить топ сериалов по рейтингу
 * @param seriesList Список сериалов
 * @param count Количество сериалов в топе
 * @returns Отсортированный по рейтингу массив сериалов
 */
export const getTopRatedSeries = (seriesList: Series[], count: number): Series[] => {
  return [...seriesList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
};

/**
 * Фильтровать сериалы по жанру
 * @param seriesList Список сериалов
 * @param genre Жанр для фильтрации
 * @returns Отфильтрованный список сериалов
 */
export const filterSeriesByGenre = (seriesList: Series[], genre: string): Series[] => {
  if (!genre) return seriesList;
  
  return seriesList.filter(series => 
    series.genres.some(g => g.toLowerCase() === genre.toLowerCase())
  );
};

/**
 * Поиск сериалов по запросу в названии
 * @param seriesList Список сериалов
 * @param query Поисковый запрос
 * @returns Отфильтрованный список сериалов
 */
export const searchSeriesByTitle = (seriesList: Series[], query: string): Series[] => {
  if (!query || query.trim() === '') return seriesList;
  
  const normalizedQuery = query.toLowerCase().trim();
  
  return seriesList.filter(series => 
    series.title.toLowerCase().includes(normalizedQuery)
  );
};
