const q4Data = {
    // 1. 如何类议论文（讲义内容）
    intro: `
        <div class="example-box" style="border-left: 5px solid var(--sea-blue); margin-top: 10px;">
            <h3 style="margin-top:0">什么是“如何类”议论文？</h3>
            <p>这是一类以 <span class="hl-yellow">解决问题 (problem-solving)</span> 或 <span class="hl-yellow">提出步骤方法 (step-by-step methods)</span> 为核心的议论文。</p>
            <p>它不仅要分析问题，还要给出具体的建议（suggestions），例如：</p>
            <ul>
                <li>如何减少校园霸凌？ – <small>Three suggestions to reduce school bullying</small></li>
                <li>如何提高学习效率？ – <small>Three suggestions to increase learning productivity</small></li>
            </ul>
        </div>
    `,

    // 常用解决方法词汇
    solutions: [
        { cat: "教育宣传类", word: "张贴海报", en: "Put up posters", usage: "在学校张贴海报宣传……" },
        { cat: "教育宣传类", word: "播放广告", en: "Play advertisements", usage: "在电视台播放广告提醒人们……" },
        { cat: "教育宣传类", word: "举办讲座", en: "Organize talks", usage: "学校可以举办讲座教同学们……" },
        { cat: "教育宣传类", word: "德育课", en: "CCE", usage: "通过德育课教学生……" },
        { cat: "社区参与类", word: "民众俱乐部活动", en: "Community club activities", usage: "民众俱乐部可以办活动……" },
        { cat: "社区参与类", word: "义工活动", en: "Volunteer work", usage: "鼓励学生参与义工活动……" },
        { cat: "社区参与类", word: "社区服务", en: "Community service", usage: "通过社区服务帮助老人……" }
    ],

    // 连接词
    connectors: [
        { word: "首先", en: "Firstly", usage: "首先，青少年可以……" },
        { word: "其次", en: "Secondly", usage: "其次，我们也可以……" },
        { word: "此外", en: "Moreover", usage: "此外，我们还可以……" },
        { word: "例如", en: "For example", usage: "例如，政府可以制定政策，让……" },
        { word: "相比之下", en: "In comparison", usage: "相比之下，教育比惩罚更有效……" },
        { word: "总而言之", en: "In conclusion", usage: "总而言之，多方合作才能解决问题。" }
    ],

    // 题目范例大纲
    outlines: [
        {
            title: "题目范例 1：如何让国人养宠物时具备责任心？",
            content: `
                <b>开头：</b>养宠物不仅是兴趣，更是一份长期的承诺，目前国人弃养宠物的现象亟需关注。<br>
                <b>论点一（家庭/个人）：</b>养主在领养前应先接受培训课程，确保自己有足够的知识和经济能力照顾宠物。<br>
                <b>论点二（学校/教育）：</b>学校可以举办讲座或生命教育课程，让青少年从小明白动物也是宝贵的生命。<br>
                <b>论点三（政府/法律）：</b>政府应加强执法并提高弃养宠物的罚款，以法律的威慑力约束不负责任的行为。<br>
                <b>结尾：</b>总而言之，只有通过教育与法律的双管齐下，才能让新加坡成为宠物友好的社会。`
        },
        {
            title: "题目范例 2：如何让乐龄人士的生活更加充实？",
            content: `
                <b>开头：</b>随着我国步入老龄化社会，如何提升乐龄人士的生活质量已成为重要的社会课题。<br>
                <b>论点一（社区/机构）：</b>民众俱乐部可以举办适合老人的活动（如太极、书法班），鼓励他们走出家门，扩大社交圈。<br>
                <b>论点二（家庭/个人）：</b>家人应多抽出时间陪伴长辈，鼓励他们学习使用电子产品，缩短数字鸿沟。<br>
                <b>论点三（社会/贡献）：</b>鼓励身体健康的乐龄人士担任义工或参与兼职工作，让他们在发挥余热中获得成就感。<br>
                <b>结尾：</b>总而言之，社会各界应共同努力，让乐龄人士拥有一个老有所乐、生活充实的晚年。`
        }
    ],

    // 其他议论文类型
    otherTypes: [
        {
            title: "看法类：用例子证明观点",
            examples: "新加坡青少年是草莓族吗？ / 新加坡社会充满爱心吗？",
            steps: ["1. 立场+分析题目 (State Stand)", "2. 结合社会现象 (Background)", "3. 论点 PEEL 展开", "4. 总结扣题 (Summary)"]
        },
        {
            title: "利与弊类：双向辩证分析",
            examples: "AI辅助学习的利与弊 / 社交媒体分享生活的利与弊",
            steps: ["1. 背景引出 (双刃剑)", "2. 利点 (Pros)", "3. 弊点 (Cons)", "4. 权衡立场与建议"]
        }
    ]
};

function renderQ4(container) {
    if(!container) return;
    
    // 1. 渲染如何类核心内容
    let html = q4Data.intro;

    html += `<h4 style="color:var(--sea-blue); margin-bottom:10px;">🛠️ 常用解决方法与词汇</h4>`;
    html += `<div class="vocab-grid">`;
    q4Data.solutions.forEach(s => {
        html += `
            <div class="vocab-card" onclick="toggleCard(this, '${s.word}')">
                <span class="word" style="font-size:14px">[${s.cat}] <br> <b>${s.word}</b></span>
                <div class="det" style="display:none">
                    <i style="color:#d32f2f">${s.en}</i><br>
                    <small>用法：${s.usage}</small>
                </div>
            </div>`;
    });
    html += `</div>`;

    html += `<h4 style="color:var(--sea-blue); margin-top:25px; margin-bottom:10px;">🔗 议论文常用连接词</h4>`;
    html += `<div class="vocab-grid">`;
    q4Data.connectors.forEach(c => {
        html += `
            <div class="vocab-card" onclick="toggleCard(this, '${c.word}')">
                <span class="word"><b>${c.word}</b></span>
                <div class="det" style="display:none">
                    <i style="color:#2e7d32">${c.en}</i><br>
                    <small>${c.usage}</small>
                </div>
            </div>`;
    });
    html += `</div>`;

    html += `<h4 style="color:var(--sea-blue); margin-top:25px; margin-bottom:10px;">📝 题目范例大纲 (点击查看)</h4>`;
    q4Data.outlines.forEach(o => {
        html += `
            <div class="example-box" style="cursor:pointer; margin-bottom:10px; background:#fffcf0" onclick="const d=this.querySelector('.outline-det'); d.style.display=d.style.display==='none'?'block':'none'">
                <b style="color:#003366">📌 ${o.title}</b>
                <div class="outline-det" style="display:none; margin-top:10px; font-size:14px; line-height:1.6; border-top:1px dashed #ccc; padding-top:10px;">
                    ${o.content}
                </div>
            </div>`;
    });

    // 2. 渲染其他类型作为补充
    html += `<hr style="margin: 30px 0;">`;
    q4Data.otherTypes.forEach(t => {
        html += `
            <div class="essay-box" style="margin-bottom:15px;">
                <b style="color:var(--sea-blue)">${t.title}</b><br>
                <small>例子：${t.examples}</small>
                <ul style="margin-top:5px; font-size:13px; color:#666;">
                    ${t.steps.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>`;
    });

    container.innerHTML = html;
}
