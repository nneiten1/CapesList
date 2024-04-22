<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

//GET
$routes->get('/', 'Home::index');
$routes->get('/Comics/all', 'Comics::retrieveAllComics');
$routes->get('/Reviews/(:num)', 'Reviews::getUserReviews/$1');

$routes->get('/Listings/all', 'Listings::allListings');


//POST
$routes->post('Login', 'User::Login');
$routes->post('/Logout', 'User::Logout');
$routes->post('/Signup', 'User::createUser');
$routes->post('/Create/Listing', 'Listings::createListing');


//DELETE



//UPDATE