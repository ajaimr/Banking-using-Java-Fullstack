# 💳 Banking Management System - Java Full Stack Project

A full-stack web application that simulates basic banking operations. Users can create an account, check balance, deposit and withdraw money, and view their transaction history.

This project is built using **Spring Boot**, **Hibernate**, and **MySQL** for the backend and **Angular** for the frontend.

---

## 🚀 Features

- 👤 User registration and account creation
- 💰 Deposit and withdraw money
- 🔍 Balance inquiry
- 📜 View transaction history
- 🔐 Backend validation and error handling
- 🌐 REST API integration with Angular frontend

---

## 🛠️ Technologies Used

### 🔧 Backend:
- Java
- Spring Boot
- Hibernate (JPA)
- MySQL
- Maven

### 🎨 Frontend:
- Angular
- TypeScript
- HTML, CSS

---

## 🗂️ Project Structure

```
banking-app/
│
├── banking-backend/
│   ├── src/main/java/com/bank/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── model/
│   │   └── BankingApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── banking-frontend/
│   ├── src/app/
│   │   ├── components/
│   │   ├── services/
│   │   └── models/
│   └── angular.json
```

---

## 📦 Setup Instructions

### 🖥️ Backend (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/banking-app.git
   ```

2. Navigate to the backend folder:
   ```bash
   cd banking-app/banking-backend
   ```

3. Configure MySQL in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/bankdb
   spring.datasource.username=root
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```

4. Create a database:
   ```sql
   CREATE DATABASE bankdb;
   ```

5. Run the application:
   ```bash
   mvn spring-boot:run
   ```

---

### 🌐 Frontend (Angular)

1. Navigate to the frontend directory:
   ```bash
   cd ../banking-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Angular development server:
   ```bash
   ng serve
   ```

4. Open in browser: [http://localhost:4200](http://localhost:4200)

---

## 🔗 Sample REST APIs

| Method | Endpoint                                     | Description                |
|--------|----------------------------------------------|----------------------------|
| POST   | `/api/accounts`                              | Create new bank account    |
| GET    | `/api/accounts/{id}`                         | Get account details        |
| POST   | `/api/accounts/{id}/deposit`                 | Deposit funds              |
| POST   | `/api/accounts/{id}/withdraw`                | Withdraw funds             |
| GET    | `/api/accounts/{id}/transactions`            | Get transaction history    |

---

## 🧪 Sample JSON Payloads

### Create Account
```json
{
  "name": "Ajai",
  "email": "ajai@example.com",
  "initialBalance": 5000
}
```

### Deposit Money
```json
{
  "amount": 1000
}
```

### Withdraw Money
```json
{
  "amount": 500
}
```

---

## 📸 Screenshots

> *(Add frontend UI screenshots here for better visibility)*

---

## 📚 Future Improvements

- 🔐 JWT Authentication for login
- 📱 Mobile responsive UI
- 📊 Dashboard with charts
- 📧 Email notifications

---

## 👨‍💻 Author

**Ajai MR**  
Full Stack Developer | Java | Angular | Spring Boot  
📍 From: Kanyakumari  
📫 LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)  
📧 Email: ajai@example.com

---

## 📄 License

This project is licensed under the MIT License.
