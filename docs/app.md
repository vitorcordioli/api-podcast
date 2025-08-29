
# Podcast Manager


### Descrição
Um app no estilo Netflix, aonde eu possa centralizar diferentes episódios de poscasts separados por categoria

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybulder, mentalidade, humor]

- Filtrar episódios por nome de podcast

## How

#### Feature:
- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: retorna lista de episodios

response:
```js
[
{
    podcastName: 'flow',
    episode: 'CBUM - Flow #319',
    videoId: 'pQSuQmUfS30',
    cover: 'https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=pQSuQmUfS30',
    category: ["saúde", "bodybulder", "esporte"]
},
{
    podcastName: 'flow',
    episode: 'RUBENS BARRICHELLO - Flow #339',
    videoId: '4KDGTdiOV4I',
    cover: 'https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=4KDGTdiOV4I',
    category: ["esporte", "corrida"]
},
]
```

GET: retorna lista de episodios baseado em um parametro enviado pelo cliente do nome do podcast
