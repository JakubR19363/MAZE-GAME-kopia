<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\wyniki;

class ReultController extends Controller
{
    public function resultView(){
        $results = wyniki::all();
        
        $n = count($results);
        $temp = $results[0];
        do{
            for($i=0;$i<$n-1;$i++){
                if($results[$i]->minutes == $results[$i+1]->minutes){
                    if($results[$i]->seconds > $results[$i+1]->seconds){
                        $temp = $results[$i];
                        $results[$i] = $results[$i+1];
                        $results[$i+1] = $temp;
                    }
                }
                else{
                    if($results[$i]->minutes > $results[$i+1]->minutes){
                        $temp = $results[$i];
                        $results[$i] = $results[$i+1];
                        $results[$i+1] = $temp;
                    }
                }
            }
            $n--;
        }while($n > 1);


        return view('results', ['results' => $results]);
    }

    public function store(Request $request){
        //dd($request);
        $result = new wyniki();
        $result->minutes = intval($request->min);
        $result->seconds = intval($request->sec);
        $result->save();
        return redirect()->route('res');
    }
}
