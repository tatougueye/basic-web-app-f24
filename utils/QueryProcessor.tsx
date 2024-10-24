export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "fgueye" );
  }

  if (query.includes("What is your name?")) {
    return "fgueye-313";
  }

  // Additional condition for finding the largest number
  if (query.startsWith("Which of the following numbers is the largest:")) {
    // Extract numbers from the query using regex
    const numbers = query.match(/\d+/g)?.map(Number); // Extract and convert to numbers
    if (numbers && numbers.length > 0) {
      const largest = Math.max(...numbers);
      return `${largest}`;
    } else {
      return "No valid numbers found in the query.";
    }
  }

  return "Query not recognized.";
}