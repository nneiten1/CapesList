<?php

namespace App\Controllers;

use App\Models\Publisher;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Publishers extends ResourceController {

    use ResponseTrait;

    private string $table = 'publisher';
    

    public function createPublisher() {
        //Checks if it is set
        if (!isset($_POST['publisher'])) {
            return $this->fail("No publisher data submitted");

        }

        //Checking is ast name is blank
        // if ($_POST['publisher']['PUBLISHER_LAST_NAME'] == '') {
        //     //Blank so make it NULL value
        //     $_POST['publisher']['PUBLISHER_LAST_NAME'] = NULL;
        // }

        //Now we want to parse and sanatize the data
        $cleanData = [
            'PUBLISHER_FIRST_NAME' => esc($_POST['publisher']['PUBLISHER_FIRST_NAME']),
            'PUBLISHER_LAST_NAME' => esc($_POST['publisher']['PUBLISHER_LAST_NAME']),
        ];

        //Make the model
        $model = new Publisher();
        $model->createPublisher($cleanData);


        //Now make the redirect response
        header('Location: http://localhost:3000/create/publisher', true, 301);
        exit;


        return;
    }

    public function deletePublisher() {

    }

    public function updateUser() {

    }


    public function getAll() {
        $model = new Publisher();


        $results = $model -> all();


        return $this->respond($results);
    }

    

}



?>