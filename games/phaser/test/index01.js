var game = new Phaser.Game(1067, 600, Phaser.CANVAS, 'gameContainer', {

    keys: null,

    preload: function() {
        game.stage.backgroundColor = '#202020';
        game.load.image('mushroom', 'images/mushroom.png'); // map the name 'mushroom' to the file URL 'images/mushroom.png'
        game.load.image('phaser', 'images/phaser.png'); // map the name 'phaser' to the file URL 'images/phaser.png'
    },

    create: function() {
        // Set the size of the world:
        // topLeftCornerXCoordinate, topLeftCornerYCoordinate, widthInPixels, heightInPixels
        game.world.setBounds(-1500, -1500, 3000, 3000);

        // Add a bunch of mushroom sprites on the background
        for (var i = 0; i < 200; i++) {
            game.add.sprite(game.world.randomX, game.world.randomY, 'mushroom');
        }

        this.addText();
        this.setupHUD();
        this.setupKeyboardInput();
    },

    // Called many times per second!
    update: function() {
        if (this.keys.up.isDown || this.keys.w.isDown) {
            game.camera.y -= 6;
        }
        if (this.keys.down.isDown || this.keys.s.isDown) {
            game.camera.y += 6;
        }
        if (this.keys.left.isDown || this.keys.a.isDown) {
            game.camera.x -= 6;
        }
        if (this.keys.right.isDown || this.keys.d.isDown) {
            game.camera.x += 6;
        }
    },

    // Called many times per second!
    render: function() {
        game.debug.cameraInfo(game.camera, 32, 32);
    },

    ////////////////////////////////////////////////////////////////////////

    addText: function() {
        game.add.text(100, 110, "Control with arrow keys or WSAD.", {
            font: "32px Arial",
            fill: "#f26c4f",
            align: "center"
        });
    },

    setupKeyboardInput: function() {
        var kb = game.input.keyboard;
        this.keys = {
            up: kb.addKey(Phaser.Keyboard.UP),
            down: kb.addKey(Phaser.Keyboard.DOWN),
            left: kb.addKey(Phaser.Keyboard.LEFT),
            right: kb.addKey(Phaser.Keyboard.RIGHT),
            w: kb.addKey(Phaser.Keyboard.W),
            s: kb.addKey(Phaser.Keyboard.S),
            a: kb.addKey(Phaser.Keyboard.A),
            d: kb.addKey(Phaser.Keyboard.D)
        };
    },

    // Each of these game objects have the property fixedToCamera set to true.
    // This will attach the object to the camera, and not the world.
    setupHUD: function() {
        var logo1 = game.add.sprite(0, 0, 'phaser');
        logo1.fixedToCamera = true;
        logo1.cameraOffset.setTo(100, 300);


        var logo2 = game.add.sprite(0, 0, 'phaser');
        logo2.fixedToCamera = true;
        logo2.cameraOffset.setTo(500, 100);

        // Add a bounce animation for logo2
        game.add.tween(logo2.cameraOffset).to({
            y: 400
        }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);


        var text = game.add.text(0, 0, "this text is fixed to the camera", {
            font: "22px Arial",
            fill: "#FFFF00",
            align: "center"
        });
        text.fixedToCamera = true;
        text.cameraOffset.setTo(200, 500);
    }
});