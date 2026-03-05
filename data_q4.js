const q4Data = {
    // 1. 总复习部分
    review: {
        title: "议论文三要素",
        elements: [
            { term: "论点 (Point)", detail: "对议论对象（人物、事件或道理）的观点。" },
            { term: "论据 (Evidence)", detail: "用来证明论点的理据。" },
            { term: "论证 (Proving Method)", detail: "用论据来证明论点的过程。", subMethods: [
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
                    content: "国家需要对本国国情有清楚的了解...（此处省略你提供的挪威 vs 秦朝例子）",
                    english: "Countries need a clear understanding of their own national conditions... (English translation)"
                }
            ]}
        ]
    },
    // 2. 看法类
    opinion: {
        title: "看法类：用例子证明你的观点",
        examples: [
            "有人说：新加坡青少年是草莓族，经不起考验。你同意吗？",
            "新加坡社会充满爱心。你同意吗？为什么？"
        ],
        framework: [
            { step: "1.立场+分析题目", en: "State stand + Analyse the question", detail: "有人认为：抄出题目中的关键句。对我而言，我同意/不同意这个说法。+ 提出问题/修辞法/下定义等" },
            { step: "2.结合社会现象", en: "Discuss the current situation / Background", detail: "我们不难发现，其实社会/许多人做了什么... 因此我认为（立场）" },
            { step: "3. 论点 1", en: "Point 1", detail: "首先/其一、（论点P，解释E，例如E。因此，L。）" },
            { step: "4. 论点 2", en: "Point 2", detail: "其次/其二、（论点P，解释E，例如E。因此，L。）" },
            { step: "5. 论点 3", en: "Point 3", detail: "再者/其三、（论点P，解释E，例如E。因此，L。）" },
            { step: "6. 总结扣题", en: "Summary and future aspect", detail: "总结全文，升华主题。" }
        ]
    }
};
