$(document).ready(function() {
	
	$('[name="alpha_bg"]').paletteColorPicker({
		colors: [
				{'CR': '#050505'}, {'N9': '#313337'}, {'CC': '#7D8073'}, {'2B': '#96999B'}, {'BJ': '#9F9E97'}, {'CB': '#ABAA9C'}, {'U9': '#BCB9AD'}, {'L9': '#FEFDF8'},
				{'T9': '#F5F5F3'}, {'3K': '#F9F8F8'}, {'2M': '#F9FAFB'}, {'GR1': '#F5F5F9'}, {'CP': '#FFFEFD'}, {'WS1': '#FFFFFD'}, {'WS2': '#FDFEFF'}, {'BR1': '#502F1F'}, 
				{'N7': '#267D2F'}, {'AE': '#7EBB0F'}, {'3B': '#92AD9A'}, {'3A': '#BFE3BA'}, {'V4': '#004FB9'}, {'N5': '#278BF5'}, {'TU1': '#097493'}, {'TU2': '#25CDC5'}, 
				{'DY': '#6C3C9D'}, {'RO1': '#691F28'}, {'P3': '#B92500'}, {'V1': '#DE3612'}, {'RO2': '#FF2811'}, {'3C': '#E6BBC5'}, {'MG1': '#DB4293'}, {'V2': '#F47517'}, 
				{'N6': '#FCC819'}, {'CV': '#FDE11E'}, {'GE1': '#FFFF22'}
		],
		insert: 'before',
		clear_btn: null,
		timeout: 1500,
		position: 'downside',
		close_all_but_this: true,
		onchange_callback: function(c) {
			$('[name="alpha_bg"]').val(c);
			$('[name="alpha_bg"]').trigger("input");
		}
	});
	
	$('[name="alpha_leg"]').paletteColorPicker({
		colors: [
				{'CR': '#050505'}, {'N9': '#313337'}, {'CC': '#7D8073'}, {'2B': '#96999B'}, {'BJ': '#9F9E97'}, {'CB': '#ABAA9C'}, {'U9': '#BCB9AD'}, {'L9': '#FEFDF8'},
				{'T9': '#F5F5F3'}, {'3K': '#F9F8F8'}, {'2M': '#F9FAFB'}, {'GR1': '#F5F5F9'}, {'CP': '#FFFEFD'}, {'WS1': '#FFFFFD'}, {'WS2': '#FDFEFF'}, {'BR1': '#502F1F'}, 
				{'N7': '#267D2F'}, {'AE': '#7EBB0F'}, {'3B': '#92AD9A'}, {'3A': '#BFE3BA'}, {'V4': '#004FB9'}, {'N5': '#278BF5'}, {'TU1': '#097493'}, {'TU2': '#25CDC5'}, 
				{'DY': '#6C3C9D'}, {'RO1': '#691F28'}, {'P3': '#B92500'}, {'V1': '#DE3612'}, {'RO2': '#FF2811'}, {'3C': '#E6BBC5'}, {'MG1': '#DB4293'}, {'V2': '#F47517'}, 
				{'N6': '#FCC819'}, {'CV': '#FDE11E'}, {'GE1': '#FFFF22'}
		],
		insert: 'before',
		clear_btn: null,
		timeout: 1500,
		position: 'downside',
		close_all_but_this: true,
		onchange_callback: function(c) {
			$('[name="alpha_leg"]').val(c);
			$('[name="alpha_leg"]').trigger("input");
		}
	});
	
	$('[name="mod_bg"]').paletteColorPicker({
		colors: [
				{'CR': '#050505'}, {'N9': '#313337'}, {'CC': '#7D8073'}, {'2B': '#96999B'}, {'BJ': '#9F9E97'}, {'CB': '#ABAA9C'}, {'U9': '#BCB9AD'}, {'L9': '#FEFDF8'},
				{'T9': '#F5F5F3'}, {'3K': '#F9F8F8'}, {'2M': '#F9FAFB'}, {'GR1': '#F5F5F9'}, {'CP': '#FFFEFD'}, {'WS1': '#FFFFFD'}, {'WS2': '#FDFEFF'}, {'BR1': '#502F1F'}, 
				{'N7': '#267D2F'}, {'AE': '#7EBB0F'}, {'3B': '#92AD9A'}, {'3A': '#BFE3BA'}, {'V4': '#004FB9'}, {'N5': '#278BF5'}, {'TU1': '#097493'}, {'TU2': '#25CDC5'}, 
				{'DY': '#6C3C9D'}, {'RO1': '#691F28'}, {'P3': '#B92500'}, {'V1': '#DE3612'}, {'RO2': '#FF2811'}, {'3C': '#E6BBC5'}, {'MG1': '#DB4293'}, {'V2': '#F47517'}, 
				{'N6': '#FCC819'}, {'CV': '#FDE11E'}, {'GE1': '#FFFF22'}
		],
		insert: 'before',
		clear_btn: null,
		timeout: 1500,
		position: 'downside',
		close_all_but_this: true,
		onchange_callback: function(c) {
			$('[name="mod_bg"]').val(c);
			$('[name="mod_bg"]').trigger("input");
		}
	});
	
	$('[name="mod_leg"]').paletteColorPicker({
		colors: [
				{'CR': '#050505'}, {'N9': '#313337'}, {'CC': '#7D8073'}, {'2B': '#96999B'}, {'BJ': '#9F9E97'}, {'CB': '#ABAA9C'}, {'U9': '#BCB9AD'}, {'L9': '#FEFDF8'},
				{'T9': '#F5F5F3'}, {'3K': '#F9F8F8'}, {'2M': '#F9FAFB'}, {'GR1': '#F5F5F9'}, {'CP': '#FFFEFD'}, {'WS1': '#FFFFFD'}, {'WS2': '#FDFEFF'}, {'BR1': '#502F1F'}, 
				{'N7': '#267D2F'}, {'AE': '#7EBB0F'}, {'3B': '#92AD9A'}, {'3A': '#BFE3BA'}, {'V4': '#004FB9'}, {'N5': '#278BF5'}, {'TU1': '#097493'}, {'TU2': '#25CDC5'}, 
				{'DY': '#6C3C9D'}, {'RO1': '#691F28'}, {'P3': '#B92500'}, {'V1': '#DE3612'}, {'RO2': '#FF2811'}, {'3C': '#E6BBC5'}, {'MG1': '#DB4293'}, {'V2': '#F47517'}, 
				{'N6': '#FCC819'}, {'CV': '#FDE11E'}, {'GE1': '#FFFF22'}
		],
		insert: 'before',
		clear_btn: null,
		timeout: 1500,
		position: 'downside',
		close_all_but_this: true,
		onchange_callback: function(c) {
			$('[name="mod_leg"]').val(c);
			$('[name="mod_leg"]').trigger("input");
		}
	});
	
	$('[name="accent_bg"]').paletteColorPicker({
		colors: [
				{'CR': '#050505'}, {'N9': '#313337'}, {'CC': '#7D8073'}, {'2B': '#96999B'}, {'BJ': '#9F9E97'}, {'CB': '#ABAA9C'}, {'U9': '#BCB9AD'}, {'L9': '#FEFDF8'},
				{'T9': '#F5F5F3'}, {'3K': '#F9F8F8'}, {'2M': '#F9FAFB'}, {'GR1': '#F5F5F9'}, {'CP': '#FFFEFD'}, {'WS1': '#FFFFFD'}, {'WS2': '#FDFEFF'}, {'BR1': '#502F1F'}, 
				{'N7': '#267D2F'}, {'AE': '#7EBB0F'}, {'3B': '#92AD9A'}, {'3A': '#BFE3BA'}, {'V4': '#004FB9'}, {'N5': '#278BF5'}, {'TU1': '#097493'}, {'TU2': '#25CDC5'}, 
				{'DY': '#6C3C9D'}, {'RO1': '#691F28'}, {'P3': '#B92500'}, {'V1': '#DE3612'}, {'RO2': '#FF2811'}, {'3C': '#E6BBC5'}, {'MG1': '#DB4293'}, {'V2': '#F47517'}, 
				{'N6': '#FCC819'}, {'CV': '#FDE11E'}, {'GE1': '#FFFF22'}
		],
		insert: 'before',
		clear_btn: null,
		timeout: 1500,
		position: 'downside',
		close_all_but_this: true,
		onchange_callback: function(c) {
			$('[name="accent_bg"]').val(c);
			$('[name="accent_bg"]').trigger("input");
		}
	});
	
	$('[name="accent_leg"]').paletteColorPicker({
		colors: [
				{'CR': '#050505'}, {'N9': '#313337'}, {'CC': '#7D8073'}, {'2B': '#96999B'}, {'BJ': '#9F9E97'}, {'CB': '#ABAA9C'}, {'U9': '#BCB9AD'}, {'L9': '#FEFDF8'},
				{'T9': '#F5F5F3'}, {'3K': '#F9F8F8'}, {'2M': '#F9FAFB'}, {'GR1': '#F5F5F9'}, {'CP': '#FFFEFD'}, {'WS1': '#FFFFFD'}, {'WS2': '#FDFEFF'}, {'BR1': '#502F1F'}, 
				{'N7': '#267D2F'}, {'AE': '#7EBB0F'}, {'3B': '#92AD9A'}, {'3A': '#BFE3BA'}, {'V4': '#004FB9'}, {'N5': '#278BF5'}, {'TU1': '#097493'}, {'TU2': '#25CDC5'}, 
				{'DY': '#6C3C9D'}, {'RO1': '#691F28'}, {'P3': '#B92500'}, {'V1': '#DE3612'}, {'RO2': '#FF2811'}, {'3C': '#E6BBC5'}, {'MG1': '#DB4293'}, {'V2': '#F47517'}, 
				{'N6': '#FCC819'}, {'CV': '#FDE11E'}, {'GE1': '#FFFF22'}
		],
		insert: 'before',
		clear_btn: null,
		timeout: 1500,
		position: 'downside',
		close_all_but_this: true,
		onchange_callback: function(c) {
			$('[name="accent_leg"]').val(c);
			$('[name="accent_leg"]').trigger("input");
		}
	});
	
	// Fix to apply HEX values to picker button on load
	
	$('[data-target="alpha_bg"]').css("background", $('[name="alpha_bg"]').attr("value"));
	$('[data-target="alpha_leg"]').css("background", $('[name="alpha_leg"]').attr("value"));
	$('[data-target="mod_bg"]').css("background", $('[name="mod_bg"]').attr("value"));
	$('[data-target="mod_leg"]').css("background", $('[name="mod_leg"]').attr("value"));
	$('[data-target="accent_bg"]').css("background", $('[name="accent_bg"]').attr("value"));
	$('[data-target="accent_leg"]').css("background", $('[name="accent_leg"]').attr("value"));
	
	$("#sidebar_colors").css("right", '-' + $("#sidebar_colors .sidebar_right").outerWidth() + 'px');
	$("#logo").delay(2000).fadeOut(500);
	$(document).infopop("Rotate the view with LMB, Zoom with Scroll Wheel, Pan with RMB", 5000);
});

