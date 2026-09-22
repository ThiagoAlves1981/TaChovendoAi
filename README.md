# 🌤️ Hub de Clima e Previsão do Tempo Multilocalidade

> **Aplicação Web Full-Stack** para consulta de dados meteorológicos em tempo real de qualquer cidade do mundo. O projeto foi construído do zero adotando uma **arquitetura em duas camadas (Client-Server)**, utilizando um servidor **Node.js** como **API Proxy** para consumo seguro dos serviços externos de geolocalização e clima.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend (Camada do Cliente)**
* **HTML5 & CSS3:** Estruturação semântica, estilização refinada e controle de layout.
* **Bootstrap 5:** Sistema de **Grid** responsivo para adequação fluida a dispositivos móveis e desktops.
* **JavaScript (ES6+):** Programação assíncrona (**`async/await`**, **`fetch`**), manipuladores de eventos do DOM e tratamento de datas (*Unix Timestamps*).

### **Backend & API Proxy (Camada do Servidor)**
* **Node.js & Express:** Framework leve para criação do servidor web e gerenciamento das rotas HTTP RESTful.
* **CORS (Cross-Origin Resource Sharing):** Configuração de segurança para liberação de requisições do frontend.
* **Dotenv:** Gerenciamento seguro de variáveis de ambiente.

### **DevOps & Hospedagem**
* **GitHub Pages:** Hospedagem estática contínua do **Frontend**.
* **Render.com:** Hospedagem em nuvem do servidor **Backend** com suporte a HTTPS/SSL e injeção de *secrets*.

---

## 🎯 Habilidades e Conceitos Desenvolvidos

### 🛡️ **1. Arquitetura Client-Server & Segurança da Informação (API Proxy)**
* **Padrão API Proxy:** Construção de um intermediário em **Node.js** que faz o consumo das APIs externas. Essa abordagem garante que **nenhuma chave privada (`API Key`) fique exposta no código-fonte do cliente** ou em repositórios públicos.
* **Criação de Endpoints REST:** Desenvolvimento das rotas customizadas **`/api/geo`** e **`/api/weather`** utilizando **Express**, manipulando **`req.query`** para receber parâmetros do cliente e retornar respostas higienizadas em **JSON**.

### ⚡ **2. JavaScript Assíncrono Avançado & Fluxo de Dados**
* **Encadeamento de Requisições:** Estruturação do fluxo onde a resposta da API de geolocalização (latitude e longitude) alimenta dinamicamente a requisição de dados de clima.
* **Tratamento de Promises:** Uso rigoroso de **`async/await`** para controlar o tempo de execução e prevenir erros comuns de concorrência e escopo (*race conditions* e valores `undefined`).
* **Tratamento de Exceções:** Blocos **`try/catch`** com respostas de erro HTTP apropriadas (ex: erro **500**) em caso de falhas de comunicação ou parâmetros inválidos.

### 📅 **3. Manipulação de Dados & Formatação Regional**
* **Conversão de Timestamps Unix:** Transformação de valores numéricos de tempo (segundos) fornecidos pela API OpenWeather em objetos **`Date`** do JavaScript (multiplicando por **`1000`** para conversão em milissegundos).
* **Internacionalização (i18n):** Uso do método **`.toLocaleTimeString('pt-BR')`** para extrair e formatar com precisão as horas do **nascer** e **pôr do sol** no padrão brasileiro de **24 horas**.

### 🎨 **4. UI Responsiva & Resolução de Layouts CSS**
* **Controle de Transbordo (Overflow):** Solução do clássico problema de colapso visual em quebras de linha trocando alturas fixas (**`height`**) por alturas dinâmicas (**`min-height`**).
* **Inspeção e Debugging:** Utilização avançada do **Chrome DevTools** (abas *Network* e *Console*) para análise de tráfego HTTP, verificação de *MIME Types* e simulação de múltiplos tamanhos de tela.

---

## 🔄 Fluxo de Funcionamento da Aplicação

```text
[ NAVEGADOR DO USUÁRIO ]
        │
        │ 1. Requisição com os dados digitados (Cidade/Estado)
        ▼
[ FRONTEND (GitHub Pages) ]
        │
        │ 2. Chamada assíncrona ao backend: /api/geo
        ▼
[ BACKEND PROXY (Render.com) ] ── (Injeta as chaves secretas no cabeçalho)
        │
        │ 3. Consulta a API Externa (OpenWeather / Geocode)
        ▼
[ APIs EXTERNAS ]
```

**🚀 Como Executar o Projeto Localmente**
Pré-requisitos
Possuir o Node.js instalado em seu computador.

**1. Clonar o Repositório**

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd seu-repositorio

**2. Configurar e Rodar o Backend**

cd backend
npm install

**Crie um arquivo .env na raiz da pasta backend/ contendo:
**

Snippet de código
WEATHER_API_KEY=sua_chave_openweather_aqui
GEO_API_KEY=sua_chave_geocode_aqui
PORT=3000

**Inicie o servidor localmente:
**

node server.js

**3. Rodar o Frontend
**
Abra o arquivo frontend/index.html no seu navegador (de preferência utilizando a extensão Live Server do VS Code).

**🔗 Links Úteis**
🌐 Aplicação Online (Frontend): https://thiagoalves1981.github.io/TaChovendoAi/

⚙️ API Proxy Ativa (Backend): https://clima-api-0w5e.onrender.com
