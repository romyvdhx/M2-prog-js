function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}

function argumentsAreHandy(shoutout)
{
    console.log("Do you want to give a shoutout?");
    console.log(shoutout);
}

function heeftEenResultaat()
{
    let resultaat = 1;
    return resultaat;
}

function ax2bcWiskunde(x, a, b, c)
{
    let y = (a*(x*x)) + (b*x) + c;
    return y;
}

function wiskunde(u, h, l)
{
    let logY = Math.log(l) + h + Math.pow(u, 2);
    return logY;
}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

argumentsAreHandy("Super Shout Out!");
argumentsAreHandy("Mega Shout Out!");
argumentsAreHandy("Gigantic Shout Out!");

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

//let x = 9;
//let a = 3;
//let b = 4;
//let c = 89;

//let y = (a*(x*x)) + (b*x) + c;
//console.log(y);

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

let y4 = wiskunde(9,8,15);
console.log(y4);

class App
{
    runApplication()
    {
        console.log("Hello world!");
        superMooieGlobalFunction();
    }
}

let app = new App();
app.runApplication();