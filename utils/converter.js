const fs = require('fs');
const webp = require('webp-converter');
const { open, readdir } = require('node:fs/promises');
const path = require('path');

const pathB = path.resolve(__dirname, '../public/images/shinglas-rus.ru/products');

let files = [];
const reader = async (_path) => {
  let _files = [];
  _files = await readdir(_path);
  try {
    for (const _file of _files) {
      console.log(_file);
      let _newFiles = await reader(path.resolve(_path, `${_file}`));
      if (!_newFiles) {
        files.push(path.resolve(_path, `${_file}`));
      }
    }
  } catch (error) {}
};

const a = async () => {
  try {
    await reader(pathB);
    files.map(async (item, i) => {
      const imgs = await readdir(item);
      for (const _img of imgs) {
        const imgtoconv = item + '\\' + _img;
        const result = webp.cwebp(imgtoconv.toLocaleString(), imgtoconv.toLocaleString().replace('jpg', 'webp'), '-q 80', (logging = '-v'));

        result.then((response) => {
          console.log(response);
        });

      }
    });
  } finally {
  }
};
a();