import * as PIXI from "pixi.js";
import "./resources/css/styles.css";

// Require our sprites
const MELON = require("./resources/images/watermelon.png");

// Load our sprites with pixi
const Loader: PIXI.Loader = PIXI.Loader.shared;
Loader.add(MELON).load(setup);

// Create the application
const app = new PIXI.Application({
    antialias: false
});

// Enable interaction events: mouse, touch
app.stage.interactive = true;

document.body.appendChild(app.view);

function setup() {
    // Creating a base container and adding it to the app stage
    const sceneContainer = new PIXI.Container();
    app.stage.addChild(sceneContainer);

    const melonSprite = new PIXI.Sprite(Loader.resources[MELON].texture);

    // Setting the objects pivot in the center
    melonSprite.anchor.x = 0.5;
    melonSprite.anchor.y = 0.5;

    // Moving the sprite in the middle of the screen
    melonSprite.x = app.renderer.width / 2;
    melonSprite.y = app.renderer.height / 2;

    // Adding the sprite to our container
    sceneContainer.addChild(melonSprite);

    // Update the sprites rotation every frame
    app.ticker.add(delta => {
        melonSprite.rotation += 0.1 * delta;
    });
}