# **Akiba: A Joint Savings Platform for Mpesa Users**

## **Overview**

**Akiba** is a fintech platform that helps Mpesa users save money together. It’s perfect for couples, families, friends, colleagues or groups with shared financial goals. Whether you're saving for a vacation, emergencies, a wedding, rent, group purchases or as part of a financial club, Akiba makes saving easy, secure, accountable and transparent.

With an intuitive interface, automated tools and real-time goal tracking, Akiba empowers users to achieve financial goals faster and collaboratively.

Akiba, *Achieve More Together*
---

## **Table of Contents**

1. [Key Features](#key-features)  
2. [Technology Stack](#technology-stack) 
3. [API Documentation](#api-documentation)
4. [Project Structure](#project-structure)
5. [Screenshots](#screenshots)
6. [Demo](#demo)
7. [Roadmap](#roadmap)
8. [FAQs](#faqs)
9. [License](#license)  
10. [Contact](#contact)
11. [Acknowledgements](#acknowledgements)  
12. [Contributing](#contributing)  
13. [Getting Started](#getting-started)

---

## **Key Features**

- **Joint Accounts:** Seamlessly create and manage shared savings accounts with family, friends, or organizations.  
- **Goal-Based Savings:** Set specific goals (e.g., a $5,000 vacation fund) and track collective progress in real time.  
- **Transparent Contributions:** Track who contributed, how much and when, ensuring full transparency.  
- **Secure and Encrypted:** Built with industry-standard security protocols to safeguard transactions.  
- **Automated Savings:** Schedule recurring contributions to stay on track effortlessly.  
- **Notifications:** Receive reminders for upcoming contributions, milestones, and account activity.
- **Group Chat & Messaging:** Engage in group chats with all members of the savings account or message individual members directly.  
- **User Management:** Add or remove group members with ease.  
- **Savings Insights:** Access analytics on group performance and contribution trends.  

---

## **Technology Stack**
JointFin is built using a robust stack of modern technologies to ensure performance, scalability, and security:

### **Frontend**
- **React.js**: Dynamic and user-friendly interface.
- **Tailwind CSS**: Fast and responsive design.
- **Redux**: Efficient state management.

### **Backend**
- **Node.js**: Scalable server-side scripting.
- **Express.js**: Lightweight web framework for building APIs.

### **Database**
- **MongoDB**: Document-based database for efficient data storage.

### **Payment Integration**
- **Mpesa API**

### **Hosting**:
- AWS / Vercel for frontend
- AWS / Heroku for backend

- **Other Tools:** WebSockets for real-time chat, Perfect Scrollbar for UI enhancements

- **Authentication**:
- Firebase Authentication

### **Real-Time Communication**
- **Socket.io**: Enables real-time group chat and notifications.

### **Security**
- **JWT (JSON Web Tokens)**: Authentication and authorization.
- **Bcrypt.js**: Secure password hashing.

### **DevOps**
- **Docker**: Containerized application for ease of deployment.
- **AWS S3**: Cloud storage for user files and backups.

---

## **API Documentation**

### **APIs**:
- Custom REST APIs for platform operations

### Authentication Endpoints

#### `POST /api/auth/signup`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "token": "<JWT_TOKEN>"
  }
  ```

#### `POST /api/auth/login`
- **Description:** Log in an existing user.
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "token": "<JWT_TOKEN>"
  }
  ```

### Group Savings Endpoints

#### `GET /api/groups`
- **Description:** Fetch all groups the user is a part of.
- **Response:**
  ```json
  [
    {
      "id": "group123",
      "name": "Wedding Fund",
      "goal": 100000,
      "progress": 50000
    }
  ]
  ```

#### `POST /api/groups`
- **Description:** Create a new savings group.
- **Request Body:**
  ```json
  {
    "name": "Vacation Fund",
    "goal": 200000
  }
  ```
- **Response:**
  ```json
  {
    "message": "Group created successfully",
    "groupId": "<GROUP_ID>"
  }

  ```

### Chat Endpoints

#### `GET /api/chat/:groupId`
- **Description:** Fetch chat messages for a group.
- **Response:**
  ```json
  [
    {
      "sender": "Jane",
      "message": "Let’s save more this month!",
      "timestamp": "2024-12-19T12:34:56Z"
    }
  ]
  ```

#### `POST /api/chat/:groupId`
- **Description:** Send a message to the group chat.
- **Request Body:**
  ```json
  {
    "message": "Great job everyone!"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Message sent successfully"
  }

  ```
---

### **Project Structure**

Akiba/
├── public/
├── src/
│   ├── components/
│   │   ├── Chat/
│   │   ├── Dashboard/
│   │   ├── Wallet/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── SignUp.js
│   │   ├── GroupSavings.js
│   │   ├── Chat.js
│   ├── contexts/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
``

---

### **Screenshots**

1. **Home Page**
![Home Page](#)

2. **Group Savings Dashboard**
![Dashboard](#)

3. **Chat Interface**
![Chat](#)

---

### **Demo**

Check out the live demo here: [Akiba Demo](https://example.com/Akiba-demo)

To try it locally, follow the **Getting Started** section below.

---

## **Roadmap**

### Phase 1: MVP
- User authentication (Signup, Login, Reset Password)
- Group savings creation and management
- Basic wallet functionality
- Transaction history

### Phase 2: Enhanced Features
- Real-time chat functionality
- Goal tracking with visual progress indicators
- Advanced security features like two-factor authentication

### Phase 3: Expansion
- Integration with other payment platforms
- Mobile app development
- Analytics dashboard for financial insights
- AI-based saving recommendations

---

## **FAQs**

### 1. What is Akiba?
Akiba is a fintech platform that helps Mpesa users save money together in a secure, transparent, and accountable way.

### 2. How secure is Akiba?
Akiba uses Firebase Authentication and Mpesa API to ensure secure transactions and user data protection.

### 3. Can I use Akiba individually?
Yes, while Akiba focuses on group savings, you can also use the wallet feature for individual savings and goal tracking.

### 4. Is Akiba free to use?
Yes, Akiba is free to use. Transaction fees may apply depending on the Mpesa policies.

### 5. How do I create a group?
Sign up, navigate to the "Groups" section, and click "Create Group." Fill in the group details and invite members.

---

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.

---

## **Contacts**

For questions or support, reach out to us at [support@Akiba.com](mailto:support@Akiba.com).

---

## **Acknowledgements**

Special thanks to:

- The Akiba development team for their dedication and innovation.
- The Mpesa API team for seamless payment integration.
- Firebase for secure and reliable authentication.
- Our early adopters for their valuable feedback.


---

## **Contributing**

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.


---

## **Getting Started**

### **Prerequisites**  

Before running the app, ensure you have the following installed:  

- [Node.js](https://nodejs.org/) (v14+)  
- [npm](https://www.npmjs.com/)  
- A code editor like [VS Code](https://code.visualstudio.com/)  

### **1. Clone the Repository**  

```bash
git clone https://github.com/yourusername/Akiba.git

# Navigate into the project directory
cd Akiba

# Install dependencies
npm install

# Start the development server
npm start

---