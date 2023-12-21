class App
{
    runApplication()
    {
        console.log("Hello world!");
        this.runApplication();
        this.newClassFunction();
        //app.anotherFunctionWithArguments("mijn argument is iets...");
        //app.marioFunction();
        //console.log(app.bwahahaFunction());
        //console.log(app.getalFunction(3, 6));
        //app.extraFunction("WOW!");
        
    }

    newClassFunction()
    {
        console.log("Hello world in de nieuwe function");
    }

    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier: ");
        console.log(aArgument);
    }

    marioFunction()
    {
        console.log("MARIO!!");
    }

    bwahahaFunction()
    {
        let bwahaha = "BWAHAHA!!!";
        return bwahaha;
    }

    getalFunction(a, b)
    {
        let optellen = a + b;
        return optellen;
    }

    extraFunction(tekst)
    {
        console.log(tekst);
    }
}

let app = new App();
app.runApplication();
