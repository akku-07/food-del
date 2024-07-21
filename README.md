# Tomato: Full Stack Food Delivery Project [MERN]

## Introduction
The Food Delivery Project is a web application that allows users to order food online from various restaurants. It aims to provide a seamless and efficient experience for both customers and restaurant owners.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Features
- User authentication and authorization
- Browse and search for restaurants
- Add and remove items from the cart
- Place orders and track order status
- Admin dashboard for managing restaurants, menus, and orders

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/akku-07/food-del.git
    cd food-del
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. Start the backend server:
    ```bash
    cd ../backend
    npm run server
    ```

5. Start the frontend server:
    ```bash
    cd ../frontend
    npm run dev
    ```

## Usage
1. Navigate to `http://localhost:5173` in your browser.
2. Sign up or log in to access the application.
3. Browse restaurants, add items to your cart, and place orders.

## Project Structure
.
├── backend\
│   ├── config\
│   │   ├── db.js\
│   │   └── keys.js\
│   ├── controllers\
│   │   ├── orderController.js\
│   │   ├── paymentController.js\
│   │   └── userController.js\
│   ├── models\
│   │   ├── Order.js\
│   │   ├── Restaurant.js\
│   │   └── User.js\
│   ├── routes\
│   │   ├── orderRoutes.js\
│   │   ├── paymentRoutes.js\
│   │   └── userRoutes.js\
│   ├── middleware\
│   │   └── auth.js\
│   ├── .env\
│   ├── server.js\
│   └── package.json\
├── frontend\
│   ├── public\
│   │   ├── index.html\
│   │   └── favicon.ico\
│   ├── src\
│   │   ├── components\
│   │   │   ├── Navbar.js\
│   │   │   ├── RestaurantList.js\
│   │   │   └── Cart.js\
│   │   ├── pages\
│   │   │   ├── Home.js\
│   │   │   ├── Login.js\
│   │   │   ├── Register.js\
│   │   │   └── Checkout.js\
│   │   ├── App.js\
│   │   ├── index.js\
│   │   └── App.css\
│   ├── .env\
│   ├── package.json\
│   └── README.md\
└── README.md

- **Frontend:** Contains the React application.
- **Backend:** Contains the Node.js and Express.js application.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes.
4. Commit and push your changes:
    ```bash
    git commit -m 'Add some feature'
    git push origin feature-name
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
If you have any questions or suggestions, feel free to reach out to:

- **Name:** Aakruti Kalia
- **GitHub:** [akku-07](https://github.com/akku-07)
