# Team Profile Generator

## 📂 Table of Contents 
- [Description](#wave-description)
- [User Story](#open_book-user-story)
- [Resources Used](#floppy_disk-resources-used)
- [Usage](#minidisc-usage)
- [Contributors](#paperclip-contributors)
- [Contact Information](#e-mail-contact-information)

## :wave: Description
### 📋 Put It Into Perspective
Welcome to this Team Profile Generator, a command-line application built using Node.js. Enables users to create team profiles by answering a series of prompts. The information provided is then used to generate a structured HTML output. Put it into perspective and create a visual representation of your team profile!

### :rocket: Features:
- Optimized GUI to highlight employee array
- Capability of deleting existing employee objects before printing to HTML
- Structured HTML to showcase employee data

### 🎯 Follows Best Practices:
The focus of this project was to emphasize modern approaches. Team Profile Generator was built using the principles of Object Oriented Programming and Test Driven Development.

### 🌐 Accessible and Open:
The repository encourages exploration and collaboration, with the codebase thoughtfully organized and easily modifiable. Feel free to delve into the code, contribute, and customize it to your needs.

## :open_book: User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
    - THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
    - THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
    - THEN that GitHub profile opens in a new tab
- WHEN I start the application
    - THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
    - THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
    - THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
    - THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
    - THEN I exit the application, and the HTML is generated
      
## :floppy_disk: Resources Used
- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Jest

## :minidisc: Usage
Requires `node` to play this game

Run `npm i` to install dependencies 
  - "jest": "^29.7.0",
  - "inquirer": "^8.2.6"

Invoke jest tests by running `npm run test`

Invoke the generator by running `node index` or `node index.js`

1) Start by filling out the base Employee File, include a name and email.
2) Alongside name and email, the new employee object will contain a numerical ID and an initial role of 'Employee'. (NOTE: ID's are determined by the placement of the object within an EmployeeArray)
3) Select a specific role for the employee, options are Manager, Engineer, Intern.
4) Enter prompts for each specific employee.
5) Users can remove any Employee object before generating HTML.
6) Finishes by creating an HTML output within the /dist directory.

## :paperclip: Contributors
- jwilferd10

## :e-mail: Contact Information

- GitHub: [jwilferd10](https://github.com/jwilferd10)
  - Email: jwilferd10@yahoo.com
