import { contentTypes } from "./imports.js";

const sideTableHead = `
  <thead class="side-table__head">
    <tr>
      <th>
        Funcionalidades
      </th>
    </tr>
  </thead>
`;

let contentTitles = "";

for (let content in contentTypes) {
  const title = contentTypes[content].name;
  contentTitles += `
    <tr>
      <td>
        <p>${title}<p>
      </td>
    </tr>
  `;
}

const sideTableBody = `
  <tbody class="side-table__body">
    ${contentTitles}
  </tbody>
`;

export const sideTable = `
  <div class="side-table-container">
    <table class="side-table">
      ${sideTableHead}
      ${sideTableBody}
    </table>
  </div>
`;
