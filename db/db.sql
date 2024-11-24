create database testeTrainpro;
use testeTrainpro;


create table usuarios (

	id 			 int auto_increment primary key,
	nome		 varchar(50),
    email        VARCHAR(255) UNIQUE,
    senha		 varchar(255)

);

INSERT INTO usuarios (nome, email, senha)
VALUES ('João Silva', 'joao.silva@email.com', 'senha_segura');

INSERT INTO usuarios (nome, email, senha)
VALUES ('Guilherme', 'gare@gmail.com', '123');

create table treinos (

	id			int auto_increment primary key,
    usuario_id	int,
    nome		varchar(255),
    categoria	CHAR(1),
    series		int,
    data		varchar(20),
    FOREIGN KEY (usuario_id) references usuarios(id) ON DELETE CASCADE
    
);

INSERT INTO treinos (usuario_id, nome, categoria, series, data)
VALUES (1, 'Treino do cbum', 'A', 7, '10/12');

INSERT INTO treinos (usuario_id, nome, categoria, series, data)
VALUES (2, 'Treino de Quarta', 'C', 6, '22/10/2024');

create table exercicios (

	id 			int auto_increment primary key,
    treino_id	int,
    nome		varchar(255),
    reps		int,
    kgs			int,
    FOREIGN KEY (treino_id) REFERENCES treinos(id) ON DELETE CASCADE
    
);

INSERT INTO exercicios (treino_id, nome, reps, kgs)
VALUES 
  (1, 'Supino Reto', 15, 30),
  (1, 'Agachamento Livre', 12, 40),
  (1, 'Rosca Direta', 10, 20),
  (1, 'Pull Down', 12, 25),
  (1, 'Leg Press', 10, 100),
  (1, 'Desenvolvimento com Halteres', 8, 15),
  (1, 'Panturrilha Sentado', 20, 30);
  
INSERT INTO exercicios (treino_id, nome, reps, kgs)
VALUES 
  (2, 'Rosca 45', 12, 12),
  (2, 'Rosca Martelo', 12, 23),
  (2, 'Supino Inclinado', 10, 30),
  (2, 'Peck Deck', 22, 15),
  (2, 'Desenvolvimento Máquina', 13, 10),
  (2, 'Rosca Scott', 14, 15),
  (2, 'Panturrilha Sentado', 12, 30);


select * from usuarios;
select * from treinos;
select * from exercicios;


SELECT t.id AS treino_id, t.nome AS treino_nome, t.categoria, t.series, t.data,
       e.id AS exercicio_id, e.nome AS exercicio_nome, e.reps, e.kgs
FROM usuarios u
JOIN treinos t ON u.id = t.usuario_id
JOIN exercicios e ON t.id = e.treino_id
WHERE u.id = 2;  


