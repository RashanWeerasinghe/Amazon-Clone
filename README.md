# SL-EPMS 

## Project Description
SL-Clone is an Employee and Project Management System built to efficiently manage employees, projects, and administration tasks. This Node.js-based web application offers features such as user registration, authentication using JWT, role-based authorization, and a set of RESTful APIs for managing employees and projects.

### GitHub Repository
- GitHub Repository Link: [SL-Clone GitHub](https://github.com/RashanWeerasinghe/SL-Clone.git)

### Technologies Used
- Node.js: Backend development
- Express.js: Web application framework
- MySQL: Database management
- JSON Web Tokens (JWT): User authentication and authorization

### Features
- User registration and login with JWT authentication.
- Role-based authorization for admin, editor, and other user roles.
- RESTful APIs for managing employees and projects.

### API Endpoints
- **Authentication**
  - `POST /auth/register`: User registration
  - `POST /auth/login`: User login
  - `DELETE /auth/logout`: User logout

- **CRUD Operations for Items**
  - `GET /crud/item/{id}`: Get an item by ID
  - `GET /crud/items`: Get all items
  - `PUT /crud/item/update/{id}`: Update an item
  - `DELETE /crud/item/delete/{id}`: Delete an item

- **Employee and Project Management**
  - `GET /amazon/employees/{id}`: Get employee details
  - `GET /amazon/employee/projects/{id}`: Get projects associated with an employee
  - `POST /amazon/employee/projectemp/create`: Create an employee project association
  - `GET /amazon/employee/projectemployee/{id}`: Get employees associated with a project
  - `GET /amazon/employee/getallprojectsemployees`: Get all projects and associated employees
  - `GET /amazon/employees/iscompany/{id}`: Get employees belonging to a specific company

### Folder Structure
The project's folder structure is organized as follows:

- `src/`: Main source code directory
  - `controllers/`: Controllers for handling API requests
  - `middlewares/`: Middleware functions for authentication and authorization
  - `models/`: Data models for database schema
  - `routes/`: Route definitions for API endpoints
  - `config/`: Configuration files, including JWT secret
  - `index.js`: Entry point for the application

### Getting Started
To get started with SL-Clone, follow these steps:

1. Clone the project repository from [GitHub](https://github.com/RashanWeerasinghe/SL-Clone.git).
2. Navigate to the project directory.
3. Install the required dependencies using `npm install`.
4. Set up a MySQL database and configure the database connection in `config/config.js`.
5. Start the server with `npm start`.
6. Access the APIs using the provided endpoints.

### Contributing
Contributions to SL-Clone are welcome! If you'd like to contribute to the project, please follow our [Contribution Guidelines](CONTRIBUTING.md).

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
