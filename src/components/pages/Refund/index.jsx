import React from "react";
import MainLayout from "../../Layouts/MainLayout";

const Refund = () => {
  return (
    <MainLayout>
      <div className="flex w-full flex-col container mt-[50px] ">
        <div className=" w-full text-[25px] text-[#333333] bg-[#e4e2e2] mb-[45px] font-bold flex items-center justify-center">
          CHÍNH SÁCH ĐỔI - TRẢ - HOÀN TIỀN
        </div>
        <div className="text-[18px] font-bold text-[#333333]   mb-[20px]">
          1. Điều kiện đổi trả
        </div>
        <div className="text-[16px] font-medium  text-[#333333] mb-[10px]">
          Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/
          trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp
          sau:
        </div>
        <div className="text-[16px]    text-[#333333] mb-[10px]">
          - Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như
          trên website tại thời điểm đặt hàng.
        </div>
        <div className="text-[16px]    text-[#333333] mb-[10px]">
          - Không đủ số lượng, không đủ bộ như trong đơn hàng.
        </div>
        <div className="text-[16px]    text-[#333333] mb-[10px]">
          - Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…
        </div>
        <div className="text-[16px]    text-[#333333] mb-[25px]">
          Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu
          sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
        </div>
        <div className="text-[18px] font-bold text-[#333333]   mb-[20px]">
          2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả
        </div>
        <div className="text-[16px]   text-[#333333] mb-[10px]">
          <strong>- Thời gian thông báo đổi trả: </strong>trong vòng 48h kể từ
          khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng
          hoặc bể vỡ.
        </div>
        <div className="text-[16px]    text-[#333333] mb-[10px]">
          <strong> - Thời gian gửi chuyển trả sản phẩm:</strong> trong vòng 14
          ngày kể từ khi nhận sản phẩm.
        </div>
        <div className="text-[16px]    text-[#333333] mb-[25px]">
          <strong>- Địa điểm đổi trả sản phẩm:</strong> Khách hàng có thể mang
          hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua
          đường bưu điện.
        </div>
        <div className="text-[18px] font-bold text-[#333333]   mb-[20px]">
          3. Hoàn tiền
        </div>
        <div className="text-[16px]    text-[#333333] mb-[30px]">
          Trong trường hợp mặt hàng quý khách đặt mua tại Cachep.vn đã hết và
          đơn hàng đã được thanh toán trước bằng chuyển khoản và các phương thức
          khác, Cachep.vn sẽ hoàn tiền cho quý khách thông qua chuyển khoản ngân
          hàng trong vòng từ 2 - 7 ngày làm việc.
        </div>
        <div className="text-[16px]  italic  text-[#333333] mb-[40px]">
          Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan
          đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây
          chăm sóc khách hàng của chúng tôi. Hotline liên hệ: 024.39947159
        </div>
      </div>
    </MainLayout>
  );
};

export default Refund;
