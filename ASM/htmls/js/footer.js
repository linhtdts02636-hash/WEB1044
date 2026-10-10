const containerfooter = document.getElementById("footer");
containerfooter.innerHTML = ` <footer class="site-footer mt-5 pb-5 pt-5 bg-dark "
        style="background: linear-gradient(135deg, rgb(39, 29, 75), rgb(46, 46, 116));">
        <div class="container">
            <div class="row gy-5 mt-5">
                <!--Ban to chuc-->
                <div class="col-md-6 col-lg-4">
                    <a href="index.html" class="footer-brand d-flex ">
                        <img src="images/logo.png" alt="" width="50" height="50">
                        <div class="footer-brand-text ps-2">
                            <h6> Thành Đoàn TP.HCM</h6>
                            <p>Hội thi "Học sinh, Sinh viên Giỏi Nghề" <br> Lần 16, Năm 2026 </p>
                        </div>
                    </a>
                    <!--abn to chuc-->
                    <div class="footer-copy">
                        <p>© 2026 Thành Đoàn Thành phố Hồ Chí Minh.
                            Bản quyền thuộc Thành Đoàn TP.HCM.</p>
                    </div>
                </div>
                <!--Lien he-->
                <div class="col-md-6 col-lg-4 text-light">
                    <h6>Liên hệ</h6>
                    <address>
                        Số 1 Phạm Ngọc Thạch, Quận 1, Thành phố Hồ Chí Minh <br>
                        <a href="mailto:thanhdoan@tphcm.gov.vn" class="footer-link">thanhdoan@tphcm.gov.vn</a>
                    </address>

                </div>
                <!--Lien ket-->
                <div class="col-md-6 col-lg-4 text-light">
                    <h6>Liên kết</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="footer-link">Trang chủ</a></li>
                        <li><a href="danh-sach.html" class="footer-link">Danh sách bài thi</a></li>
                        <li><a href="tra-cuu.html" class="footer-link">Tra cứu kết quả</a></li>
                        <li><a href="ve-chung-toi.html" class="footer-link">Về chúng tôi</a></li>
                        <li><a href="dang-ky.html" class="footer-link">Đăng ký</a></li>
                        <li><a href="dang-nhap.html" class="footer-link">Đăng nhập</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>`;
