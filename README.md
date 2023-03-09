
# Содержание

Приложение React на Классах работающее с API Marvel Comics.

1. Верхний левый блок отображает рандомного персонажа с описанием и ссылками на его домашнюю страницу.
2. При отсутсвии изображения у персонаже, img заглушка.
3. Верхний правый блок по нажатию на кнопку генерирует отрисовку рандомного персонажа в левом блоке.
4. При загрузке которого использованм спиннер, при ошибки отрабатывает компонент errorMessage, но приложение не руинится тк компонент обернут в компонент предохранитель - ErrorBoundary, который в свою очередь ловит ошибку только в блоке с рандомным персонажем.
5. Левый блок, это блок персонажей из 9 персонажей, отрисывываются из списка в 1500 персонажей, пагинация по нажатию на кнопку происходит дополнение имеющегося списка персонажей, доплнительными 9 персонажами, и так при каждом нажатии, шаг добавления всегда +9, за исключением добавления из конца списка, добавляется отстаток и кнопка исчезает.
6. При клике на персонажа из списка, меняется его стиль на активный с подстветкой, и в блоке левее выводиться инфо об этом персонаже, с списком комиксов с его участием, с изпользованием спиннера при загрузке. Если у персонажа нет списка комиксов, использована заглушка с соответсвующим сообщением.
7. В компоненте предохранитель ErrorBoundary, также обернуты компоненты отсветсвенные за рандомного персонажа, список персонажей, блок с инфо о персонаже, что при ошибке в любом из компоненте не руинить приложение, а выводить img с ошибкой только в соответствующем блоке.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
