<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class UserSeeder extends Seeder {
    public function run() {
        //Publisher Data
        $data = [
            ['USER_ID' => 1,
            'FIRST_NAME' => 'Jane',
            'LAST_NAME' => 'Doe',
            'STREET' => '123 Test',
            'CITY' => 'West Liberty',
            'ZIP' => 43357,
            'STATE' => 'OH',
            'PHONE_NUMBER' => 5551234567,
            'EMAIL' => 'test@test.com',
            'LOGIN_EMAIL' => 'test@test.com',
            'LOGIN_PASS' => '1234'],

            ['USER_ID' => 2,
            'FIRST_NAME' => 'John',
            'LAST_NAME' => 'Doe',
            'STREET' => '389 Rome',
            'CITY' => 'Columbus',
            'ZIP' => 12345,
            'STATE' => 'OH',
            'PHONE_NUMBER' => 1235556942,
            'EMAIL' => 'johnDoe@gmail.com',
            'LOGIN_EMAIL' => 'johnDoe@gmail.com',
            'LOGIN_PASS' => 'john2024'],

        ];

        //Populates the db with each Author with all needed for entry
        //Ensures unique so then duplicates do not exist
        foreach ($data as $key => $value) {
            $builder = $this -> db -> table('User') -> ignore(true) -> insert($value);
        }

        

    }
}