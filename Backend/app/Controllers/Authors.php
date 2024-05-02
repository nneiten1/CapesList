<?php
    /**
     * 
     * Controller for the Author's table and actions
     * 
     * @author Elliott Hager
     * 
     */


namespace App\Controllers;

use App\Models\Author;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

/**
 * Class representing the Author's DB table and actions for the table
 */
class Authors extends ResourceController {

    use ResponseTrait;

    private string $table = 'author';
    

    public function createAuthor() {

        //Checks for the author data in POST
        if (!isset($_POST['author'])) {
            return $this->fail('No author data in form');
        }

        //Now cleanse is
        $cleansedAuthor = [
            'AUTHOR_FIRST_NAME' => esc($_POST['author']['AUTHOR_FIRST_NAME']),
            'AUTHOR_LAST_NAME' => esc($_POST['author']['AUTHOR_LAST_NAME'])
        ];


        //Create the model
        $model = new Author();
        $model->createAuthor($cleansedAuthor);

        //Make response
        header('Location: http://localhost:3000/Create/Author', true, 301);
        exit;

        return;
    }

    public function deleteUser() {

    }

    public function updateUser() {

    }


    public function getAll() {
        $model = new Author();

        $results = $model->all();


        return $this->respond($results);
    }

    

}



?>