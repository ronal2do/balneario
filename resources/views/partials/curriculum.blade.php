@extends('welcome')

@section('content')

	<div class="row">
		<div class="Box__marine">
			<div class="col-xs-8 Padding-zero">
				<h2 class="Box__titulo">Equipe <br> Novas  <br><span style="color: #151E47">Ideias</span></h2>
			</div>
			<div class="col-xs-4 Padding-zero hidden-md hidden-sm hidden-xs">
				<p >
					Estamos cadastrando currículos de servidores públicos municipais para identificar suas habilidades e experiências visando preencher cargos na administração pública para a próxima gestão. Por favor, encaminhe seu currículo atualizado e detalhado indicando setor ou atividade de seu interesse.
				</p>
			</div>
		</div>

		<div class="row">
			<div class="Form--conteudo visible-md visible-sm visible-xs">
				<p style="font-size:13px;">
					Estamos cadastrando currículos de servidores públicos municipais para identificar suas habilidades e experiências visando preencher cargos na administração pública para a próxima gestão. Por favor, encaminhe seu currículo atualizado e detalhado indicando setor ou atividade de seu interesse.
				</p>

			</div>
		</div>
	<p style="font-size:10px; color: red">Preenchimento necessário *</p>
		<div class="row">
			<div class="lead Form--conteudo">
				{!! Form::open(array('url' => 'curriculum', 'name' => 'myForm',  'enctype' => 'multipart/form-data' )) !!}
					<div class="form-group">
		            	<input  type="text"
	            				name="nome"
				            	placeholder="Nome completo: *"
				            	data-ng-model="nome"
				            	class="form-control"
				            	required pristine>
		          	</div>
		          	<p style="font-size:10px; color: red" data-ng-show="myForm.nome.$invalid && myForm.nome.$dirty">Nome necessário *</p>
					<div class="form-group">
		            	<input  type="text"
	            				name="matricula"
				            	placeholder="Matricula: *"
				            	data-ng-model="email"
				            	class="form-control"
				            	required pristine>
		          	</div>
		          	<p style="font-size:10px; color: red" data-ng-show="myForm.email.$invalid && myForm.email.$dirty">Email necessário *</p>
		          	<div class="form-group">
		            	<input  type="telefone"
	            				name="telefone"
				            	placeholder="Telefone: *"
				            	data-ng-model="telefone"
				            	mask="(99) 9?9999-9999"
				            	class="form-control"
				            	required pristine>
		          	</div>
		          	<p style="font-size:10px; color: red" data-ng-show="myForm.telefone.$invalid && myForm.telefone.$dirty">Telefone necessário *</p>

						<div class="form-group">
								<p style="padding: 14px 14px 0px;">Área de interesse:</p>
								<div class="col-sm-4">
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="gestão">gestão </label>
									</div>
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="novas tecnologias">novas tecnologias </label>
									</div>
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="recursos humanos">recursos humanos  </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="infraestrutura urbana">infraestrutura urbana  </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="saúde">saúde </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="educação">educação  </label>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="meio ambiente">meio ambiente </label>
									</div>
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="turismo">turismo </label>
									</div>
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="segurança urbana">segurança urbana </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="juventude">juventude  </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="esporte e lazer">esporte e lazer  </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="mobilidade urbana">mobilidade urbana </label>
									</div>
								</div>
								<div class="col-sm-4">
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="patrimônio histórico">patrimônio histórico  </label>
									</div>
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="atendimento">atendimento  </label>
									</div>
									<div class="checkbox">
									  <label><input type="radio" class="form-check-input" name="interesse" value="políticas sociais">políticas sociais  </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="cultura">cultura  </label>
									</div>
									<div class="checkbox">
										<label><input type="radio" class="form-check-input" name="interesse" value="direitos de crianças e adolescentes">direitos de crianças e adolescentes</label>
									</div>
								</div>
		        </div>
						<div style="clear:both;"></div>
						<div class="form-group">
							<p style="padding: 14px 14px 0px;">Anexar currículo <br>Serão aceitos currículos nas extensões .doc .docx .pdf</p>
							<input type="file"
									name="curriculo"
									class="form-control"
									required pristine>
						</div>

					<input class="btn btn-block Button"
						type="submit"
						value="Enviar"
						data-ng-disabled="myForm.nome.$invalid || myForm.email.$invalid || myForm.telefone.$invalid || myForm.endereco.$invalid" >
					{!! Form::close() !!}
			</div>
		</div>
	</div>
@endsection
