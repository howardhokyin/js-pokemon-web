# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Fetch pokemon note

- data.sprites.front_default // for pokemon image from api

## Router

- ref: <a href="https://www.w3schools.com/react/react_router.asp"> react route</a>

1. Add React Router

   > npm i -D react-router-dom@latest

2. create multi page routes on `App.jsx`

```js
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

> ```js
> <Route path="/" element={<Nav />}>
> ```

- Show `<Nav/>` on every pages

## Async + await

- `async` is used in JS to indicate a function is an asynchronous functions.

### so why we need `async`

- JS is single-threaded, execute one command at a time.
- always returns a promise.

## .then()

- `method` to handle the result of an asynchronous operation.

## CSS tailwind

- `w-32` for image default size
