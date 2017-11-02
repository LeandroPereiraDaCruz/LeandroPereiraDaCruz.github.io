$(function() {

    var about = function() {
        $('#body').load('pages/about.html');
    }

    var contact = function() {
        $('#body').load('pages/contact.html');
    }

    var posts = function() {
        $('#body').load('pages/posts.html');
        $.getJSON("data/posts.json", function(data) {
            $.each( data, function( key, val ) {
                $("<div class=\"row justify-content-center\">"+
                    "<div class=\"col\">"+
                        "<a href=\"post/" + val.id + ".html\">" +
                            "<h2>" + val.title + "</h2>" +
                        "</a>" +
                        "<h5>" +
                            "<a class=\"btn btn-primary btn-facebook btn-sm\">"+
                                "<i class=\"fa fa-facebook\"></i> Compartilhar"+
                            "</a> "+
                            val.created + " " + val.category +
                        "</h5>"+
                        "<div>" + val.body + "</div>"+
                        "<h5><Deixe seu comentário abaixo:/h5>"+
                        "<div class=\"fb-comments\" data-href=\"https://leandropereiradacruz.github.io/post/" + val.id + ".html\" data-numposts=\"5\"></div>"+
                        "<br/>"+
                        "<hr/>"+
                    "<div/>"+
                   "</div>"
                ).appendTo("#posts");
            });            
        });
  }


    //------------load the pages ----->
    $('#myBody').append('<header id="header"></header><div id="topMenu"></div><br/><div id="body"></div><footer class="footer" id="footer"></footer>');

    var load = function() {
        $('#header').load('/pages/header.html');
        $('#topMenu').load('/pages/topmenu.html');
        switch (page) {
            case 'index.html': posts(); break;
            case 'contact.html': contact(); break;
            case 'about.html': about(); break;
            default: posts();
        }
        $('#footer').load('/pages/footer.html');
    }


    var page = location.pathname.split('/').slice(-1)[0];
    load();
})