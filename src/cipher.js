window.cipher = {
  // ... 
};
{
  function code(){
    var texto = document.getElementById("texto").value;
    console.log (texto);
    document.getElementById("result").innerHTML = ""
  }
  
  function decode(){
    var texto = document.getElementById("texto").value;
    console.log (texto);
    document.getElementById("result").innerHTML = ""  
  }
  
  var d = 3;
  
  function deslocamento(){
    d = prompt ("Digite o novo deslocamento");
    alert ("Deslocamento alterado com sucesso!");
    document.getElementById("deslocamento").innerHTML = "<p id=deslocamento>"+d+"</p>";
    console.log (d);
  }
  
  };