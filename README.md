# Backend Setup Instructions

This repository contains the backend code for Task Management Application . Follow the instructions below to set up and run the backend server.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible remotely

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the `server` directory: `cd server`.
3. Install dependencies using npm: `npm install`.

## Configuration

1. Create a `.env` file in the `backend` directory.
2. Add the following environment variables to the `.env` file:
PORT=5000
MONGODB_URI=your_mongodb_uri

## Running the Server

- To start the backend server, run: `npm run dev`.
- The server will start at `http://localhost:5000`.

  ## API Endpoints

### GET /api/todo
- Description: Get all todos
- Controller: `todoController`

### GET /api/singletodo/:id
- Description: Get a single todo by ID
- Controller: `singleTodoController`

### POST /api/todoadd
- Description: Add a new todo
- Controller: `todoAddController`

### PUT /api/todoupdate/:id
- Description: Update a todo by ID
- Controller: `todoUpdateController`

### DELETE /api/tododelete/:id
- Description: Delete a todo by ID
- Controller: `todoDeleteController`

### DELETE /api/tododeleteMany
- Description: Delete multiple todos
- Controller: `todoDeleteManyController`

   

