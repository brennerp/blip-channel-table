// import fs from "fs";

const channelTableJson = require("./table.json");

export const contentTypes = channelTableJson.contentTypes;
export const contentCapabilityPerChannel =
  channelTableJson.contentCapabilityPerChannel;

  const svgFiles = {
    businessChat: require("./img/svg/businessChat.svg"),
    messenger: require("./img/svg/messenger.svg"),
    whatsApp: require("./img/svg/whatsApp.svg"),
    test: require("./img/svg/whatsApp.svg"),
  }

// const svgFiles = {
//   image: fs.readFileSync(`${__dirname}/svg/image.svg`),
//   quickReply: fs.readFileSync(`${__dirname}/svg/quickReply.svg`),
//   menu: fs.readFileSync(`${__dirname}/svg/menu.svg`),
//   whatsApp: fs.readFileSync(`${__dirname}/svg/whatsApp.svg`),
//   businessChat: fs.readFileSync(`${__dirname}/svg/businessChat.svg`),
//   messenger: fs.readFileSync(`${__dirname}/svg/messenger.svg`),
//   test: fs.readFileSync(`${__dirname}/svg/test.svg`)
// };

let svgBuffers = {};
// for (const svgFile in svgFiles) {
//   svgBuffers[svgFile] = `data:image/svg+xml;base64,${svgFiles[svgFile].toString(
//     "base64"
//   )}`;
// }

export const svgs = svgFiles;

// const imgFiles = {
//   test: require(`${__dirname}/img/test.png`)
// };

let imgBuffers = {};
// for (const imgFile in imgFiles) {
//   imgBuffers[imgFile] = `data:image/png;base64,${imgFiles[imgFile].toString(
//     "base64"
//   )}`;
// }

export const images = imgBuffers;
