import React from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

type PageComponent = typeof import('./pages');

const pages = import.meta.glob('./pages/**/!(_)*.tsx', {eager: true}) as Record<string, PageComponent>;

const routes: RouteObject[] = [];
for (const path in pages) {
  const page = pages[path];

  // obtém o nome da pasta ou do arquivo
  const fileName = path.split('/').pop()!;
  const name = fileName.endsWith('index.tsx')
    ? path.split('/').slice(-2, -1)[0]
    : fileName.replace('.tsx', '');

  const route: RouteObject = {
    path: `/${name}`,
    element: React.createElement(page.default),
  };

  if (route.path === '/pages') {
    route.path = '/';
  }

  routes.push(route);
}

const router = createBrowserRouter(
  routes.map((route) => ({  
    path: route.path,
    element: route.element,
  }))
);

console.log('Building Routes:', routes);

export default function App() {
  return <RouterProvider router={router} />;
}
