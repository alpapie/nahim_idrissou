<script>
  import Footer from "./footer.svelte";
import Header from "./header.svelte";
  import Loader from "./loader.svelte";

</script>

<html class="no-js" lang="en">
  <head>
    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Laralink">
    <!-- Favicon Icon -->
    <link rel="icon" href="/img/favicon.png">
    <!-- Site Title -->
    <title>ProHealth - Medical and Healthcare Template</title>
    <link rel="stylesheet" href="/css/plugins/bootstrap.min.css">
    <link rel="stylesheet" href="/css/plugins/fontawesome.min.css">
    <link rel="stylesheet" href="/css/plugins/animate.css">
    <link rel="stylesheet" href="/css/plugins/slick.css">
    <link rel="stylesheet" href="/css/plugins/odometer.css">
    <link rel="stylesheet" href="/css/plugins/lightgallery.min.css">
    <link rel="stylesheet" href="/css/plugins/jquery.timepicker.min.css">
    <link rel="stylesheet" href="/css/plugins/jquery-ui.css">
    <link rel="stylesheet" href="/css/plugins/select2.min.css">
    <link rel="stylesheet" href="/css/plugins/animated-headline.css">
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <Loader/>
    <Header/>
    <slot/>
    <Footer/>
    <!-- Script -->
    <script src="/js/plugins/jquery-3.6.0.min.js"></script>
    <script src="/js/plugins/wow.min.js"></script>
    <script src="/js/plugins/slick.min.js"></script>
    <script src="/js/plugins/odometer.js"></script>
    <script src="/js/plugins/isotope.pkg.min.js"></script>
    <script src="/js/plugins/lightgallery.min.js"></script>
    <script src="/js/plugins/jquery.timepicker.min.js"></script>
    <script src="/js/plugins/jquery-ui.js"></script>
    <script src="/js/plugins/select2.min.js"></script>
    <script src="/js/plugins/ripples.min.js"></script>
    <script src="/js/plugins/gsap.min.js"></script>
    <script src="/js/plugins/animated-headline.js"></script>
    <script src="/js/main.js"></script>
  </body>
</html>
 