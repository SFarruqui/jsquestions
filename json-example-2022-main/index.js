import data from "./rawBooks.json" assert { type: "json" };
// console.log(data[0]['# Pages']);
// console.log(data[100]['Date Read']);

// % of books are read
// avg time book time from point of purchase to point read
// fav genre
// what author or have I read the most books of
// find new stat (example percentage of fav genre books bought and read)

let readCount = 0;

// Loop through each book and count if it's read
data.forEach((data) => {
  if (data["read?"] === "Yes") {
    readCount++;
  }
});

// Calculate the percentage
const totalBooks = data.length;
const readPercentage = (readCount / totalBooks) * 100;
console.log("Percentage of books read:", readPercentage);

const averageTimeOnTBR =
  data
    .filter((data) => data["Time on TBR (days)"] !== "N/A")
    .map((data) => data["Time on TBR (days)"])
    .reduce((sum, current) => sum + current, 0) / data.length;

// Print average time on TBR
console.log("Average days to finish book:", averageTimeOnTBR);

// Count the number of books in each category
const categoryCounts = {};
data.forEach((data) => {
  const category = data.category;
  if (!categoryCounts[category]) {
    categoryCounts[category] = 0;
  }
  categoryCounts[category]++;
});

// Find the category with the most books
const mostPopularCategory = Object.keys(categoryCounts).find(
  (category) =>
    categoryCounts[category] === Math.max(...Object.values(categoryCounts))
);

// Print the most popular category
console.log("Favorite Genre:", mostPopularCategory);

// Count the number of books by each author
const authorCounts = {};
data.forEach((data) => {
  const author = data.author;
  if (!authorCounts[author]) {
    authorCounts[author] = 0;
  }
  authorCounts[author]++;
});

// Find the author with the most books
const mostReadAuthor = Object.keys(authorCounts).find(author => authorCounts[author] === Math.max(...Object.values(authorCounts)));

// Print the most read author
console.log("Most read author:", mostReadAuthor);

let readCount2 = 0;

// Loop through each book and count if it's read
data.forEach((data) => {
  if (data["read?"] === "Yes" || data["category"] === "Gay Fantasy") {
    readCount2++;
  }
});

// Calculate the percentage
const totalBooks2 = data.length;
const readPercentage2 = (readCount2 / totalBooks) * 100;
console.log("Percentage of books read that are favorite genre:", readPercentage2);

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
