const url = "data/eventos.json";
const divEventos = document.querySelector(".eventos");

fetch(url).then((res) => {
    res.json().then((dados) => {
        const eventos = dados.eventos.reverse();
        eventos.forEach((item, index) => {
        
            const cardDir = `<div class="timeline-blog overflow">
                                <div class="timeline-date text-center">
                                    <a href="#" class="btn btn-common uppercase">${item.mes} ${item.ano}</a>
                                </div>
                                <div class="timeline-divider overflow padding-bottom">
                                    <div class="col-sm-6 padding-right card-remove" data--duration="1000ms" data--delay="300ms"></div>
                                    <div class="col-sm-6 padding-left arrow-left toggle-card" data--duration="1000ms" data--delay="300ms">
                                        <div class="single-blog timeline">
                                            <div class="single-blog timeline">
                                                <div class="single-blog-wrapper">
                                                    <div class="post-thumb">
                                                        <img src=${item.linkBanner} class="img-responsive" alt="">
                                                        <div class="post-overlay">
                                                            <span class="uppercase"><a href="#">${item.dia}
                                                                    <br><small>${item.mes.substring(0,3)}</small></a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post-content overflow">
                                                    <h2 class="post-title bold">
                                                        ${item.title}
                                                    </h2>
                                                    <p class="area-detalhes">
                                                        Mais detalhes:
                                                            <ul style="list-style-type:disc;" >
                                                                ${item.detalhes.map(detalhe => {
                                                                    return `<li>
                                                                                <a href=${detalhe.url} target="_blank">${detalhe.texto}</a>
                                                                            </li>`
                                                                }).join('')}
                                                            </ul>
                                                    </p>
                                                    
                                                    <div class="post-bottom overflow">
                                                        <span class="post-date pull-left">${item.dia} de ${item.mes} de ${item.ano}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`

            const cardEsq = `<div class="timeline-blog overflow">
                                <div class="timeline-date text-center">
                                    <a href="#" class="btn btn-common uppercase">${item.mes} ${item.ano}</a>
                                </div>
                                <div class="timeline-divider overflow padding-bottom">
                                    <div class="col-sm-6 padding-right arrow-right toggle-card" data--duration="1000ms" data--delay="300ms">
                                        <div class="single-blog timeline">
                                            <div class="single-blog timeline">
                                                <div class="single-blog-wrapper">
                                                    <div class="post-thumb">
                                                        <img src=${item.linkBanner} class="img-responsive" alt="">
                                                        <div class="post-overlay">
                                                            <span class="uppercase"><a href="#">${item.dia}
                                                                    <br><small>${item.mes.substring(0,3)}</small></a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post-content overflow">
                                                    <h2 class="post-title bold">
                                                        ${item.title}
                                                    </h2>
                                                    <p class="area-detalhes">
                                                        Mais detalhes:
                                                        <ul style="list-style-type:disc;" >
                                                            ${item.detalhes.map(detalhe => {
                                                                return `<li>
                                                                            <a href=${detalhe.url} target="_blank">${detalhe.texto}</a>
                                                                        </li>`
                                                            }).join('')}
                                                        </ul>
                                                    </p>
                                                    
                                                    <div class="post-bottom overflow">
                                                        <span class="post-date pull-left">${item.dia} de ${item.mes} de ${item.ano}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`

            if (index %2 === 0){
                divEventos.innerHTML += cardEsq;
            } else {
                divEventos.innerHTML += cardDir;
            }
        });
    })    
})


