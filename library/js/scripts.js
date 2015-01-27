//funcoes
var pegaAno = function () {
    var d = new Date();
    var n = d.getFullYear();
	document.getElementById('do-year').innerHTML = n;
} 

var openSections =  function () {
	var $sections = $('.homeSec');
	var $close = $('header .close');
	var opened = 'do-open';
	var behind = 'do-behind';	
	
	
	$sections.click(function () {
		if($(this).hasClass(opened)){

		}else{
			$sections.addClass(behind);
			$(this).removeClass(behind).addClass(opened);	
			$close.addClass(opened);
			TweenLite.to('.do-behind h2', 0.3, {autoAlpha:0, delay:0.4});
		}
		
	});
	
	$close.click(function () {
		$(this).removeClass('do-open');	
		$sections.removeClass('do-open do-behind');	
		TweenLite.to('h2', 0.3, {autoAlpha:1, delay:1});
		
		$.fn.extend({ 
			addTemporaryClass: function(className, duration) {
				var elements = this;
				setTimeout(function() {
					elements.removeClass(className);
				}, duration);
				return this.each(function() {
					$(this).addClass(className);
				});
			}
		});
		$('.homeSec').addTemporaryClass('do-removeBg', 1500);
		
	});	
}

//disparadores	
	function funcaoDISPARA() {
		console.log('Desenvolvido por Agência Mestre');
		//pegaAno();
		openSections ();
	}
	
	function funcaoSCROLL() {

	}
	
	function funcaoRESIZE() {

	}
	
$(document).ready(funcaoDISPARA);
$(window).scroll(funcaoSCROLL);
$(window).resize(funcaoRESIZE);