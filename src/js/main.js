
$(document).ready(function() {

	// Initialise the avatar canvas
    var avatarModel = new AvatarModel(
    [
        // white
        {
            "skinColour": "#F7ECE0",
            "skinColourOutline": "#E4DBD0"
        },
        // Tan
        {
            "skinColour": "#FFE7CF", 
            "skinColourOutline": "#E1C1A7"
        },
        // Brown
        {
            "skinColour": "#B36F2B", 
            "skinColourOutline": "#A06122"
        },
        // Black
        {
            "skinColour": "#795742", 
            "skinColourOutline": "#5C4034"
        }
    ], 
    [
        // white
        {
            "hairColour": "#FFFFFF",
            "hairColourHighlights": "#E4E4E4"
        },
        // blue
        {
            "hairColour": "#47D1F3", 
            "hairColourHighlights": "#10BCE7"
        },
        // Pink
        {
            "hairColour": "#FF3CB1", 
            "hairColourHighlights": "#F40294"
        },
        // Green
        {
            "hairColour": "#33FF00", 
            "hairColourHighlights": "#30E302"
        },
        // Purple
        {
            "hairColour": "#CC33FF", 
            "hairColourHighlights": "#AC0FF0"
        },
        // Yellow 
        {
            "hairColour": "#F9E10F", 
            "hairColourHighlights": "#F8C44B"
        },
        // Ginger 
        {
            "hairColour": "#E26614", 
            "hairColourHighlights": "#BB5411"
        },
        // Brown 
        {
            "hairColour": "#674E43", 
            "hairColourHighlights": "#584141"
        },
        // Bluish 
        {
            "hairColour": "#394446", 
            "hairColourHighlights": "#2E3837"
        },
        // Grey
        {
            "hairColour": "#D8E1EB", 
            "hairColourHighlights": "#BCCCDC"
        }
    ],
    [
        // no shirt
        {
            "shirtSleeve": $('.avatar-sleeve-none')
        },
        // blue
        {
            "shirtColour": "#47D1F3", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // white
        {
            "shirtColour": "#FFFFFF",
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Pink
        {
            "shirtColour": "#FF3CB1", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Green
        {
            "shirtColour": "#33FF00", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Purple
        {
            "shirtColour": "#CC33FF", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Yellow 
        {
            "shirtColour": "#F9E10F", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Ginger 
        {
            "shirtColour": "#E26614", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Brown 
        {
            "shirtColour": "#674E43", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Bluish 
        {
            "shirtColour": "#394446", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Grey
        {
            "shirtColour": "#D8E1EB", 
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // white
        {
            "shirtColour": "#FFFFFF",
            "shirtColourHighlight": "#EEE", 
            "shirtSleeve": $('.avatar-sleeve-long')
        },
        // Brown 
        {
            "shirtColour": "#674E43", 
            "shirtColourHighlight": "#82695F", 
            "shirtSleeve": $('.avatar-sleeve-long')
        },
        // Bluish 
        {
            "shirtColour": "#394446", 
            "shirtColourHighlight": "#536063", 
            "shirtSleeve": $('.avatar-sleeve-long')
        },
        // Grey
        {
            "shirtColour": "#D8E1EB", 
            "shirtColourHighlight": "E9EEF3", 
            "shirtSleeve": $('.avatar-sleeve-long')
        }
    ],
    [
        // white
        {
            
        },
        // yellow/green 
        {
            "shirtColour": "#E3F733", 
            "shirtColourHighlight": "#B5D443", 
            "shirtColourChest": "#9BAB07", 
            "shirt": $('#avatar-female-shirt-stripe'),
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Blue
        {
            "shirtColour": "#3DCAED", 
            "shirtColourHighlight": "#16B1D8", 
            "shirtColourChest": "#1D8AB8", 
            "shirt": $('#avatar-female-shirt-stripe'),
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Yellow
        {
            "shirtColour": "#FFFF00", 
            "shirtColourHighlight": "#FC0", 
            "shirtColourChest": "#DBAF02", 
            "shirt": $('#avatar-female-shirt-stripe'),
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        {
            "shirtColour": "#F39", 
            "shirtColourHighlight": "#FB0404", 
            "shirtColourChest": "#D60F28", 
            "shirt": $('#avatar-female-shirt-stripe'),
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Yellow/green 
        {
            "shirtColour": "#E3F733", 
            "shirtColourChest": "#9BAB07", 
            "shirt": $('#avatar-female-shirt-base'),
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Blue
        {
            "shirtColour": "#3DCAED", 
            "shirtColourChest": "#1D8AB8", 
            "shirt": $('#avatar-female-shirt-base'),
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        // Yellow
        {
            "shirtColour": "#FFFF00", 
            "shirtColourChest": "#DBAF02", 
            "shirt": $('#avatar-female-shirt-base'),
            "shirtSleeve": $('.avatar-sleeve-short')
        },
        {
            "shirtColour": "#F39", 
            "shirtColourChest": "#D60F28", 
            "shirt": $('#avatar-female-shirt-base'),
            "shirtSleeve": $('.avatar-sleeve-short')
        }
    ],
    [
        {
            //no pants
        },
        // white
        {
            "pantsColour": "#FFF7EE",
        },
        // Tan
        {
            "pantsColour": "#FFE7CF",
        },
        // Brown
        {
            "pantsColour": "#B36F2B", 
        },
        // Black
        {
            "pantsColour": "#795742", 
        }
    ]
    );
    var avatarView = new AvatarView(avatarModel, {});
    var avatarController = new AvatarController(avatarModel, avatarView);
    avatarView.init();
})

function Event(sender) {
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {
    attach: function (listener) {
        this._listeners.push(listener);
    },
    notify: function (args) {
        var index;

        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    }
};


/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
function AvatarModel(skinColours, hairColours, maleShirtColours, femaleShirtColours, pantsColours) {

    this._genderSelector = $('.gender-group')
    this._genderIndex = 0

    this._skinSelector = $('.skin-group');
    this._skinIndex = 0
    this._skinColours = skinColours;

    this._eyeSelector = $('.eyes-group')
    this._eyeIndex = 0

    this._mouthSelector = $('.mouth-group')
    this._mouthIndex = 0

    this._hairSelector = $('.hair-group')
    this._hairIndex = 0

    this._hairColourSelector = $('.hair-colour-group')
    this._hairColourIndex = 0
    this._hairColours = hairColours;

    this._glassesSelector = $('.glasses-group')
    this._glassesIndex = 0

    this._shirtSelector = $('.shirt-group')
    this._maleShirtColours = maleShirtColours;
    this._maleShirtIndex = 0
    this._femaleShirtColours = femaleShirtColours;
    this._femaleShirtIndex = 0

    this._pantsSelector = $('.pants-group')
    this._pantsColours = pantsColours;
    this._pantsIndex = 0

    this._beltSelector = $('.belt-group')
    this._beltIndex = 0

    this._hatSelector = $('.hat-group')
    this._hatIndex = 0
}

AvatarModel.prototype = {

    /*
     * Draws the given option, or defaults to body
     */
    init: function () {
    	this.updateSkinColour(this._skinIndex)
        this.updateEyes(this._eyeIndex)
        this.updateMouth(this._mouthIndex)
        this.updateHair(this._hairIndex)
        this.updateHairColour(this._hairColourIndex)
        this.updateGlasses(this._glassesIndex)
        this.updateGender(this._genderIndex)
        this.updateShirt(this._maleShirtIndex)
        this.updatePants(this._pantsIndex)
        this.updateBelts(this._beltIndex)
        this.updateHats(this._hatIndex)
    }, 

    randomiseAvatar: function() { 
        this._skinIndex = this.randomNumber(0, this._skinColours.length)
        this._eyeIndex = this.randomNumber(0, $('.avatar-eyes').length)
        this._mouthIndex = this.randomNumber(0, $('.avatar-mouth').length)
        this._hairIndex = this.randomNumber(0, $('.avatar-hair').length)
        this._hairColourIndex = this.randomNumber(0, this._hairColours.length)
        this._glassesIndex = this.randomNumber(0, $('.avatar-glasses').length)
        this._genderIndex = this.randomNumber(0, 1)
        this._maleShirtIndex = this.randomNumber(0, this._maleShirtColours.length)
        this._femaleShirtIndex = this.randomNumber(0, this._femaleShirtColours.length)
        this._pantsIndex = this.randomNumber(0, this._pantsColours.length)
        this._beltIndex = this.randomNumber(0, $('.avatar-male-belt').length)
        this._hatIndex = this.randomNumber(0, $('.avatar-hats').length)

        // Re-initialise the avatar
        this.init()
    },

    randomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    resetAvatar: function() {
        // Reset all the indices 
        this._skinIndex = 0
        this._eyeIndex = 0
        this._mouthIndex = 0
        this._hairIndex = 0
        this._hairColourIndex = 0
        this._glassesIndex = 0
        this._genderIndex = 0
        this._shirtIndex = 0
        this._pantsIndex = 0
        this._beltIndex = 0
        this._hatIndex = 0

        // Re-initialise the avatar
        this.init()
    },

    saveAvatar: function() {
        canvg('canvas', '<svg>' + $("#avatarCanvas").html() + '</svg>');

        var canvas = document.getElementById("canvas");
        var img = canvas.toDataURL("image/png")

        // console.log(canvas.toDataURL("image/png"))

        // $('.chart').html(img_PNG)
        // var chart = $('#avatarCanvas').attr('xmlns', 'http://www.w3.org/2000/svg');
        // var width = chart.width();
        // var height = chart.height();

        // var data = new XMLSerializer().serializeToString(chart.get(0));
        // var svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
        // var url = URL.createObjectURL(svg);

        // var img = $('<img />')
        //     .width(width)
        //     .height(height)
        //     .on('load', function() {
        //         var canvas = document.createElement('canvas');
        //         canvas.width = width;
        //         canvas.height = height;
        //         var ctx = canvas.getContext('2d');
        //         ctx.drawImage(img.get(0), 0, 0);
        //         canvas.toBlob(function(blob) {
        //             saveAs(blob, "test.png");
        //         });
        //     });
        // img.attr('src', url);
    },

    updateSkinColour: function(skinIndex) {
    	if (skinIndex >= this._skinColours.length) {
    		skinIndex = 0;
    	}
    	if (skinIndex < 0) {
    		skinIndex = this._skinColours.length-1;
    	}
    	this._skinIndex = skinIndex

    	$('.skin-colour-outline').css( "color", this._skinColours[this._skinIndex].skinColourOutline )
    	$('.skin-colour').css( "color", this._skinColours[this._skinIndex].skinColour )
    },

    updateEyes: function(eyeIndex) {
        if (eyeIndex >= $('.avatar-eyes').length) { 
            eyeIndex = 0;
        }
        if (eyeIndex < 0) {
            eyeIndex = $('.avatar-eyes').length-1;
        }
        this._eyeIndex = eyeIndex;
        $('.avatar-eyes').hide()
        $('.avatar-eyes').eq( eyeIndex ).show()
    },

    updateMouth: function(mouthIndex) { 
        if (mouthIndex >= $('.avatar-mouth').length) { 
            mouthIndex = 0;
        }
        if (mouthIndex < 0) {
            mouthIndex = $('.avatar-mouth').length-1;
        }
        this._mouthIndex = mouthIndex;
        $('.avatar-mouth').hide()
        $('.avatar-mouth').eq( mouthIndex ).show()
    },

    updateHair: function(hairIndex) {
        if (hairIndex >= $('.avatar-hair').length) { 
            hairIndex = 0;
        }
        if (hairIndex < 0) {
            hairIndex = $('.avatar-hair').length-1;
        }
        this._hairIndex = hairIndex;
        $('.avatar-hair').hide()
        $('.avatar-hair').eq( hairIndex ).show()
    },

    updateHairColour: function(hairIndex) {
        if (hairIndex >= this._hairColours.length) {
            hairIndex = 0;
        }
        if (hairIndex < 0) {
            hairIndex = this._hairColours.length-1;
        }
        this._hairColourIndex = hairIndex
        $('.hair-colour-highlights').css( "color", this._hairColours[this._hairColourIndex].hairColourHighlights )
        $('.hair-colour').css( "color", this._hairColours[this._hairColourIndex].hairColour )
    },

    updateGlasses: function(glassesIndex) { 
        if (glassesIndex >= $('.avatar-glasses').length) {
            glassesIndex = 0;
        }
        if (glassesIndex < 0) {
            glassesIndex = $('.avatar-glasses').length - 1;
        }
        this._glassesIndex = glassesIndex
        $('.avatar-glasses').hide();
        $('.avatar-glasses').eq( glassesIndex ).show()
    },

    updateGender : function(genderIndex) { 
        if (genderIndex >= $('.avatar-body').length) {
            genderIndex = 0;
        }
        if (genderIndex < 0) {
            genderIndex = $('.avatar-body').length - 1;
        }
        this._genderIndex = genderIndex
        $('.avatar-body').hide()
        $('.avatar-body').eq( genderIndex ).show()

        // Maybe need to change the clothes when changing gender
        this.updateShirt(0)
        this.updateBelts(this._beltIndex)
    },

    updateShirt : function(shirtIndex) { 
        $('.avatar-sleeve').hide()
        $('.avatar-female-shirt').hide()
        $('#avatar-male-shirt').hide()

        if(this._genderIndex === 0) {
            shirtIndex = this._maleShirtIndex + shirtIndex;
            if (shirtIndex >= this._maleShirtColours.length) {
                shirtIndex = 0;
            }
            if (shirtIndex < 0) {
                shirtIndex = this._maleShirtColours.length - 1;
            }
            this._maleShirtIndex = shirtIndex
            this._maleShirtColours[this._maleShirtIndex].shirtSleeve.show()
            if("shirtColourHighlight" in this._maleShirtColours[this._maleShirtIndex]) {
                $('.shirt-colour-highlight').css( "color", this._maleShirtColours[this._maleShirtIndex].shirtColourHighlight )
            }
            if("shirtColour" in this._maleShirtColours[this._maleShirtIndex]) {
                $('#avatar-male-shirt').show()
                $('.shirt-colour').css( "color", this._maleShirtColours[this._maleShirtIndex].shirtColour )
            } else {
                $('#avatar-male-shirt').hide()
            }
        } else {
            $('.avatar-female-shirt').hide()
            $('.avatar-sleeve').hide()
            shirtIndex = this._femaleShirtIndex + shirtIndex;
            if (shirtIndex >= this._femaleShirtColours.length) {
                shirtIndex = 0;
            }
            if (shirtIndex < 0) {
                shirtIndex = this._femaleShirtColours.length - 1;
            }
            this._femaleShirtIndex = shirtIndex

            if("shirt" in this._femaleShirtColours[this._femaleShirtIndex]) {
                this._femaleShirtColours[this._femaleShirtIndex].shirt.show()
                this._femaleShirtColours[this._femaleShirtIndex].shirtSleeve.show()
            }
            if("shirtColourHighlight" in this._femaleShirtColours[this._femaleShirtIndex]) {
                $('.shirt-colour-highlight').css( "color", this._femaleShirtColours[this._femaleShirtIndex].shirtColourHighlight )
            }
            if("shirtColourChest" in this._femaleShirtColours[this._femaleShirtIndex]) {
                $('.shirt-colour-chest').css( "color", this._femaleShirtColours[this._femaleShirtIndex].shirtColourChest )
            }
            if("shirtColour" in this._femaleShirtColours[this._femaleShirtIndex]) {
                $('.shirt-colour').css( "color", this._femaleShirtColours[this._femaleShirtIndex].shirtColour )
            } else {
                $('.avatar-female-shirt').hide()
            }

        }
    },

    updatePants : function(pantsIndex) { 
        if (pantsIndex >= this._pantsColours.length) {
            pantsIndex = 0;
        }
        if (pantsIndex < 0) {
            pantsIndex = this._pantsColours.length-1;
        }

        this._pantsIndex = pantsIndex

        $('#avatar-male-pants').hide()
        if("pantsColour" in this._pantsColours[this._pantsIndex]) {
            $('#avatar-male-pants').show()
            $('.pants-colour').css( "color", this._pantsColours[this._pantsIndex].pantsColour )
        } 
    },

    updateBelts: function(beltIndex) { 
        $('#male-belt').hide()
        $('#female-belt').hide()

        if (this._genderIndex === 0) {

            $('#male-belt').show()
            $('.avatar-male-belt').hide()

            if (beltIndex >= $('.avatar-male-belt').length) {
                beltIndex = 0;
            }
            if (beltIndex < 0) {
                beltIndex = $('.avatar-male-belt').length - 1;
            }

            this._beltIndex = beltIndex

            $('.avatar-male-belt').eq( beltIndex ).show()

        } else { 
            $('#female-belt').show()
            $('.avatar-female-belt').hide()

            if (beltIndex >= $('.avatar-female-belt').length) {
                beltIndex = 0;
            }
            if (beltIndex < 0) {
                beltIndex = $('.avatar-female-belt').length - 1;
            }

            this._beltIndex = beltIndex

            $('.avatar-female-belt').eq( beltIndex ).show()
        }
    },

    updateHats: function(hatIndex) { 
        if (hatIndex >= $('.avatar-hats').length) {
            hatIndex = 0;
        }
        if (hatIndex < 0) {
            hatIndex = $('.avatar-hats').length - 1;
        }
        this._hatIndex = hatIndex
        $('.avatar-hats').hide();
        $('.avatar-hats').eq( hatIndex ).show()
    },
};

/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interraction.
 */
function AvatarView(model, elements) {
    this._model = model;

    var _this = this;

    this.skinIncrementClicked = new Event(this);
    this.skinDecrementClicked = new Event(this);

    this.eyeIncrementClicked = new Event(this);
    this.eyeDecrementClicked = new Event(this);

    this.mouthIncrementClicked = new Event(this);
    this.mouthDecrementClicked = new Event(this);

    this.hairIncrementClicked = new Event(this);
    this.hairDecrementClicked = new Event(this);

    this.hairColourIncrementClicked = new Event(this);
    this.hairColourDecrementClicked = new Event(this);

    this.glassesIncrementClicked = new Event(this);
    this.glassesDecrementClicked = new Event(this);

    this.genderIncrementClicked = new Event(this);
    this.genderDecrementClicked = new Event(this);

    this.shirtIncrementClicked = new Event(this);
    this.shirtDecrementClicked = new Event(this);

    this.pantsIncrementClicked = new Event(this);
    this.pantsDecrementClicked = new Event(this);

    this.beltsIncrementClicked = new Event(this);
    this.beltsDecrementClicked = new Event(this);

    this.hatIncrementClicked = new Event(this);
    this.hatDecrementClicked = new Event(this);

    this.randomiseClicked = new Event(this);
    this.resetClicked = new Event(this)
    this.saveClicked = new Event(this)


    // attach listeners to HTML controls
    this._model._skinSelector.find('.selector-left').bind("click", function(event) { 
        _this.skinDecrementClicked.notify(event)
    });
    this._model._skinSelector.find('.selector-right').bind("click", function(event) { 
        _this.skinIncrementClicked.notify(event)
    });

    this._model._eyeSelector.find('.selector-left').bind("click", function(event) { 
        _this.eyeDecrementClicked.notify(event)
    });
    this._model._eyeSelector.find('.selector-right').bind("click", function(event) { 
        _this.eyeIncrementClicked.notify(event)
    });

    this._model._mouthSelector.find('.selector-left').bind("click", function(event) { 
        _this.mouthDecrementClicked.notify(event)
    });
    this._model._mouthSelector.find('.selector-right').bind("click", function(event) { 
        _this.mouthIncrementClicked.notify(event)
    });
    this._model._hairSelector.find('.selector-left').bind("click", function(event) { 
        _this.hairDecrementClicked.notify(event)
    });
    this._model._hairSelector.find('.selector-right').bind("click", function(event) { 
        _this.hairIncrementClicked.notify(event)
    });
    this._model._hairColourSelector.find('.selector-left').bind("click", function(event) { 
        _this.hairColourDecrementClicked.notify(event)
    });
    this._model._hairColourSelector.find('.selector-right').bind("click", function(event) { 
        _this.hairColourIncrementClicked.notify(event)
    });

    this._model._glassesSelector.find('.selector-left').bind("click", function(event) { 
        _this.glassesDecrementClicked.notify(event)
    });
    this._model._glassesSelector.find('.selector-right').bind("click", function(event) { 
        _this.glassesIncrementClicked.notify(event)
    });

    this._model._genderSelector.find('.selector-left').bind("click", function(event) { 
        _this.genderIncrementClicked.notify(event)
    });
    this._model._genderSelector.find('.selector-right').bind("click", function(event) { 
        _this.genderDecrementClicked.notify(event)
    });

    this._model._shirtSelector.find('.selector-left').bind("click", function(event) { 
        _this.shirtIncrementClicked.notify(event)
    });
    this._model._shirtSelector.find('.selector-right').bind("click", function(event) { 
        _this.shirtDecrementClicked.notify(event)
    });

    this._model._pantsSelector.find('.selector-left').bind("click", function(event) { 
        _this.pantsIncrementClicked.notify(event)
    });
    this._model._pantsSelector.find('.selector-right').bind("click", function(event) { 
        _this.pantsDecrementClicked.notify(event)
    });
    this._model._beltSelector.find('.selector-left').bind("click", function(event) { 
        _this.beltsIncrementClicked.notify(event)
    });
    this._model._beltSelector.find('.selector-right').bind("click", function(event) { 
        _this.beltsDecrementClicked.notify(event)
    });
    this._model._hatSelector.find('.selector-left').bind("click", function(event) { 
        _this.hatIncrementClicked.notify(event)
    });
    this._model._hatSelector.find('.selector-right').bind("click", function(event) { 
        _this.hatDecrementClicked.notify(event)
    });

    $('.btn-randomise').bind("click", function(event) { 
        _this.randomiseClicked.notify(event)
    })

    $('.btn-reset').bind("click", function(event) { 
        _this.resetClicked.notify(event)
    })

    $('.btn-save').bind("click", function(event) { 
        _this.saveClicked.notify(event)
    })
}

AvatarView.prototype = {

    /* 
     * Draw the canvas
     */
    init: function () {
        this._model.init();   
    },
};


function AvatarController(model, view) {
    this._model = model;
    this._view  = view;

    var _this   = this;

    this._view.skinIncrementClicked.attach(function (evt) {
        _this.changeSkinColour(++_this._model._skinIndex)
    });
    this._view.skinDecrementClicked.attach(function (evt) {
        _this.changeSkinColour(--_this._model._skinIndex)
    });
    this._view.eyeIncrementClicked.attach(function (evt) {
        _this.changeEyes(++_this._model._eyeIndex)
    });
    this._view.eyeDecrementClicked.attach(function (evt) {
        _this.changeEyes(--_this._model._eyeIndex)
    });
    this._view.mouthIncrementClicked.attach(function (evt) {
        _this.changeMouth(++_this._model._mouthIndex)
    });
    this._view.mouthDecrementClicked.attach(function (evt) {
        _this.changeMouth(--_this._model._mouthIndex)
    });
    this._view.hairIncrementClicked.attach(function (evt) {
        _this.changeHair(++_this._model._hairIndex)
    });
    this._view.hairDecrementClicked.attach(function (evt) {
        _this.changeHair(--_this._model._hairIndex)
    });
    this._view.hairColourIncrementClicked.attach(function (evt) {
        _this.changeHairColour(++_this._model._hairColourIndex)
    });
    this._view.hairColourDecrementClicked.attach(function (evt) {
        _this.changeHairColour(--_this._model._hairColourIndex)
    });
    this._view.glassesIncrementClicked.attach(function (evt) {
        _this.changeGlasses(++_this._model._glassesIndex)
    });
    this._view.glassesDecrementClicked.attach(function (evt) {
        _this.changeGlasses(--_this._model._glassesIndex)
    });
    this._view.genderIncrementClicked.attach(function (evt) {
        _this.changeGender(++_this._model._genderIndex)
    });
    this._view.genderDecrementClicked.attach(function (evt) {
        _this.changeGender(--_this._model._genderIndex)
    });
    this._view.shirtIncrementClicked.attach(function (evt) {
        _this.changeShirt(1)
    });
    this._view.shirtDecrementClicked.attach(function (evt) {
        _this.changeShirt(-1)
    });
    this._view.pantsIncrementClicked.attach(function (evt) {
        _this.changePants(++_this._model._pantsIndex)
    });
    this._view.pantsDecrementClicked.attach(function (evt) {
        _this.changePants(--_this._model._pantsIndex)
    });
    this._view.beltsIncrementClicked.attach(function (evt) {
        _this.changeBelts(++_this._model._beltIndex)
    });
    this._view.beltsDecrementClicked.attach(function (evt) {
        _this.changeBelts(--_this._model._beltIndex)
    });
    this._view.hatIncrementClicked.attach(function (evt) {
        _this.changeHats(++_this._model._hatIndex)
    });
    this._view.hatDecrementClicked.attach(function (evt) {
        _this.changeHats(--_this._model._hatIndex)
    });
    this._view.randomiseClicked.attach(function (evt) {
        _this.randomiseAvatar()
    });
    this._view.resetClicked.attach(function (evt) {
        _this.resetAvatar()
    });
    this._view.saveClicked.attach(function (evt) {
        _this.saveAvatar()
    });
}

AvatarController.prototype = {
    changeGender : function (option) {
        this._model.updateGender(option)
    },
    changeSkinColour : function (option) {
        this._model.updateSkinColour(option)
    },
    changeEyes : function (option) {
        this._model.updateEyes(option)
    },
    changeMouth : function (option) {
        this._model.updateMouth(option)
    },
    changeHair : function (option) {
        this._model.updateHair(option)
    },
    changeHairColour : function (option) {
        this._model.updateHairColour(option)
    },
    changeGlasses : function (option) {
        this._model.updateGlasses(option)
    },
    changeShirt : function (option) { 
        this._model.updateShirt(option)
    },
    changePants : function (option) { 
        this._model.updatePants(option)
    },
    changeBelts : function (option) { 
        this._model.updateBelts(option)
    },
    changeHats : function (option) { 
        this._model.updateHats(option)
    },
    randomiseAvatar : function () {
        this._model.randomiseAvatar()
    },
    resetAvatar : function () {
        this._model.resetAvatar()
    },
    saveAvatar : function () { 
        this._model.saveAvatar()
    }
};

