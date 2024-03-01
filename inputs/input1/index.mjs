import { data } from "./input.mjs";
import fs from "fs";

export const index1 = () => {
  const jsonString = JSON.stringify(data);

  const jsonOutput = jsonString.split("\\n").map((element) => {
    const [acronym, value] = element.split(" - ");
    const link = "https://confluence.dev.bbc.co.uk/display/GLOSSARY/" + acronym;
    return { acronym, value, link };
  });

  fs.writeFileSync("./output/output1.json", JSON.stringify(jsonOutput));
};
