export const saveToken = (token: string) => {
  localStorage.setItem("@token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("@token");
  return token;
};

export const getUser = () => {
  const user = localStorage.getItem("@user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const saveUser = (user: any) => {
  localStorage.setItem("@user", JSON.stringify(user));
};
