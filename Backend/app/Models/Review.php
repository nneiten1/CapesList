<?php
    
    namespace App\Models;

    use CodeIgniter\Model;

    
    class Review extends Model {
        protected $db;
        protected $table;

        function __construct() {
            //Connects to the database
            $this -> db = \Config\Database::connect();

            //Sets the table for the DB connection only to the comic table
           //$builder = $this -> db -> table('Comic');

           $this -> table = 'Review';
        }


        public function getUsersReviews($id) {
            $builder = $this -> db -> table($this -> table);

            $builder->select('STAR_RATING, DETAILS, DATE, CONCAT(FIRST_NAME, " ", LAST_NAME) AS SELLER, REVIEWER_USER_ID AS BUYER');
            $builder->from('`User`');
            $builder->where(["REVIEWIE_USER_ID" => $id, '`User`.USER_ID' => $id]);

            $result = $builder -> get() -> getResultArray();



            for ($i = 0; $i < sizeof($result); $i++) {
                //Now to grab the buyers name
                $builder->select('CONCAT(FIRST_NAME, " ", LAST_NAME) AS BUYER');
                $builder->from('`User`');
                $builder->where(["REVIEWER_USER_ID" => $result[$i]['BUYER'], '`User`.USER_ID' => $result[$i]['BUYER']]);
                $buyer = $builder->get()->getResultArray()[0]['BUYER'];

                //Sets the actual buyers name
                $result[$i]['BUYER'] = $buyer;
            }
            





            return $result;
        }

        public function createReview($data) {
            
            $builder = $this -> db -> table($this -> table);
            $builder->insert($data);
    
        }
    }
    




?>