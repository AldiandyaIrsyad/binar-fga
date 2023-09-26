if (!localStorage.getItem("saldo")) {
  localStorage.setItem("saldo", 0);
}

let saldo = parseFloat(localStorage.getItem("saldo"));

function tambahSaldo() {
  let jumlah = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));

  if (isNaN(jumlah) || jumlah <= 0) {
    alert("Masukkan jumlah yang valid!");
    return;
  }

  saldo += jumlah;
  updateSaldo();
}

function kurangiSaldo() {
  let jumlah = parseFloat(window.prompt("Masukkan jumlah saldo yang ingin dikurangkan:"));

  if (isNaN(jumlah) || jumlah <= 0) {
    alert("Masukkan jumlah yang valid!");
    return;
  }

  if (jumlah > saldo) {
    alert("Saldo Anda tidak cukup!");
    return;
  }

  saldo -= jumlah;
  updateSaldo();
}

function updateSaldo() {
  showSaldo.innerHTML = saldo;
  localStorage.setItem("saldo", this.saldo);

}


const btnAdd = document.getElementById("btn-add");
const btnSub = document.getElementById("btn-subtract");
const showSaldo = document.getElementById("show-saldo");


btnAdd.addEventListener("click", tambahSaldo);
btnSub.addEventListener("click", kurangiSaldo);
updateSaldo();
