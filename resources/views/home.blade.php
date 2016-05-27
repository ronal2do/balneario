@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    @foreach( $ideias as $i )
                        <ul>
                            <li>Nome {{ $i->nome }} | Email {{ $i->email }}</li>
                            <li>{!! $i->ideia !!}</li>
                        </ul>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
