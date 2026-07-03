# Customer Registry - MVC Pattern

## Introduction

The Customer Registry application follows the **Model-View-Controller (MVC)** architectural pattern. MVC separates the application into three independent components: Model, View, and Controller. This separation improves code organization, scalability, maintainability, and makes development easier.

---

# MVC Architecture

```
                User
                  |
                  | HTTP Request
                  ▼
            Routes (View)
                  |
                  ▼
            Controller
                  |
        -------------------
        |                 |
        ▼                 ▼
     Model           Validation
        |
        ▼
    MongoDB Database
        |
        ▼
     Controller
        |
        ▼
   HTTP Response
        |
        ▼
       User
```

---

# Model Layer (Data Layer)

The Model is responsible for managing the application's data.

### Responsibilities

- Defines database schemas using Mongoose.
- Stores customer information.
- Stores complaint details.
- Performs CRUD (Create, Read, Update, Delete) operations.
- Validates data before saving.
- Communicates directly with MongoDB.

### Example Models

- Customer
- Admin
- Agent
- Complaint
- Feedback

---

# View Layer (Presentation Layer)

In this project, the View is implemented using the React frontend.

### Responsibilities

- Displays customer information.
- Provides registration and login pages.
- Shows dashboard and complaint forms.
- Displays complaint status.
- Displays notifications and feedback forms.
- Sends user requests to the backend.

### User Interfaces

- Registration Page
- Login Page
- Customer Dashboard
- Admin Dashboard
- Agent Dashboard
- Complaint Form
- Feedback Page

---

# Controller Layer

The Controller acts as the bridge between the View and the Model.

### Responsibilities

- Receives HTTP requests.
- Validates user input.
- Calls Model functions.
- Processes business logic.
- Sends responses back to the frontend.

### Controller Functions

- Register Customer
- Login User
- Create Complaint
- Update Complaint
- Assign Complaint
- Resolve Complaint
- Submit Feedback

---

# Request Flow

The application processes every request using the following workflow:

1. User performs an action in the React application.
2. React sends an HTTP request to the Express server.
3. Express routes forward the request to the appropriate Controller.
4. Controller validates the request.
5. Controller communicates with the Model.
6. Model performs database operations in MongoDB.
7. MongoDB returns the requested data.
8. Controller prepares the response.
9. React displays the updated information to the user.

---

# Technologies Used in MVC

| Layer | Technology |
|--------|------------|
| View | React.js, HTML, CSS, JavaScript |
| Controller | Node.js, Express.js |
| Model | Mongoose |
| Database | MongoDB |

---

# Advantages of MVC in Customer Registry

### Separation of Concerns

Each layer performs a specific responsibility, making the project organized.

### Easy Maintenance

Changes in one layer have minimal impact on other layers.

### Scalability

New modules and features can be added without affecting existing functionality.

### Code Reusability

Controllers and models can be reused throughout the application.

### Better Testing

Each component can be tested independently.

### Improved Collaboration

Frontend and backend developers can work simultaneously on separate layers.

### Enhanced Security

Sensitive business logic remains in the backend, preventing unauthorized access.

---

# Example MVC Flow

```
Customer
    |
    ▼
Login Page
    |
    ▼
React View
    |
    ▼
Express Route
    |
    ▼
Login Controller
    |
    ▼
Customer Model
    |
    ▼
MongoDB
    |
    ▼
Controller
    |
    ▼
React Dashboard
```

---

# Project Structure

```
CustomerRegistry
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.js
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Conclusion

The MVC architecture provides a structured and efficient way to develop the Customer Registry application. By separating the application into Model, View, and Controller layers, the project becomes easier to maintain, test, extend, and scale. This architecture supports better teamwork, cleaner code, improved security, and faster development, making it an ideal choice for full-stack web applications.
