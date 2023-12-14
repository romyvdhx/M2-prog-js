class App
{
    runApplication()
    {
        console.log("Hello world!");
        this.artiesten = ["Taylor Swift", "Morpheus", "Naaz", "Bad Omens"];
        this.nummers = [13, 25, 47, 872, 237, 9403];
    }
}

let app = new App();
app.runApplication();

for(let i = 0; i < app.artiesten.length; i++)
{
    let element = app.artiesten[i];
    console.log(i + ": " + element);
}

for(let i = 0; i < app.nummers.length; i++)
{
    let optellen = app.nummers[i] + 1;
    console.log(optellen);
}