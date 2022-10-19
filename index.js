const inputs = document.querySelectorAll(".otp-content input");

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", otpHandler);
    input.addEventListener("paste", handlePasteOtp);
});

function otpHandler(e) {
    const input = e.target;
    let value = input.value;
    inputs.value = "";
    input.value = value ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if (value.length > 0 && fieldIndex < inputs.length - 1) {
        input.nextElementSibling.focus();
    }
    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }
}

function handlePasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }
}

function submit() {
    let otp = "";
    console.log("Submitting...");
    inputs.forEach((input) => {
        otp += input.value;
        input.classList.add("disable");
        input.disable = true;
    });
    if (submit) {
        console.log(otp);
        inputs.forEach((input) => (input.value = ""));
    }
}

function resetNow() {
    inputs.forEach((input) => (input.value = ""));
    window.location.reload();
};