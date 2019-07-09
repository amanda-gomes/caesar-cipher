let teste = cifrar('abcdefghijklmnopqrstuvwxyz', 1);
if (teste === 'bcdefghijklmnopqrstuvwxyza') {
    console.log("Teste 1 funcionou!");
}
else {
    console.log("Teste 1 não funcionou! Resultado " + teste);
}

let teste2 = decifrar('bcdefghijklmnopqrstuvwxyza', 1);
if (teste2 === 'abcdefghijklmnopqrstuvwxyz') {
    console.log("Teste 2 funcionou!");
}
else {
    console.log("Teste 2 não funcionou! Resultado " + teste3);
}

let teste3 = cifrar('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1)
if (teste3 === 'BCDEFGHIJKLMNOPQRSTUVWXYZA') {
    console.log("Teste 3 funcionou!");
}
else {
    console.log("Teste 3 não funcionou! Resultado " + teste2);
}

let teste4 = decifrar('BCDEFGHIJKLMNOPQRSTUVWXYZA', 1)
if (teste4 === 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    console.log("Teste 4 funcionou!");
}
else {
    console.log("Teste 4 não funcionou! Resultado " + teste4);
}

let teste5 = cifrar('Olá, tudo bem? Testando...', 12)
if (teste5 === 'Axá, fgpa nqy? Fqefmzpa...') {
    console.log("Teste 5 funcionou!");
}
else {
    console.log("Teste 5 não funcionou! Resultado " + teste5);
}

let teste6 = decifrar('Axá, fgpa nqy? Fqefmzpa...', 12)
if (teste6 === 'Olá, tudo bem? Testando...') {
    console.log("Teste 6 funcionou!");
}
else {
    console.log("Teste 6 não funcionou! Resultado " + teste6);
}

let teste7 = cifrar('AZaz*% BYby', 19)
if (teste7 === 'TSts*% URur') {
    console.log("Teste 7 funcionou!");
}
else {
    console.log("Teste 7 não funcionou! Resultado " + teste7);
}

let teste8 = decifrar('TSts*% URur', 19)
if (teste8 === 'AZaz*% BYby') {
    console.log("Teste 8 funcionou!");
}
else {
    console.log("Teste 8 não funcionou! Resultado " + teste8);
}

let teste9 = cifrar('Bem vindo ao CYPHER!', 6)
if (teste9 === 'Hks botju gu IEVNKX!') {
    console.log("Teste 9 funcionou!");
}
else {
    console.log("Teste 9 não funcionou! Resultado " + teste9);
}

let teste10 = decifrar('Hks botju gu IEVNKX!', 6)
if (teste10 === 'Bem vindo ao CYPHER!') {
    console.log("Teste 10 funcionou!");
}
else {
    console.log("Teste 10 não funcionou! Resultado " + teste10);
}

let teste11 = cifrar("–./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ç", 9);
if (teste11 === '–./0123456789:;<=>?@JKLMNOPQRSTUVWXYZABCDEFGHI[\]^_`jklmnopqrstuvwxyzabcdefghi{|}~Ç') {
    console.log("Teste 11 funcionou!");
}
else {
    console.log("Teste 11 não funcionou! Resultado " + teste11);
}

let teste12 = decifrar('–./0123456789:;<=>?@JKLMNOPQRSTUVWXYZABCDEFGHI[\]^_`jklmnopqrstuvwxyzabcdefghi{|}~Ç', 9)
if (teste12 === '–./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ç') {
    console.log("Teste 12 funcionou!");
}
else {
    console.log("Teste 12 não funcionou! Resultado " + teste12);
}

let teste13 = cifrar('Amanda Cristina', 25)
if (teste13 === 'Zlzmcz Bqhrshmz') {
    console.log("Teste 13 funcionou!");
}
else {
    console.log("Teste 13 não funcionou! Resultado " + teste13);
}

let teste14 = decifrar('Zlzmcz Bqhrshmz', 25)
if (teste14 === 'Amanda Cristina') {
    console.log("Teste 14 funcionou!");
}
else {
    console.log("Teste 14 não funcionou! Resultado " + teste14);
}

let teste15 = cifrar('Teste 15 - FUNCIONOU?', 70)
if (teste15 === 'Lwklw 15 - XMFUAGFGM?') {
    console.log("Teste 15 funcionou!");
}
else {
    console.log("Teste 15 não funcionou! Resultado " + teste15);
}

let teste16 = decifrar('Lwklw 15 - XMFUAGFGM?', 70)
if (teste16 === 'Teste 15 - FUNCIONOU?') {
    console.log("Teste 16 funcionou!");
}
else {
    console.log("Teste 16 não funcionou! Resultado " + teste16);
}

let teste17 = cifrar('Só mais um né', 10)
if (teste17 === 'Có wksc ew xé') {
    console.log("Teste 17 funcionou!");
}
else {
    console.log("Teste 17 não funcionou! Resultado " + teste17);
}

let teste18 = decifrar('Có wksc ew xé', 10)
if (teste18 === 'Só mais um né') {
    console.log("Teste 18 funcionou!");
}
else {
    console.log("Teste 18 não funcionou! Resultado " + teste18);
}

function verificaIgualdade(calculado, esperado) {
    if (calculado === esperado) {
      console.log("Passou!");
      return true;
    } else {
      console.log("Deu Erro! " + calculado + " não é igual a " + esperado);
      return false;
    }
  }
  verificaIgualdade(cifrar('Só mais um né', 10), 'Có wksc ew xé');
