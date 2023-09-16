<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class AuthenticationController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }
}
