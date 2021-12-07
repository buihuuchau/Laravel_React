<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    // function viewregister()
    // {
    //     return view('viewregister');
    // }

    function register(Request $request)
    {
        // $user = new User;
        // $user->name = $request->input('name');
        // $user->email = $request->input('email');
        // $user->password = Hash::make($request->input('password'));
        // $user->save();
        $check = DB::table('users')
            ->where('email', $request->input('email'))
            ->first();
        if ($check) {
            return 0;
        } else {
            $user['name'] = $request->input('name');
            $user['email'] = $request->input('email');
            $user['password'] = md5($request->input('password'));
            DB::table('users')->insert($user);
            return 1;
        }
    }

    function login(Request $request)
    {
        $sai = 0;
        $check = DB::table('users')
            ->where('email', $request->input('email'))
            ->where('password', md5($request->input('password')))
            ->first();
        if ($check) {
            return $check;
        } else {
            return $sai;
        }
        // $user = User::where('email', $request->input('email'))->first();
        // $sai = 0;
        // if (!$user || !Hash::check($request->password, $user->password)) {
        //     // return ["error" => "Email or password is not matched"];
        //     return $sai;
        // }
        // return $user;
    }
}
