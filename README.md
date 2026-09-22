.

🌤️ Hub de Clima e Previsão do Tempo Multilocalidade
Aplicação web responsiva de consulta de dados meteorológicos em tempo real. O projeto adota uma arquitetura em duas camadas (Client-Server), utilizando um servidor Node.js como Proxy API para consumo seguro de serviços de geolocalização e clima, mantendo credenciais e chaves de API 100% protegidas.

🛠️ Tecnologias Utilizadas
Frontend
HTML5 & CSS3: Estruturação semântica, estilização e layouts responsivos.

Bootstrap 5: Componentização flexível, manipulação de grid e responsividade em múltiplos dispositivos.

JavaScript ES6+: Programação assíncrona (async/await, Promises, fetch), manipulação avançada do DOM e conversões de Unix Timestamps.

Backend & Proxy
Node.js & Express: Construção de servidor web e criação de endpoints RESTful.

CORS & Dotenv: Gerenciamento de compartilhamento de recursos de origens cruzadas e injeção de variáveis de ambiente.

Hospedagem & DevOps
GitHub Pages: Hospedagem estática da camada do cliente.

Render.com: Deploy da API Proxy em nuvem com SSL nativo e variáveis de ambiente configuradas.

🎯 Habilidades e Conceitos Desenvolvidos
1. Arquitetura Client-Server e API Proxy
Ocultação de Secrets (Security-First): Criação de um servidor Proxy em Node.js para isolar chaves privadas de API (api_key), evitando a exposição de credenciais no frontend ou no repositório público do GitHub.

Construção de Endpoints Customizados: Criação de rotas /api/geo e /api/weather utilizando o framework Express para receber parâmetros de consulta (query params), tratar os dados e devolver respostas em JSON padronizado.

2. JavaScript Assíncrono Avançado
Cadeia de Chamadas Assíncronas: Encadeamento de requisições onde as coordenadas obtidas pela API de geolocalização servem de entrada primária para a busca meteorológica.

Resolução de Escopo e Event Loops: Domínio do comportamento do JavaScript ao lidar com Promessas (Promises), tratando o fluxo de execução para evitar estados de runtime como undefined ou dados não inicializados.

3. Tratamento e Transformação de Dados
Conversão de Dados Meteorológicos: Manipulação de Unix Timestamps recebidos das APIs com a classe Date do JavaScript e o método .toLocaleTimeString(), exibindo o horário exato do nascer e pôr do sol formatado para o padrão brasileiro (pt-BR).

Tratamento de Exceções: Implementação de blocos try/catch para captura de erros de rede, respostas 404 ou entradas inválidas de cidades pelo usuário.

4. Layout Responsivo e Debugging de UI
Resolução de Formatações e CSS: Resolução de problemas com quebra de layout em telas menores utilizando min-height e o sistema de grid do Bootstrap, garantindo contenção de elementos dinâmicos no fluxo do DOM.

Inspeção com DevTools: Uso frequente do painel de desenvolvedor para monitorar requisições na aba Network, auditar MIME Types e testar responsividade sob diferentes resoluções.

🚀 Como Rodar o Projeto Localmente
Pré-requisitos
Node.js instalado na sua máquina.

1. Clonar o repositório
Bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
2. Configurar o Backend
Bash
cd backend
npm install
Crie um arquivo .env dentro da pasta backend/ com as suas chaves de API:

Snippet de código
WEATHER_API_KEY=sua_chave_openweather
GEO_API_KEY=sua_chave_geocode
PORT=3000
Inicie o servidor local:

Bash
node server.js
3. Executar o Frontend
Abra o arquivo frontend/index.html utilizando a extensão Live Server no VS Code.

🔗 Links
Aplicação (GitHub Pages): [Sua URL do GitHub Pages]

API Proxy (Render): [https://clima-api-0w5e.onrender.com](https://clima-api-0w5e.onrender.com)
