$(document).ready(function(){
	//Mostrar únicamente la primera sección de la navegación de pestañas
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	//Funcionalidades de la navegación de pestañas
	$('ul.tabs li a').click(function(){
		$('#solicitud').val('0');
		$('#solicitud_pendiente').val('0');
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;

	});



	//Funcionalidad de los botones en general
	$('button').click(function(){
		switch($(this).attr('id')){
			case "boton_detalle":
				$('#detalle').modal('show');
			break;
			case "boton_borrar":
				$('#borrar').modal('show');
			break;
			default:
				if ($(this).text() === "Cancelar" || $(this).text() === "Regresar" ) {
					$('.secciones article').hide();
					$('.secciones article:first').show();
				}else{
					$('.secciones article').hide();
					var activeBut = $(this).attr('href');
					$(activeBut).show();
				}
				return false;
			break;
		}
	});

	//Cambiar de sección dependiendo de la opción seleccionada de un listbox
	var select = document.getElementById('solicitud');
	select.addEventListener('change',
	function(){
		switch($(this).val()) {
			case "0":
				$('#solicitudes_normales').hide();
				$('#solicitudes_primera_vez').show();
			  break;
			case "1":
				$('#solicitudes_primera_vez').hide();
				$('#solicitudes_normales').show();
			  break;
		  }
		return false;
	});

});