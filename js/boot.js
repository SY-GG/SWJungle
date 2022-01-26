function openclose() {
	// 여기에 jQuery를 이용해 코드를 짤 예정    
  //포스트박스 여닫기 버튼을 클릭하면
  //포스트박스가 열고 닫힘
  const postBox= $('#post-box');
  const postBtn = $('#post-box-btn');
  if (postBox.css('display') === 'none') {
    postBox.show();
    postBtn.text('포스팅박스 닫기');
    
  } else {
    postBox.hide();
    postBtn.text('포스팅박스 열기');
  }
  
}


let img_url =
  "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg";
let link_url = "https://google.com/";
let title = "제목 - 구글";
let desc = "구글에 대한 설명이 여기에 들어간다.";
let comment = "여기는 개인적인 코멘트가 들어간다.";

let temp_html = `<div class="card">
                    <img class="card-img-top"
                        src="${img_url}"
                        alt="Card image cap">
                    <div class="card-body">
                        <a href="${link_url}" class="card-title">${title}</a>
                        <p class="card-text">${desc}</p>
                        <p class="card-text comment">${comment}</p>
                    </div>
                </div>`;

// $("#card-box").append(temp_html);
// $("#card-box").append(temp_html);
// $("#card-box").append(temp_html);

function artBtn() {
  const url = $("#post-url").val();
  console.log(url);
  $("#post-url").val("");
  
}

$.ajax({
  type: "GET",
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {},
  success: function(response){
    console.log(response)
    const data = response["RealtimeCityAir"]["row"];
    for (const location in data) {
      console.log(data[location]['MSRSTE_NM'], ':', data[location]['IDEX_MVL']);
    }
      // const gu_name = element.data['MSRSTE_NM'];
      // const gu_mise = element.data['IDEX_MVL'];
      // console.log(gu_name, gu_mise);
  }
})