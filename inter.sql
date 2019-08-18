use mips;
create table register
(
id int not null,
value int default '0'
);
describe register;
alter table register
add primary key(id); 
select * from register;
insert into register
(id) values
('0'),
('1'),
('2'),
('3'),
('4'),
('5'),
('6'),
('7'),
('8'),
('9'),
('10'),
('11'),
('12'),
('13'),
('14'),
('15'),
('16');
create table memory(
endereco int not null,
dado varchar(8) default '00000000',
valor int,
primary key (endereco)
);
desc memory;
create table base(
instrucao varchar(4) not null,
rs int,
rt int,
rd int,
label int,
id int not null auto_increment,
img varchar(30) not null,
primary key(id)
);
desc base;
create table instrucoes(
instrucao varchar(4) not null,
rs int,
rt int,
rd int,
label int,
id int not null auto_increment,
img varchar(30) not null,
primary key(id)
);
desc instruction;
select * from base;
insert into base
(instrucao, id, img)
values
('ADD', '1','add.png');
drop table base;
create table op
(
valor int not null,
conteudo varchar(5) not null
);
insert into op values
('0','$zero'), ('2','$v0'), ('3','$v1'), ('4','$a0'), ('5','$a1'), ('6','$a2'), ('7','$a3'), ('8','$t0'), ('9','$t1'), ('10','$t2'),
('11','$t3'), ('12','$t4'), ('13','$t5'), ('14','$t6'), ('15','$t7'), ('16','$s0'), ('17','$s1'), ('18','$s2'), ('19','$s3'), ('20','$s4'),
('21','$s5'), ('22','$s6'), ('23','$s7'), ('29','$sp'), ('31','$ra');
select * from op;