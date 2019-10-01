let
    image = document.getElementById('bicycle-wheel'),
    computed = window.getComputedStyle(image, null),
    block = document.getElementById('block-wheel'),
    img = new Image(),
    widthWindow = document.documentElement.clientWidth;

    function OnResize() {
        computedRealTime = window.getComputedStyle(image, null);
        block.style.height = computedRealTime.getPropertyValue('height');
        widthWindow = document.documentElement.clientWidth;
    }

    function ReposerImage() {
        if (widthWindow < 843) {
            image.style.left = (image.width - widthWindow) / 2 * -1 + 'px';
        }
    }

    // after loading

    document.body.onload = function() {

        path = computed.getPropertyValue('background-image'); //get long path to image include webadress
        position = path.indexOf('image'); // position of start local path
        pathTo = path.slice(position, path.length-2); //get local path used start position of string
        img.src = pathTo; //set path of image to object

        widthImg = img.naturalWidth; //get size of file image
        heightImg = img.naturalHeight; //get size of file image

        block.style.height = computed.getPropertyValue('height'); //set block Height on after load
        w = document.documentElement.clientWidth;

        OnResize();
        ReposerImage();
    }

    window.addEventListener('resize', function() {
        OnResize();
        ReposerImage();
    });


    

    


