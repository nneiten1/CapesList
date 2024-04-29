<?php
/**
 * User's table controller and util functions
 * 
 * @author Elliott Hager
 */

namespace App\Controllers;

use App\Models\Users;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Cookie\Cookie;

use CodeIgniter\I18n\Time;

/**
 * 
 * Class to represent the User's table and associated actions with the DB data
 * 
 */
class User extends ResourceController {

    use ResponseTrait;

    private string $table = 'user';

    
    
    /**
     * 
     * Cleanses POST data and creates a user in the DB
     * 
     */
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

    /**
     * 
     * Deletes a user based on user ID
     * 
     */
    public function deleteUser() {
         //Prevents from random API access, done only through form
         if (!isset($_POST['delete'])) {
            $this->fail("No account details submitted");
        }
        d($_POST['data']);
        // $cleansedPostData = [
        //     "USER_ID" => esc($_POST['delete']['ID'])
        // ];

        //d($_POST);

        //$model = new Users();

        //$model->delteUser($cleansedPostData);
        
        //$this->respondDeleted(null, "User Deleted");

        return $this -> respond($_POST);
    }

    /**
     * 
     * Validates user's email and password matches the DB value
     * 
     * @param $postedLogin - User's submitted login array
     * @return bool - user's login was successful
     */
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
    

    /**
     * 
     * Handles the login submission from a user, cleanses data and creates cookie if successful
     * 
     * @return redirect - Goes to home page if successful, goes back to login form if not
     */
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
            //d("Now logging in...");

            //Make model and get the user ID
            $model = new Users();
            $userID = $model -> getUserID($cleansedPosted['email']);

            //d("Found the user...");

            //Make the cookie
           setcookie("CapesListID", $userID[0]["User_ID"]);

           //dd("Setting the cookie....");

            //Respond with the cookie and back to the homepage
            return redirect()->back()->withCookies();
        }

        //Redirects
        header('Location: http://localhost:3000/user/login', true, 301);
        exit;
        return;

    }

}



?>