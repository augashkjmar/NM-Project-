# Java + Node.js REST Integration
This project demonstrates how to integrate a **Java REST API** with a **Node.js client** using HTTP communication.  
The Java application provides REST endpoints, while the Node.js application consumes them and displays the response.
---
## When we deploy a Java + Node.js REST integration like (UserApi.java + client.js), it usually runs as backend code, not as a visual web page

## Project Overview
| Component | Technology | Role |
|------------|-------------|------|
| **Backend API** | Java (Spring Boot / Core Java with HTTPServer) | Provides REST data (e.g., user info) |
| **Client** | Node.js (Express / Axios) | Fetches data from Java API and displays it |
---
##Concept
The integration works as follows:
## Installation & Setup
### 1. Install dependencies
```bash
javac UserApi.java
java UserApi
```
### 2. Run the server
```bash
node client.js
```

## Learning Outcomes
- Understand how client-side validation improves UX.  
- Learn how to secure form submission with backend validation.  
- Integrate static frontend with an Express backend.  

---
## Author
**Arjun A**  
---
## License
This project is licensed under the **MIT License** – you are free to use and modify it.