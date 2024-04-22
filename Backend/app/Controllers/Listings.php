<?php

namespace App\Controllers;

use App\Models\Listing;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Listings extends ResourceController {

    use ResponseTrait;

    private string $table = 'listing';
    

    public function createListing() {

        //Prevents from random API access, done only through form
        if (!isset($_POST['listing'])) {
            $this->fail("No account details submitted");
        }

        return $this->respond($_POST);

    }

    public function deleteUser() {

    }

    public function updateUser() {

    }

    public function allListings() {
        $model = new Listing();

        $result = $model -> getAllListings();



        return $this -> respond($result);
    }

    

}



?>