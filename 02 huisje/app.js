class App
{
    runApplication()
    {
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.beginPath();
        g.fillStyle = "pink";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(80,30);
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.closePath();
        g.stroke();
        g.beginPath();
        g.moveTo(30,36);
        g.lineTo(30,42);
        g.lineTo(38,44);
        g.lineTo(38,38);
        g.closePath();
        g.stroke();
    }
}

let app = new App();
app.runApplication();
