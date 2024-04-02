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
            'code' => 404
        );

        return $this->respond($status);
        
    }

    public function example() {
        //Make a new model
        $model = new TestModel();

        // //Grab the basic results
        $searchResults = $model -> all();

        
        //For each for the results
        // foreach ($searchResults as $item) {
        //     echo $item['course_id'], "\r\n";
        // }



        return $this->respond($searchResults);
    }
}
