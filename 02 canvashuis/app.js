class App
{
    runApplication()
    {
        console.log("Hello world!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.fillRect(0,0,10,10);
    }
}

let app = new App();
app.runApplication();
