<?php

namespace App\Controllers;

use App\Models\Review;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Reviews extends ResourceController {

    use ResponseTrait;

    private string $table = 'review';
    

    public function createUser() {

    }

    public function deleteUser() {

    }

    public function updateUser() {

    }


    public function getUserReviews($id) {
        //Cleanse the ID
        $cleansedID = esc($id);

        $model = new Review();

        $result = $model->getUsersReviews($cleansedID);

        return $this->respond($result);

    }

    

}



?>