<?php

namespace App\Controllers;

use App\Models\Users;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Services\session;


class User extends ResourceController {

    use ResponseTrait;

    private string $table = 'user';

    
    

    public function createUser() {
        //Pull from POST
        $data = [];

        //Clean the data pulled from post
        foreach ($data as $key => $value) {
            $cleanData = [$key] = esc($value);
        }


    }

    public function deleteUser() {
        $this->respondDeleted(null, "User Deleted");
    }


    private function validateUserLogin($postedLogin) {
        //Make a model
        $model = new Users();

        //Now grab the user password by email
        $result = $model -> getPassword($postedLogin['email']); //Finds the password for the account
        
        //Now check and compare
        if (empty($result)) {
            //No user found
            return false;
        }


        //emails match, now check passwords
        if ($postedLogin['password'] == $result[0]['LOGIN_PASS']) {   //Passwords matched
            return true;
        }



        //Passwords didn't match
        return false;
    }
    


    public function Login() {
        //Grab from post

        //Check if the login info was not sent
        if (!isset($_POST['login'])) {
            $this->fail('No login information');
        }

        //Cleanse the data
        $cleansedPosted = [
            'email' => esc($_POST['login']['email']),
            'password' => esc($_POST['login']['password'])
        ];


        //validate the login
        $loggedIn = $this->validateUserLogin($cleansedPosted);
        
        if ($loggedIn) {
            //Load session library
            $session = \Config\Services::session();
            $session -> start();


            $session->set('state', ['email' => 'tennis']);

            $_SESSION['email'] = 'test';
            

            return $this -> respond(null, 200, 'Login was successful :)');
        }


        //Login unsuccessful
        return $this -> fail(null, 400, 100, 'Failed login :(');
    }
}



?>