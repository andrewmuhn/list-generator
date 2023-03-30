const Component = require('../lib/component.js');

describe('Component', () => {
  it('should throw an error if Render() is called', () => {
    const component = new Component();
    const err = new Error('Child class must implement a render() method.')
    expect(component.render).toThrow(err);
  })
})
