import { data } from "./input.mjs";
import fs from "fs";

export const index3 = () => {
  const jsonString = JSON.stringify(data);

  const newString = jsonString
    .replaceAll("\\t\\t", "\\t")
    .replaceAll("\\t", " - ");

  const jsonOutput = newString.split("\\n").map((element) => {
    const [acronym, value] = element.split(" - ");
    const link = "";
    return { acronym, value, link };
  });

  fs.writeFileSync("./output/output3.json", JSON.stringify(jsonOutput));
};
