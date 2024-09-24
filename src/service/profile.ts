export const getProfile = async () => {
  const res = await fetch("http://localhost:3088/api/profile");
  const data = await res.json();
  return data;
};
