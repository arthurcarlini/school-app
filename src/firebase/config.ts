import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyANtGy82t_o0P7zFWO-wbKTvgTytejYSo0",
  authDomain: "school-6cfbc.firebaseapp.com",
  projectId: "school-6cfbc",
  storageBucket: "school-6cfbc.appspot.com",
  messagingSenderId: "863121643374",
  appId: "1:863121643374:web:0c3e6916dfdd0dd20b937f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }
