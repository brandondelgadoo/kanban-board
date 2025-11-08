function remove() {
    let list = document.getElementById("list")
    let last = list.lastElementChild
    list.removeChild(last)
}

function add() {
    // let new_item = prompt("Please type the item to add");    Method 1
    let new_item = document.getElementById("new").value      // Method 2
    if (new_item) {
        const item = document.createElement("li")
        item.innerHTML = new_item
        document.getElementById("list").appendChild(item)
    } else {
        alert("Error! You need to input an item!")
    }
}