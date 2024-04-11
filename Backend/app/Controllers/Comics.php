<?php

namespace App\Controllers;

use App\Models\Comic;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Comics extends ResourceController {

    use ResponseTrait;

    private string $table = 'comic';
    

    public function createComic() {
        //Arr to hold all of the data posted
        $cleansedData = cleansePostData($_POST, '');

        
    }

    public function deleteComic() {
        $cleansedData = cleansePostData($_POST, '');

    }

    public function updateComic() {
        $cleansedData = cleansePostData($_POST, '');

    }

    public function retrieveComic() {
        $cleansedData = cleansePostData($_POST, '');

    }


    public function retrieveAllComics() {
        $model = new Comic();

        $result = $model -> all();

        return $this->respond($result);
    }

    

}



?>