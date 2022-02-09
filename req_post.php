<?php
    require_once './assets/connectDB/connect.php';


    if(isset($_POST['time'])) {
        $req = $db->prepare("INSERT INTO times (time, date_time) values (:time, NOW())");
       $sucess= $req->execute(["time" => $_POST["time"]]);
    } else {
        echo "Variable de temps non trouvable";
        var_dump($_POST);

    };var_dump($sucess);