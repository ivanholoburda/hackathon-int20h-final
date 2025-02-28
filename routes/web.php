<?php

use App\Http\Controllers\User\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage/Index', []);
})
    ->middleware('auth')
    ->name('home');

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'loginIndex')
        ->name('login');
    Route::get('/register', 'registerIndex')
        ->name('register');
    Route::post('/logout', 'logout')
        ->name('logout');
    Route::post('/login', 'login')
        ->name('auth.login');
    Route::post('/register', 'register')
        ->name('auth.register');
});
