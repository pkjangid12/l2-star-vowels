// import Phaser from "phaser";

// export default class BootScene extends Phaser.Scene {
//   constructor() {
//     super("BootScene");
//   }

//   preload() {
//     // Only assets needed for Preloader Scene
//     this.load.image(
//       "preload-bg",
//       "/Assets/Images/PreloaderScene/Background.png",
//     );
//     this.load.image(
//       "preload-logo",
//       "/Assets/Images/PreloaderScene/RainingVowels.png",
//     );
//   }

//   create() {
//     this.registry.set("score", 0);
//     this.registry.set("mistakes", 0);

//     this.scene.start("PreloaderScene");
//   }
// }

import Phaser from "phaser";
import AudioManager from "../managers/AudioManager.js";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // Only assets needed for Preloader Scene
    this.load.image(
      "preload-bg",
      assetPath("GameAssets/Images/PreloaderScene/Background.avif"),
    );
    this.load.image(
      "preload-logo",
      assetPath("GameAssets/Images/PreloaderScene/Starvowels.avif"),
    );
  }

  create() {
    const audioManager = new AudioManager();

    this.registry.set("audioManager", audioManager);
    this.loadFont();
  }

  async loadFont() {
    try {
      await document.fonts.load('700 72px "FredokaCondensed"');

      console.log("FredokaCondensed font loaded");

      this.scene.start("PreloaderScene");
    } catch (error) {
      console.error("Failed to load FredokaCondensed:", error);

      // Continue anyway
      this.scene.start("PreloaderScene");
    }
  }
}
