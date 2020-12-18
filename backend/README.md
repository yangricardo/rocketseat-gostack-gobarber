# Primeiro Projeto Node

- [lINK DE AULAS](https://app.rocketseat.com.br/node/nivel-02/)

- `yarn init` cria o arquivo **package.json** que contém as definições de dependências do projeto e tarefas pré-definidas;
- `yarn add express` adiciona o express como dependência;
- `yarn add -D typescript` adiciona o typescript como dependência de desenvolvimento;
- `yarn tsc --init` cria arqui **tsconfig.json**;

  - Definição dos diretórios _src_ e _dist_ como diretório de origem e destino, respectivamente, da compilação de códigos typescript

- `yarn tsc` transpila o código typescript em javascript no diretório de destino;
- `yarn add -D ts-node-dev` servidor de desenvolvimento typescript

  - criação do comando em scripts do package.json `dev:server` para executar o servidor de desenvolvimento
  - `--transpileOnly src/server.ts` desabilita a transpilação em tempo de desenvolvimento
  - `node_modules` ignora mudanças na pasta node_modules

- [Padrões de projeto com ESLint, Prettier e EditorConfig](https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7)
- [EditorConfig](https://www.notion.so/EditorConfig-5f494ae4b47248c1b16681ff74d6766c)
- [ESLint](https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99)
- [Prettier](https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425)

- [Arquivo de configuração de debug](.vscode\launch.json)

  - `request attach` tenta se conectar a aplicação q está rodando
  - `protocol inspector`, funcionará junto com a adição da flag `--inspect` do comando `dev:server`

- `import { uuid } from 'uuidv4';`, criação de uuid
- `import { startOfHour, parseISO } from 'date-fns';` tratamento de datas

> SoC: Separation of Concerns (Separação de Preocupações)

> DTO: Data Transfer Object

> Omit<Classe, Atributo a Ser Omitido>

> Rotas devem somente receber uma requisição e solicitar um serviço

> SOLID

- [Repository, service e patterns](https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5)

- `yarn typeorm migration:create -n CreateAppointments` criação de arquivo de migração
- `yarn typeorm migration:run` executa migração
  - só pode modificar uma migration antes da ser trackeada pelo controle de versão
- `yarn typeorm migration:revert` executa migração

> Uma entidade ja possui o construtor criado automaticamente

- `yarn typeorm migration:create -n CreateUsers`

- dbeaver

- `yarn add multer` e `yarn add -D @types/multer` : manipulação de arquivos
- `yarn add express-async-errors` : tratativa no express para lidar com requisições async
