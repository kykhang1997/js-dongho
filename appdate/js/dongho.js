// đây là nơi mình cheat thời gian thực
window.setInterval("showtime()", 1000);


//hàm thêm số 0 trước ngày và giờ
function views(t) {
    return t < 10 ? "0" + t : t;
};

//hàm này giống window.onload 
function showtime() {
    var time = new Date();
    //set hiển thị thời gian ngày và giờ 
    var vnlock = document.getElementById("lock");
    var vndates = document.getElementById("dates");
    // đoạn này ko biết chú thích sao
    if (vnlock != null && vndates != null) {

        // get thời gian ngày và giờ
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();
        var day = time.getDate();
        var month = time.getMonth() + 1;
        var year = time.getFullYear();

        //format thời gian ngày và giờ để có số 0 đằng trước
        h = views(h);
        m = views(m);
        s = views(s);
        day = views(day);
        month = views(month);
        year = views(year);

        //gọi dữ liệu từ session
        //yêu cầu bên trong ngoặc phải giống với result mà bạn đã thêm dữ liệu vào session (dùng f12 vào applicasion để kiểm tra cho rõ nhé)
        var tplan = sessionStorage.getItem(year + "-" + month + "-" + day + " " + h + ":" + m);

        //check điều kiện nếu tplan = với ngày giờ mà người dùng nhập vào sẽ hiện thông báo (tức tplan khác null)
        if (tplan != null) {
            document.getElementById("mess").value = tplan;
            alert(tplan);
        }

        //view ngày giờ ra html
        vnlock.innerHTML = h + ":" + m + ":" + s;
        vndates.innerHTML = day + "/" + month + "/" + year;
    }
    setInterval("showtime()", 1000);
}

// hàm khi ta nhấn báo thức
function onsubmitfr() {
    var bt = bt_n();
}

//hàm nhận dữ liệu của người dùng nhập vào
function bt_n() {
    mess = document.getElementById("mess").value;
    //vì đây là set cả ngày và giờ nên ta cho ngày vào 1 mảng ip["ipdates"] giờ vào 1 mảng ip["iptimes"]
    ip = [];
    ip["iptimes"] = document.getElementById("iptimes").value;
    ip["ipdates"] = document.getElementById("ipdates").value;
    //sau đó chúng ta nối 2 mảng lại bằng lên concat để từ array thành kiểu string
    result = ip["ipdates"].concat(" " + ip["iptimes"]);
    //lưu dữ liêụ vào session
    //vì tham số đầu tiên của setItem là kiểu string nên bắt buộc phải làm bước result để đổi từ mảng sang string và ghép 2 mảng lại
    sessionStorage.setItem(result, mess);
}