import React from "react";
import MainLayout from "../../Layouts/MainLayout";

const ShoppingGuide = () => {
  return (
    <MainLayout>
      <div className="flex w-full flex-col container mt-[50px] ">
        <div className=" w-full text-[25px] text-[#333333] bg-[#e4e2e2] mb-[45px] font-bold flex items-center justify-center">
          PHƯƠNG THỨC THANH TOÁN
        </div>
        <div className="text-[18px] font-bold text-[#333333] leading-8 mb-[20px]">
          1. Chuyển khoản qua ngân hàng
        </div>
        <div className="text-[16px]  text-[#333333] mb-[20px]">
          Xin vui lòng chuyển tiền vào tài khoản của nhà sách Rồng Xanh theo số
          tài khoản sau:
        </div>

        <div className="text-[16px] font-bold leading-8 text-[#333333] mb-[10px]">
          Tên tài khoản : HỒ MINH THẮNG
        </div>
        <div className="text-[16px] font-bold leading-8 text-[#333333] mb-[10px]">
          Số tài khoản : 02499853501
        </div>
        <div className="text-[16px] font-bold leading-8 text-[#333333] mb-[10px]">
          Ngân hàng : TPbank- Chi nhánh Đà Nẵng - Phòng giao dịch Nguyễn Hữu Thọ
        </div>
        <div className="text-[16px] leading-8  text-[#333333] mb-[10px]">
          (Quý khách vui lòng ghi thông tin theo cú pháp sau trên phần ghi chú
          CK: Họ tên + mã đơn hàng VD: Nguyen Van A 0235786)
        </div>

        <div className="text-[16px]  text-[#333333] mb-[45px]">
          Ngay sau khi nhận được thông tin về thanh toán chúng tôi sẽ tiến hành
          chuyển hàng.
        </div>

        <div className="text-[18px] font-bold text-[#333333] mb-[20px]">
          2. Thanh toán tiền mặt khi nhận hàng:
        </div>
        <div className="text-[16px]  text-[#333333] mb-[10px]">
          Thanh toán khi nhận hàng - COD, áp dụng toàn quốc.
        </div>
        <div className="text-[16px]  text-[#333333] mb-[10px]">
          Khách hàng thanh toán cho nhân viên giao nhận hàng hoá ngay tại thời
          điểm nhận hàng. Khách hàng vui lòng kiểm tra kỹ sản phẩm trước khi
          nhận hàng. Trong trường hợp <br /> Quý khách nhờ người nhận giúp, vui
          lòng thông báo số tiền thanh toán cho người nhà.
        </div>
        <div className="text-[18px] font-bold  text-[#333333] mb-[10px]">
          Khi cần hỗ trợ hoặc giải đáp thắc mắc, quý khách vui lòng liên hệ:
        </div>
        <div className="text-[16px]  text-[#333333] mb-[45px]">
          Hotline: 077.5551487
        </div>
      </div>
    </MainLayout>
  );
};

export default ShoppingGuide;
