var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('main.sass', 'public/assets/css/style.css');
    mix.scripts([
        'angular.min.js',
        'angular-route.min.js',
        'angular-animate.min.js',
        'ngMask.min.js',
        'sweetalert.min.js',
        'app.js'
    ], 'public/assets/js/app.js');
});
