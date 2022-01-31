$(document).ready(function () {
  // index.html 로드가 완료되면 자동으로 showStar() 함수를 호출합니다.
  showStar();
});

function showStar(starlist) {
  $.ajax({
    type: "GET",
    url: "/api/list",
    data: {},
    success: function (response) {
      if (response["result"] == "success") {
        let msg = response["msg"];
        alert(msg);

        let starList = response["stars_list"];
        console.log('리스트:', starList);
        for (star in starList) {
          // console.log(star, ':', starList[star])
          const imgsrc = starList[star]['img_url'];
          const starname = starList[star]['name'];
          const like = starList[star]['like'];
          const title = starList[star]['recent'];
          const url = starList[star]['url'];
          console.log(imgsrc, starname, url, like, title);
          makeCard(imgsrc, starname, url, like, title);
        }
      }
    },
  });
}

function makeCard(imgsrc, starname, url, like, title) {
  let starTemp = `
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img
                                        src="${imgsrc}"
                                        alt="${starname} 사진"
                                />
                            </figure>
                        </div>
                        <div class="media-content">
                            <a href="${url}" target="_blank" class="star-name title is-4">${starname} (좋아요: ${like})</a>
                            <p class="subtitle is-6">${title}</p>
                        </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" onclick="likeStar(${starname})" class="card-footer-item has-text-info">
                        위로!
                        <span class="icon">
                          <i class="fas fa-thumbs-up"></i>
                        </span>
                    </a>
                    <a href="#" onclick="deleteStar(${starname})" class="card-footer-item has-text-danger">
                        삭제
                        <span class="icon">
                          <i class="fas fa-ban"></i>
                        </span>
                    </a>
                </footer>
            </div> 
        `;
  $('#star-box').append(starTemp);
  console.log($('#star-list'))
}

function likeStar(name) {
  $.ajax({
    type: "POST",
    url: "/api/like",
    data: {},
    success: function (response) {
      if (response["result"] == "success") {
        let msg = response["msg"];
        alert(msg);
      }
    },
  });
}

function deleteStar(name) {
  $.ajax({
    type: "POST",
    url: "/api/delete",
    data: {},
    success: function (response) {
      if (response["result"] == "success") {
        let msg = response["msg"];
        alert(msg);
      }
    },
  });
}
