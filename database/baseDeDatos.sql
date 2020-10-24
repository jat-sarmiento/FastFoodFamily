create database fastFoodFamily; 
-- crear base de datos
use fastFoodFamily; 
-- usar base de datos


 create table usuario (
     id INT(11) NOT NULL PRIMARY KEY,
     -- not null (no datos nulos) primary key (clave primaria)
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
     -- contraseña(password)
     fechaDeRegistro timestamp not null default current_timestamp 
    -- guardar fecha automaticamente para llenado automatico
 );

 alter table usuario modify id int(11) not null auto_increment, auto_increment=0; 
-- (modifique tabla)
 
 create table cliente(
     idCliente int(11) not null primary key,
     nombres varchar (100) not null,
     apellidos varchar (100) not null,
     cedula int (10) not null,
     direccion varchar (250) not null,
     telefono varchar (15) not null,
     celular varchar (15) not null,
     fechaDeRegistro timestamp not null default current_timestamp
 );

 alter table cliente modify idCliente int(11) not null auto_increment, auto_increment=0; 
-- alter table(modificar tabla)

create table restaurantes(
     idRestaurantes int(11) not null primary key,
     nombre varchar(50) not null,
     ruc int(13) not null,
     direccion varchar(250) not null,
     telefono varchar (15) not null,
     celular varchar (15) not null,
     cliente int(11) not null,
     fechaDeRegistro timestamp not null default current_timestamp,
     constraint fk_cliente foreign key (cliente) references cliente (idCliente) 
     -- foreign key (relacion entre tablas)
);

alter table restaurantes modify idRestaurantes int(11) not null auto_increment, auto_increment=0; 
-- alter table(modificar tabla)

 create table menu(
     idMenu int(11) not null primary key,
     nombre varchar(50) not null,
     detalle varchar(250) not null,
     precio float(10) not null,
     restaurante int(11) not null,
     fechaDeRegistro timestamp not null default current_timestamp,
     constraint fk_menuRestaurantes foreign key (restaurante) references restaurantes (idRestaurantes) 
     -- foreign key (relacion entre tablas)
 );

alter table menu modify idMenu int(11) not null auto_increment, auto_increment=0; 
-- alter table(modificar tabla)

create table dueñoRestaurante(
     idDueño int(11) not null primary key,
     nombres varchar (50) not null,
     apellidos varchar (50) not null,
     cedula int (10) not null,
     telefono varchar (15) not null,
     celular varchar (15) not null,
     fechaDeRegistro timestamp not null default current_timestamp
);

alter table dueñoRestaurante modify idDueño int(11) not null auto_increment, auto_increment=0; 
-- alter table(modificar tabla)

create table comentarios(
     idComentarios int(11) not null primary key,
     comentario varchar(250) not null,
     cliente int(11) not null,
     usuario int(11) not null,
     restaurantes int(11) not null,
     fechaDeRegistro timestamp not null default current_timestamp,
     constraint fk_usuario foreign key (usuario) references usuario (id)
);

alter table comentarios add constraint fk_comentariosCliente foreign key (cliente) references cliente (idCliente);
alter table comentarios add constraint fk_comentariosRestaurantes foreign key (restaurantes) references restaurantes (idRestaurantes);