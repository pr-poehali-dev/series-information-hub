
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SeriesCarousel from "@/components/SeriesCarousel";
import SeriesCard from "@/components/SeriesCard";
import GenreFilter from "@/components/GenreFilter";
import { popularSeries, newSeries, topSeries, allGenres } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Spinner } from "@/components/ui/spinner";

const Index = () => {
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Имитация загрузки при поиске
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      // Имитация загрузки результатов
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };

  // Фильтрация сериалов по выбранному жанру и поисковому запросу
  const filteredSeries = [...popularSeries, ...newSeries, ...topSeries].filter(
    (series) => {
      const matchesGenre = !activeGenre || series.genres.includes(activeGenre);
      const matchesSearch = !searchQuery.trim() || 
        series.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGenre && matchesSearch;
    }
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <SeriesCarousel title="Популярные сериалы" series={popularSeries} />
          <SeriesCarousel title="Новинки" series={newSeries} />
          
          <div className="py-10">
            <h2 className="text-2xl font-bold mb-6 font-montserrat">Каталог сериалов</h2>
            
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Поиск сериалов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-md"
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner size="sm" /> : <Icon name="Search" className="h-4 w-4" />}
                </Button>
              </div>
            </form>
            
            <GenreFilter 
              genres={allGenres} 
              activeGenre={activeGenre}
              onGenreSelect={setActiveGenre}
            />
            
            {filteredSeries.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {filteredSeries.map((series) => (
                  <SeriesCard key={series.id} {...series} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">
                  По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
