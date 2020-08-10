<?php
function DBcnx()
{
    $server = 'localhost';
    $username = 'root';
    $passwordDB = '';
    $database = 'proyecto02';

    $cnx = new PDO("mysql:host=$server;dbname=$database", $username, $passwordDB);
    $cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $cnx;
}