<p align="center"><img src="for_README/my-character.gif" width="130"/></p>

# Currency converter

Hi! This is a simple currency converter I created as part of learning interactions in React.js.<br>
The user can choose their desired currency and convert it to Polish zlotys (PLN). The exchange rates are fetched from an API.<br>
It also displays the current date and time, as well as the date of the last exchange rate update.<br>
Additionally, I added an animated square using setInterval for practice, which is displayed during data loading from the API.

## Demo

[dondeptu.github.io/currency-converter-react](https://dondeptu.github.io/currency-converter-react/)

## Preview

![to-do-list preview](for_README/readme-review.gif)

## Technologies
Project is created with:

![css badge](https://img.shields.io/badge/CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=white)
![html badge](https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white)
![js badge](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![react badge](https://img.shields.io/badge/REACT.JS-%2361DAFB?style=for-the-badge&logo=react&logoColor=black)

- API
    - Async/Await
    - Axios
- Hooks:
    - useState
    - useEffect
- Custom hooks:
    - useCurrentDate
    - useRatesData
- Error handling 
    - try/catch
- setInterval
- setTimeout
- Styled Components
    - GlobalStyle
- Theme
- layout:
    - Grid
    - Flexbox
- Media Queries
- Normalize.css
- Immutability
- Webpack
- Create React App

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.