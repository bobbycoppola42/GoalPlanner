# 🎯 Goal Planner

A modern goal tracking app with **AI-powered assistance**, built with **React**, **Firebase**, **TailwindCSS**, and **OpenAI**.  
Track your goals, get personalized action plans, and stay motivated with an intelligent AI assistant.

---

## 🚀 Features

- 📝 **Goal Management**: Add, edit, delete, and organize goals
- 🎨 **Dark Mode**: Toggle between light and dark themes
- 🔥 **Firebase Integration**: Real-time cloud sync across devices
- 🤖 **AI Assistant**: Get personalized advice and action plans using OpenAI
- 📊 **Smart Sorting**: Sort by date, priority, or deadline
- ✅ **Progress Tracking**: Mark goals as complete and track statistics
- 🏷️ **Categories**: Organize by Personal, Work, Health, or Learning
- ⚡ **Priority Levels**: High, Medium, or Low priority goals
- 📅 **Deadlines**: Set and track goal deadlines
- 🔐 **Authentication**: Secure login with email/password or Google

---

## 🛠️ Tech Stack

- **React 18** with Hooks
- **Firebase** (Authentication & Firestore)
- **OpenAI API** (GPT-4o-mini)
- **Express.js** (Backend API server)
- **Vite** (Fast dev/build)
- **Tailwind CSS** (Styling)
- **JavaScript (ES6+)**

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/bobbycoppola42/GoalPlanner.git
   cd GoalPlanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   # OpenAI Configuration
   VITE_OPENAI_API_KEY=sk-your_openai_api_key
   ```

4. **Set up Firebase**
   - Create a project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Add these security rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/goals/{goalId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```

5. **Get an OpenAI API Key**
   - Go to [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key
   - Add it to your `.env.local` file

---

## 🚀 Running the App

You need to run **TWO servers**:

### Terminal 1: Frontend (Vite)
```bash
npm run dev
```
Runs on `http://localhost:5173`

### Terminal 2: Backend (Express)
```bash
npm run server
```
Runs on `http://localhost:3001`

**Important**: Both servers must be running for the AI Assistant to work!

---

## 🤖 Using the AI Assistant

1. Click the **🤖 AI Assistant** tab
2. Ask questions like:
   - "Help me create a plan for learning React"
   - "Break down my work goals into actionable steps"
   - "Give me motivation to complete my health goals"
3. The AI has access to all your goals and provides personalized advice

---

## 📝 License

MIT
