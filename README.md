- [Como rodar o projeto](#como-rodar-o-projeto)
  - [Rodar o projeto sem Docker](#sem-docker)
  - [Rodar o projeto com Docker](#rodando-o-projeto-em-ambiente-de-desenvolvimento-com-o-Docker)
- [Como importar arquivos](#como-importar-arquivos)
- [Como utilizar funções de src/utils/auth.js](#como-utilizar-funções-de-src/utils/auth.js)
  - [withAuthSync](#withAuthSync)
  - [withToken](#withToken)
- [Como utilizar o estado do Redux](#como-utilizar-o-estado-do-redux)
  - [Receber estado do redux em um componente](#receber-estado-do-redux-em-um-componente)
  - [Alterando estado do redux](#alterando-estado-do-redux)

# Como Rodar o projeto:

## Sem Docker

- 1. Tenha um arquivo `.env` na pasta raiz do projeto contendo alguns dados básicos para ambiente de desenvolvimento:

```
# Use NODE_ENV only for production.
NODE_ENV=development

# If PORT is not set, the project will run on 3000 by default.
PORT=3000

API_HOST=http://localhost:3333
```

- 2. Com o terminal aberto na pasta raiz do projeto, exevute `yarn` para instalar todas as dependências do projeto.

- 3. Para ambiente de desenvolvimento, execute o comando `yarn dev` e abra o projeto na port configurada no arquivo `.env` http://localhost:PORT.

**Observação:** Por padrão o projeto irá considerar a porta 3000 e ambiente de NODE_ENV como 'development'.

## Rodando o projeto em ambiente de desenvolvimento com o Docker:

Você também pode rodar o docker em ambiente de desenvolvimento.

Caso tenha alguma mudança no projeto ou instalação de pacotes, rode:

```
docker-compose -f docker-compose.dev.yml build
```

Esse comanda vai montar o container e reeinstalar todas as dependências.

Agora para desenvolver, rode:

```
docker-compose -f docker-compose.dev.yml up
```

Este comando vai subir o frontend por padrão na porta 3000 `http://localhost:3000`

# Como importar arquivos

O projeto esta configurado com um plugin para babel chamado `babel-plugin-root-import`, que possui a funcinalidade de chamar todos os imports a partir da pasta `src`, basta usar `~/`, exemplo:

```js
// Não faça isso.
import Component from '../../components/Component';

// Importe dessa maneira
import Component from '~/components/Component';
```

Logo o sinal `~/` é relativo a pasta src.

# Como utilizar funções de src/utils/auth.js

O arquivo auth.js possui todas as funções necessárias para trabalhar autenticação de usuário.

```
# src
## utils
### auth.js
```

## withAuthSync

Para deixar o acesso de uma página como privado, basta usar a função 'withAuthSync' e ela irá se encarregar de redirecionar usuário não autenticados, a função funciona como HOC (High Order Component), exemplo:

```js
import React from 'react';

import { withAuthSync } from '~/utils/auth';

function Home() {
  return <div>...</div>;
}

export default withAuthSync(Home);
```

## withToken

Para não deixar um usuário com token valido acessar página de login/cadastro, basta usar withToken() que a função irá redirecionar o usuário para pagina '/'.

```js
import React from 'react';

import { withToken } from '~/utils/auth';

function Login() {
  return <div>...</div>;
}

export default withAuthSync(Login);
```

# Como utilizar o estado do Redux

O Redux possui suporte para React hooks, para isso utilize apenas as hooks e use o redux apenas para estado da que afete o app como todo.

## Receber estado do redux em um componente

Caso seja preciso receber um estado do Redux, utilize a hook `useSelector`, ela vai retorna to estado na store do Redux.

```js
import { useSelector } from 'react-redux';

export default function Component() {
  /*
    Como alternative, podemos retornar diretamente o key desejada dentro do estado

    const userState = useSelector(state => state.user);
  */
  const reduxState = useSelector(state => state);

  return (
    ...
  );
}
```

## Alterando estado do redux

Caso seja preciso alterar um estado do Redux, utilize a hook `useDispatch`, ela vai receber o action type como primeiro parâmetro e os dados a serem alterados como segundo parâmetro.

```js
import { useDispatch } from 'react-redux';
import * as userActions from '~/store/ducks/user';

export default function Main() {
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: userActions.SET_USER,
      user: { first_name: 'Leo', last_name: 'Motta', isAuth: true },
    });
  }

  return (
    ...
  );
}
```
