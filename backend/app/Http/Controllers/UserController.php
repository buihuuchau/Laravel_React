<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Facades\Hash;
use DB;

class UserController extends Controller
{
    // function viewregister()
    // {
    //     return view('viewregister');
    // }

    function register(Request $request)
    {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $request)
    {
        $user = User::where('email', $request->input('email'))->first();
        $sai = 0;
        if (!$user || !Hash::check($request->password, $user->password)) {
            // return ["error" => "Email or password is not matched"];
            return $sai;
        }
        return $user;
    }
}
