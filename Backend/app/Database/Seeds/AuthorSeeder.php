<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class AuthorSeeder extends Seeder {
    public function run() {
        //Publisher Data
        $data = [
            ['AUTHOR_ID' => 1,
            'AUTHOR_FIRST_NAME' => 'Jim',
            'AUTHOR_LAST_NAME' => 'Starlin'],

            ['AUTHOR_ID' => 2,
            'AUTHOR_FIRST_NAME' => 'Gail',
            'AUTHOR_LAST_NAME' => 'Simone'],

            ['AUTHOR_ID' => 3,
            'AUTHOR_FIRST_NAME' => 'Jonathan',
            'AUTHOR_LAST_NAME' => 'Hickman'],

            ['AUTHOR_ID' => 4,
            'AUTHOR_FIRST_NAME' => 'Mark',
            'AUTHOR_LAST_NAME' => 'Waid'],

            ['AUTHOR_ID' => 5,
            'AUTHOR_FIRST_NAME' => 'Alan',
            'AUTHOR_LAST_NAME' => 'Davis'],

            ['AUTHOR_ID' => 6,
            'AUTHOR_FIRST_NAME' => 'Stan',
            'AUTHOR_LAST_NAME' => 'Lee'],

            ['AUTHOR_ID' => 7,
            'AUTHOR_FIRST_NAME' => 'Brian',
            'AUTHOR_LAST_NAME' => 'Bendis'],

            ['AUTHOR_ID' => 8,
            'AUTHOR_FIRST_NAME' => 'Louise',
            'AUTHOR_LAST_NAME' => 'Simonson'],

            ['AUTHOR_ID' => 9,
            'AUTHOR_FIRST_NAME' => 'Joss',
            'AUTHOR_LAST_NAME' => 'Whedon'],


        ];

        //Populates the db with each Author with all needed for entry
        //Ensures unique so then duplicates do not exist
        foreach ($data as $key => $value) {
            $builder = $this -> db -> table('Author') -> ignore(true) -> insert($value);
        }

        

    }
}