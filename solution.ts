const formatValue = (value: number | string | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return value ? "false" : "true";
  }
};

const getLength = (input: string | any[]) => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const filterByRating = (
  books: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return books.filter((book) => book.rating >= 4);
};

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(myBook: Book) {
  return `Title: ${myBook.title}, Author: ${myBook.author}, Published: ${
    myBook.publishedYear
  }, Available: ${myBook.isAvailable ? "Yes" : "No"}`;
}

function getUniqueValues(array1, array2) {
  const combined = [];
  const unique = [];

  for (let i = 0; i < array1.length; i++) {
    combined.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    combined.push(array2[i]);
  }

  for (let i = 0; i < combined.length; i++) {
    let found = false;

    for (let j = 0; j < unique.length; j++) {
      if (combined[i] === unique[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      unique.push(combined[i]);
    }
  }

  return unique;
}
