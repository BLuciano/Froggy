
//Controls for the frog's movements. Also checks the boundaries
//to avoid moving out of the viewport.
$(document).keydown(function(e){
	var froggy = $("#froggy");
	var frogImg = $("#froggy img");

	switch(e.keyCode){
		case 37:
			frogImg.attr('src', "img/frogleft.gif");
			if(froggy.position().left < 1){
			} else {
				froggy.animate(
					{left: -40 + froggy.position().left + "px"}, 10);
			}
			break;

		case 38:
			frogImg.attr('src', "img/frogback.gif");
			if(froggy.position().top < 1){
			} else {
				froggy.animate(
					{top: -70 + froggy.position().top + "px"}, 10);
			}
			break;

		case 39:
			frogImg.attr('src', "img/frogright.gif");
			if(froggy.position().left > 1080){
			} else {
			froggy.animate(
				{left: 40 + froggy.position().left + "px"}, 10);
			}
			break;

		case 40:
			frogImg.attr('src', "img/frogfront.gif");
			if(froggy.position().top > 575){
			} else {
			froggy.animate(
				{top: 70 + froggy.position().top + "px"}, 10);
			}
			break;
   }
});