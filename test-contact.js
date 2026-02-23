const data = {
  name: "Test User",
  email: "test@example.com",
  phone: "1234567890",
  message: "This is a test message"
};

fetch("http://localhost:4000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error);
