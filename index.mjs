import { createDB } from "./createDB.mjs";
export const handler = async (event, context) => {
  const key = JSON.parse(
    '{"' + atob(event.body).replace(/&/g, '", "').replace(/=/g, '": "') + '"}'
  ).text;
  if (key === "run build") {
    createDB();
  } else {
    const result = acronyms.find(
      (o) => o.acronym.toLowerCase() === key.toLowerCase()
    );
    const returnString =
      key + " = " + result.value + result.link ? "for more info click" : "";

    //, '<a href={"https://www.google.com"}> here </a>'}
    return returnString;
  }
};
