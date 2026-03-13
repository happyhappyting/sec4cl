const q2Data = {
    title: "Q2 公务电邮 (Formal Email)",
    example: `
        <div class="example-box">
            你看到一张海报，内容是鼓励青少年到全善课后托管中心当义工。义工的职责是为那里的小学生策划并主办课后与假期活动。你认为你学校的学生应该积极响应，在空闲的时候去那里当义工。<br><br>
            假设你是<span style="background-color: #add8e6; padding: 2px 4px; border-radius: 3px;">黄海丽</span>，给负责学生理事会的<span class="hl-yellow">王</span>美云<span class="hl-green" style="color: #2e7d32; font-weight: bold;">老师</span>写一则电邮，<span style="background-color: #f5f5dc; padding: 2px 4px; border-radius: 3px;">请她协助鼓励学生到全善课后托管中心当义工</span>。<span class="bold-text">你在电邮中要说明学生可以做出的贡献，以及他们会得到的收获。</span>
        </div>
    `,
    answer: `
        <div class="essay-box">
            <span class="bold-text">主题</span>：Compose your own subject based on purpose (E.G. <span style="background-color: #f5f5dc; padding: 2px 4px; border-radius: 3px;">请协助鼓励学生到全善课后托管中心当义工</span>)<br><br>
            <span class="hl-yellow">王</span><span class="hl-green">老师</span>：<br>
            &emsp;&emsp;您好，本人是XX的顾客／XX区的居民／XX学校的学生。本人今天写电邮的目的是为了谈谈＿＿COPY SUBJECT＿＿。<br><br>
            &emsp;&emsp;Describe situation with original words, and then write&emsp;&emsp;<br><br>
            &emsp;&emsp;PEEL X&emsp;4 (Usually one issue, two areas (such as impact and suggestions) – 1 area 2 PEELs)<br><br>
            &emsp;&emsp;<span style="color: #003366; font-weight: 800;">素闻您一向从善如流，办事效率高。相信您一定会听取建议，做出改善。谢谢！(Memorise)</span><br><br>
            <span style="background-color: #add8e6; padding: 2px 4px; border-radius: 3px;">黄海丽</span><span class="bold-text">&emsp;启</span>
        </div>

        <h4 style="color:var(--sea-blue); margin-top:20px;">💡 建议类常用方法（点击查看）：</h4>
        <div class="vocab-grid">
            <div class="vocab-card" onclick="toggleCard(this, '张贴海报')">
                <span class="word" style="font-size:15px">张贴海报</span>
                <div class="det" style="display:none"><i>zhāngtiē hǎibào</i><br><b>put up posters</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '让义工巡查')">
                <span class="word" style="font-size:15px">让义工巡查/提醒</span>
                <div class="det" style="display:none"><i>ràng yìgōng xúnchá / tíxǐng</i><br><b>let volunteers patrol / remind others</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '加重惩罚')">
                <span class="word" style="font-size:15px">加重惩罚</span>
                <div class="det" style="display:none"><i>jiāzhòng chéngfá</i><br><b>impose heavier penalties (fine/jail)</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, 'XX日')">
                <span class="word" style="font-size:15px">设立 XX 日</span>
                <div class="det" style="display:none"><i>shèlì XX rì</i><br><b>Set up XX Day (e.g. Family Day)</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '举办活动')">
                <span class="word" style="font-size:15px">举办活动/工作坊/讲座</span>
                <div class="det" style="display:none"><i>jǔbàn huódòng / gōngzuòfǎng / jiǎngzuò</i><br><b>organize activities / workshops / talks</b></div>
            </div>
            <div class="vocab-card" onclick="toggleCard(this, '选出大使')">
                <span class="word" style="font-size:15px">选出 XX 大使</span>
                <div class="det" style="display:none"><i>xuǎnchū XX dàshǐ</i><br><b>appoint XX Ambassador (e.g. Green Ambassador)</b></div>
            </div>
        </div>
    `
};

function renderQ2(container) {
    if(container) container.innerHTML = q2Data.example + q2Data.answer;
}
