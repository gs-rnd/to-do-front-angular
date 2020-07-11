import { Task } from './shared/task.interface';

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Make To Do App',
    description: 'Using Angular to create a SPA for the front end and Spring Boot to create a REST API service for the back end.'
  },
  {
    id: 2,
    title: 'Create component to display individual tasks'
  },
  {
    id: 3,
    title: 'Brew Coffee',
    description: ''
  },
  {
    id: 4,
    title: 'Add Routing',
    description: 'Add task details module/component with routes given by task id.'
  },
  {
    id: 5,
    title: 'Form to add new tasks',
    description: 'Compare the two Angular approaches "Reactive Forms" vs "Template-drive Forms".'
  },
  {
    id: 6,
    title: '',
    description: 'Come up with a title for this task.'
  },
  {
    id: 0,
    title: 'Manage task order'
  }
];
