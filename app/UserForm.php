<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserForm extends Model
{
    protected $fillable = ['firstname', 'lastname', 'emailaddress', 'mobilenumber', 'gender', 'dateofbirth', 'comments'];
}
