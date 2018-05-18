$.ajax({
        url: "http://api.tumblr.com/v2/blog/manonthestreet.tumblr.com/posts?api_key=rX9xaWvvjCYmGeQACbnThWAyqUJ7LcBqh58DYqG2XKZJ8K5nhk",
        dataType: 'jsonp',
        success: function(posts){
          var postings = posts.response.posts;
          console.log(postings);
          var text = '';
    for (var i in postings) {
           var p = postings[i];
          text += '<p></p>';
      if(p.type == 'photo'){
        text +='<img src=' +  p.photos[0].original_size.url + ' class="responsive-image">' + p.caption
      }
        if(p.type == 'video'){
        text += p.player[0].embed_code +'<p></p>' + p.caption;
      }
          if(p.type == 'text'){
        text += p.body + p.caption;
      }
    text += '<a href='+ p.post_url +'>'+ p.post_url +'</a></li>';
          text += '<br></br>';
          }
          $('#content').append(text);
        }
    });
