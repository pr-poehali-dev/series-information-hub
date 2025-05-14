
import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Film" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary font-montserrat">
                СериалоПоиск
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Крупнейший российский сайт о сериалах. Рейтинги, отзывы, актеры и съемочные группы.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Разделы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Популярные сериалы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Топ-100
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Каталог сериалов
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Подборки
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Справка</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Мобильные приложения</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary">
                <Icon name="Smartphone" className="h-5 w-5" />
                <span>iOS</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary">
                <Icon name="Smartphone" className="h-5 w-5" />
                <span>Android</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary">
                <Icon name="Tv" className="h-5 w-5" />
                <span>Smart TV</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>© 2025 СериалоПоиск. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
