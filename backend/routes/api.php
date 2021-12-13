<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('register', [UserController::class, 'register']);
Route::prefix('/')->group(function () {
    Route::post('/register', [
        'as' => 'register',
        'uses' => 'App\Http\Controllers\UserController@register',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/login', [
        'as' => 'login',
        'uses' => 'App\Http\Controllers\UserController@login',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/addproduct', [
        'as' => 'addproduct',
        'uses' => 'App\Http\Controllers\ProductController@addproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::get('/listproduct', [
        'as' => 'listProduct',
        'uses' => 'App\Http\Controllers\ProductController@listproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/deleteproduct', [
        'as' => 'deleteproduct',
        'uses' => 'App\Http\Controllers\ProductController@deleteproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/updateproduct', [
        'as' => 'updateproduct',
        'uses' => 'App\Http\Controllers\ProductController@updateproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/doupdateproduct', [
        'as' => 'doupdateproduct',
        'uses' => 'App\Http\Controllers\ProductController@doupdateproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/updateimageproduct', [
        'as' => 'updateimageproduct',
        'uses' => 'App\Http\Controllers\ProductController@updateimageproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/deleteimageproduct', [
        'as' => 'deleteimageproduct',
        'uses' => 'App\Http\Controllers\ProductController@deleteimageproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/uploadimageproduct', [
        'as' => 'uploadimageproduct',
        'uses' => 'App\Http\Controllers\ProductController@uploadimageproduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/listlike', [
        'as' => 'listlike',
        'uses' => 'App\Http\Controllers\LikeController@listlike',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/addlike', [
        'as' => 'addlike',
        'uses' => 'App\Http\Controllers\LikeController@addlike',
        // 'middleware' => (['auth', 'verified'])
    ]);
});
