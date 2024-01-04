USE nodedb;

CREATE TABLE people(
  id int not null auto_increment,
  name varchar(255),
  primary key(id)
);

INSERT INTO people (name) VALUES ('Luiz Fernandes de Oliveira');