//-----Botão do Menu-----//
let icon = document.querySelector('.icon');
let items = document.querySelector('.items');
icon.addEventListener('click', hide);

function hide(){
    if (items.className =='items') {
        items.className +='_active'
    }
    else {items.className = 'items'}
}

//Inicialização//
let form = document.querySelector('form');
let alterar = document.querySelector('.alterar');
let count = 0;
let erros = document.querySelector('.erros');
let pagina = 1;
let campos = '';
let line = document.createElement('p')

//Campos dos Inputs//
let nome = document.querySelector('#nome');
let cpf = document.querySelector('#cpf');
let senha = document.querySelector('#senha');
let confirme = document.querySelector('#confirm');
let prof = document.querySelector('#prof');
let rs = document.querySelector('#rs');
let sc = document.querySelector('#sc');
let pr = document.querySelector('#pr');
let exp = document.querySelector('#exp');

//Respostas//
let rNome;
let rCpf;
let rSenha;
let rConfirme;
let rProf;
let rEstado;
let rExp;

//Mudança de Páginas//
let parte1 = document.querySelector('.parte1');
parte1.className += '_active';
let parte2 = document.querySelector('.parte2');
let parte3 = document.querySelector('.parte3');

//Alterar as Respostas//
alterar.addEventListener('click', change);
function change() {
    parte1.className += '_active';
    parte2.className = 'parte2';
    parte3.className = 'parte3';
    pagina = 1;
    campos = '';
    }

//Dados da Página 3//
function dados() {
    campos = ('<br>Nome: '+rNome+'<br><br>CPF: '+rCpf+'<br><br>Senha: '+rSenha+'<br><br>Profissão: '+rProf+'<br><br>Estado: '+rEstado+'<br><br>Anos de Experiência: '+rExp);
    document.querySelector('.dados').innerHTML = campos;
}

//Verificação das Respostas//
form.addEventListener('submit', (e) => verifica1(e));

//Limpar os Erros//
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
    if (document.querySelector("#erroProf") != null) {
        document.querySelector("#erroProf").remove();
        prof.style.borderColor = "black"; 
    }
    if (document.querySelector("#erroEstado") != null) {
        document.querySelector("#erroEstado").remove();
        rs.setAttribute('class', '');
        sc.setAttribute('class', '');
        pr.setAttribute('class', '');
    }
    if (document.querySelector("#erroExp") != null) {
        document.querySelector("#erroExp").remove();
        exp.style.borderColor = "black"; 
    }

    //Verificação por Página//
    count=0;
    if (pagina==1) {
        vNome(e);
        vCpf(e);
        vSenha(e);
        vConfirme(e);
    }
    if (pagina==2) {
        vProf(e);
        vEstado(e);
        vExp(e);
    }
    if (pagina==3) {
        vNome(e);
        vCpf(e);
        vSenha(e);
        vConfirme(e);
        vProf(e);
        vEstado(e);
        vExp(e);
    }

    //Mudar Páginas//
    if ( count==0 )
    {
        if (pagina==3)
        {
            alert('O formulário foi Enviado.');
        }

        if (pagina==2)
        {
        parte2.className = 'parte2';
        parte3.className += '_active';
        rProf = prof.value;
        if (rs.checked == true) {rEstado = 'RS'}
        if (sc.checked == true) {rEstado = 'SC'}
        if (pr.checked == true) {rEstado = 'PR'}
        rExp = exp.value;
        pagina = 3;
        dados();
        e.preventDefault();
        }

        if (pagina==1)
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
    }
    else {e.preventDefault();}
}

//-----Funções de Verificação-----//
function vNome() {
    if (nome.value == '') {
            let erroDiv = document.createElement('div');
            erroDiv.setAttribute('id','erroNome');
            let erroTexto = document.createTextNode('Preencha o campo Nome.');
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
            let erroTexto = document.createTextNode('O campo CPF deve ter 11 caracteres.');
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

function vProf() {
        if (prof.value == '') {
            let erroDiv = document.createElement('div');
            erroDiv.setAttribute('id','erroProf');
            let erroTexto = document.createTextNode('Preencha o campo Profissão.');
            erroDiv.appendChild(erroTexto);
            erros.appendChild(erroDiv);
            prof.style.borderColor = 'red';
            prof.focus();
            count++;
    }
}

function vEstado() {
        if (rs.checked == false && sc.checked == false && pr.checked == false) {
            let erroDiv = document.createElement('div');
            erroDiv.setAttribute('id','erroEstado');
            let erroTexto = document.createTextNode('Marque um Estado.');
            erroDiv.appendChild(erroTexto);
            erros.appendChild(erroDiv);
            rs.setAttribute('class', 'erro');
            sc.setAttribute('class', 'erro');
            pr.setAttribute('class', 'erro');
            count++;
    }
}

function vExp() {
    if (exp.value < 0 || exp.value > 50 || exp.value == '') {
            let erroDiv = document.createElement('div');
            erroDiv.setAttribute('id','erroExp');
            let erroTexto = document.createTextNode(' O campo Anos de Experiência deve estar entre 0 e 50.');
            erroDiv.appendChild(erroTexto);
            erros.appendChild(erroDiv);
            exp.style.borderColor = 'red';
            exp.focus();
            count++;
    }
}
