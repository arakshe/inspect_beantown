# inspect beantown
HackBeanPot Application
INSPECT BEANTOWN: for all your health and safety needs
BeanTown X HackBeanPot

## Planned Tech Stack 
### Frontend
- HTML, CSS, JavaScript
### Backend
- Node.js
- Express
- https://docs.mapbox.com/mapbox-gl-js/example/set-config-property === This is mapbox: Immersive Maps for the Web
- Use this API to get food inspection details === http://docs.ckan.org/en/2.9/api/
- Yelp API - to get reviews

## Features
- Ability to look up a restaurant, and click on the restaurant, and we get a card including the food grade
- Filtering options === connected to quieries 
    - Restaurants that don't have violations, PASS, FAIL
    - Last inspection date
    - Location / proximity
    - Price Range
    - Operating Hours == Yelp
    - Rating == Yelp
- Interactive Map
- Detailed Restaurant Profile Information
- About Us

For the Future:
- BookMarking
- Password + Username
- Sharing Features

## Teams
- Shell of the website
- SQL querying
- API work

let's code it up 

## Setting up the project
- To get the package.lock-json, type npm init, answer the questions
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;
- create .env file and put all secret passwords in there
- Rest API communicates data, a website really just displays something


- Get the coordinates
- Query an API that will get all the information inside the bounding box
    - when the user clicks on it, itll show all the information