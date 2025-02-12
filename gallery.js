const cookies = [
    {
        name: "Butter Cookies",
        img: "cookie0.jpg", // Replace with an actual image path
        description: "Delicious butter cookies that melt in your mouth.",
        recipePath: "recipe0.html" // Replace with an actual recipe path
    },
    {
        name: "Butter Cookies",
        img: "cookie1.jpg", // Replace with an actual image path
        description: "Delicious butter cookies that melt in your mouth.",
        recipePath: "recipe0.html" // Replace with an actual recipe path
    },
    {
        name: "Butter Cookies",
        img: "cookie3.jpg", // Replace with an actual image path
        description: "Delicious butter cookies that melt in your mouth.",
        recipePath: "recipe0.html" // Replace with an actual recipe path
    },
    {
        name: "Butter Cookies",
        img: "cookie5.jpg", // Replace with an actual image path
        description: "Delicious butter cookies that melt in your mouth.",
        recipePath: "recipe5.html" // Replace with an actual recipe path
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery-main");

    cookies.forEach(cookie => {
        const card = document.createElement("div");
        card.className = "card mb-3"; // Add Bootstrap's margin-bottom class
        card.style.width = "18rem";

        card.innerHTML = `
            <img src="/assets/${cookie.img}" class="card-img-top" alt="${cookie.name}">
            <div class="card-body">
                <h5 class="card-title">${cookie.name}</h5>
                <p class="card-text">${cookie.description}</p>
                <a href="${cookie.recipePath}" class="btn btn-primary">View recipe</a>
            </div>
        `;

        gallery.appendChild(card);
    });
});
