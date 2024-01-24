class Greet 
{
    constructor()
    {
        this.greeting = "Greetings";
    }

    showGreeting()
    {
        console.log("greeting van binnen: " + this.greeting);
    }
}

let greet = new Greet();
greet.showGreeting();

class Goodbye
{
    constructor()
    {
        this.farewell = "Byebye";
    }

    showBye()
    {
        console.log("farewell van binnen: " + this.farewell);
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

console.log("greeting van buiten: " + greet.greeting);
console.log("farewell van buiten: " + bye.farewell);

class App
{
    runApplication()
    {
        console.log("hello world");
    }
}

let app = new App();
app.runApplication();