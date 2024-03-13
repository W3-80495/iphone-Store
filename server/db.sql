create database apple_store;

use apple_store;

create table user (
    id integer primary key auto_increment,
    firstName varchar(50),
    lastName varchar(50),
    email varchar(50),
    password varchar(100),
    createdTimestamp timestamp default current_timestamp
);

create table iphone (
    id integer primary key auto_increment,
    name varchar(50),
    details varchar(1024),
    price float,
    image varchar(100),
    createdTimestamp timestamp default current_timestamp
);

insert into iphone (name, details, price, image) values 
    (
        'Apple iPhone 14 (Starlight, 128 GB)', 
        '128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A15 Bionic Chip, 6 Core Processor',
        58999,
        'iphone14.webp'
    ),
    (
        'Apple iPhone 13 (Green, 128 GB)',
        '128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A15 Bionic Chip Processor',
        52999,
        'iphone13.webp'
    ),
    (
        'Apple iPhone 15 Plus (Black, 256 GB)',
        '256 GB ROM, 17.02 cm (6.7 inch) Super Retina XDR Display, 48MP + 12MP | 12MP Front Camera, A16 Bionic Chip, 6 Core Processor',
        92999,
        'iphone15plus.webp'
    ),
    (
        'Apple iPhone 14 (Midnight, 128 GB)',
        '128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A15 Bionic Chip, 6 Core Processor',
        59999,
        'iphone14_midnight.webp'
    ),
    (
        'Apple iPhone 15 (Blue, 128 GB)',
        '128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 48MP + 12MP | 12MP Front Camera, A16 Bionic Chip, 6 Core Processor',
        72999,
        'iphone15_blue.webp'
    ),
    (
        'Apple iPhone 13 (Pink, 128 GB)',
        '128 GB ROM, 15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A15 Bionic Chip Processor',
        52999,
        'iphone13_pink.webp'
    );

-- order
create table orderMaster (  
    id integer primary key auto_increment,
    userId integer,
    totalAmount float,
    createdTimestamp timestamp default current_timestamp
);

-- order details
create table orderDetails (  
    id integer primary key auto_increment,
    orderId integer,
    iphoneId integer,
    quantity integer,
    totalAmount float,
    createdTimestamp timestamp default current_timestamp
);

