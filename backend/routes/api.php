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
    Route::post('/addProduct', [
        'as' => 'addProduct',
        'uses' => 'App\Http\Controllers\ProductController@addProduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::get('/listProduct', [
        'as' => 'listProduct',
        'uses' => 'App\Http\Controllers\ProductController@listProduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/deleteProduct', [
        'as' => 'deleteProduct',
        'uses' => 'App\Http\Controllers\ProductController@deleteProduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/updateProduct', [
        'as' => 'updateProduct',
        'uses' => 'App\Http\Controllers\ProductController@updateProduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
    Route::post('/doupdateProduct', [
        'as' => 'doupdateProduct',
        'uses' => 'App\Http\Controllers\ProductController@doupdateProduct',
        // 'middleware' => (['auth', 'verified'])
    ]);
});
