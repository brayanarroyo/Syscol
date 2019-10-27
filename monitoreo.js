$(document).ready(function(){
	//Mostrar únicamente la primera sección de la navegación de pestañas
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	//Funcionalidades de la navegación de pestañas
	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;

	});

	//Funcionalidad de los botones en general
	$('button').click(function(){
        if ($(this).text() === "Cancelar" || $(this).text() === "Regresar" ) {
            $('.secciones article').hide();
            $('.secciones article:first').show();
        }else{
			$('#tipo').val('por defecto')
			$('.secciones article').hide();
            var activeBut = $(this).attr('href');
            $(activeBut).show();
        }
        return false;
	});

	//Cambiar de sección dependiendo de la opción seleccionada de un listbox de tipos de señal
	var select = document.getElementById('tipo');
	select.addEventListener('change',
	function(){
		switch($(this).val()) {
			case "robo":
                $('#evento_rutina').hide();
                $('#evento_sistema').hide();
				$('#evento_robo').show();
			  break;
			case "rutina":
                $('#evento_robo').hide();
                $('#evento_sistema').hide();
				$('#evento_rutina').show();
              break;
            case "sistema":
                $('#evento_robo').hide();
                $('#evento_rutina').hide();
                $('#evento_sistema').show();
                break;
		  }
		return false;
	});

});