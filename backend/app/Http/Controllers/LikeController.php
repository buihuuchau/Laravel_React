<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class LikeController extends Controller
{
    function listlike()
    {
        $like = Like::all();
        return response()->json([
            "like" => $like,
        ]);
    }
    function addlike(Request $request)
    {
        $chuoi = $request->input('like');
        if ($chuoi != null) {
            $array = explode(" ", $chuoi); // ko nen xai dau , nen xai dau cach space
            foreach ($array as $rowchuoi) {
                $like = new Like();
                $like->name = $rowchuoi;
                $like->save();
            }
        }
    }
}
