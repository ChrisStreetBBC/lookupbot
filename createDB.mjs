import fs from "fs";
import { index1 } from "./input1/index.mjs";
import { index2 } from "./input2/index.mjs";
import { index3 } from "./input3/index.mjs";
import { index4 } from "./input4/index.mjs";
import { index5 } from "./input5/index.mjs";
import { index6 } from "./input6/index.mjs";
import { index7 } from "./input7/index.mjs";

export const createDB = () => {
  function readFile(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, "utf8", (err, jsonString) => {
        if (err) {
          console.log(`File read failed for ${fileName}:`, err);
          reject(err);
        } else {
          resolve(jsonString);
        }
      });
    });
  }
  index1();
  index2();
  index3();
  index4();
  index5();
  index6();
  index7();

  const fileNames = [
    "./output/output1.json",
    "./output/output2.json",
    "./output/output3.json",
    "./output/output4.json",
    "./output/output5.json",
    "./output/output6.json",
    "./output/output7.json",
    // Add more file names as needed
  ];

  const promises = fileNames.map((fileName) => {
    return readFile(fileName);
  });

  Promise.all(promises)
    .then((results) => {
      // results is an array containing the content of each file
      let combinedArray = [];

      results.forEach((content) => {
        const parsedContent = JSON.parse(content);
        combinedArray = combinedArray.concat(parsedContent);
      });

      console.log("Combined array:", combinedArray);

      fs.writeFileSync(
        "./output/finalOutput.json",
        JSON.stringify(combinedArray)
      );
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};
