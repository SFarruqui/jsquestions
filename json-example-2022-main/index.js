import data from './rawBooks.json' assert { type: 'json' };
// console.log(data[0]['# Pages']);
// console.log(data[100]['Date Read']);

    // % of books are read
    // avg time book time from point of purchase to point read
    // fav genre
    // what author or have I read the most books of
    // find new stat (example percentage of fav genre books bought and read)

    let readCount = 0;
  
    // Loop through each book and count if it's read
    data.forEach(data => {
      if (data['read?'] === 'Yes') {
        readCount++;
      }
    });
  
    // Calculate the percentage
    const totalBooks = data.length;
    const readPercentage = (readCount / totalBooks) * 100;
    console.log(readPercentage);

// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));