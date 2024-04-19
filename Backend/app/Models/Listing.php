<?php
    
    namespace App\Models;

    use CodeIgniter\Model;

    
    class Listing extends Model {
        protected $db;
        protected $table;

        public function __construct() {
            $this -> db = \Config\Database::connect();

            $this -> table = 'Listing';
        }


        public function getAllListings() {
            $builder = $this -> db -> table($this -> table);

            $builder->select('LISTING_ID, FIRST_NAME AS SELLER, PRICE, POSTING_TYPE, `STATUS`, LISTING_DATE');
            $builder->from('`User`');
            $builder->where('SELLER_USER_ID = USER_ID');

            $results = $builder -> get();


            return $results->getResultArray();
        }

       
    }
    




?>