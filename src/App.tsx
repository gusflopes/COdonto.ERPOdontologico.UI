import React from 'react';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

type PageComponent = typeof import('./pages');

const pages = import.meta.glob('./pages/**/!(_)*.tsx', {eager: true}) as Record<string, PageComponent>;

const routes: RouteObject[] = [];
for (const path in pages) {
  const page = pages[path];

  // obtém o nome completo da rota a partir do diretório "pages"
  const routePath = path
    .replace('./pages/', '') // remove o diretório "pages"
    .replace('/index.tsx', '') // remove o nome do arquivo
    .split('/') // divide o caminho em partes
    .filter(Boolean) // remove partes vazias
    .join('/'); // junta as partes restantes com "/"

  const route: RouteObject = {
    path: `/${routePath}`,
    element: React.createElement(page.default),
  };

  if (route.path === '/index.tsx') {
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
