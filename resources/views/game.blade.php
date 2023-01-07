
@extends('template')
@section('content')

<div id="first" class="masthead row" style="margin: auto;">
<div id="win" class="text-center" style="font-size:40px; color: red;"> </div>

<div class="timer text-center" style="font-size: 60px;">
    
    <form id="myForm" action="{{ asset('/game/store') }}" method="POST">
        {{ csrf_field() }}
        <input style="text-align:center; font-size:50px;" size="1" type="text" name="min" class="minutes" readonly/>
        <input style="text-align:center; font-size:50px;" size="1" type="text" name="sec" class="seconds" readonly/>
        </br>
        <button class="btn btn-primary btn-xl" id="but" type="submit" disabled>Save Time</button>
    </form>

</div>

    <div class="text-center mt-4" style="margin-bottom:25px;">
        <a class="btn btn-xl btn-outline-light" onclick="setup();">
            <i class=""></i>
                RESET
        </a>
    </div>

</div>    

<script src="{{ asset('js/maze.js') }}"></script>
<script src="{{ asset('js/time.js') }}"></script>
<script src="{{ asset('js/setup.js') }}"></script>
<script src="{{ asset('js/checkColision.js') }}"></script>
<script src="{{ asset('js/moving.js') }}"></script>
<script src="{{ asset('js/win.js') }}"></script>
<script src="{{ asset('js/block.js') }}"></script>

<script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
<script defer src="https://unpkg.com/p5.collide2d"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.play/0.5.7/p5.play.min.js"></script>

@endsection