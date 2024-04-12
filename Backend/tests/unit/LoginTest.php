<?php

namespace App;
namespace App\Database\Seeds;

use CodeIgniter\Test\CIUnitTestCase;
use CodeIgniter\Test\DatabaseTestTrait;
use CodeIgniter\Test\FeatureTestTrait;

use CodeIgniter\Database\Seeder\CenteralSeeder;

class LoginTest extends CIUnitTestCase
{
    use DatabaseTestTrait;
    use FeatureTestTrait;


    protected function setUp(): void
    {
        parent::setUp();

        //$this->testLogin();
        //$seeder = new CentralSeeder();
        //$seeder -> run();

    }

    protected function tearDown(): void
    {
        parent::tearDown();

        //CHECK the session

    }


   /** @test */
    public function testBlankLogin() : void {
        //Will call the login endpoint

        //Calls the login endpoint with NO login details
        $result = $this -> call('post', '/Login');
        
        //Assert that the result was a error (400 error)
        assert(!$result->isOkay());

        //Assert the header type is JSON
        $result -> assertHeader('Content-Type', 'application/json; charset=UTF-8');

        //Ensure that the not found was given when the login is empty
        $result->assertStatus(400);
    
    }


    /** @test */
    public function testAlreadyGivenLogin() : void {
        //Will call the login endpoint

        //Calls the login endpoint with NO login details
        $login = array(
            'email' => 'test@test.com',
            'password' => '1234'
        );


        $result = $this -> post('Login', $login);
        

        //d($_POST);

    }


};