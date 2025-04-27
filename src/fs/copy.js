import fs from "fs";
import path from "path";
const copy = async () => {
  const originalFolderPath = path.join(process.cwd(), "src", "fs", "files");
  const copiedFoldersPath = path.join(process.cwd(), "src", "fs", "files_copy");
  const isCopiedFolderExist = fs.existsSync(copiedFoldersPath);
  if (isCopiedFolderExist) {
    throw new Error("FS operation failed");
  }
  fs.mkdirSync(copiedFoldersPath);
  fs.readdir(originalFolderPath, (err, files) => {
    for (const currentFile of files) {
      const data = fs.readFileSync(
        `${originalFolderPath}/${currentFile}`,
        "utf-8"
      );
      fs.writeFile(`${copiedFoldersPath}/${currentFile}`, data, (err) => {
        console.log(err);
      });
    }
  });
};

await copy();
