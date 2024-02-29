const url = "data/ecossistemas.json";
const divEcossistemas = document.querySelector(".ecossistemas");

fetch(url).then((res) => {
    res.json().then((dados) => {
        const ecossistemas = dados.ecossistemas;
        ecossistemas.forEach((item) => {
        
            const template = `<tr>
                                <td><a href="${item.linkSite}" target="_blank">${item.txtSite}</a></td>
                                <td>${item.nome} - ${item.tipo}</td>
                            </tr>`

            
            divEcossistemas.innerHTML += template;
            
        });
    })    
})
