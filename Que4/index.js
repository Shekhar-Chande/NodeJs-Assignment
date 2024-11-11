const os = require('os');

const platform = os.platform();       // OS platform (e.g., 'darwin', 'win32', 'linux')
const release = os.release();         // OS release version
const architecture = os.arch();       // System architecture (e.g., 'x64', 'arm')
const cpuCores = os.cpus().length;    // Number of CPU cores
const totalMemory = os.totalmem();    // Total system memory (in bytes)
const freeMemory = os.freemem();      // Free system memory (in bytes)
const homeDir = os.homedir();         // Home directory path
const uptime = os.uptime();           // System uptime (in seconds)




// Display the system information
console.log('Operating System Information:');
console.log(`Platform: ${platform}`);
console.log(`Release: ${release}`);
console.log(`Architecture: ${architecture}`);
console.log(`CPU Cores: ${cpuCores}`);
console.log(`Total Memory: ${totalMemory / (1024 ** 3)} GB`); // Convert bytes to GB
console.log(`Free Memory: ${freeMemory / (1024 ** 3)} GB`);   // Convert bytes to GB
console.log(`Home Directory: ${homeDir}`);
console.log(`Uptime: ${uptime} seconds`);