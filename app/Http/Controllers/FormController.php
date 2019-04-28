<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function store(Request $request) {
        
        
        $valid = \Validator::make($request -> json() -> all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'emailaddress' => 'required',
            'mobilenumber' => 'required',
            'gender' => 'required',
            'dateofbirth' => 'required',
            'comments' => 'required'
            
        ]);
        if ($valid -> fails()) {
            return \Response::json($valid -> errors(), 400);
        }

        $firstname = $request->input('firstname');
        $lastname = $request->input('lastname');
        $emailaddress = $request->input('emailaddress');
        $mobilenumber = $request->input('mobilenumber');
        $gender = $request->input('gender');
        $dateofbirth = $request->input('dateofbirth');
        $comments = $request->input('comments');

        $user = new \App\UserForm;
        $user->firstname = $firstname;
        $user->lastname = $lastname;
        $user->emailaddress = $emailaddress;
        $user->mobilenumber = $mobilenumber;
        $user->gender = $gender;
        $user->dateofbirth = $dateofbirth;
        $user->comments = $comments;
        $user->save();

        return response()->json([ 'success' => true, 'message' => 'saved' ]);


        
       
    

       



        
    }
}
