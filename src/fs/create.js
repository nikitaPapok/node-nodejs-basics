import fs from "fs";
import path from "path";

const create = async () => {
  let fileExists;
  const filePath = path.join(process.cwd(), "src", "fs", "files/fresh.txt");
  const data = "I am fresh and young";
  fs.exists(filePath, (exists) => {
    if (exists) {
      throw new Error("FS operation failed");
    }
    fs.writeFile(filePath, data, (err) => {
      console.error({ err });
    });
  });

  // Write your code here
};

await create();
