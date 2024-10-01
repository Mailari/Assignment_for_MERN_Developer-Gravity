# Assignment Repository Gravity

This repository contains solutions for the following tasks:

1. **DSA Problem: Two Number Sum**
2. **MongoDB Aggregation Problem**
3. **React To-Do Application**

## 1. DSA Problem: Two Number Sum

- **File**: `two_number_sum_question1.js`
- **Description**: This script finds two numbers in an array that sum up to a given target. It returns their indices.
- **Algorithm**: It uses a HashMap to achieve a time complexity of O(n).

### How to Run:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Run the following command to execute the script:
   ```bash
   node two_number_sum_question1.js
   ```

## 2. MongoDB Aggregation Problem

- **File**: `mongodb_aggregation_question2.js`
- **Description**: This MongoDB script contains an aggregation pipeline to calculate total revenue and average item prices for each store by month.
- **Key Aggregation Stages**:
  - **`$unwind`**: Breaks arrays into individual documents.
  - **`$group`**: Groups data by store and month.
  - **`$project`**: Calculates total revenue and average price.

note: the script using free atlas instance

### How to Run:

1. **Execute the aggregation script**:
   ```bash
   node mongodb_aggregation_question2.js
   ```

## 3. React To-Do Application

- **Folder**: `todo-app`
- **Description**: A simple React application that allows users to manage a to-do list with features such as adding tasks, marking them as complete, deleting tasks, filtering tasks, and persisting tasks in local storage.

### Features:

- **Add new tasks**: Users can input a new task and add it to the list.
- **Mark tasks as complete**: Click on a task to toggle its completion status.
- **Delete tasks**: Remove tasks from the list.
- **Filter tasks**: View all, completed, or pending tasks.
- **Local storage**: Tasks are saved in local storage to persist across page refreshes.

### Installation:

1. **Clone the repository**:
   ```bash
   cd todo-app
   ```
   ```
   npm install
   ```
   ```
   npm start
   ```
   these commands will help us to run project locally
