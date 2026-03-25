export const getAuthToken = (): string | undefined => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};

export const isAuthenticated = (): boolean => {
  const token = getAuthToken();
  return !!token;
};
