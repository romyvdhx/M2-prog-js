class App
{
    tekenHuis(g, x, y)
    {
        g.beginPath();
        g.fillStyle = "pink";
        g.moveTo(300+x,100+y);
        g.lineTo(700+x,200+y);
        g.lineTo(600+x,400+y);
        g.lineTo(200+x,300+y);
        g.lineTo(300+x,100+y);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(200+x,300+y);
        g.lineTo(200+x,500+y);
        g.lineTo(600+x,600+y);
        g.lineTo(800+x,500+y);
        g.lineTo(800+x,300+y);
        g.lineTo(700+x,200+y);
        g.lineTo(600+x,400+y);
        g.closePath();
        g.stroke();
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(800+x,300+y);
        g.lineTo(600+x,400+y);
        g.lineTo(600+x,600+y);
        g.lineTo(800+x,500+y);
        g.closePath();
        g.stroke();
        g.beginPath();
        g.moveTo(300+x,360+y);
        g.lineTo(300+x,420+y);
        g.lineTo(380+x,440+y);
        g.lineTo(380+x,380+y);
        g.closePath();
        g.stroke();
    }
    tekenKerstBoom(g, x, y)
    {
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(400+x,1000+y);
        g.lineTo(600+x,1000+y);
        g.lineTo(600+x,850+y);
        g.lineTo(400+x,850+y);
        g.closePath();
        g.stroke();
        g.fillStyle = "brown";
        g.fill();
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(100+x,850+y);
        g.lineTo(900+x,850+y);
        g.lineTo(500+x,100+y);
        g.closePath;
        g.stroke;
        g.fillStyle = "green";
        g.fill();
    }
    runApplication()
    {
        console.log("Hello world!");
        
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        //this.tekenHuis(g, 20, 20);
        this.tekenKerstBoom(g, 0, 0);

    }
}

let app = new App();

app.runApplication();
