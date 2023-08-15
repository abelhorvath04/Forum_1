<?php

use Illuminate\Http\Request;
use App\Http\Middleware\OnlyUsers;
use App\Http\Middleware\OnlyGuests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificationController;

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

Route::get('/{any?}', function () {
    return view('welcome');
});

Route::group(['prefix' => 'vendeg', 'middleware' => [OnlyGuests::class]], function () {

    Route::get('/regisztracio', function () {
        return view('welcome');
    })->name('register');

    Route::post('/regisztracio', [UserController::class, 'register'])->name('post.register');

    Route::get('/belepes', function () {
        return view('login');
    })->name('login');

    Route::post('/belepes', [UserController::class, 'login'])->name('post.login');
});

Route::group(['prefix' => 'user', 'middleware' => [OnlyUsers::class]], function () {

    Route::get('/profile', function () {
        return view('profile');
    })->name('profile');

    Route::get('/logout', function () {
        Auth::logout();
        return redirect()->route('login')->with('success', 'Sikeres kilépés');
    })->name('logout');
});
