var contents = document.getElementById('contents');

function answerCheckB(){
    var ans = document.getElementById("secAn").value;
    console.log(ans);
    if(ans == '2'){
        console.log('Your Correct');
        location.href = 'B4729111.html';
    } else {
        contents.innerHTML = `
        <div class="main">
            <div class="quest">
                <p>16+9=1<br>8+6=2<br>14+13=3<br>7+7=<input placeholder="??" type="text" name = "answer" id="secAn"></p>
                <button onclick="answerCheck();">정답 제출!</button>
            </div>
            <p style = "color : red;">정답이 아닙니다!</p>
        </div>
        `
    }
}

