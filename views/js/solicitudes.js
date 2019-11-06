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
			$('#solicitud').val('0');
        }else{
            $('.secciones article').hide();
            var activeBut = $(this).attr('href');
            $(activeBut).show();
        }
	});

	//Cambiar de sección dependiendo de la opción seleccionada de un listbox
	var select = document.getElementById('solicitud');
	select.addEventListener('change',
	function(){
		switch($(this).val()) {
			case "Nuevo_cliente":
                $('#Form_inmueble').hide();
                $('#Form_servicio').hide();
                $('#Form_cliente').show();
			break;
			case "Nuevo_inmueble":         
                $('#Form_servicio').hide();
                $('#Form_cliente').hide();
                $('#Form_inmueble').show();
            break;
            case "Nuevo_servicio":
                $('#Form_cliente').hide();
                $('#Form_inmueble').hide();
                $('#Form_servicio').show();
            break;
		  }
		return false;
	});

	//Funcionalidad de los campos de fecha
	$('.ui.calendar').calendar({
		type: 'date',
		monthFirst: false,
		formatter: {
			date: function (date, settings) {
				if (!date) return '';
				var day = date.getDate();
				var month = date.getMonth() + 1;
				var year = date.getFullYear();
				return day + '/' + month + '/' + year;
			}
		}
	});

	//Funcionalidad de los campos de fecha
	$('.ui.calendar.time').calendar({
		ampm: false,
		type: 'time'
	});


});