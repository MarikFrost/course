#HTML

######Структура документа

```
<!DOCTYPE html>     <!--Обьявление формата документа-->
<html>
    <head>                              <!--Техническая информация о документе-->
        <meta charset="UTF-8">          <!--Определяем кодировку документа-->
        <title> ... </title>            <!--Задаем заголовок документа-->
        <link rel="stylesheet" type="text/css" href="style.css">    <!--Подключаем внешнюю таблицу стилей-->
        <script stc="script.js"></script>       <!--Подключаем сценарии-->
    </head>
    <body>                                      <!--Основная часть документа-->
    </body>
</html>
```

**Атрибуты элемента HTML**

- _manifest_ - c помощью значения атрибута указывается путь к документу кэша манифеста, например:

```
<html manifest="about_company.appcache">
```

**Артибуты тега META**
######Описание содержимого страницы и ключевих слов для поискових машин

```
<meta name="description" content="Описание содержимого страницы">
<meta name="keywords" content="Ключевые слова через запятую">
```

######Ключевые слова можно указывать на нескольких языках

```
<meta name="description" lang="ru" content="Описание содержимого страницы">

<meta name="description" lang="en" content="Description">

<meta name="keywords" lang="ru" content="Ключевые слова через запятую">

<meta name="keywords" lang="en" content="Keywords">
```

######Индексация и переход по ссылкам разрешены

```
<meta name="robots" content="index, follow">
```

######Индексация разрешена, переход по ссылкам запрещен

```
<meta name="robots" content="index, nofollow">
```

######Индексация и переход по ссылкам запрещены

```
<meta name="robots" content="noindex, nofollow">
```

######Автоматически перезагрузить страницу через промежуток времени (например, через 30 секунд)

```
<meta http-equiv="refresh" content="30">
```

######Перебросить посетителя на другую страницу

```
<meta http-equiv="refresh" content="0; url=http://yandex.ru/">
```

######Артибут элементов STYLE

```
<p style="color: #666666; background-color: #ef4444; padding: 20px;">
```

######Подключить файл со стилями через @import url

```
<!DOCTYPE html>
<html>
    <head>
        <style>
            @import url(style.css);
        </style>
        <meta>
        <title> </title>
    </head>
</html>
```

######Подключение иконок на сайт

```
<link rel="shortcut icon" href="icon.ico" type="image/x-icon">
```

######Подключение иконок с разными расширениями

```
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="114x114"  href="apple-touch-icon-114x114.png">
```

######Заголовки для SEO оптимизации

```
<meta name="description" content="Test web page">
<meta name="keywords" content="html, webdev, Yauhen">
<meta name="author" content="Morozov Dmytro">
```

######Для мобильных devices респонсив дизайн

```
<meta name="viewport" content="width=dev-width, initial-scale=1">
```

######Тот же респонсив но без возможности приближения

```
<meta name="viewport" content="width=dev-width, initial-scale=1 user-scalable=no">
```

######Чтобы на IE не открывалось а открывалось в Edge

```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

######Подключение таблиц стилей

```
<link rel="stylesheet" href="styles.css">
```

######Подключение шрифтов. Которые мы скачали

```
<link rel="stylesheets" href="style_font.css">
```

######Подключение шрифтов с помошью сервисов

```
<link href="сгенерированная ссылка" rel="styledheet">
```
