import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM6rPPe-jDSvkRA5reG4jFeumqNkvRv6A",
  authDomain: "antler-cupponapp.firebaseapp.com",
  projectId: "antler-cupponapp",
  storageBucket: "antler-cupponapp.appspot.com",
  messagingSenderId: "473203930831",
  appId: "1:473203930831:web:a3d6760cc74473282469ba",
  measurementId: "G-Q5SXF3CF7K",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
