fetch("https://rickandmortyapi.com/api/character")
.then(Response => Response.json())
.then(data => {

    // Cards -----------------------------------------------------------------------------
    let corpo = document.querySelector("#corpo");
    for (let index = 0; index < data.results.length; index++){
        let linha = document.createElement("div");
        linha.innerHTML = 
        `
        <div class="card" style="width: 18rem;">
        <img src="${data.results[index].image}" class="card-img-top" alt="...">
        
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Id:</strong> ${data.results[index].id}</li>
          <li class="list-group-item"><strong>Name:</strong> ${data.results[index].name}</li>
          <li class="list-group-item"><strong>Species:</strong> ${data.results[index].species}</li>
          <li class="list-group-item"><strong>Gender:</strong> ${data.results[index].gender}</li>
          <li class="list-group-item"><strong>Location:</strong> ${data.results[index].location.name}</li> 
        </ul>
        
      </div>`
      corpo.appendChild(linha);
    }
    

    // Linhas-------------------------------------------------------------------------

    // let corpo = document.querySelector("#corpo");
    // for (let index = 0; index < data.results.length; index++) {
    //     let linha = document.createElement("tr");
    //     linha.innerHTML =
    //         `<th scope="row">${data.results[index].id}</th>
    //         <td>${data.results[index].name}</td>
    //         <td><img src="${data.results[index].image}"></td>
    //         <td>${data.results[index].species}</td>
    //         <td>${data.results[index].gender}</td>
    //         <td id="nameCor">${data.results[index].location.name}</td>`;
        
    //     corpo.appendChild(linha);
    // }
})
.catch(error => console.log(error));
