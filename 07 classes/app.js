class Greet 
{
    constructor()
    {

    }

    showGreeting()
    {
        console.log("Greetings!");
    }
}

let greet = new Greet();
greet.showGreeting();

class Goodbye
{
    constructor()
    {

    }

    showBye()
    {
        console.log("Bye Bye Bye");
    }
}

let bye = new Goodbye();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

greet.showGreeting();
bye.showBye();

class App
{
    runApplication()
    {
        console.log("hello world");
    }
}

let app = new App();
app.runApplication();