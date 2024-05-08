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


        $cleansedPostData = [
            "STAR_RATING" => esc($_POST['review']['STAR_RATING']),
            "DETAILS" => esc($_POST['review']['DETAILS']),
            "DATE" => esc($_POST['review']['DATE']),
            "REVIEWER_USER_ID" => esc($_POST['review']['REVIEWER_USER_ID']),
            "REVIEWIE_USER_ID" => esc($_POST['review']['REVIEWIE_USER_ID']),
        ];

        $model = new Review();
        $model -> createReview($cleansedPostData);


        //Now reroute
        header('Location: http://localhost:3000/create/review');
        exit;


        return;
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