# will-do
Версия 0.1.0

## О проекте:
Учебный самостоятельный проект по отработке React.js. Будет представлять из себя мотивационный сайт (социальную сеть), где каждый ставит себе интересные цели на 1/3/6 месяцев и выкладыает фото/видео/текстовые отчеты об их исполнении, а другие пользователи могут поддерживать лайками понравившиеся цели, комментировать. Идеи с наибольшим количеством "поддержек" будут отображаться на отдельной странице. 

Первостепенной задачей является функионал, а не дизайн сайта.

## Ссылка на Gh-pages
https://itauiti.github.io/will-do

## Функционал и технологии:

- Сайт single-page application (SPA).
- Настроен роутер и переходы между страницами Главная, Сохраненные статьи, вложенные маршруты.
- Хедер при скролле вниз принимает фиксированное состояние и меняет цвет.
- Card - классовый компонент (просто для примера), остальные функциональные. 
- Данные для карточек берутся со стороннего открытого API.
- Используются Хуки: useState, useEffect, useContext, useRouteMatch.
- Настроены схемы валидации форм с помощью Yup
- Настроены формы с валидацией с выводом ошибок, блокирование кнопки отправки (со сменой стилей), если форма не валидна. Использован Formik
- Постановка/снятие лайка
- В зависимости от авторизации показываются разные страницы и навигация (переключается в ручном режиме, т.к. нет бэкенда. В компоненте NavBar меняется const isLoggedIn на false или true)


## В разработке:
- Имитировать вход и выход из аккаунта нажатием на кнопку
- Слайдер
- ScrollUp кнопка
- Страницы Авторизации и Личного кабинета
- Раскрытие Подробнее

## Планируется
- Проверка передаваемых данных
- Связка с SCSS
- Выбор из нескольких видов лайков
- Фильтр по новым пользователям и тем, на кого подписан
- Адаптивная верстка

## В работе использовались:
- Create React App
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [axios](https://www.npmjs.com/package/axios)
- [react-scroll-up](https://www.npmjs.com/package/react-scroll-up)
- [react-slick](https://www.npmjs.com/package/react-slick)
- [gh-pages](https://www.npmjs.com/package/gh-pages)
- [yup](https://www.npmjs.com/package/yup)
- [formik](https://www.npmjs.com/package/formik)

## Стэк технологий:
React.js, CSS3, HTML5, GIT
