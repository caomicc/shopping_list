
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
	'<li class="item">' + $('.I').val() 
	+ '<i class="fa fa-trash "></i></li>'    );
	  }

						});
});


//change class:
$('ul').on('click', 'li', function(){
	$(this).toggleClass('strike'); 
	
});

//remove item:
$('ul').on('click', 'i', function(){
	$(this).closest('li').remove();
});
























