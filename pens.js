pens = [
    {
        id: 1,
        title: "Cross Century Classic",
        img: "./pens/pen-1.png",
    },
    {
        id: 2,
        title: "Jinhao X450",
        img: "./pens/pen-2.png",
    },
    {
        id: 3,
        title: "Genius",
        img: "./pens/pen-3.png",
    },
    {
        id: 4,
        title: "Parker Rollerball",
        img: "./pens/pen-4.png",
    },
    {
        id: 5,
        title: "Generic Piston Filler",
        img: "./pens/pen-5.png",
    },
    {
        id: 6,
        title: "Montblanc Meisterstuck Rollerball",
        img: "./pens/pen-6.png",
    },
    {
        id: 7,
        title: "Sheaffer Agio",
        img: "./pens/pen-7.png",
    },
    {
        id: 8,
        title: "Jinhao Demonstrator",
        img: "./pens/pen-8.png",
    },
    {
        id: 9,
        title: "Cross Aventura",
        img: "./pens/pen-9.png",
    },
    {
        id: 10,
        title: "Montblanc Meisterstuck Fountain",
        img: "./pens/pen-10.png",
    },
];

const title = document.getElementById("title");
const img = document.getElementById("img");

const bbutton = document.querySelector(".bbutton");
const nbutton = document.querySelector(".nbutton");

let currentShowing = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPen(currentShowing);
});

function showPen(pen){
    const showing = pens[pen];
    title.textContent = showing.title;
    img.src = showing.img;
}

bbutton.addEventListener("click", function(){
    currentShowing--;
    if(currentShowing < 0){
        currentShowing = pens.length - 1;
    }
    showPen(currentShowing);
});

nbutton.addEventListener("click", function(){
    currentShowing++;
    if(currentShowing > pens.length - 1){
        currentShowing = 0;
    }
    showPen(currentShowing);
});
