@extends('template')

@section('content')
    <h2 class="masthead page-section-heading text-center text-uppercase text-secondary mb-0">What is maze ???</h2>
    <div style="margin: auto;">
        <img class="masthead-avatar mb-5" src="img/maze_what.jpg" style="margin:auto; display:block;"/>
    </div>    
    <div class="row">
        <div class="col-lg-4 ms-auto" style="margin:auto;"><p class="lead">A maze is a path or collection of paths, typically from an entrance to a goal. 
            The word is used to refer both to branching tour puzzles through which the solver must find a route, 
            and to simpler non-branching ("unicursal") patterns that lead unambiguously through a convoluted layout to a goal. 
            The term "labyrinth" is generally synonymous with "maze", but can also connote specifically a unicursal pattern. 
            The pathways and walls in a maze are typically fixed, 
            but puzzles in which the walls and paths can change 
            during the game are also categorised as mazes or tour puzzles.</p>
        </div>
    </div>

    <h2 class="masthead page-section-heading text-center text-uppercase text-secondary mb-0">Generation</h2>
    <div style="margin: auto;">
        <img class="masthead-avatar mb-5" src="img/maze_generation.gif" style="margin:auto; display:block;"/>
    </div> 
    <div class="row">
        <div class="col-lg-4 ms-auto" style="margin:auto;"><p class="lead">Maze generation is the act of designing the layout of passages and walls within a maze. 
            There are many different approaches to generating mazes, 
            with various maze generation algorithms for building them, 
            either by hand or automatically by computer.</p>

            <p class="lead">There are two main mechanisms used to generate mazes. 
            In "carving passages", one marks out the network of available routes. 
            In building a maze by "adding walls", one lays out a set of obstructions within an open area. 
            Most mazes drawn on paper are done by drawing the walls, 
            with the spaces in between the markings composing the passages.</p>
        </div>
    </div>

    
    <h2 class="masthead page-section-heading text-center text-uppercase text-secondary mb-0">Solution</h2>
    <div style="margin: auto;">
        <img class="masthead-avatar mb-5" src="img/maze1.jpg" style="margin:auto; display:block;"/>
    </div> 
    <div class="row">
        <div class="col-lg-4 ms-auto" style="margin:auto;"><p class="lead">Maze solving is the act of finding a route through 
            the maze from the start to finish. 
            Some maze solving methods are designed to be used inside 
            the maze by a traveler with no prior knowledge of the maze, 
            whereas others are designed to be used by a person or computer 
            program that can see the whole maze at once.</p>

            
        </div>
    </div>
@endsection