# Clean-Architecture-Blog-CRUD
  # Clean Architecture Blog CRUD
  
This repository contains a backend application showcasing a Clean Architecture implementation for managing employer information with CRUD (Create, Read, Update, Delete) operations. Clean Architecture is an architectural pattern that emphasizes separation of concerns, maintainability, and testability.

## Table of Contents
- [Features](#features)
- [Clean Architecture Principles](#clean-architecture-principles)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributors](#contributors)
- [License](#license)

## Features
- **Create:** Add new employer records with relevant details, including an optional image.
- **Read:** Retrieve a list of all employers or get details for a specific employer by their ID.
- **Update:** Update employer information and their associated image.
- **Delete:** Delete an employer record by their ID.

## Clean Architecture Principles
The project adheres to the SOLID principles, focusing on:
1. **Single Responsibility Principle (SRP):** Each component, including controllers, services, and repositories, has a clear and single responsibility.
2. **Open-Closed Principle (OCP):** The architecture is designed to be open for extension and closed for modification, allowing easy addition of new features without altering existing code.
3. **Liskov Substitution Principle (LSP):** Subtypes must be substitutable for their base types, ensuring flexibility in component interchangeability.
4. **Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use, reducing unnecessary dependencies.
5. **Dependency Inversion Principle (DIP):** High-level modules do not depend on low-level modules. Both should depend on abstractions, fostering decoupling.

## Technologies
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) (for working with MongoDB)
- [Multer](https://www.npmjs.com/package/multer) (for handling file uploads)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) (Software architectural pattern)

## Endpoints

  - `POST /add`: Register a new user.
  - `POST /update/:id`: Authenticate and login a user.
  - `DELETE /deleteJob/:id`: Delete a specific job listing.
  - `GET /all`: Get job listings associated with the user.



## Run Locally

Clone the project

```bash
  git clone https://github.com/Aymsep/Clean-Architecture-Blog-CRUD
```

Go to the project directory

```bash
  cd my-project
```

Set up environment variables:

Create a `.env` file and configure environment variables.


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

