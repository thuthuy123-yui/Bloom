function dieuHuongTrang() {
    const dropdown = document.querySelector("#pageDropdown");
    const selectedPage = dropdown.value;

    if (selectedPage.includes("#")) {
        const [url, id] = selectedPage.split("#");
        if (window.location.pathname.endsWith(url)) {
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
            window.location.href = selectedPage;
        }
    } else if (selectedPage) {
        window.location.href = selectedPage;
    }
}
