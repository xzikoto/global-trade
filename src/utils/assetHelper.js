export const getAssetPath = (path) => {
  const baseUrl = "/";
  return `${baseUrl}${path.startsWith("/") ? path.slice(1) : path}`;
};
