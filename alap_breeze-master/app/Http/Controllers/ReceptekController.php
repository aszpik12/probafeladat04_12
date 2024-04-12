<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReceptekController extends Controller
{
    public function show(){
        $kat=DB::table('kategoria as kat')
        ->select('receptek.*', 'kat.nev as kategorianev')
        ->join('receptek','kat.id','=','receptek.kat_id')
        ->get();
        return $kat;
    }

    public function delete(){
        
    }
}
