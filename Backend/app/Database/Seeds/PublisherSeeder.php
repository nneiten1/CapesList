<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class PublisherSeeder extends Seeder {
    public function run() {
        //Publisher Data
        $data = [
            ['PUBLISHER_ID' => 1,
            'PUBLISHER_FIRST_NAME' => 'IDW Publishing'],

            ['PUBLISHER_ID' => 2,
            'PUBLISHER_FIRST_NAME' => 'Marvel Comics'],

            ['PUBLISHER_ID' => 3,
            'PUBLISHER_FIRST_NAME' => 'DC Comics'],

            ['PUBLISHER_ID' => 4,
            'PUBLISHER_FIRST_NAME' => 'Image Comics'],
        ];

        //Populates the db with each Author with all needed for entry
        //Ensures unique so then duplicates do not exist
        foreach ($data as $key => $value) {
            $builder = $this -> db -> table('Publisher') -> ignore(true) -> insert($value);
        }

        

    }
}