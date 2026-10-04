
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuButton) {
  menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const steps = {
  1: {
    number: '01',
    title: 'Conhecemos sua rotina',
    text: 'Objetivos, hábitos, alimentação atual, preferências e contexto.',
    summary: 'O ponto de partida é entender como sua vida realmente funciona, para construir algo possível de manter.'
  },
  2: {
    number: '02',
    title: 'Avaliamos seu momento',
    text: 'Avaliação nutricional, exames quando disponíveis e bioimpedância quando aplicável.',
    summary: 'Histórico, dados e sinais do seu momento atual ajudam a orientar a estratégia com mais clareza.'
  },
  3: {
    number: '03',
    title: 'Construímos sua estratégia',
    text: 'Plano alimentar individualizado e orientações práticas para o seu dia a dia.',
    summary: 'Nada de receita genérica: o plano é montado a partir da sua realidade, dos seus objetivos e das suas preferências.'
  },
  4: {
    number: '04',
    title: 'Você coloca em prática',
    text: 'Acompanhamento, ajustes e suporte conforme sua evolução.',
    summary: 'A estratégia continua viva e pode ser ajustada conforme sua resposta, rotina e evolução.'
  }
};

const journeyButtons = document.querySelectorAll('.journey-tab');
const journeyNumber = document.getElementById('journeyNumber');
const journeyTitle = document.getElementById('journeyTitle');
const journeyText = document.getElementById('journeyText');
const journeySummary = document.getElementById('journeySummary');

journeyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const step = steps[button.dataset.step];
    journeyButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    journeyNumber.textContent = step.number;
    journeyTitle.textContent = step.title;
    journeyText.textContent = step.text;
    journeySummary.textContent = step.summary;
  });
});

const protocols = {
  essencial: {
    label: 'ESSENCIAL • 60 DIAS',
    title: 'Acompanhamento mais enxuto e estruturado.',
    text: 'Ideal para quem deseja começar com uma estratégia personalizada e um acompanhamento leve.',
    items: [
      'Consulta inicial individualizada',
      'Plano alimentar personalizado',
      'Check-ins e ajustes',
      'Bioimpedância quando aplicável'
    ]
  },
  evolucao: {
    label: 'EVOLUÇÃO • 90 DIAS',
    title: 'Acompanhamento completo, com evolução contínua.',
    text: 'Pensado para quem deseja mais tempo de acompanhamento, com suporte mais frequente ao longo do processo.',
    items: [
      'Reavaliações ao longo dos 90 dias',
      'Ajustes do plano alimentar conforme evolução',
      'Check-ins mais frequentes',
      'Estratégias personalizadas durante o processo'
    ]
  },
  premium: {
    label: 'PREMIUM • 90 DIAS',
    title: 'Acompanhamento mais próximo, completo e personalizado.',
    text: 'Uma experiência mais intensa de suporte e acompanhamento, para quem deseja um processo ainda mais próximo.',
    items: [
      'Contato mais próximo ao longo do protocolo',
      'Reavaliações programadas',
      'Ajustes contínuos e personalizados',
      'Acompanhamento focado em evolução e manutenção'
    ]
  }
};

const protocolButtons = document.querySelectorAll('.protocol-btn');
const protocolLabel = document.getElementById('protocolLabel');
const protocolTitle = document.getElementById('protocolTitle');
const protocolText = document.getElementById('protocolText');
const protocolList = document.getElementById('protocolList');

protocolButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = protocols[button.dataset.protocol];
    protocolButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    protocolLabel.textContent = item.label;
    protocolTitle.textContent = item.title;
    protocolText.textContent = item.text;
    protocolList.innerHTML = item.items.map(text => `<li>${text}</li>`).join('');
  });
});

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const favicon = document.getElementById("favicon");

function atualizarFavicon() {
  const temaEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;

  favicon.href = temaEscuro
    ? "assets/favicon2.png"
    : "assets/favicon.png";
}

atualizarFavicon();

window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", atualizarFavicon);
  