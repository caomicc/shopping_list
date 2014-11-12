
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
$('ul').on('click', 'li', function(){
	
	event.preventDefault;
	$(this).toggleClass('strike'); 
	$(this).find('i').toggleClass('fa-trash').toggleClass('fa-trash-o');
	});

//remove item:
$('ul').on('click', 'i', function(event){
	event.preventDefault;
	$(this).closest('li').remove();
	});

});






















