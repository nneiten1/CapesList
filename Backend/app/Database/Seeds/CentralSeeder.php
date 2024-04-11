<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CentralSeeder extends Seeder {
    public function run() {
        $this -> call('AuthorSeeder');
        $this -> call('PublisherSeeder');
        $this -> call('UserSeeder'); //Need a user before comic
        $this -> call('ComicSeeder'); // Need a user before comic
        $this -> call('ReviewSeeder'); //Need a user before review
        $this -> call('ListingSeeder'); //Need a comic before listing
    }
}