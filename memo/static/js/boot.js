//포스팅 버튼  여닫기
function openclose() {
  // 여기에 jQuery를 이용해 코드를 짤 예정
  //포스트박스 여닫기 버튼을 클릭하면
  //포스트박스가 열고 닫힘
  const postBox = $("#post-box");
  const postBtn = $("#post-box-btn");
  if (postBox.css("display") === "none") {
    postBox.show();
    postBtn.text("포스팅박스 닫기");
  } else {
    postBox.hide();
    postBtn.text("포스팅박스 열기");
  }
}

$(document).ready(function () {
  $("#cards-box").html("");
  showArticles();
});


function postArticle() {
  const url = $('#post-url').val();
  const comment = $('#post-comment').val();
  $.ajax({
    type: "POST",
    url: "/memo",
    data: {url_give : url, comment_give : comment},
    success: function (response) {
      // 성공하면
      if (response["result"] == "success") {
        alert(response["msg"], "\n포스팅 성공!");
        window.location.reload();
      } else {
        alert('ERROR');
      }
    },
  });
}
function showArticles() {
  $.ajax({
    type: "GET",
    url: "/memo",
    data: {},
    success: function (response) {
      if (response["result"] == "success") {
        alert(response["msg"]);
      }
    },
  });
}

function makeCard(url, title, desc, comment, image) {}
