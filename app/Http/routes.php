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


Route::get('/',['as'=>'welcome' ,function () {
	return view('partials.home');
}]);

Route::get('/compromisso',['as'=>'compromisso' ,function () {
	return view('partials.compromisso');
}]);

Route::get('/compartilhe',['as'=>'compartilhe' ,function () {
	return view('partials.compartilhe');
}]);

Route::get('/equipe',['as'=>'curriculum' ,function () {
	return view('partials.curriculum');
}]);

Route::get('/eixos',['as'=>'eixos' ,function () {
	return view('partials.eixos');
}]);

Route::get('/email', function () {
    return view('email.obrigado');
});
Route::auth();

Route::get('/home', 'HomeController@index');

Route::group(['middleware' => ['web']], function () {
	Route::resource('/ideia', 'IdeiaController@store');
  Route::resource('/curriculum', 'CurriculumController@store');
});
