# ToDo-Quest

ToDo-Quest is a gameified ToDo list that adds an rpg aspect to a regular ToDo list. When one starts using the app, one will be able to add ToDos to their personal list. The user is prompted to set a difficulty or importance of the task as well as when the task is due. Once the ToDo is in the list, if it is completed before it is due. The user will gain experience points for that task based on its difficulty. If the user doesn't complete the task they will lose health points. Upon reaching 0 health points, the user will lose a level.

## Motivation
One of my biggest weaknesses is organization. If I don't stay on top of all of my tasks, I can lose track of the things I need to do very quickly. I thought it would be fun to enhance a regular task manager with a gameified element. This kills two birds with one stone. It makes a ToDo list more enticing to attract people that otherwise wouldn't use a ToDo list to start using one. Additionally, it adds another reason to complete the tasks put on the list.

## Trello
https://trello.com/b/6Yhv6ytl

## Wireframes
![HomePage](/resources/ToDoQuestHomePage.png)
![ProfilePage](/resources/ToDoQuestProfilePage.png)

## Tech Stack
This project uses a MEN stack

+ MongoDB
+ Express
+ node.js

## Features
This app features full CRUD capabilities. Users can Create, Update, and Delete ToDos. The page will read and display those todos on the list. The app also features a user account that will hold the data about a user including their personal ToDo list, their health points, and their experience.

## User Stories
+ As a User I want to add ToDos to the list
+ As a User I want to mark ToDos as completed
+ As a User I want to see my Health and Experience
+ As a User I want to set the difficulty of tasks