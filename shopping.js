
$(document).ready(function() {

//enter will click add
$('.I').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('.add').click();
		};
	});	

//add item
$('button.add').click(function() {
if ( $('.I').val().trim().length == 0 ) {
	$("#error").show();	  
} else { $('ul').append(
	'<li class="item">' + '<p>' + $('.I').val() 
	+ '</p>' + '<i class="fa fa-trash "></i></li>'    );
	  }

						});

//add item:
$('.item').on('click', function(){
	
	event.preventDefault;
	$(this).closest('li').toggleClass('strike') 
	
	});

//remove item:
$('ul').on('click', 'i', function(event){
	event.preventDefault;
	$(this).closest('li').remove();
	});

});






















