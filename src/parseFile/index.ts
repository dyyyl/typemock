import fs from 'fs';

const parseFile = (path: string): string | null => {
  try {
    const file = fs.readFileSync(path, 'utf-8');
    return file;
  } catch (error) {
    return error;
  }
};

export default parseFile;
