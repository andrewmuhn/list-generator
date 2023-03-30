const TaskList = require('../lib/tasklist.js');
const TaskListItem = require('../lib/tasklistitem.js');

describe('TaskList', () => {
  it('should should render an ul list of taskListItems', () => {
    const taskItems = [
      new TaskListItem(['FirstTask']),
      new TaskListItem(['SecondTask'], true),
      new TaskListItem(['ThirdTask']),
    ];
    const expectedHtml = [
      `<ul class="tasks">`,
      `<li class="tasks-item">FirstTask</li>`,
      `<li class="tasks-item tasks-item-priority">SecondTask</li>`,
      `<li class="tasks-item">ThirdTask</li>`,
      `</ul>`,
    ].join('');
    const list = new TaskList(taskItems);
    expect(list.render()).toEqual(expectedHtml);
  });
});