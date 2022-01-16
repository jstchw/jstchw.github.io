function validateForm() {
    let x = document.forms["lastname"]["text"].value;

    if(x == "Сироткин") {
        setTimeout(function() {window.location = "/you_got_it.html" });
    }
    else {
        alert("Используй шифр Атбаш!")
        setTimeout(function() {window.location = "/index.html" });
    }
  }