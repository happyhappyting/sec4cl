const q4Data = {
    // 1. 复习部分 (论证法)
    review: {
        title: "议论文三要素",
        elements: [
            { term: "论点 (Point)", detail: "对议论对象（人物、事件或道理）的观点。" },
            { term: "论据 (Evidence)", detail: "用来证明论点的理据。" },
            { 
                term: "论证 (Proving Method)", 
                detail: "用论据来证明论点的过程。",
                methods: [
                    {
                        name: "举例论证法",
                        content: "天才来自于勤奋。爱迪生一生有一千多项发明。他为了发明电灯，阅读了大量资料，光笔记就有四万多页。他试过几千种物质，做了几万次实验，才最终发明了电灯。",
                        english: "Genius comes from diligence. Edison had over a thousand inventions in his life. To invent the light bulb, he read a vast amount of material, with notes alone exceeding 40,000 pages."
                    },
                    {
                        name: "引用论证法",
                        content: "著名文学家蒲松龄曾说过：“有志者事竟成，苦心人天不负。”",
                        english: "The famous writer Pu Songling once said: 'Where there is a will, there is a way...'"
                    },
                    {
                        name: "对比论证法",
                        content: "挪威政府将石油利润转化为社会保障基金（正面）；反之，秦朝统治者严刑峻法导致覆灭（反面）。",
                        english: "Norway's wise resource management vs. Qin Dynasty's harsh rule."
                    }
                ]
            }
        ]
    },

    // 2. 看法类 (完整保留)
    opinion: {
        title: "看法类：用例子证明你的观点",
        examples: [
            "有人说：新加坡青少年是草莓族，经不起考验。你同意吗？",
            "新加坡社会充满爱心。你同意吗？为什么？"
        ],
        framework: [
            { step: "1.立场+分析题目", en: "State stand + Analyse", detail: "有人认为：……。对我而言，我同意/不同意这个说法。+ 提出问题/下定义definition。" },
            { step: "2.结合社会现象", en: "Background info", detail: "我们不难发现，目前社会上…… 有人认为…… 因此我认为（立场）。" },
            { step: "3.论点 1/2/3", en: "Points P.E.E.L", detail: "首先/其次/再者、（论点P，解释E，例如E。因此，L。）" },
            { step: "4.总结扣题", en: "Summary", detail: "总结全文，呼应call back to立场，未来展望future prospect。" }
        ]
    },

    // 3. 建议类 (这里融入你最新的“如何类”讲义全部内容)
    suggestion: {
        title: "建议类 (如何类)：针对问题提出对策",
        intro: `
            <div class="example-box" style="border-left: 5px solid var(--sea-blue);">
                <h3 style="margin-top:0">什么是“如何类”议论文？</h3>
                <p>这是一类以 <span class="hl-yellow">解决问题 (problem-solving)</span> 或 <span class="hl-yellow">提出步骤方法 (step-by-step methods)</span> 为核心的议论文。</p>
                <p>它不仅要分析问题 (analyze the issue)，还要给出具体的建议 (suggestions)。</p>
            </div>`,
        vocabTitle: `<h4 style="color:var(--sea-blue); margin-top:20px;">🛠️ 常用解决方法与词汇</h4>`,
        solutions: [
            { cat: "教育宣传类", word: "张贴海报", en: "Put up posters", usage: "在学校张贴海报宣传……" },
            { cat: "教育宣传类", word: "播放广告", en: "Play advertisements", usage: "在电视台播放广告提醒人们……" },
            { cat: "教育宣传类", word: "举办讲座", en: "Organize talks", usage: "学校可以举办讲座教同学们……" },
            { cat: "教育宣传类", word: "德育课", en: "CCE", usage: "通过德育课教学生……" },
            { cat: "社区参与类", word: "民众俱乐部活动", en: "Community club activities", usage: "民众俱乐部可以办活动……" },
            { cat: "社区参与类", word: "义工活动", en: "Volunteer work", usage: "鼓励学生参与义工活动……" },
            { cat: "社区参与类", word: "社区服务", en: "Community service", usage: "通过社区服务帮助老人……" }
        ],
        outlines: [
            {
                title: "📝 题目范例 1：如何让国人养宠物时具备责任心？",
                content: "<b>开头：</b>养宠物是长期承诺...<br><b>论点：</b>培训课程、生命教育、加强执法...<br><b>结尾：</b>教育与法律双管齐下。"
            },
            {
                title: "📝 题目范例 2：如何让乐龄人士的生活更加充实？",
                content: "<b>开头：</b>老龄化社会课题...<br><b>论点：</b>兴趣班、家人陪伴、参与义工...<br><b>结尾：</b>老有所乐。"
            }
        ]
    },

    // 4. 利与弊类 (完整保留)
    proscons: {
        title: "利与弊类：双向辩证分析",
        examples: ["青少年使用人工智能(AI)辅助学习的利弊", "在社交媒体分享生活的利与弊"],
        framework: [
            { step: "1.背景引出", en: "Background", detail: "介绍该现象的兴起。指出这就像一把“双刃剑”，有利也有弊。" },
            { step: "2.利点 (Pros)", en: "Advantages", detail: "分析正面积极影响。例如：人工智能提高资料整合效率。" },
            { step: "3.弊点 (Cons)", en: "Disadvantages", detail: "分析潜在负面危害。例如：导致丧失独立思考能力。" },
            { step: "4.权衡立场", en: "Evaluation / Stand", detail: "我认为利大于弊。关键在于如何正确使用。" }
        ]
    },

    // 5. 通用连接词
    connectors: [
        { word: "首先", en: "Firstly", usage: "首先，青少年可以……" },
        { word: "其次", en: "Secondly", usage: "其次，我们也可以……" },
        { word: "此外", en: "Moreover", usage: "此外，我们还可以……" },
        { word: "例如", en: "For example", usage: "例如，政府可以制定政策..." },
        { word: "相比之下", en: "In comparison", usage: "相比之下，教育比惩罚更有效..." },
        { word: "总而言之", en: "In conclusion", usage: "总而言之，多方合作解决问题。" }
    ]
};

