<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ListingSeeder extends Seeder {
    public function run() {
        //Comic Data
        $data = [
            ['LISTING_ID' => 1,
                'SELLER_USER_ID' => 1,    //1 = Jane Doe
                'PRICE' => '$6.00',       
                'POSTING_TYPE' => 'Sell',
                'STATUS' => 'Available',
                'LISTING_DATE' => '04/11/2024',
                'BUYER_USER_ID' => 2    /*2 = John Doe*/
            ],
        ];

        //Populates the db with each Comic with all needed for entry
        //Ensures unique so then duplicates do not exist
        foreach ($data as $key => $value) {
            $builder = $this -> db -> table('Listing') -> ignore(true) -> insert($value);
        }

        

    }
}