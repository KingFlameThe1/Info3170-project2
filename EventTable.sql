DROP DATABASE IF EXISTS EventsDB;
CREATE DATABASE EventsDB;
USE EventsDB;



DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
    `Number` int(11) NOT NULL auto_increment,
    `Name` text NOT NULL default '',
    `Description` text NOT NULL default '',
    `Location` text NOT NULL default '',
    `Number Registered` int(11) NOT NULL,
    Primary KEY (`Number`)
)  ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;