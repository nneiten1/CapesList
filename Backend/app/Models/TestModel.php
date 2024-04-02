<?php
    
    namespace App\Models;

    use CodeIgniter\Model;

    class TestModel extends Model {
        protected $table = 'course';
        

        public function all() {
            $db = \Config\Database::connect();

            $builder = $db -> table('course');

            $builder -> select('*');

            $result = $builder -> get();
            

    
            return $result->getResultArray();


        }



    }






?>