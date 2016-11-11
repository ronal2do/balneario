@extends('welcome')

@section('content')

<div class="row">
		<a href="/compromisso">
			<div class="col-sm-4 Box__azul">
				<div class="col-xs-8 col-sm-12 Padding-zero">
					<h2 class="Box__titulo">Compromisso <br> com as <br> <span class="Box__titulo-azul">novas ideias.</span></h2>
				</div>
				<div class="col-xs-4 col-sm-12">
					<a href="/compromisso" class="Box__titulo-link"><span class="hidden-xs">clique aqui</span>
					<i class="fa fa-caret-right fa-2x dif" aria-hidden="true"></i></a>
				</div>
			</div>
		</a>
		<a href="/eixos">
			<div class="col-sm-4 Box__laranja">
				<div class="col-xs-8 col-sm-12 Padding-zero">
					<h2 class="Box__titulo">Eixos para <br> <span class="Box__titulo-laranja">a balneário <br> que queremos.</span></h2>
				</div>
				<div class="col-xs-4 col-sm-12">
					<a href="/eixos" class="Box__titulo-link"><span class="hidden-xs">clique aqui</span>
					<i class="fa fa-caret-right fa-2x" aria-hidden="true"></i></a>
				</div>
			</div>
		</a>
		<a href="/equipe">
			<div class="col-sm-4 Box__marine">
				<div class="col-xs-8 col-sm-12 Padding-zero">
					<h2 class="Box__titulo">Equipe <br>Novas <br><span class="Box__titulo-marine" style="color:#151E47">ideias.</span></h2>
				</div>
				<div class="col-xs-4 col-sm-12">
					<a href="/equipe" class="Box__titulo-link "><span class="hidden-xs">clique aqui</span>
					<i class="fa fa-caret-right fa-2x" aria-hidden="true"></i></a>
				</div>
			</div>
		</a>
</div>

@endsection
