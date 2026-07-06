// ===============================
// ELEMENTOS DA PÁGINA
// ===============================
const btnTopo = document.getElementById("btnTopo");
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");

const form = document.getElementById("formContato");
const inputs = form.querySelectorAll("input, textarea");
const botao = document.getElementById("btnEnviar");
const mensagemSucesso = document.getElementById("mensagemSucesso");

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================
function mostrarBotaoTopo() {
    if (window.scrollY > 500) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }
}

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// ===============================
// MENU ATIVO
// ===============================
function atualizarMenu() {
    const posicao = window.scrollY + 150;

    sections.forEach((section) => {
        const topo = section.offsetTop;
        const altura = section.offsetHeight;
        const id = section.getAttribute("id");

        if (posicao >= topo && posicao < topo + altura) {
            navLinks.forEach((link) => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================
function revelarElementos() {
    revealItems.forEach((item) => {
        const distancia = item.getBoundingClientRect().top;

        if (distancia < window.innerHeight - 100) {
            item.classList.add("visible");
        }
    });
}

// ===============================
// VALIDAÇÃO DO FORMULÁRIO
// ===============================
function validarFormulario() {
    const preenchido = [...inputs].every((input) => input.checkValidity());

    botao.disabled = !preenchido;
}

inputs.forEach((input) => {
    input.addEventListener("input", validarFormulario);
});

// ===============================
// ENVIO DO FORMULÁRIO
// ===============================
form.addEventListener("submit", (e) => {
    e.preventDefault();

    botao.disabled = true;
    botao.textContent = "Enviando...";

    setTimeout(() => {
        mensagemSucesso.hidden = false;
        mensagemSucesso.classList.add("show");

        botao.textContent = "Enviar";

        form.reset();

        validarFormulario();

        setTimeout(() => {
            mensagemSucesso.hidden = true;
            mensagemSucesso.classList.remove("show");
        }, 4000);

    }, 1200);
});

// ===============================
// EVENTOS DA JANELA
// ===============================
window.addEventListener("scroll", () => {
    mostrarBotaoTopo();
    atualizarMenu();
    revelarElementos();
});

window.addEventListener("load", () => {
    mostrarBotaoTopo();
    atualizarMenu();
    revelarElementos();
    validarFormulario();
});