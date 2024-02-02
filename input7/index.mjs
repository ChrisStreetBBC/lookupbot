import { data } from "./input.mjs";
import fs from "fs";
export const index7 = () => {
  const jsonString = JSON.stringify(data);

  const jsonOutput = jsonString.split("\\n\\n").map((element) => {
    const [acronym, value] = element.split(": ");
    let link = "";
    console.log(value);
    const url = value.split(" ").find((word) => word.startsWith("http"));
    if (url !== undefined) {
      link = url;
    }

    return { acronym, value, link };
  });
  //console.log(jsonString);

  fs.writeFileSync("./output/output7.json", JSON.stringify(jsonOutput));
};
