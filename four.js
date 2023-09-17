//Viết chương trình tính cước điện thoại biết
//Phí thuê bao bắt buộc là 25 nghìn.
//600 đồng cho mỗi gọi của 50 phút đầu tiên.
//400 đồng cho mỗi phút gọi của 150 phút tiếp theo.
//200 đồng cho bất kỳ mỗi phút nào sau 200 phút đầu tiên.
//Input: 30 ( là số phút của cuộc gọi )
//Output 25000 + 18000 = 43000
let a = "phi cuoc dien thoai  la";
let phithue = 25000;
let cuocdt = a;
let sophutgoi = 30;
if (sophutgoi <= 50) {
  cuocdt = 600;
} else if (sophutgoi > 50 && sophutgoi <= 150) {
  cuocdt = 400;
} else if (sophutgoi > 200) {
  cuocdt = 200;
}
console.log(a, phithue + sophutgoi * cuocdt);
