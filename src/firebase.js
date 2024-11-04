
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDHYUCfu3f9cIpDcWG45Xwh8Wu_eq3GUvQ",
  authDomain: "uploadimg-6602e.firebaseapp.com",
  projectId: "uploadimg-6602e",
  storageBucket: "uploadimg-6602e.appspot.com",
  messagingSenderId: "645075777813",
  appId: "1:645075777813:web:d4d3d5f0593eed99c3111c",
  measurementId: "G-7HD7739KKQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDB =getStorage(app)