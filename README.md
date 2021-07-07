# Barinb

Barinb - пример "тестового" Angular приложения с использованием лучших практик.

Проект представляет собой реализацию одной из частей приложения для бронирования жилья (апартаментов или номера в отеле).

Для пользователя отображается список доступных вариантов на гугл карте. При клике на пин с вариантом, показывается
доступная информация по варианту, и при клике на на изображение происходит переход на страницу выбранного варианта.

Интерфейс приложения ориентирован на два вида: мобильная версия и версия для настольного компьютера.

И если в десктопной версии приложения сразу отображаются доступные варианты в виде списка и карта, то в мобильном
приложении отображается только один из предложенных вариантов, который можно изменить, кликнув по плавающей кнопке рядом
с футером.

![Cabinet](./docs/cabinet.gif)

Также приложение реализует админ панель для 3 сущностей: Номер (Апартаменты), Отель (Здание) и Собственник (Хозяин).

В данном приложении собственник может иметь несколько зданий, а каждое здание может содержать несколько номеров (
апартаментов).

Интерфейс админ панели также ориентирован на два вида: мобильная версия и версия для настольного компьютера, где в
мобильной версии представлен список сущностей, а в десктопной версии отображается таблица.

![Admin](./docs/admin.gif)

## Установка

Установка yarn, angular-cli и зависимостей для приложения.

