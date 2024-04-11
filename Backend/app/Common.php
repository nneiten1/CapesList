<?php

/**
 * The goal of this file is to allow developers a location
 * where they can overwrite core procedural functions and
 * replace them with their own. This file is loaded during
 * the bootstrap process and is called during the framework's
 * execution.
 *
 * This can be looked at as a `master helper` file that is
 * loaded early on, and may also contain additional functions
 * that you'd like to use throughout your entire application
 *
 * @see: https://codeigniter.com/user_guide/extending/common.html
 */


    /**
     * Function to cleanse array data, mostly used for POSTED data
     * 
     * @param $postedArray - the $_POST array
     * @param $key - the key in the $_POST array to sanitize 
     * 
     * @return $cleansedData - the cleansed data from the input array
     */
    function cleansePostData($postedArray, $key) {
        //Temp array to hold cleansed data
        $cleansedData = [];

        //Iterates through and cleanses the data
        foreach( $postedArray[$key] as $key => $value) {
            if ($value != NULL) {   //Has data
                $cleansedData[$key] = esc($value);
            }
        }

        return $cleansedData;
    }



 ?>