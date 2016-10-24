<?php
    if(isset($_POST['action'])){
        switch ($_POST["action"]) {
            case  "left start":
                startLeft();
                break;
            case "right start":
                startRight();
                break;
            case 'left stop':
                stopLeft();
                break;
            case 'right stop':
                stopRight();
                break;
            case 'forward start':
                startForward();
                break;
            case 'backward start':
                startBackward();
                break;
            case 'forward stop':
                stopForward();
                break;
            case 'backward stop':
                stopBackward();
                break;
            default:
                echo "Error code 31415926535897932384626";
                break;
        }
    }
    
    
    function startLeft(){
        echo shell_exec("./startLeftTurn.py 2>&1 ");
    }
    function startRight(){
        echo shell_exec("./startRightTurn.py 2>&1 ");
    }
    function stopLeft() {
        echo shell_exec("./stopLeftTurn.py 2>&1 ");
    }
    function stopRight() {
        echo shell_exec("./stopRightTurn.py 2>&1");
        
    }
    function startForward(){
        echo shell_exec("./startForward.py 2>&1 ");
    }
    function startBackward(){
        echo shell_exec("./startBackward.py 2>&1 ");
    }
    function stopForward() {
        echo shell_exec("./stopForward.py 2>&1");
    }
    function stopBackward() {
        echo shell_exec("./stopBackward.py 2>&1");
    }
?>