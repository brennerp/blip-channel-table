import "./scss/main.scss";
const tableJson = require("./table.json");

const svg = {
  send: require("./svg/send.svg"),
  receive: require("./svg/receive.svg"),
  image: require("./svg/image.svg"),
  quickReply: require("./svg/quickReply.svg"),
  menu: require("./svg/menu.svg"),
  whatsApp: require("./svg/whatsApp.svg"),
  businessChat: require("./svg/businessChat.svg"),
  messenger: require("./svg/messenger.svg")
};

const contentTypes = tableJson.contentTypes;
const contentCapabilityPerChannel = tableJson.contentCapabilityPerChannel;

//Elements for the send/receive arrow images
const sendImg = `
  <img
    class="send-img"
    src="${svg.send}"
    title="Send"
    alt="Right arrow: support for sending content"
  />
`;

const receiveImg = `
  <img
    "receive-img"
    src="${svg.receive}"
    title="Receive"
    alt="Left arrow: support for receiving content"
  />
`;

//Construction of table heads
let tableHeads = `
  <th scope="col"></th>
`;

for (let content in contentTypes) {
  const title = contentTypes[content].name;
  tableHeads += `
    <th scope="col">
      <div class="content-container">
        <img
          class="content-image"
          src="${svg[content]}"
          title="${title}"
          alt="${title}"
        />
      </div>
    </th>
  `;
}

//Construction of table rows
let tableRows = ``;

for (let channel in contentCapabilityPerChannel) {
  const channelObj = contentCapabilityPerChannel[channel];

  let channelRow = `
    <tr>
      <th scope="row">
        <div class="channel-container">
          <img
            class="channel-image"
            src="${svg[channel]}"
            title="${channelObj.name}"
            alt="${channelObj.name}"
          />
          <span class="channel-title">
            ${channelObj.name}
          </span>
        </div>
      </th>
  `;

  for (let content in contentTypes) {
    const contentTitle = contentTypes[content].name;
    const support =
      channelObj.support && channelObj.support[content]
        ? channelObj.support[content]
        : {};

    channelRow += `
      <td>
        <div class="data-container">
          <img
            class="content-image"
            src="${svg[content]}"
            title="${contentTitle}"
            alt="${contentTitle}"
          />
          <div class="support-container">
            ${support.send ? sendImg : ""}
            ${support.receive ? receiveImg : ""}
          </div>
        </div>
        <div class="data-caption">
          ${contentTitle}
        </div>
      </td>
    `;
  }

  channelRow += `</tr>`;
  tableRows += channelRow;
}

//Ensemble of whole table
const tableCaption = `
  <caption>
    Content Support per Messaging Channel
  </caption>
`;

const tableHeader = `
  <thead>
    <tr>
      ${tableHeads}
    </tr>
  </thead>
`;

let tableBody = `
  <tbody>
    ${tableRows}
  </tbody>
`;

const table = `
  <div class="table-container">
    <table>
      ${tableCaption}
      ${tableHeader}
      ${tableBody}
    </table>
  </div>
`;

document.getElementById("app").innerHTML = `
  ${table}
`;
