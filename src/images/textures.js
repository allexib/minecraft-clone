import { TextureLoader } from "three";

import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";

const dirtTexture = new TextureLoader(dirtImg);
const logTexture = new TextureLoader(logImg);
const grassTexture = new TextureLoader(grassImg);
const glassTexture = new TextureLoader(glassImg);
const woodTexture = new TextureLoader(woodImg);
const groundTexture = new TextureLoader(groundImg);

export { dirtTexture, logTexture, grassTexture, glassTexture, woodTexture, groundTexture };
