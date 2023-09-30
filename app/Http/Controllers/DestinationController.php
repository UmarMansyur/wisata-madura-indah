<?php


namespace App\Http\Controllers;

use Inertia\Inertia;

class DestinationController extends Controller {
    public function index() {
        return Inertia::render('Destination/Index');
    }
}