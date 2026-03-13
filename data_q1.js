const q1Data = {
    title: "Q1 私人电邮 (Informal Email)",
    example: `
        <div class="example-box">
            <span class="bold-text">主题</span>：提供建议<br>
            <span style="background-color: #add8e6; padding: 2px 4px; border-radius: 3px;">美好</span>：<br>
            &emsp;&emsp;你好，好久不见。…………………………<br>
            &emsp;&emsp;<span class="bold-text">祝好！</span><br>
            <span style="background-color: #add8e6; padding: 2px 4px; border-radius: 3px;">快乐</span>
        </div>
    `,
    answer: `
        <div class="essay-box">
            <span class="bold-text">主题</span>：<span class="hl-yellow">回复：</span><span class="bold-text">提供建议</span><br>
            <span style="background-color: #add8e6; padding: 2px 4px; border-radius: 3px;">快乐</span>：<br>
            &emsp;&emsp;<span style="color: #003366; font-weight: 800;">好久不见，我最近还好。我今天写电邮的目的是为了谈谈</span><span style="background-color: #f5f5dc; padding: 2px 4px; border-radius: 3px;">＿＿具体目的＿＿</span><span style="color: #003366; font-weight: 800;">。(Memorise)</span><br><br>
            &emsp;&emsp;<span class="hl-yellow">PEEL X&emsp;&emsp;4</span> (Usually one issue, two areas – 1 area 2 PEELs)<br><br>
            &emsp;&emsp;<span style="color: #003366; font-weight: 800;">时间不早了，我该停笔了。希望早日收到你的回复。(Memorise)</span><br>
            &emsp;&emsp;<span class="bold-text">祝好！</span><br>
            <span style="background-color: #add8e6; padding: 2px 4px; border-radius: 3px;">美好</span>
        </div>
        
        <h4 style="color:var(--sea-blue); margin-top:20px;">💡 建议类常用方法（点击查看）：</h4>
        <div class="vocab-grid">
            <div class="vocab-card" onclick="toggleCard(this, '张贴海报')">
                <span class="word" style="font-size:15px">张贴海报</span>
                <div class="det" style="display:none"><i>zhāngtiē hǎibào</i><br><b>put up posters</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '在德育课上教导学生')">
                <span class="word" style="font-size:15px">在德育课上教导学生</span>
                <div class="det" style="display:none"><i>zài déyù kè shàng jiàodǎo xuéshēng</i><br><b>teach students during CCE lessons</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '让父母以身作则')">
                <span class="word" style="font-size:15px">让父母以身作则</span>
                <div class="det" style="display:none"><i>ràng fùmǔ yǐshēn-zuòzé</i><br><b>let parents lead by example</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '做好榜样')">
                <span class="word" style="font-size:15px">做好榜样</span>
                <div class="det" style="display:none"><i>zuò hǎo bǎngyàng</i><br><b>set a good example</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '在早会时说明')">
                <span class="word" style="font-size:15px">在早会时说明</span>
                <div class="det" style="display:none"><i>zài zǎohuì shí shuōmíng</i><br><b>explain during morning assembly</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '听讲座')">
                <span class="word" style="font-size:15px">听讲座</span>
                <div class="det" style="display:none"><i>tīng jiǎngzuò</i><br><b>attend a talk/seminar</b></div>
            </div>
        </div>
    `
};

function renderQ1(container) {
    if(container) container.innerHTML = q1Data.example + q1Data.answer;
}
