// MENU HAMBÚRGUER
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('abrir');

    // troca ícone menu <-> X
    const icone = menuBtn.querySelector("ion-icon");
    if (navbar.classList.contains('abrir')) {
        icone.setAttribute("name", "close-outline");
    } else {
        icone.setAttribute("name", "menu-outline");
    }
});

// Seleciona o botão e a seção "sobre"
const btnTopo = document.getElementById('btnTopo');
const sectionSobre = document.getElementById('sobre');

// Função para verificar a visibilidade da seção
window.addEventListener('scroll', () => {
    // Pega a distância do topo da página até o topo da seção
    const distanciaTopo = sectionSobre.offsetTop;
    // Pega a posição atual do scroll
    const scrollAtual = window.scrollY;
    // Altura da janela do navegador
    const alturaTela = window.innerHeight;

    // Quando a rolagem chegar próximo da seção "sobre"
    if (scrollAtual + alturaTela / 2 >= distanciaTopo) {
        btnTopo.classList.add('mostrar'); // Mostra o botão
    } else {
        btnTopo.classList.remove('mostrar'); // Esconde o botão
    }
});

// Animação suave para voltar ao topo
btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Formulario
const form = document.getElementById('formContato');
const inputs = form.querySelectorAll('input, textarea');
const botao = document.getElementById('btnEnviar');
const mensagemSucesso = document.getElementById('mensagemSucesso');

// Habilita o botão apenas quando todos os campos estiverem válidos
form.addEventListener('input', () => {
    const todosPreenchidos = Array.from(inputs).every(input => input.checkValidity());
    botao.disabled = !todosPreenchidos;
});

// "Finge" que enviou
form.addEventListener('submit', (e) => {
    e.preventDefault(); // impede o envio real
    botao.disabled = true;
    botao.textContent = "Enviando...";

    // Simula um pequeno tempo de processamento
    setTimeout(() => {
        mensagemSucesso.style.display = "block";
        botao.textContent = "Enviar";
        form.reset();
        botao.disabled = true; // desativa novamente até preencher tudo
    }, 1500);
});