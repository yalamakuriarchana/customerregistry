# Customer Registry – Technical Architecture
## Introduction
The Customer Registry is a Full Stack Web Application developed to manage customer information in a centralized and secure system. It enables users to store, retrieve, update, and delete customer records efficiently. The application is built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB as the database.
The project follows a three-tier architecture consisting of the Presentation Layer, Application Layer, and Database Layer. Communication between the frontend and backend is handled through RESTful APIs.
---
# System Architecture
```
                  User
                    │
                    ▼
        React.js Frontend (Client)
                    │
          HTTP REST API Requests
                    │
                    ▼
      Node.js + Express.js Backend
                    │
      Business Logic & Validation
                    │
                    ▼
           MongoDB Database
                    │
                    ▼
          Customer Information
```
---
# Components of the Architecture
## 1. User Interface (Frontend)
The frontend is developed using **React.js**, along with HTML, CSS, and JavaScript.
Responsibilities:
- Provides an interactive user interface.
- Allows users to add, update, search, and delete customer records.
- Sends HTTP requests to the backend.
- Displays responses received from the server.
---
## 2. Backend (Application Layer)
The backend is developed using **Node.js** and **Express.js**.
Responsibilities:
- Receives requests from the frontend.
- Performs business logic.
- Validates customer information.
- Processes CRUD operations.
- Connects with the MongoDB database.
---
## 3. REST API
The frontend and backend communicate through REST APIs.
Common API endpoints include:
| Method | Endpoint | Purpose |
|---------|----------|---------|
| GET | /customers | Retrieve all customers |
| GET | /customers/:id | Retrieve a customer |
| POST | /customers | Add a new customer |
| PUT | /customers/:id | Update customer information |
| DELETE | /customers/:id | Delete a customer |
---
## 4. Database
The application uses **MongoDB** to store customer information.
Each customer record contains fields such as:
- Customer ID
- Name
- Email
- Phone Number
- Address
- Registration Date
MongoDB stores this information as documents inside a collection.
---
## 5. Business Services
The backend provides several services including:
- Customer Registration
- Customer Profile Management
- Customer Search
- Customer Update
- Customer Deletion
- Data Validation
These services ensure efficient processing of customer information.
---
## 6. Security and Authentication
Security is an important part of the application.
The project implements:
- User Authentication
- Authorization
- Password Encryption
- HTTPS Communication
- Input Validation
These mechanisms help protect customer data and prevent unauthorized access.
---
## 7. Third-Party Integration
The application can integrate with external services such as:
- Email Service
- SMS Notification Service
These services can be used to send welcome emails, alerts, or notifications to customers.
---
# Request Flow
The overall workflow of the application is shown below.
```
User
   │
   ▼
React Frontend
   │
   ▼
REST API
   │
   ▼
Node.js + Express.js
   │
   ▼
MongoDB Database
   │
   ▼
Response
   │
   ▼
User
```
---
# Advantages
- Centralized customer information management.
- Fast and secure CRUD operations.
- Scalable architecture.
- Easy integration with third-party services.
- Responsive and user-friendly interface.
- Secure communication between client and server.
---
# Conclusion
The Customer Registry project follows a modern three-tier architecture using React.js, Node.js, Express.js, and MongoDB. The architecture separates the frontend, backend, and database, making the application modular, scalable, secure, and easy to maintain. REST APIs enable communication between different layers, while MongoDB provides efficient storage and retrieval of customer information.
