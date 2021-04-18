const fs = require('fs')
const fetch = require('node-fetch')


//Fetch data from api
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => (
         //Creating json file and writing data in it
         fs.writeFileSync('./results/post.json', JSON.stringify(json), (err)=> {
            if(err) throw(err)
        })
    )
       
    )

fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.text())
        .then((body) => (
            //Creating plain text file and writing data in it
            fs.writeFileSync('./results/post.txt',JSON.stringify(body),(err) => {
                if(err) throw(err)
            } )
        ))
    



