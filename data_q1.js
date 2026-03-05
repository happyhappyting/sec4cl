const q1Data = {
    title: "Q1 私人电邮 (Private Email)",
    // 题目例子部分
    example: `
        <div class="example-box">
            <span class="bold-text">主题</span>：提供建议<br>
            美好：<br>
            &emsp;&emsp;你好，好久不见。…………………………<br>
            &emsp;&emsp;<span class="bold-text">祝好！</span><br>
            快乐
        </div>
    `,
    // 你的回答部分
    answer: `
        <div class="essay-box">
            <span class="bold-text">主题</span>：<span class="hl-yellow">回复：</span><span class="bold-text">提供建议</span><br>
            快乐：<br>
            &emsp;&emsp;好久不见，我最近还好。我今天写电邮的目的是为了谈谈＿＿＿＿＿。<br><br>
            &emsp;&emsp;<span class="hl-yellow">PEEL X&emsp;&emsp;4</span> (Usually one issue, two areas – 1 area 2 PEELs)<br><br>
            &emsp;&emsp;时间不早了，我该停笔了。希望早日收到你的回复。<br>
            &emsp;&emsp;<span class="bold-text">祝好！</span><br>
            美好
        </div>
    `
};

// 这里的渲染逻辑由 index.html 调用
function renderQ1(container) {
    container.innerHTML = q1Data.example + q1Data.answer;
}
