function addColor(){
    var html = 
    '<div class="col-color" id="subgr-1-0">'+
      '<input class="input_color item" placeholder="Thêm màu">'+
    '</div>'+
    '<div class="col-amount" id="subgr-1-1">'+
      '<input class="input_amount item" type="number" placeholder="Số lượng">'+
    '</div>'+
    '<div class="col-img" id="subgr-1-2">'+
    '<input class="btn_img item" type="file" required>'+ 
    '</input>'+
    '<p class="icon-close" onclick="removeColor()">X</p>'+
    '</div>';
  document.getElementById("gr-1").insertAdjacentHTML('beforeend', html);
}
function addSize(){
  var html = 
  '<div class="subgrid-item" id="subgr-2">'+
    '<input class="input_size item" placeholder="Kích cỡ vd:S(45-50KG)">'+
    '<p class="icon-close" onclick="removeSize()">X</p>'+
    '</div>';
  document.getElementById("gr-2").insertAdjacentHTML('beforeend', html);
}
function removeSize(){
  var parent = document.getElementById("gr-2");
  var child = document.getElementById("subgr-2");
  parent.removeChild(child);
}
function removeColor(){ 
  var parent = document.getElementById("gr-1");
  var child0 = document.getElementById("subgr-1-0");
  var child1 = document.getElementById("subgr-1-1");
  var child2 = document.getElementById("subgr-1-2");
  parent.removeChild(child0);
  parent.removeChild(child1);
  parent.removeChild(child2);
}