$('[name="alpha_bg"]').on('input', function() {
	$('[data-target="alpha_bg"]').css("background", $(this).attr("value"));
	window.KeyboardRender.setColor("alphaBackground", $(this).attr("value"));
});

$('[name="alpha_leg"]').on('input', function() {
	$('[data-target="alpha_leg"]').css("background", $(this).attr("value"));
	window.KeyboardRender.setColor("alphaLegends", $(this).attr("value"));
});

$('[name="mod_bg"]').on('input', function() {
	$('[data-target="mod_bg"]').css("background", $(this).attr("value"));
	window.KeyboardRender.setColor("modBackground", $(this).attr("value"));
});

$('[name="mod_leg"]').on('input', function() {
	$('[data-target="mod_leg"]').css("background", $(this).attr("value"));
	window.KeyboardRender.setColor("modLegends", $(this).attr("value"));
});

$('[name="accent_bg"]').on('input', function() {
	$('[data-target="accent_bg"]').css("background", $(this).attr("value"));
	window.KeyboardRender.setColor("accentBackground", $(this).attr("value"));
});

$('[name="accent_leg"]').on('input', function() {
	$('[data-target="accent_leg"]').css("background", $(this).attr("value"));
	window.KeyboardRender.setColor("accentLegends", $(this).attr("value"));
});

