<?php

namespace App\Controllers;

use App\Models\Users;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Cookie\Cookie;
use CodeIgniter\Cookie\CookieStore;
use Config\Services;


class User extends ResourceController {

    use ResponseTrait;

    private string $table = 'user';

    
    

    public function createUser() {
        //Prevents from random API access, done only through form
        if (!isset($_POST['account'])) {
            $this->fail("No account details submitted");
        }

        //Pull from the POST array in account index
        $cleansedPostData = [
            "FIRST_NAME" => esc($_POST['account']['fname']),
            "LAST_NAME" => esc($_POST['account']['lname']),
            "STREET" => esc($_POST['account']['street']),
            "CITY" => esc($_POST['account']['city']),
            "ZIP" => esc($_POST['account']['state']),
            "STATE" => esc($_POST['account']['zip']),
            "PHONE_NUMBER" => esc($_POST['account']['phone']),
            "EMAIL" => esc($_POST['account']['email']),
            "LOGIN_EMAIL" => esc($_POST['account']['email']),
            "LOGIN_PASS" => esc($_POST['account']['password']),
        ];

        //Now make the model and insert the user
        $model = new Users();

        $model->createUser($cleansedPostData);

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
           
            setcookie("CapesList", "TESTING");
            setcookie("CapesListID", "1");

            return redirect()->back()->withCookies();
        }


        //Login unsuccessful
        return redirect('/login');
    }
}



?>