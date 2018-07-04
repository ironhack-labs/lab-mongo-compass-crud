![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

query: /You should copy/paste the query in here/
projection: /You should copy/paste the projection in here/
sort: /You should copy/paste the sort in here/
skip: /You should copy/paste the skip in here/
limit: /You should copy/paste the limit in here/

query:
projection:
sort:
skip:
limit:

# Answers

## 1. Find all the companies that include 'Facebook' on the **name** field.

 - **`query`**: {name: 'Facebook'}
 
 ## 2. Find all the companies which **category_code** is 'web'. Retrive only their `name` field:

 - **`query`**: {category_code: 'web'}
 - **`projection`**: {name: 1, _id: 0}

## 3. Find all the companies named "Twitter", and retrieve only their `name`, `category_code` and `founded_year` fields.

query: {name: "Twitter"}
projection: {category_code:1, founded_year:1, _id: 0}}
> db.companies.find({name: "Twitter"}, {category_code:1, founded_year:1})

## 4. Find all the companies who have `web` as their **category_code**, but limit the search to 50 companies.
query: {category_code: "web"}
projection: {category_code:1, _id:0}
limit: limit(50)
> db.companies.find({category_code: "web"}, {category_code:1, _id:0}).limit(50)

## 5. Find all the companies which **category_code** is 'enterprise' and have been founded in 2005. Retrieve only the `name`, `category_code` and `founded_year` fields.

query: {category_code: "enterprise", founded_year:2005}
projection: {name:1, category_code:1, founded_year:1, _id: 0}})
> db.companies.find({category_code: "enterprise", founded_year:2005}, {name:1, category_code:1, founded_year:1})

## 6. Find all the companies that have been **founded** on the 2000 or have 20 **employees**. Sort them descendingly by their `number_of_employees`.

query: { $or: [{founded_year:2000},  {number_of_employees:20}]}
Sort: .sort({number_of_employes:-1}) //(-1)Desending Order
> db.companies.find({ $or: [{founded_year:2000},  {number_of_employees:20}]}).sort({number_of_employes:-1})

## 7. Find all the companies that do not include `web` nor `social` on their **category_code**. Limit the search to 20 documents and retrieve only their `name` and `category_code`.

query: { $nor:[{category_code: "web"}, {category_code:"social"}]}
projection: {name: 1, category_code: 1, _id: 0}
limit: limit(20)
> db.companies.find({ $nor:[{category_code: "web"}, {category_code:"social"}]}, {name: 1, category_code: 1, _id: 0}).limit(20)
  
 ## 8. Find all the companies that were not **founded** on 'June'. Skip the first 50 results and retrieve only the `founded_month` and `name` fields.

query: {founded_month: {$ne: 6 }}
projection: {founded_month:1, name:1, _id:0})
skip: skip(50)
> db.companies.find({ founded_month: { $ne: 6 }}, {founded_month:1, name:1, _id:0}).skip(50)
 
## 9. Find all the companies that have 50 employees, but do not correspond to the 'web' **category_code**. 

query: { $and: [{number_of_employees:50}, { category_code: {$ne: 'web'}} ]
> db.companies.find({ $and: [{number_of_employees:50}, { category_code: {$ne: 'web'}} ]})

## 10. Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their **category_code**. Retrieve only the `founded_day` and `name` and limit the search to 5 documents.

query: {$and: [{founded_day:1}, {$nor: [{number_of_employees:50 }, { category_code:"web"}]}]}
projection: {name:1, founded_day:1}
limit: limit(5);
> db.companies.find({$and: [{founded_day:1}, {$nor: [{number_of_employees:50 }, { category_code:"web"}]}]},  {name:1, founded_day:1}).limit(5);
 
## 11. Find all the companies which the `price_amount` of the `acquisition` was **`40.000.000`**. Sort them by `name`.

query: {'acquisition.price_amount': 40000000}
sort: sort({name:1});
 > db.companies.find({'acquisition.price_amount': 40000000}).sort({name:1});

## 12. Find all the companies that have been acquired on January of 2014. Retrieve only the `acquisition` and `name` fields.

query:  {$and: [{'acquisition.acquired_month':1}, {'acquisition.acquired_year':2014}]}
projection: {name:1, acquisition:1, _id:0})
> db.companies.find( { $and: [ {'acquisition.acquired_month':1}, {'acquisition.acquired_year':2014} ] }, {name:1, acquisition:1, _id:0} )
