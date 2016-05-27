@extends('welcome')

@section('content')

	<div class="row">
		<div class="Box__marine">
			<div class="col-xs-8 Padding-zero">
				<h2 class="Box__titulo-var">Pra onde vão <br>suas ideias? <br><span class="Box__titulo-var-marine">Compartilhe <br>com a gente.</span></h2>
			</div>
			<div class="col-xs-4 Padding-zero hidden-md hidden-sm hidden-xs">
				<p >Chegou a vez da sua 
				participacão, preencha 
				os campos abaixo e mande 
				sua ideia, vamos juntos fazer
				a Balneário que queremos.</p>
			</div>
		</div>
	
		<div class="row">
			<div class="Form--conteudo visible-md visible-sm visible-xs">
				<p style="font-size:13px;">Chegou a vez da sua 
				participacão, preencha 
				os campos abaixo e mande 
				sua ideia, vamos juntos fazer
				a Balneário que queremos.</p>	
				

			</div>
		</div>
	<p style="font-size:10px; color: red">Preenchimento necessário *</p>
		<div class="row">
			<div class="lead Form--conteudo">
				{!! Form::open(array('url' => 'ideia', 'name' => 'myForm')) !!}
					<div class="form-group">
		            	<input  type="text" 
	            				name="nome" 
				            	placeholder="Nome: *" 
				            	data-ng-model="nome" 
				            	class="form-control" 
				            	required pristine>
		          	</div>
		          	<p style="font-size:10px; color: red" data-ng-show="myForm.nome.$invalid && myForm.nome.$dirty">Nome necessário *</p>
					<div class="form-group">
		            	<input  type="email" 
	            				name="email" 
				            	placeholder="Email: *" 
				            	data-ng-model="email" 
				            	class="form-control" 
				            	required pristine>
		          	</div>
		          	<p style="font-size:10px; color: red" data-ng-show="myForm.email.$invalid && myForm.email.$dirty">Email necessário *</p>
					<div class="form-group">
		            	<textarea  	type="text" 
		            				name="ideia" 
		            				value="" 
					            	placeholder="Ideia:" 
					            	data-ng-model="ideia" 
					            	class="form-control" rows="3"></textarea> 
		          	</div>
					<input class="btn btn-block Button" 
						type="submit" 
						value="Enviar" 
						data-ng-disabled="myForm.nome.$invalid || myForm.email.$invalid" >
					{!! Form::close() !!}
			</div>
		</div>	
	</div>
@endsection