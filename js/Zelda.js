function cityOnClick(id){
	window.location.href = "./Zelda.html#descricao";
	switch(id){
		case "11":
			$('#descTitulo').html("City 1");
			$('#descSub').html("Gerudo Valey");
			break;
		case "12":
			$('#descTitulo').html("City 2");
			$('#descSub').html("Gerudo Valey");
			break;
		case "13":
			$('#descTitulo').html("City 3");
			$('#descSub').html("Gerudo Valey");
			break;
		case "21":
			$('#descTitulo').html("City 1");
			$('#descSub').html("Lost Woods");
			break;
		case "22":
			$('#descTitulo').html("City 2");
			$('#descSub').html("Lost Woodsy");
			break;
		case "23":
			$('#descTitulo').html("City 3");
			$('#descSub').html("Lost Woods");
			break;
		case "31":
			$('#descTitulo').html("City 1");
			$('#descSub').html("Hyrule Fields");
			break;
		case "32":
			$('#descTitulo').html("City 2");
			$('#descSub').html("Hyrule Fields");
			break;
		case "33":
			$('#descTitulo').html("City 3");
			$('#descSub').html("Hyrule Fields");
			break;
		case "41":
			$('#descTitulo').html("City 1");
			$('#descSub').html("Death Mountain");
			break;
		case "42":
			$('#descTitulo').html("City 2");
			$('#descSub').html("Death Mountain");
			break;
		case "43":
			$('#descTitulo').html("City 3");
			$('#descSub').html("Death Mountain");
			break;
		case "51":
			$('#descTitulo').html("City 1");
			$('#descSub').html("Zoras Domain");
			break;
		case "52":
			$('#descTitulo').html("City 2");
			$('#descSub').html("Zoras Domain");
			break;
		case "53":
			$('#descTitulo').html("City 3");
			$('#descSub').html("Zoras Domain");
			break;

	}
}

$(document).ready(function(){
	var area1_audio = 	$('#area1').find('audio')[0];;
	$('#area1').hover(function(){
		area1_audio.play();
	},
	function(){
		area1_audio.pause();
	});


	$('#city11').click(function(){
		 cityOnClick("11");
	});

	$('#city12').click(function(){
		 cityOnClick("12");
	});
	$('#city13').click(function(){
		 cityOnClick("13");
	});

	$('#city21').click(function(){
		 cityOnClick("21");
	});
	$('#city22').click(function(){
		cityOnClick("22");
	});
	$('#city23').click(function(){
		 cityOnClick("23");
	});

	$('#city31').click(function(){
		 cityOnClick("31");
	});
	$('#city32').click(function(){
		 cityOnClick("32");
	});
	$('#city33').click(function(){
		 cityOnClick("33");
	});

	$('#city41').click(function(){
		 cityOnClick("41");
	});
	$('#city42').click(function(){
		 cityOnClick("42");
	});
	$('#city43').click(function(){
		 cityOnClick("43");
	});

	$('#city51').click(function(){
		 cityOnClick("51");
	});
	$('#city52').click(function(){
		 cityOnClick("52");
	});
	$('#city53').click(function(){
		 cityOnClick("53");
	});
});