class App
{
    runApplication()
    {
        console.log("Hello world!");
        this.appNaam = "App";
        this.versienummer = 0.1;
        this.versiedatum = new Date();
        this.auteur = "Romy van den Heuvel";
        this.copyright = "copyright";
        this.distributeur = "Romy van den Heuvel";
        this.darkmode = true;
        //console.log("appNaam: " + appNaam + "\nversienummer: " + versienummer + "\nversiedatum: " + versiedatum + "\nauteur: " + auteur + "\ncopyright: " + copyright + "\ndistributeur: " + distributeur + "\ndarkmode: " + darkmode);
        this.greeting = "Starting up";
    }
}

let app = new App();
app.runApplication();
console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer); 
console.log("versiedatum: " + app.versiedatum);
console.log("auteur: " + app.auteur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);