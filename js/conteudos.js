const url = "data/conteudos.json";
const divConteudos = document.querySelector(".conteudos");

fetch(url).then((res) => {
  res.json().then((dados) => {
    const conteudos = dados.conteudos;
    conteudos.forEach((item) => {
      const template = `<tr>
                    <td>
                        <a href="${item.linkConteudo}" target="_blank">${item.titulo}</a>
                    </td>
                    <td> 
                        ${item.descricao}
                    </td>
                    <td>
                        ${item.categoria}
                    </td>
                </tr>`;
      divConteudos.innerHTML += template;
    });
  });
});
