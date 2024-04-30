<?php

/**
 * Routing table for the API endpoints
 * 
 *@author Elliott Hager
 */

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

 //Syntax: http://localhost:80/{route goes here}

//GET
$routes->get('/', 'Home::index');
$routes->get('/Comics/all', 'Comics::retrieveAllComics');
$routes->get('/Reviews/(:num)', 'Reviews::getUserReviews/$1');
$routes->get('/Comics/(:num)', 'Comics::getUserComics/$1');
$routes->get('/Listings/all', 'Listings::allListings');
$routes->get('/Listings/(:num)', 'Listings::getUsersListings/$1');
$routes->get('/Comics/(:alphanum)', 'Comics::getComicsByTitle/$1');
$routes->get('/Comics', 'Comics::getAllComicTitles');
// $routes->get('/')


//POST
$routes->post('Login', 'User::Login');
$routes->post('/Logout', 'User::Logout');
$routes->post('/Signup', 'User::createUser');
$routes->post('/Create/Listing', 'Listings::createListing');
$routes->post("/User/Delete", 'User::deleteUser');
$routes->post("/Create/Comic", 'Comics::createComic');
$routes->post("/Create/Publisher", "Publishers::createPublisher");
$routes->post("/Delete/Comic", 'Comics::deleteComic');
$routes->post("/Create/Author", 'Authors::createAuthor');

//DELETE




//UPDATE