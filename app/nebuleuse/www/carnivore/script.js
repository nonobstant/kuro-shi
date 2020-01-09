/*
===============================================================

Typer

===============================================================
*/

//Setup:
$(".type").hide();
var speed = 40; //Set interval between characters addition.
var margin = 20; //Set margin between text blocks (px).

//Type function:
function type(elem, display, speed, delay){
  setTimeout(function(){

    var text = $(elem).text();
    $(elem).html('');
    $(elem).css('display', display);

    var i = 0;

    var timer = setInterval(function(){
      if (i < text.length){
        //Loop characters:
        $(elem).append(text.charAt(i));
        i++;
      }
      else {
        //Add spacer:
        $(elem).append('<div class="spacer"></div>');
        $(".spacer").css({'height': margin + 'px'});
        clearInterval(timer);
      };
    }, speed);

  }, delay);
};

//Get element display time (prevent next paragraph from start typing until last one was completed):
function displayTime(items){
  return $(items).text().length*speed+speed;
};

//Run!
//type(element, display, speed, delay);
type('.type:nth-child(1)', 'inline', speed, 0);
type('.type:nth-child(2)', 'inline', speed, displayTime('.type:nth-child(1)'));
type('.type:nth-child(3)', 'inline', speed, displayTime('.type:nth-child(1), .type:nth-child(2)'));
