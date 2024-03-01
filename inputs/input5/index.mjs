import { data } from "./input.mjs";
import fs from "fs";

export const index5 = () => {
  const jsonString = JSON.stringify(data);
  console.log(jsonString);
  const jsonOutput = jsonString.split("\\n").map((element) => {
    const [acronym, value] = element.split(" - ");
    let link = "";
    const url = value.split(" ").find((word) => word.startsWith("http"));
    if (url !== undefined) {
      link = url;
    }

    return { acronym, value, link };
  });
  //console.log(jsonString);

  fs.writeFileSync("./output/output5.json", JSON.stringify(jsonOutput));
};
