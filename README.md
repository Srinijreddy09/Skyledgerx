🌌 Sky Ledger X — Full-Stack Retail Billing System

Sky Ledger X is a complete retail billing platform designed to manage products, categories, billing logic, secure authentication, and payment integration.
The system blends a robust Spring Boot backend with a dynamic and responsive React frontend.

🎥 Demo Video

🔗 Watch Demo:
👉 https://drive.google.com/file/d/1r3n0MLPp29bnRHRRza7dJRBToBhXAvfM/view?usp=drivesdk

photo
<img width="1919" height="927" alt="image" src="https://github.com/user-attachments/assets/b33e7b0f-734f-446f-a529-f4291761e601" />
<img width="1917" height="929" alt="image" src="https://github.com/user-attachments/assets/bc6614cc-8354-4e1f-9ded-073328975405" />
<img width="1919" height="930" alt="image" src="https://github.com/user-attachments/assets/a468472e-daa0-4173-9bd6-a2f64e702fe5" />
<img width="1919" height="918" alt="image" src="https://github.com/user-attachments/assets/886ef862-541e-46b2-9f6e-ccfdd91d4c8e" />
<img width="1910" height="855" alt="image" src="https://github.com/user-attachments/assets/107eb038-a2bf-43ba-b3c0-5f0c7b65a35a" />
<img width="1277" height="659" alt="image" src="https://github.com/user-attachments/assets/d163ec61-ae90-4146-8c39-9f22ab78e715" />
<img width="1245" height="637" alt="image" src="https://github.com/user-attachments/assets/cedd08f3-3945-4069-adca-3ff7f762ef6a" />





🚀 Features

Product & Category Management

Image Upload (local filesystem)

Secure Admin Login (BCrypt)

Spring Boot REST APIs

React Frontend with Bootstrap

Razorpay Integration Support

Search, Delete, Real-time Updates

Responsive UI

🛠 Tech Stack
Frontend

React

Axios

Bootstrap 5

Backend

Spring Boot

Java

Hibernate / JPA

MySQL

Maven

Storage

Local filesystem

Razorpay key support

Optional AWS configuration

📁 Project Structure
SkyLedgerX/
│
├── backend/  (Billing-Software/billingsoftware)
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── application.properties
│   ├── pom.xml
│   └── billing_app.sql
│
└── frontend/  (Billing-Software/client)
    ├── src/
    ├── public/
    ├── package.json
    └── constants.js

🧩 Steps to Run the Project
🟦 1. Backend Setup (billingsoftware)

Open project in IntelliJ IDEA

Configure application.properties

Create database:

CREATE DATABASE billing_app;


Run backend:

mvn spring-boot:run

🟧 2. Insert Initial Admin User
INSERT INTO tbl_users(name, email, password, role, created_at, updated_at, user_id)
VALUES(
   'yourname',
   'yourname@example.com',
   '$2a$10$Jv28cuVrSxzPsZeujtM8F.aqV7aSlUDu05GhYzG/cbd1gtTNurQRe',
   'ROLE_ADMIN',
   current_timestamp(),
   current_timestamp(),
   uuid()
);


Default:

Email: yourname@example.com
Password: 123456


Generate new encoded password:

POST http://localhost:8080/api/v1.0/encode

🟩 3. Frontend Setup (client)
cd client
npm install
npm start


Runs at:
Frontend → http://localhost:3000
Backend → http://localhost:8080

🧭 Future Enhancements

JWT Authentication

Inventory Tracking

PDF Invoice Generation

Multi-role System

Cloud-based Image Storage

Discount/GST Management

👨‍💻 Author

Srinij Reddy Musku
Full Stack Developer — React & Spring Boot
Creator of Sky Ledger X
