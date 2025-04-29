export const getLocalAccessToken = (): string | null => {
  const user: any = localStorage.getItem("admin_user");
  if (user === undefined) {
    return null;
  }
  const access_token = JSON.parse(user)?.accessToken;
  return access_token;
};
