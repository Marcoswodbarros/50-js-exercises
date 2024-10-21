let livro = {}

function adicionaInformacoesDoLivro () {
    livro.tituloDoLivro = prompt('Digite o título do livro:');
    livro.autorDoLivro = prompt('Digite o nome do autor do livro:');
    livro.anoDePublicacao = prompt('Digite o ano de publicação do livro:');    
}

adicionaInformacoesDoLivro();

alert(`Título: ${livro.tituloDoLivro}; \nAutor: ${livro.autorDoLivro}; \nAno de publicação: ${livro.anoDePublicacao}.`);