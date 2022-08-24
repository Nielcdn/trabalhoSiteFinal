let icon = document.querySelector('.icon');
let items = document.querySelectorAll('.items');

icon.addEventListener('click', e => {hide()});
function hide(){
    if (items.className =='items') {
        items.className +='_active'
    }
    else {items.className = 'items'}
}




let form = document.querySelector('form');
let count = 0;
let erros = document.querySelector('.erros');
let pagina = 1;

let nome = document.querySelector('#nome');
let lnome = document.querySelector('.nome');
let cpf = document.querySelector('#cpf');
let lcpf = document.querySelector('.cpf');
let senha = document.querySelector('#senha');
let lsenha = document.querySelector('.senha');
let confirme = document.querySelector('#confirm');
let lconfirme = document.querySelector('.confirm');

let rNome;
let rCpf;
let rSenha;
let rConfirme;


let parte1 = document.querySelector('.parte1');
parte1.className += '_active';
let parte2 = document.querySelector('.parte2');
let parte3 = document.querySelector('.parte3');

form.addEventListener('submit', (e) => verifica1(e));


function verifica1(e){
    if (document.querySelector("#erroNome") != null) {
        document.querySelector("#erroNome").remove();
        nome.style.borderColor = "black";
        
    }
    if (document.querySelector("#erroCpf") != null) {
        document.querySelector("#erroCpf").remove();
        cpf.style.borderColor = "black";
    }
    if (document.querySelector("#erroSenha") != null) {
        document.querySelector("#erroSenha").remove();
        senha.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroConfirme") != null) {
        document.querySelector("#erroConfirme").remove();
        confirme.style.borderColor = "black"; 
    }
    
    count=0;
    if (pagina==1) {
        vNome(e);
        vCpf(e);
        vSenha(e);
        vConfirme(e);
    }
    if (pagina==2) {
        vNome(e);
        vCpf(e);
        vSenha(e);
        vConfirme(e);
    }
    if (pagina==3) {
        vNome(e);
        vCpf(e);
        vSenha(e);
        vConfirme(e);
    }
    if ( count==0 )
    {
    parte1.className = 'parte1';
    parte2.className += '_active';
    rNome = nome.value;
    rCpf = cpf.value;
    rSenha = senha.value;
    rConfirme = confirme.value;
    pagina = 2;
    e.preventDefault();
    }
    else
    {
        e.preventDefault();
    }
}

function vNome() {
    
    if (nome.value == '') {
            let erroDiv = document.createElement('div');
            erroDiv.setAttribute('id','erroNome');
            let erroTexto = document.createTextNode('Preencha o campo nome.');
            erroDiv.appendChild(erroTexto);
            erros.appendChild(erroDiv);
            nome.style.borderColor = 'red';
            nome.focus();
            count++;
    }
}

function vCpf() {
    
    if (cpf.value == "" || cpf.value.length != 11) {
        
            let erroDiv = document.createElement('div');
            erroDiv.setAttribute('id','erroCpf');
            let erroTexto = document.createTextNode('O campo cpf deve ter 11 caracteres.');
            erroDiv.appendChild(erroTexto);
            erros.appendChild(erroDiv);
            cpf.style.borderColor = 'red';
            cpf.focus();
            count++;
        }
    }

function vSenha() {
    
    if (senha.value == "" || senha.value.length != 8) {
         
            let erroDiv = document.createElement('div');
            erroDiv.setAttribute('id','erroSenha');
            let erroTexto = document.createTextNode('A Senha deve ter 8 caracteres.');
            erroDiv.appendChild(erroTexto);
            erros.appendChild(erroDiv);
            senha.style.borderColor = 'red';
            senha.focus();
            count++;
        }
    }

function vConfirme() {
    if (confirme.value == "" || confirme.value != senha.value) {
            
            let erroDiv = document.createElement("div");
            erroDiv.setAttribute("id","erroConfirme");
            let erroTexto = document.createTextNode("As senhas não conferem.");
            erroDiv.appendChild(erroTexto);
            erros.appendChild(erroDiv);
            confirme.style.borderColor = "red";
            confirme.focus();
            count++;
        }
    }
