const path = require('path');
const a = path.basename('C:/Users/Priyansh Mehta/Desktop/NODE/NODE_SAMPLE_FILE.txt');
const b = path.dirname('C:/Users/Priyansh Mehta/Desktop/NODE/NODE_SAMPLE_FILE.txt');
const c = path.extname('C:/Users/Priyansh Mehta/Desktop/NODE/NODE_SAMPLE_FILE.txt');
console.log(a+" "+b+" "+c);
console.log(__dirname+ " "+__filename);
console.log(path.parse('C:/Users/Priyansh Mehta/Desktop/NODE/NODE_SAMPLE_FILE.txt'));
console.log(__filename);