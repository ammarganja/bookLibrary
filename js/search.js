function searchdata() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input-data");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelbody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchdata() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input-data");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelbody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchdata() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input-data");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelbody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchdata() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input-data");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelbody");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}