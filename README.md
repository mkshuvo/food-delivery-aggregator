<p align="center">
  <a href="https://github.com/mkshuvo/food-delivery-aggregator" target="blank"><img src="https://raw.githubusercontent.com/mkshuvo/food-delivery-aggregator/master/fda-noodles.png" width="200" alt="Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<div style = content: align="center">
<h1># Food Delivery Aggregator(In progress)</h1>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

</div>


## Description
The project is in progress. The below are the project concept and planning. A comprehensive food delivery aggregator platform that brings together a variety of restaurants and food delivery services into one convenient application. Order your favorite meals from multiple restaurants and track your deliveries in real-time.

## Features
- Multi-Restaurant Support: Access a wide range of restaurants and cuisines all in one place.

- Real-Time Tracking: Track the status of your food delivery in real-time, from the restaurant to your doorstep.

- User Profiles: Create and manage user profiles with order history and preferences.

- Order Customization: Customize your orders by adding special instructions or dietary preferences.

- Secure Payment: Secure payment processing for hassle-free transactions.

- Reviews and Ratings: Rate and review restaurants and delivery services based on your experience.

- Notifications: Receive notifications for order updates and promotions.

- Multi-Platform: Available on web and mobile platforms for a seamless user experience.

## Getting Started - Clone the Repository

```
git clone https://github.com/mkshuvo/food-delivery-aggregator.git

cd food-delivery-aggregator
```

## Install Dependencies
`npm install`

## Database Configuration

Configure your database connection in docker-compose.yml.
```
      POSTGRES_HOST: postgres
      POSTGRES_PORT: 5432
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: mysecretpassword
      POSTGRES_DB: fda 
```

Make sure you have docker installed. Start the Application:

```
docker-compose up --build
```

Access the Application

Open your web browser and navigate to http://localhost:3000 to access the food delivery aggregator platform.

## Usage
- Browse available restaurants and select your desired items.
- Customize your order, provide delivery details, and complete the payment.
- Track your order in real-time and receive updates on its status.
- Leave reviews and ratings based on your experience.
- Contributing
- We welcome contributions from the community. If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

License
This project is licensed under the MIT License.

Feel free to customize this README to include specific details about your Food Delivery Aggregator project and any additional instructions or information you'd like to provide to users and contributors.
