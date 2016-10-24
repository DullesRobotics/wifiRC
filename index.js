/*

$(document).ready(function(){
    $(".button").click(function() {
        var val = $(this).val();
        var responsePHP = "response.php";
        var data = {"whichButton": val};
        $.post(responsePHP, data, function (response){console.log("response: " + response);});    
    });
});


*/

$(document).ready(function(){
    
//Stuff with keyboards
var keysAllowed = {};
$(document.body).on("keydown",function(event){
   
   if(keysAllowed[event.which]===false){
       return;
   }
   keysAllowed[event.which] = false;
   switch(event.which){
       case 37:             //Left Arrow
            console.log("Left Arrow Down");
            sendCommand("left start");
            break;
       case 38:             //Up Arrow
            console.log("Up Arrow Down");
            sendCommand("forward start");
            break;
       case 39:             //Right Arrow
            console.log("Right Arrow Down");
            sendCommand("right start");
            break;
       case 40:             //Down Arrow
            console.log("Down Arrow Down");
            sendCommand("backward start");
            break;
       default:
            break;
   } 
});
    
$(document.body).keyup(function(e) { 
   keysAllowed[e.which] = true;
   switch(event.which){
       case 37:             //Left Arrow
            console.log("Left Arrow Up");
            sendCommand("left stop");
            break;
       case 38:             //Up Arrow
            console.log("Up Arrow Up");
            sendCommand("forward stop");
            break;
       case 39:             //Right Arrow
            console.log("Right Arrow Up");
            sendCommand("right stop");
            break;
       case 40:             //Down Arrow
            console.log("Down Arrow Up");
            sendCommand("backward stop");
            break;
       default:
            break;
   } 
});
    
    
    
//Mobile Devices
    $(".button").on("touchstart", function() {
       console.log("touchstart");
        var val = $(this).val() + " start";
        console.log("value: " + val);
        var responsePHP = "response.php";
        var data = {"action": val};
        $.post(responsePHP, data, function (response){console.log("response: " + response);});    
    });
    
     $(".button").on("touchend", function() {
        console.log("touchend");
        var val = $(this).val() + " stop";
        console.log("value: " + val);
        var responsePHP = "response.php";
        var data = {"action": val};
        $.post(responsePHP, data, function (response){console.log("response: " + response);});    
        
    });
    /*
    $(".button").mousedown(function() {
        console.log("mousedown");
        var val = $(this).val() + " start";
        console.log("value: " + val);
        var responsePHP = "response.php";
        var data = {"action": val};
        $.post(responsePHP, data, function (response){console.log("response: " + response);});    
    });
    $(".button").mouseup(function() {
        console.log*("mouseup");
        var val = $(this).val() + " stop";
        console.log("value: " + val);
        var responsePHP = "response.php";
        var data = {"action": val};
        $.post(responsePHP, data, function (response){console.log("response: " + response);});    
        
    });
    */
   
});

function sendCommand(cmd){
    var data = {"action": cmd};
    console.log("cmd: " + cmd);
    console.log("data: " + JSON.stringify(data));
    $.post("response.php",data, function(response){console.log("response: " + response);});
}
