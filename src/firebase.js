import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCBh8-mdOWiq4JBY4EKBqhOhRa8mLu7-SY",
  authDomain: "todo-liste-auth-7b246.firebaseapp.com",
  projectId: "todo-liste-auth-7b246",
  storageBucket: "todo-liste-auth-7b246.appspot.com",
  messagingSenderId: "253167624089",
  appId: "1:253167624089:web:7364d77eaf4a3d80933d08"
};

export const app = initializeApp(firebaseConfig);