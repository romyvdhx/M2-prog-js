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

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

argumentsAreHandy("Super Shout Out!");
argumentsAreHandy("Mega Shout Out!");
argumentsAreHandy("Gigantic Shout Out!");


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