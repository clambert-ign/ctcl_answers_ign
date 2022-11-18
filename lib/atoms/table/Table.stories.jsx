import Table from "./Table"
import TableItem from "./TableItem"

export default {
  title: "Atoms/Editorial/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: "Table atoms are used to display text or data in columns and/or rows for example reports or glossaries."
      }
    },
    cssprops: {
      "table-font-size": {
        value: "14px",
        description: "Table Font Size",
        control: "text"
      },
      "table-font-weight": {
        value: "300",
        description: "Table Font Weight",
        control: "text"
      },
      "table-line-height": {
        value: "22.4px",
        description: "Table Font Line Height",
        control: "text"
      },
      "table-text-color": {
        value: "#4B4C53",
        description: "Table Font Colour"
      },
      "table-width": {
        value: "100%",
        description: "Table Width",
        control: "text"
      },
      "table-margin": {
        value: "0",
        description: "Table Margin",
        control: "text"
      },
      "table-padding": {
        value: "32px 0",
        description: "Table Padding",
        control: "text"
      },
      "table-text-align": {
        value: "left",
        description: "Table Text Align",
        control: "text"
      },
      "table-border-width": {
        value: "1px 1px 1px 1px",
        description: "Table Border Width",
        control: "text"
      },
      "table-border-style": {
        value: "solid",
        description: "Table Border Style",
        control: "text"
      },
      "table-border-color": {
        value: "transparent",
        description: "Table Border Colour"
      },
      "table-th-text-align": {
        value: "left",
        description: "Table TH Text Align",
        control: "text"
      },
      "table-th-padding": {
        value: "16px",
        description: "Table TH Padding",
        control: "text"
      },
      "table-th-minwidth": {
        value: "100px",
        description: "Table TH Min Width",
        control: "text"
      },
      "table-th-bgcolor": {
        value: "#F5F5F6",
        description: "Table TH Min Width"
      },
      "table-th-text-color": {
        value: "#4B4C53",
        description: "Table TH Text Colour"
      },
      "table-th-border-width": {
        value: "1px 1px 1px 1px",
        description: "Table TH Border Width",
        control: "text"
      },
      "table-th-border-style": {
        value: "solid",
        description: "Table TH Border Style",
        control: "text"
      },
      "table-th-border-color": {
        value: "#f5f5f6",
        description: "Table TH Border Colour"
      },
      "table-td-text-align": {
        value: "left",
        description: "Table TD Text Align",
        control: "text"
      },
      "table-td-padding": {
        value: "16px",
        description: "Table TD Padding",
        control: "text"
      },
      "table-td-minwidth": {
        value: "100px",
        description: "Table TD Min Width",
        control: "text"
      },
      "table-td-bgcolor": {
        value: "transparent",
        description: "Table TD Min Width"
      },
      "table-td-text-color": {
        value: "#4B4C53",
        description: "Table TD Text Colour"
      },
      "table-td-border-width": {
        value: "1px 1px 1px 1px",
        description: "Table TD Border Width",
        control: "text"
      },
      "table-td-border-style": {
        value: "solid",
        description: "Table TD Border Style",
        control: "text"
      },
      "table-td-border-color": {
        value: "transparent",
        description: "Table TD Border Colour"
      },
      "table-yaxis-text-align": {
        value: "left",
        description: "Table YAxis Text Align",
        control: "text"
      },
      "table-yaxis-padding": {
        value: "16px",
        description: "Table YAxis Padding",
        control: "text"
      },
      "table-yaxis-minwidth": {
        value: "100px",
        description: "Table YAxis Min Width",
        control: "text"
      },
      "table-yaxis-bgcolor": {
        value: "#6267A1",
        description: "Table YAxis Min Width"
      },
      "table-yaxis-text-color": {
        value: "#F5F5F6",
        description: "Table YAxis Text Colour"
      },
      "table-yaxis-border-width": {
        value: "1px 1px 1px 1px",
        description: "Table YAxis Border Width",
        control: "text"
      },
      "table-yaxis-border-style": {
        value: "solid",
        description: "Table YAxis Border Style",
        control: "text"
      },
      "table-yaxis-border-color": {
        value: "#6267A1",
        description: "Table YAxis Border Colour"
      },
      "table-xaxis-text-align": {
        value: "left",
        description: "Table XAxis Text Align",
        control: "text"
      },
      "table-xaxis-padding": {
        value: "16px",
        description: "Table XAxis Padding",
        control: "text"
      },
      "table-xaxis-minwidth": {
        value: "100px",
        description: "Table XAxis Min Width",
        control: "text"
      },
      "table-xaxis-bgcolor": {
        value: "#F5F5F6",
        description: "Table XAxis Min Width"
      },
      "table-xaxis-text-color": {
        value: "#4B4C53",
        description: "Table XAxis Text Colour"
      },
      "table-xaxis-border-width": {
        value: "1px 1px 1px 1px",
        description: "Table XAxis Border Width",
        control: "text"
      },
      "table-xaxis-border-style": {
        value: "solid",
        description: "Table XAxis Border Style",
        control: "text"
      },
      "table-xaxis-border-color": {
        value: "#F5F5F6",
        description: "Table XAxis Border Colour"
      }
    }
  },
  args: {},
  argTypes: {}
}

const TemplateColumns = () => {
  return (
    <Table>
      <table cellSpacing="0" cellPadding="0" border="0">
        <thead>
          <tr>
            <TableItem cssClass="stickyTop" type="th" scope="col">Date</TableItem>
            <TableItem cssClass="stickyTop" type="th" scope="col">Event</TableItem>
            <TableItem cssClass="stickyTop" type="th" scope="col">Venue</TableItem>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
          <tr>
            <td>12 February</td>
            <td>Waltz with Strauss</td>
            <td>Main Hall</td>
          </tr>
        </tbody>
      </table>
    </Table>
  )
}
export const Columns = TemplateColumns.bind()

const TemplateRows = () => {
  return (
    <Table>
      <table cellSpacing="0" cellPadding="0" border="0">
        <tbody>
          <tr>
            <TableItem cssClass="yAxis,sticky" type="th" scope="row">Row label</TableItem>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
          </tr>
          <tr>
            <TableItem cssClass="yAxis,sticky" type="th" scope="row">Row label</TableItem>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
          </tr>
        </tbody>
      </table>
    </Table>
  )
}
export const Rows = TemplateRows.bind()
Rows.parameters = {
  controls: { 
    hideNoControlsWarning: false
  }
}

const TemplateAxis = () => {
  return (
    <Table>
      <table cellSpacing="0" cellPadding="0" border="0">
        <thead>
          <tr>
            <TableItem cssClass="yAxis,sticky" type="th">Y-axis label</TableItem>
            <TableItem cssClass="xAxis,fixed" type="th" colSpan="10">X-axis label</TableItem>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableItem cssClass="yAxis,sticky" type="td"></TableItem>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
            <th scope="col">Column label</th>
          </tr>
          <tr>
            <TableItem cssClass="yAxis,sticky" type="th" scope="row">Row label</TableItem>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
          </tr>
          <tr>
            <TableItem cssClass="yAxis,sticky" type="th" scope="row">Row label</TableItem>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
            <td>Text cell</td>
          </tr>
        </tbody>
      </table>
    </Table>
  )
}
export const axisLabels = TemplateAxis.bind()
axisLabels.parameters = {
  controls: { 
    hideNoControlsWarning: false
  }
}

