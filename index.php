<!DOCTYPE html>
<head>
    <title>Car Controls</title>
    <style>
        .center {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
        .button {
            height: 50px;
            width: 100px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <?php /*
        echo "hello";
        echo shell_exec("./startLeftTurn.py 2>&1 ");
        sleep(1);
        echo shell_exec("./stopLeftTurn.py 2>&1 "); */
    ?> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="index.js"></script>
    <legend class="center" title="Controls">
    <input class="button" type="button" value="left"/>
    <input class="button" type="button" value="right"/>
    </legend>
    <div id="controls_outer_box">
        <div id=""></div>
    </div>
 <!--
    <?php
/*
    echo "<p>calling right</p>";
    echo exec("echo '<p> hello </p>'");
    echo exec("ls -la");
    echo "<p>";
    echo exec("./test.py");
    echo "</p> calling right.py <br />  ";
    echo exec("./right.py 2>&1",$output,$status);
    echo " output: ";
    var_dump($output);
    echo " status: ".$status;
    echo "done";
    */
?>
-->
    <noscript>
        <p style="font-size: 10em">This site needs javascript to run!!!</p>
    </noscript>
</body>




