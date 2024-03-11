

const input = document.getElementById("inp");
const qrcodecont = document.getElementById("qrcode-cont");
const qimg = document.getElementById("qimg");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {

  if (input.value) {

    qimg.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=300x150&data=${input.value}`
    );



    qrcodecont.style.display = "flex";
  } else {
    alert("Please Enter Text!");
  }
});