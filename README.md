Credit:
https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

Good examples of adding different features:
https://www.taniarascia.com/node-express-postgresql-heroku/#create-express-api


curl --location --request GET 'http://localhost:8080/users/'

curl --location --request GET 'http://localhost:8080/users/1'

curl --location --request POST 'http://localhost:8080/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "smith2",
    "email": "smith2@example.com"
}'

curl --location --request PUT 'http://localhost:8080/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
        "name": "smith3",
        "email": "smith3@example.com"
}'

curl --location --request PUT 'http://localhost:8080/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
        "name": "smith3",
        "email": "smith3@example.com"
}'

--validations
--logging
--unit testing
--code coverage
--authentication
--request limitation for dos attacks


https://mherman.org/blog/testing-node-js-with-mocha-and-chai/

https://medium.com/@asciidev/testing-a-node-express-application-with-mocha-chai-9592d41c0083