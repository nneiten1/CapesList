<?php
    
    namespace App\Models;

    use CodeIgniter\Model;

    
    class Author extends Model {
        protected $table;
        protected $db;

        public function __construct() {
            
            $this -> db = \Config\Database::connect();

            $this->table = 'Author';
        }

        public function getUserID(string $email) {

        }

        public function getPassword(int $userID) {

        }

        public function getEmail(int $userID) {

        }

        public function createUser(string $email, string $password) {

        }

        public function updatePassword(string $oldPassword, string $newPassword) {

        }

        public function updateEmail(string $newEmail) {

        }


        public function all() {
            $builder = $this -> db -> table($this -> table);

            //Query
            $builder -> select('AUTHOR_FIRST_NAME, AUTHOR_LAST_NAME, AUTHOR_ID');

            $result = $builder -> get();


            return $result->getResultArray();
        }
    }
    




?>