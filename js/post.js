$(function(){
    $('#body').load('/pages/posts.html');
    $.getJSON("/data/posts.json", function(data) {
        var page = location.pathname.split('/').slice(-1)[0];
        var index = page.slice(0,-5);
        alert(index);
        var val = data[index];
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
                "<br/>"+
                "<hr/>"+
            "<div/>"+
           "</div>"           
        ).appendTo("#posts");
    });
})