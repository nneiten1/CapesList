<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

//GET
$routes->get('/', 'Home::index');

$routes->get('/Comics/all', 'Comics::retrieveAllComics');

//$routes->get('/Login', 'User::Login');

$routes->get('/Listings/all', 'Listings::allListings');


//POST
$routes->post('Login', 'User::Login');
$routes->post('/Signup', 'User::createUser');


//DELETE



//UPDATE