
const getdata = async () => {
    try {   
        let response = await fetch(`https://rickandmortyapi.com/api/character`);
        let data = await response.json();
    
        let corpo = document.querySelector("#corpo")
        for (let index = 0; index < data.results.length; index++) {
            let linha = document.createElement("tr")
            linha.innerHTML =`
            <th scope="row">${data.results[index].id}</th>
            <td>${data.results[index].name}</td>
            <td><img src="${data.results[index].image}"></td>
            <td>${data.results[index].species}</td>
            <td>${data.results[index].gender}</td>
            <td>${data.results[index].location.name}</td>
            `
            corpo.appendChild(linha)
        }
    }

    catch{
        alert("Error ")
    }
   }

getdata()
