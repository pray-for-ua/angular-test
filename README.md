# angular-test-task

## Instructions for Installation
1. Fork and Clone Repository.
2. Open terminal and `cd` to path of the repo.
3. Install any node modules: `npm install`
4. Install gulp: `npm install gulp -g`

## Running the Enviornments
### Development
` npm run dev `

### Test (Karma-Mocha-Chai)
` npm run test `

### Production
` npm run build `


## Generators
This app comes with some helpful and generators for creating a new component/service. You simply have to hook them up to your components.js and services.js file.

### To create a new component:
` gulp component --name <NAME_OF_YOUR_COMPONENT> `

### To create a new common component:

` gulp common_component --name <NAME_OF_YOUR_COMPONENT> `

### To create a new service

` gulp service --name <NAME_OF_YOUR_SERVICE> `


##Project Structure

```
/app
  /assets
    /images
      /foo.png
  /common
    /button
      /button.js
      /button.component.js
      /button.controller.js
      /button.html
      /button.scss
      /button.test.js
    /navbar/
    /components.js
  /components
    /about
      /about.js
      /about.component.js
      /about.controller.js
      /about.html
      /about.scss
      /about.test.js
    /home/
    /components.js
  /services
    /users
      /users.js
      /users.service.js
      /users.test.js
    /documents/
    /services.js
  /app.config.js
  /index.js
  /index.html
  /index.scss
```

### Main/Entry File To the Project
`index.js` is the main entry file which serves as the total include point for all of your components, services, assets, and styles. 
