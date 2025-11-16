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
  {
    return books.filter((book) => book.rating >= 4);
  }
};
