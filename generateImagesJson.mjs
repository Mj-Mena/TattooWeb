// generateImagesJson.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDirectory = path.join(__dirname, 'public/gallery'); // Adjust the path to your images directory
const outputDirectory = path.join(__dirname, 'public/jsonfiles'); // Adjust the path where you want to save JSON files

const generateUserJson = (userDirectory) => {
  const userImages = fs
    .readdirSync(path.join(imagesDirectory, userDirectory))
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
    .map((file) => `/gallery/${userDirectory}/${file}`);

  const jsonFilePath = path.join(outputDirectory, `${userDirectory}.json`);
  fs.writeFileSync(jsonFilePath, JSON.stringify(userImages, null, 2));
};

const generateAllUsersJson = () => {
  const userDirectories = fs.readdirSync(imagesDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  userDirectories.forEach(generateUserJson);
};

generateAllUsersJson();
console.log('JSON files generated successfully!');
