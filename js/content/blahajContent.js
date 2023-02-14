"use strict";
function blahajContent() {


    // Do something
    var stuffie1 = MakeBlahaj({
        //PK
        productID: 1,
        //Nullable
        productLength: 3.14,
        productWidth: 3.14,
        productHeight: 3.14,
        productWeight: 3.14,
        //end Nullable
        name: "Stuffie1",
        price: "$10.00",
        description: "A stuffie",
        img: "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg?f=xl",
        link: "https://www.google.com"
    });

    var stuffie2 = MakeBlahaj({
        name: "Stuffie2",
        price: "$10.00",
        description: "A stuffie",
        img: "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg?f=xl",
        link: "https://www.google.com"
    });

    var stuffie3 = MakeBlahaj({
        name: "Shark Towel",
        price: "$10.00",
        description: "A stuffie",
        img: "https://www.ikea.com/us/en/images/products/blavingad-towel-with-hood-shark-shaped-blue-gray__1088001_pe860992_s5.jpg?f=xl",
        link: "https://www.google.com"
    });

    var ele = document.createElement("div");
    
    /*
    var objContainer = document.createElement("div");
    objContainer.classList.add('flexContainer'); // see styling in this file, above...
    ele.appendChild(objContainer);
    objContainer.appendChild(stuffie1);
    objContainer.appendChild(stuffie2);
    objContainer.appendChild(stuffie3);
    */
    ele.appendChild(stuffie1);
    ele.appendChild(stuffie2);
    ele.appendChild(stuffie3);
    return ele;
}