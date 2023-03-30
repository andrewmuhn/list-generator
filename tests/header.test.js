const Header = require('../lib/header.js')
const { formatDate } = require('../lib/date.js')

describe('Header', () => {
  it('should return an html string with a formatted date', () => {
    const expectedHtml = `<header class="header"><h1>Todo Today</h1><p>${formatDate(new Date())}</p></header>`
    const header = new Header();
    expect(header.render()).toEqual(expectedHtml);
  });
});