
import { Genre } from "@/types/series";

/**
 * Все доступные жанры сериалов
 */
export const allGenres: Genre[] = [
  "Драма", 
  "Комедия", 
  "Фантастика", 
  "Криминал", 
  "Боевик", 
  "Фэнтези", 
  "Триллер", 
  "Детектив", 
  "Приключения", 
  "Ужасы", 
  "История", 
  "Анимация", 
  "Документальный"
];

/**
 * Получить жанры, отсортированные по популярности
 * @returns Отсортированный список жанров
 */
export const getPopularGenres = (): Genre[] => {
  // В будущем здесь может быть логика для получения жанров, 
  // отсортированных по популярности
  return [...allGenres];
};

/**
 * Получить все уникальные жанры из списка сериалов
 * @param seriesList Список сериалов
 * @returns Массив уникальных жанров
 */
export const getUniqueGenresFromSeries = (seriesList: Array<{ genres: string[] }>): string[] => {
  const genresSet = new Set<string>();
  
  seriesList.forEach(series => {
    series.genres.forEach(genre => {
      genresSet.add(genre);
    });
  });
  
  return Array.from(genresSet).sort();
};
