export function getWelcomeHeadline() {
  const hours = new Date().getHours();
  if (hours < 12) {
    return `Hello, good morning`;
  }
  if (hours < 18) {
    return `Hello, good afternoon`;
  }
  return `Hello, good evening`;
}
