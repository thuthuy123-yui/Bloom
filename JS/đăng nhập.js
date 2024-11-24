function hienMk() {
    const passwordInput = document.getElementById("mk");
    const eyeIcon = document.getElementById("eyeIcon"); 

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye"); // Hiển thị mắt không gạch chéo
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash"); // Hiển thị mắt có gạch chéo
    }
}

//kiểm tra mk
// Hàm kiểm tra điều kiện mật khẩu
function isValidPassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    
    return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

// Hàm cập nhật trạng thái nút Đăng Nhập
function updateLoginButtonState() {
    const passwordInput = document.querySelector(".mk");
    const password = passwordInput.value;
    const loginButton = document.querySelector(".nut");
    const errorMessage = document.querySelector(".passwordError");
    
    // Bật nút nếu mật khẩu hợp lệ, ngược lại vô hiệu hóa nút
    if (isValidPassword(password)) {
        loginButton.disabled = false;
        errorMessage.style.display = "none"; // Ẩn thông báo lỗi nếu mật khẩu hợp lệ
    } else {
        loginButton.disabled = true;
        errorMessage.style.display = "block"; // Hiển thị thông báo lỗi nếu mật khẩu không hợp lệ
    }
}

// Lắng nghe sự kiện nhập vào ô mật khẩu
document.querySelector(".mk").addEventListener("input", updateLoginButtonState);

function handleLogin(event) {
    // Ngăn chặn hành động submit mặc định của form
    event.preventDefault();

    // Hiển thị thông báo lỗi
    const loginError = document.getElementById("loginError");
    loginError.style.display = "block";

    // Ẩn form đăng nhập (nếu muốn)
    const form = event.target;
    form.style.display = "none";

    // Trả về false để không gửi form
    return false;
}
