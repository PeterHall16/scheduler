# Science-Olympiad-Scheduler
### README updated 12/24/2020

## Abstract
Science Olympiad is a middle and high school competition in the United States. A challenege commonly faced by coaches/management of Science Olympiad teams is how to schedule their students to optimize competition performance. The goal of this project was to create a program to both automate this process and provide greater certainty that the schedule produced is ideal. Using data regarding team member's skills, this algorithm generates thousands of schedules, selecting the best configuration for use.

## Competition Structure
Science Olympiad consists of 23 events covering a variety of STEM fields. Students will typically participate in five to ten events based upon their interests however they would not necessarily compete in all of these events at a competition.

Competitions are structured as follows:

* There are six periods during which all 23 events will be held.
* The period in which a team will compete in a certain event is predetermined for some events, but other events can be scheduled by the team.
* A team consists of a maximum of 15 students. Between these 15 students ideally all 23 events would be filled.
* Depending on the event, two or three students can compete in that event from each team.
* For Division B (grades six through nine), a maximum of five ninth graders are allowed on a team.
* For Division C (grades nine through twelve), a maximum of seven ninth graders are allowed on a team.

Throughout development, the schedule from the 2019 Ohio State Tournament was used.

## Problem Background
The problem is to create a program that can create competitive, optimized competition schedules in a reasonable amount of time. This problem is difficult as it deals with both hard and soft constraints when creating a schedule that is not only valid but also competitive.

A valid schedule meets the following conditions:
* No student is competing in more than one event at once
* There are no more than 15 students competing on that team
* The division specific limits are not exceeded. (No more than seven twelth graders for Division C and no more than five ninth graders for Division B)

A competitive schedule is defined subjectively, however within this project the competitiveness of a schedule is described by its fitness. Fitness is calculated by summing the individual talent of every competitor in all the events they compete in and then dividing this sum by the maximum possible fitness.

## Usage
### Node.js
This application requires you to have Node.js installed on your computer. Downloads can be found at https://nodejs.org/en/.

### TypeScript
The algorithm is written in the [TypeScript](https://www.typescriptlang.org) language, it can be installed with the command `npm install -g typescript`. Depending on permissions, you may need to run this command as an administrator.

### Installing the necessary libraries
Once you have Node.js installed, open a command line at the parent directory of the project ("Science-Olympiad-Scheduler") and run the command `npm install`.

### Choosing data for the program to read.
Add your Excel file titled "Data.xlsx" to the parent directory. Make sure the file follows the formatting of the example data.

### Build the files
In the parent directory console, run `npx tsc` to build the necessary files.

### Running the program
In the parent directory console, run `npm run launch`.
