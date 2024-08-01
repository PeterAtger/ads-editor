export function getInitials(fullName: string) {
  // Split the full name by spaces
  const words = fullName.split(' ');

  // Map the words to their first letters and join them
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join('');

  return initials;
}
