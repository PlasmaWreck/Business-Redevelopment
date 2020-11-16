
let educatorBtn = document.getElementById("educatorBtn");
let studentBtn = document.getElementById("studentBtn");
let injectable = document.getElementById("injectable");


educatorBtn.addEventListener("click", function () {
    loadData("../pages/netlogo-educator.html");
});

studentBtn.addEventListener("click", function () {
    loadData("../pages/netlogo-student.html");
});






function loadData(url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(this.responseText);
            injectable.innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}