create database trainpro;
use trainpro;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255)
);

CREATE TABLE treinos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id varchar(255),
    nome VARCHAR(255),
    categoria CHAR(1),
    series INT,
    data VARCHAR(10),
    exercicio VARCHAR(255),
    repts	  INT,
    kgs	      INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(email) ON DELETE CASCADE
);


select * from treinos;
select * from usuarios;

