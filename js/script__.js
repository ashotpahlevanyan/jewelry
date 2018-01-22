$(document).ready(function() {
	// --- script for submenu category dropdown button --- //

	$(".dropdownButton").click(function(e) {

		if (! $(this).hasClass("openButton")) {
			$(this).parents('.dropdownTitle').children('.dropdownList').slideToggle(200);
			$(this).addClass("openButton");
		} else {
			$(this).parents('.dropdownTitle').children('.dropdownList').slideUp(200);
			$(this).removeClass("openButton");
		}

		e.stopPropagation();

	});

	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.hasClass("dropdownButton")) {
			$('.dropdownList').slideUp(200);
			$(".dropdownButton").removeClass("openButton");
		}
	});

	// script for dropdown touch menu
	$('.dropdown').bind('touchstart touchend', function() {
		$(this).toggleClass('hover_effect');
		$(this).children('.dropdown-toggle').attr("data-toggle", "dropdown");
	});
	
	// script for account list
	$('.accountListOpen').bind('touchstart', function() {
		$(this).toggleClass('hover_effect');
		$(this).children('.accountList').toggle();
	});
	$('.accountListOpen').children('a').removeAttr('href data-target data-toggle');
});
$(document).ready(function() {

	// --- language dropdown --- //

	// turn select into dl
	createDropDownCurrency();

	createDropDownCountry();
	
	var $dropTrigger = $(".dropdownSelect dt");
	//var $dropTrigger1 = $("#targetLanguage dt")
	var $languageList = $(".dropdownSelect dd ul");
	//$languageList.css("border-radius","6px");
	
/*
	$dropTrigger.click(function() {
		if(! $("#targetCurrency").hasClass("active")) {
			$("#targetCurrency dd").children().slideDown(400);
		}
	});*/

	// open and close list when button is clicked
	$dropTrigger.click(function () {
		if (! $(this).hasClass("active")) {
			$(this).next().children().slideToggle(2000);
			$(this).addClass("active");
		} else {
			$(this).next().children().slideUp(2000);
			$dropTrigger.removeAttr("class");
		}
	});

	// close list when anywhere else on the screen is clicked
	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdownSelect")) {
			$languageList.slideUp(2000);
			$dropTrigger.removeAttr("class");
		}
	});

	// when a language is clicked, make the selection and then hide the list
	$(".dropdownSelect dd ul li").click(function() {
		var clickedValue = $(this).children().attr("class");
		var clickedTitle = $(this).find("a").html();
		$(this).parents('.dropdownSelect').find('dt > a').removeClass().addClass(clickedValue);
		$(this).parents('.dropdownSelect').find('dt a').html(clickedTitle);
		$languageList.hide();
		$dropTrigger.removeAttr("class");
	});
});

// actual function to transform select to definition list
function createDropDownCurrency(){
	var $form = $("#currencySelect");
	$form.hide();
	var source = $("#currencyOptions");
	source.removeAttr("autocomplete");
	var selected = source.find("option:selected");
	var options = $("option", source);
	$(".currency").append('<dl id="targetCurrency" class="dropdownSelect"></dl>')
	$("#targetCurrency").append('<dt class="' + selected.val() + '"><a>' + selected.text() + '</a></dt>')
	$("#targetCurrency").append('<dd><ul></ul></dd>')
	options.each(function(){
		$("#targetCurrency dd ul").append('<li class="' + $(this).val() + '"><a>' + $(this).text() + '</a></li>');
		});
}

function createDropDownCountry(){
	var $form = $("#languageSelect");
	$form.hide();
	var source = $("#languageOptions");
	source.removeAttr("autocomplete");
	var selected = source.find("option:selected");
	var options = $("option", source);
	$(".languages").append('<dl id="targetLanguage" class="dropdownSelect"></dl>')
	$("#targetLanguage").append('<dt class="' + selected.val() + '"><a>' + selected.text() + '</a></dt>')
	$("#targetLanguage").append('<dd><ul></ul></dd>')
	options.each(function(){
		$("#targetLanguage dd ul").append('<li class="' + $(this).val() + '"><a>' + $(this).text() + '</a></li>');
		});
}


$(document).ready(function() {
	/*
	$("#currButton").click(function(){
		$("#currDDM").slideToggle(200);
	});

	$("#langButton").click(function(){
		$("#langDDM").slideToggle(200);
	});
*/
	$(".item, .left, .right").mouseenter(function() {
		$('.left').css( "visibility", "visible");
		$('.right').css( "visibility", "visible");
		}).mouseleave(function() {
		$('.left').css( "visibility", "hidden");
		$('.right').css( "visibility", "hidden");
	});



	/*$(".dropdown-menu li a").click(function(){
	  var selText = $(this).text();
	  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
	});*/

	
});