type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  const update: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...update, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
