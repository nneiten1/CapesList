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

        public function createAuthor($data) {
            $builder = $this -> db -> table($this -> table);

            $builder->insert($data);

            return;
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