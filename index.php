<!DOCTYPE html>
<html >
  <head>
    <meta charset="utf-8">
    <title>Главная</title>
    <? include( "/include/head.php" ); ?>
  </head>
  <body >
    <? include( "/include/header.php" ); ?>
    <div class="wrapper">
      <? include( "/include/menu.php" ); ?>
      <div class="content_wrapper">
        <div class="content_load_nav_wrapper">
          <a href="#all" class="content_load_nav current">Все</a>
          <a href="#ready" class="content_load_nav">Готово</a>
          <a href="#process" class="content_load_nav">В работе</a>
          <a href="#errors" class="content_load_nav">Ошибки</a>
        </div>
        <div class="content_load"></div>

      </div>
    </div>
  </body>
</html>
