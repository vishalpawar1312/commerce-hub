interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "John",
    email: "john@gmail.com",
    role: "customer",
    status: "Active",
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@gmail.com",
    role: "customer",
    status: "Inactive",
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@gmail.com",
    role: "customer",
    status: "Active",
  },
];