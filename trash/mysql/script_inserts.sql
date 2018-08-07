use casadocodigo_nodejs;

select * from livros;

insert into livros(titulo, descricao, preco) values('Começando com JS', 'Livro sobre java script', '20.00');
insert into livros(titulo, descricao, preco) values('Começando com PHP', 'Livro sobre PHP', '15.00');

insert into livros(titulo, descricao, preco) values('Começando com Java', 'Livro sobre java', '30.00');
insert into livros(titulo, descricao, preco) values('Começando com C#', 'Livro sobre C#', '10.00');


delete from livros where id = 30;
delete from livros where id = 31;