Для того чтобы продолжить, у вас должна быть установлен NodeJS. Подробнее об установке можно посмотреть в [офф. документации NodeJS](https://nodejs.org/en/download/package-manager/)

### Установка Yarn

В проекте, в качестве менеджера пакетов используется [Yarn](https://yarnpkg.com/).
Установите и настройте yarn для своей OS (https://classic.yarnpkg.com/en/docs/install#debian-stable).

После установки проверьте, что `yarn global bin` указывает на домашний каталог:

```shell script
yarn global bin
// output: /home/<your-username>/.yarn/bin
```

### Установка Ng

Для установки Angular cli, запустите команду:

```shell script
yarn global add @angular/cli
```

Для проверки установки запустить команду:

```shell script
ng
```

Подробнее о Angular cli можно посмотреть в [офф. документации](https://angular.io/cli)

### Установка зависимостей

После клонирования приложения необходимо установить зависимости с помощью yarn:

```shell script
yarn install
```

Для запуска приложения можно использовать команду:

```shell script
ng serve
```

### Альтернативная установка

Если нет желания разворачивать NodeJS, то можно запустить проект используя Docker. 

Чтобы поднять контейнер с приложением и контейнером nginx, который будет разравать статику, запустите команду:

```shell script
docker-compose up -d
```

## Описание проекта

Весь процесс разработки описан в цикле статей на [medium'е](https://medium.com/fafnur).

[Тестовое задание на Angular. Введение.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-3dca4a11fe9)
[Тестовое задание на Angular. Настройка базового приложения.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-138c98d5d3c)
[Тестовое задание на Angular. Настройка базовых стилей и Angular Material](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85-%D1%81%D1%82%D0%B8%D0%BB%D0%B5%D0%B9-%D0%B8-angular-material-4a1d1e1d0c31)
[Тестовое задание на Angular. Настройка локализации](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-8d63831df69)
[Тестовое задание на Angular. Настройка Unit тестирования с помощью Jest](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-unit-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-jest-d499b5f9a381)
[Тестовое задание на Angular. Создание основного лейаута](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BB%D0%B5%D0%B9%D0%B0%D1%83%D1%82%D0%B0-fbe37884fb31)
[Тестовое задание на Angular. Добавление библиотек для упрощения тестирования](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA-%D0%B4%D0%BB%D1%8F-%D1%83%D0%BF%D1%80%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-6c64d7d62d5)
[Тестовое задание на Angular. Создание модулей и компонентов](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%D0%B9-%D0%B8-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-27e2c26a5315)
[Тестовое задание на Angular. Создание базовых интерфейсов.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D1%85-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%D0%BE%D0%B2-55ae83d4e63c)
[Тестовое задание на Angular. Создание и управление localStorage’ем](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-localstorage%D0%B5%D0%BC-f91161b22d61)
[Тестовое задание на Angular. Установка redux и создание root store.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-redux-%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-root-store-130fd126d93f)
[Тестовое задание на Angular. Создание логгера.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BB%D0%BE%D0%B3%D0%B3%D0%B5%D1%80%D0%B0-116a92f17c7d)
[Тестовое задание на Angular. Использование localStorage.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-localstorage-62986ed027d3)
[Тестовое задание на Angular. Использование Ngrx State.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-ngrx-state-228859ad2e7f)
[Тестовое задание на Angular. Работа с данными из State.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8-%D0%B8%D0%B7-state-311f316eb3f3)
[Тестовое задание на Angular. Создание lazy страницы.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-lazy-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-c81f55ce3e16)
[Тестовое задание на Angular. Добавление google maps.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-google-maps-f4e27acd06f)
[Тестовое задание на Angular. Создание State для бронирования варианта.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-state-%D0%B4%D0%BB%D1%8F-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%D0%B0-def9955727e5)
[Тестовое задание на Angular. Создание UI kit для приложения.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-ui-kit-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-73ea367f4a87)
[Тестовое задание на Angular. Создание страницы бронирования.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-5aca8e11e7f0)
[Тестовое задание на Angular. Создание страницы апартаментов.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-%D0%B0%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-4b9c44d14895)
[Тестовое задание на Angular. Работа с формами.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D0%BC%D0%B8-353a45e67285)
[Тестовое задание на Angular. Навигация в приложении.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8-672e00b6f5f6)
[Тестовое задание на Angular. Создание admin лейаута.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-admin-%D0%BB%D0%B5%D0%B9%D0%B0%D1%83%D1%82%D0%B0-e250b4ca0e5a)
[Тестовое задание на Angular. Создание страницы в админ панели.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B-%D0%B2-%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8-a530ede8535a)
[Тестовое задание на Angular. Тестирование сервисов.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BE%D0%B2-b8b2729d6419)
[Тестовое задание на Angular. Тестирование компонентов.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-73ca1a5822d1)
[Тестовое задание на Angular. Заключение.](https://medium.com/fafnur/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-angular-%D0%B7%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-ca40ac13f13c)

Все тестовое задание было разделено на несколько независимых модулей, где была представлена реализация частей приложения.

Первые четыре статьи (Настройка базового приложения, Настройка базовых стилей и Angular Material, Настройка локализации, Настройка Unit тестирования с помощью Jest) посвящены настройке базового окружения и настройки приложения для комфортной работы.

Статьи с 5 по 8 (Создание основного лейаута, Добавление библиотек для упрощения тестирования, Создание модулей и компонентов, Создание базовых интерфейсов) вводят читателя в основы разработки приложения на Angular. Создается базовый лейаут и закладывается структура приложения.

Статья 9 (Создание и управление localStorage’ем) знакомит читателя с созданием сервисов в Angular и объясняет основные нюансы.

Статья 10 (Установка redux и создание root store) приводит пример подключения Redux в Angular, а статья 13 и 14 (Использование Ngrx State, Работа с данными из State) показывает как его использовать.

Статья 16 (Добавление google maps) показывает как использовать “внешнее” API при работе с Angular.

Статьи с 17 по 20 (Создание State для бронирования варианта, Создание UI kit для приложения, Создание страницы бронирования, Создание страницы апартаментов) показывают на практике создание сложных компонентов, где много верстки и сервисов для реализации бизнес логики.

Статья 21 (Работа с формами) знакомит читателя с формами в Angular, где приводится пример реализации формы с использованием Angular Forms.

Статья 22 (Навигация в приложении) рассматривает концепт унификации навигации в Angular.

Статьи 23 и 24 (Создание admin лейаута, Создание страницы в админ панели) посвящены созданию админ панели и управлению сущностями.

Последние две статьи 25 и 26 (Тестирование сервисов, Тестирование компонентов) посвящены тестированию в Angular, где рассматриваются базовые механики тестирования.

В заключении будет краткий обзор проделанной работы.
