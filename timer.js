const cronometro = document.querySelector(".cronometro");
const btnIniciar = document.querySelector("#btnIniciar");
const botoes = document.querySelectorAll(".button_timer");
const btnFoco = document.querySelector("#btnFoco");
const btnPausa = document.querySelector("#btnPausa");
const btnDescanso = document.querySelector("#btnDescanso");

// Botões Foco / Pausa / Descanso
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoes.forEach((botao) => {
      botao.classList.remove("botao_ativo");
    });
    botao.classList.add("botao_ativo");
  });
});

btnFoco.addEventListener("click", () => {
  segundos = 2400;
  mostrarTempo();
});

btnPausa.addEventListener("click", () => {
  segundos = 300;
  mostrarTempo();
});

btnDescanso.addEventListener("click", () => {
  segundos = 900;
  mostrarTempo();
});

// Funcionamento Timer

let segundos = 2400;
let intervalId = null;
mostrarTempo();

btnIniciar.addEventListener("click", iniciarOuPausarContador);

function iniciarOuPausarContador() {
  if (intervalId === null) {
    intervalId = setInterval(contagemRegressiva, 1000);
    btnIniciar.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 10">
        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
      </svg>
      <span>Pausar</span>
    `;
  } else {
    pararContador();
  };
};

function contagemRegressiva() {
  if (segundos > 0) {
    segundos--;
    mostrarTempo();
  } else {
    pararContador();
    alert("Contagem regressiva concluída");
  };
};

function pararContador() {
  clearInterval(intervalId);
  intervalId = null;
  btnIniciar.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 10">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
      </svg>
      <span>Iniciar</span>
  `;
};

// Renderizar tempo na tela
function mostrarTempo() {
  const tempo = new Date(segundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {minute: "2-digit", second: "2-digit"});
  cronometro.textContent = tempoFormatado;
};