$("#sidebar_colors .sidebar_button").click(function(e) {
	if ($("#sidebar_colors").css("right") != "0px") {
		
		$("#sidebar_colors").animate({right: "0px"}, 250);
	} else {
		$("#sidebar_colors").animate({right: '-' + $("#sidebar_colors .sidebar_right").outerWidth() + 'px'}, 500);
	}
});

$("#info").click(function () {
	$("#info_box").fadeIn(250);
});

$("#info_close").click(function() {
	$("#info_box").fadeOut(250);
});

$("#settings").click(function() {
	$("#settings_box").fadeIn(250);
});

$("#settings_close").click(function() {
	$("#settings_box").fadeOut(250);
});

$("#save_render").click(function() {
	$(document).infopop("Saving Image...");
	var link = document.getElementById('saved_render');
	link.setAttribute('download', 'Render.png');
	window.KeyboardRender.renderer.domElement.toBlobHD(function(blob) {
		link.href = URL.createObjectURL(blob);
		link.click();
	}, "image/png");
});

$("#fullscreen").click(function() {
	$(document).infopop("You entered fullscreen mode.");
	$("#appWrapper").fullscreen();
});

$("#exitfullscreen").click(function() {
	$(document).infopop("You quit fullscreen mode.");
	$.fullscreen.exit();
});

$(document).bind('fscreenchange', function(e, state, elem) {
	if ($.fullscreen.isFullScreen()) {
		$('#fullscreen').hide();
		$('#exitfullscreen').css("display", "block");
	} else {
		$('#fullscreen').show();
		$('#exitfullscreen').hide();
	}
});

$.fn.infopop = function(msg, delay=2000) {
	$('<div class="infopop">' + msg + '</div>').appendTo($("#appWrapper")).delay(delay).fadeOut(250);
};