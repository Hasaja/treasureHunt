var contents = document.getElementById('contents');

function answerCheckB(){
    var ans = document.getElementById("secAn").value.trim();
    console.log(ans);
    if(ans == '2'){
        console.log('Your Correct');
        location.href = 'B4729111.html';
    } else {
        contents.innerHTML = `
        <div class="main">
            <div class="quest">
                <p>16+9=1<br>8+6=2<br>14+13=3<br>7+7=<input placeholder="??" type="text" name = "answer" id="secAn"></p>
                <button onclick="answerCheckB();">정답 제출!</button>
            </div>
            <p style = "color : red;">정답이 아닙니다!</p>
        </div>
        `
    }
}
function answerCheckC(){
    var ans = document.getElementById("secAn").value.trim();
    console.log(ans);
    if(ans == '410'){
        console.log('Your Correct');
        location.href = 'C782132.html';
    } else {
        contents.innerHTML = `
        <div class="main">
            <div class="quest">
                <p>5+3=28<br>9+1=810<br>8+6=214<br>7+3=<input placeholder="??" type="text" name = "answer" id="secAn"></p>
                <button onclick="answerCheckC();">정답 제출!</button>
            </div>
            <p style = "color : red;">정답이 아닙니다!</p>
        </div>
        `
    }
}


