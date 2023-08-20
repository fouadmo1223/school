let userinput = document.querySelector("[name='username'");
let passinput = document.querySelector("[name='pass'");
let input = document.forms[0];
let wrong1 = document.querySelector("[class = 'wrong']");


document.forms[0].onsubmit = function (e) {

    let uservalid = false;
    let passvalid = false;
    console.log(passinput.value);
    console.log(userinput.value);
    if (userinput.value === "fouad" && passinput.value === "fouad12") {
         uservalid = true;
       passvalid = true;

    }
    if (userinput.value === "amr" && passinput.value === "amr12") {
        input.action="dr-amr.html"
        uservalid = true;
        passvalid = true;

    }
    if (uservalid ==false && passvalid ==false) {
        e.preventDefault();
        wrong1.style.cssText = "display : block";
    }

}

