# Django-Rasa-Sockets
Rasa Chatbot using Django backend and Sockets for communication

**Assuming you have a starter django project with static and templates folder configured with django and a root index view rendering ```index.html``` file from templates folder**

**A basic rasa core and rasa nlu made chatbot with socket.io setup is inside rasachat folder of the repo**

**Steps to setup socket.io**

1. Install NodeJS from official [site](https://nodejs.org/en/).

2. Inside root folder run command
	```
	npm init
	```
	You will be asked to enter details for the project, you can enter whatever you want.
	This command will create a ```package.json``` file.

3. Install [socket.io](https://www.npmjs.com/package/socket.io) using npm
	```
	npm install --save socket.io
	```

4. Install [browserify](http://browserify.org/#install) using npm globally
	```
	npm install -g browserify
	```

5. Now in **static/js** folder, create two files, one for backend javascript code and 	
	another for frontend which will be created by browserify

	```
	chat.js 	-> backend written by us
	bundle.js 	-> frontend compiled by browserify
	```

6. When you have your backend javascript code ready with socket.io setup run browserify 
	command to compile file for frontend

	```
	cd static/js
	browserify chat.js -o bundle.js
	```

7. In **templates/index.html** file load static and add script tag for browserify 
	compiled ```bundle.js``` file

	```
	<script src="{% static 'js/bundle.js' %}" type="text/javascript" charset="utf-8"></script>
	```
	You can reuse the javascript code from the repo

8. Run the django server from root folder
	```
	python manage.py runserver
	```

	Run the rasa core server from rasachat folder
	```
	cd rasachat
	python bot.py 	-> python script for rasa socket server
	# or you can run using run script
	python -m rasa_core.run -d models/dialogue -u models/current/nlu --port 5500 --credentials credentials.yml 		-> Using run script
	```
	interact with chatbot using sockets and django.

# Usage
```
git clone https://github.com/Alexmhack/Django-Rasa-Sockets
```

Replace the **rasachat** folder with your rasa core chatbot and follow the **
8th step**

Locate to [127.0.0.1:8000/](http://127.0.0.1:8000/) and click on button at 
bottom right and enter ```hey``` in the input.
