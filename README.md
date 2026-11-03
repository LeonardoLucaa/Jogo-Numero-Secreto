# Jogo do número secreto

Jogo no navegador em que o jogador tenta descobrir um número sorteado entre 1 e 10. A cada chute, o jogo diz se o número secreto é maior ou menor e conta as tentativas.

## Como jogar

1. Digite um número de 1 a 10 e clique em **Chutar** (ou aperte Enter).
2. Siga as dicas de "maior" ou "menor".
3. Ao acertar, clique em **Novo jogo** para sortear outro número.

## O que o projeto pratica

- Manipulação do DOM com JavaScript puro (sem bibliotecas).
- Validação de entrada: campo vazio, número fora do intervalo e número decimal.
- Estado do jogo (número secreto e tentativas) e reinício completo.
- Layout responsivo com CSS (Flexbox e `clamp()`), que funciona em celular e desktop.
- Acessibilidade básica: rótulo no campo, mensagens anunciadas por leitores de tela (`aria-live`) e foco visível.

## Como rodar localmente

Abra o arquivo `index.html` no navegador. Não precisa instalar nada.

## Tecnologias

HTML5, CSS3 e JavaScript.

## Créditos

O layout parte do projeto proposto em um curso de front-end. A lógica, a validação e a versão responsiva foram reescritas por mim. As imagens da pasta `img/` vêm do material do curso.
