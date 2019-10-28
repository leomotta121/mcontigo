# Como Rodar o projeto:

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
