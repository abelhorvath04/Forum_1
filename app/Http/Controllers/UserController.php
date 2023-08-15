<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;

class UserController extends Controller
{

    function register(RegisterRequest $request)
    {

        $validated = $request->validated();

        User::create($validated);

        return redirect()->back()->with('success', 'Sikeres regisztráció!');
    }

    function login(Request $request)
    {
        $proba = Auth::attempt(['email' => $request->email, 'password' => $request->password, $request->remember]);

        if (!$proba) {
            return redirect()->back()->with('error', 'Sikertelen belépés');
        } else {
            return redirect()->to('/profile')->with('success', 'Sikeres belépés!');
        }
    }
}
