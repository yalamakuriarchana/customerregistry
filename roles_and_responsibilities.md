# Customer Registry – Roles and Responsibilities

# Introduction

The Customer Registry application involves different users who perform specific tasks within the system. Each role has defined responsibilities to ensure efficient customer management, secure access, and smooth operation of the application.

---

# User Roles

The Customer Registry system consists of the following roles:

- Customer
- Administrator (Admin)
- Agent

---

# 1. Customer

The Customer is the primary user of the application who creates and manages personal information.

## Responsibilities

- Register a new account.
- Login securely into the system.
- Create and update personal profile information.
- View customer profile details.
- Submit customer information.
- Search and view their own records.
- Edit profile information when required.
- Receive notifications regarding account activities.
- Logout securely from the application.

---

# 2. Administrator (Admin)

The Administrator manages the entire Customer Registry system.

## Responsibilities

- Manage customer records.
- Add new customer information.
- Update customer details.
- Delete customer records.
- View all customer information.
- Monitor system activities.
- Manage user accounts.
- Assign roles and permissions.
- Maintain database integrity.
- Generate reports.
- Ensure data security.
- Monitor application performance.

---

# 3. Agent

Agents assist customers and help maintain customer information.

## Responsibilities

- View assigned customer records.
- Update customer information when required.
- Help customers resolve issues.
- Verify customer details.
- Search customer information.
- Maintain accurate customer records.
- Report issues to the administrator.
- Provide customer support.

---

# Access Control

| Role | View | Add | Update | Delete | Manage Users |
|------|------|-----|--------|--------|--------------|
| Customer | ✓ Own Data | ✓ | ✓ Own Data | ✗ | ✗ |
| Agent | ✓ Assigned Records | ✗ | ✓ | ✗ | ✗ |
| Admin | ✓ All Records | ✓ | ✓ | ✓ | ✓ |

---

# Responsibilities During System Workflow

## Customer

- Registers into the application.
- Logs in using valid credentials.
- Provides customer details.
- Updates personal information.
- Views account information.

## Agent

- Reviews assigned customer records.
- Verifies customer information.
- Updates customer records.
- Provides customer assistance.

## Administrator

- Controls the entire application.
- Manages users and customer data.
- Performs CRUD operations.
- Maintains database security.
- Generates reports and monitors system performance.

---

# Benefits of Role-Based Access

- Improves security.
- Protects customer information.
- Prevents unauthorized access.
- Simplifies system management.
- Ensures data integrity.
- Provides better accountability.
- Supports scalable application development.

---

# Conclusion

The Customer Registry application follows a Role-Based Access Control (RBAC) approach. Customers manage their own information, agents provide support and maintain customer records, and administrators oversee the complete system. Clearly defined roles improve security, efficiency, and maintainability of the application.
