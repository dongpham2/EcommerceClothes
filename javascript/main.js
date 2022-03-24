// banner
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// click
var user = document.querySelector(".header-user-icon");
var form = document.querySelector(".form");
user.addEventListener("click", function () {
  form.classList.toggle("active-form");
});

window.onscroll = () => {
  form.classList.remove("active-form");
};
// var mockData = [];
// async function getItems() {
//   mockData = await axiosClient.get('/items'); 
// }
// getItems();
var mockData = [
  {
    _id: "6238c7dffc6537b735ccf5de",
    name: "ÁO KHOÁC BIKER DA OVERSIZE",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F%C3%81O%20KHO%C3%81C%20BIKER%20DA%20OVERSIZE.jpg?alt=media&token=13da6815-4a53-44d6-a275-8794a5d4eb9d",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F1%2F5388407800_2_1_1.jpg?alt=media&token=9135300f-7e72-43bb-b144-aa35b835a339",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F1%2F5388407800_2_5_1.jpg?alt=media&token=384e563f-55ce-4121-9ec6-5aec9b04297f",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F1%2F5388407800_6_2_1.jpg?alt=media&token=c2cc01e1-9e0a-430a-8589-530c388cc74d",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F1%2F%C3%81O%20KHO%C3%81C%20BIKER%20DA%20OVERSIZE.jpg?alt=media&token=83a18cf0-7898-475c-b456-a81cb6f47811",
    ],
    description:
      "Áo khoác cổ ve lật, ve áo có khuy bấm. Dài tay, cài khóa kéo ở cổ tay. Có túi cài khóa kéo trước ngực và hai bên hông. Có một túi ở lớp vải lót bên trong. Có khóa kéo kim loại cài chéo phía trước.",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO KHOÁC BIKER DA",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F%C3%81O%20KHO%C3%81C%20BIKER%20DA.jpg?alt=media&token=9c8dc14c-80b4-4d52-8029-afaad80ac1eb",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F2%2F9953401800_2_1_1.jpg?alt=media&token=bff2c42a-9579-4976-9817-4ab4b01973a3",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F2%2F9953401800_2_5_1.jpg?alt=media&token=dc05283e-c2ab-41b5-8666-94e31ea177f9",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F2%2F9953401800_6_2_1.jpg?alt=media&token=244d41bc-945a-42cb-b894-1015b5138acd",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F2%2F%C3%81O%20KHO%C3%81C%20BIKER%20DA.jpg?alt=media&token=94dd52fb-91f8-4f2b-bad0-6f87c629ae22",
    ],
    description:
      "Áo khoác cổ ve lật, ve áo có khuy bấm. Dài tay, cài khóa kéo ở cổ tay. Có túi cài khóa kéo trước ngực và hai bên hông. Có một túi ở lớp vải lót bên trong. Có khóa kéo kim loại cài chéo phía trước.",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO KHOÁC BIKER GIẢ DA PHỐI VẢI KHÁC MÀU",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F%C3%81O%20KHO%C3%81C%20BIKER%20GI%E1%BA%A2%20DA%20PH%E1%BB%90I%20V%E1%BA%A2I%20KH%C3%81C%20M%C3%80U.jpg?alt=media&token=45575d10-5753-4181-a3a7-883eec3cbaec",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F3%2F3427407800_2_4_1.jpg?alt=media&token=24e5c8b2-2761-46d1-9571-0896a0f45fac",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F3%2F3427407800_2_6_1.jpg?alt=media&token=967df0c6-d581-47cf-8064-01bf101aea83",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F3%2F3427407800_6_2_1.jpg?alt=media&token=83049b1e-0ff9-45c1-85b9-794d255f2008",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BIKER%2F3%2F%C3%81O%20KHO%C3%81C%20BIKER%20GI%E1%BA%A2%20DA%20PH%E1%BB%90I%20V%E1%BA%A2I%20KH%C3%81C%20M%C3%80U.jpg?alt=media&token=b87910a1-3f13-473f-8384-8a43243d9c5e",
    ],
    description:
      "Áo khoác cổ ve lật, ve áo có khuy bấm. Dài tay, cài khóa kéo ở cổ tay. Có túi cài khóa kéo trước ngực và hai bên hông. Có một túi ở lớp vải lót bên trong. Có khóa kéo kim loại cài chéo phía trước.",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO KHOÁC BLAZER DÁNG COMFORT",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BLAZER%2F%C3%81O%20KHO%C3%81C%20BLAZER%20D%C3%81NG%20COMFORT%20FIT.jpg?alt=media&token=f79e43f0-4b3e-4f47-9e19-ff2c96ecb9df",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BLAZER%2F1%2F0706435800_2_2_1.jpg?alt=media&token=c940ac0e-b1fb-437a-8a3a-32e67536c67f",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BLAZER%2F1%2F0706435800_2_5_1.jpg?alt=media&token=ab877e7c-312d-4205-9a84-307ff8ed1770",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BLAZER%2F1%2F6861440800_6_2_1.jpg?alt=media&token=b6b66401-6c69-440a-bceb-68110e0d44ac",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BLAZER%2F1%2F%C3%81O%20KHO%C3%81C%20BLAZER%20D%C3%81NG%20COMFORT%20FIT.jpg?alt=media&token=9a9d1769-9fcf-401c-8918-ec703e28d8cd",
    ],
    description:
      "Thiết kế tạo sự chỉn chu, trang trọng, phong độ cho phái mạnh nhưng vẫn giữ được sự thoải mái hay sự linh động trong cách phối đồ. Phù hợp với mọi kiểu thời tiết nên có thể sử dụng quanh năm. Kiểu dáng, chất liệu, màu sắc, họa tiết… đa dạng, phù hợp với nhiều phong cách hay hoàn cảnh từ bình thường đến trang trọng. Là một trong những dáng áo khoác nam góp phần khiến cho outfit trở nên tinh tế, lịch lãm và sành điệu hơn. Chất liệu vải da lộn cao cấp, mềm mịn cực kỳ ấm áp. Lớp lót lông dầy dặn, mặc cực kỳ mềm mịn ấm áp. Form áo ôm body Hàn Quốc trẻ trung và phong cách, phù hợp mọi hoàn cảnh kể cả đi chơi và đi làm. ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO KHOÁC BOMBER CÀI KHÓA KÉO ẨN ĐEN",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BOMBER%2F%C3%81O%20KHO%C3%81C%20BOMBER%20C%C3%80I%20KH%C3%93A%20K%C3%89O%20%E1%BA%A8N%20%C4%90EN.jpg?alt=media&token=a7782009-c648-475b-a0c9-ef2b6cf1004a",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BOMBER%2F1%2F0029415401_1_1_1.jpg?alt=media&token=f2cb391b-7789-4ac8-874d-0b5d5e2c0e3f",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BOMBER%2F1%2F0029415401_2_2_1.jpg?alt=media&token=0188e591-f454-41d8-b3fa-b59a222ed28b",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BOMBER%2F1%2F0029415401_6_2_1.jpg?alt=media&token=b614d3a7-2dd3-4782-96a0-388fa81be40e",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20BOMBER%2F1%2F%C3%81O%20KHO%C3%81C%20BOMBER%20C%C3%80I%20KH%C3%93A%20K%C3%89O%20%E1%BA%A8N%20%C4%90EN.jpg?alt=media&token=f4ee5d35-d23f-4e08-9fea-a7aada790e9b",
    ],
    description:
      "Áo khoác nam bomber mang lại vẻ đẹp khỏe khoắn, sành điệu, phong cách, chúng cũng đa năng, có tính ứng dụng cao, không quá khó kết hợp với các món đồ khác và phù hợp với nhiều kiểu thời tiết. Tuy không có nhiều lựa chọn về kiểu dáng (bomber dáng ngắn hoặc bomber dáng dài) nhưng áo khoác bomber nam lại sở hữu chất liệu, màu sắc khá đa dạng. Phù hợp với nhiều phong cách hay hoàn cảnh, diện đi chơi, đi làm hay dự những buổi tiệc không quá trang trọng đều ổn. Chất liệu vải da lộn cao cấp, mềm mịn cực kỳ ấm áp Lớp lót lông dầy dặn, mặc cực kỳ mềm mịn ấm áp. Form áo ôm body Hàn Quốc trẻ trung và phong cách, phù hợp mọi hoàn cảnh kể cả đi chơi và đi làm. ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO CARDIGAN CỔ TRỤ",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20CARDIGAN%2F%C3%81O%20CARDIGAN%20C%E1%BB%94%20TR%E1%BB%A4.jpg?alt=media&token=a89356db-362b-43a6-a3ef-f3161379ce88",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20CARDIGAN%2F1%2F0693413401_1_1_1.jpg?alt=media&token=d756a097-dae3-4edb-a47f-d2a26945a60c",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20CARDIGAN%2F1%2F0693413401_2_5_1.jpg?alt=media&token=816317a6-cfa4-4428-8f23-8a549d4ed385",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20CARDIGAN%2F1%2F0693413401_6_2_1.jpg?alt=media&token=3ce44ae1-32e1-4065-8e69-84263581456d",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20CARDIGAN%2F1%2F%C3%81O%20CARDIGAN%20C%E1%BB%94%20TR%E1%BB%A4.jpg?alt=media&token=b8aee0de-06fb-4bfb-a2fa-53a52105d331",
    ],
    description:
      "Áo cardigan nam là một trong những kiểu áo khoác linh hoạt nhất hiện nay, phù hợp với cả 3 mùa Xuân, Thu, Đông. Thường được xem là kiểu áo khoác nam mỏng thông dụng và sở hữu thiết kế đơn giản nhưng cardigan cũng có rất nhiều lựa chọn về kiểu dáng, màu sắc, họa tiết. Áo cardigan phù hợp với nhiều phong cách khác nhau, dễ phối đồ và đặc biệt là có khả năng nâng cấp set đồ hay kết hợp cùng các kiểu áo khoác khác cực ổn. Chất liệu vải da lộn cao cấp, mềm mịn cực kỳ ấm áp Lớp lót lông dầy dặn, mặc cực kỳ mềm mịn ấm áp. Form áo ôm body Hàn Quốc trẻ trung và phong cách, phù hợp mọi hoàn cảnh kể cả đi chơi và đi làm. ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO GI LÊ CHẰN BÔNG",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GILE%2FA%CC%81O%20GI%20L%C3%8A%20CH%C3%82%CC%80N%20B%C3%94NG.jpg?alt=media&token=7d578874-8558-4930-85ac-381c7dc0de06",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GILE%2F1%2F3918405500_2_1_1.jpg?alt=media&token=90639e43-44dc-4e4f-bf62-acf8ebd1694b",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GILE%2F1%2F3918405500_2_2_1.jpg?alt=media&token=2b726274-fa52-4ec7-86b5-725818e417ad",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GILE%2F1%2F3918405500_6_2_1.jpg?alt=media&token=41d597db-04d5-485f-8dea-4cb644849bcd",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GILE%2F1%2FA%CC%81O%20GI%20L%C3%8A%20CH%C3%82%CC%80N%20B%C3%94NG.jpg?alt=media&token=aedc9540-3501-4782-8957-0a050c7a0683",
    ],
    description:
      "- Chất liệu: 50% wool (Len lông cừu), 25% acrylic, 25% nilon. Chất liệu len lông cừu Merino cao cấp. Form dáng Unisex, nam nữ đều mặc được. Ngực thêu logo DATAMAN. Sản phẩm đã qua giặt sấy nên ko xảy ra tình trạng co ngắn. Bảo hành áo trọn đời các lỗi có thể sửa chữa được",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO KHÓAC GIÓ PHỐI MÀU COLOR BLOCK ĐEN",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GIO%2F%C3%81O%20KHO%C3%81C%20GI%C3%93%20PH%E1%BB%90I%20M%C3%80U%20COLOR%20BLOCK%20%C4%90EN.jpg?alt=media&token=a17eeb04-78b9-45f2-816d-c242922bdff2",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GIO%2F1%2F5320208505_1_1_1.jpg?alt=media&token=f1c34aab-7835-4014-b1ba-41ba211ccde3",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GIO%2F1%2F5320208505_6_2_1.jpg?alt=media&token=67fdece3-20b5-4c69-9011-953f423d9f09",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20GIO%2F1%2F%C3%81O%20KHO%C3%81C%20GI%C3%93%20PH%E1%BB%90I%20M%C3%80U%20COLOR%20BLOCK%20%C4%90EN.jpg?alt=media&token=4c8a5d0b-8651-4e94-b9e9-50c228f054c5",
    ],
    description:
      " Áo gió là một trong những kiểu áo khoác nam cực đa năng, có thể chống nắng, chống lạnh đặc biệt là chống gió, chống mưa vô cùng hiệu quả. Nhỏ gọn, phù hợp với mọi kiểu thời tiết. Sở hữu bảng màu đa dạng, thời thượng bậc nhất. Dễ phối đồ, có thể sử dụng cho nhiều mục đích khác nhau bao gồm cả các hoạt động thể thao. Chất liệu vải  cao cấp. Lớp lót lông dầy dặn, mặc cực kỳ mềm mịn ấm áp. Form áo ôm body Hàn Quốc trẻ trung và phong cách, phù hợp mọi hoàn cảnh kể cả đi chơi và đi làm. ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO KHÓAC DÀI OVERSIZE",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20KHOAC%20DAI%2F%C3%81O%20KHO%C3%81C%20D%C3%80I%20OVERSIZE.jpg?alt=media&token=40eb7961-c316-4ddc-8be1-a7bd3ed3ab1e",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20KHOAC%20DAI%2F1%2F4192422401_2_1_1.jpg?alt=media&token=a8ac3931-77f0-4fb6-894f-1052ef4975be",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20KHOAC%20DAI%2F1%2F4192422401_2_5_1.jpg?alt=media&token=9423a05e-a0e2-40d5-a510-15cfe662fc59",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20KHOAC%20DAI%2F1%2F4192422401_6_2_1.jpg?alt=media&token=7dda8d70-4ac4-4af0-9d89-6acb1b3decb7",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20KHOAC%20DAI%2F1%2F%C3%81O%20KHO%C3%81C%20D%C3%80I%20OVERSIZE.jpg?alt=media&token=0a55c815-101b-42be-82b6-8125c2488fb3",
    ],
    description:
      "Size M   : Dành cho người cao từ: 1m47 - 1m57 và nặng từ  45kg - 55kg. Size L    : Dành cho người cao từ: 1m58 - 1m65 và nặng từ  55kg - 61kg. Size XL : Dành cho người cao từ: 1m66 -  1m72 và nặng từ  62kg  - 70kg. Size 2XL: Dành cho người cao từ1m72 - 1m8 hoặc từ  71kg  - 80kg. Size 3XL: size dành cho khách trên 80kg - 90 kg và cao từ 1m8 -88kg.",
    origin: "Việt Nam",
    quantity: 100,
    size: [
      "M(48-57kg)",
      "L(56-63kg)",
      "XL(63-70kg)",
      "XXL(70-78kg)",
      "XXXL(80-90kg)",
    ],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO LEN HỌA TIẾT QUẢ BÓNG RỔ",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20LEN%2F%C3%81O%20LEN%20D%E1%BB%86T%20H%E1%BB%8CA%20TI%E1%BA%BET%20QU%E1%BA%A2%20B%C3%93NG%20R%E1%BB%94.jpg?alt=media&token=b9a33860-2018-4cd1-94ea-b80a596e968e",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20LEN%2F1%2F6771412710_2_2_1.jpg?alt=media&token=bf677b07-0abc-4f85-bf1a-6a8536f2bea0",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20LEN%2F1%2F6771412710_2_7_1.jpg?alt=media&token=e71fc519-f72b-4b32-a3a4-04c9a4af8e2c",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20LEN%2F1%2F6771412710_6_2_1.jpg?alt=media&token=af968513-0428-4993-80b2-7637a063f582",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20LEN%2F1%2F%C3%81O%20LEN%20D%E1%BB%86T%20H%E1%BB%8CA%20TI%E1%BA%BET%20QU%E1%BA%A2%20B%C3%93NG%20R%E1%BB%94.jpg?alt=media&token=d5eab732-91a7-4caa-a4b4-c47c6eeb72ab",
    ],
    description:
      "- Sản phẩm: Áo len nam cổ tròn, áo len nam cổ tròn hàn quốc, áo len nam cổ tròn dày dặn, áo len nam cổ tròn hạt gạo. Kiểu dáng: Áo len nam được thiết kế với phần tay dài, cổ tròn, bao gồm hai loại size vừa theo người và size rộng (oversize). Ưu điểm: Sản phẩm áo len nam này phù hợp với mọi lứa tuổi và giới tính, phù hợp cho cả nam và nữ, được nhiều bạn trẻ lựa chọn bởi sự đơn giản, gọn gàng , khả năng phối hợp với những trang phục khác cũng đa dạng, bắt mắt. Áo len nam hàn quốc. Sản phẩm: Áo len nam hàn quốc form rộng. Kiểu dáng: Áo len nam Hàn Quốc có nhiều màu sắc phù hợp cho cả nam và nữ ở mọi lứa tuổi, phối cùng áo vest áo dạ cực hợp và đẹp cho mùa đông Chất len đẹp, mềm và mịn co dãn tốt, mặc ấm áp khỏi lo cái lạnh của mùa đông.",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO MĂNG TÔ CHẦN BÔNG",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20MANG%20TO%2F%C3%81O%20M%C4%82NG%20T%C3%94%20CH%E1%BA%A6N%20B%C3%94NG.jpg?alt=media&token=97afe866-f0fc-4108-8ee8-6e7d50db16ec",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20MANG%20TO%2F1%2F8281416706_2_2_1.jpg?alt=media&token=ef8888fd-64ce-4507-ac8d-7d3ec7444c75",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20MANG%20TO%2F1%2F8281416706_2_3_1.jpg?alt=media&token=3ab8549f-bd05-49e7-9f81-f8ab78545b6b",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20MANG%20TO%2F1%2F8281416706_6_2_1.jpg?alt=media&token=5931c33e-878f-4108-98af-f1f0a07654f6",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20MANG%20TO%2F1%2F%C3%81O%20M%C4%82NG%20T%C3%94%20CH%E1%BA%A6N%20B%C3%94NG.jpg?alt=media&token=eeab0bfa-14e0-48d6-b7dd-3c156a41b7d5",
    ],
    description:
      " - Măng tô là kiểu áo khoác nam dài, dày dành riêng cho mùa Đông có khả năng giữ ấm cũng như nâng cấp phong cách siêu ổn. Sở hữu kiểu dáng, màu sắc, chất liệu đa dạng, linh hoạt, phù hợp với từng nhu cầu cụ thể. Dễ dàng kết hợp với hầu hết các loại trang phục cũng như phong cách và hoàn cảnh khác nhau (từ thoải mái, lịch lãm đến sang trọng. Chất liệu vải da lộn cao cấp, mềm mịn cực kỳ ấm áp. Lớp lót lông dầy dặn, mặc cực kỳ mềm mịn ấm áp. Form áo ôm body Hàn Quốc trẻ trung và phong cách, phù hợp mọi hoàn cảnh kể cả đi chơi và đi làm. ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO NỈ COLOR BLOCK",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20NI%2F%C3%81O%20N%E1%BB%88%20COLOR%20BLOCK.jpg?alt=media&token=fb6e37a6-112c-42ac-ab8e-b5774a39ea96",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20NI%2F1%2F0962423321_2_1_1.jpg?alt=media&token=ea8b05ca-9a85-4b51-893b-aabe374f8ae8",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20NI%2F1%2F0962423321_2_2_1.jpg?alt=media&token=107566bd-1dee-4cc5-b2b6-acda4d173744",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20NI%2F1%2F0962423321_6_2_1.jpg?alt=media&token=15c38247-056e-43e4-b664-9dabc2eeba5b",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20NI%2F1%2F%C3%81O%20N%E1%BB%88%20C%C3%93%20MI%E1%BA%BENG%20%C4%90%C3%81P%20TRANG%20TR%C3%8D.jpg?alt=media&token=23773065-ad07-4fa4-9409-5c5ae04e00f7",
    ],
    description:
      "Áo Nỉ Nam Có Túi Khóa Tay Chất Nỉ Bông Cao Cấp , Áo Nỉ Sweater Basic Thời Trang Nam Trẻ Trung Năng Động. Sản phẩm được làm từ chất liệu nỉ bông bền đẹp, dày dặn và mềm mịn, chống bai rão hay bạc màu, phù hợp trong cả thời tiết nắng hay mưa. Khả năng giữ ấm cực tốt giúp người mặc không cần mặc quá nhiều lớp áo gây nặng nề, khó chịu. Áo được thiết kế đứng dáng, cực giữ form giúp người mặc thoải mái cả ngày và cực năng động. Màu sắc trẻ trung năng động, dễ dàng phối cùng với các loại trang phục khác, mang lại sự biến hóa đơn giản nhưng vô cùng đẹp mắt. Thiết kế phối bo tay áo và bo gấu đơn giản, tinh tế mang đến phong cách trẻ trung và thanh lịch. Điểm nhấn là túi khóa ở tay áo mang lại sự trẻ trung, năng động, tiện lợi khi để những đồ vật nhỏ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO KHOÁC PARKA 2 TRONG 1",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PARKA%2F%C3%81O%20KHO%C3%81C%20PARKA%202%20TRONG%201.jpg?alt=media&token=eda34832-865e-4d54-a3dc-ee24731bf466",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PARKA%2F1%2F8281493505_6_2_1.jpg?alt=media&token=9afe645d-289c-4185-8950-e21985e3b7a4",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PARKA%2F1%2F8281493505_6_3_1.jpg?alt=media&token=7e3165a7-7e4a-48bd-a968-20458484ee5d",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PARKA%2F1%2F%C3%81O%20KHO%C3%81C%20PARKA%202%20TRONG%201.jpg?alt=media&token=ea91cc1b-cce6-49b9-a4f6-aaa5414c38b1",
    ],
    description:
      "Áo parka giữ ấm tốt, có khả năng chống gió, chống nước nhẹ, bảo vệ cơ thể khỏi thời tiết khắc nghiệt. Là một trong những mẫu áo khoác có kiểu dáng khá đa dạng, phù hợp với nhu cầu sử dụng cũng như vóc dáng khác nhau. Dễ phối đồ. Chất liệu vải da lộn cao cấp, mềm mịn cực kỳ ấm áp. Lớp lót lông dầy dặn, mặc cực kỳ mềm mịn ấm áp. Form áo ôm body Hàn Quốc trẻ trung và phong cách, phù hợp mọi hoàn cảnh kể cả đi chơi và đi làm. ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO PHAO CAM",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHAO%2F%C3%81O%20PHAO%20CAM%20.jpg?alt=media&token=0a67a37e-435c-4018-a1f4-f09251d6e830",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHAO%2F1%2F8281353615_2_2_1.jpg?alt=media&token=ce00fe7d-d7c6-4843-9af4-a53bcc6686b5",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHAO%2F1%2F8281353615_2_4_1.jpg?alt=media&token=8b776a31-8340-42ab-9973-91d5290bd6c2",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHAO%2F1%2F8281353615_6_2_1.jpg?alt=media&token=e9ac8cd3-9d2a-48d4-b603-e7a088ea1b32",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHAO%2F1%2F%C3%81O%20PHAO%20CAM%20.jpg?alt=media&token=ec8c2596-d9de-4d1b-a193-ca37007ab410",
    ],
    description:
      "⭐Bảng size bên shop các bạn tham khảo ạ. Size M   : Dành cho khách dưới 65 kg. Size L    :  Dành cho khách dưới 70 kg. Size XL : Dành cho khách dưới 80 cân. Size 2XL: Dành cho khách dưới 85kg. Size 3XL: size dành cho khách dưới 95 cân",
    origin: "Việt Nam",
    quantity: 100,
    size: [
      "M(48-57kg)",
      "L(56-63kg)",
      "XL(63-70kg)",
      "XXL(70-78kg)",
      "XXXL(80-90kg)",
    ],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO PHÔNG HỌA TIẾT",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHONG%2F%C3%81O%20PH%C3%94NG%20H%E1%BB%8CA%20TI%E1%BA%BET.jpg?alt=media&token=2459f63e-7467-441d-96f0-0afa1c61d5b3",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHONG%2F1%2F0495313250_2_3_1.jpg?alt=media&token=b120dc07-6c88-40bc-8716-a9ed71bd6ec3",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHONG%2F1%2F0495313250_2_4_1.jpg?alt=media&token=e407d734-5dc5-41bf-945b-49a9adae3b9e",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHONG%2F1%2F0495313250_6_2_1.jpg?alt=media&token=6caef3e1-2b45-4a8f-879a-4f236c4d045b",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20PHONG%2F1%2F%C3%81O%20PH%C3%94NG%20H%E1%BB%8CA%20TI%E1%BA%BET%20SKATERS.jpg?alt=media&token=6ca83314-b39d-4c58-84a2-9061176b840c",
    ],
    description:
      "Áo thun tay lỡ unisex form rộng chất cotton dày đẹp mềm mịn thấm hút mồ hôi được thiết kế theo phong cách hàn quốc trẻ trung năng động thích hợp mặc hàng ngày, mặc đi chơi, đi dạo phố, form áo rộng rất dễ phối đồ mix với quần jean hay chân váy đều rất hợp. THÀNH PHẦN. Chất Liệu Vải : 65% Cotton + 35% spandex",
    origin: "Việt Nam",
    quantity: 100,
    size: [
      "M(48-57kg)",
      "L(56-63kg)",
      "XL(63-70kg)",
      "XXL(70-78kg)",
      "XXXL(80-90kg)",
    ],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO VÉT TRẮNG",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20QUAN%20AU%2Fao%20vet%20trang.jpg?alt=media&token=408da6f8-05e5-4156-9673-88d015a9c2fe",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20QUAN%20AU%2F1%2Fao%20vet%20trang.jpg?alt=media&token=6ec1042a-1762-4f74-8e48-7bda6fb9fcc2",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20QUAN%20AU%2F1%2Fs7-1330072_alternate1.jpg?alt=media&token=231ff78b-5125-4783-83d9-c7eb29ce2545",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20QUAN%20AU%2F1%2Fs7-1330072_alternate10.jpg?alt=media&token=a5227f9e-8ad8-4c64-8e6e-03aa1dc586af",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20QUAN%20AU%2F1%2Fs7-1330072_alternate3.jpg?alt=media&token=685ae713-05bf-4b03-83bd-8b82bf403341",
    ],
    description:
      "AO VEST được may chất liệu vải tuyết cao cấp dáng đứng, có lớp lót mềm. Độ co dãn vừa phải làm người dùng cảm thấy thoải mái nhất có thể khi sử dụng Độ co dãn vừa phải làm người dùng cảm thấy thoải mái nhất có thể khi sử dụng. Chất liệu: Vải tuyết cao cấp ",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
  {
    name: "ÁO SƠ MI KẺ CARO",
    type: "ao",
    price: "150000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20SO%20MI%2F%C3%81O%20%20S%C6%A0%20MI%20K%E1%BA%BA%20CA%20R%C3%94.jpg?alt=media&token=2d91e38c-f495-48aa-a277-edf11e0352b3",
    img_details: [
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20SO%20MI%2F1%2F7446460800_2_2_1.jpg?alt=media&token=90cd7028-2201-4e07-94b2-170b97521171",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20SO%20MI%2F1%2F7446460800_2_5_1.jpg?alt=media&token=b6e95e8b-e28c-46dc-b578-2f75ebfe97e7",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20SO%20MI%2F1%2F7446460800_6_2_1.jpg?alt=media&token=f72d8322-cfb9-477b-9b33-4af523c77de8",
      "https://firebasestorage.googleapis.com/v0/b/api-store-25c76.appspot.com/o/AO%20SO%20MI%2F1%2F%C3%81O%20%20S%C6%A0%20MI%20K%E1%BA%BA%20CA%20R%C3%94.jpg?alt=media&token=16fc76e1-e67f-4a5d-8c8d-49245b69c181",
    ],
    description:
      "ÁO SƠ MI NAM CHUẨN FORM. Hàng chính hiệu, full tag, mác, chất vải đẹp, mát không nhăn (xem video trên ảnh sản phẩm). Chất liệu: Vải cotton thô pha đũi hàn quốc  mềm mịn, siêu mát, thấm hút mồ hôi nhanh, bề mặt vải đanh chắc và không nhăn khi giặt máy. Họa tiết trơn cổ điển. Khách hàng phối với Jeans, Kaki, Short, quần tây đều được. Mặc dạo phố, du lịch hay đến các buổi tiệc đều mang đến sự thoải mái, tự tin đẳng cấp dành cho khách hàng. Đường may tỉ mỉ, chắc chắn",
    origin: "Việt Nam",
    quantity: 100,
    size: ["M(48-57kg)", "L(56-63kg)", "XL(63-70kg)", "XXL(70-78kg)"],
    status: true,
    __v: 0,
  },
];

