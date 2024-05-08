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

            $builder->select('LISTING_ID, FIRST_NAME AS SELLER, SELLER_USER_ID, Listing.PRICE, POSTING_TYPE, `STATUS`, LISTING_DATE,
                 BUYER_USER_ID AS BUYER, Comic.COMIC_ID, PUBLISHER_FIRST_NAME AS PUBLISHER, AUTHOR_FIRST_NAME AS AUTHOR, Comic.PRICE, DATE_ADDED, RELEASE_DATE,
                 TITLE, ISSUE_NUMBER, FRONT_COVER_PHOTO_URL AS FRONT_COVER');
            $builder->from('`User`, Comic, Publisher, Author');
            $builder->where('SELLER_USER_ID = USER_ID AND Author.AUTHOR_ID = Comic.AUTHOR_ID AND Publisher.PUBLISHER_ID = Comic.PUBLISHER_ID AND Listing.COMIC_ID = Comic.COMIC_ID');

            $results = $builder -> get()->getResultArray();

            
            //Conditional to check if there is a buyer for the listing
            //Make the buyer user id call
            for ($i = 0; $i < sizeof($results); $i++) {
                $builder = $this -> db -> table('User');
                $builder -> select('FIRST_NAME AS BUYER');
                $builder -> where('USER_ID', $results[$i]['BUYER']);
                $buyerName = $builder->get()->getResultArray()[0]['BUYER']; //Grabs the buyers name


                //Replace the data
                $results[$i]['BUYER'] = $buyerName;

                //This should have spliced the data together so the buyers user id is now their first name
            }
            
            


            return $results;
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

        public function getListing($id) {
            
            $builder = $this -> db -> table($this->table);

            $builder->select('LISTING_ID, FIRST_NAME AS SELLER, SELLER_USER_ID, Listing.PRICE, POSTING_TYPE, `STATUS`, LISTING_DATE,
                 BUYER_USER_ID AS BUYER, Comic.COMIC_ID, PUBLISHER_FIRST_NAME AS PUBLISHER, AUTHOR_FIRST_NAME AS AUTHOR, Comic.PRICE, DATE_ADDED, RELEASE_DATE,
                 TITLE, ISSUE_NUMBER, FRONT_COVER_PHOTO_URL AS FRONT_COVER');
            $builder->from('`User`, Comic, Publisher, Author');
            $builder->where('SELLER_USER_ID = USER_ID AND Author.AUTHOR_ID = Comic.AUTHOR_ID AND 
                Publisher.PUBLISHER_ID = Comic.PUBLISHER_ID AND Listing.COMIC_ID = Comic.COMIC_ID');
            $builder->where('LISTING_ID', $id);

            $results = $builder -> get()->getResultArray();


            //Conditional to check if there is a buyer for the listing
            //Make the buyer user id call
            for ($i = 0; $i < sizeof($results); $i++) {
                $builder = $this -> db -> table('User');
                $builder -> select('FIRST_NAME AS BUYER');
                $builder -> where('USER_ID', $results[$i]['BUYER']);
                $buyerName = $builder->get()->getResultArray()[0]['BUYER']; //Grabs the buyers name


                //Replace the data
                $results[$i]['BUYER'] = $buyerName;

                //This should have spliced the data together so the buyers user id is now their first name
            }
            

            return $results;
        }

       

        public function getListingComicByUserID($userID) {
            $builder = $this -> db -> table($this -> table);

            $builder -> select('TITLE, LISTING_ID');
            $builder -> from('Comic');
            $builder -> where('Listing.COMIC_ID = Comic.COMIC_ID');

            $result = $builder -> get();


            return $result -> getResultArray();
        }


        public function deleteListingByID($listingID) {
            $builder = $this -> db -> table($this -> table);

            $builder -> delete(['LISTING_ID' => $listingID]);

            return;
        }
    }
    




?>