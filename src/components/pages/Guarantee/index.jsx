import React from "react";
import MainLayout from "../../Layouts/MainLayout";

const Guarantee = () => {
  return (
    <MainLayout>
      <div className="flex w-full flex-col container mt-[50px] ">
        <div className=" w-full text-[25px] text-[#333333] bg-[#e4e2e2] mb-[45px] font-bold flex items-center justify-center">
          CHÍNH SÁCH BẢO HÀNH
        </div>
        <div className="text-[18px] font-bold text-[#333333] leading-8 mb-[20px]">
          1. Đối với sản phẩm là Sách và Văn phòng phẩm:
        </div>
        <div className="text-[16px]  text-[#333333] mb-[20px]">
          Không bảo hành
        </div>
        <div className="text-[18px] font-bold text-[#333333] mb-[15px]">
          2. Đối với sản phẩm là Balo và Đồ chơi:
        </div>
        <div className="text-[16px]  leading-8 text-[#333333] mb-[30px]">
          Sản phẩm sẽ được bảo hành theo chính sách của nhà cung cấp (nếu có)
        </div>
        <div className="text-[16px] italic font-bold  leading-8 text-[#333333] mb-[10px]">
          Quy định về bảo hành:
        </div>
        <div className="text-[16px]  leading-8 text-[#333333] mb-[10px]">
          - Sản phẩm được bảo hành miễn phí nếu sản phẩm đó còn thời hạn bảo
          hành được tính kể từ ngày giao hàng.
        </div>
        <div className="text-[16px] leading-8  text-[#333333] mb-[10px]">
          - Thời hạn bảo hành được ghi trên Phiếu Bảo Hành và theo quy định của
          từng hãng sản xuất đối với tất cả các sự cố về mặt kỹ thuật của sản
          phẩm.
        </div>
        <div className="text-[16px] leading-8  text-[#333333] mb-[30px]">
          - Có phiếu bảo hành và tem bảo hành hợp lệ của công ty hoặc của hãng
          sản xuất trên sản phẩm.
        </div>
        <div className="text-[16px] italic font-bold   leading-8 text-[#333333] mb-[10px]">
          Những trường hợp không được bảo hành:
        </div>
        <div className="text-[16px]  leading-8 text-[#333333] mb-[10px]">
          - Sản phẩm đã quá hạn bảo hành ghi trên phiếu hoặc mất Phiếu Bảo Hành.
        </div>
        <div className="text-[16px] leading-8  text-[#333333] mb-[10px]">
          - Phiếu bảo hành không ghi rõ số Serial và ngày mua sản phẩm.
        </div>
        <div className="text-[16px] leading-8  text-[#333333] mb-[10px]">
          - Sản phẩm có dấu hiệu hư hỏng do các tác động như rơi, vỡ... của
          người dùng
        </div>
        <div className="text-[16px] leading-8  text-[#333333] mb-[45px]">
          - Tem niêm phong bảo hành bị rách, vỡ, bị dán đè hoặc sửa đổi, tẩy
          xóa.
        </div>
      </div>
    </MainLayout>
  );
};

export default Guarantee;
