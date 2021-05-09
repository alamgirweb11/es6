fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((body) => {
    const  lis = body.map((data) => {
          let li = document.createElement('li');
          let text = `ID:${data.id}, Name: ${data.name}, Email: ${data.email}`;
          let textNode = document.createTextNode(text);
          li.appendChild(textNode);
          return li;
    });
     lis.forEach((li) => {
           document.getElementById('dataList').appendChild(li)
        // console.log(li)
     })
})
.catch((error) => console.log(error));
