var express = require('express');
var router = express.Router();
var connection = require('../controllers/db');
var ip = require('ip');

router.get('/', function(req, res, next) {
  var sensordataquery = "SELECT s1, s2, s3 FROM msensors";
  connection.query(sensordataquery,[], function(error, result){

    var data = result[0];
    console.log('ip', ip.address());
    if(req.session.loggedin){
      res.render('index', {s: data});
    }else {
      res.redirect('/login');
    }
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.end();
});


module.exports = router;


/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Energy Monitoring & Load Control System</title>
        <!--bootstrap cdn css-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <!--main csss-->
        <link rel='stylesheet' href="stylesheets/index.css">
        <!--FontAwesome cdn-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <!--AnyChart cdn-->
        <script src="https://cdn.anychart.com/js/8.0.1/anychart-core.min.js"></script>
        <script src="https://cdn.anychart.com/js/8.0.1/anychart-pie.min.js"></script>
    </head>
    <body>
        <!--Navbar-->
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-primary text-white justify-content-sm-start fixed-top bg">
                <a class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto" href="#">Energy Monitoring</a>
                <button class="navbar-toggler align-self-start" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end mt-5 mt-lg-0 mobileMenu bg-primary text-white p-3 p-lg-0 bg" id="navbarSupportedContent">
                    <ul class="navbar-nav align-self-stretch">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div class="overlay"></div>
        </div>
        <section class='chart'>
            <div id="container" style="width: 100%; height: 100%"></div>
            <script>
                var data = [
                    {x: "Sensor 1", value: 50},
                    {x: "Sensor 2", value: 40},
                    {x: "Sensor 3", value: 50},
                ];
                anychart.onDocumentReady(function() {
                    // set the data
                

                    // create the chart
                    var chart = anychart.pie();

                    // set the chart title
                    chart.title("Sensor Data");

                    // add the data
                    chart.data(data);

                    // display the chart in the container
                    chart.container('container');
                    chart.draw();
                });
            </script>
        </section>
    </body>
</html>

<!--bootstrap script links-->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>


<script src="/javascripts/index.js"></script>



*/