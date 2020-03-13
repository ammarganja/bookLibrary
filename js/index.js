// book is a function constructor 

function Book(name, author, type, number) {
    this.name = name;
    this.author = author;
    this.type = type;
    this.no = number;
}


// store in localstorage

window.localStorage.setItem('book', '');

// Display Construtor

function Display() {


}

// add mathod to display Prototype

Display.prototype.add = function(book) {
    // console.log("Adding to UI")
    tabelbody = document.getElementById("tabelbody")
    let uistring = `<tr id=${book.no}>
                    <td>${book.no}</td>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                     <td> <button type="button" onclick="remove(${book.no})" class="btn btn-danger">Remove Book</button>
                    </<a>
                    </tr>`;
    tabelbody.innerHTML += uistring
}


function remove(id) {
    document.getElementById(id).remove()
}




Display.prototype.clear = function() {
    let LibraryForm = document.getElementById("LibraryForm");
    LibraryForm.reset();
}


Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
}
Display.prototype.show = function(type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>message : </strong> ${displayMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`;
    setTimeout(function() {
        message.innerHTML = ""
    }, 2000);

}

// add submit event lisner to LibraryForm

let LibraryForm = document.getElementById("LibraryForm");
LibraryForm.addEventListener("submit", LibraryFormSubmit);


// create array and push
let arr1 = [];


// data sorting

function sortTablenum() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tabelbody");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            // console.log(x);
            y = rows[i + 1].getElementsByTagName("TD")[0];

            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortTablestr(num) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tabelbody");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[num];
            // console.log(x);
            y = rows[i + 1].getElementsByTagName("TD")[num];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

let Filter = document.getElementById('noFilters');
Filter.addEventListener("click", sortTablenum);
let nameFilter = document.getElementById("nameFilters")
nameFilter.addEventListener("click", (e) => {
    e.preventDefault();
    sortTablestr(1);
});
let authorFilter = document.getElementById("authorFilters")
authorFilter.addEventListener("click", (e) => {
    e.preventDefault();
    sortTablestr(2);
});
let typeFilter = document.getElementById("typeFilters")
typeFilter.addEventListener("click", (e) => {
    e.preventDefault()
    sortTablestr(3);
});


function nameFilters(event) {
    event.preventDefault();
}

function authorFilters(event) {
    event.preventDefault();
}

function typeFilters(event) {
    event.preventDefault();
}

function filter(event) {
    event.preventDefault();
}



// edit data in table


var table = document.getElementById("tabelbody"),
    rIndex;

for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("bookNumber").value = this.cells[0].innerHTML;
        document.getElementById("bookName").value = this.cells[1].innerHTML;
        document.getElementById("auther").value = this.cells[2].innerHTML;
        document.getElementById("fiction").value = this.cells[3].innerHTML;
        document.getElementById("Programming").value = this.cells[4].innerHTML;
        document.getElementById("cooking").value = this.cells[5].innerHTML;
    };
}


// edit the row
function editRow() {
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("bookNumber").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("bookName").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("auther").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("fiction").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("Programming").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("cooking").value;
}


let edit = document.getElementById('noFilters');
edit.addEventListener("click", editRow);



// tabel data add

function LibraryFormSubmit(e) {
    e.preventDefault();
    console.log("You Have submited library form");
    let number = document.getElementById('bookNumber').value;
    let name = document.getElementById('bookName').value;
    let auther = document.getElementById('auther').value;
    let type;
    let fiction = document.getElementById('fiction');
    let Programming = document.getElementById('Programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    } else if (Programming.checked) {
        type = Programming.value;
    } else if (cooking.checked) {
        type = cooking.value;

    }
    let book = new Book(name, auther, type, number);
    console.log(book);

    arr1.push(book);
    console.log(arr1);
    let display = new Display(book);


    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been successfully added")
    } else {
        display.show("danger", "Sorry you can't add this book ")
    }

}