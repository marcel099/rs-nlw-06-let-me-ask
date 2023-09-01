## Instalação

Antes de tudo, vale lembrar que se você quiser apenas acessar o site para experimentá-lo, você pode fazer isso através deste <a href="https://let-me-ask-marcel099.firebaseapp.com//">link</a>.

Se deseja executar o projeto na sua máquina, você precisa, antes de tudo, instalar as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/). Caso queira alterar algum arquivo sugiro também que instale algum editor de texto, como o [Visual Studio Code](https://code.visualstudio.com/) e o [Sublime](https://www.sublimetext.com/3).

Após isso, clone o repositório na pasta de sua escolha utilizando o seguinte comando na linha de comando:

```bash
git clone https://github.com/marcel099/rs-nlw-06-let-me-ask
```

### Back-End Firebase

Primeiramente, você deve criar um projeto no [Console do Firebase](https://console.firebase.google.com/). Após isso, configure os produtos [Authentication](https://firebase.google.com/docs/auth) e [Realtime Database](https://firebase.google.com/docs/database) dentro do projeto Firebase criado.

### Front-End Web

Primeiramente, instale as dependências.

```bash
# Instale as dependências
$ yarn
```

Após realizar todas as configurações no Firebase, preencha as variáveis de ambiente presentes no arquivo <a href="./.env.example">`.env.example`</a> com as informações que você pode adquirir dentro do console do projeto Firebase criado. Sem isso, o sistema Let Me Ask não funcionará corretamente.

Por fim, execute a aplicação do site.

```bash
# Inicie a aplicação Next
$ yarn dev
```