
let saldo = 0;


function tambahSaldo() {
  let jumlah = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));

  let isValid = !isNaN(jumlah) && jumlah > 0;

  saldo += isValid ? jumlah : 0;
  isValid || alert("Masukkan jumlah yang valid!");

  isValid && updateSaldo();
}

function kurangiSaldo() {
  let jumlah = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangkan:"));

  let invalidJumlah = isNaN(jumlah) || jumlah <= 0;
  let insufficientSaldo = jumlah > saldo;

  let msgs = [
    "",
    "Saldo Anda tidak cukup!",
    "Masukkan jumlah yang valid!"
  ];
  let idx = insufficientSaldo + 2 * invalidJumlah;
  let msgToShow = msgs[idx];

  msgToShow && alert(msgToShow);

  let adjust = !invalidJumlah && !insufficientSaldo;
  saldo -= adjust * jumlah;

  updateSaldo();
}


function updateSaldo() {
  showSaldo.innerHTML = saldo;
}


const btnAdd = document.getElementById("btn-add");
const btnSub = document.getElementById("btn-subtract");
const showSaldo = document.getElementById("show-saldo");


btnAdd.addEventListener("click", tambahSaldo);
btnSub.addEventListener("click", kurangiSaldo);
updateSaldo();

