document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // Kiểm tra dữ liệu và hiển thị thông báo
    if (name && email && title && content) {
      // Gửi dữ liệu lên server (phần này cần xử lý ở server)
      fetch("/your-server-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          title,
          content,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Hiển thị thông báo cho người dùng
          alert("Message sent successfully!");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please fill in all fields!");
    }
  });
});
