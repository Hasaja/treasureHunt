var contents = document.getElementById('contents');
var htmlCode = ``;


function chooseHTMLCode(kind){
    switch(kind)
    {
        case 'index':
            htmlCode = `
            <div class="main">
                <p>다음 단계로 진행하려면<br>KT 건물 주소판을 찾으십시오</p>
                <p>이미지를 눌러 크게 볼 수 있습니다</p>
                <a href="https://v4.map.naver.com/?mpx=8aa2271ed5ba15a49d897c01ae3348fe4632eda8267ae0f279363c0b7fe94df6e1009765c858dd67b34358f7aa3fb75e976400be5b005183e46d9e6b201e0d6d&searchCoord=6ad680cc90a6d0abb2eb452753fec33e4881e862e4e4a2eb08b0cc0e8510aef7&query=S1Qg6riN7KCV6riN7KCVIOuMgOy5mOygkA%3D%3D&menu=location&tab=1&lng=455f7c29d7d497ab95ce3965a0604516&mapMode=0&lat=34d8580516f8232954c39d588b0c560f&dlevel=13&enc=b64" target="_blank"><img src="EunMaMap.png" width="920" height="680" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a>
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

function makeHTMLCode(){
    contents.innerHTML = htmlCode;
}
