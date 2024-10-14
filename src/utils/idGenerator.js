export const generateRandomId = ({
  length = 10, // Default length of 10
  useNumbers = true, // Include numbers by default
  useLowercase = true, // Include lowercase letters by default
  useUppercase = true, // Include uppercase letters by default
  useSpecialChars = true, // Include special characters by default
  excludeChars = "", // Characters to exclude (optional)
} = {}) => {
  // Define possible characters based on user preferences
  let randomQuery = [];

  if (useNumbers) {
    randomQuery = randomQuery.concat([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
    ]);
  }

  if (useLowercase) {
    randomQuery = randomQuery.concat("abcdefghijklmnopqrstuvwxyz".split(""));
  }

  if (useUppercase) {
    randomQuery = randomQuery.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  }

  if (useSpecialChars) {
    randomQuery = randomQuery.concat([
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
    ]);
  }

  // Exclude any specified characters
  if (excludeChars) {
    randomQuery = randomQuery.filter((char) => !excludeChars.includes(char));
  }

  // Generate the random ID
  let randomId = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * randomQuery.length);
    randomId += randomQuery[randomIndex];
  }

  return randomId;
};
