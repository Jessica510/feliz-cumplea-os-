/* =========================================
   ESTRELLAS DEL CIELO
========================================= */

const sky =
    document.getElementById("stars");

const skyStars = [];


for(let i = 0; i < 220; i++){

    const star =
        document.createElement("span");

    star.className =
        "sky-star";


    const size =
        Math.random() * 2.5 + .5;


    star.style.width =
        `${size}px`;

    star.style.height =
        `${size}px`;


    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;


    star.style.setProperty(
        "--duration",
        `${2 + Math.random() * 5}s`
    );


    star.style.animationDelay =
        `${Math.random() * 5}s`;


    sky.appendChild(star);

    skyStars.push(star);

}


/* =========================================
   EFECTO 3D
========================================= */

document.addEventListener(
    "pointermove",
    event => {

        const x =
            (event.clientX /
            window.innerWidth -
            .5);

        const y =
            (event.clientY /
            window.innerHeight -
            .5);


        skyStars.forEach(
            (star,index) => {

                const depth =
                    (index % 10) / 10;


                star.style.marginLeft =
                    `${x * depth * 15}px`;


                star.style.marginTop =
                    `${y * depth * 15}px`;

            }
        );

    }
);


/* =========================================
   PÉTALOS
========================================= */

const petals =
    document.getElementById("petals");


for(let i = 0; i < 25; i++){

    const petal =
        document.createElement("span");

    petal.className =
        "petal";


    petal.style.left =
        `${Math.random() * 100}%`;


    petal.style.animationDuration =
        `${8 + Math.random() * 8}s`;


    petal.style.animationDelay =
        `${-Math.random() * 12}s`;


    petals.appendChild(petal);

}


/* =========================================
   ESTRELLAS FUGACES
========================================= */

const shooting =
    document.getElementById(
        "shooting-stars"
    );


function shootingStar(){

    const star =
        document.createElement("span");

    star.className =
        "shooting";


    star.style.left =
        `${55 + Math.random() * 40}%`;


    star.style.top =
        `${5 + Math.random() * 45}%`;


    shooting.appendChild(star);


    setTimeout(
        () => star.remove(),
        1400
    );

}


setInterval(
    shootingStar,
    4500
);


/* =========================================
   CAMBIO DE PANTALLAS
========================================= */

function showScreen(id){

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove(
                "active"
            );

        });


    document
        .getElementById(id)
        .classList.add(
            "active"
        );

}


document
    .querySelectorAll("[data-next]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showScreen(
                    button.dataset.next
                );

            }
        );

    });


/* =========================================
   RECUERDOS
========================================= */

const memories = [

    {
        title:
            "EL COMIENZO",

        text:
            "Quién habría pensado que aquella persona que conocí hace tantos años terminaría formando parte de tantos recuerdos. Hay encuentros que parecen pequeños al principio y que, con el tiempo, terminan significando muchísimo."
    },

    {
        title:
            "LAS PEQUEÑAS COSAS",

        text:
            "A veces no son los grandes momentos los que más recuerdo. Son las conversaciones, las risas, las ocurrencias y esas pequeñas cosas que quizá para ti fueron normales, pero que yo terminé guardando con muchísimo cariño."
    },

    {
        title:
            "UN DETALLE",

        text:
            "Todavía me parece bonito cuando alguien ve algo tan sencillo como la nieve y piensa en otra persona. Son esos detalles inesperados los que hacen que un recuerdo se quede un poquito más."
    },

    {
        title:
            "LAS VUELTAS DE LA VIDA",

        text:
            "Nuestra historia ha tenido etapas, cambios y vueltas que ninguna de las dos podía prever. Y aun así, de alguna manera, nuestros caminos siguen encontrando momentos para cruzarse. Me alegra que haya sido así."
    },

    {
        title:
            "SI ALGÚN DÍA LO OLVIDAS",

        text:
            "Si algún día dudas de lo especial que puedes ser para alguien, recuerda esto: alguien se tomó el tiempo de construirte un pequeño cielo para decirte que tu existencia dejó una huella bonita. No necesitas ser perfecta para significar mucho."
    }

];


const stars =
    document.querySelectorAll(
        ".memory-star"
    );


const modal =
    document.getElementById(
        "memoryModal"
    );


const memoryTitle =
    document.getElementById(
        "memoryTitle"
    );


const memoryText =
    document.getElementById(
        "memoryText"
    );


const counter =
    document.getElementById(
        "counter"
    );


const found =
    new Set();


