<img src="public/images/favicon/android-chrome-192x192.png" alt="app icon" title="app icon" width="70px">

# StackStore

A simple application for finding, keeping, tagging and making notes on Stack Overflow questions!

With StackStore, you can:

- search for Stack Overflow questions by title
- view questions and answers
- save questions to your own store
- add tags and notes to questions and view questions by tag

You can view a demo of the app over on YouTube: [youtube.com/watch?v=47qTNiLzgQU](https://www.youtube.com/watch?v=47qTNiLzgQU)</a>.

[![YouTube demo](https://img.youtube.com/vi/47qTNiLzgQU/maxresdefault.jpg)](http://www.youtube.com/watch?v=47qTNiLzgQU)

## Online use

The app is available to use for free at [stackstore.yndajas.co](http://stackstore.yndajas.co) (link will redirect to GitHub)!

## Local use

You can run a copy of the app offline for local use. After cloning or downloading the repository, follow the instructions below.

### Installation

The following instructions are for Windows Subsystem for Linux/Ubuntu, but it's also possible to run the app on other systems. The only difference should be the method for starting the PostgreSQL server - I don't have instructions for this, but [check the PostgreSQL website](https://www.postgresql.org) for more information.

Install Ruby ([help](https://www.ruby-lang.org/en/documentation/installation)), then in a terminal:

1. `gem install bundler`
2. change directory to StackStore backend (e.g. `cd /mnt/c/Users/yndaj/Documents/GitHub/StackStore/backend`, replacing the path with wherever you've downloaded/moved the repository, followed by `/backend`)
3. `bundle install`
4. if you don't have PostgreSQL installed: `sudo apt-get install postgresql`
5. `sudo service postgresql start` (if you get an error saying a user doesn't exist, try the following first, changing '<USERNAME>' to the username mentioned in the error: `sudo -u postgres createuser --superuser <USERNAME>`)
6. `rake resetdb` - or, if you want to start with a clean database (no test data), run `rake db:drop`, `rake db:create` and `rake db:migrate`
7. `cd ..` return to the root of the project directory
8. `npm install` install npm packages required by React app

### Usage

#### Load up the backend server

In a terminal, from the 'StackStore' directory:

1. `cd backend`
2. `rails s`

#### Load up the frontend server

In a separate terminal instance, from the main 'StackStore' directory (not the 'backend' subdirectory):

1. `npm start`
2. type `y` when it tells you port 3000 is already in use (the app will use port 3001)
3. open 'localhost:3001' in your browser

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/yndajas/StackStore](https://github.com/yndajas/StackStore).

## Licence

This app is made available open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Credits

Search function built on the [Stack Exchange API](https://api.stackexchange.com).

Logo icon/favicon based on shape (colour edited for use on StackStore) by [Freepik](https://www.flaticon.com/authors/freepik), available [here](https://www.flaticon.com/free-icon/stacked-files_17640).

Background image by [Sander Ottens](https://www.sanderottens.com), available at [Transparent Textures](https://www.transparenttextures.com) (search 'cubes') and [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/cubes) (by Toptal).
