const url='https://api.github.com/users'
const main=document.getElementById('main')
//const user='mibsen77'
let text=''

function getUser(user){
    fetch(`${url}/${user}`)
        .then((response)=>response.json())
        .then((data)=>{
            text+=`${data.name} possui ${data.public_repos} no GitHub como ${data.login} <br>`
            main.innerHTML=text
        })
        .catch((error)=>console.error('Erro ', error.message || error))

}
const userInput = document.getElementById('username')

userInput.addEventListener('focusout',function(event){getUser(event.target.value)})


