<?php
    
    namespace App\Models;

    use CodeIgniter\Model;

    
    class Comic extends Model {
        protected $db; //DB instance
        //protected $builder; //Query builder
        protected $table;   //Table to be used


        public function __construct() {
        
            //Connects to the database
            $this -> db = \Config\Database::connect();

            //Sets the table for the DB connection only to the comic table
           //$builder = $this -> db -> table('Comic');

           $this -> table = 'Comic';
        }

        public function getByComicID(int $comicID) {
           $escComicID = esc($comicID);

           $builder = $this -> db -> table($this -> table);

           $builder -> select('*');
           $builder -> where('COMIC_ID', $escComicID);
           
           $result = $builder -> get();

           return $result -> getResultArray();
        }

        public function getComicByUserID(int $userID) {
            $escComicID = esc($userID);
 
            $builder = $this -> db -> table($this -> table);
 
            $builder -> select('*');
            $builder -> where('OWNER_ID', $escComicID);
            
            $result = $builder -> get();
 
            return $result -> getResultArray();
         }

        

        /**
         * 
         * 
         * @param $data - array for the data to be sent to
         */
        public function createComic($data) {
            
        }


        public function all() {
            //This is a query builder ($builder)
            //$this -> db is the database connection
            //table() is telling which database table to use
            //$this -> table is the table property set in the
            //constructor (__construct), which is Comic
            $builder = $this -> db -> table($this -> table);

            //select() makes a SQL SELECT command
            //the argument tells it what to select
            //In this case, *, which is all
            $builder -> select('*');


            //$result will hold the query results
            //get() is a method of builder
            //get() is executing the query and getting the
            //results
            $results = $builder -> get();

            //This returns the results of the query in an array
            return $results -> getResultArray();

        }
    }
    




?>