# React + TypeScript + Vite

### Technology: 
## Frontend
# Html, Css, Tailwind Css, React + TypeScript 
## Backend 
# Node js, Express js,
## Database 
# MongoDB
## Animation 
# Frammer Motion / AOS 
### Feature:
## Service Crud Operation
# Admin can create/update/delete Service.
## Event Item Management 
# Admin can create/update/delete Event Item.
## Upcoming Event  
# Admin can create/update/delete Upcoming Event.
## Full responsive UI design in fixel perfect.




### Client side url link: https://event360-five.vercel.app/
### Server side url link: https://event-360-liart.vercel.app/
### Video url link: https://www.loom.com/share/b1986dc5dc504acb83f18f7fc3b6f36e




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
