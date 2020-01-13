# Welcome to KOROIBOS

The Koroibos API is a statistics API for the 2016 olympics that was built as a 48 hour challenge. Users can call on a number of endpoints that return information about the athletes and events.

Koroibos is deployed to Heroku, and is located at: <insert url here>


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
### Run Migrations
```
python manage.py db init
python manage.py db migrate
python manage.py db upgrade
```

### Run the Server
```
npm start
```
or
```
nodemon start
```
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
### **Tech Stack**
- JavaScript
- NodeJS
- Express
- PostgeSQL
