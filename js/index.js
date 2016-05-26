$(document).ready(function() { 
  var num = "";
  var newnum = "";
  var operation = "";
  var result;
  result = $('.result');
  result.text("0");

  $('.number').click(function() {
    num += $(this).text();
    result.text(num);
    checkLength(num);
  });

  $('.operator').click(function() {
    operation = $(this).text();
    newnum = num;
    num = "";
  });

  $('.equals').click(function() {
    if(operation === '+') {
        newnum = (parseInt(newnum) + parseInt(num)).toString();
    }
    if(operation === '-') {
        newnum = (parseInt(newnum) - parseInt(num)).toString();
    }
    if(operation === '/') {
        newnum = (parseInt(newnum) / parseInt(num)).toString();
    }
    if(operation === 'x') {
        newnum = (parseInt(newnum) * parseInt(num)).toString();
    }
    result.text(newnum);
    checkLength(num);
  });

  $('.ac').click(function() {
    num = "";
    newnum = "";
    result.text("0");
  });

  $('.sign').click(function() {

  });

  var checkLength = function(num) {
    if (num.length > 11) {
            result.text(num.substr(num.length-11,11));
            if (num.length > 15) {
                num = "";
                result.text("Error");
            }
    }
  }
  // keyboard input
  $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#one").click();
        }
        else if (keycode === 50) {
            $("#two").click();
        }
        else if (keycode === 51) {
            $("#three").click();
        }
        else if (keycode === 52) {
            $("#four").click();
        }
        else if (keycode === 53) {
            $("#five").click();
        }
        else if (keycode === 54) {
            $("#six").click();
        }
        else if (keycode === 55) {
            $("#seven").click();
        }
        else if (keycode === 56) {
            $("#eight").click();
        }
        else if (keycode === 57) {
            $("#nine").click();
        }
        else if (keycode === 48) {
            $("#zero").click();
        }
        else if (keycode === 97) {
            $("#clearall").click();
        }
        else if (keycode === 99) {
            $("#clear").click();
        }
        else if (keycode === 61) {
            $("#equals").click();
        }
        else if (keycode === 43) {
            $("#plus").click();
        }
        else if (keycode === 45) {
            $("#minus").click();
        }
        else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        }
        else if (keycode === 47) {
            $("#divide").click();
        }
    });
});
