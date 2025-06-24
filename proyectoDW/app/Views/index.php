<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<?= base_url('public/css/bootstrap.min.css') ?>">
<script src="<?= base_url('public/css/bootstrap.bundle.js.map') ?>"></script>
    <title>Document</title>
</head>
<style>
    *{
        padding: 0;
        
    }
</style>
<body>
    <main>
        <div class="container">
            <form action="">


                <div>
                    <label for="num1">Num1</label>
                    <input type="number" id="num1">
                </div>
                <div>
                    <label for="num2">Num2</label>
                    <input type="number" id="num2">
                </div>
                <div>
                    <label for="num3">Num3</label>
                    <input type="number" id="num3">
                </div>


                <button type="submit" id="submit">Enviar</button>
            </form>
        </div>
        <div><label for="" id="label"></label></div>
    </main>
</body>
<script>
    const numId1 = document.getElementById("num1");
    const numId2 = document.getElementById("num2");
    const numId3 = document.getElementById("num3");
    const submitId = document.getElementById("submit");
    const labelId = document.getElementById("label");




    submitId.addEventListener("click", (e) => {
        e.preventDefault();
        const val1 = parseInt(numId1.value)  || 0;
        const val2 = parseInt(numId2.value)  || 0;
        const val3 = parseInt(numId3.value)  || 0;
        const res = val1 + val2 + val3;

        labelId.textContent = res;
    });
</script>

</html>