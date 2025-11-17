# Blog Answers

## **1. What are some differences between interfaces and types in TypeScript?**

Tryescripy ae Interface এবং Type-এর কাজ প্রায় একই হলেও, এদের ব্যবহারের ক্ষেত্রে সামান্য পার্থক্য দেখা যায়। মূলত, কোডের স্ট্রাকচার ও পরিচ্ছন্নতা বজায় রাখার জন্য এগুলো ব্যবহার করা হয়।

একটি ইন্টারফেস মূলত একটি নকশা বা ডিজাইন। এটি একটি বস্তুর কাঠামোকে সংজ্ঞায়িত করে, নির্দিষ্ট করে যে এটিতে কোন উপাদানগুলি অবশ্যই থাকতে হবে। এই ইন্টারফেস ব্যবহার করে তৈরি করা যেকোনো বস্তুকে তখন এই পূর্ব-নির্ধারিত কাঠামোকে কঠোরভাবে মেনে চলতে হয়।

Type alias মানে কোনো type এর জন্য আলাদা একটা নাম দিয়া রাখা। যেমন number, string, object সবকিছুর জন্য type alias বানাইয়া রাখা যায়। শুধু অবজেক্ট না, union, function signature অনেক কিছু define করা যায়।

### মূল পার্থক্যগুলো:

- Interface বেশি ব্যবহার হয় object structure define করতে।
- Type ব্যবহার হয় যেকোনো কিছু define করতে object, union, function type ইত্যাদি।
- Interface extend করা যায় সহজে:
  `interface A extends B {}`
- Type union করতে পারে:
  `type Result = A | B`
- Interface দিয়া multiple বার declare করলে merge হয়।
- Type merge হয় না একবার define মানে শেষ।

### Example

**Interface Example:**

```ts
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Cat",
  age: 23,
};
```

**Type Alias Example:**

```ts
type Status = "success" | "error";

type Product = {
  title: string;
  price: number;
};

const laptop: Product = {
  title: "MacBook",
  price: 1500,
};
```

টাইপস্ক্রিপ্ট শিখতে গেলে Interface এবং Type দুটোই অপরিহার্য। Interface প্রধানত অবজেক্টের কাঠামো বা ডিজাইন বর্ণনা করে, আর Type বিভিন্ন ডেটা টাইপের নামকরণ করতে পারে। কখন কোনটি ব্যবহার করতে হবে, সেই ধারণা থাকলে কোড আরও পরিচ্ছন্ন এবং সহজে বোধগম্য হয়। একজন শিক্ষানবিস হিসেবে এই দুটির মৌলিক পার্থক্য বুঝতে পারলেই অনেকখানি দ্বিধা দূর হয়ে যায়।

---

## **2. Explain the difference between any, unknown, and never types in TypeScript.**

TypeScript আলাদা আলাদা special type রাখে কারণ কোডের আচরণ স্পষ্ট করে দেখানো লাগে। কোন ভ্যালু কেমন behave করবে, কোথায় error ধরবে, কোথায় strict হবে এগুলা বোঝানোর জন্যই এই special type গুলো আছে।

### any

- কখনো exact type জানা না থাকলে বা দ্রুত কিছু test করতে চাইলে any ব্যবহার হয়।
- সবচেয়ে বড় সমস্যা হলো TypeScript তখন আর কিছু check করে না।
- মানে তুমি যাই করো, ভুল হলেও error দিবে না। এতে কোড risky হয়ে যায়।

### unknown

- unknown দেখতে any-র মতো, কিন্তু safer।
- কারণ ব্যবহার করার আগে type check করা লাগবই।
- তাই ভুল ধরে ফেলে আগেই।
- এটা সেই সব situation-এ ভালো লাগে যেখানে incoming data unpredictable।

### never

- never মানে এই function কোনোদিন কিছু return করে না।
- যেমন error throw করে, infinite loop-এ যায়, বা এমন জায়গা যেখানে আসলে পৌঁছানোর কথা না  এই unreachable state দেখাতে never ব্যবহার হয়।

### Example

```ts
// any
let data: any = "hello";
data = 20;

// unknown
let value: unknown = "test";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// never
function crash(): never {
  throw new Error("Something went wrong");
}
```

any flexible কিন্তু dangerous, unknown safe কারণ check লাগে, আর never সেই জায়গা দেখায় যেখানে function কখনোই শেষ হয় না বা return করে না। এই তিনটা type ঠিকমতো বুঝলে TypeScript অনেকটাই পরিষ্কার লাগে।
