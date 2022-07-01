# ChatBot api

The api is hosted in heroku
End points is in 'https://chatbot-api-v1.herokuapp.com/v1/api/messages'
## Setup

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/hassan-elghiat/chatBot-web.git
$ cd chatBot-web
```

Create a virtual environment to install dependencies in and activate it:

```sh
$ py -3 -m venv .venv
$ .venv\scripts\activate
```

Then install the dependencies:

```sh
(venv)$ pip install -r requirements.txt
```


Once `pip` has finished downloading the dependencies:
```sh
(venv)$ python manage.py runserver
```
End point on local is in `http://127.0.0.1:8000/v1/api/messages`.