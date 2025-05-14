
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2670&auto=format&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <Badge className="mb-4 bg-primary text-primary-foreground">Новый сезон</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-montserrat">
            Тёмные материи
          </h1>
          <p className="mb-8 text-lg text-gray-300 font-sourcesans">
            В мире, где существует множество параллельных вселенных, 
            девочка Лира оказывается вовлечена в грандиозное противостояние 
            магистериума и ученых, исследующих загадочную субстанцию — пыль.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              <Icon name="Play" className="h-5 w-5" />
              Смотреть трейлер
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
              <Icon name="Plus" className="h-5 w-5" />
              В избранное
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white">8.7</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-white">2019-2022</span>
            <span className="text-gray-400">|</span>
            <span className="text-white">3 сезона</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
