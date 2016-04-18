<!DOCTYPE html>
<html>
	<head>
		<title>Войти</title>
		<link rel="stylesheet" href="../css/style.css" media="screen" title="no title" charset="utf-8">
		<?php include( "../include/head.php" ); ?>
	</head>
	<body >
		<div class="wrapper">
			<div class="sign sign-wrap">
        <div class="sign-row fadeInUp animated">
					<!-- <a href="/" id="logo"><img src="/img/logo.png" alt="logo" /></a><br> -->
					<div id="signIn">
						<input class="input" type="text" name="name" value="" placeholder="Логин">
						<input class="input" type="password" name="name" value="" placeholder="Пароль">
						<input class="input button" type="submit" name="name" value="Войти"><br>
						<span>Нет аккаунта? <div id="showSignUp">Зарегестрируйся</div> сейчас</span>
					</div>
        </div>
				<div class="sign-row" id="signUp">
					<input class="input" type="text" name="name" value="" placeholder="Логин">
					<input class="input" type="password" name="name" value="" placeholder="Пароль">
					<input class="input" type="password" name="name" value="" placeholder="E-mail">
					<input class="input button" type="submit" name="name" value="Зарегистрироваться">
					<input class="input button backToSignIn" type="submit" name="name" value="Закрыть"><br>
				</div>
			</div>
    </div>
	</body>
</html>
