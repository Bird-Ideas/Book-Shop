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
); 

CREATE TABLE `publisher` (
    `id` BIGINT NOT NULL AUTO_INCREMENT, 
   `name` VARCHAR(50) NOT NULL,  
);

CREATE TABLE `book` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `author` BIGINT NULL,
  `publisher` 
  `summary` TINYTEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `uq_slug` (`slug` ASC),
  INDEX `idx_book_author` (`author` ASC),
  INDEX `idx_book_publ` (`publisher` ASC), 
  CONSTRAINT `fk_product_user`
    FOREIGN KEY (`userId`)
    REFERENCES `shop`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);