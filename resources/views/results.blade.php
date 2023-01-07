@extends('template')
{{$x=0}}
@section('content')
    <h2 class="masthead page-section-heading text-center text-uppercase text-secondary mb-0">Results</h2>
    <div style="margin: auto; text-align:center;">
    <table class="table table-dark" style="width:50%; text-align:center;margin: auto;margin-bottom:100px; ">
  <thead style="font-size:25px">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Minutes</th>
      <th scope="col">Seconds</th>
    </tr>
  </thead>
  <tbody style="font-size:25px">
    @foreach($results as $item)

    <tr>
      <th scope="row">{{ ++$x }}</th>
      <td>{{ $item->minutes }}</td>
      <td>{{ $item->seconds }}</td>
    </tr>
    @endforeach

  </tbody>
</table>
    </div> 

    
@endsection