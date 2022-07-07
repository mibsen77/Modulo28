//import fetch from node-fetch
//get
/*
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'GET',
    header:{
        'Content-Type':'application/json; charset=UTF-8'
    }
    
})
.then(response => response.json())
.then(data => console.log(data)) 
.cath(error => console.error(error))
*/
let _data={
    title:'teste de envio',
    body: 'loren ipsum sit dolor amet consectur',
    userId:5
}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify(_data),
    headers:{
        'Content-Type':'application/json; charset=UTF-8'
    }
    
})
.then(response => response.json())
.then(data => console.log(data)) 
//.cath(error => console.error(error))