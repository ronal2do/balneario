<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curriculum extends Model
{
  protected $fillable = [
    'nome',
    'matricula',
    'telefone',
    'interesse',
    'curriculo'
  ];
}
