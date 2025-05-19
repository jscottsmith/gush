import { content } from "../content";

export function getWelcomeHeadline() {
  const hours = new Date().getHours();
  if (hours < 12) {
    return content.contact.welcome.morning;
  }
  if (hours < 18) {
    return content.contact.welcome.afternoon;
  }
  return content.contact.welcome.evening;
}
