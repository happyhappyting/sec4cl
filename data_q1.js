const q1Data = {
    title: "Q1 私人电邮 (Informal Email)",
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
        <div class="paper-effect">
            <span class="bold-text">主题</span>：<span class="hl-yellow">回复：</span><span class="bold-text">提供建议</span><br>
            快乐：<br>
            &emsp;&emsp;好久不见，我最近还好。我今天写电邮的目的是为了谈谈＿＿＿＿＿。<br><br>
            &emsp;&emsp;<span class="hl-yellow">PEEL X 4</span> (Usually one issue, two areas – 1 area 2 PEELs)<br><br>
            &emsp;&emsp;时间不早了，我该停笔了。希望早日收到你的回复。<br>
            &emsp;&emsp;<span class="bold-text">祝好！</span><br>
            美好
        </div>
        <hr>
        <h4 style="color:var(--sea-blue)">💡 建议类常用方法 (点击显示详情)</h4>
    `,
    // 更新后的常用方法数据
    methods: [
        { word: "张贴海报", pinyin: "zhāngtiē hǎibào", meaning: "put up posters" },
        { word: "在德育课上教导学生", pinyin: "zài déyù kè shàng jiàodǎo xuéshēng", meaning: "teach students during CCE lessons" },
        { word: "在早会时说明", pinyin: "zài zǎohuì shí shuōmíng", meaning: "explain during morning assembly" },
        { word: "让父母以身作则", pinyin: "ràng fùmǔ yǐshēn-zuòzé", meaning: "let parents lead by example" },
        { word: "做好榜样", pinyin: "zuò hǎo bǎngyàng", meaning: "set a good example" },
        { word: "听讲座", pinyin: "tīng jiǎngzuò", meaning: "attend a talk/seminar" }
    ]
};

// 渲染逻辑保持一致，确保调用 toggleCard
function renderQ1() {
    const area = document.getElementById('display-area');
    
    let cardsHtml = '<div class="vocab-grid">';
    q1Data.methods.forEach(m => {
        cardsHtml += `
            <div class="vocab-card" onclick="toggleCard(this, '${m.word}')">
                <span class="word" style="font-size: 16px;">${m.word}</span>
                <div class="det" style="display:none">
                    <i>${m.pinyin}</i><br>
                    <b>${m.meaning}</b>
                </div>
            </div>`;
    });
    cardsHtml += '</div>';

    area.innerHTML = q1Data.example + q1Data.answer + cardsHtml;
}
