function dieuHuongTrang() {
    const dropdown = document.querySelector("#pageDropdown");// Lấy dropdown theo id
    const selectedPage = dropdown.value;// Lấy giá trị của mục được chọn

    if (selectedPage.includes("#")) {
        const [url, id] = selectedPage.split("#");
        if (window.location.pathname.endsWith(url)) {
            // Nếu đang ở cùng trang, cuộn đến phần tử
            const element = document.getElementById(id);
            if (element) {
                const navbarHeight = document.querySelector(".navbar")?.offsetHeight; // Đo chiều cao navbar
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                console.log("Vị trí phần tử:", elementPosition); // Debug
                console.log("Chiều cao navbar:", navbarHeight); // Debug

                setTimeout(() => {
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: "smooth",
                    });
                }, 50);
            } else {
                console.warn(`Không tìm thấy phần tử với id: ${id}`);
            }
        } else {
            // Nếu là trang khác, điều hướng tới trang đó
            window.location.href = selectedPage;
        }
    } else if (selectedPage) {
        // Nếu không có #, chỉ điều hướng tới trang
        window.location.href = selectedPage;
    }
}
