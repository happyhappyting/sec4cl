const q4Data = {
    // 1. 总复习部分 (论证法卡片)
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
                        english: "Genius comes from diligence. Edison had over a thousand inventions in his life. To invent the light bulb, he read a vast amount of material, with notes alone exceeding 40,000 pages. He tested thousands of substances and conducted tens of thousands of experiments before finally inventing the light bulb."
                    },
                    {
                        name: "引用论证法",
                        content: "著名文学家蒲松龄曾说过：“有志者事竟成，苦心人天不负。”",
                        english: "The famous writer Pu Songling once said: 'Where there is a will, there is a way; the heaven will not fail the person who puts in the effort.'"
                    },
                    {
                        name: "对比论证法",
                        content: "国家需要对本国国情有清楚的了解，这样才能制定出合适的政策。20世纪60年代，挪威在附近海域发现大量的石油和天然气，之后通过开采资源获得大量财富。挪威政府意识到财富迅速增加会带来许多弊端，也注意到国内人口老龄化的问题。于是，他们决定将石油利润转化为用于社会保障的基金，以让世世代代都能从中获益。这种独树一帜的做法为国家的长远发展打下坚实的基础，而这一决策的产生则离不开挪威人对本国国情的清醒认识与准确把握。反之(in comparison)，秦朝统治者没有认识到百姓需要休养生息，在国家内实行严刑峻法，最终导致王朝覆灭。",
                        english: "Countries need a clear understanding of their own conditions. Norway is a good example (turning oil profits into social funds). Conversely, the Qin Dynasty rulers failed to realize the people's need for rest, leading to the empire's collapse due to harsh laws."
                    }
                ]
            }
        ]
    },

    // 2. 建议类 (核心讲义 + 原有框架)
    suggestion: {
        title: "建议类：针对问题提出对策",
        intro: `
            <div class="example-box" style="border-left: 5px solid var(--sea-blue);">
                <h3>什么是“如何类”议论文？</h3>
                <p>这是一类以 <span class="hl-yellow">解决问题 (problem-solving)</span> 或 <span class="hl-yellow">提出步骤方法 (step-by-step methods)</span> 为核心的议论文。</p>
                <p>它不仅要分析问题，还要给出具体的建议（suggestions）。</p>
            </div>
        `,
        solutions: [
            { cat: "教育宣传类", word: "张贴海报", en: "Put up posters", usage: "在学校张贴海报宣传……" },
            { cat: "教育宣传类", word: "播放广告", en: "Play advertisements", usage: "在电视台播放广告提醒人们……" },
            { cat: "教育宣传类", word: "举办讲座", en: "Organize talks", usage: "学校可以举办讲座教同学们……" },
            { cat: "教育宣传类", word: "德育课", en: "CCE", usage: "通过德育课教学生……" },
            { cat: "社区参与类", word: "民众俱乐部活动", en: "Community club activities", usage: "民众俱乐部可以办活动……" },
            { cat: "社区参与类", word: "义工活动", en: "Volunteer work", usage: "鼓励学生参与义工活动……" },
            { cat: "社区参与类", word: "社区服务", en: "Community service", usage: "通过社区服务帮助老人……" }
        ],
        connectors: [
            { word: "首先", en: "Firstly", usage: "首先，青少年可以……" },
            { word: "其次", en: "Secondly", usage: "其次，我们也可以……" },
            { word: "此外", en: "Moreover", usage: "此外，我们还可以……" },
            { word: "例如", en: "For example", usage: "例如，政府可以制定政策，让……" },
            { word: "相比之下", en: "In comparison", usage: "相比之下，教育比惩罚更有效……" },
            { word: "总而言之", en: "In conclusion", usage: "总而言之，多方合作才能解决问题。" }
        ],
        outlines: [
            {
                title: "题目范例 1：如何让国人养宠物时具备责任心？",
                content: `<b>开头：</b>养宠物不仅是兴趣，更是一份长期的承诺...<br><b>论点：</b>培训课程、生命教育、加强执法...<br><b>结尾：</b>教育与法律双管齐下。`
            },
            {
                title: "题目范例 2：如何让乐龄人士的生活更加充实？",
                content: `<b>开头：</b>随着我国步入老龄化社会...<br><b>论点：</b>民众俱乐部活动、家人陪伴、发挥余热...<br><b>结尾：</b>老有所乐。`
            }
        ],
        examples: ["如何提高国人的公民意识？", "如何解决青少年沉迷网游的问题？"],
        framework: [
            { step: "1.现状分析", en: "Current Situation", detail: "描述问题的普遍性及其带来的负面影响，引出解决的紧迫性。" },
            { step: "2.个人/家庭角度", en: "Individual / Family", detail: "家长应以身作则be role model。" },
            { step: "3.学校/教育角度", en: "School / Education", detail: "通过讲座talk或课程培养正确价值观。" },
            { step: "4.政府/媒体角度", en: "Govt / Media", detail: "利用法律约束或媒体宣传promote。" },
            { step: "5.总结愿景", en: "Future Aspect", detail: "各方配合，共同努力，构建更美好的社会。" }
        ]
    },

    // 3. 看法类
    opinion: {
        title: "看法类：用例子证明你的观点",
        examples: ["有人说：新加坡青少年是草莓族，经不起考验。你同意吗？", "新加坡社会充满爱心。你同意吗？为什么？"],
        framework: [
            { step: "1.立场+分析题目", en: "State stand + Analyse", detail: "有人认为：……。对我而言，我同意/不同意这个说法。+ 提出问题/下定义definition。" },
            { step: "2.结合社会现象", en: "Background info", detail: "我们不难发现，目前社会上…… 有人认为…… 因此我认为（立场）。" },
            { step: "3.论点 1/2/3", en: "Points P.E.E.L", detail: "首先/其次/再者、（论点P，解释E，例如E。因此，L。）" },
            { step: "4.总结扣题", en: "Summary", detail: "总结全文，呼应call back to立场，未来展望future prospect。" }
        ]
    },

    // 4. 利与弊类
    proscons: {
        title: "利与弊类：双向辩证分析",
        examples: ["青少年使用人工智能(AI)辅助学习的利弊", "在社交媒体分享生活的利与弊"],
        framework: [
            { step: "1.背景引出", en: "Background", detail: "介绍该现象的兴起。指出这就像一把“双刃剑”，有利也有弊。" },
            { step: "2.利点 (Pros)", en: "Advantages", detail: "分析正面积极影响。" },
            { step: "3.弊点 (Cons)", en: "Disadvantages", detail: "分析潜在负面危害。" },
            { step: "4.权衡立场", en: "Evaluation / Stand", detail: "我认为利大于弊（或反之）。" }
        ]
    }
};

