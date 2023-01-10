const watches = [
    {
        id: 1,
        title: "Girard-Perregaux Quartz",
        img: "./watches/watch-1.png",
        movement: "quartz",
    },
    {
        id: 2,
        title: "Tommy Hilfiger Vacation",
        img: "./watches/watch-2.png",
        movement: "quartz",
    },
    {
        id: 3,
        title: "Casio Calculator",
        img: "./watches/watch-3.png",
        movement: "quartz",
    },
    {
        id: 4,
        title: "Movado Museum Classic Vintage",
        img: "./watches/watch-4.png",
        movement: "quartz",
    },
    {
        id: 5,
        title: "Bulova Marine Star Chronograph",
        img: "./watches/watch-5.png",
        movement: "quartz",
    },
    {
        id: 6,
        title: "Movado Museum Classic Modern",
        img: "./watches/watch-6.png",
        movement: "quartz",
    },
    {
        id: 7,
        title: "Fossil Chronograph",
        img: "./watches/watch-7.png",
        movement: "quartz",
    },
    {
        id: 8,
        title: "Tissot Automatic",
        img: "./watches/watch-8.png",
        movement: "mechanical",
    },
    {
        id: 9,
        title: "Tissot PR100 Powermatic 80",
        img: "./watches/watch-9.png",
        movement: "mechanical",
    },
    {
        id: 10,
        title: "Casio Royale",
        img: "./watches/watch-10.png",
        movement: "quartz",
    },
    {
        id: 11,
        title: "Vulcain Grand Prix",
        img: "./watches/watch-11.png",
        movement: "mechanical",
    },
    {
        id: 12,
        title: "Omega Seamaster",
        img: "./watches/watch-12.png",
        movement: "mechanical",
    },
    {
        id: 13,
        title: "Citizen Automatic",
        img: "./watches/watch-13.png",
        movement: "mechanical",
    },
    {
        id: 14,
        title: "King Seiko",
        img: "./watches/watch-14.png",
        movement: "mechanical",
    },
];

const items = document.querySelector(".items");

const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function(){
    displayItems(watches);
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        const filter = event.currentTarget.dataset.id;
        if (filter === "all"){
            displayItems(watches);
        } else {
            const filtereditems = watches.filter(function(watch){
                if (watch.movement === filter){
                    return watch;
                }
            });
            displayItems(filtereditems);
        }
    });
});

function displayItems(watchesitems){
    let display = watchesitems.map(function(watch){
        return `<article class="item">
                    <div class="info">
                        <h4>${watch.title}</h4>
                    </div>
                    <img src="${watch.img}" class="image-watch" alt="${watch.title}">
                </article>`;
    });
    display = display.join("");
    items.innerHTML = display;
}