stars.forEach(star => {

    star.addEventListener(
        "click",
        () => {

            const number =
                Number(
                    star.dataset.memory
                );


            memoryTitle.textContent =
                memories[number].title;


            memoryText.textContent =
                memories[number].text;


            modal.classList.add(
                "open"
            );


            star.classList.add(
                "found"
            );


            found.add(number);


            counter.textContent =
                `${found.size} / 5`;


            particleExplosion(
                star
            );

        }
    );

});


/* =========================================
   CERRAR CARTA
========================================= */

function closeModal(){

    modal.classList.remove(
        "open"
    );


    if(found.size === 5){

        setTimeout(
            () => {

                showScreen(
                    "timeline"
                );

            },
            700
        );

    }

}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


document
    .getElementById("continue")
    .addEventListener(
        "click",
        closeModal
    );


/* =========================================
   EXPLOSIÓN DE PARTÍCULAS
========================================= */

function particleExplosion(
    element
){

    const rect =
        element.getBoundingClientRect();


    for(let i = 0; i < 18; i++){

        const particle =
            document.createElement(
                "span"
            );


        particle.textContent =
            "✦";


        particle.style.position =
            "fixed";


        particle.style.left =
            `${rect.left + rect.width/2}px`;


        particle.style.top =
            `${rect.top + rect.height/2}px`;


        particle.style.color =
            "#fff";


        particle.style.zIndex =
            "500";


        particle.style.pointerEvents =
            "none";


        particle.style.textShadow =
            "0 0 12px #fff, 0 0 25px #ff62b8";


        const angle =
            Math.random() *
            Math.PI * 2;


        const distance =
            30 +
            Math.random() * 90;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(.5)",

                    opacity:1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        )
                        scale(0)`,

                    opacity:0

                }

            ],

            {

                duration:
                    700 +
                    Math.random() * 500,

                easing:
                    "ease-out"

            }

        );


        document.body.appendChild(
            particle
        );


        setTimeout(
            () => particle.remove(),
            1300
        );

    }

}


/* =========================================
   CORAZÓN FINAL
========================================= */

const heart =
    document.getElementById(
        "heart"
    );


for(
    let t = 0;
    t < Math.PI * 2;
    t += .18
){

    const x =
        16 *
        Math.pow(
            Math.sin(t),
            3
        );


    const y =
        -(
            13 *
            Math.cos(t)

            -

            5 *
            Math.cos(2*t)

            -

            2 *
            Math.cos(3*t)

            -

            Math.cos(4*t)
        );


    const star =
        document.createElement(
            "span"
        );


    star.className =
        "heart-star";


    star.textContent =
        "✦";


    star.style.left =
        `calc(50% + ${x * 1.7}%)`;


    star.style.top =
        `calc(50% + ${y * 1.7}%)`;


    star.style.animationDelay =
        `${Math.random() * 2}s`;


    heart.appendChild(
        star
    );

}


/* =========================================
   SECRETO
========================================= */

const secret =
    document.getElementById(
        "secret"
    );


document
    .getElementById("secretButton")
    .addEventListener(
        "click",
        () => {

            secret.classList.add(
                "open"
            );

        }
    );


document
    .getElementById("back")
    .addEventListener(
        "click",
        () => {

            secret.classList.remove(
                "open"
            );

        }
    );


/* =========================================
   SONIDO AMBIENTAL
========================================= */

let audioContext;

let soundEnabled =
    false;

let soundTimer;


document
    .getElementById("soundButton")
    .addEventListener(
        "click",
        () => {

            soundEnabled =
                !soundEnabled;


            document
                .getElementById(
                    "soundButton"
                )
                .textContent =
                soundEnabled
                ? "🔊"
                : "♫";


            if(soundEnabled){

                startAmbient();

            }else{

                clearInterval(
                    soundTimer
                );

            }

        }
    );


function startAmbient(){

    if(!audioContext){

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }


    if(
        audioContext.state ===
        "suspended"
    ){

        audioContext.resume();

    }


    playNote();


    soundTimer =
        setInterval(
            playNote,
            3000
        );

}


function playNote(){

    if(!soundEnabled)
        return;


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    const notes = [

        196,
        246.94,
        293.66,
        329.63

    ];


    oscillator.type =
        "sine";


    oscillator.frequency.value =
        notes[
            Math.floor(
                Math.random() *
                notes.length
            )
        ];


    gain.gain.setValueAtTime(
        0,
        audioContext.currentTime
    );


    gain.gain.linearRampToValueAtTime(
        .018,
        audioContext.currentTime + .1
    );


    gain.gain.exponentialRampToValueAtTime(
        .001,
        audioContext.currentTime + 2.5
    );


    oscillator
        .connect(gain)
        .connect(
            audioContext.destination
        );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 3
    );

}