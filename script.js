function validateForm() {
    let x = document.forms["lastname"]["text"].value;

    if(x == "Сироткин") {
        setTimeout(function() {window.location = "/index2.html" });
    }
    else {
        alert("Используй шифр Атбаш!")
    }
  }