// 综合渲染逻辑
function renderQ4(container, subType = 'suggestion') {
    if(!container) return;
    let html = "";

    if (subType === 'review') {
        html += `<h3>${q4Data.review.title}</h3>`;
        q4Data.review.elements.forEach(el => {
            html += `<div class="example-box"><b>${el.term}:</b> ${el.detail}`;
            if(el.methods) {
                html += `<div class="vocab-grid" style="margin-top:10px">`;
                el.methods.forEach(m => {
                    html += `<div class="vocab-card" onclick="toggleCard(this, '${m.name}')">
                                <span class="word" style="color:#d32f2f">【${m.name}】</span>
                                <div class="det" style="display:none; font-size:13px;">${m.content}<br><i style="color:blue">${m.english}</i></div>
                             </div>`;
                });
                html += `</div>`;
            }
            html += `</div>`;
        });
    } 
    else if (subType === 'opinion') {
        html += `<h3>${q4Data.opinion.title}</h3>`;
        html += `<div class="example-box"><b>常见题目：</b><br>${q4Data.opinion.examples.join('<br>')}</div>`;
        html += `<div class="essay-box">`;
        q4Data.opinion.framework.forEach(f => { html += `<p><b>${f.step}</b> (${f.en})<br>${f.detail}</p>`; });
        html += `</div>`;
    } 
    else if (subType === 'suggestion') {
        html += q4Data.suggestion.intro + q4Data.suggestion.vocabTitle;
        html += `<div class="vocab-grid">`;
        q4Data.suggestion.solutions.forEach(s => {
            html += `<div class="vocab-card" onclick="toggleCard(this, '${s.word}')">
                        <span class="word" style="font-size:14px">[${s.cat}]<br><b>${s.word}</b></span>
                        <div class="det" style="display:none"><i style="color:#d32f2f">${s.en}</i><br><small>${s.usage}</small></div>
                     </div>`;
        });
        html += `</div><h4 style="color:var(--sea-blue)">📝 题目范例大纲</h4>`;
        q4Data.suggestion.outlines.forEach(o => {
            html += `<div class="example-box" style="background:#fffcf0"><b>${o.title}</b><p style="font-size:14px; margin-top:5px;">${o.content}</p></div>`;
        });
    } 
    else if (subType === 'proscons') {
        html += `<h3>${q4Data.proscons.title}</h3>`;
        html += `<div class="example-box"><b>常见题目：</b><br>${q4Data.proscons.examples.join('<br>')}</div>`;
        html += `<div class="essay-box">`;
        q4Data.proscons.framework.forEach(f => { html += `<p><b>${f.step}</b> (${f.en})<br>${f.detail}</p>`; });
        html += `</div>`;
    }

    // 统一在底部加上连接词
    html += `<h4 style="color:var(--sea-blue); margin-top:20px;">🔗 常用连接词</h4><div class="vocab-grid">`;
    q4Data.connectors.forEach(c => {
        html += `<div class="vocab-card" onclick="toggleCard(this, '${c.word}')">
                    <span class="word"><b>${c.word}</b></span>
                    <div class="det" style="display:none"><i style="color:#2e7d32">${c.en}</i><br><small>${c.usage}</small></div>
                 </div>`;
    });
    html += `</div>`;

    container.innerHTML = html;
}
