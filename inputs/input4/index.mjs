import { data } from "./input.mjs";
import fs from "fs";

export const index4 = () => {
  const jsonString = JSON.stringify(data);

  const newString = jsonString.replaceAll("\\t\\t", " - ");

  const jsonOutput = newString.split("\\n").map((element) => {
    const [acronym, value = ""] = element.split(" - ");
    let link = "";
    const url = value.split(" ").find((word) => word.startsWith("http"));
    if (url !== undefined) {
      link = url;
    }

    return { acronym, value, link };
  });

  fs.writeFileSync("./output/output4.json", JSON.stringify(jsonOutput));
};
