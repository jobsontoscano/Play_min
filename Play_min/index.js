

var colors = ['green', 'black', 'red', 'purple'];

$("#start").on("click", function(){
		var dificuldade = parseInt($("#dificuldade").val());
		var jogo = setInterval(function() {
			var idx = parseInt(Math.random() * 4) % 4;
			var color = colors[idx];
			var id = color + '-' + new Date().getTime();
			$(".canvas").append("<div id='" + id + "' class='bloco' style='background:" + color + ";'></div>");	
			adicionar(id, color);
			setTimeout((function(x) {
				return function() {
					$('#' + x).remove();
				}
			})(id), dificuldade);
		}, dificuldade);
	$("#parar").on("click", function(){
		clearInterval(jogo);
		$("#start").css("display", "block");
		$("#parar").css("display", "none");

		// Gerar O menu novamente
		$("#saiba").css("display", "block");
		$("#equipe").css("display", "block");
		// Finalizando o menu
		$("#contador").css("display", "none");
	});

		// $("#parar").css("display", "block");
		// Comandos para retirar os menus
		$("#saiba").css("display", "none");
		$("#equipe").css("display", "none");
		$("#tutorial").css("display", "none");
		$("#sobre").css("display", "none");
		$("#contador").css("display", "block");
		// Finalizando a parte do menu

		$("#parar").css("display", "block");
		$("#start").css("display", "none");
		$("#dificuldade").css("display", "none");
});
	// Funcionalidades nos supostos menus
	$("#saiba").on("click", function(){
		$("#tutorial").css("display", "block");
	});
	$("#equipe").on("click", function(){
		$("#sobre").css("display", "block");
	});
	// Ate aqui finaliza os codigos menu 


function adicionar(id, color){
	if (color == "red") {
		var contador = 5;
	} else if (color == "green"){
		var contador = 10;
	} else if (color == "purple") {
		var contador = -5;
	} else if (color == "black"){
		var contador = -10;
	}
	$('#' + id).on("click", function(){
			var pontus = $("#contador").val();
 			var adicionar = parseInt(pontus);
			$('#' + id).remove();
			adicionar += contador;
			$("#contador").val(adicionar);
	});		
}