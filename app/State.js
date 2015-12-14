import uuid from 'node-uuid';

export default {
  notes: [
    {
      id: uuid.v4(),
      task: 'Learn Webpack'
    },
    {
      id: uuid.v4(),
      task: 'Learn React'
    },
    {
      id: uuid.v4(),
      task: 'Take a break'
    }
  ]
};