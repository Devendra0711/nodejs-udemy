// Buffers in Node.js are used to handle binary data directly. They are particularly useful when dealing with streams of data, such as reading files, handling network packets, or working with binary protocols. Buffers are part of the Buffer class, which is a global object in Node.js.

// alloc -> allocate the memory for u.
// allocUnsafe ->
// Everytime when u use buffer u need to put the namne "Buffer" than use it.

// streams
//      -> buffer.js
//      -> input.txt

// input.txt -> some line of paragraph

import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const inputFilePath = path.join(import.meta.dirname, 'input.txt');
const outputFilePath = path.join(import.meta.dirname, 'output.txt');

const readableStream = createReadStream(inputFilePath, {
  encoding: 'utf-8',
  highWaterMark: 16,
});
// highWaterMark: 16 -> kitne character apko one by one as a chunk manna hai.
// 16 charcter is 1 chunk
const writableStream = createWriteStream(outputFilePath);

readableStream.pipe(writableStream);
// pipe -> its a built in method who connect your "readableStream" into "writableStream"

// Handle Errors

readableStream.on('error', (err) => console.error('Error:', err));
writableStream.on('error', (err) => console.error('Error:', err));

// OR we have another one way to do this using Events:-

import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const inputFilePath = path.join(import.meta.dirname, 'input.txt');
const outputFilePath = path.join(import.meta.dirname, 'output.txt');

const readableStream = createReadStream(inputFilePath, {
  encoding: 'utf-8',
  highWaterMark: 16,
});

// Listen for Data chunks
readableStream.on('data', (chunk) => {
  console.log('Buffer (chunk)', Buffer.from(chunk)); // convert the chunk to a buffer
  console.log('Received chunk:', chunk); // logs each 16-byte chunk
  writableStream.write(chunk); // write each chunk to output files
});

// Handle stream end
readableStream.on('end', () => {
  console.log('File read completed.');
  writableStream.end();
});
