class User
{
    constructor(name)
    {
        this.name = name;
    }

    wieBenIk()
    {
        console.log(this.name);
    }
}

class App
{
    runApplication()
    {
        console.log("Hello world!");
        
        let celine = new User("Celine");
        let eliza = new User("Eliza");
        let samuel = new User("Samuel");
        let arturo = new User("Arturo");
        let jona = new User("Jona");
        let pepijn = new User("Pepijn");

        pepijn.wieBenIk(); //this.name is "Pepijn" en de user is pepijn
        jona.wieBenIk(); //this.name is "Jona" en de user is jona
        eliza.wieBenIk(); //this.name is "Eliza" en de user is eliza
        samuel.wieBenIk(); //this.name is "Samuel" en de user is samuel
        celine.wieBenIk(); //this.name is "Celine" en de user is celine
        pepijn.wieBenIk(); //this.name is "Pepijn" en de user is pepijn
        arturo.wieBenIk(); //this.name is "Arturo" en de user is arturo
        eliza.wieBenIk(); //this.name is "Eliza" en de user is eliza
        samuel.wieBenIk(); //this.name is "Samuel" en de user is samuel
        eliza.wieBenIk(); //this.name is "Eliza" en de user is eliza
    }
}

let app = new App();
app.runApplication();