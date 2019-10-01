let
    image = document.getElementById('bicycle-wheel'),
    computed = window.getComputedStyle(image, null),
    block = document.getElementById('block-wheel'),
    img = new Image(),
    onresize = function() {
        computedRealTime = window.getComputedStyle(image, null);
        block.style.height = computedRealTime.getPropertyValue('height');
    }

    path = computed.getPropertyValue('background-image');
    
    position = path.indexOf('image');
    pathTo = path.slice(position, path.length-2);
    img.src = pathTo;

    widthImg = img.naturalWidth;
    heightImg = img.naturalHeight;

    window.addEventListener('resize', onresize);


    block.style.height = computed.getPropertyValue('height');


