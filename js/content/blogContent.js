function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>My Blog</h4>
      <p>
        This is my blog about some really great photos of blahaj.
      </p>
      <h1 style="text-align:center;">
                BLÅHAJ
            </h1>
            <p style="text-align:center;">
                <img src="pics/bighaj.png" style="width:50%; border-radius:10px;">
            </p>
            <p style="text-align:center;">
                Description: BLÅHAJ means blue shark in sweedish. This stuffed animal is 100 cm in lenght.
            </p>
            <p style="text-align:center;">
                <a href="https://www.ikea.com/us/en/p/blahaj-soft-toy-shark-90373590/">Price: $29.99</a>
            </p>



            <h1 style="text-align:center;">
                SMOLÅHAJ
            </h1>
            <p style="text-align:center;">
                <img src="pics/smallhaj.png" style="width:50%; border-radius:10px;">
            </p>
            <p style="text-align: center;">
                Description: This is a smaller BLÅHAJ plushie. It is 55 cm in length.
            </p>
            <p style="text-align:center;">
                <a href="https://www.ikea.com/us/en/p/blahaj-soft-toy-baby-shark-70540665/">Price: $7.99</a>
            </p>



            <h1 style="text-align:center;">
                BLÅVINGAD
            </h1>
            <p style="text-align:center;">
                <img src="pics/sharktowel.jpg" style="width:50%; border-radius:10px;">
            </p>
            <p style="text-align: center;">
                Description: What if BLÅHAJ was a towel. It's just the right size for a child.
            </p>
            <p style="text-align:center;">
                <a href="https://www.ikea.com/us/en/p/blavingad-towel-with-hood-shark-shaped-blue-gray-90528441/">Price: $19.99</a>
            </p>

            <h1 style="text-align:center;">
                Web Experience
            </h1>
            <p>
                I have had a decent amount of experience with databases specifically with MySQL, MSSQL, and Oracle DB.
                For web development I have used PHP and ASP.NET to connect to the database. I have also used Node.JS
                with the framework Express to connect to the database. I have also used MongoDB with Node.JS and Express.
                I have also used vaious cms such as Wordpress and Drupal. I also have experience with static sites such as
                Hugo and Jekyll. I have also used various javascript libraries such as jQuery and React. I have also used bootstrap.
            </p>
            <h1 style="text-align:center;">
                The Good, The Bad, and The Ugly
            </h1>
            <p>
                Modifying some html in the routers are very easy. However putting html in a string
                removes syntax highlighting and makes it harder to read. I also find it hard to modify
                css that I didn't write. I also find it hard to modify javascript that I didn't write.
            </p>

            <h1 style="text-align:center;">
              Database
            </h1>
            <p style="text-align: center;">
                My database would contain posts to place in the blog. They would consist of JSON objects that contain the following.
                <ul>
                    <li>Primary Key</li>
                    <li>Date</li>
                    <li>Post Title</li>
                    <li>Post Content(consists of a string containing html)</li>
                </ul>
            </p>



    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}