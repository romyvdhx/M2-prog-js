function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();


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