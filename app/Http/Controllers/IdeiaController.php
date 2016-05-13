<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use App\Http\Requests;
use App\Ideia;

class IdeiaController extends Controller
{
    public function store(Request $request)
	{
    	$input = $request->all();
        $create = Ideia::create($input);
        return response($create);
	}
}
