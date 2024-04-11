<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ReviewSeeder extends Seeder {
    public function run() {
        //Review Data
        $data = [
            ['REVIEW_ID' => 1,
                'STAR_RATING' => '4 Stars',
                'DETAILS' => 'Nice to do business with, friendly and prompt to respond! :)',       
                'DATE' => '04/11/2024',
                'REVIEWER_USER_ID' => 2,    //2 = John Doe
                'REVIEWIE_USER_ID' => 1    //1 =  Jane Doe
            ],
        ];

        //Populates the db with each Comic with all needed for entry
        //Ensures unique so then duplicates do not exist
        foreach ($data as $key => $value) {
            $builder = $this -> db -> table('Review') -> ignore(true) -> insert($value);
        }

        

    }
}