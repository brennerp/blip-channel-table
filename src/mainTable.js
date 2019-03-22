import "./scss/main.scss";
import { svgs, contentCapabilityPerChannel } from "./imports.js";
import { modalTrigger } from "./modal.js";

//Elements for the send/receive arrow images
const supportedSymbol = `
  <i class="fas fa-check-circle symbol symbol--supported" title="Supported"></i>
`;

const unsupportedSymbol = `
  <i class="fas fa-ban symbol symbol--unsupported" title="Unsupported"></i>
`;

//Construction of table heads
let channelHeads = "";
let contents = {};

for (let channel in contentCapabilityPerChannel) {
  const channelObj = contentCapabilityPerChannel[channel];

  channelHeads += `
    <th id="${channel}-icon" class="channel-header">
      <img
        class="channel-icon"
        src="${svgs[channel]}"
        title="${channelObj.name}"
        alt="${channelObj.name}"
      />
    </th>
  `;

  for (let content in channelObj.support) {
    if (!contents[content]) {
      contents[content] = "";
    }

    const isSupported = channelObj.support[content].value;

    const symbols = isSupported
      ? `${supportedSymbol}${modalTrigger}`
      : `${unsupportedSymbol}`;

    const tdClass = isSupported ? "supported" : "unsupported";

    contents[content] += `
      <td class="channel-support ${tdClass}">
        <p class="channel-support__symbols">
          ${symbols}
        </p>
      </td>
    `;
  }
}

let channelBodies = "";
for (let content in contents) {
  channelBodies += `
    <tr>
      ${contents[content]}
    </tr>
  `;
}

const mainTableHead = `
  <thead class="main-table__thead">
    ${channelHeads}
  </thead>
`;

const mainTableBody = `
  <tbody class="main-table__tbody">
    ${channelBodies}
  </tbody>
`;

export const mainTable = `
  <div class="main-table-container">
    <table class="main-table">
      ${mainTableHead}
      ${mainTableBody}
    </table>
  </div>
`;
