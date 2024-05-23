import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/task-description/task-description.component').then(
        (m) => m.TaskDescriptionComponent
      ),
  },
  {
    path: 'solution',
    loadComponent: () =>
      import('@pages/task-solution/task-solution.component').then(
        (m) => m.TaskSolutionComponent
      ),
  },
];
