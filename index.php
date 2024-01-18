<?php

require_once './controller/UserController.php';
require_once './config/DBConnect.php';
require_once './router/Router.php';


$conn = new DBConnector();

$database = $conn->getConnection();

$userController = new UserController($database);



Router::addRoute("GET", "/test/index.php/user", $userController->getUserByID());

Router::addRoute("GET", "/test/index.php/product", function () {
    echo "product";
});
$uri = $_SERVER['REQUEST_URI'];
$method =  $_SERVER['REQUEST_METHOD'];


Router::reqHandler($method, $uri);
