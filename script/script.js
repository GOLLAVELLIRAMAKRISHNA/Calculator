var input_Form = document.getElementById("input-form");
var output = document.getElementById("output");
var reset_Btn = document.getElementById("reset");
var btns = document.querySelectorAll(".btn");
var calc_Btn = document.getElementById("cal");

reset_Btn.addEventListener("click", () => {
    input_Form.value = "";
    output.innerHTML = "";
});

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.dataset.value === "Del") {
            input_Form.value = input_Form.value.slice(0, -1);
        } else {
            input_Form.value += e.target.dataset.value;
        }
    })
});

calc_Btn.addEventListener("click", () => {
    output.innerHTML = eval(input_Form.value);
    input_Form.value = "";
})