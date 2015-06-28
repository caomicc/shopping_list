$(document).ready(function() {
	//add new items from form
	$('form').submit(function(e){
		e.preventDefault();
		var newItem = $(this).find('input');
		var newItemValue = newItem.val();
		if(newItemValue.trim() != '' ){
			$('#sortable').append('<li class="item col-sm-12"><input type="checkbox" class="col-sm-1"/><a class="col-sm-8 editable" contenteditable="true">' + newItemValue +'</a><i class="fa fa-pencil editBtn col-sm-1 col-sm-offset-1"></i><i class="fa fa-trash col-sm-1 "></i></li>');
		}
		newItem.val('');
	});
	//allow items to be sorted by user
	$('#sortable').sortable({
		 containment: "parent"
	});
	//use pencil icon to edit items
	$('#sortable').on("click",'.editBtn', function(e) {
		console.log($(this));
    	$(this).siblings('.editable').focus();
	});
	//dbl click to make inactive
	$('#sortable').on("dblclick",'li', function() {
		$(this).toggleClass('inactive');
	});
	//check all items
	$('#checkAll').click(function(){
		$('#sortable').find('input[type="checkbox"]').attr('checked',true);
	});
	//uncheck all items
	$('#uncheckAll').click(function(){
		$('#sortable').find('input[type="checkbox"]').attr('checked',false);
	});
	//delete function
	function removeItems(elem){
		if(confirm('Are you sure you want to permanently delete this?')){
			elem.remove();
		}
	};
	//delete checked items
	$('#deleteSelection').click(function() {
		removeItems($('#sortable').find('input:checked').parent());
	});
	//delete item on click of trash icon
	$('#sortable').on('click', 'i.fa-trash',function(){
		removeItems($(this).parent());
	});
	$('#makeInactive').click(function(){
		$('#sortable').find('input:checked').parent().toggleClass('inactive');
	});
	$('.instructions i').click(function(){
		$('.instructions').toggleClass('open');
	});
	setTimeout(function(){$('.instructions').removeClass('open');},2000)	
});






















