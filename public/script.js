$(function(){
	$('section.ces').each(function(){
		var id = $(this).attr('id');
		$(this).addClass('accordion').insertAfter('a[href=#' + id + ']').data("collapsed", true);
	});
	$('.viewport').remove();
	$('a.section').click(function(){
		var targetId = $(this).attr("href");
		var collapsed = $(targetId).data("collapsed");
		if (collapsed) {
			$('section.ces').not(targetId).slideUp(500, "swing").data("collapsed", true);
			$(targetId).slideDown(500, "swing").data("collapsed", false);
		} else {
			$(targetId).slideUp(500, "swing").data("collapsed", true);
		}
	});
	$('a[href=#Spanish]').click();
})