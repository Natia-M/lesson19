window.onload = function () {
  let img = document.createElement("img");
  img.src =
    "https://fastly.picsum.photos/id/180/2000/1600.jpg?hmac=dr3QTXUHbgPDvKgE9s2UjynoVFsZdxoLI3cxK8YZd9A";
  img.alt = "სურათი";
  img.style.width = "500px";

  document.body.appendChild(img);
};
//4. დავალება
const characters = [
  {
    first_name: "Harry",
    last_name: "Potter",
    house: "Gryffindor",
    image: "images/img1.png",
  },
  {
    first_name: "Hermione",
    last_name: "Granger",
    house: "Gryffindor",
    image: "images/img2.png",
  },
  {
    first_name: "Ron",
    last_name: "Weasley",
    house: "Gryffindor",
    image: "images/img3.png",
  },
  {
    first_name: "Draco",
    last_name: "Malfoy",
    house: "Slytherin",
    image: "images/img4.png",
  },
];
const charactersHTML = characters

  .map(
    (character) => `
    <div class="character-card ${character.house.toLowerCase()}">
        <img src="${character.image}" alt="${character.first_name}">
        <h2>${character.first_name} ${character.last_name}</h2>
        <p>House: <strong>${character.house}</strong></p>
    </div>
`
  )
  .join("");
document.getElementById("characters-list").innerHTML = charactersHTML;
