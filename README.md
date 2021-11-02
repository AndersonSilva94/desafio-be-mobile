# Desafio Be Mobile (Front-End)

![GitHub repo size](https://img.shields.io/github/repo-size/AndersonSilva94/desafio-be-mobile?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/AndersonSilva94/desafio-be-mobile?style=for-the-badge)

### Projeto desenvolvido durante o processo seletivo da Be Mobile

![Captura de tela de 2021-11-01 23-48-30](https://user-images.githubusercontent.com/52717632/139784598-2bcd450e-5351-4435-9e0e-93578b9a33da.jpg)

> A aplicação consiste na criação de uma tabela de funcionários, os dados chegarão por uma api simulada escrita em json-server. Também é possível pesquisar por nome ou cargo através de um input

## Tecnologias utilizadas na construção do projeto
- React
- Context API
- React Hooks
- Styled Components
- Json-server
- React-switch

## Pré-requisitos
Ter instalado em sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com), 
* [Node.js](https://nodejs.org/en/),
* [Yarn](https://yarnpkg.com/).

## Para rodar o projeto localmente:
1. Clone o repositório
  ```bash
    $ git clone git@github.com:AndersonSilva94/desafio-be-mobile.git
  ```
  * Entre na pasta do repositório que você acabou de clonar:
  ```bash
    $ cd desafio-be-mobile
  ```

2. Instale as dependências:
  ```bash
    $ yarn install
  ```

3. Execute o json-server
  ```bash
    $ yarn json-server --watch db.json
  ```

4. Em um novo terminal, rode a aplicação (Será perguntado se poderá rodar em outra porta, basta digitar `y` ou `yes`)
  ```bash
    $ yarn start
  ```

OBS: Você pode verificar o projeto em ação [aqui](https://desafio-be-mobile.netlify.app/)

---
:keyboard: com :purple_heart: por [Anderson Silva (Andy)](https://www.linkedin.com/in/andssilva/) 😊
