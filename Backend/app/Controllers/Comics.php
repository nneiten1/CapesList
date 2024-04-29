<?php

namespace App\Controllers;

use App\Models\Comic;
use App\Controllers\Listings;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

/**
 * 
 * Represents a comic and uses the model to modify comic data
 * 
 */
class Comics extends ResourceController {

    use ResponseTrait;

    private string $table = 'comic';
    

    /**
     * 
     * Creates a single comic in the database
     * 
     */
    public function createComic() {
        //Prevents from random API access, done only through form
        if (!isset($_POST['comic'])) {
            $this->fail("No comic details submitted");
        }

        //Cleanses the data
        $cleansedData = [

        ];

        //Makes a model
        $model = new Comic();

        //Creates the comic with cleansed data
        $model -> createComic($cleansedData);
        
    }

    public function deleteComic() {
        //Check if the form is set
        if (!isset($_POST['comicDelete']['id'])) {
            return $this->fail("No comic to delete submitted");
        }

        //Valid, now sanatize
        $cleanData = [
            'COMIC_ID' => esc($_POST['comicDelete']['id'])
        ];

        //Delete any listings then delete the comic
        $listingController = new Listings();
        $listingController->deleteListingByComicID($cleanData['COMIC_ID']);

        //Now create model and delete the comic
        $model = new Comic();
        $model->deleteComic($cleanData['COMIC_ID']);

        //Redirect
        header('Location: http://localhost:3000/delete/comic', true, 301);
        exit;
        
        
        return;
    }

    public function updateComic() {
        $cleansedData = cleansePostData($_POST, '');

    }

    public function retrieveComic() {
        $cleansedData = cleansePostData($_POST, '');

    }


    /**
     * Grabs all the comics in the DB
     * 
     * @return $result - All of the comics in the database
     */
    public function retrieveAllComics() {
        //Creates model
        $model = new Comic();

        //Retrieves all 
        $result = $model -> all();


        //Returns the results
        return $this->respond($result);
    }

    public function getUserComics($userID) {
        //Clean data
        $cleanID = esc($userID);

        //Now make model to get comics
        $model = new Comic();

        $result = $model->getComicByUserID($cleanID);

        return $this->respond(($result));
    }
    

}



?>