class App
{
    runApplication()
    {
        console.log("Hello world!");
        let uiButton = document.getElementById("myButton");
        let localeFunction = function (e)
        {
            console.log("click!");
        }
        uiButton.addEventListener("click",localeFunction);
    }
}

let app = new App();
app.runApplication();