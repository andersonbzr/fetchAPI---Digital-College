
const getdata = async () => {
    try {   
        let response = await fetch(`https://66299f4267df268010a12780.mockapi.io/products/Products`);
        let data = await response.json();
    
        let corpo = document.querySelector("#corpo")
        for (let index = 0; index < data.length; index++) {
            let linha = document.createElement("tr")
            linha.innerHTML =`
            <th scope="row">${data[index].name}</th>
            <td>${data[index].price}</td>
            <td>${data[index].description}</td>
            <td>${data[index].material}</td>
            <td>${data[index].department}</td>
            <td>${data[index].id}</td>
            `
            corpo.appendChild(linha)
        }
    }

    catch{
        alert("Error ")
    }
   }

getdata()
