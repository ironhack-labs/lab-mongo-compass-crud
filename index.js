print("Connected to the DB")

//1

let facebook = db.companies.find({name: 'Facebook'}).pretty();

print(JSON.stringify(facebook));

//2

let web = db.companies.find({category_code: 'web'}, {name: 1, _id: 0}).pretty();

//3

let twitter = db.companies.find({name: 'Twitter'}, {name:1, category_code:1, founded_year:1, _id:0}).pretty();

//4

let web50 = db.companies.find({category_code: 'web'}, {name: 1, _id: 0}).limit(50);

//5

db.companies.find({category_code: 'enterprise', founded_year: 2005}, {name: 1, category_code: 1, founded_year: 1, _id: 0})

//6

db.companies.find({"founded_year": 2000, "number_of_employees": 20}).sort( {"number_of_employees": -1} )

//7

db.companies.find({$nor:[{"category_code": "web"}, {'category_code': 'social'}]}, {'name':1, 'category_code':1, _id:0}).limit(20)

//8

db.companies.find({$nor:[{"founded_month": 6}]}, {'name':1, 'founded_month':1, _id:0}).skip(50);

//9

db.companies.find( { "number_of_employees": 50,  $nor: [ { "category_code": "web" } ] }  );

//10. Find all the companies that have been founded on the 1st of the month, but does not have either 50 employees nor 'web' as their category_code. Retrieve only the founded_day and name and limit the search to 5 documents.

db.companies.find({"founded_month": 1, $nor:[{"category_code": "web"}, {"number_of_employees": 50}]}, {'name':1, 'founded_day':1, _id:0}).limit(5)

//11

db.companies.find({"acquisition.price_amount": 40000000}).sort({"name": 1}).pretty();

//12

db.companies.find({$and:[{"founded_month": "January"}, {'founded_year': 2014}]}, {'name':1, "acquisition":1, _id:0});


print("-----------------------------------------");