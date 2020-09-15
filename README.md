## Installation Steps

1. Install [https://www.nodejs.org](https://www.nodejs.org) globally
2. Install `Yarn` globally `npm install -g yarn` 
3. Install `git`
4. Clone the repository into your local machine
5. **IMPORTANT:** Please download and paste on the root of the project the *.env* file sent via email. This file contains the *Environment Varibales* needed to run this project, otherwise you'll see an error like this:

![No Env Vars Error](/docs/no-env-error.png)

To troubleshoot this issue, just create (or paste the file into the root folder) a `.env` file with this two ENV VARS on it

## To run the project
6. Do `yarn install` to install dependencies
7. Do `yarn start` to run the server and the live app

## Directory Structure

- `src/`
    - `__inttests__/` Integration tests
    - `assets/` Contains all the assets needed for the app
    - `components/` Contains all of unstated components (without redux connection)
    - `containers` Contains all the functional components which require redux connection
      - `index.ts` component itself
      - `styled.ts` file containing all the CSS styles within a styled-component Component
    - `i18n` Contains all the messages shown to the user across the app. For now there is only en-US locale and no language change framework.
    - `redux` Contains store managers
        - `actions` Actions creators for each of the slices of the Redux Store
        - `actionsTypes` Actions definitions
        - `reducers` Reducers slices
        - `selectors` Store selector hooks
        - `dispatchers` Action dispatchers (Replaces the old *mapDispatchToProps* object from "react-redux" )
        - `models` This folder contains all the types definitions needed on redux flow
        - `network` Folder containing functions that queries the API. Basically controlling the redux actions (REQUEST, SUCCESS, FAIL) depending on the API response.
  
  ## Store design

- `recipes` List of recipes returned by backend API will be stored here
- `assets` List of recipes assets required on the recipes, images for now
- `error` Controls the error page. On error flag set to true, this store will trigger a Error Page
- `selected` When a recipe is selected, this slice of state will contain all the information about it
- `entries` Aditional entries required by a recipe. Chef and Tags entries for now


## Technologies / Libraries Used

- Javascript
- ReactJs
- Redux
- React-Redux
- Thunk Middleware
- Axios
- HTTP Rest
- Typescript
- React Create App
- Styled Components
- React Testing Library
- Jest

## Screenshots

![Recipe](/docs/recipe.png)

![Recipe](/docs/recipePreview.png)
