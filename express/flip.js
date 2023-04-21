var mongo = require("mongodb");
const express = require('express')// express module
const app = express()// create object to express
const port = 3000//set port number

var result = "";
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
           .body{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            width: 100%;
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
app.get('/', (req, res) => {
    mongoUtil().catch(console.error);

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
    if (result.length > 0) {
        result.forEach((result, i) => {
            html_content += `<div class="flipitem">
         <img src="${element.image_url}">
<p>${element.name}</p>
        <p>${element.product_descripition}</p>
 </div>`;
        });
        html_content += `</div>
        </section>
        <script src="flipscript.js"></script>
        <p>hi</p>
    </body>
    </html>`;

    } else {

       // html_content = "Data is not available for given search"
    }

    res.send(html_content);
})

async function mongoUtil() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://0.0.0.0:27017";

    // load driver kind of 
    const client = new mongo.MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        console.log('connected');
        // Make the appropriate DB calls
        // await  listDatabases(client);
        await listNews(client);


    } catch (e) {
        console.error(e);
    } finally {
        console.log('connection closed');
        await client.close();
    }
}

async function listNews(client) {
    const cursor = await client.db("flipkart").collection("items").find();

    if (cursor) {
        console.log(`result is : ${cursor}`);
        result = await cursor.toArray();

        // console.log(result);
        if (result.length > 0) {
            result.forEach((result, i) => {
                html_content += `<div class="flipitem">
         <img src="${result.image_url}">
<p>${result.name}</p>
        <p>${result.product_descripition}</p>
 </div>`;
        });
        html_content += `</div>
        </section>
        <script src="flipscript.js"></script>
        <p>hi</p>
    </body>
    </html>`;
            app.get("/home",function(req,res){
              res.send(html_content);
            })
        }
    } else {
        console.log(`No records found`);
    }
}
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})