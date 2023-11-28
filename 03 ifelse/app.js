class App
{
    runApplication()
    {
        console.log("Hello world!");
        //document.getElementById("newstitle");
        //document.getElementsByClassName("gamenews");
        //document.getElementsByClassName("gamenews headline");
        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 0.2)
        {
            title.style.backgroundColor = "#FF0000";
        } else if(random >= 0.2 && random < 0.6)
        {
            title.style.backgroundColor = "#FF00FF";
        } else if(random >= 0.6 && random < 0.75)
        {
            title.style.backgroundColor = "#800000";
        } else 
        {
            title.style.backgroundColor = "#00FF00";
        }

        let newsitem1 = document.getElementsByClassName("gamenews")[1];
        let newsitem2 = document.getElementsByClassName("gamenews headline")[0];

        console.log(newsitem1);
        if(random < 0.2)
        {
            newsitem1.style.backgroundColor = "#FF0000";
        } else if(random >= 0.2 && random < 0.6)
        {
            newsitem1.style.backgroundColor = "#FF00FF";
        } else if(random >= 0.6 && random < 0.75)
        {
            newsitem1.style.backgroundColor = "#800000";
        } else 
        {
            newsitem1.style.backgroundColor = "#00FF00";
        }

        console.log(newsitem2);
        if(random < 0.2)
        {
            newsitem2.style.backgroundColor = "#FF0000";
        } else if(random >= 0.2 && random < 0.6)
        {
            newsitem2.style.backgroundColor = "#FF00FF";
        } else if(random >= 0.6 && random < 0.75)
        {
            newsitem2.style.backgroundColor = "#800000";
        } else 
        {
            newsitem2.style.backgroundColor = "#00FF00";
        }
    }
}

let app = new App();
app.runApplication();