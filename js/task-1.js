const categories = document.querySelectorAll("#categories .item")

console.log("Numbers of categories:", categories.length);

categories.forEach(category => {
const name = category.querySelector("h2").textContent
const elements = category.querySelectorAll("ul li").length

console.log("Category:", name);
console.log("Elements:", elements);
}
)



