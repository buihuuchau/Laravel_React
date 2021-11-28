<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/')->group(function () {
    Route::get('/viewregister', [
        'as' => 'viewregister',
        'uses' => 'App\Http\Controllers\UserController@viewregister',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/register', [
        'as' => 'register',
        'uses' => 'App\Http\Controllers\UserController@register',
        // 'middleware' => (['auth', 'verified'])
    ]);
});
