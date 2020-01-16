import parseFile from './index';

describe('parseFile function:', () => {
  it('should parse a file given some path, and return the contents of that file in the form of a string', () => {
    const path = 'mocks/yeet.txt';
    const string = new RegExp(
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit./,
    );

    const file = parseFile(path);

    expect(file).toMatch(string);
  });
});
