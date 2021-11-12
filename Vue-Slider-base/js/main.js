/*
 * Vue Slider
 */


// step1 
// creo il 'container' che conterrá la mia logica e che dovra essere inserito nell HTML
const app = new Vue({
    el: '#app',

    // creo i miei dati 
    data: {
        slides:[
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Maldive',
                text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        slideActive: 0,
        timer: 0,
    },

    // Bonus step3
    // Applicare l’autoplay allo slider: ogni 3 secondi cambia immagine automaticamente.
    created: function () {
        this.timer = setInterval ( () =>{
            console.log('hello');
            this.nextSlide();
        }, 3000);
    },
    

    // step2
    // creo i metodi che devono contenere le funzioni per lo scorrimento delle immagini
    methods: {
        prevSlide() {
            // utilizzo this perche cosi riesco a collegarmi a 'slideActive'
            // decremento
            this.slideActive--;

            // creo una decisone per poter scorrere le immagini e una volta arrivato a zero (come indice) ripartire dall'ultima
            if (this.slideActive < 0) {
                this.slideActive = this.slides.length -1;
                // utilizzo il -1 perche il mio array parte da zero e contine percio 5 elemnti ma l ulitmo e in posizione 4
            }
        },

        // creo la seconda funzione per la freccia next: utilizzo la forma di scrittura piu lunga per averle entrambe
        nextSlide: function() {
            // incremento (this.slideActive++;)
            this.slideActive = this.slideActive + 1;

            if (this.slideActive > this.slides.length -1) {
                this.slideActive = 0;
            }
        },
        // clicco sull immagine per non utilizzare le freccie, utilizzo una funzione con una parametro che poi andró a identificare come il mio index sull HTML (indice delle mie immagini, la loro posizione)
        pushImage (numImage) {
            this.slideActive = numImage;
        },

    },

    
});