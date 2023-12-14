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

app.artiesten.push("Bob Dylan");
app.artiesten.push("Prince");

for(let i = 0; i < app.artiesten.length; i++)
{
    let element = app.artiesten[i];
    console.log(i + ": " + element);
}

let indexToRemove = app.artiesten.indexOf("Bob Dylan");
app.artiesten.splice(indexToRemove,1);

indexToRemove = app.artiesten.indexOf("Prince");
app.artiesten.splice(indexToRemove,1);

app.artiesten.push("Bring Me The Horizon");
app.artiesten.push("Sabrina Carpenter");

for(let i = 0; i < app.artiesten.length; i++)
{
    let element = app.artiesten[i];
    console.log(i + ": " + element);
}

let headersByCssClass = document.getElementsByClassName("gameName");

for(let i = 0; i < headersByCssClass.length; i++)
{
    let element = headersByCssClass[i].innerText;
    console.log(element);
}

for(let i = 0; i < headersByCssClass.length; i++)
{
    headersByCssClass[i].innerText = "huh?";
}

headersByCssClass[0].innerText = "nieuws";
headersByCssClass[1].innerText = "reviews";
headersByCssClass[2].innerText = "commentaar";
headersByCssClass[3].innerText = "adres";
headersByCssClass[4].innerText = "socials";