const fs = require('fs');
const webp = require('webp-converter');
const { open, readdir } = require('node:fs/promises');
const path = require('path');

const pathB = path.resolve(__dirname, '../public/images/shinglas/examples');

let files = [];
const reader = async (_path) => {
  let _files = [];
  _files = await readdir(_path);
  try {
    for (const _file of _files) {
      let _newFiles;
      try {
        _newFiles = await reader(path.resolve(_path, `${_file}`));
      } catch (error) {

      }
      if (!_newFiles && _file.endsWith('.jpg')) {
        files.push(path.resolve(_path, `${_file}`));
      }
    }
  } catch (error) {
    console.log('🚀', error);
  }
};

const a = async () => {
  try {
    await reader(pathB);

    for (const imgPath of files) {
      const result = webp.cwebp(
        imgPath.toLocaleString(),
        imgPath.toLocaleString().replace('jpg', 'webp'),
        '-q 80',
        (logging = '-v')
      );

      result.then((response) => {
        console.log(response);
      });
      // const imgtoconv = imgPath + '\\' + _img;
    }

    // files.map(async (item, i) => {
    //   const imgs = await readdir(item);
    //   for (const _img of imgs) {
    //     const imgtoconv = item + '\\' + _img;
    //     console.log('🚀 ~ file: converter.js ~ line 30 ~ files.map ~ imgtoconv', imgtoconv);
    //     const result = webp.cwebp(
    //       imgtoconv.toLocaleString(),
    //       imgtoconv.toLocaleString().replace('jpg', 'webp'),
    //       '-q 80',
    //       (logging = '-v')
    //     );

    //     result.then((response) => {
    //       console.log(response);
    //     });
    //   }
    // });
  } finally {
  }
};
a();
