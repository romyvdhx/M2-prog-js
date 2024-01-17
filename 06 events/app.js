class App
{
    runApplication()
    {
        console.log("Hello world!");
        let uiButton = document.getElementById("myButton");
        uiButton.addEventListener("click", (e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });
        let newButton = document.getElementById("newButton");
        newButton.addEventListener("click", (e)=>
        {
            const para1 = document.createElement("h1");
            const node1 = document.createTextNode("It'sa me!");
            para1.appendChild(node1);
            document.body.appendChild(para1);
            const para2 = document.createElement("p");
            const node2 = document.createTextNode("Mario");
            para2.appendChild(node2);
            document.body.appendChild(para2);
            let link = document.createElement("a");
            link.href = "https://www.iphoned.nl/wp-content/uploads/2022/03/mario-dag.jpg";
            link.alt = "A picture of Mario waving.";
            const para3 = document.createElement("img");
            para3.src = "mario.jpg";
            link.appendChild(para3);
            document.body.appendChild(link);
        });
        let button = document.getElementById("button");
        button.style.backgroundColor = "#7FFFD4";
        let pButton = document.getElementById("button");
        pButton.addEventListener("click", (e)=>
        {
            const para1 = document.createElement("h1");
            const node1 = document.createTextNode("clicked a div");
            para1.appendChild(node1);
            document.body.appendChild(para1);
            const para2 = document.createElement("p");
            const node2 = document.createTextNode("wow!");
            para2.appendChild(node2);
            document.body.appendChild(para2);
        });
    }
}

let app = new App();
app.runApplication();