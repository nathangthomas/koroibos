# Welcome to KOROIBOS

The Koroibos API is a statistics API for the 2016 olympics that was built during a 48 hour challenge. Users can call on a number of endpoints that return information about the athletes and events.

Interact with Koroibos live on Heroku at: https://koroibos-stats.herokuapp.com/


### Table of Contents

<!--ts-->
   * [Table of Contents](#table-of-contents)
   * [Set Up](#set-up)
   * [Examples](#examples)
   * [Tech Stack](#tech-stack)
<!--te-->


## **Set Up**

### Clone repo
```
https://github.com/nathangthomas/koroibos
```
### Install dependencies
```
npm install
```
### Setting up local DEV database & Importing Data From CSV File
Enter the PSQL shell
`psql`
Create your database
`CREATE DATABASE koroibos_dev`
Move into your new database
`\c koroibos_dev`
Create database table
```
CREATE TABLE olympics_data (id SERIAL PRIMARY KEY,
Name TEXT,                                                                            
Sex TEXT,                                          
Age INT,
Height INT,
Weight INT,
Team TEXT,
Games TEXT,
Sport TEXT,
Event TEXT,
Medal TEXT);
```
Copy data from CSV into your new table
```
COPY olympics_data(name, sex, age, height, weight, team, games, sport, event, medal)
FROM '<full_file_path_of_csv_file>' delimiter ',' csv NULL AS 'NULL', HEADER);
```
### Setting up local TEST database & Importing Data From CSV File
Enter the PSQL shell
`psql`
Create your database
`CREATE DATABASE koroibos_test`
Move into your new database
`\c koroibos_test`
Create database table
```
CREATE TABLE olympics_data (id SERIAL PRIMARY KEY,
Name TEXT,                                                                            
Sex TEXT,                                          
Age INT,
Height INT,
Weight INT,
Team TEXT,
Games TEXT,
Sport TEXT,
Event TEXT,
Medal TEXT);
```
Copy data from CSV into your new table
```
COPY olympics_data(name, sex, age, height, weight, team, games, sport, event, medal)
FROM '<full_file_path_of_csv_file>' delimiter ',' csv NULL AS 'NULL', HEADER);
```
exit the PSQL shell
`/q`

### Run Migrations

`knex migrate:latest --env test`
`knex migrate:latest --env dev`

### Run Tests
`npm test` - to run all tests
`jest <test file path>` - to run a single test

### Run the Server
`npm start`

or

`nodemon start` - prevents you from having to restart the server after making changes

## **Examples**

`GET api/v1/olympians`
```
//Response Format
{
  "olympians":
    [
      {
        "name": "Maha Abdalsalam",
        "team": "Egypt",
        "age": 18,
        "sport": "Diving"
        "total_medals_won": 0
      },
      {
        "name": "Ahmad Abughaush",
        "team": "Jordan",
        "age": 20,
        "sport": "Taekwondo"
        "total_medals_won": 1
      },
      {...}
    ]
}
```

`GET api/v1/olympians?age=oldest`
```
//Response Format
{
  [
    {
      "name": "Julie Brougham",
      "team": "New Zealand",
      "age": 62,
      "sport": "Equestrianism"
      "total_medals_won": 0
    }
  ]
}
```

`GET api/v1/olympians?age=youngest`
```
//Response Format
{
  [
    {
      "name": "Ana Iulia Dascl",
      "team": "Romania",
      "age": 13,
      "sport": "Swimming"
      "total_medals_won": 0
    }
  ]
}
```
`GET api/v1/olympian_stats`
```
{
    "olympian_stats": {
      "total_competing_olympians": 3120
      "average_weight:" {
        "unit": "kg",
        "male_olympians": 75.4,
        "female_olympians": 70.2
      }
      "average_age:" 26.2
    }
  }
```
### **Tech Stack**
- JavaScript
- NodeJS
- Express
- PostgeSQL
