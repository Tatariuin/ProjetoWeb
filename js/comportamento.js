var modo = true

function chama(){
   if(modo == true){
        modoEscuro()
   }
   else{
        modoClaro()
   }
}

function modoEscuro(){
    menu = document.getElementById("cab");
    conteudo = document.getElementById("conteudo");
    p = document.getElementsByTagName("p")
    h1 = document.getElementsByTagName("h1")
    h2 = document.getElementsByTagName("h2")
    rod = document.getElementById("rod")
    rod.style.backgroundColor = "black"

    if(conteudo != null){
        conteudo.style.backgroundColor = "#4F4F4F"
    }
    menu.style.backgroundColor = "black"
    document.body.style.backgroundColor = "#696969"
    botao = document.getElementById("modoVisualiza")
    botao.innerHTML = "Modo claro"
    botao.style.backgroundColor = "white"
    modo = false
    formulario = document.getElementById("formulario")
    if(formulario != null){
        formulario.style.backgroundColor = "#C0C0C0"
    }
   
    if(p != null){
        for(var i = 0;i < p.length;i++){
            p[i].style.color = "white"
        }
    }
    if(h1 != null){
        for(var i = 0;i < h1.length;i++){
            h1[i].style.color = "white"
        }
    }
    if(h2 != null){
        for(var i = 0;i < h2.length;i++){
            h2[i].style.color = "white"
        }
        
    }
}
function modoClaro(){
    menu = document.getElementById("cab");
    conteudo = document.getElementById("conteudo");
    p = document.getElementsByTagName("p")
    h1 = document.getElementsByTagName("h1")
    h2 = document.getElementsByTagName("h2")
    h1Unico = document.getElementById("titulo")
    tituloForm = document.getElementById("tituloForm")
    rod = document.getElementById("rod")
    rod.style.backgroundColor = "DodgerBlue"
    if(conteudo != null){
        conteudo.style.backgroundColor = "PowderBlue"
    }
    menu.style.backgroundColor = "DodgerBlue"
    document.body.style.backgroundColor = "white"
    botao = document.getElementById("modoVisualiza")
    botao.innerHTML = "Modo escuro"
    botao.style.backgroundColor = "black"
    modo = true
    formulario = document.getElementById("formulario")
    if(formulario != null){
        formulario.style.backgroundColor = "PowderBlue"
    }
    
    if(p != null){
        for(var i = 0;i < p.length;i++){
            p[i].style.color = "black"
        }
    }

    if(h1 != null){
        for(var i = 0;i < h1.length;i++){
            h1[i].style.color = "#A020F0"
        }
    }
    if(h2 != null){
        for(var i = 0;i < h2.length;i++){
            h2[i].style.color = "#A020F0"
        }
    }
    h1Unico.style.color = "LightBlue"
    if(tituloForm != null){
        tituloForm.style.color = "#A020F0"
    }
}
function testaCamposLogin(){
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var erro  = document.getElementById("msgErro");
    erro.style.textAlign = "center"
    erro.style.marginLeft = "60px"
    if(nome.value == "" || senha.value == ""){

       erro.innerHTML = "Erro: Campo nome ou senha não preenchidos";
       erro.style.color = "red"
        return false;
        
    }
    return true
    

   

}
function testaCamposCadastro(){
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha")
    var repSenha = document.getElementById("repeteSenha")
    var msg = document.getElementById("msgErro")
    msg.style.color = "red"
    if(nome.value == ""){
       nome.focus()
       nome.style.backgroundColor = "rgb(228, 123, 123)"
        msg.innerHTML = "Campo de nome não preenchido"
        msg.style.textAlign = "center"
        return false
    }
    if(email.value == ""){
        email.focus()
        email.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Campo de E-mail não preenchido"
         msg.style.textAlign = "center"
         return false
    }
    if(senha.value == ""){
        senha.focus()
        senha.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Campo de senha não preenchido"
         msg.style.textAlign = "center"
         return false
    }
    if(repSenha.value == ""){
        repSenha.focus()
        repSenha.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Campo de repetir senha não preenchido"
         msg.style.textAlign = "center"
         return false
    }
    if(repSenha.value != senha.value){
        repSenha.focus()
        repSenha.style.backgroundColor = "rgb(228, 123, 123)"
         msg.innerHTML = "Senha não correspondente <br> Por favor repita a senha corretamente"
         msg.style.textAlign = "center"
         return false
    }
    
    
    return true
}

