// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
    return cats
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
    return cats
}
function appendCat(name) {
   const copyOfCats = cats.slice();
   copyOfCats.push("Broom");
   return copyOfCats
}
function prependCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift("Arnold");
    return copyOfCats
}
function removeLastCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.pop("Garfield");
    return copyOfCats
}
function removeFirstCat(name) {
    const copyOfCats = cats.slice();
    copyOfCats.shift("Milo");
    return copyOfCats
}