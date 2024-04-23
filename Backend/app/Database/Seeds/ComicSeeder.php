<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ComicSeeder extends Seeder {
    public function run() {
        //Comic Data
        $data = [
            ['COMIC_ID' => 1,
            'PUBLISHER_ID' => 2,    //2 = Marvel Comics
            'AUTHOR_ID' => 6,        //6 = Stan Lee
            'PRICE' => '$0.12',
            'DATE_ADDED' => '4/11/2024',
            'RELEASE_DATE' => '01/1963',
            'TITLE' => 'The Amazing Spider-Man',
            'ISSUE_NUMBER' => 1,
            'FRONT_COVER_PHOTO_URL' => NULL],
            ['COMIC_ID' => 2,
            'PUBLISHER_ID' => 2,    //2 = Marvel Comics
            'AUTHOR_ID' => 6,        //6 = Stan Lee
            'PRICE' => '$0.12',
            'DATE_ADDED' => '4/11/2024',
            'RELEASE_DATE' => '01/1963',
            'TITLE' => 'TEST',
            'ISSUE_NUMBER' => 1,
            'FRONT_COVER_PHOTO_URL' => NULL],
        ];

        //Populates the db with each Comic with all needed for entry
        //Ensures unique so then duplicates do not exist
        foreach ($data as $key => $value) {
            $builder = $this -> db -> table('Comic') -> ignore(true) -> insert($value);
        }

        

    }
}