<?php

namespace App\Controllers;

use App\Models\TestModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Home extends ResourceController
{
    use ResponseTrait;

    public function index()
    {
        $status = array(
            'status' => 400,
            'code' => '404'
        );

        return $this->fail($status);
        
    }
}
