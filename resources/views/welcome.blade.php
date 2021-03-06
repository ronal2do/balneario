<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 7 ]> <html lang="pt-BR" class="ie7">    <![endif]-->
<!--[if IE 8 ]>    <html lang="pt-BR" class="ie8">    <![endif]-->
<!--[if IE 9 ]>    <html lang="pt-BR" class="ie9">    <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html lang="pt-BR"><!--<![endif]-->
<html lang="pt-BR" ng-app="balneario">
<head>
	<meta charset="utf-8">
	<meta name="format-detection" content="telephone=no">
	<meta name="viewport" content="width=device-width">

	<link rel="apple-touch-icon" sizes="57x57" href="./assets/favicon.ico/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="./assets/favicon.ico/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="./assets/favicon.ico/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="./assets/favicon.ico/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="./assets/favicon.ico/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="./assets/favicon.ico/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="./assets/favicon.ico/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="./assets/favicon.ico/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="./assets/favicon.ico/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="./assets/favicon.ico/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon.ico/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="./assets/favicon.ico/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="./assets/favicon.ico/favicon-16x16.png">
	<link rel="manifest" href="./assets/favicon.ico/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="./assets/favicon.ico/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
	<link href="./assets/css/vendor/bootstrap.css" rel="stylesheet">
	<link rel="stylesheet" href="./assets/css/vendor/flat-ui.css">
	<link rel="stylesheet" href="./assets/css/vendor/sweetalert.css">
	<link rel="stylesheet" href="./assets/css/style.css">

	<title>Balneário de novas idéias</title>
</head>
<body>
<div class="container-fluid row Fundo">
    <div class="container">
		<div class="col-sm-6 col-xs-6 col-md-6">
			 <div class="Logo-container">
	            <a href="/" class="Logo-container-link">
	                <img src="./assets/logo.png" alt="logo" class="Logo" width="100px">
	            </a>
	        </div>
		</div>
		<div class="col-sm-6 col-xs-6 col-md-6">
			<div class="Logo-sociais">
	        	<a href="https://www.facebook.com/fabriciooliveira05/" target="_blank"><i class="fa fa-facebook-official"></i></a>
				<a href="https://www.instagram.com/fabriciooliveirabc/" target="_blank"><i class="fa fa-instagram"></i></a>
	        </div>
		</div>
    </div>
</div>

<div class="container Box__container" >
@yield('content')
</div>
<br/>
<footer>
	<div class="container Footer">
		<a href="https://www.facebook.com/fabriciooliveira05/" target="_blank"><i class="fa fa-facebook-official"></i></a>
		<a href="https://www.instagram.com/fabriciooliveirabc/" target="_blank"><i class="fa fa-instagram"></i></a>
	</div>
</footer>
<!-- Scripts -->
<script src="https://code.jquery.com/jquery-1.12.3.min.js" integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ=" crossorigin="anonymous"></script>
<script src="./assets/js/app.js"></script>
    <!-- Include this after the sweet alert js file -->
    @include('sweet::alert')
</body>
</html>
