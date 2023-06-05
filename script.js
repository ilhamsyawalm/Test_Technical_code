const segitiga = document.querySelector(".segitiga");
const ganjil = document.querySelector(".ganjil");
const prima = document.querySelector(".prima");
const hasil = document.querySelector(".tiga .hasil");

const nilai = document.querySelector("[name=angka]");

segitiga.addEventListener("click", function () {
  let x = "";
  for (let i = 0; i < nilai.value.length; i++) {
    x += `${nilai.value[i]}`;
    for (let j = 0; j <= i; j++) {
      x += `0`;
    }
    x += `<div></div>`;
  }
  hasil.innerHTML = x;
  console.log(x);
});

ganjil.addEventListener("click", function () {
  let x = "";
  for (let i = 0; i < nilai.value.length; i++) {
    if (`${nilai.value[i]}` % 2 != 0) {
      x += `${nilai.value[i]}`;
    }
  }
  hasil.innerHTML = x;
  console.log(x);
});

prima.addEventListener("click", function () {
  let x = "";
  for (let i = 0; i < nilai.value.length; i++) {
    if (
      (`${nilai.value[i]}` >= 1 && `${nilai.value[i]}` % 2 != 0) ||
      `${nilai.value[i]}` == 2
    ) {
      x += `${nilai.value[i]}`;
    }
  }
  hasil.innerHTML = x;
  console.log(x);
});
