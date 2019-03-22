import "./scss/main.scss";
import { sideTable } from "./sideTable.js";
import { mainTable } from "./mainTable.js";
import { modalComponent } from "./modal.js";

const table = `
  ${modalComponent}
  <div>
    <div id="blip-channel-table" class="responsive-table">
      ${sideTable}
      ${mainTable}
    </div>
  </div>
`;

document.getElementById("app").innerHTML = `
  ${table}
`;
