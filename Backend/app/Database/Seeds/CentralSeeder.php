<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CentralSeeder extends Seeder {
    public function run() {
        $this -> call('AuthorSeeder');
        $this -> call('PublisherSeeder');
        // call();
        // call();
        // call();
        // call();
    }
}