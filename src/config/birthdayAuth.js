/**
 * Birthday Auth Gate Configuration
 * Centralized place to configure Nayana's birthday verification.
 */
export const BIRTHDAY_AUTH_CONFIG = {
  // Target birthday
  day: 3,
  month: 11, // November (1-indexed: 1 = Jan, ..., 11 = Nov, 12 = Dec)
  year: 2005, // Nayana's birth year

  // Accepted alternate years if needed (accepts 2005 and 2006)
  acceptedYears: [2005, 2006],

  // Exact text content specified by user
  smallHeading: "A LITTLE SURPRISE FOR YOU",
  mainHeading: "Hey, Nayana! ♡",
  description: "Before you enter, there's just one little question...",
  inputLabel: "When's your birthday?",
  buttonText: "Unlock My Surprise ♡",
  footerHint: "Something special is waiting for you...",
  errorMessage: "Oops! That's not quite right. Try again ♡"
};
