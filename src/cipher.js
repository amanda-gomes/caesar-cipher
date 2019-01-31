document.getElementById("cifrar").addEventListener("click", code);
document.getElementById("decifrar").addEventListener("click", decode);
document.getElementById("limpar").addEventListener("click", limpar);

function cifrar (string,offset){
  let ntexto = "";
  let num;
  for (let i = 0; i < string.length; i++) {
    num = string.charCodeAt([i]);
    if (num >= 65 && num <= 90){
        num = ((num - 65 + offset) % 26) + 65;
        ntexto = ntexto.concat(String.fromCharCode(num));
    }
    else  if (num >= 97 && num <= 122){
        num = ((num - 97 + offset) % 26) + 97;
        ntexto = ntexto.concat(String.fromCharCode(num));
    }
    else {
      ntexto = ntexto.concat(String.fromCharCode(num));
    }
  }
  return ntexto;
}

function code(){
  const string = document.getElementById("texto").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cifrar(string,offset);
   
  document.getElementById("result").innerHTML = 
  ("<h3 id='titulo2'>Mensagem cifrada:</h3>"+
  "<textarea rows=5 cols=70>"+result+"</textarea><br>");
}

function decifrar (string,offset){
  let ntexto = "";
  let num;
  for (let i = 0; i < string.length; i++) {
    num = string.charCodeAt([i]);
    if (num >= 65 && num <= 90) {
        num = ((num - 90 - offset) % 26) + 90;
        ntexto = ntexto.concat(String.fromCharCode(num));
    }    
    else if (num >= 97 && num <= 122){
        num = ((num - 122 - offset) % 26) + 122;
        ntexto = ntexto.concat(String.fromCharCode(num));
    }
    else {
      ntexto = ntexto.concat(String.fromCharCode(num));
    }
  }
  return ntexto;
}

function decode() {
  const string = document.getElementById("texto").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = decifrar(string,offset);
  
  document.getElementById("result").innerHTML = 
  ("<h3 id='titulo2'>Mensagem decifrada:</h3>"+
  "<textarea rows=5 cols=70>"+result+"</textarea><br>");
}

function limpar (){
  location.reload();
}