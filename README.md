This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## feed-format

The whole system consists of 3 modules.  
1. A system which scraps data from social sites like twitter and facebook
2. This system takes the data from the previous and gives information about kinds of elements present ina tweet like username, link, entities etc


### Problem Statement:  
This modules should take tweet text from the first module and the output generated from second module for that particular as inputs. The output is a marked up version with html styles for the same tweet

### Approach:
Because the system has to be extensible in terms of new information that can be scrapped, styling the elements, I have taken a factory pattern so that depending on the need you can add more to the system.  
Taking the same to implementation, we have a twitter class which takes a tweet and the parsed information about the tweet text.  
Now the job is to add markup styling to the test as per the elements.

To talk about the components of the code:
1. Styling
    1. There will be one class ```HTMLMaker``` which will be a factory to the underlying stylings available
    2. The factory needs to get understand which styling is need and it will generate appropiate kind of result to the caller.```anchor, strong, paragraph```
2. Social Media
    1. Similar to the styling, the ```tweetFormatter``` class will be the center point for operation based on the element type present in the tweet
    2. The ```entity, link, username``` classes will be created and methods will be called based on the type that is requested from the above factory
3. Constants 
    1. These are like enumeration classes but created with custom use cases.
    2. They will act like the handshake between new stylings that are going to be built in future as well as for the entities
    3. Incase a new social media scrapper is added, accordingly new enumerations can be created and used for the factory pattern to be followed.
   
 
 ### To create a new decoration:
 1. Create a constant in ```markupTypes.js```
 2. Make a file ```<newMarkupElement>.js``` in ```htmlMarker/markupElements.js``` with your appropirate styling
 3. Add your decoration in switch case in ```htmlMarker.js``` 
   
 ### To create a new tweet element:
 1. Create a constant in ```feedParseTypes.js```
 2. Make a file ```<newTweetElement>.js``` in ```tweet/format/parseElements``` and use the HTMLMarker class to tell which markup styling is needed (steps are mentioned above to create a new markup style)
3. Add your element in switch case in ```tweetFormatter.js``` 
 
