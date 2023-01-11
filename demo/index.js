/** @format */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./sample-29ab2-0fa035dcd16e.json";

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();
