import * as React from 'react'

import { default as Form } from "react-jsonschema-form";

import {schema} from '../schema'

// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Title", default: "A new task"},
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

const uiSchema = {
  service: {
      "ui:widget": "hidden"
  }
}

export const App = () => {
    return <Form schema={schema} uiSchema={uiSchema} />
}

export default App
