$(".footer .button").on("click", function() {
	$(this).toggleClass("is_active");
});

$(".footer .button_change_size").on("click", function() {
	$(".section_example").toggleClass("change_size");

	if($(this).hasClass("is_active")) {
		$(".message").html("I add <pre>@include changeIconNameSize(...);</pre> scss code.");
	} else {
		$(".message").html("I remove <pre>@include changeIconNameSize(...);</pre> scss code.");
	}

});

$(".footer .button_change_color").on("click", function() {
	$(".section_example").toggleClass("change_color");

	if($(this).hasClass("is_active")) {
		$(".message").html("I add <pre>@include changeIconNameColor(...);</pre> scss code.");
	} else {
		$(".message").html("I remove <pre>@include changeIconNameColor(...);</pre> scss code.");
	}
});

$(".footer .button_view_bg").on("click", function() {
	$(".section_example .icon, .section_example .button").toggleClass("has_bg");

	if($(this).hasClass("is_active")) {
		$(".message").html("I add <pre>background-color: lightpink</pre> css code to icon element. If icon has parent element, I add <pre>background-color: hotpink</pre> to parent element");
	} else {
		$(".message").html("I remove <pre>background-color</pre>.");
	}
});