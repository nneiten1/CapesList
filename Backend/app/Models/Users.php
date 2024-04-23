<?php
    
    namespace App\Models;

    use CodeIgniter\Model;

    
    class Users extends Model {
        protected $table;
        protected $db;

        public function __construct() {
        
            //Connects to the database
            $this -> db = \Config\Database::connect();

            //Sets the table for the DB connection only to the comic table
           //$builder = $this -> db -> table('Comic');

           $this -> table = 'User';
        }

        public function getUserID(string $email) {
            //Data is already cleansed

            $builder = $this -> db -> table ($this -> table);

            $builder -> select('User_ID');
            $builder -> where('LOGIN_EMAIL', $email);

            $result = $builder-> get(); 


            return $result -> getResultArray();

        }

        public function getPassword(string $email) {
            //Data was already cleansed, so no need

            $builder = $this -> db -> table($this -> table);

            $builder->select('LOGIN_PASS');
            $builder->where('LOGIN_EMAIL', $email);

            $result = $builder->get();

            return $result->getResultArray();
        }

        public function getEmail(int $userID) {

            $builder = $this -> db -> table($this -> table);

            $builder -> select('LOGIN_EMAIL');
            $builder -> where('USER_ID', $userID);

            $result = $builder -> get();

            return $result -> getResultArray();

        }

        public function createUser($profileData) {
            //data already cleansed
            $builder = $this-> db -> table($this -> table);

            $builder -> insert($profileData);
        }

        public function updatePassword(string $newPassword, int $userID) {
            $builder = $this -> db -> table($this -> table);

            //Now make an update
            $builder -> set('LOGIN_PASS', $newPassword);
            $builder -> where('USER_ID', $userID);

            //Returns that the update happened
            return true;
        }

        public function updateEmail(string $newEmail, int $userID) {
            $builder = $this -> db -> table($this -> table);

            //Now make an update
            $builder -> set('LOGIN_EMAIL', $newEmail);
            $builder -> where('USER_ID', $userID);

            //Returns that the update happened
            return true;
        }

        public function deleteUser(int $userID) {
            $builder = $this -> db -> table($this -> table);

            // //Now make the delete with the userID
            // $builder -> where('USER_ID', $userID);
            // $builder -> delete();

        }
    }
    




?>