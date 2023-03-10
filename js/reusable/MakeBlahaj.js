function MakeBlahaj(args){
    var blahajObj = document.createElement("div");
    blahajObj.classList.add("blahajObj");//change maybe

    //parse args
    blahajObj.name = args.name|| "A name";
    var price = args.price || "$0.00";
    var description = args.description || "A description";
    var img = args.img || "http://cis-linux2.temple.edu/~sallyk/pics_sk/balloons.png";
    var link = args.link || "https://ikea.com";

    //create elements
    var blahajInfo = document.createElement("div");
    blahajInfo.classList.add("blahajInfo");
    blahajObj.appendChild(blahajInfo);

    var display = function(){
        blahajInfo.innerHTML = `
            <h1>${blahajObj.name}</h1>
            <p>
                <img src="${img}">
            </p>
            <p">
                Description: ${description}
            </p>
            <p">
                <a href="${blahajObj.link}">Price: ${price}</a>
            </p>
        `;
    }

    //public methods
    blahajObj.setName = function(newName){
        blahajObj.name = newName;
        display();
    }

    //privante methods
    function changePrice(newPrice){
        price = newPrice;
        display();
    }

    function changeDescription(newDescription){
        description = newDescription;
        display();
    }

    function changeImg(newImg){
        img = newImg;
        display();
    }
    function changeLink(newLink){
        link = newLink;
        display();
    }

    //change name button
    var changeNameButton = document.createElement("button");
    changeNameButton.innerHTML = "Change Name";
    blahajObj.appendChild(changeNameButton);

    var newNameInput = document.createElement("input");
    blahajObj.appendChild(newNameInput);

    changeNameButton.onclick = function(){
        blahajObj.setName(newNameInput.value);
    }

    //change price button
    var changePriceButton = document.createElement("button");
    changePriceButton.innerHTML = "Change Price";
    blahajObj.appendChild(changePriceButton);

    var newPriceInput = document.createElement("input");
    blahajObj.appendChild(newPriceInput);

    changePriceButton.onclick = function(){
        changePrice(newPriceInput.value);
    }

 

    display();
    return blahajObj;
}