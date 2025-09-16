<p align="center">
  <img src="public/nis2.png" alt="Cyclopt Companion" width="500" align="center" />
</p>

<h1 align="center">Welcome to NIS 2 Directive Compliance Report 👋 </h1>

A web application interface for managing NIS2 compliance workflows — upload source code for security analysis, complete and update questionnaires, and download compliance reports.  

## 🧩 Features  

- 📂 **Code Upload**  
  Upload your project’s source code for vulnerability analysis.  

- 📝 **Questionnaires**  
  Fill in structured forms covering NIS2 security and organizational best practices.  

- 🔄 **Update & Track**  
  Save and update questionnaire responses to monitor compliance progress over time.  

- 📑 **Report Generation**  
  Download combined compliance reports (PDF) with code scan results and questionnaire data.

## 🛠️ Prerequisites

Make sure you have installed:
- [node ↗](https://nodejs.org/en) (>=20)
- [npm ↗](https://www.npmjs.com/)

## 🚀 Getting Started

### 1. Clone repository
```sh
git clone https://github.com/cyclopt/community-nis2.git
cd community-nis2
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env` file and store based on `.env.sample` and fill in your values:

- `VITE_MAIN_SERVER_URL` – URL of the backend API **(Required)** (check the [Cyclopt Community Server](https://github.com/cyclopt/community-server/))
- `VITE_SENTRY_ENVIRONMENT` – Sentry environment **(Optional)**
- `VITE_SENTRY_DSN` – Public DSN for Sentry **(Optional)**


## ▶️ Running the App

### 1. Configure and start backend server

### 2. Start frontend React app
```sh
npm run dev
```

## 🧪 Testing
Run lint tests
```sh
npm test
```

Test production build:
```sh
npm run build && npm run preview
```
