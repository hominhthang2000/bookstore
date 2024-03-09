import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs, { init } from "emailjs-com";
import {
  faEnvelope,
  faPencil,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
init("a-_jpImPQeZKKG9UJ");
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const ghichu = document.getElementById("ghichu").value;
  const phone = document.getElementById("phone").value;
  const templateParams = {
    name: name,
    email: email,
    phone: phone,
    ghichu: ghichu,
  };
  emailjs.send("service_39f4rgf", "template_ue71oa5", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

const Contact = () => {
  return (
    <MainLayout>
      <div className="mt-7">
        <div className="flex flex-col">
          <div className="imagescontact flex flex-col items-center justify-center ">
            <div className="flex  text-[35px] font-serif text-[#fff] font-semibold mt-[30px] ">
              LIÊN HỆ VỚI CHÚNG TÔI VÀ CHIA SẺ CÂU CHUYỆN CỦA BẠN
            </div>
            <div className="flex mt-2   text-[20px] font-mono text-[#fff] font-semibold  ">
              Chúng tôi xây dựng niềm tin bằng cách thực hiện những gì chúng tôi
              đã hứa - lần đầu tiên và mọi lúc
            </div>
          </div>
        </div>
        <div className="container shadow-xl rounded my-8 flex flex-col bg-[#fff]">
          <div className="container mt-[30px]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[35px] text-[#61ab00e0] font-bold font-serif">
                LIÊN HỆ HỖ TRỢ
              </div>
              <div className="w-[820px] text-center text-[20px] font-mono text-[#4d4c4c] font-semibold mt-[10px]">
                Hãy gởi lời yêu thương và góp ý để nhà sách Rồng Xanh được phát
                triển hơn bạn nhé. Chúng mình sẽ tiếp nhận và liên hệ với bạn
                trong giờ làm việc.{" "}
              </div>
            </div>
          </div>
          <div className="flex p-[45px] gap-5 ">
            {" "}
            <div
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.924451991179!2d108.2176445847004!3d16.069409699768133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ca4f97c919%3A0x24a85e2091f793fc!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyBM4bqtcCBUcsOsbmggVmnDqm4gUXXhu5FjIFThur8gLSBTb2Z0ZWNoIEFwdGVjaCAtIMSQw6BvIFThuqFvIE3hu7kgVGh14bqtdCDEkGEgUGjGsMahbmcgVGnhu4duIFF14buRYyBU4bq_IC0gU29mdGVjaCBBcmVuYQ!5e0!3m2!1svi!2s!4v1709536574657!5m2!1svi!2s" width="600" height="390" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
              }}
            />
            <form action="#" onSubmit={handleSubmit} className="w-full">
              <div className="w-full  flex flex-col">
                <div className="relative">
                  <input
                    className="h-[60px] rounded-md w-full pl-4 text-[#9d9d9d] bg-[#eee]"
                    type="text"
                    placeholder="Họ và tên đầy đủ"
                    id="username"
                    required
                  ></input>
                  <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#61ab0086" }}
                    />
                  </div>
                </div>
                <div className="flex mt-4 gap-5 w-full">
                  <div className="relative w-full">
                    <input
                      className="h-[60px] rounded-md pl-4 w-full text-[#9d9d9d] bg-[#eee]"
                      type="text"
                      id="phone"
                      placeholder="Số điện thoại"
                      required
                    />
                    <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                      <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#61ab0086" }}
                      />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <input
                      className="h-[60px] rounded-md pl-4 w-full text-[#9d9d9d] bg-[#eee]"
                      type="text"
                      id="email"
                      placeholder="Email"
                      required
                    ></input>
                    <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#61ab0086" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <textarea
                      placeholder="Nội dung..."
                      className="h-[150px] rounded-md pl-4 pt-7 w-full text-[#9d9d9d] bg-[#eee]"
                      id="ghichu"
                      required
                    />
                    <div className="absolute top-[20%] right-[20px] translate-y-[-50%]">
                      <FontAwesomeIcon
                        icon={faPencil}
                        style={{ color: "#61ab0086" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    type="submit"
                    className="w-[200px] shadow-lg rounded h-[50px] bg-[#61ab0086] hover:bg-[#61ab00f8]"
                  >
                    <span className="font-bold ">GỬI</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
