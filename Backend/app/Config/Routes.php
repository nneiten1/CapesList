<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('/Comics/all', 'Comics::retrieveAllComics');

$routes->get('/Login', 'User::retrieveUser');