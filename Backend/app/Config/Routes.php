<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

//GET
$routes->get('/', 'Home::index');

$routes->get('/Comics/all', 'Comics::retrieveAllComics');

$routes->get('/Login', 'User::retrieveUser');



//POST




//DELETE



//UPDATE