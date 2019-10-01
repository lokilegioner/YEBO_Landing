let
    
    block = document.querySelector('.bg-title-image'),
    computed = window.getComputedStyle(block, null),
    img = new Image(),
    ratio = 1,
    value = 0,
    minWidthImage = 800,
    widthWindow = document.documentElement.clientWidth;

    function OnResize() {
        widthWindow = document.documentElement.clientWidth;
        if (widthWindow > minWidthImage) {
            block.style.height = widthWindow / ratio + 'px';
            block.style.backgroundSize = widthWindow + 'px';
            block.style.backgroundPositionX = 0;
        } else {
            ReposerImage();
            block.style.backgroundSize = minWidthImage + 'px';
            block.style.height = minWidthImage / ratio + 'px';
        }
    }

    function ReposerImage() {
        value = (minWidthImage - widthWindow) / 2 * -1;
        block.style.backgroundPositionX = value + 'px';
    }

    // after loading

    document.body.onload = function() {

        path = computed.getPropertyValue('background-image'); //get long path to image include webadress
        position = path.indexOf('image'); // position of start local path
        pathTo = path.slice(position, path.length-2); //get local path used start position of string
        img.src = pathTo; //set path of image to object

        widthImg = img.naturalWidth; //get size of file image
        heightImg = img.naturalHeight; //get size of file image
        ratio = widthImg / heightImg;

        OnResize();
    }

    window.addEventListener('resize', function() {
        OnResize();
    });


    

    


