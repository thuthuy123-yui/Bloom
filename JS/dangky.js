document.addEventListener("DOMContentLoaded", function () {//dom được kích hoạt khi HTML được tải và phân tích cú pháp xong, nhưng trước khi các tài nguyên (như ảnh, video) được tải đầy đủ.
  const inputs = document.querySelectorAll("input[required]");
  const button = document.querySelector(".nut");

  function checkInputs() {
    let allFilled = true;
    inputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      button.classList.add("enabled");
      button.disabled = false;
    } else {
      button.classList.remove("enabled");
      button.disabled = true;
    }
  }

  inputs.forEach(input => {
    input.addEventListener("input", checkInputs);
  });
});
