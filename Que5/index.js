// Import the path module
const path = require('path');

// Define a file path (example path)
const filePath = '/user/local/bin/nodejs/app.js';

// Get the directory name from the file path
const dirName = path.dirname(filePath);
console.log(`Directory Name: ${dirName}`);

// Get the base file name (with extension)
const baseName = path.basename(filePath);
console.log(`Base Name: ${baseName}`);

// Get the file name without the extension
const fileNameWithoutExt = path.basename(filePath, path.extname(filePath));
console.log(`File Name Without Extension: ${fileNameWithoutExt}`);

// Get the file extension
const extName = path.extname(filePath);
console.log(`File Extension: ${extName}`);

// Join paths together (e.g., concatenate folder and filename)
const joinedPath = path.join('/user/local', 'bin', 'nodejs', 'index.js');
console.log(`Joined Path: ${joinedPath}`);

// Normalize a potentially messy file path
const messyPath = '/user/../local/bin/./nodejs/app.js';
const normalizedPath = path.normalize(messyPath);
console.log(`Normalized Path: ${normalizedPath}`);

// Resolve an absolute path (resolve relative paths to an absolute path)
const relativePath = 'nodejs/app.js';
const absolutePath = path.resolve(relativePath);
console.log(`Resolved Absolute Path: ${absolutePath}`);

// Check if a path is absolute
const isAbsolutePath = path.isAbsolute(filePath);
console.log(`Is Absolute Path: ${isAbsolutePath}`);

// Get the relative path between two paths
const fromPath = '/user/local/bin/';
const toPath = '/user/local/bin/nodejs/app.js';
const relativePathBetween = path.relative(fromPath, toPath);
console.log(`Relative Path: ${relativePathBetween}`);