class App
{
    runApplication()
    {
        console.log("Hello world!");
        
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
}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");