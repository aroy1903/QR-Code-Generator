const selectElement = document.querySelector("#myList");
const submitButton = document.querySelector("#submitButton");
const qrcodeContainer = document.querySelector("#qrcode");
const userSite = document.querySelector("#userSite");
const downloadBtn = document.querySelector("#downloadBtn");

let wXh;
let website;
submitButton.addEventListener("click", () => {
  qrcodeContainer.innerHTML = "";
  let output = selectElement.options[selectElement.selectedIndex].value;
  wXh = output;
  website = userSite.value;
  var qrcode = new QRCode("qrcode", {
    text: website,
    width: wXh,
    height: wXh,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  downloadBtn.style.display = "block";
});

downloadBtn.addEventListener("click", () => {
  const qrImg = document.querySelector("#qrcode img");
  let imagePth = qrImg.src;
  let fileName = "QRCode";
  console.log(imagePth);
  saveAs(imagePth, fileName);
});
