class Book {

    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI")
        let tabelbody = document.getElementById("tabelbody")
        let uistring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`;
        tabelbody.innerHTML += uistring
    }

    clear() {
        let LibraryForm = document.getElementById("LibraryForm");
        LibraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }
    show(type, displayMessage) {
        let Boldtext;
        if (type === "success") {
            Boldtext = "success";
        } else {
            Boldtext = "error!";
        }
        let message = document.getElementById("message");
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong> ${Boldtext} </strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>`;
        setTimeout(function() {
            message.innerHTML = ""
        }, 5000);

    }
}

let LibraryForm = document.getElementById("LibraryForm");
LibraryForm.addEventListener("submit", LibraryFormSubmit);

function LibraryFormSubmit(e) {
    e.preventDefault();
    console.log("You Have submited library form");
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
    let book = new Book(name, auther, type);
    console.log(book);

    let display = new Display(book);


    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been successfully added")
    } else {
        display.show("danger", "Sorry you can't add this book ")
    }

}