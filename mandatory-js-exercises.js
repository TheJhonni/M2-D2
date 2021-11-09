/* <!-- MANDATORY JS EXERCISES (create a different file for this exercise)
    1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
    2) Create an unordered list using JavaScript and save it in a variable
    3) Cycle the array and create a list-item via JavaScript for every element
    4) Insert the genere as text in the list-item
    5) Append the list items in the unordered list
    6) Append the unordered list in the document. The list should appear in the page.
-->
 */

//1
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"];

const createUnorderedList = function () {
    let container = document.querySelector(".containerULiJs");
    let newUliNode = document.createElement("ul")
    container.appendChild(newUliNode);
    for (let i =0; i<genres.length; i++) {
        const list = genres[i];
        newUliNode.innerHTML += "<li>" + list + "</li>"
    }
    newUliNode.classList.add("disappear");
}

window.onload = function () {
    createUnorderedList()
};