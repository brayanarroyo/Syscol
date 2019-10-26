$(document).ready(function(){
    $('button').click(function(){
        var activeTab = $(this).attr('href');
        $(activeTab).modal('show');
		return false;
    });
});