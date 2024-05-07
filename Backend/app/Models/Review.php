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

        public function createReview() {
            //Prevents from random API access, done only through form
            if (!isset($_POST['review'])) {
                $this->fail("No review details submitted");
            }
    
            //Pull from the POST array in account index
            $cleansedPostData = [
                "STAR_RATING" => esc($_POST['review']['stars']),
                "DETAILS" => esc($_POST['review']['details']),
                "DATE" => esc($_POST['review']['date']),
                "REVIEWER_USER_ID" => esc($_POST['review']['reviewer_user_id']),
                "REVIEWIE_USER_ID" => esc($_POST['account']['state']),
                "STATE" => esc($_POST['account']['zip']),
                "PHONE_NUMBER" => esc($_POST['account']['phone']),
                "EMAIL" => esc($_POST['account']['email']),
                "LOGIN_EMAIL" => esc($_POST['account']['email']),
                "LOGIN_PASS" => esc($_POST['account']['password']),
            ];
    
            //Now make the model and insert the user
            $model = new Users();
    
            $model->createUser($cleansedPostData);
    
        }
    }
    




?>