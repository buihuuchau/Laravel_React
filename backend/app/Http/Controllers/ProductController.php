<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    function addproduct(Request $request)
    {
        $Product = new Product();
        $Product->name = $request->input('name');
        $filepath = $request->file;
        $filepath = $filepath->store('public/product');
        $linkfilepath = 'storage' . substr($filepath, 6);
        $Product->file_path = $linkfilepath;
        // // $Product->file_path = $request->file('file')->store('products');
        $Product->description = $request->input('description');
        $Product->price = $request->input('price');
        $Product->save();
        $thongbao = 1;
        return $thongbao;
        // return [$Product, $thongbao];
        // return response()->json([
        //     'status' => 200,
        //     'message' => "ok",
        // ]);
    }

    function listproduct()
    {
        return Product::all();
    }

    function deleteproduct(Request $request)
    {
        $Product = Product::where('id', $request->id)->delete();
        // if ($Product) {
        //     $result = 0;
        // } else {
        //     $result = 1;
        // }
        // return $result;
    }

    function updateproduct(Request $request)
    {
        $Product = Product::where('id', $request->id)->first();
        return $Product;
    }

    function doupdateproduct(Request $request)
    {
        $Product['name'] = $request->name;
        if ($request->file) {
            $filepath = $request->file->store('public/product');
            $linkfilepath = 'storage' . substr($filepath, 6);
            $Product['file_path'] = $linkfilepath;
        }
        $Product['description'] = $request->description;
        $Product['price'] = $request->price;
        DB::table('products')
            ->where('id', $request->id)
            ->update($Product);
        return $Product;
    }
}
