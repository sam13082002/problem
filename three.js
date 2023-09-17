//Viết chương trình tính tiền hoa hồng theo doanh số biết:
//Tiền hoa hồng sẽ là 5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.
//Tiền hoa hồng sẽ là 10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.
//Tiền hoa hồng sẽ là 20 % nếu tổng doanh số là lớn hơn 300 triệu.
//Input: 100000000
//Output: 5000000
let hoahong = 0;
let doanhso = 100000000;
if (doanhso <= 100000000) {
  hoahong = 5 / 100;
} else if (doanhso <= 300000000) {
  hoahong = 10 / 100;
} else if (doanhso > 300000000) {
  hoahong = 20 / 100;
}
console.log(doanhso * hoahong);
