<?php
    /**
     * 
     * Comic DB table's Model
     * 
     * @author Elliott Hager
     *
     */



    namespace App\Models;

    use CodeIgniter\Model;

    /**
     * 
     * A class to represent DB operations on the Comic DB table
     * 
     */
    class Comic extends Model {
        protected $db; //DB instance
        protected $table;   //Table to be used


        /**
         * 
         * Default constructor to create a DB session for the Comic table
         * 
         */
        public function __construct() {
        
            //Connects to the database
            $this -> db = \Config\Database::connect();

            //Sets the table for the DB connection only to the comic table
           //$builder = $this -> db -> table('Comic');

           $this -> table = 'Comic';
        }

        /**
         * 
         * Returns all the comics matching a comic's id
         * 
         * @param $comicID - The ID of the comic
         * @return $result - Array of the comic results from the database
         */
        public function getByComicID(int $comicID) {
           $escComicID = esc($comicID);

           $builder = $this -> db -> table($this -> table);

           $builder -> select('*');
           $builder -> where('COMIC_ID', $escComicID);
           
           $result = $builder -> get();

           return $result -> getResultArray();
        }

        /**
         * 
         * Gets all of the comics a user has by userID
         * 
         * @param $userID - the users ID
         * @return $result - An array of the users comics
         * 
         */
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
         * Creates a comic in the database
         * 
         * @param $data - array for the data to be sent to
         */
        public function createComic($data) {
            //Sets the table to be the comics table
            $builder = $this -> db -> table($this -> table);

            //Inserts the comic into the db
            $builder->insert($data);
            
        }


        /**
         * 
         * Retrieves all of the comics in the database
         * 
         * 
         * @return $result - Returns an array from all of the comics in the database
         */
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



        public function deleteComic($id) {
            $builder = $this -> db -> table($this -> table);

            $builder->delete(['COMIC_ID' => $id]);
        }


    }
    




?>