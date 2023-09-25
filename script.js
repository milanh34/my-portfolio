const head = document.querySelector("header");
window.addEventListener("scroll", function () {
    head.classList.toggle("stick", this.window.scrollY > 120);
});


var tablinks = document.getElementsByClassName("tab");
var tabtexts = document.getElementsByClassName("tab-text");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabtext of tabtexts) {
        tabtext.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active-tab");
}

let menu = document.querySelector('#menu');
let nav = document.querySelector('.nav');
menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    nav.classList.toggle("activate");
};

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    nav.classList.remove("activate");
};


const scriptURL = 'https://script.google.com/macros/s/AKfycbyzqDuVsDo2MgshTxfHKiJvGRbOsP_lCteVWmGGiljej5rRjHJmbPyte_Zb6TwPkeyt/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
