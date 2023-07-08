import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

import { Home, Question, Quiz } from './views';
import { Answers } from './views/Answers';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/quiz',
    element: <Quiz />,
    children: [
      {
        path: ':questionId',
        element: <Question />
      }
    ]
  },
  {
    path: '/answers',
    element: <Answers />
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
];
