const slides = [
{
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);

const { createApp } = Vue;

createApp({
    data() {
        return {
            activeIndex: 0,
            images: ['img/01.webp',
                     'img/02.webp',
                     'img/03.webp',
                     'img/04.webp',
                     'img/05.webp',
                     'img/06.webp',
                     'img/07.webp',
                     'img/08.webp',
                     'img/09.webp',
        ],
            title: ['Marvel\'s Spiderman Miles Morales',
            'Ratchet & Clank: Rift Apart',
            'Fortnite',
            'Stray',
            "Marvel's Avengers",
            'Grand Theft Auto VI',
            'Fc 24',
            'Star Wars Battlefront II',
            "Minecraft",
        ],
            description: ['Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        ]
        }
    },
    methods: {
        changeSlideTo(index){
            if (index >= this.images.length || index < 0 ){
                return false;
            }

            this.activeIndex = index;
        },
        nextSlide(){
            this.activeIndex = this.activeIndex + 1;
            if (this.activeIndex >= this.images.length){
                this.activeIndex = 0;
            }
        },

        prevSlide(){
            this.activeIndex = this.activeIndex - 1;
            if(this.activeIndex < 0){
                this.activeIndex = 8;
            }
        },

    },
}).mount('#app');