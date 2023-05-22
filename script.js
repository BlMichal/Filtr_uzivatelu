const result = document.getElementById("user-list");
const input = document.getElementById("input-filter");
const userList = [];

getData();

input.addEventListener("input", (e) => {
        dataFilter(e.target.value);
    });

// Funkce pro získání dat z randommuser.me API    
async function getData(){
    const allUsers = await fetch("https://randomuser.me/api?results=50");

    const data = await allUsers.json();
    result.innerHTML = "";

// Implementování dat o uživatelých
    data.results.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div id="user-information">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
                <p>${user.location.state}</p>
            </div>
        `
        result.appendChild(li);

        userList.push(li);
    });
};

// Funkce pro ukrytí uživatelů, kteří neodpovídají zadanému textu
function dataFilter(inputText){
    userList.forEach((oneUser) => {
        if (oneUser.innerText.toLowerCase().includes(inputText.toLowerCase())) {
            oneUser.classList.remove("hide");
        } else {
            oneUser.classList.add("hide");
        };
    });
};