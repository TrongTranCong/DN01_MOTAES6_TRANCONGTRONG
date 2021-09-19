

//Lấy giá trị từ form
let inputKhoi1 = () => {
  var toan = parseFloat(document.getElementById("inputToan").value);
  var ly = parseFloat(document.getElementById("inputLy").value);
  var hoa = parseFloat(document.getElementById("inputHoa").value);
  let result = averageFunc(toan,ly,hoa);
  document.getElementById("hienThi1").innerHTML = "Điểm trung bình: " +  result;
}
document.getElementById("btnTinh1").onclick = inputKhoi1;

let inputKhoi2 = () => {
  var van = parseFloat(document.getElementById("inputVan").value);
  var su = parseFloat(document.getElementById("inputSu").value);
  var dia = parseFloat(document.getElementById("inputDia").value);
  var eng = parseFloat(document.getElementById("inputEng").value);
  let result = averageFunc(van,su,dia,eng);
  document.getElementById("hienThi2").innerHTML = "Điểm trung bình: " +  result;
  // console.log('result', result);
}
document.getElementById("btnTinh2").onclick = inputKhoi2;
//Tính trung bình
let averageFunc = (...inputs)=>{
  let sum = 0, average;
  for (let i of inputs){
    sum += i;
  }
  average = sum / inputs.length;
  return average; 
}













