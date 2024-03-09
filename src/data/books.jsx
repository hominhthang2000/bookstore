import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const booksData = [
  {
    discount: "  -30%",
    img: "./Images/toi_ve_cc_af4a7b96100e49c8a9dbbdd1cfc4178c_medium.webp",
    tilte: "Tôi Vẽ - Phương Pháp Tự Học Vẽ Truyện Tranh",

    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
    slug: "toi-ve-phuong-phap-tu-hoc-ve-truyen-tranh",
    anh: [
      {
        img1: "/Images/2019_09_19_10_47_12_1-390x510_2a7eb569310a422d9274569d59c60892_compact.gif",
        img2: "/Images/toi_ve_cc_af4a7b96100e49c8a9dbbdd1cfc4178c_master.webp",
      },
      {
        img1: "/Images/2019_09_19_10_47_12_2-390x510_ae147bfa9b8e4bf0892751dbf769ba56_compact.gif",
        img2: "/Images/2019_09_19_10_47_12_2-390x510_ae147bfa9b8e4bf0892751dbf769ba56_master.webp",
      },
      {
        img1: "/Images/2019_09_19_10_47_12_3-390x510_6dae253fb04d4fc692c2dc5aa32a07ff_compact.gif",
        img2: "/Images/2019_09_19_10_47_12_3-390x510_6dae253fb04d4fc692c2dc5aa32a07ff_master.webp",
      },
      {
        img1: "/Images/2019_09_19_10_47_12_4-390x510_a46957c77ff94946b0c4951edca22424_compact.gif",
        img2: "/Images/2019_09_19_10_47_12_4-390x510_a46957c77ff94946b0c4951edca22424_master.webp",
      },
    ],
    detail: ` <div className="font-roboto p-4">
    <div className="!mt-[30px] font-bold text-[36px] !font-roboto">
      Tôi Vẽ - Phương Pháp Tự Học Vẽ Truyện Tranh
    </div>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
        lineHeight: "25px",
      }}
    >
      “
      <strong>
        <strong>Tôi vẽ</strong>
      </strong>{" "}
      với 300 trang sách bao gồm những kỹ năng cơ bản cần có
      của một họa sĩ truyện tranh, từ tạo hình nhân vật, thiết
      kế bối cảnh, biểu cảm, các kỹ thuật diễn họa cho đến
      luật phối cảnh. Đây là một cuốn cẩm nang tuyệt vời dành
      cho các bạn đang bắt đầu học vẽ truyện tranh. Những kiến
      thức này có thể không giúp các bạn vẽ đẹp ngay lập tức
      nhưng sẽ là nền tảng vững chắc giúp bạn hình thành các
      tiêu chuẩn chuyên nghiệp trong nghề và không mất thời
      gian tự mò mẫm. Phần minh họa cho các bài học cũng rất
      hấp dẫn và sáng tạo. Các tác giả đã sử dụng chính nhân
      vật và trang truyện của mình để làm rõ sự liên quan giữa
      lý thuyết và thực tế, tính ứng dụng rõ ràng của các kỹ
      thuật và quy trình sáng tác.
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
        lineHeight: "25px",
        marginTop: "10px",
      }}
    >
      &nbsp;Trên thị trường hiện tại không thiếu những quyển
      sách dạy vẽ truyện tranh được dịch và biên tập lại từ
      nhiều nguồn nhưng đa số là kiểu sách “cầm tay chỉ việc”,
      không thật sữ hữu ích với các bạn trẻ Việt Nam – những
      bạn không theo học chuyên ngành mỹ thuật, thiếu kiến
      thức nền tảng về hội họa… Ngược lại, trong quyển{" "}
      <strong>
        <strong>Tôi vẽ</strong>
      </strong>
      , mọi phần kiến thức từ lớn đến nhỏ đều được lý giải và
      phân tích khá kỹ kèm ảnh minh họa rõ ràng, giúp người
      xem hiểu được gốc rễ vấn đề đồng thời áp dụng áp dụng
      vào nhiều “ngữ cảnh” khác nhau trong lúc sáng tác. Hệ
      thống kiến thức trong sách cũng được sắp xếp hợp lý từ
      thấp đến cao, xen kẽ là những trang truyện và hình minh
      họa vui nhộn làm giảm áp lực cho phần lý thuyết hơi khô
      cứng như phần phối cảnh và anatony (giải phẫu)”
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>Phan Vũ Linh</strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Giảng viên Trường Đại học Mỹ thuật Tp. HCM
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Sáng lập Sân Si Studio
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>
          <u>
            <u>Mục lục:</u>
          </u>
        </strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 1: Hình khối
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 2: Chân dung
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 3: Cơ thể người
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 4: Trang phục
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 5: Phối cảnh
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 6: Phần mềm
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Phụ lục
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      <em>
        <em>
          <u>
            <u>&nbsp;</u>
          </u>
        </em>
      </em>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      <em>
        <em>
          <u>
            <u>Thông tin tác phẩm</u>
          </u>
        </em>
      </em>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>
          <em>
            <em>
              Tôi vẽ - Phương pháp tự học vẽ truyện tranh
            </em>
          </em>
        </strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>Tác giả:</strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Mỹ Anh (Butaemon)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Đào Quang Huy
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Lê Mạnh Cương (Kei Nhẫn Giả)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Ngọc Anh (Kite Nguyễn)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Minh Đức
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Quốc Tùng (Tùng Kận)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Trần Xuân Đức (Xiao Đức)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Đặng Quang Dũng (Mèo Mốc)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Mai Ngọc Ánh (Hen Ai Mei)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Vũ Trung Kiên (Kenxfire)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Thu Thủy (KenB)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Hà Huy Hoàng (Splendid River)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Lê Mai Anh (Tuyệt Đỉnh Sinh Vật)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Trần Tùng Dương
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Đặng Thành Tâm (Tidus F air)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>Hiệu đính</strong>
      </strong>
      :
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Phan Vũ Linh (Giảng viên Trường Đại học Mỹ thuật TP.
      HCM)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Hoàng Anh Tuấn (Trưởng nhóm B.R.O)
    </p>
  </div>`,
  },
  {
    slug: "can-truong-buoc-tiep",
    anh: [
      {
        img1: "/Images/2019_09_19_10_47_12_1-390x510_2a7eb569310a422d9274569d59c60892_compact.gif",
        img2: "/Images/toi_ve_cc_af4a7b96100e49c8a9dbbdd1cfc4178c_master.webp",
      },
      {
        img1: "/Images/2019_09_19_10_47_12_2-390x510_ae147bfa9b8e4bf0892751dbf769ba56_compact.gif",
        img2: "/Images/2019_09_19_10_47_12_2-390x510_ae147bfa9b8e4bf0892751dbf769ba56_master.webp",
      },
      {
        img1: "/Images/2019_09_19_10_47_12_3-390x510_6dae253fb04d4fc692c2dc5aa32a07ff_compact.gif",
        img2: "/Images/2019_09_19_10_47_12_3-390x510_6dae253fb04d4fc692c2dc5aa32a07ff_master.webp",
      },
      {
        img1: "/Images/2019_09_19_10_47_12_4-390x510_a46957c77ff94946b0c4951edca22424_compact.gif",
        img2: "/Images/2019_09_19_10_47_12_4-390x510_a46957c77ff94946b0c4951edca22424_master.webp",
      },
    ],
    detail: ` <div className="font-roboto p-4">
    <div className="!mt-[30px] font-bold text-[36px] !font-roboto">
      Tôi Vẽ - Phương Pháp Tự Học Vẽ Truyện Tranh
    </div>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
        lineHeight: "25px",
      }}
    >
      “
      <strong>
        <strong>Tôi vẽ</strong>
      </strong>{" "}
      với 300 trang sách bao gồm những kỹ năng cơ bản cần có
      của một họa sĩ truyện tranh, từ tạo hình nhân vật, thiết
      kế bối cảnh, biểu cảm, các kỹ thuật diễn họa cho đến
      luật phối cảnh. Đây là một cuốn cẩm nang tuyệt vời dành
      cho các bạn đang bắt đầu học vẽ truyện tranh. Những kiến
      thức này có thể không giúp các bạn vẽ đẹp ngay lập tức
      nhưng sẽ là nền tảng vững chắc giúp bạn hình thành các
      tiêu chuẩn chuyên nghiệp trong nghề và không mất thời
      gian tự mò mẫm. Phần minh họa cho các bài học cũng rất
      hấp dẫn và sáng tạo. Các tác giả đã sử dụng chính nhân
      vật và trang truyện của mình để làm rõ sự liên quan giữa
      lý thuyết và thực tế, tính ứng dụng rõ ràng của các kỹ
      thuật và quy trình sáng tác.
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
        lineHeight: "25px",
        marginTop: "10px",
      }}
    >
      &nbsp;Trên thị trường hiện tại không thiếu những quyển
      sách dạy vẽ truyện tranh được dịch và biên tập lại từ
      nhiều nguồn nhưng đa số là kiểu sách “cầm tay chỉ việc”,
      không thật sữ hữu ích với các bạn trẻ Việt Nam – những
      bạn không theo học chuyên ngành mỹ thuật, thiếu kiến
      thức nền tảng về hội họa… Ngược lại, trong quyển{" "}
      <strong>
        <strong>Tôi vẽ</strong>
      </strong>
      , mọi phần kiến thức từ lớn đến nhỏ đều được lý giải và
      phân tích khá kỹ kèm ảnh minh họa rõ ràng, giúp người
      xem hiểu được gốc rễ vấn đề đồng thời áp dụng áp dụng
      vào nhiều “ngữ cảnh” khác nhau trong lúc sáng tác. Hệ
      thống kiến thức trong sách cũng được sắp xếp hợp lý từ
      thấp đến cao, xen kẽ là những trang truyện và hình minh
      họa vui nhộn làm giảm áp lực cho phần lý thuyết hơi khô
      cứng như phần phối cảnh và anatony (giải phẫu)”
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>Phan Vũ Linh</strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Giảng viên Trường Đại học Mỹ thuật Tp. HCM
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Sáng lập Sân Si Studio
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>
          <u>
            <u>Mục lục:</u>
          </u>
        </strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 1: Hình khối
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 2: Chân dung
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 3: Cơ thể người
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 4: Trang phục
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 5: Phối cảnh
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Chương 6: Phần mềm
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Phụ lục
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      <em>
        <em>
          <u>
            <u>&nbsp;</u>
          </u>
        </em>
      </em>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      <em>
        <em>
          <u>
            <u>Thông tin tác phẩm</u>
          </u>
        </em>
      </em>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>
          <em>
            <em>
              Tôi vẽ - Phương pháp tự học vẽ truyện tranh
            </em>
          </em>
        </strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>Tác giả:</strong>
      </strong>
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Mỹ Anh (Butaemon)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Đào Quang Huy
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Lê Mạnh Cương (Kei Nhẫn Giả)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Ngọc Anh (Kite Nguyễn)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Minh Đức
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Quốc Tùng (Tùng Kận)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Trần Xuân Đức (Xiao Đức)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Đặng Quang Dũng (Mèo Mốc)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Mai Ngọc Ánh (Hen Ai Mei)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Vũ Trung Kiên (Kenxfire)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Nguyễn Thu Thủy (KenB)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Hà Huy Hoàng (Splendid River)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Lê Mai Anh (Tuyệt Đỉnh Sinh Vật)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Trần Tùng Dương
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Đặng Thành Tâm (Tidus F air)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        marginTop: "10px",
        fontSize: 14,
      }}
    >
      <strong>
        <strong>Hiệu đính</strong>
      </strong>
      :
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Phan Vũ Linh (Giảng viên Trường Đại học Mỹ thuật TP.
      HCM)
    </p>
    <p
      style={{
        textAlign: "justify",
        color: "rgb(51, 51, 51)",
        backgroundColor: "rgb(255, 255, 255)",
        fontSize: 14,
      }}
    >
      Hoàng Anh Tuấn (Trưởng nhóm B.R.O)
    </p>
  </div>`,
    discount: "  -10%",
    img: "./Images/tb30-1_7a670519dc344827af0cc77ba6c15afa_medium.webp",
    tilte: "Can Trường Bước Tiếp (Tái bản 2023)",

    price: "96,000đ",
    pricediscount: "86,300đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -20%",
    img: "./Images/thiet_ke_chua_co_ten__25__a2f2b864221d4ba89a32de2a165db1d5_medium.jpg",
    tilte: "Đời sống bí ẩn của cây",

    price: "39,000₫đ",
    pricediscount: "31,200₫đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/083ff9aa590e12891cd998cd1e2195d6_15a7dceb0aa54404b8bb3bee5140e952_medium.webp",
    tilte: "Gánh Gánh... Gồng Gồng... (Xuân Phượng hồi ký)",

    price: "160,000đ",
    pricediscount: "144,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },

  {
    discount: "  -30%",
    img: "./Images/thiet_ke_chua_co_ten__40__ec2b0e395b764f6f9c4d7ccbe57d8e4a_medium.webp",
    tilte: "Bộ Học Toán Thật Đơn Giản Cho Trẻ Từ 2-6 Tuổi (Cuốn Lẻ và Combo)",

    price: "120,000đ",
    pricediscount: "100,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -20%",
    img: "./Images/thiet_ke_chua_co_ten__8__9871b4f2fe3245e49f587d39c5378e87_medium.jpg",
    tilte: "Bộ Tủ Sách Thế Giới Động Vật (Cuốn Lẻ Và Combo)",

    price: "50,000đ",
    pricediscount: "40,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/8935074129512_1f48737ab3ab4530a23afdb9af868380_medium.webp",
    tilte: "Bí quyết hội họa - Luyện vẽ hình khối",

    price: "88,000đ",
    pricediscount: "79,200đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
  {
    discount: "  -10%",
    img: "./Images/8935074129505_712fcb003c70456db273aec4e9f81088_medium.webp",
    tilte: "Bí Quyết Hội Họa - Ký Họa Chân Dung",

    price: "70,000đ",
    pricediscount: "63,000đ",
    icon: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ color: "  #333333" }}
        className="hover:!text-red-500"
      />
    ),
  },
];
