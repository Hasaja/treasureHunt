var contents = document.getElementById('contents');
var htmlCode = ``;
function makeHTMLCode(){
    contents.innerHTML = htmlCode;
}
function chooseHTMLCode(kind){
    if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
        htmlCode = `
        <div class="main">
            <p>본 프로젝트는 모바일 기기를 통해서만 진행 가능합니다.</p>
            <p>모바일 기기를 통해 접속해주십시오</p>
        </div>
        `
        makeHTMLCode();
        return 0;
    }
    switch(kind)
    {
        case 'index':
            htmlCode = `
            <div class="main">
                <p>다음 단계로 진행하려면<br>KT 건물 주소판을 찾으십시오</p>
                <p>이미지를 눌러 크게 볼 수 있습니다</p>
                <a href="http://naver.me/xGnMr8Ny" target="_blank"><img src="EunMaMap.png" width="920" height="680" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a>
            </div>
            `;
            makeHTMLCode();
            break;
        case 'A1573YE':
            htmlCode = `
            <div class="main">
                <h1>Treasure Hunt</h1>
                <p>보물찾기 순서입니다.</p>
                <p>관리자 페이지이며, 일반 클라이언트는 접속할 수 없습니다</p>
                <a href="index.html">첫번째 보물찾기</a><br>
                <a href="B4729E3.html">두번째 보물찾기</a><br>
                <a href="C7893YCE.html">세번째 보물찾기</a><br>
            </div>
            `;
            makeHTMLCode();
            break;
        case 'B4729E3':
            htmlCode = `
            <div class="main">
                <div class="quest">
                    <p>16+9=1<br>8+6=2<br>14+13=3<br>7+7=<input placeholder="??" type="text" name = "answer" id="secAn"></p>
                    <button onclick="answerCheck();">정답 제출!</button>
                </div>
            </div>
            `;
            makeHTMLCode();
            break;
        case 'C7893YCE':
            htmlCode = `
            <div class="main">
                <p>정답을 입력하세요</p>
                <input type="text">
                <input type="submit">
            </div>
            `;
            makeHTMLCode();
            break;
    }
}

