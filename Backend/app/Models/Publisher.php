<?php
    
    namespace App\Models;

    use CodeIgniter\Model;

    
    class Publisher extends Model {
        protected $table;
        protected $db;

        public function __construct() {
            //Connects to the database
            $this -> db = \Config\Database::connect();


           $this -> table = 'Publisher';
        }


        public function createPublisher($data) {
            //Data has already been sanatized

            $builder = $this -> db -> table($this->table);
            $builder->insert($data);
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
    }
    




?>