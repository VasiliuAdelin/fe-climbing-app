const routes = {
  base: "http://localhost:5001/api/v1",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    me: "/auth/me",
  },
  post: {
    base: "/posts",
    getAll: "/posts",
  },
  comment: {
    base: "/comments",
  },
};

export default routes;
