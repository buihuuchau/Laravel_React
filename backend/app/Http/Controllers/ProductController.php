<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Image;
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
        $product = Product::all();
        return response()->json([
            "product" => $product,
        ]);
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
        $Product = Product::where('id', $request->idproduct)->first();
        return $Product;
    }

    function doupdateproduct(Request $request)
    {
        // $product['name'] = $request->input('name');
        // if ($request->file) {
        //     $filepath = $request->file->store('public/product');
        //     $linkfilepath = 'storage' . substr($filepath, 6);
        //     $product['file_path'] = $linkfilepath;
        // }
        // $product['description'] = $request->input('description');
        // $product['price'] = $request->input('price');
        // DB::table('products')
        //     ->where('id', $request->input('idproduct'))
        //     ->update($product);
        // return $product;
        $product = Product::find($request->input('idproduct'));
        $product->name = $request->input('name');
        if ($request->file) {
            $filepath = $request->file->store('public/product');
            $linkfilepath = 'storage' . substr($filepath, 6);
            $product->file_path = $linkfilepath;
        }
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->save();
        return $product;
    }
    function updateimageproduct(Request $request)
    {
        $idproduct = $request->input('idproduct');
        $imageproduct = Image::where('idproduct', $idproduct)->get();
        return $imageproduct;
    }
    function deleteimageproduct(Request $request)
    {
        Image::destroy($request->input('id'));
    }
    function uploadimageproduct(Request $request)
    {
        $file = $request->file;
        foreach ($file as $rowfile) {
            $image = new Image();
            $image->idproduct = $request->input('idproduct');
            $filepath = $rowfile;
            $filepath = $filepath->store('public/product');
            $linkfilepath = 'storage' . substr($filepath, 6);
            $image->link = $linkfilepath;
            $image->save();
        }

        // $image = new Image();
        // $image->idproduct = $request->input('idproduct');
        // $filepath = $file;
        // $filepath = $filepath->store('public/product');
        // $linkfilepath = 'storage' . substr($filepath, 6);
        // $image->link = $linkfilepath;
        // $image->save();
    }
}
