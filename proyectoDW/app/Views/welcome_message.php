<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gamew</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }


        body,
        html {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .outer-container {
            background-color: aqua;
            height: 600px;
            width: 600px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;


        }

        .screen {
            direction: flex;
            background-color: bisque;
            height: 500px;
            width: 500px;
            justify-content: center;
            align-items: center;
            border-radius: 5px;

        }

        #square {
            direction: flex;
            background-color: red;
            height: 50px;
            width: 50px;
            justify-content: center;
            position: relative;
            align-items: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);


        }
    </style>
</head>

<body>
    <main>
        <div class="outer-container">
            <div class="screen">
                <div id="square"></div>
            </div>
        </div>
    </main>

    <script>
        const squareID = document.getElementById("square");
        const step = 10;

        let posX = 250;
        let posY = 250;
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                case "ArrowUp":
                    if (posY - step >= 20) posY -= step;
                    console.log("ArrowUp" , posY - step , ">= 20");
                    break;
                case "ArrowDown":
                    if (posY + step <= 480) posY += step;
                    console.log("ArrowDown" , posY + step, "<= 500" );
                    break;
                case "ArrowLeft":
                    if (posX - step >= 20) posX -= step;
                    console.log("ArrowDown",posX - step, ">= 20"  );
                    break;
                case "ArrowRight":
                    if (posX + step <= 480) posX += step;
                    console.log("ArrowDown",posX + step, "<= 500"  );
                    break;
            }
            square.style.left = posX + "px";
            square.style.top = posY + "px";
        })
    </script>
</body>

</html>