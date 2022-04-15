CREATE TABLE `user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL DEFAULT NULL,
  `surname` VARCHAR(50) NULL DEFAULT NULL,
  `email` VARCHAR(50) NULL,
  `pwd` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `uq_email` (`email` ASC) 
);

CREATE TABLE `author` (
  `id` BIGINT NOT NULL AUTO_INCREMENT, 
  `name` VARCHAR(50) NOT NULL, 
  PRIMARY KEY (`id`)
); 

CREATE TABLE `publisher` (
  `id` BIGINT NOT NULL AUTO_INCREMENT, 
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `book` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `author` BIGINT NULL,
  `publisher` BIGINT NULL, 
  `summary` TINYTEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_book_author` (`author` ASC),
  INDEX `idx_book_publ` (`publisher` ASC), 
  CONSTRAINT `fk_book_author`
    FOREIGN KEY (`author`)
    REFERENCES `author` (`id`),
  CONSTRAINT `fk_book_publisher` 
    FOREIGN KEY (`publisher`)
    REFERENCES `publisher` (`id`)
);