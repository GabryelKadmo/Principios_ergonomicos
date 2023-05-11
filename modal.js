function abrirModal1() {
  const modal = document.getElementById("janela-modal1");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "janela-modal1") {
      modal.classList.remove("abrir");
    }
  });
}

function abrirModal2() {
  const modal = document.getElementById("janela-modal2");
  modal.classList.add("abrir2");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "janela-modal2") {
      modal.classList.remove("abrir2");
    }
  });
}

// function abrirModal3() {
//   const modal = document.getElementById("janela-modal3");
//   modal.classList.add("abrir");

//   modal.addEventListener("click", (e) => {
//     if (e.target.id == "janela-modal3") {
//       modal.classList.remove("abrir");
//     }
//   });
// }

// function abrirModal4() {
//     const modal = document.getElementById("janela-modal4");
//     modal.classList.add("abrir");

//     modal.addEventListener("click", (e) => {
//       if (e.target.id == "janela-modal4") {
//         modal.classList.remove("abrir");
//       }
//     });
//   }

function defPreco(a) {
  var preco = document.querySelector("#preco");

  if (a == 1) {
    preco.innerHTML = "R$ 100,00";
  } else if (a == 2) {
    preco.innerHTML = "R$ 105,00";
  } else if (a == 3) {
    preco.innerHTML = "R$ 110,00";
  } else if (a == 4) {
    preco.innerHTML = "R$ 120,00";
  }
}
