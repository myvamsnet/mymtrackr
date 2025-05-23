export function capitalizeFirstLetter(text: string) {
  if (!text) return ""; // Handle empty text: strings
  return text?.charAt(0).toUpperCase() + text?.slice(1);
}
