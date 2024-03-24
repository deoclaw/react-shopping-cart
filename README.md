# Shopping Cart React

Creates a basic shopping cart app

## To run

1. Download code.
2. Install `node`
3. `cd` into the project directory
4. Install any dependencies with `npm install`
5. Run the app with `npm run dev`

## Requirements

1. Setup and Basic Components

   ~~Initialize a new ReactJS application using Create React App.~~ Used Vite as create react app is depreciated

   :white_check_mark: Create a Product component to display product information: name, image, price, and an "Add to Cart" button.

   :white_check_mark: Implement a Products component to list available products, utilizing the Product component for each item.

2. Advanced Components and State Management

   :white_check_mark: Develop a Cart component to show items the user intends to purchase, including product name, image, price, quantity, and a "Remove from Cart" button.

   > ShoppingCart component

   :white_check_mark: Use React state to manage the items in the cart, implementing functionality to add and remove products.

3. Navigation and Routing

   :white_check_mark: Integrate react-router-dom for navigation, setting up routes for your Home, Product Detail, Search, and Cart pages.

   > Home is the Store page as it made more logical sense. Not sure exactly what Product Detail page refers to but all Project Details are implemented as Cards on the Store page. A Cart page allows one to review the cart and Checkout, which leads to a Form and another cart review

   > Ran out of time for search as of 3/24/24 6:33 PM

   :white_check_mark: Ensure smooth navigation within your application without page reloads.

4. Context for State Management

   :white_check_mark: Implement React Context to manage and share state across components, such as the shopping cart's content, avoiding prop drilling for deeply nested components.

5. Checkout and Form Handling

   :white_check_mark: Create a Checkout component with a form for shipping information and order review, displaying cart items and the total price.

   :white_check_mark: Handle form submissions, clearing the cart upon a successful submission and redirecting the user to a "Thank You" page.

6. Styling and User Interface

   :white_check_mark: Use CSS to style your components, focusing on creating a visually appealing and intuitive interface.
