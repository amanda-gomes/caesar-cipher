# Cifra de César

## Prefácio

Maria frequentemente esquece as suas senhas, pensando nisso decidiu anotar as suas senhas 
no bloco de notas, mas como seus familiares tem acesso ao seu computador, pensou em criptografar
suas senhas, assim pode guardá-las criptografadas e com segurança. 😎

## Introdução

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## Fluxograma

C:\Users\Amanda Gomes\Desktop\Docs Amanda\Laboratoria\1º Projeto\Cypher\caesar-cipher\Diagrama Cypher.jpeg

## Dicas

A seguir um vídeo do Daniel que te ajudará a entender a fórmula matemática
usada pela Cifra de César e algumas coisas mais que deve saber para resolver
o seu projeto. Escute com atenção e siga seus conselhos ! :)

[![Dicas Cifra de César](https://img.youtube.com/vi/utiLWBXmNQU/0.jpg)](https://www.youtube.com/watch?v=utiLWBXmNQU)

Também compartilhamos com vocês mais informações sobre o que foi explicado no
vídeo anterior:

* [Aprenda mais sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprenda mais sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprenda mais sobre `ASCII`](http://conceptodefinicion.de/ascii/)

## Checklist

### Parte Obrigatória

* [ ] `README.md` com explicações e desenho do projeto: No `README.md` descreva o seu processo de desenvolvimento utilizando os diagramas de bloco e como definiu os usuários quando estava desenvolvendo
seu projeto.
* [ ] Usar VanillaJS.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [ ] Mostrar o resultado da cifra corretamente.
* [ ] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  descifrado.
* [ ] Mostrar o resultado descifrado corretamente.
* [ ] Permitir escolher o `offset` (_deslocamento_) a ser usado na cifragem/descifragem.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Criar testes unitários.

### Parte Opcional: "Hacker edition"

* [ ] Permite usar um `offset` (_deslocamento_) negativo
* [ ] Cifra/descifra _outros_ caracteres (espaços, pontuação, `ã`, `á`, ...)

### Dicas!!!!

* Para começar, realize a organização de seu projeto. Veja quais recursos você
  tem disponíveis e o tempo que tem para completar o desafio.
* Se tiver algo que você não saiba, pergunte e tente entender o problema; pode
  começar com uma busca no google, depois consultando seu squad e por último a
  seus coaches. Se existe algo que eu não sei, outra pessoa pode me ajudar. O
  aprendizado é um processo colaborativo.
* Assim que começar a avançar em seu projeto, peça feedbacks. Suas companheiras
  podem ter excelentes ideias ou formas de resolver o projeto que podem te ajudar.
* Quando se deparar com um problema, busque alternativas e, para isso, consulte
  várias fontes.
* Se você perceber que já faz muito tempo que está presa em detalhes, pare e
  priorize o que é mais importante. Os projetos têm tempo limitado e você deve
  saber administrá-lo.
* Trabalhe em equipe, pergunte e tente completar o projeto sem se render.
* Prepare sua apresentação. Se não consigo passar minhas ideiais aos demais,
  não será possível apreciar todo o esforço e trabalho investido.

### Scripts / Arquivos

* `src/index.html`: este é o ponto de entrada da sua aplicação. Este arquivo
  deve conter o _markup_ (HTML) e incluir o CSS e JavaScript necessário.
* `src/cipher.js`: aqui você deve implementar o objeto cipher, o qual deve
  estar _exportado_ no objeto global (`window`). Este objeto (`cipher`) deve
  conter dois métodos:
    - `cipher.encode(offset, string)`: `offset` é o número de posições que
    queremos mover para a direita no alfabeto e `string` a mensagem (texto)
    que quemos cifrar.
    - `cipher.decode(offset, string)`: `offset` é o número de posições que
    queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
    que queremos decifrar.
* `src/tests.js`: este arquivo deve conter os testes que você irá implementar

## Avaliação

Aconselhamos você a revisar [a rúbrica](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkQy1waRpQ-16sn7VogiDTy-Fz5e7OSZSYUCiHC_bkLAKYewr4L8pWJ_BG210PeULe-TjLScNQQT_x/pubhtml#)
para ver a descrição detalhada de cada _habilidade_ e cada _nível_.

***

***