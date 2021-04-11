// FUNCTIONS -------------------------------------------------------------


let input = document.getElementById('form-container');
let donw = document.querySelector('.card-container');
//delete

function deleteFood(event) {

    // 1- Check the event if raised on the button delete
    const buttonName = event.target.className;
    // 2 if yes, get the parent and remove it from the bookList
    if (buttonName == "delete") {
        const delBtn = event.target.parentElement;
        delBtn.remove();
    }

}

function addfood(event) {
    event.preventDefault();

    // 1- Get the book name from the input field
    result = ''
    let item1 = document.querySelector("#add-food-textfield1");
    let item2 = document.querySelector("#add-food-textfield2");
    let item3 = document.querySelector("#add-food-textfield3");
    let item4 = document.querySelector("#add-food-textfield4");
    let getColor = document.querySelector("#color");
    let nameOfItem1 = item1.value;
    let nameOfItem2 = item2.value;
    let nameOfItem3 = item3.value;
    let nameOfItem4 = item4.value;
    result = nameOfItem1 + " | " + nameOfItem2 + " | " + nameOfItem3 + "$" + " | " + nameOfItem4
    if (nameOfItem1 != "" && nameOfItem2 != "" && nameOfItem3 != "" && nameOfItem4 != "") {
        // 2- Create a new spam bookName for the book name, class name = name
        let foodName = document.createElement("span");
        foodName.className = "name";
        foodName.textContent = result;
        // 3- Create a new spam deleteBtn for the button delete, class name = delete
        let deleteBtn = document.createElement("span");
        let editBtn = document.createElement("span")
        editBtn.className = "edit"
        deleteBtn.className = "delete";
        editBtn.innerHTML = '<i class="material-icons">&#xe254;</i>';
        deleteBtn.textContent = "x"



        // 4- Create a new li
        let li = document.createElement("li");
        // 5- Add bookName and deleteBtn to li and li to the bookList UL
        li.appendChild(foodName);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        li.style.background = getColor.value;
        foodList.appendChild(li);
        input.style.display = 'none';
        donw.style.display = 'block';
        createBtn.style.display = 'block';
    } else {
        window.confirm("Please complate all information of food!!")
    }
    item1.value = "";
    item2.value = "";

    item3.value = "";
    item4.value = "";
}
let createBtn = document.getElementById('create');
createBtn.addEventListener('click', e => {
        createBtn.style.display = 'none';
        donw.style.display = 'none';
        input.style.display = 'block';
    })
    //search food
function searchFood(event) {
    // 1- Get the search text
    let input = document.querySelector("#search-food input");
    let filter = input.value.toUpperCase();
    let ul = document.querySelector("#food-list ul");
    let li = ul.getElementsByTagName("li");
    // 2- Loop on all LI
    for (i = 0; i < li.length; i++) {
        // Update the style of the LI (visible or hidden)
        let span = li[i].getElementsByTagName("span")[0];
        let txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) >= 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}




// MAIN -------------------------------------------------------------
let foodList = document.querySelector("#food-list ul");
foodList.addEventListener("click", deleteFood);


let addForm = document.getElementById("add-food");
addForm.addEventListener("submit", addfood);

let searchFoodInput = document
    .getElementById("search-food")
    .querySelector("input");
searchFoodInput.addEventListener("keyup", searchFood);

//Mousover
function mouseOver() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
//Mousout
function mouseOut() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


//Sort