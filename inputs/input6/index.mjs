import { data } from "./input.mjs";
import fs from "fs";
export const index6 = () => {
  const jsonString = JSON.stringify(data);
  //console.log(jsonString);
  const newString = jsonString
    .replaceAll("\\n\\n", "* ")
    .replaceAll("\\n", " - ");

  console.log(newString);
  const jsonOutput = newString.split("* ").map((element) => {
    const [acronym, value] = element.split(" - ");
    let link = "";
    console.log(value);
    const url = value.split(" ").find((word) => word.startsWith("http"));
    if (url !== undefined) {
      link = url;
    }

    return { acronym, value, link };
  });
  //console.log(jsonString);

  fs.writeFileSync("./output/output6.json", JSON.stringify(jsonOutput));
};
