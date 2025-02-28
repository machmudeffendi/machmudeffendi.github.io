export function formatDate(date: string): string {
  const parsedDate = new Date(date);
  
  // Handle invalid date cases
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
  return parsedDate.toLocaleDateString("en-US", options);
}