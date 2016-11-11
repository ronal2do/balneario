<?php

namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;
use Response;
use App\Http\Requests;
use App\Curriculum;

use Alert;
use Illuminate\Support\Facades\Redirect;


class CurriculumController extends Controller
{
    public function store(Request $request){

    // $input 	= $request->all();
    // $nome   = $input['nome'];
    // $matricula  = $input['matricula'];
    // $telefone  = $input['telefone'];
    // $interesse   = $input['interesse'];
    // $curriculo  = $input['curriculo'];
    // dd($input);

    $curriculo = new Curriculum(array(
      'nome' => $request->get('nome'),
      'matricula' => $request->get('matricula'),
      'telefone' => $request->get('telefone'),
      'interesse' => $request->get('interesse')
     ));

     $curriculo->save();

     $curriName = $curriculo->id . '.' .
         $request->file('curriculo')->getClientOriginalExtension();

     $request->file('curriculo')->move(
         base_path() . '/public/resumes/', $curriName
     );

     //$create = Curriculum::create($input);

     Alert::success('Obrigado por compartilhar seu Curriculo')->persistent('Fechar');

        //  Mail::queue('email.obrigado', [
        //     'nome'       => $nome,
        //     'matricula'  => $matricula,
        //     'telefone'   => $telefone,
        //     'interesse'  => $interesse,
        //     'curriculo'  => $curriculo
        //   ], function ($m) use ($nome, $matricula, $telefone, $interesse, $curriculo) {
        //
        //    $m->to($email)
        //       ->cc('ronal2do@gmail.com','Balneário de novas ideias')
        //       ->subject("Equipe novas ideias");
        // });

     return view('partials.curriculum');
   }
}
