export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user")
  return userInfo;
};



// !== "undefined"
// ? JSON.parse(localStorage.getItem("user"))
// : localStorage.clear();
