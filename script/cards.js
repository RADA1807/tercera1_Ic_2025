console.log('Cargando cards')

const dataCards = [
    {
        "title": "Juego del año",
        "url_image": "./Images/goty.WEBP",
        "desc": "Este impresionante juego, hecho solo para los más exigentes, requiere de muchas habilidad y paciencia",
        "cta": "Mostrar más...",
        "Link": "https://www.reddit.com/r/PSVR/comments/17t5afa/best_vr_game_of_the_year_golden_joystick_award/?tl=es-419&rdt=34550"
    },
    {
        "title": "Juego del mes",
        "url_image": "./Images/gow.PNG",
        "desc": "Este impresionante juego, hecho solo para los más exigentes, requiere de muchas habilidad y paciencia",
        "cta": "Mostrar más...",
        "Link": "https://www.elmundo.es/tecnologia/videojuegos/2022/12/09/6392f81be4d4d8d82f8b45cb.html"
    },
    
    {
        "title": "Juego del dia",
        "url_image": "./Images/valhalla.WEBP",
        "desc": "Este impresionante juego, hecho solo para los más exigentes, requiere de muchas habilidad y paciencia",
        "cta": "Mostrar más...",
        "Link": "https://jugamostodos.org/index.php/noticias-en-espana/en-produccion/10040-valhalla"
    },

];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            this.insertData(_self);

        },
        insertData: function(_self) {
            dataCards.map(function(item, index) {
               document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index)); 
            });
        },

        tplCardItem: function (item, index) {
            return(`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                <p class='card-title'>${item.title}</p>
                <p class='card-desc'>${item.desc}</p>
                <a class='card-cta' target='blank' href='${item.Link}'>${item.cta}</a>
                </div>
            </div>`)

        },
    }
    CARD.init();


})();