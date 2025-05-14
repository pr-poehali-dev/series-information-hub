
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <Icon name="Film" className="h-6 w-6 text-primary" />
            <span className="hidden text-xl font-bold text-primary sm:inline-block font-montserrat">
              СериалоПоиск
            </span>
          </a>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          <a
            href="#popular"
            className="transition-colors hover:text-primary"
          >
            Популярные
          </a>
          <a
            href="#genres"
            className="transition-colors hover:text-primary"
          >
            Жанры
          </a>
          <a
            href="#new"
            className="transition-colors hover:text-primary"
          >
            Новинки
          </a>
          <a
            href="#top"
            className="transition-colors hover:text-primary"
          >
            Топ-100
          </a>
        </nav>

        <div className="flex items-center justify-end flex-1 space-x-4">
          <div className={`relative ${isSearchOpen ? "w-full md:w-[300px]" : "w-0 md:w-[300px]"} transition-all duration-200 overflow-hidden`}>
            <Input
              type="search"
              placeholder="Поиск сериалов..."
              className={`transition-all ${isSearchOpen ? "w-full opacity-100" : "md:opacity-100 opacity-0"}`}
            />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden"
          >
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Bell" className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Icon name="LogIn" className="h-4 w-4" />
            <span>Войти</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
