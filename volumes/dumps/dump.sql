-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: localhost    Database: authorityDB
-- ------------------------------------------------------
-- Server version	5.7.19-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `authorityDB`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `authorityDB` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `authorityDB`;

--
-- Table structure for table `authorities`
--

DROP TABLE IF EXISTS `authorities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authorities` (
  `type` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `fromauthority` varchar(255) NOT NULL,
  PRIMARY KEY (`address`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authorities`
--

LOCK TABLES `authorities` WRITE;
/*!40000 ALTER TABLE `authorities` DISABLE KEYS */;
/*!40000 ALTER TABLE `authorities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dapps`
--

DROP TABLE IF EXISTS `dapps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dapps` (
  `dapp` varchar(255) NOT NULL,
  `eba` varchar(255) NOT NULL,
  PRIMARY KEY (`dapp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dapps`
--

LOCK TABLES `dapps` WRITE;
/*!40000 ALTER TABLE `dapps` DISABLE KEYS */;
/*!40000 ALTER TABLE `dapps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meteringdata`
--

DROP TABLE IF EXISTS `meteringdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meteringdata` (
  `mta` varchar(255) NOT NULL,
  `period` int(11) NOT NULL,
  `actualvalue` int(11) DEFAULT NULL,
  `expectedvalue` int(11) DEFAULT NULL,
  PRIMARY KEY (`mta`,`period`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meteringdata`
--

LOCK TABLES `meteringdata` WRITE;
/*!40000 ALTER TABLE `meteringdata` DISABLE KEYS */;
/*!40000 ALTER TABLE `meteringdata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `msbas`
--

DROP TABLE IF EXISTS `msbas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msbas` (
  `sm2bc` varchar(255) NOT NULL,
  `msba` varchar(255) NOT NULL,
  PRIMARY KEY (`msba`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msbas`
--

LOCK TABLES `msbas` WRITE;
/*!40000 ALTER TABLE `msbas` DISABLE KEYS */;
/*!40000 ALTER TABLE `msbas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mts`
--

DROP TABLE IF EXISTS `mts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mts` (
  `mta` varchar(255) NOT NULL,
  `paa` varchar(255) NOT NULL,
  `sm2bc` varchar(255) NOT NULL,
  `eba` varchar(255) NOT NULL,
  `msba` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`mta`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mts`
--

LOCK TABLES `mts` WRITE;
/*!40000 ALTER TABLE `mts` DISABLE KEYS */;
/*!40000 ALTER TABLE `mts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-21 14:37:49
