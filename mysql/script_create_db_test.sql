use casadocodigo_nodejs;

select * from livros;

create database casadocodigo_nodejs_test;

use casadocodigo_nodejs_test;

CREATE TABLE livros (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(255) DEFAULT NULL,
    descricao text,
    preco decimal(10,2) DEFAULT NULL
);

drop database casadocodigo_nodejs_test;