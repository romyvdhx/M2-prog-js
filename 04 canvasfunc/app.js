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
    tekenKerstBal(g, x, y, z)
    {
        g.beginPath();
        g.fillStyle = "red";
        g.arc(x,y,z,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
    tekenPiek(g){
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(440, 200);
        g.lineTo(560, 200);
        g.lineTo(500, 50);
        g.closePath;
        g.stroke;
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
        this.tekenKerstBal(g, 525, 650, 25);
        this.tekenKerstBal(g, 250, 710, 30);
        this.tekenKerstBal(g, 470, 400, 23);
        this.tekenKerstBal(g, 780, 750, 30);
        this.tekenKerstBal(g, 650, 470, 25);
        this.tekenKerstBal(g, 375, 760, 20);
        this.tekenKerstBal(g, 400, 550, 30);
        this.tekenKerstBal(g, 600, 780, 20);
        this.tekenKerstBal(g, 670, 570, 20);
        this.tekenKerstBal(g, 550, 330, 20);
        this.tekenPiek(g);
    }
}

let app = new App();
app.runApplication();