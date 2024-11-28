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
    data VARCHAR(20),
    exercicio VARCHAR(255),
    repts	  INT,
    kgs	      INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(email) ON DELETE CASCADE
);

INSERT INTO usuarios (nome, email, senha)
VALUES 
('João Silva', 'joao.silva@email.com', 'senha_segura'),
('Guilherme', 'gare@gmail.com', '123');

insert into treinos (usuario_id, nome, categoria, series, data, exercicio, repts, kgs) values 
("gare@gmail.com", "Treino do CBUM", "A", 30, "10/10/2024", "Exercicios X", 20, 30),
("gare@gmail.com", "Treino do CBUM", "A", 30, "10/10/2024", "Exercicios Y", 10, 30),
("gare@gmail.com", "Treino do CBUM", "A", 50, "10/10/2024", "Exercicios Z", 50, 30),
("gare@gmail.com", "Treino do CBUM", "A", 23, "10/10/2024", "Exercicios A", 320, 30),
("gare@gmail.com", "Treino do CBUM", "A", 70, "10/10/2024", "Exercicios B", 29, 23),
("gare@gmail.com", "Treino do CBUM", "A", 20, "10/10/2024", "Exercicios C", 90, 10),
("gare@gmail.com", "Treino do CBUM", "A", 26, "10/10/2024", "Exercicios D", 20, 30);

select * from treinos;
select * from usuarios;

