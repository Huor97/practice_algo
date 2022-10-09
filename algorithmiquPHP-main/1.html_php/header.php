<?php
require_once 'functions.php';
?><!doctype html>
<html lang="en">
  <header>

    <meta charset="utf-8">
    <title><?php if(isset($title)){ echo $title;} else{ echo 'mon site';} ?></title>   
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

  </header>

  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">

      <a class="navbar-brand" href="#">Mon site</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" >
          <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
        <?= nav_menu('nav-link') ?>
        </ul>
      </div>

  </nav>

  <main>