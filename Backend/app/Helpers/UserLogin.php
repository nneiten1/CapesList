<?php

/**
 * Function to validate the login for a profile
 * 
 * @param $postedLogin - The login details from the application
 * @param $storedLogin - The login details from the database
 * 
 * @return bool - Whether the login was valid
 */
function validateUserLogin($postedLogin, $storedLogin) {
    //Cleansing the posted data
    $escUser = esc($postedLogin['email']);
    $escPassword = esc($postedLogin['password']);

    //Now check if they are equal
    if ($escUser == $storedLogin['user']) {
        //Now check if passwords are equal
        if ($escPassword == $storedLogin['password']) {
            return true;    //Logins match
        }
    } 

    //Login credentials do not match
    return false;
}




?>