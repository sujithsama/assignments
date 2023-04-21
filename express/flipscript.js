
const { MongoClient } = require('mongodb');
const express = require('express')
const fs = require("fs");
const { log } = require('console');
const app = express()
const port = 3000
var resp ;

async function main() {
    const uri = "mongodb://0.0.0.0:27017";
    //const uri =`mongodb://localhost:27017`;
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        await findOneListingByName(client);

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
        console.log('closed');
    }
}

app.get('/', (req, res) => {
    // mongoUtil().catch(console.error);
    main().catch(console.error);
    var html_content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>flipkart</title>
        <style>
            *{
                padding: 0%;
                margin: 0%;
            }
           .header{
            background-color: rgb(51, 51, 230);
            display: flex;
            height: 50px;
            align-items: center;
            color: white;
            justify-content: space-between;
           }
           .header ul{
            list-style: none;
          
           }
           header ul li{
            display: inline-block;
            padding: 20px;
           }
           .flipitem{
          display: flex;
          flex-direction: column;
          width: 500px;
          align-items: center;
          border: 2px solid grey;
          margin: 20px;
           }
           .flipitem img{
            width: 300px;
            height: 200px;
            padding: 20px;
           }
        </style>
    </head>
    <body>
        <header class="header">
            <ul>
                <li>Home</li>
            </ul>
            <ul>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </header>
        <section>
            <div class="body" id="body">`
    if (resp.length > 0) {
       
        resp.forEach((resp,i) => {
            html_content += `<div class="flipitem">
                    <img src="${element.image_url}">
           <p>${element.name}</p>
                   <p>${element.product_descripition}</p>
            </div>`;
            
        }
        )
    }
    else{
        console.log(resp.length);
        console.log(`loop not`);
    }
    html_content += `</div>
          </section>
          <script src="flipscript.js"></script>
          <p>hi</p>
      </body>
      </html>`;
    res.send(html_content);
})
async function findOneListingByName(client) {
    const result = await client.db("flipkart").collection("items").find();
    //printscreen(result);
    resp = await result.toArray();
   console.log(resp[0].name);
}

// if (result) {
//     result.forEach(element => {
//         console.log(element.name);
//         `<div class="flipitem">
//         <img src="${element.image_url}">
//         <p>${element.name}</p>
//         <p>${element.product_descripition}</p>
//     </div>`
//     });
//     } else {
//         console.log(`error`);
//     }
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})