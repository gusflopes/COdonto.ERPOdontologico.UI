import React from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

type PageComponent = typeof import('./pages/Home');

const pages = import.meta.glob('./pages/**/*.tsx', {eager: true}) as Record<string, PageComponent>;

const routes: RouteObject[] = [];
for (const path in pages) {
  const page = pages[path];
  const route: RouteObject = {
    path: path.replace('./pages', '').replace('.tsx', ''),
    element: React.createElement(page.default),
  };
  routes.push(route);
}

const router = createBrowserRouter(
  routes.map((route) => ({  
    path: route.path,
    element: route.element,
  }))
);

export default function App() {
  return <RouterProvider router={router} />;
}
