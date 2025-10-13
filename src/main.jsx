import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GoalPlanner from './GoalPlanner.jsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoalPlanner />
  </React.StrictMode>
);
