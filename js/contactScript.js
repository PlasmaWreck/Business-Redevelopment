// for contact page
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactSubject = document.getElementById("contactSubject");
const contactMessage = document.getElementById("contactMessage");
const contactButton = document.getElementById("contactButton").addEventListener("click", function() {
    contactName.value = "";
contactEmail.value = "";
contactSubject.value = "";
    contactMessage.value = "";
});