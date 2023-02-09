function blahajContent() {
    // Do something
    var stuffie1 = MakeBlahaj({
        name: "Stuffie1",
        price: "$10.00",
        description: "A stuffie",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FStuffies-Pl",
        link: "https://www.google.com"
    });

    var stuffie2 = MakeBlahaj({
        name: "Stuffie2",
        price: "$10.00",
        description: "A stuffie",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FStuffies-Pl",
        link: "https://www.google.com"
    });

    var stuffie3 = MakeBlahaj({
        name: "Shark Towel",
        price: "$10.00",
        description: "A stuffie",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FStuffies-Pl",
        link: "https://www.google.com"
    });

    document.getElementById("blahajContent").appendChild(stuffie1);
    document.getElementById("blahajContent").appendChild(stuffie2);
    document.getElementById("blahajContent").appendChild(stuffie3);
}