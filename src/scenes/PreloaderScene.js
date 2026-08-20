import Phaser from "phaser";
import { createBackground } from "../utils/helper";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("PreloaderScene");
  }

  preload() {
    const { width, height } = this.scale;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    //-----------------------------------
    // Background
    //-----------------------------------
    createBackground(this, "preload-bg");

    ///////////////logo////////////////////
    const logo = this.add
      .image(centerX, centerY * 0.45, "preload-logo")
      .setScale(1);
    //-----------------------------------
    // Progress Bar Settings
    //-----------------------------------

    const barWidth = 650;
    const barHeight = 60;
    const radius = 20;

    const barX = (width - barWidth) * 0.5;
    // const barY = height - 265; // Adjust until it matches your artwork

    // Match this Y position with the empty bar in your background.
    const barY = centerY + 555;

    //-----------------------------------
    // Outer Border
    //-----------------------------------

    const border = this.add.graphics();

    border.lineStyle(8, 0xffff00, 1);

    border.strokeRoundedRect(
      centerX - barWidth / 2,
      barY,
      barWidth,
      barHeight,
      radius,
    );

    //-----------------------------------
    // Progress Fill
    //-----------------------------------

    const fill = this.add.graphics();

    //-----------------------------------
    // Percentage
    //-----------------------------------

    const percentText = this.add
      .text(centerX, barY + 30, "0%", {
        fontFamily: "Arial",
        fontSize: "42px",
        fontStyle: "bold",
        color: "#f3f30d",
      })
      .setOrigin(0.5);

    //-----------------------------------
    // Loader Events
    //-----------------------------------

    this.load.on("progress", (value) => {
      fill.clear();

      const fillWidth = (barWidth - 10) * value;

      // Blue gradient
      //   fill.fillGradientStyle(
      //     0x48c8ff, // top-left
      //     0x1688ff, // top-right
      //     0x1f7cff, // bottom-left
      //     0x0d63ff, // bottom-right
      //     1,
      //   );

      //////////////red gradient////////////
      //   fill.fillGradientStyle(
      //     0xff3b30, // top-left
      //     0xe0201a, // top-right
      //     0xcc1111, // bottom-left
      //     0x990000, // bottom-right
      //     1,
      //   );

      ////////////baby pink gradient////////
      fill.fillGradientStyle(
        0xfb1565, // top-left (your base color)
        0xfb1565, // top-right
        0xc10c4c, // bottom-left (darker shade)
        0xc10c4c, // bottom-right
        1,
      );

      fill.fillRoundedRect(barX + 5, barY + 5, fillWidth, barHeight - 10, 16);

      // Diagonal glossy stripes
      fill.lineStyle(10, 0xffffff, 0.08);

      for (let x = -40; x < fillWidth; x += 30) {
        fill.beginPath();

        fill.moveTo(barX + 5 + x, barY + barHeight - 5);

        fill.lineTo(barX + 35 + x, barY + 5);

        fill.strokePath();
      }

      percentText.setText(`${Math.floor(value * 100)}%`);
    });

    //-----------------------------------
    // Load Game Assets
    //-----------------------------------

    // Backgrounds
    this.load.image(
      "playBtn",
      assetPath("assets/Images/PreloaderScene/start.png"),
    );
    this.load.image(
      "gameInctructions",
      assetPath("assets/Images/PreloaderScene/HowtoPlay.png"),
    );

    this.load.image(
      "bunny",
      assetPath("assets/Images/PreloaderScene/Avatar.png"),
    );

    // ==========================================
    // EASY GAME SCENE ASSETS
    // ==========================================

    this.load.image(
      "dropBlue",
      assetPath("assets/Images/gameScene/Star1.avif"),
    );

    this.load.image(
      "dropGolden",
      assetPath("assets/Images/gameScene/star2.avif"),
    );

    this.load.image(
      "dropGreen",
      assetPath("assets/Images/gameScene/star3.avif"),
    );

    this.load.image(
      "dropLightBlue",
      assetPath("assets/Images/gameScene/star4.avif"),
    );

    this.load.image(
      "dropLightGreen",
      assetPath("assets/Images/gameScene/star5.avif"),
    );

    this.load.image(
      "dropPink",
      assetPath("assets/Images/gameScene/star6.avif"),
    );

    this.load.image(
      "dropPurple",
      assetPath("assets/Images/gameScene/star7.avif"),
    );

    this.load.image("dropRed", assetPath("assets/Images/gameScene/star8.avif"));

    this.load.image(
      "dropSkyBlue",
      assetPath("assets/Images/gameScene/star9.avif"),
    );

    this.load.image(
      "dropYellow",
      assetPath("assets/Images/gameScene/star10.avif"),
    );

    // ==========================================
    // GAME UI
    // ==========================================

    this.load.image(
      "scorePanel",
      assetPath("assets/Images/gameScene/Score.avif"),
    );

    this.load.image(
      "missedPanel",
      assetPath("assets/Images/gameScene/Missed.avif"),
    );

    // ==========================================
    // CHARACTER
    // ==========================================

    this.load.image(
      "playRabbit",
      assetPath("assets/Images/gameScene/DanceAvatar.avif"),
    );

    // ==========================================
    // GAME OVER SCENE
    // ==========================================

    this.load.image(
      "gameOverPopup",
      assetPath("assets/Images/gameOverScene/popup.avif"),
    );

    this.load.image(
      "gameOverHome",
      assetPath("assets/Images/gameOverScene/home.avif"),
    );

    this.load.image(
      "missedIcon",
      assetPath("assets/Images/gameOverScene/MissedVowels.png"),
    );

    this.load.image(
      "gameOverPlayAgain",
      assetPath("assets/Images/gameOverScene/Playagain.avif"),
    );

    this.load.image(
      "gameOverRabbit",
      assetPath("assets/Images/gameOverScene/Greatjob.avif"),
    );

    this.load.image(
      "gameOverStar",
      assetPath("assets/Images/gameOverScene/Star.avif"),
    );

    this.load.image(
      "gameOverStarEmpty",
      assetPath("assets/Images/gameOverScene/Star2.avif"),
    );

    this.load.image(
      "gameOverScoreLabel",
      assetPath("assets/Images/gameOverScene/Yourscore.avif"),
    );

    this.load.image(
      "gameOverOverlay",
      assetPath("assets/Images/gameOverScene/overlay.png"),
    );

    this.load.atlas(
      "flares",
      assetPath("assets/Particles/flares.png"),
      assetPath("assets/Particles/flares.json"),
    );

    ///////////audio//////////////

    this.load.audio("gameplayMusic", assetPath("assets/Audio/bgSound.mp3"));
    this.load.audio(
      "buttonClickSound",
      assetPath("assets/Audio/buttonClickSound.mp3"),
    );
    this.load.audio(
      "gameOverSound",
      assetPath("assets/Audio/gameOverSound.mp3"),
    );
    this.load.audio(
      "wrongSelectionSound",
      assetPath("assets/Audio/wrongSelectionSound.mp3"),
    );
    this.load.audio("popSound", assetPath("assets/Audio/popSound.mp3"));
    this.load.audio("clockSound", assetPath("assets/Audio/clockTicSound.mp3"));

    this.load.audio(
      "starCollectionSound",
      assetPath("assets/Audio/starCollectionSound.mp3"),
    );

    //-----------------------------------
    // Complete
    //-----------------------------------

    this.load.once("complete", () => {
      this.cameras.main.fadeOut(350);
      this.cameras.main.once("camerafadeoutcomplete", () => {
        this.scene.start("LevelSelectScene");
      });
    });
  }

  create() {
    const graphics = this.make.graphics({ x: 0, y: 0 });

    const audioManager = this.registry.get("audioManager");

    audioManager.initialize(this);

    graphics.fillStyle(0xffffff, 1);
    graphics.fillCircle(8, 8, 8);
    graphics.generateTexture("sparkle-particle", 16, 16);
    graphics.destroy();
  }
}
