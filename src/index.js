import "./styles.css";

const sbmtBtn = document.getElementById("submit");
const uinpt = document.getElementById("username");
const einpt = document.getElementById("email");
const pinpt = document.getElementById("password");
const cpinpt = document.getElementById("cpassword");
const zinpt = document.getElementById("zipcode");
const coinpt = document.getElementById("country");

uinpt.addEventListener("input", () => {
    checkUser();
})

einpt.addEventListener("input", () => {
    checkMail();
})

zinpt.addEventListener("input", () => {
    checkZip();
})

coinpt.addEventListener("input", () => {
    checkCountry();
})

pinpt.addEventListener("input", () => {
    checkPass();
})

cpinpt.addEventListener("input", () => {
    checkCPass();
})

sbmtBtn.addEventListener("click", () => {
    checkInputs();
})

function checkUser() {
    if (uinpt.value.trim().length === 0) {
        uinpt.setCustomValidity("This field is required.");
        return false;
    } else if (uinpt.value.includes(" ")) {
        uinpt.setCustomValidity("Spaces are not allowed in username.");
        return false;
    } else {
        uinpt.setCustomValidity("");
        return true;
    }
}

function checkMail() {
    if (einpt.value.trim().length === 0) {
        einpt.setCustomValidity("This field is required.");
        return false;
    } else if (einpt.validity.typeMismatch) {
        einpt.setCustomValidity("Please enter a valid email.");
        return false;
    } else {
        einpt.setCustomValidity("");
        return true;
    }
}

function checkZip() {
    if (zinpt.value.trim().length === 0) {
        zinpt.setCustomValidity("This field is required.");
        return false;
    } else if (zinpt.value.includes(" ")) {
        zinpt.setCustomValidity("Spaces are not allowed in zipcode.");
        return false;
    } else if (zinpt.value.match(/^[0-9]+$/) === null) {
        zinpt.setCustomValidity("Please enter a valid zipcode.");
        return false;
    } else if (zinpt.value.length < 5) {
        zinpt.setCustomValidity("Zipcode length must be between 5 and 9.");
        return false;
    } else {
        zinpt.setCustomValidity("");
        return true;
    }
}

function checkCountry() {
    if (coinpt.value.trim().length === 0) {
        coinpt.setCustomValidity("This field is required.");
        return false;
    } else {
        coinpt.setCustomValidity("");
        return true;
    }
}

function checkPass() {
    if (pinpt.value.trim().length === 0) {
        pinpt.setCustomValidity("This field is required.");
        return false;
    } else if (pinpt.value.includes(" ")) {
        pinpt.setCustomValidity("Spaces are not allowed in password.");
        return false;
    } else if (pinpt.value.length < 8) {
        pinpt.setCustomValidity("Password must be longer than 8 chars.");
        return false;
    } else {
        pinpt.setCustomValidity("");
        return true;
    }
}

function checkCPass() {
    if (cpinpt.value.trim().length === 0) {
        cpinpt.setCustomValidity("This field is required.");
        return false;
    } else if (cpinpt.value.includes(" ")) {
        cpinpt.setCustomValidity("Spaces are not allowed in confirm password.");
        return false;
    } else if (cpinpt.value.length < 8) {
        cpinpt.setCustomValidity("Password must be longer than 8 chars.");
        return false;
    } else if (cpinpt.value !== pinpt.value) {
        cpinpt.setCustomValidity("Passwords do not match.");
        return false;
    } else {
        cpinpt.setCustomValidity("");
        return true;
    }
}

function checkInputs() {
    checkUser();
    checkMail();
    checkZip();
    checkCountry();
    checkPass();
    checkCPass();
    if (checkUser() && checkMail() && checkPass() && checkCPass() && checkZip() && checkCountry()) {
        const sec = document.querySelector("section");
        const frm = document.querySelector("form");
        const h1 = document.querySelector("h1");
        h1.remove();
        frm.remove();
        const para = document.createElement("p");
        para.textContent = "The form has been submitted successfully.";
        sec.appendChild(para);
        const link = document.createElement("a");
        link.href = "index.html";
        link.textContent = "Click here to re-submit";
        sec.appendChild(link);
    }
}