var numSq = 16;

function genGrid(par){
	$('#wrapper').find('div').remove();
	for(var i=0; i<(par*par); i++){
		$('#wrapper').append('<div></div>');
	}
  var size=(800/par);/*delete this two after tests border*/
  $('#wrapper').find('div').width(size).height(size)/*.css('display','inline-block')*/;
}

$(document).ready(function(){
  genGrid(numSq);
  $('#wrapper').on('mouseenter','div',function(){
	$(this).addClass('marked');
  });
  $('button').on('click',function(){
	$('.marked').removeClass('marked');
	numSq = prompt("How many squares?");
	genGrid(numSq);	
  });
});
