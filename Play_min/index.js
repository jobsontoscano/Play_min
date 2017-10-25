

var colors = ['green', 'black', 'red', 'purple'];

$("#start").on("click", function(){
		var dificuldade = parseInt($("#dificuldade").val());
		setInterval(function() {
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
		$("#start").css("display", "none");
		$("#dificuldade").css("display", "none");
});
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