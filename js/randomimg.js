var random_images_array = ['durbar-square.jpg', 'lo-cai-Village-schoolgirl-sapa.jpg', 'bangkok-moto-taxi.jpg', 'bangkok-china-town-lion.jpg', 'sunset.jpg', 'sikkim-himalayas.jpg', 'nepal.jpg', 'wyoming.jpg'];

function getRandomImage(imgAr, path) {
    path = path || 'img/random/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "ManOnTheStreet.com" class="responsive-image">';
    document.write(imgStr); document.close();
}
