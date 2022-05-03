const routes = {
  base: "http://localhost:5001/api/v1",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    me: "/auth/me",
  },
  users: {
    base: "/users",
    profile: "/users/profile",
  },
  post: {
    base: "/posts",
    getAll: "/posts",
  },
  event: {
    base: "/events",
    getAll: "/events",
  },
  crag: {
    base: "/crags",
    getAll: "/crags",
  },
  comment: {
    base: "/comments",
  },
};

export default routes;
