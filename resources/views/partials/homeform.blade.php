@extends('welcome')

@section('content')
<style>
.Box__titulo-link:hover{
	color: #123456;
}
.Box__formulario {
	background-color: #4bc2c4;
  color: #151e47;
}
</style>
<div class="">
	<div class="container Box__formulario">
		<div class="col-sm-12">
			<br>
			<h2 class="Box__titulo">Equipe  Novas<span class="Box__titulo-marine" style="color:#151E47"> ideias.</span></h2>
			<br>
			<h5>Pesquisa com servidores (as) públicos municipais.</h5>
			<p>Este é um levantamento do perfil profissional dos servidores (as) públicos da Prefeitura de Balneário Camboriú, para identificar suas habilidades e experiências, visando preencher cargos na futura administração pública municipal (2017-2020) e organizar programas de treinamento e valorização de pessoal. Todas as informações serão tratadas sigilosamente e incorporadas futuramente à ficha do RH. Em caso de dúvida envie e-mail para: balneariodenovasideias@gmail.com. </p>
		</div>
		<div class="col-sm-12">
			<a href="https://docs.google.com/forms/d/e/1FAIpQLScXlUlVLRgv8G7SycO7ppXctivpYNcPQMm4nnSuOmd3zYYsiA/viewform" class="Box__titulo-link " target="_blank">PREENCHER FORMULÁRIO
			<i class="fa fa-caret-right fa-2x" aria-hidden="true"></i></a>
		</div>
	</div>
</div>

@endsection
