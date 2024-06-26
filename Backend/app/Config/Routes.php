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
$routes->get('/Listings/(:num)', 'Listings::getListing/$1');
$routes->get('/Comics/(:alphanum)', 'Comics::getComicsByTitle/$1');
$routes->get('/Comics', 'Comics::getAllComicTitles');
$routes->get('/Authors/all', 'Authors::getAll');
$routes->get('/Publishers/all', 'Publishers::getAll');
$routes->get('/Listings/UserID/(:num)', 'Listings::getListingComicByUserID/$1');
$routes->get('/Users/allNames', 'User::getAllNames');


//POST
$routes->post('Login', 'User::Login');
$routes->post('/Logout', 'User::Logout');
$routes->post('/Signup', 'User::createUser');
$routes->post('/Create/Listing', 'Listings::createListing');
$routes->post("/User/Delete", 'User::deleteUser');
$routes->post("/Create/Comic", 'Comics::createComic');
$routes->post("/Create/Publisher", "Publishers::createPublisher");
$routes->post("/Delete/Listing", 'Listings::deleteListingByID');
$routes->post("/Create/Author", 'Authors::createAuthor');
$routes->post("Create/Review", 'Reviews::createReview');

//DELETE




//UPDATE