// 顶层全局开关函数，确保绝对能执行
window.toggleDetail = function(el, selector) {
    const target = el.querySelector(selector);
    if (target) {
        target.style.display = (target.style.display === 'none' || target.style.display === '') ? 'block' : 'none';
    }
};

function renderQ4(container) {
    let html = `<h3>${q4Data.review.title}</h3>`;
    
    // --- 1. 三要素 & 论证法 ---
    q4Data.review.elements.forEach(el => {
        html += `<div class="example-box"><b style="color:var(--sea-blue)">${el.term}:</b> ${el.detail}`;
        if (el.methods) {
            html += `<div class="vocab-grid" style="margin-top:10px">`;
            el.methods.forEach(m => {
                html += `
                    <div class="vocab-card" style="width:100%; text-align:left; cursor:pointer;" onclick="toggleDetail(this, '.det')">
                        <div class="bold-text" style="color:#d32f2f">【${m.name}】 (点击看翻译)</div>
                        <div style="font-size:14px; margin:5px 0;">${m.content}</div>
                        <div class="det" style="display:none; background:#f0f7ff; padding:10px; border-radius:5px; border-left:3px solid var(--sea-blue); font-size:13px; color:#555;">
                            <b>English Translation:</b><br>${m.english}
                        </div>
                    </div>`;
            });
            html += `</div>`;
        }
        html += `</div>`;
    });

    // --- 2. 建议类 (核心讲义) ---
    const sug = q4Data.suggestion;
    html += `<hr style="margin:40px 0;"><h3>${sug.title}</h3>`;
    html += sug.intro;

    html += `<h4 style="color:var(--sea-blue); margin-top:25px;">🛠️ 常用解决方法与词汇</h4><div class="vocab-grid">`;
    sug.solutions.forEach(s => {
        html += `<div class="vocab-card" onclick="toggleDetail(this, '.det-box')">
                    <span class="word" style="font-size:14px">[${s.cat}] <br> <b>${s.word}</b></span>
                    <div class="det-box" style="display:none; padding-top:5px;"><i style="color:#d32f2f">${s.en}</i><br><small>${s.usage}</small></div>
                 </div>`;
    });
    html += `</div>`;

    html += `<h4 style="color:var(--sea-blue); margin-top:25px;">🔗 议论文常用连接词</h4><div class="vocab-grid">`;
    sug.connectors.forEach(c => {
        html += `<div class="vocab-card" onclick="toggleDetail(this, '.det-box')">
                    <span class="word"><b>${c.word}</b></span>
                    <div class="det-box" style="display:none; padding-top:5px;"><i style="color:#2e7d32">${c.en}</i><br><small>${c.usage}</small></div>
                 </div>`;
    });
    html += `</div>`;

    html += `<h4 style="color:var(--sea-blue); margin-top:25px;">📝 题目范例大纲</h4>`;
    sug.outlines.forEach(o => {
        html += `<div class="example-box" style="background:#fffcf0; cursor:pointer;" onclick="toggleDetail(this, '.outline-det')">
                    <b style="color:#003366">📌 ${o.title} (点击展开)</b>
                    <div class="outline-det" style="display:none; margin-top:10px; font-size:14px; border-top:1px dashed #ccc; padding-top:10px;">${o.content}</div>
                 </div>`;
    });

    html += `<div class="example-box" style="margin-top:20px;"><b>常见题目：</b><br>${sug.examples.join('<br>')}</div>`;
    html += `<div class="essay-box">`;
    sug.framework.forEach(f => { html += `<p><b>${f.step}</b> <small>(${f.en})</small><br>${f.detail}</p>`; });
    html += `</div>`;

    // --- 3. 看法类 & 利弊类 ---
    [q4Data.opinion, q4Data.proscons].forEach(type => {
        html += `<hr style="margin:40px 0;"><h3>${type.title}</h3>`;
        html += `<div class="example-box"><b>常见题目：</b><br>${type.examples.join('<br>')}</div>`;
        html += `<div class="essay-box">`;
        type.framework.forEach(f => { html += `<p><b>${f.step}</b> <small>(${f.en})</small><br>${f.detail}</p>`; });
        html += `</div>`;
    });

    container.innerHTML = html;
}
