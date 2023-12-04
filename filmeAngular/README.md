# Projeto-TMDB

## Como rodar

- Instalar dependencias: **npm install**
- Iniciar projeto: ng serve --open

## Descrição do projeto

### Componentes

- Home
- Lista de filmes
- Detalhes dos filmes

### Rotas

- /home
- /movies
- /movies/:id

### Serviços

- MovieService: Serviço que busca os detalher do filme com base no id.
- MoviesService: Serviço que busca os filmes com base no genero.
- GenreService: Serviço que busca os generos de filmes do TMDB.

### Pipes

- TitleCasePipe: Transforma o titulo do filme em uppercase.
- Date: Formata a data de lançamento do filme para um modelo longDate.

### Diretivas

- highlight: Diretiva personalizada para dar destaque aos generos quando se passa o mouse.
- NgFor: Diretivas estruturais do angular usadas nos componentes movie-list e home.
- NgIf: Diretivas estruturais do angular usada para garantir que os dados existem antes de mostrar nos detalhes do filme.

### Módulos e Dependências

- Uso do módulo HttpClientModule e da biblioteca HttpClient para realizar chamadas HTTP à API, pode ser observado nos serviços.
- Implementação da biblioteca ngx-pagination para paginação na lista de filmes.
- Utilização de estilos com CSS padrão e Bootstrap.
