<?php

namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;
use Response;
use App\Http\Requests;
use App\Ideia;

class IdeiaController extends Controller
{
    public function store(Request $request)
	{
    	$input 		= $request->all();
        
        $nome       = $input['nome']; 
        $email      = $input['email']; 
        $ideia      = $input['ideia']; 

		$create = Ideia::create($input);
 

         Mail::queue('email.obrigado', [
         		'nome' => $nome, 
         		'email' => $email
         	], function ($m) use ($email, $nome) {
            
           $m->to($email)
              ->cc('ronal2do@gmail.com','Balneário de novas ideias')
              ->subject("Balneário de novas ideias");
        });

        return response($create);
	}
}
