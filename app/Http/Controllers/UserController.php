<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\EmailVerify;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;

class UserController extends Controller
{
    function register(RegisterRequest $request)
    {
        $validated = $request->validated();

        $user = User::create($validated);

        event(new Registered($user));

        auth()->login($user);

        return redirect('/profile')->with('success', "Account successfully registered and verified.");
    }
}
