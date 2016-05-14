<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/email', function () {
    return view('email.obrigado');
});
Route::auth();

Route::get('/home', 'HomeController@index');

Route::group(['middleware' => ['web']], function () {
    Route::resource('/api/ideia', 'IdeiaController');
});