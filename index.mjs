import { createDB } from "./createDB.mjs";
import { acronyms } from "./output/finalOutput.mjs";
export const handler = async (event, context) => {
  // const key = JSON.parse(
  //   '{"' + atob(event.body).replace(/&/g, '", "').replace(/=/g, '": "') + '"}'
  // ).text;
  const key = "run build";
  if (key === "run build") {
    createDB();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Database creation initiated" }),
    };
  } else {
    const result = acronyms.find(
      (res) => res.acronym.toLowerCase() === key.toLowerCase()
    );

    let returnString;
    if (result && result.value !== undefined) {
      returnString = `${key} = ${result.value} ${
        result.link ? ", for more info click here" : ""
      }`;
    } else {
      returnString = "Sorry, couldn't find that, try here";
    }

    console.log(returnString);

    // If you need to include a hyperlink, ensure you're handling it in a way
    // compatible with how you intend to display the message (e.g., HTML, plain text).
    // The example below assumes a plain text response for simplicity.

    return {
      statusCode: 200,
      body: JSON.stringify({ message: returnString }),
    };
  }
};
handler();