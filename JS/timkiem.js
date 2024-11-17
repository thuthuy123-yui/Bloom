function filterBooks(event){
    //ngăn chặn hành động submit mặc định
    event.preventDefault();

    //lấy từ khóa từ input, chuyển tất cả về chữ thường để tránh phân biệt giữa chữ hoa và chữ thường
    const query = document.getElementById('search-input').value.toLowerCase();

    //lấy tất cả phần tử sách trong danh sách
    const items = document.querySelectorAll('.index1 a');

    //duyệt qua từng phần tử trong sách
    items.forEach((item) =>{
        //Lấy giá trị của thuộc tính title và alt
        const title = item.getAttribute('title').toLowerCase();

        //kiểm tra nếu từ khóa khớp với title hoặc alt
        if(title.includes(query)){
            item.style.display = '';//hiển thị sách nếu khớp
        }
        else{
            item.style.display = 'none';//ẩn sách nếu không khớp
        }
    });
    // Hiển thị thông báo nếu không có sách nào khớp
    const thongBaoKhongCoKetQua = document.getElementById('no-results');

    // Kiểm tra nếu tồn tại phần tử thông báo
    if (thongBaoKhongCoKetQua) {
    // Nếu có sách khớp, ẩn thông báo
        if (coKetQua) {
            thongBaoKhongCoKetQua.style.display = 'none';
        } 
    // Nếu không có sách khớp, hiển thị thông báo
        else {
            thongBaoKhongCoKetQua.style.display = 'block';
        }
    }

}