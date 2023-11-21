class App
{
    runApplication()
    {
        console.log("Hello world!");
        appNaam = "App";
        versienummer = 0.1;
        versiedatum = new Date();
        auteur = "Romy van den Heuvel";
        copyright = "copyright";
        distributeur = "Romy van den Heuvel";
        darkmode = true;
        console.log("appNaam: " + appNaam + "\nversienummer: " + versienummer + "\nversiedatum: " + versiedatum + "\nauteur: " + auteur + "\ncopyright: " + copyright + "\ndistributeur: " + distributeur + "\ndarkmode: " + darkmode);
    }
}

let app = new App();
app.runApplication;