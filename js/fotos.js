const myList = document.querySelector('ul');
const myRequest = new Request('products.json');
let atual=0

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    for (const item of data) {
        let novo_no = document.createElement('ul')
        let listItem = document.createElement('li');
        if (atual==item['albumId'])
        {
            console.log('igual')
        }
        else
        {
          //listItem.appendChild(document.createElement('strong')).textContent = 'Album ' + item['albumId'];
          atual= item['albumId']
          listItem.appendChild(document.createElement('strong')).textContent = 'Album ' + item['albumId'];
          myList.appendChild(listItem);
          listItem = document.createElement('li');
        }
        let meu_item
        listItem.append(' - '); 
        listItem.append(item['id']);
        listItem.append(' - ');   
        listItem.appendChild(document.createElement('strong')).textContent = item['title'];
        listItem.append(' - '); 
       
        meu_item=document.createElement('a')
        meu_item.textContent=item['url']
        meu_item.href=item['url']
        listItem.append(meu_item)

        listItem.append(' - '); 
        //
        //listItem.appendChild(document.createElement('strong')).textContent= item['thumbnailUrl'];
        meu_item=document.createElement('a')
        meu_item.textContent=item['thumbnailUrl']
        meu_item.href=item['thumbnailUrl']
        listItem.append(meu_item)
        myList.appendChild(listItem);

        }
         
    })

  .catch(console.error);
