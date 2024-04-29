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

            dd($results);


            return $results->getResultArray();
        }


        public function createListing($data) {
            $builder = $this -> db -> table($this -> table);

            //Now execute the insert
            //Prevents from duplicate listings from being made
            $builder -> insert($data);
        }


        public function deleteByComicID($comicID) {
            $builder = $this -> db -> table($this->table);

            //Now delete based on matching comic ID's
            $builder -> delete(['COMIC_ID' => $comicID]);
        }

        public function getUsersListings($id) {
            $builder = $this -> db -> table($this->table);

            //Now get based on the users id
            $builder->select('*');
            $builder -> where('SELLER_USER_ID', $id);

            $results = $builder -> get();

            return $results->getResultArray();
        }

       
    }
    




?>