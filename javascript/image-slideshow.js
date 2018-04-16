    var displayWaitMessage = true; // Display a please wait message while images are loading?
    var activeImage = false;
    var imageGalleryLeftPos = false;
    var imageGalleryWidth = false;
    var imageGalleryObj = false;
    var maxGalleryXPos = false;
    var slideSpeed = 0;
    var imageGalleryCaptions = new Array();

    // function startSlide(e) {
    //     if (document.all) e = event;
    //     var id = this.id;
    //     this.getElementsByTagName('IMG')[0].src = 'images/' + this.id + '_over.gif';
    //     if (this.id == 'arrow_right') {
    //         slideSpeedMultiply = Math.floor((e.clientX - this.offsetLeft) / 5);
    //         slideSpeed = -1 * slideSpeedMultiply;
    //         slideSpeed = Math.max(-10, slideSpeed);
    //     } else {
    //         slideSpeedMultiply = 10 - Math.floor((e.clientX - this.offsetLeft) / 5);
    //         slideSpeed = 1 * slideSpeedMultiply;
    //         slideSpeed = Math.min(10, slideSpeed);
    //         if (slideSpeed < 0) slideSpeed = 10;
    //     }
    // }

    // function releaseSlide() {
    //     var id = this.id;
    //     this.getElementsByTagName('IMG')[0].src = 'images/' + this.id + '.gif';
    //     slideSpeed = 0;
    // }

    // function gallerySlide() {
    //     if (slideSpeed != 0) {
    //         var leftPos = imageGalleryObj.offsetLeft;
    //         leftPos = leftPos / 1 + slideSpeed;
    //         if (leftPos > maxGalleryXPos) {
    //             leftPos = maxGalleryXPos;
    //             slideSpeed = 0;

    //         }
    //         if (leftPos < minGalleryXPos) {
    //             leftPos = minGalleryXPos;
    //             slideSpeed = 0;
    //         }

    //         imageGalleryObj.style.left = leftPos + 'px';
    //     }
    //     setTimeout('gallerySlide()', 20);
    // }

    // function showImage() {
    //     if (activeImage) {
    //         activeImage.style.filter = 'alpha(opacity=50)';
    //         activeImage.style.opacity = 0.5;
    //     }
    //     this.style.filter = 'alpha(opacity=100)';
    //     this.style.opacity = 1;
    //     activeImage = this;
    // }

    // function initSlideShow() {
    //     imageGalleryObj = document.getElementById('theImages');
    //     imageGalleryLeftPos = imageGalleryObj.offsetLeft;
    //     var galleryContainer = document.getElementById('galleryContainer');
    //     imageGalleryWidth = galleryContainer.offsetWidth - 80;
    //     maxGalleryXPos = imageGalleryObj.offsetLeft;
    //     minGalleryXPos = imageGalleryWidth - document.getElementById('slideEnd').offsetLeft;

    //     if (navigator.userAgent.indexOf('MSIE') >= 0) {
    //         var arrowWidth = document.getElementById('arrow_left').offsetWidth;
    //         var el = document.createElement('div');
    //         el.style.position = 'absolute';
    //         el.style.left = arrowWidth + 'px';
    //         el.style.width = (galleryContainer.offsetWidth - arrowWidth * 2) + 'px';
    //         el.style.overflow = 'hidden';
    //         el.style.height = '100%';

    //         document.getElementById('galleryContainer').appendChild(el);
    //         el.appendChild(document.getElementById('theImages'));
    //     }
    //     var slideshowImages = imageGalleryObj.getElementsByTagName('IMG');
    //     for (var no = 0; no < slideshowImages.length; no++) {
    //         slideshowImages[no].onmouseover = showImage;
    //     }

    //     var divs = imageGalleryObj.getElementsByTagName('DIV');
    //     for (var no = 0; no < divs.length; no++) {
    //         if (divs[no].className == 'imageCaption') imageGalleryCaptions[imageGalleryCaptions.length] = divs[no].innerHTML;
    //     }
    //     gallerySlide();
    // }

    // function showPreview(imagePath, imageIndex) {
    //     var subImages = document.getElementById('previewPane').getElementsByTagName('IMG');
    //     if (subImages.length == 0) {
    //         var img = document.createElement('IMG');
    //         document.getElementById('previewPane').appendChild(img);
    //     } else img = subImages[0];

    //     if (displayWaitMessage) {
    //         document.getElementById('waitMessage').style.display = 'inline';
    //     }
    //     document.getElementById('largeImageCaption').style.display = 'none';
    //     img.onload = function () {
    //         hideWaitMessageAndShowCaption(imageIndex - 1);
    //     };
    //     img.src = imagePath;
    // }

    // function hideWaitMessageAndShowCaption(imageIndex) {
    //     document.getElementById('waitMessage').style.display = 'none';
    //     document.getElementById('largeImageCaption').innerHTML = imageGalleryCaptions[imageIndex];
    //     document.getElementById('largeImageCaption').style.display = 'block';
    // }

    window.onload = setTimeout(function () {
        renderModel('hiranyakashipu');
    }, 500);

    function renderModel(modelName) {
        switch (modelName.toLowerCase()) {
            case 'natalie':
                natalie();
                break;
            case 'man':
                man();
                break;
            case 'hiranyakashipu':
                hiranyakashipu();
                break;
            case 'mace':
                mace();
                break;
            default:
                Help();
                break;
        }

        setTimeout(function () {
            render();
        }, 100);
    }

    function Help() {
        var cameraz = 17;
        var objy = -6;
        init(cameraz, objy, 'Hiranyakashipu');
    }

    function natalie() {
        var cameraz = 30;
        var objy = -10;
        addSelected('Natalie');
        init(cameraz, objy, 'Natalie');
    }

    function man() {
        var cameraz = 250;
        var objy = -90;
        addSelected('Mace');
        init(cameraz, objy, 'Man');
    }

    function hiranyakashipu() {
        var cameraz = 17;
        var objy = -6;
        addSelected('hiranyakashipu');
        init(cameraz, objy, 'Hiranyakashipu');
    }

    function mace() {
        var cameraz = 14;
        var objy = -5;
        addSelected('Mace');
        init(cameraz, objy, 'Mace');
    }

    function addSelected(modelName) {
        var images = document.querySelectorAll(".model-thumbs");
        images.forEach(function (a) {
            a.style.opacity = "0.5";
        });

        var model = document.querySelector('.' + modelName);
        if (model)  {
            model.style.opacity = "1";
        } else {
            renderModel(modelName);
        }
    }