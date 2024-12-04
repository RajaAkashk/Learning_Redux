import { createStore } from "redux";
import cookieReducer from "./cookieReducer";

//created store 
const store = createStore(cookieReducer);
//subcribe to store
store.subscribe(() => {
  console.log(store.getState());
  updateCookieCount();
});



// action creator
const addCookie = document.querySelector("#addCookie");
const removeCookie = document.querySelector("#removeCookie");
const cookieCount = document.querySelector("#cookieCount");

const addCookieHandler = () => {
  store.dispatch({ type: "cookie/added" });
};

const removeCookieHandler = () => {
  store.dispatch({ type: "cookie/removed" });
};

addCookie.addEventListener("click", addCookieHandler);
removeCookie.addEventListener("click", removeCookieHandler);

const updateCookieCount = () => {
  const state = store.getState();
  cookieCount.textContent = state.value;
};

updateCookieCount();
