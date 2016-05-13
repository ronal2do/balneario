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

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">
 <link href="assets/css/vendor/bootstrap.css" rel="stylesheet">
<link rel="stylesheet" href="assets/css/vendor/flat-ui.css">
<link rel="stylesheet" href="assets/css/style.css">
<style>
/* ANIMATIONS
============================================================================= */

/* leaving animations ----------------------------------------- */

/* slide in from the bottom */
@keyframes slideOutLeft {
    to      { transform: translateX(-100%); }
}

/* slide in from the right */
@keyframes slideInRight {
    from    { transform:translateX(100%); }
    to      { transform: translateX(0); }
}

/* slide in from the bottom */
@keyframes slideInUp {
    from    { transform:translateY(100%); }
    to      { transform: translateY(0); }
}
  .ng-enter{ animation: slideInRight 0.5s linear; z-index: 8888; }
  .ng-leave{ animation: slideOutLeft 0.3s linear; z-index: 9999;}
 [disabled]{
        background-color: rgba(75, 194, 196, 0.44);
 }

</style>
<title>Balnário de novas idéias</title>

</head>
<body>
<div class="container-fluid row Fundo">
    <div class="container">
        <div class="Logo-container">
            <a href="/#/" class=" Logo-container-link">
                <img src="./assets/logo.png" alt="logo" class="Logo" width="100px">
            </a>
        </div>
    </div>

</div>

<div class="container Box__container" data-ng-view></div>
    
<!-- Scripts -->
<script   src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
<script src="./assets/js/vendor/angular.min.js"></script>
<script src="./assets/js/vendor/angular-animate.min.js"></script>
<script src="./assets/js/vendor/angular-route.min.js"></script>
<script src="./assets/js/app.js"></script>

</body>
</html>
