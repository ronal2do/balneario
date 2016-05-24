@extends('welcome')

@section('content')

<div class="row">
		<div class="col-sm-4 Box__azul">
			<div class="col-xs-8 col-sm-12 Padding-zero">
				<h2 class="Box__titulo">Compromisso <br> com as <br> <span class="Box__titulo-azul">novas idéias.</span></h2>
			</div>
			<div class="col-xs-4 col-sm-12">
				<a href="/compromisso" class="Box__titulo-link"><span class="hidden-xs">clique aqui</span>
				<i class="fa fa-caret-right fa-2x dif" aria-hidden="true"></i></a>
			</div>
		</div>

		<div class="col-sm-4 Box__laranja">
			<div class="col-xs-8 col-sm-12 Padding-zero">
				<h2 class="Box__titulo">Eixos para <br> <span class="Box__titulo-laranja">a balneário <br> que queremos.</span></h2>
			</div>
			<div class="col-xs-4 col-sm-12">
				<a href="/eixos" class="Box__titulo-link"><span class="hidden-xs">clique aqui</span>
				<i class="fa fa-caret-right fa-2x" aria-hidden="true"></i></a>
			</div>
		</div>

		<div class="col-sm-4 Box__marine">
			<div class="col-xs-8 col-sm-12 Padding-zero">
				<h2 class="Box__titulo-var">Pra onde vão <br>suas ideias? <br><span class="Box__titulo-var-marine">Compartilhe <br>com a gente.</span></h2>
			</div>
			<div class="col-xs-4 col-sm-12">
				<a href="/compartilhe" class="Box__titulo-link var"><span class="hidden-xs">clique aqui</span>
				<i class="fa fa-caret-right fa-2x" aria-hidden="true"></i></a>
			</div>
		</div>
</div>

@endsection