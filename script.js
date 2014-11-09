//Variable Definitions

var present_image = 0;
var present_image_fineArts = 0;
var present_image_projects = 0;
var total_image_fineArts = 5;
var total_image_projects = 3;

var previous_button_fineArts;
var current_button_projects;
var previous_button_projects;
var current_button_fineArts;

function showNext( id )
{
	if( id == "fineArts" ) { 
		total_image = total_image_fineArts; 
		present_image = present_image_fineArts;
	}
	else if( id == "projects" ) { 
		total_image = total_image_projects; 
		present_image = present_image_projects;
	}

	previous = present_image;
	
	present_image = present_image + 1;
	present_image = (present_image)%total_image;
	
	current = present_image;
	setDots(id, previous, current );

	console.log((present_image));
	elt = document.getElementById(id);
	console.log( "images/" + id + present_image + ".jpg" );
	elt.getElementsByTagName('img')[1].src = "images/" + id + present_image+ ".jpg" ;

	if( id == "fineArts" ) { 
		 present_image_fineArts = present_image;
	}
	else if( id == "projects" ) { 
		present_image_projects = present_image;
	}
}

function showPrev( id )
{

	if( id == "fineArts" ) { 
		total_image = total_image_fineArts; 
		present_image = present_image_fineArts;
	}
	else if( id == "projects" ) { 
		total_image = total_image_projects; 
		present_image = present_image_projects;
	}
	previous = present_image;
	present_image = present_image -1 ;
	if( present_image< 0)
		{present_image = total_image + present_image; }
	
	current = present_image;
	setDots(id, previous, current );

	console.log((present_image));
	console.log( "images/" + id + present_image + ".jpg" );
	elt = document.getElementById(id);
	elt.getElementsByTagName('img')[1].src = "images/" + id + present_image+ ".jpg" ;

	if( id == "fineArts" ) { 
		 present_image_fineArts = present_image;
	}
	else if( id == "projects" ) { 
		present_image_projects = present_image;
	}
}

function setPageDimensions()
{
	elts = document.getElementsByClassName( 'container' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width;
		elts[i].style.height = screen.height;
	}

	elts = document.getElementsByClassName( 'container-header' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width;
		elts[i].style.height = screen.height/10;
	}
	//container-box
	elts = document.getElementsByClassName( 'container-box' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width;
	}

	elts = document.getElementsByClassName( 'display-box' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width/1.7;
		elts[i].style.height = screen.width/3;
	}

	elts = document.getElementsByClassName( 'about-container' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width/5;
		elts[i].style.height = screen.width/4;
	}

	elts = document.getElementsByClassName( 'blank-container' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width/12;
		elts[i].style.height = screen.width/4;
	}

	elts = document.getElementsByClassName( 'contact-container' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width;
		elts[i].style.height = screen.width/12;
	}

	elts = document.getElementsByClassName( 'menubar' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width;
		elts[i].style.height = screen.height/40;
		elts[i].style.padding = screen.height/40;
	}

	elts = document.getElementsByClassName( 'menubar-title' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width/12	;
		//elts[i].style.height = screen.height/20;
	}

	elts = document.getElementsByClassName( 'menubar-doc' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width/12	;
		//elts[i].style.height = screen.height/20;
	}

	elts = document.getElementsByClassName( 'menubar-space' );
	for( var i=0; i<elts.length; i++ )
	{
		elts[i].style.width = screen.width/2.5	;
		//elts[i].style.height = screen.height/20;
	}

}

function setDots(id,prev,curr)
{
	prevId = id + '-dot' + prev;
	currId = id + '-dot' + curr;
	console.log( prevId );
	console.log( currId );
 	previous_button  = document.getElementById( prevId );
 	current_button   = document.getElementById( currId );
 	previous_button.style.background = '#444444';
 	current_button.style.background = '#2EC19C';
 	if( id == "fineArts")
	{
	 	previous_button_fineArts = previous_button;
	 	current_button_fineArts = current_button;	
 	}
 	else if( id == "projects")
	{
	 	previous_button_projects = previous_button;
	 	current_button_projects = current_button;	
 	}
}

function main()
{
	setPageDimensions();
	setDots('fineArts',0,0);
	setDots('projects',0,0);
}

window.onload = main;