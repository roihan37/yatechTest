
## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /pokemon`


//userlogin register google
&nbsp;

## 1. POST /register

Request:

- body:

```json
{
    "username" : "string",
    "email" : "string",
    "password" : "string",
}
```

_Response (201 - Created)_

```json
{
  "message" : "Account has been created"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Username is required"
}
OR
{
  "message": "Email already exists"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Incorrect e-mail format"
}
OR
{
  "message": "Password is required"
}

```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
    "email" : "string",
    "password" : "string",
}
```

_Response (200 - OK)_

```json
{
  "access_token" : "string",
  "username" : "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email / Password Required"
}

```

_Response (401 - Unauthorized)_

```json
{
  "message": "Email / Password Invalid"
}

```

&nbsp;


## 5. GET /pokemon

Description:
- Get all products from Endpoints

Request:

- headers:

```json
{
    "access_token": "string"
}
```

_Response (200 - OK)_

```json

    {
        "abilities": [
            {
                "ability": {
                "name": "limber",
                "url": "https://pokeapi.co/api/v2/ability/7/"
                },
                "is_hidden": false,
                "slot": 1
            },
            ...
        ],
        "base_experience": 101,
        "forms": [
            {
                 "name": "ditto",
                "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
            }
        ],
        ...
    }

_Response (401 - Unauthorized)_

```json
{
  "message": "Email / Password Invalid"
}

```

&nbsp;

## Global Error

Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
