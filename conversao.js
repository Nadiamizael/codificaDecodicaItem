
var incremento = document.querySelector(".chave");
var selecao = document.querySelector("#opCod");
var botaoEnvio = document.querySelector("#botao");
var escolha = document.querySelector (".escolhaCod")
var mensagemCod = document.querySelector("#codificar");
var mensagemDecod = document.querySelector("#decodificar");
var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzàèìòùáéíóúâêîôãõ?!.,/;:()@-";

var saida = document.querySelector("#saidaTexto");

//tratamento do botão de escolha o modo de codificação//
selecao.addEventListener("change", function(){
  if(opCod.value == "cifra"){
     incremento.style.display = "block"
  }else {
    incremento.style.display="none"
  }
});



//tratamento do botão de envio para trocar a mensagem conforme opção escolhida//
mensagemCod.addEventListener("click", function(){
  botaoEnvio.innerText = "Codificar Mensagem";
});

mensagemDecod.addEventListener("click", function(){
  botaoEnvio.innerText = "Decodificar Mensagem";
});


function cifraDeCesar(str,chave){
  var mensagemResultado = ""
  for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < alfabeto.length; j++)
        if (str[i] == alfabeto[j]) {
          mensagemResultado += alfabeto[j + parseInt(chave)];
          break;
        } else if (str[i] == " ") {
          mensagemResultado += " ";
          break;
        }
    }
    return mensagemResultado;
  }


function decCifraDeCesar(str,chave){
    var mensagemResultado = ""
    for (var i = 0; i < str.length; i++) {
        for (var j = alfabeto.length; j >= 0; j--)
          if (str[i] == alfabeto[j]) {
            mensagemResultado += alfabeto[j - parseInt(chave)];
            break;
          } else if (str[i] == " ") {
            mensagemResultado += " ";
            break;
          }
      }
      return mensagemResultado;
    }

     

var enviaMensagem = document.querySelector(".retornoTexto");
var exibeMensagem = document.querySelector("#mensagemFinal");


botaoEnvio.addEventListener("click", function(e){
   e.preventDefault(); 
   
   if (selecao.value == "base"){
    var entrada = document.querySelector("#entradaTexto").value;
    if (mensagemCod.checked === true){
      exibeMensagem.innerText = btoa(entrada);
    }else {
      exibeMensagem.innerText = atob(entrada);
    }
   }else { 
     if (mensagemCod.checked === true){
      var entrada = document.querySelector("#entradaTexto").value;
      var incremento = parseInt(document.querySelector("#incremento").value);
          exibeMensagem.innerText = cifraDeCesar(entrada,incremento);
     }else{
      var entrada = document.querySelector("#entradaTexto").value;
      var incremento = parseInt(document.querySelector("#incremento").value);
         
      exibeMensagem.innerText = decCifraDeCesar(entrada,incremento);

     }
   }



});





