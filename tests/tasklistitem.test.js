const TaskListItem = require('../lib/tasklistitem.js');

describe('TaskListItem', () => {
  it('should render an <li> for a task', () => {
    const text = 'Test task';
    const expectedHtml = '<li class="tasks-item">Test task</li>';
    const item = new TaskListItem([text]);
    expect(item.render()).toEqual(expectedHtml);
  });

  it('should render a priority task', () => {
    const text = 'Test priority task';
    const expectedHtml = '<li class="tasks-item tasks-item-priority">Test priority task</li>'
    const item = new TaskListItem([text], true);
    expect(item.render()).toEqual(expectedHtml);
  });
});