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

        }

        public function createUser(string $email, string $password) {

        }

        public function updatePassword(string $oldPassword, string $newPassword) {

        }

        public function updateEmail(string $newEmail) {

        }
    }
    




?>