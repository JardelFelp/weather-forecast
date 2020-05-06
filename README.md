## O Projeto

Este projeto foi desenvolvido visando apresentar visualmente os dados retornados pelo [Dark Sky API](https://darksky.net/dev/docs).

As consultas à API são realizadas a cada 15 minutos.

## Como rodar o projeto?

1. Clone o repositório:
```git
> git clone https://github.com/JardelFelp/previsao-tempo.git
```

2. Acessar o repositório e instalar dependências
```git
> cd previsao-tempo
> yarn install
```

3. Copiar arquivo `.env.example`

```git
> cp .env.example .env
```

4. Configurar chave da API no arquivo `.env`

```
REACT_APP_APY_KEY=abc123def456
```

5. Executar projeto

```git
yarn start
```