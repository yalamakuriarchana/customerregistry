# Customer Registry – ER Diagram

# Introduction

An Entity Relationship (ER) Diagram is a visual representation of the database structure of the Customer Registry application. It illustrates the entities, their attributes, and the relationships between them. The ER Diagram helps developers understand how customer information is organized and stored in the MongoDB database.

---

# ER Diagram

```
                        +----------------------+
                        |      CUSTOMER        |
                        +----------------------+
                        | CustomerID (PK)      |
                        | FirstName            |
                        | LastName             |
                        | Email                |
                        | Phone                |
                        | Address              |
                        | DateOfBirth          |
                        | Gender               |
                        | CreatedAt            |
                        +----------------------+
                                  |
                                  |
                                  | 1
                                  |
                                  | M
                    +----------------------------+
                    |        CUSTOMER LOG        |
                    +----------------------------+
                    | LogID (PK)                |
                    | CustomerID (FK)           |
                    | Action                    |
                    | Date                      |
                    | Status                    |
                    +----------------------------+
```

---

# Entities

## 1. Customer

The Customer entity stores all customer information required by the system.

### Attributes

- CustomerID (Primary Key)
- FirstName
- LastName
- Email
- Phone Number
- Address
- Date of Birth
- Gender
- Created Date

Each customer has a unique CustomerID that identifies the record.

---

## 2. Customer Log

The Customer Log entity stores the history of actions performed on customer records.

### Attributes

- LogID (Primary Key)
- CustomerID (Foreign Key)
- Action
- Date
- Status

The CustomerID links each log entry to its corresponding customer.

---

# Relationship

The relationship between the entities is:

Customer (1) -------- (M) Customer Log

Meaning:

- One customer can have multiple log records.
- Each log record belongs to only one customer.

This represents a One-to-Many relationship.

---

# Database Design

The Customer Registry database is designed using MongoDB.

The customer collection stores:

- Personal Information
- Contact Details
- Address Information
- Registration Details

The log collection stores:

- Customer Activities
- Record Updates
- Status Changes
- Date and Time of Operations

---

# Advantages of the ER Diagram

- Organizes customer data efficiently.
- Reduces data redundancy.
- Improves database consistency.
- Simplifies customer management.
- Makes database maintenance easier.
- Supports future system expansion.

---

# Conclusion

The ER Diagram defines the structure of the Customer Registry database by identifying entities, attributes, and relationships. It provides a clear understanding of how customer information is stored and connected, making the application easier to develop, maintain, and scale.
