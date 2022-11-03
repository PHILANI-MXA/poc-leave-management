<template>
    <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/4yg4RGbq/favicon-32x32.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item text-white">
             <router-link class="text-decoration-none text-white" to="/">Home</router-link>
            </li>
             <li class="nav-item text-decoration-none">
               <router-link class="text-decoration-none text-white" to="/about">About</router-link>
            </li>
               <li class="nav-item">
                <router-link class="text-decoration-none text-white" to="/books">Books</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-decoration-none text-white" to="/signup">Register</router-link>
            </li>
            <li class="nav-item">
                 <router-link class="text-decoration-none text-white" to="/login">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    <router-view/>
    </template>
    
    <style>
     @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
    
    * {
        font-family: Raleway, sans-serif;
    }
    .nav-item{
    position: relative;
    padding: 20px;
    font-size: larger;
    font-family: Raleway, sans-serif;
    color: #fff;
    }
    .navbar-brand{
      font-style: italic;
    }
    
    .btn{
      color: white;
      border-color: white;
    }
    
    nav {
    position:fixed;
    width: 100%;
    top: 0;
    background-color: #218bbd4c;
    z-index:50;
    }
    </style>