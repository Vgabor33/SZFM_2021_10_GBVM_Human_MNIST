create database human_mnist;
create table users (
    serverToken bigint not null,
    clientToken bigint not null,
    region int(255) not null,
    age tinyint not null,
    education tinyint not null,
    streak int(255) not null default 0,
    email varchar(255),
    primary key(serverToken, clientToken)
);
create table tests (
    testId int(255) not null auto_increment,
    url varchar(255) not null,
    correct tinyint not null,
    primary key (testId)
);
create table testResults (
    serverToken bigint not null,
    clientToken bigint not null,
    timeSubmitted timestamp(3) not null default now(3) on update now(3),
    testId int(255) not null,
    response tinyint not null,
    timeTaken time not null,
    primary key (serverToken, clientToken, timeSubmitted),
    constraint fk_TestsId foreign key (testId) references tests(testId),
    constraint fk_UsersTokens foreign key (serverToken, clientToken) references users(serverToken, clientToken)
);