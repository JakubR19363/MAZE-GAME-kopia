<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReultController;
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
    return view('index');
})->name('first');

Route::get('/game', function () {
    return view('game');
});

Route::get('/results', [ReultController::class, 'resultView'])->name('res');

Route::post('/game/store', [ReultController::class, 'store'])->name('store');


