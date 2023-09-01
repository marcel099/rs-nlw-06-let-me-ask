<h1 align="center">
  <img alt="A imagem contém um notebook com uma tela do site" title="Banner do projeto Let Me Ask" src="./assets/screenshots/banner.png" />
</h1>

<h4 align="center"> 
  Next Level Week #06 - Let Me Ask
</h4>

<div align="center">
  <img src="https://img.shields.io/github/repo-size/marcel099/rs-nlw-06-let-me-ask.svg">
  <img src="https://img.shields.io/github/last-commit/marcel099/rs-nlw-06-let-me-ask.svg">
  <img src="https://img.shields.io/github/issues/marcel099/rs-nlw-06-let-me-ask.svg">
  <img src="https://img.shields.io/github/issues-closed/marcel099/rs-nlw-06-let-me-ask.svg">
  <img src="https://img.shields.io/github/license/marcel099/rs-nlw-06-let-me-ask.svg">
  <img src="https://img.shields.io/github/stars/marcel099/rs-nlw-06-let-me-ask.svg?style=social">
</div>

## Índice

* [Índice](#índice)
* [Sobre](#sobre)
  * [Conceito](#conceito)
  * [Tecnologias](#principais-tecnologias-utilizadas)
* [Instalação local](#instalação-local)
* [Créditos](#créditos)
* [Licença](#licença)

## Sobre

O projeto foi desenvolvido na trilha React da sexta edição do evento Next Level Week, edição também chamada de NLW Together, proporcionado pela empresa [Rocketseat](https://rocketseat.com.br/). Baseou-se em um [layout](https://www.figma.com/community/file/1009824839797878169/Letmeask) elaborado no Figma.

O sistema, desenvolvido em TypeScript, é composto de um [site](https://let-me-ask-marcel099.firebaseapp.com/) em React e um Back-End como Serviço no [Firebase](https://firebase.google.com/).

### Conceito

O Let Me Ask é uma plataforma em que streamers podem criar salas para que o público faça perguntas e vote nas que mais achar pertinente de serem respondidas.

Para poder fazer uso da plataforma, o usuário deverá fazer login utilizando uma conta do Google. Isso é necessário tanto para criar salas quanto para fazer perguntas.

<div align="center">
  <img alt="Página inicial da plataforma Let Me ask" title="Página inicial da plataforma Let Me ask" src="./assets/screenshots/home_screen.png" />
</div>

Na visualização de administrador de salas, o usuário agora poderá criar uma sala e compartilhar o código dela com os seguidores do streamer. Na página dedicada à sala, o administrador poderá destacar uma pergunta para responder, marcá-la como respondida e apagá-la. Além disso, poderá excluir a sala se assim desejar.

<div align="center">
  <img alt="Página de criação de sala" title="Página de criação de sala" src="./assets/screenshots/new_room_screen.png" />
  <img alt="Página de administração de sala" title="Página de administração de sala" src="./assets/screenshots/admin_view_room_screen.png" />
</div>

Na visualização de participante, o usuário poderá postar perguntas e votar naquelas que desejar.

<div align="center">
  <img alt="Página de participação em sala" title="Página de participação em sala" src="./assets/screenshots/follower_view_room_screen.png" />
</div>

Em ambos os modos de visualização de sala, a lista de perguntas é atualizada em tempo real devido ao uso do [Realtime Database](https://firebase.google.com/docs/database) do [Firebase](https://firebase.google.com/).

### Principais tecnologias utilizadas

O sistema foi desenvolvido em TypeScript. É composto de 2 partes:

- Back-End
  - [Firebase](https://firebase.google.com/) - [Authentication](https://firebase.google.com/docs/auth) e [Realtime Database](https://firebase.google.com/docs/database)
- Front-End Web
  - [Next](https://nextjs.org/)
  - [React](https://react.dev/)
  - [SCSS](https://sass-lang.com/)

O maior diferencial deste projeto é o uso do [Firebase](https://firebase.google.com/), um Back-End como Serviço.

## Instalação local

Passos para atingir isso podem ser conferidos <a href="./INSTALLATION.md">neste arquivo</a>.

## Créditos

Credito a elaboração do modelo do banner deste documento e do banner social ao autor desconhecido desta [postagem](https://mckups.com/pixel-4-and-pixelbook-go-mockup/) no site [Mckups](https://mckups.com). Foi adaptado por mim de acordo com as características deste projeto.

## Licença

Este projeto está sob a licença MIT. Para maiores detalhes acesse o <a href="./LICENSE.md">arquivo de licença</a>.
