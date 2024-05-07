<?php

namespace App\Controllers;

use App\Models\Review;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Reviews extends ResourceController {

    use ResponseTrait;

    private string $table = 'review';
    

    public function createReview() {
        //Check if form data was submitted
        if (!isset($_POST['review'])) {
            $this->fail('No review form data found');
        }

        dd($_POST);
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