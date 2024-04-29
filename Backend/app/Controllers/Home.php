<?php

/**
 * 
 * Default controller for API endpoint, located at /
 * 
 */

namespace App\Controllers;

use App\Models\TestModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

/**
 * 
 * The "Home" route that is linked to /
 * 
 */
class Home extends ResourceController
{
    use ResponseTrait;

    /**
     * 
     * Base controller method for /
     * 
     * 
     * @return Response::fail - the failed response of 404 as the endpoint doesn't reach anything
     */
    public function index() {

        return $this->fail("Not valid endpoint");
        
    }
}
