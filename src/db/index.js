import Vue from "vue";
import { firestorePlugin } from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

const config = {
  projectId: "raven-12e4e"
};
export const db = firebase.initializeApp(config).firestore();
