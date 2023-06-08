# API Documentation
<p>
    Only for Freshers
</p>

# Table of Contents
<details>
<summary><b>API's</b></summary>
<!-- MarkdownTOC -->

1. [GET:](#GET)
2. [POST:](#POST)
3. [PUT:](#PUT)
4. [DELETE:](#DELETE)

<!-- /MarkdownTOC -->
</details>

<h2>Authorization Middleware</h2>
<p>
    Add in header for authorization

    Add Headers
        key     =>  Authorization
        Value   =>  qwerty6284
</p>

<a id="GET"></a>
GET => /api/user

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

<a id="POST"></a>
POST => /api/user

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

<a id="PUT"></a>
PUT => /api/user/:id

<h4>Examples </h4> Update the API documentation
<p>
    API => PUT http://localhost:6284/api/user/20230606141425

    JSON:
    {
        "name": "Prashant"
    }

    OUTPUT =>
    {
        "data": {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        }
    }
</p>

<a id="DELETE"></a>
DELETE => /api/user/:id

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