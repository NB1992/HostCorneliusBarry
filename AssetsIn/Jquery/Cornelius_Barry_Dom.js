// JavaScript Document

$(document).ready(function() {

    	
/*Popup code*/
function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
} 
$(function() {
  $('#Share').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#Share'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};
    
 
	
/*filters*/
function editImage() {
	var gray = $("#GrayScale").val(); 
	var Blur = $("#Blur").val(); 
	var Brightness = $("#Brightness").val(); 
	var Contrast = $("#Contrast").val(); 
	var Hue = $("#Hue").val(); 
	var Opacity = $("#Opacity").val(); 
	var Invert = $("#Invert").val(); 
	var Saturate = $("#Saturate").val(); 
	var Sepia = $("#Sepia").val(); 

	$("#imageContainer img").css(
    "filter", 'grayscale(' + gray+
    '%) blur(' + Blur +
    'px) brightness(' + Brightness +
    '%) contrast(' + Contrast +
    '%) hue-rotate(' + Hue +
    'deg) opacity(' + Opacity +
    '%) invert(' + Invert +
    '%) saturate(' + Saturate +
    '%) sepia(' + Sepia + '%)'
  );
   $("#Display").html(
    '{filter: ' +
    'grayscale(' + gray +
    '%) blur(' + Blur +
    'px) brightness(' + Brightness +
    '%) contrast(' + Contrast +
    '%) hue-rotate(' + Hue+
    'deg) opacity(' + Opacity +
    '%) invert(' + Invert +
    '%) saturate(' + Saturate +
    '%) sepia(' + Sepia + '%)'+
    '}'
  );

	$("#imageContainer img").css(
    "-webkit-filter", 'grayscale(' + gray+
    '%) blur(' + Blur +
    'px) brightness(' + Brightness +
    '%) contrast(' + Contrast +
    '%) hue-rotate(' + Hue +
    'deg) opacity(' + Opacity +
    '%) invert(' + Invert +
    '%) saturate(' + Saturate +
    '%) sepia(' + Sepia + '%)'
  );
}


$("input[type=range]").change(editImage).mousemove(editImage);


$('#imageEdit').on('reset', function () {
	setTimeout(function() {
		editImage();
	}, 0);
});



$('#GrayScale').on('change', function() {
  $('#gray-value').val($('#GrayScale').val());
});
$('#gray-value').on('keyup', function() {
  $('#GrayScale').val($('#gray-value').val());
});

$('#Blur').on('change', function() {
  $('#blur-value').val($('#Blur').val());
});
$('#blur-value').on('keyup', function() {
  $('#Blur').val($('#blur-value').val());
});

$('#Brightness').on('change', function() {
  $('#bright-value').val($('#Brightness').val());
});
$('#bright-value').on('keyup', function() {
  $('#Brightness').val($('#bright-value').val());
});

$('#Contrast').on('change', function() {
  $('#con-value').val($('#Contrast').val());
});
$('#con-value').on('keyup', function() {
  $('#Contrast').val($('#con-value').val());
});

$('#Hue').on('change', function() {
  $('#hue-value').val($('#Hue').val());
});
$('#hue-value').on('keyup', function() {
  $('#Hue').val($('#hue-value').val());
});
//
$('#Opacity').on('change', function() {
  $('#op-value').val($('#Opacity').val());
});
$('#op-value').on('keyup', function() {
  $('#Opacity').val($('#op-value').val());
});

$('#Invert').on('change', function() {
  $('#in-value').val($('#Invert').val());
});
$('#in-value').on('keyup', function() {
  $('#Invert').val($('#in-value').val());
});

$('#Saturate').on('change', function() {
  $('#sat-value').val($('#Saturate').val());
});
$('#sat-value').on('keyup', function() {
  $('#Saturate').val($('#sat-value').val());
});

$('#Sepia').on('change', function() {
  $('#sep-value').val($('#Sepia').val());
});
$('#sep-value').on('keyup', function() {
  $('#Sepia').val($('#sep-value').val());
});




/*Image Code */
 
$("#myUpload").change(function() {
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#myPicture").attr("src", e.target.result);
    }
    reader.readAsDataURL(this.files[0]);
  }
});	
});
/*Source button*/



	

