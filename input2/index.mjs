import { data } from "./input.mjs";
import fs from "fs";
export const index2 = () => {
  const jsonString = JSON.stringify(data);

  const newString = jsonString
    .replaceAll("\\n\\n\\n", "\\n")
    .replaceAll("\\n\\n", "\\n")
    .replaceAll("\\t\\n", "\\n");

  const jsonOutput = newString.split("\\n- ").map((element) => {
    const [acronym, value] = element.split(" - ");
    const link = "";
    return { acronym, value, link };
  });

  fs.writeFileSync("./output/output2.json", JSON.stringify(jsonOutput));
};
