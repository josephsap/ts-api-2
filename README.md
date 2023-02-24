# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

- can view stocks on date
- return a list of tickers
- can create a portfolio
- can add stocks to portfolio
- 50,000 balance in portfolio


Problem
We want you to build a backend web server that maintains users data around an artificial portfolio containing a subset of 100 possible stocks (From S&P 500) for the user to buy and sell from the year 2017, given a starting budget of $100,000.
While we are leaving this fairly open ended here are some specific requirements we’d expect any solution to have:

Ability to manage a User via CRUD API
Ability to manage the User’s portfolio:

Stores a sequence of Trades, a Trade has at least:

Date of the Trade
Stock symbol
Amount of shares


Allows CRUD operations. Recall that all Trades need to be constrained by the initial budget.
Allows for a CSV file upload that should replace the Trades in the Portfolio with the Trades in the file
Should include an API called evaluate that returns the value of a portfolio given a date in 2017.




Provided to you

JSON of stock symbols and prices per trading day in the year 2017
This README.md file


Submission Expectations

You can use your language of choice!
A README.md describing the file structure, contents, and any specific
A Dockerfile should be created that we can build and then run, the server in the container should bind to port 80. For example we should be able to run something like the following:

docker build -t latest .
docker run -p 5000:80 latest


Need a databases/storage mechanism? No problem, please include a docker-compose.yml that can be used in conjunction with your Dockerfile
Tar/Zip your source and send in when done