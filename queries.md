![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## 1. Find all the companies that include 'Facebook' on the **name** field.
  db.companies.find({name:"Facebook"}) 
## 2. Find all the companies which **category_code** is 'web'. Retrive only their `name` field:
db.companies.find({category_code:"web"},{name:1,_id:0})


## 3. Find all the companies named "Twitter", and retrieve only their `name`, `category_code` and `founded_year` fields.
db.companies.find({name:"Twitter"},{name:1,_id:0,category_code:1,founded_year:1})

## 4. Find all the companies who have `web` as their **category_code**, but limit the search to 50 companies.
db.companies.find({category_code:"web"},{limit:50})

## 5. Find all the companies which **category_code** is 'enterprise' and have been founded in 2005. Retrieve only the `name`, `category_code` and `founded_year` fields.
db.companies.find({$and:[{founded_year:2005 },{category_code:"web"}]},{name:1,category_code:1,founded_year:1})

## 6. Find all the companies that have been **founded** on the 2000 or have 20 **employees**. Sort them descendingly by their `number_of_employees`.
db.companies.find({$or:[{founded_year:2000 },{number_of_employees:20}]},{number_of_employees:1}).sort({number_of_employees:-1})

## 7. Find all the companies that do not include `web` nor `social` on their **category_code**. Limit the search to 20 documents and retrieve only their `name` and `category_code`.
db.companies.find({$nor:[{category_code:"web" },{category_code:"social"}]},{name:1,category_code:1}).limit(20).
## 8. Find all the companies that were not **founded** on 'June'. Skip the first 50 results and retrieve only the `founded_month` and `name` fields.
 db.companies.find({founded_month:{$ne:6} },{name:1,founded_month:1}).skip(50)
## 9. Find all the companies that have 50 employees, but do not correspond to the 'web' **category_code**. 
db.companies.find({$and:[{number_of_employees:50 },{category_code:{$ne:"web"}}]}).count()

## 10. Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their **category_code**. Retrieve only the `founded_day` and `name` and limit the search to 5 documents.
db.companies.find({ $and: [ {founded_day:1}, {number_of_employees: {$ne:50}}, {category_code: {$ne:"web"}}]}, {founded_day: 1, name:1,_id:0}).limit(5)

## 11. Find all the companies which the `price_amount` of the `acquisition` was **`40.000.000`**. Sort them by `name`.
db.companies.find({'acquisitions.price_amount':40000000}).sort({name:1})
## 12. Find all the companies that have been acquired on January of 2014. Retrieve only the `acquisition` and `name` fields.
db.companies.find({$and:[ {'acquisitions.acquired_month':1},{'acquisitions.acquired_year':2014}]},{acquisition:1,name:1,_id:0}).count()
