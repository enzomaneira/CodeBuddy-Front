# CodeBuddy Repo

Este é um projeto baseado em React que utiliza Vite como bundler e servidor de desenvolvimento e JSON Server para simular uma API REST.

## Inicialização do Projeto

Siga os passos abaixo para inicializar o projeto em sua máquina local.

### Pré-requisitos
Certifique-se de ter o Node.js e npm instalados em sua máquina.

#### Passo 1: Clone o repositório
```bash
git clone https://github.com/seu-usuario/codebuddy-repo.git
cd codebuddy-repo
```

#### Passo 2: Instale as dependências
```bash
npm install
```

#### Passo 3: Instale o JSON Server
O JSON Server é uma dependência de desenvolvimento que simula uma API REST. Você pode instalá-lo globalmente ou localmente no projeto. Vamos instalar localmente neste caso.
```bash
npm install json-server
```

#### Passo 4: Inicie o servidor JSON

Execute o seguinte comando para iniciar o servidor JSON:
```bash
json-server --watch db.json --port 3000
```
Resultado esperado: 
```bash
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/users
  http://localhost:3000/grupos
  http://localhost:3000/posts
  http://localhost:3000/Desafios

  Home
  http://localhost:3000
```

Isso iniciará o servidor JSON na porta 3000 e usará o arquivo db.json para os dados.

#### Passo 5: Inicie o servidor de desenvolvimento

Abra outro terminal na pasta do projeto e execute o comando abaixo para iniciar o servidor de desenvolvimento com Vite:
```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento Vite.

Resultado esperado:

```bash
> codebuddy-repo@0.0.0 dev
> vite


  VITE v4.5.0  ready in 194 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
