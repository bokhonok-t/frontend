$(document).ready(function(){
	checkURL();
	signAnim();
	menu();
	catalog();
	if(window.location.hash == ''){
		window.location.hash = '#all';
	}

	$('.content_load_nav').click(function (e){
			checkURL(this.hash);
	});
	setInterval("checkURL()",250);
});

function input_style() {
	$('.input input')
		.each(updateInputUsedState)
		.blur(updateInputUsedState);
}
function updateInputUsedState() {
	var used = ($(this).val().length > 0);
	$(this).toggleClass('used', used);
}

function catalog() {
	$('.catalog-item').click(function (){
			var hash = $(this).attr('href');
			var url = hash.replace('#','');
			$('.content_wrapper').load('pages/'+ url + '.php', function() {
				catalogAnim();
				input_style();
			});
	});
}
function menu() {
	$('.menu-item').each(function() {
		var href = $(this).attr('href');
		hash = window.location.hash;
		href = href.replace(hash,'');
		if (href === window.location.pathname) {
			$(this).addClass('menu-item-active');
		}
	});
}

var lasturl="";
function checkURL(hash) {
	hash=window.location.hash;
	if(hash != lasturl) {
		lasturl=hash;
		if (hash == "")
			console.log('');
		else
			loadPage(hash);
	}
}

function loadPage(url) {
	url=url.replace('#','');
	pathname = window.location.pathname.substr(1);
	$.ajax ({
		type: 'POST',
		url: '../load_page.php',
		data: {page: url, pathname: pathname},
		dataType: "html",
		success: function(msg) {
			if(parseInt(msg)!=0) {
				$('.content_load').html(msg);
				$('.content_load_nav').each(function() {
					var href = $(this).attr('href');
					if (href === '#' + url) {
						$(this).addClass('content_load_nav_active');
					}
					$(window).on('hashchange', function() {
					  $('.content_load_nav').removeClass("content_load_nav_active");
					});
					input_style();
				});
			}
		}
	});
}
function catalogAnim() {
	$('.catalog-load-item-btn').click(function() {
		$('.catalog-load-item').slideUp(400);
		$('.task-create-wrapper').slideDown(500);
	});
}
function signAnim() {
	$('#showSignUp').click(function() {
		$('#signIn').slideUp();
		$('#signUp').fadeIn();
	});
	$('.backToSignIn').click(function() {
		$('#signUp').slideUp();
		$('#signIn').slideDown();
	});
}
