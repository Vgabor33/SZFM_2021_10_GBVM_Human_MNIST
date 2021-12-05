create table Users (
    serverToken bigint not null,
    clientToken bigint not null,
    region int(255) not null,
    age tinyint not null,
    education tinyint not null,
    streak int(255) not null default 0,
    email varchar(255),
    primary key(serverToken, clientToken)
);
create table Tests (
    testId int(255) not null auto_increment,
    url varchar(255) not null,
    correct tinyint not null,
    primary key (testId)
);
create table TestResults (
    serverToken bigint not null,
    clientToken bigint not null,
    timeSubmitted timestamp(3) not null default now(3) on update now(3),
    testId int(255) not null,
    response tinyint not null,
    timeTaken time not null,
    primary key (serverToken, clientToken, timeSubmitted),
    constraint fk_TestsId foreign key (testId) references Tests(testId),
    constraint fk_UsersTokens foreign key (serverToken, clientToken) references Users(serverToken, clientToken)
);

insert into tests (url, correct) values ("img/0_37917.jpg", 0);
insert into tests (url, correct) values ("img/0_63.jpg", 0);
insert into tests (url, correct) values ("img/2_36978.jpg", 2);
insert into tests (url, correct) values ("img/3_23337.jpg", 3);
insert into tests (url, correct) values ("img/5_45567.jpg", 5);
insert into tests (url, correct) values ("img/7_8566.jpg", 7);
insert into tests (url, correct) values ("img/8_44221.jpg", 8);
insert into tests (url, correct) values ("img/9_59899.jpg", 9);