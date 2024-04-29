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
    

    public function createUser() {

    }

    public function deleteUser() {

    }

    public function updateUser() {

    }

    

}



?>