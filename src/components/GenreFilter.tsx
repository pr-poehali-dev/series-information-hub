
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface GenreFilterProps {
  genres: string[];
  activeGenre: string | null;
  onGenreSelect: (genre: string | null) => void;
}

const GenreFilter = ({ genres, activeGenre, onGenreSelect }: GenreFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="font-medium mb-3">Фильтр по жанрам:</h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 pb-1">
          <Badge
            onClick={() => onGenreSelect(null)}
            className={`cursor-pointer px-3 py-1 ${
              activeGenre === null
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            Все
          </Badge>
          {genres.map((genre) => (
            <Badge
              key={genre}
              onClick={() => onGenreSelect(genre)}
              className={`cursor-pointer px-3 py-1 ${
                activeGenre === genre
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {genre}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default GenreFilter;
