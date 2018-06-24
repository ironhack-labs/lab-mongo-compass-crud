![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Answers

## 1. Find all the companies that include 'Facebook' on the **name** field.

<!-- db.companies.find -->
-**`query`**:({name: "Facebook"})

 ## 2. Find all the companies which **category_code** is 'web'. Retrive only their `name` field:

 - **`query`**: {category_code: 'web'}
 - **`projection`**: {name: 1,_id: 0}
 db.companies.find({$and: [ {category_code:'web'}]}, {name:1, _id:0})

## 3. Find all the companies named "Twitter", and retrieve only their `name`, `category_code` and `founded_year` fields.

-**`query`**  
db.companies.find({name:"Twitter"},{_id:0,name:1, category_code:1, founded_year:1})

## 4. Find all the companies who have `web` as their **category_code**, but limit the search to 50 companies.

db.companies.find({category_code: 'web'},{limit: 50})

## 5. Find all the companies which **category_code** is 'enterprise' and have been founded in 2005. Retrieve only the `name`, `category_code` and `founded_year` fields.

db.companies.find({$and:[{category_code:'enterprise'},{founded_year:2005}]},{name:1, category_code:1, founded_year:1, _id:0})


## 6. Find all the companies that have been **founded** on the 2000 or have 20 **employees**. Sort them descendingly by their `number_of_employees`.

db.companies.find({$or: [{founded_year:2000},{number_of_employees:20}] } , {_id:0, name:1, number_of_employees:1, founded_year:1}, {$sort: {number_of_employees:-1}})


## 7. Find all the companies that do not include `web` nor `social` on their **category_code**. Limit the search to 20 documents and retrieve only their `name` and `category_code`.

db.companies.find({$nor:[{category_code:'web',category_code:'social'}]}, {_id:0, name:1, limit:20})


## 8. Find all the companies that were not **founded** on 'June'. Skip the first 50 results and retrieve only the `founded_month` and `name` fields.

db.companies.find({$nor:[{founded_month:6}]},{_id:0, name:1, founded_month:1, skip:50})
## 9. Find all the companies that have 50 employees, but do not correspond to the 'web' **category_code**.

db.companies.find({$and:[{category_code:{$ne: 'web'},{number_of_employees:50}]},{_id:0,category_code:1})
## 10. Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their **category_code**. Retrieve only the `founded_day` and `name` and limit the search to 5 documents.

## 11. Find all the companies which the `price_amount` of the `acquisition` was **`40.000.000`**. Sort them by `name`.

## 12. Find all the companies that have been acquired on January of 2014. Retrieve only the `acquisition` and `name` fields.
