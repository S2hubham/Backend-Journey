import { readFile, writeFile } from 'fs/promises';

const filename = new URL('./index.html', import.meta.url);
let contents = await readFile(filename, { encoding : 'utf-8' });

// console.log(contents);
// console.log();

const data = {
    name : "Shubham kokane",
    city : "pune",
    age : 21
}

for(const [key, value] of Object.entries(data)){
    contents = contents.replace(`{{${key}}}`, value);
}

// console.log(contents);


await writeFile(new URL('./newIndex.html', import.meta.url), contents);

process.stdout.write("hii");
process.stdout.write("how are u???"); 
// this will print to same unlike console.log bcoz its a stream