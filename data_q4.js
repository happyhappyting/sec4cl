const q4Data = {
    // 1. 总复习部分
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
    // 2. 看法类
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
            { step: "4.总结扣题", en: "Summary", detail: "总结全文，呼应call back to立场，未来展望future prospect(If you have any)。" }
        ]
    },
    // 3. 建议类
    suggestion: {
        title: "建议类：针对问题提出对策",
        examples: ["如何提高国人的公民意识？", "如何解决青少年沉迷网游的问题？"],
        framework: [
            { step: "1.现状分析", en: "Current Situation", detail: "描述问题的普遍性及其带来的负面影响negative impact，引出解决的紧迫性。" },
            { step: "2.个人/家庭角度", en: "Individual / Family", detail: "家长应以身作则be role model。例如：在公共场所不大声喧哗，为孩子树立榜样。" },
            { step: "3.学校/教育角度", en: "School / Education", detail: "通过讲座talk或课程培养正确价值观。例如：举办礼貌周活动。" },
            { step: "4.政府/媒体角度", en: "Govt / Media", detail: "利用法律约束或媒体宣传promote。例如：发布公益广告advertisement或加强enhance执法。" },
            { step: "5.总结愿景", en: "Future Aspect", detail: "各方配合，共同努力，构建更美好的社会。" }
        ]
    },
    // 4. 利与弊类
    proscons: {
        title: "利与弊类：双向辩证分析",
        examples: ["青少年使用人工智能(AI)辅助学习的利弊", "在社交媒体分享生活的利与弊"],
        framework: [
            { step: "1.背景引出", en: "Background", detail: "介绍该现象的兴起。指出这就像一把“双刃剑”，有利也有弊。" },
            { step: "2.利点 (Pros)", en: "Advantages", detail: "分析正面积极影响。例如：人工智能提高资料整合效率，节省时间。" },
            { step: "3.弊点 (Cons)", en: "Disadvantages", detail: "分析潜在负面危害。例如：过度依赖人工智能导致丧失青少年独立思考能力。" },
            { step: "4.权衡立场", en: "Evaluation / Stand", detail: "我认为利大于弊（或反之）。关键在于如何正确地使用人工智能。" },
            { step: "5.总结建议", en: "Conclusion", detail: "人工智能是现在科技的大趋势，我们应该教导青少年正确的使用方式，让他们享受时代发展的便利。" }
        ]
    }
};
