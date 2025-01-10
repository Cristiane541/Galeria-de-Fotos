// Dados das fotos
const photos = [
    {
        id: 1,
        url: 'https://image.freepik.com/free-photo/baby-elephant-standing-sand_1150-7259.jpg',
        title: 'Home-Office'
    },
    {
        id: 2,
        url: 'https://image.freepik.com/free-photo/african-lion-savana_1150-2859.jpg',
        title: 'Coffee-Break'
    },
    {
        id: 3,
        url: 'https://image.freepik.com/free-photo/black-panther-sitting-in-jungle_1150-2659.jpg',
        title: 'Realidade Virtual'
    },
    {
        id: 4,
        url: 'https://image.freepik.com/free-photo/horse-running-across-field_1150-2702.jpg',
        title: 'Bem-Estar'
    },
    {
        id: 5,
        url: 'https://image.freepik.com/free-photo/whale-jumping-at-sunset_1150-1207.jpg',
        title: 'Fotografia Profissional'
    },
    {
        id: 6,
        url: 'https://image.freepik.com/free-photo/happy-family-enjoying-sunset-outside_23-2148496074.jpg',
        title: 'Produtividade, Organização, Clareza e Foco'
    },
    {
        id: 7,
        url: 'https://image.freepik.com/free-photo/student-studying-online-computer_23-2148496249.jpg',
        title: 'Reunião Ágil'
    },
    {
        id: 8,
        url: 'https://image.freepik.com/free-photo/students-working-together-classroom_23-2148496234.jpg',
        title: 'Trabalho em Equipe'
    },
    {
        id: 9,
        url: 'https://image.freepik.com/free-photo/businessman-signing-deal-contract_23-2148496520.jpg',
        title: '´Vida Saudável'
    },
    {
        id: 10,
        url: 'https://image.freepik.com/free-photo/student-with-headphones-studying-table_23-2148496367.jpg',
        title: 'Informativo Anual'
    }
];


// Elementos do DOM
const gridFotos = document.getElementById('gridFotos');
const campoBusca = document.getElementById('campoBusca');
const botaoBusca = document.getElementById('botaoBusca');
const semResultados = document.getElementById('semResultados');

// Criar cartão de foto
function criarCartaoFoto(foto) {
    const cartao = document.createElement('div');
    cartao.className = 'cartao-foto';
    
    cartao.innerHTML = `
        <div class="container-foto">
            <img src="${foto.url}" alt="${foto.title}">
            <div class="titulo-foto">${foto.title}</div>
        </div>
    `;
    
    return cartao;
}

// Exibir fotos
function exibirFotos(fotosParaMostrar) {
    gridFotos.innerHTML = '';
    
    if (fotosParaMostrar.length === 0) {
        semResultados.classList.remove('escondido');
        gridFotos.classList.add('escondido');
    } else {
        semResultados.classList.add('escondido');
        gridFotos.classList.remove('escondido');
        fotosParaMostrar.forEach(foto => {
            gridFotos.appendChild(criarCartaoFoto(foto));
        });
    }
}

// Filtrar fotos
function filtrarFotos(termoBusca) {
    const buscaNormalizada = termoBusca.toLowerCase().trim();
    return photos.filter(foto => 
        foto.title.toLowerCase().includes(buscaNormalizada)
    );
}

// Eventos
campoBusca.addEventListener('input', (e) => {
    const fotosFiltradas = filtrarFotos(e.target.value);
    exibirFotos(fotosFiltradas);
});

botaoBusca.addEventListener('click', () => {
    const fotosFiltradas = filtrarFotos(campoBusca.value);
    exibirFotos(fotosFiltradas);
});

// Exibição inicial
exibirFotos(photos);