<?php
require_once './assets/connectDB/connect.php';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Memories games card</title>
</head>
<body>
    <header>
        <h1 id="title_page">Memories Card Game</h1>
    </header>
    <!-- <div id="img_bg"></div> -->
    <main id="main">
        <div id="div_center_btn">
            <button class="btn_play">Start new game</button>
        </div>
        <div id="top_time">
            <h2>Top time</h2>
            <ol>
                <li>00.00.00</li>
                <li>00.00.00</li>
                <li>00.00.00</li>
                <li>00.00.00</li>
                <li>00.00.00</li>
            </ol>
        </div>
    </main>
    <!-- <footer class="display_flex">
        <div>
            <a href="#">Partenaires</a>
        </div>
        <div><a href="#">About</a></div>
    </footer> -->
    <script src="./assets/js/script.js"></script>
</body>
</html>