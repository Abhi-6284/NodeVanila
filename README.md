# API Documentation


GET     /api/user

<h4>Examples </h4> Read the API documentation
<p>
    API => GET http://localhost:6284/api/user

    OUTPUT:
    {
        "data": [
            {
                "_id": "20230606141425",
                "name": "Abhishek Lugun22",
                "created_At": "2023-06-06T08:44:23.447Z",
                "update_At": "2023-06-06T08:44:23.447Z",
                "__v": 0
            }
        ]
    }
</p>

POST    /api/user

<h4>Examples </h4> Write the API documentation
<p>
    API => POST http://localhost:6284/api/user

    JSON:
    {
        "name":"Abhishek"
    }

    OUTPUT:
    {
        "data": {
            "_id": "20230608125633",
            "name": "Abhishek",
            "created_At": "2023-06-08T07:25:20.679Z",
            "update_At": "2023-06-08T07:25:20.680Z",
            "__v": 0
        }
    }
</p>

PUT     /api/user/:id

<h4>Examples </h4> Update the API documentation
<p>
    API => PUT http://localhost:6284/api/user/20230606141425

    JSON:
    {
        "name": "Prashant"
    }
</p>

DELETE  /api/user/:id

<h4>Examples </h4> DELETE the API documentation
<p>
    API => DELETE http://localhost:6284/api/user/20230606141425

    OUTPUT =>
    {
        "userData": {
            "acknowledged": true,
            "deletedCount": 1
        }
    }
</p>

# Made By CaptAbhi