// var mockData = [
//   {
//     id: 1,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/banner1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Áo lo nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 3,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 4,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 5,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 6,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 7,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 8,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 9,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 10,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 11,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 12,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 13,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 14,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 16,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 17,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 18,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 19,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 20,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 21,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 22,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 23,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 24,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 25,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 26,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 27,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 28,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 26,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 27,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
//   {
//     id: 28,
//     name: 'Áo thun nam siêu đẹp zzzzzzzzzzzzzz',
//     price: 150.0,
//     sale: 'Đã bán 2',
//     image: '/images/ao1.jpg',
//   },
// ];

// search
const searchBar = document.querySelector(".header-search input");
searchBar.addEventListener("input", function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  let listProductDOM = document.querySelectorAll(".product-item-name");
  listProductDOM.forEach((item) => {
    if (item.innerText.toLowerCase().inclues(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});

let perPage = 10; // số items hiển thị
let currentPage = 1;
let start = 0;
let end = perPage;

const totalPages = Math.ceil(mockData.length / perPage);

// render :ListPage
const listPage = document.querySelector(".content-number-page");
function renderPaginationPage() {
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `
    <button class="btn-number">${i}</button>
    `;
  }
  listPage.innerHTML = html;
}
renderPaginationPage();

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
  // totalPages = Math.ceil(mockData.length / perPage);
}

//renderproduct
const products = document.querySelector(".product__bottom");

function numPages() {
  return Math.ceil(mockData.length / perPage);
}

function renderProduct() {
  // if (perPage < 1) perPage = 1;
  // if (perPage > numPages()) perPage = numPages();
  for (var i = (currentPage - 1) * perPage; i < perPage * currentPage; i++) {
    products.innerHTML += `
    <div class="product-items">
               <div class="product-item-name">
               <a href="productDetail.html"><img src="${mockData[i].image}" alt="" /></a>
                 <h4>
                   ${mockData[i].name}
                 </h4>
                 <div class="product-item-price">
                   <div class="price-item-cost">
                     <div class="product-price-start">₫90.000</div>
                     <div class="product-price-empty"></div>
                     <div class="product-price-end">₫180.000</div>
                   </div>
                   <div class="product-item-star">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <div class="product-item-sale">Đã bán 20</div>
                   </div>
                 </div>
                 <div class="product-item-produce">TP. Hồ Chí Minh</div>
               </div>
             </div>
    `;
  }
}
renderProduct();
// Pagination
function changePage() {
  const currentPages = document.querySelectorAll(".content-number-page button");
  for (let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener("click", () => {
      let value = i + 1;
      currentPage = value;
      $(".content-number-page .btn-number").removeClass("active");
      currentPages[i].classList.add("active");
      if (currentPage > 1 && currentPage < totalPages) {
        $(".btn-prev").removeClass("btn-active");
        $(".btn-next").removeClass("btn-active");
      }
      if (currentPage === 1) {
        $(".btn-prev").removeClass("btn-active");
      }
      if (currentPage === totalPages) {
        $(".btn-next").addClass("btn-active");
      }
      getCurrentPage(currentPage);
      renderProduct();
    });
  }
}
changePage();

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");

btnNext.addEventListener("click", () => {
  currentPage++;
  if (currentPage > totalPages) {
    btnNext.attr("disabled", "disabled");
  }
  if (currentPage === totalPages) {
    $(".btn-next").addClass("active");
  }
  $(".btn-prev").removeClass("btn-active");
  $(".content-number-page .btn-number").removeClass("active");
  $(`.content-number-page .btn-number:eq(${currentPage - 1})`).addClass(
    "active"
  );
  getCurrentPage(currentPage);
  renderProduct();
});

btnPrev.addEventListener("click", () => {
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  if (currentPage === 1) {
    $(".btn-prev").addClass("btn-active");
  }
  $(".content-number-page .btn-number").removeClass("active");
  $(`.content-number-page .btn-number:eq(${currentPage - 1})`).addClass(
    "active"
  );
  $(".btn-next").removeClass("btn-active");
  getCurrentPage(currentPage);
  renderProduct();
});
