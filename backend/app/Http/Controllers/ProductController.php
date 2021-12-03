<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Facades\Hash;
use DB;

class ProductController extends Controller
{
    function addProduct(Request $request)
    {
        $Product = new Product();
        $Product->name = $request->input('name');
        $filepath = $request->file;
        $filepath = $filepath->store('public/product');
        $linkfilepath = 'storage' . substr($filepath, 6);
        $Product->file_path = $linkfilepath;
        // $Product->file_path = $request->file('file')->store('products');
        $Product->description = $request->input('description');
        $Product->price = $request->input('price');
        $Product->save();
        return $Product;
    }

    function listProduct()
    {
        return Product::all();
    }

    function deleteProduct(Request $request)
    {
        $Product = Product::where('id', $request->id)->delete();
        // if ($Product) {
        //     $result = 0;
        // } else {
        //     $result = 1;
        // }
        // return $result;
    }
}
