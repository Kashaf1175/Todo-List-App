# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Frontend :

npm create vite@latest
cd frontend
npm install
npm run dev

Backend :
npm init -y
npm i express mongoose

Mongo db connection:
open mongodb atlas
create new project
build a free database for deployment
Connect cluster by mongodb compass and copy connection string
Then create app.js by express, app.listen, app.get
then conn folder => db.js connect to mongo db
after that create model folder in that schema i.e list.js and user.js
after that create routes folder in that create auth.js for authentication i.e login & signup
then create list.js in routes for crud operations of todo list like add, update, delete and get.