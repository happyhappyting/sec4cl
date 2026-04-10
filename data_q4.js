const q4Data = {
    // 第一部分：三要素 (保持不变)
    review: {
        title: "议论文三要素",
        elements: [
            { 
                term: "论点 (Point)", 
                detail: "对议论对象（人物、事件或道理）的观点。也就是你的立场。" 
            },
            { 
                term: "论据 (Evidence)", 
                detail: "用来证明论点的理据。也就是支持你观点的例子或证据。" 
            },
            { 
                term: "论证 (Proving Method)", 
                detail: "用论据来证明论点的过程。常用方法如下：",
                methods: [
                    {
                        name: "举例论证法",
                        content: "天才来自于勤奋。爱迪生一生有一千多项发明。他为了发明电灯，阅读了大量资料，光笔记就有四万多页。他试过几千种物质，做了几万次实验，才最终发明了电灯。",
                        english: "Genius comes from diligence. Edison's hard work led to the invention of the light bulb."
                    },
                    {
                        name: "引用论证法",
                        content: "著名文学家蒲松龄曾说过：“有志者事竟成，苦心人天不负。”",
                        english: "Pu Songling: 'Where there is a will, there is a way.'"
                    },
                    {
                        name: "对比论证法",
                        content: "国家需要对本国国情有清楚的了解。挪威政府意识到财富迅速增加会带来弊端，决定将石油利润转化为社会保障基金，为长远发展打下基础。反之，秦朝统治者没有认识到百姓需要休养生息，实行严刑峻法，最终导致王朝覆灭。",
                        english: "Norway's wise planning vs. Qin Dynasty's harsh laws and eventual collapse."
                    }
                ]
            }
        ]
    },

    // 第二部分：逻辑公式与题目分析 (保留 Factor / Outcome / Identity)
    logic_section: {
        title: "万能逻辑公式",
        formula: "原因 / 因素 (factor) ➔ 结果 (outcome)",
        desc: "议论文的本质：论证这个【factor】是否能稳定地导致那个【outcome】。",
        
        traps: [
            { 
                name: "绝对句", 
                keywords: "只有、只要、最、唯一", 
                strategy: "寻找【反例】。证明没有这个 factor，结果也能达成；或者有了 factor，结果却没发生。",
                cases: [
                    { q: "“只要学习成绩好，就受人欢迎”", a: "如果一个学生成绩极好但性格自私，大家只会对他敬而远之。可见成绩好不是唯一原因。" },
                    { q: "“只有学校才能培养品格”", a: "如果家长能以身作则教导诚实，孩子依然能有高尚品格。证明家庭教育也是重要原因。" },
                    { q: "“只有身处困境才明白友情”", a: "两名友人在日常生活中互相关心、互相倾听。这种长期的平凡相处同样能让人领悟友情的真谛。" }
                ]
            },
            { 
                name: "身份要求 (identity)", 
                keywords: "学生领袖、家长、名人", 
                strategy: "提供的【因素/方法】必须符合该身份的能力范围。" 
            }
        ],

        // 题目逻辑拆解 (完全保留您的文本逻辑)
topics: [
    { cat: "Case A: Proving relationship", q: "许多人认为赚很多钱是人生最重要的目标。你同意吗？", f: "赚【很多】钱 (factor)", o: "人生【最重要】的目标 (outcome)" },
    { cat: "Case A: Proving relationship", q: "一个人的言谈举止深受同学和朋友的影响。", f: "同学和朋友的影响 (factor)", o: "言谈举止【深受】影响 (outcome)" },
    { cat: "Case A: Proving relationship", q: "新加坡的社会充满爱心。你同意吗?为什么?", f: "新加坡社会的现状 (factor)", o: "【充满】爱心 (outcome)" },
    { cat: "Case A: Proving relationship", q: "家长应该让孩子自己做决定。试加以讨论。", i: "家长", f: "让孩子【自己】做决定 (factor)", o: "孩子的良好发展 (outcome)" },
    { cat: "Case A: Proving relationship", q: "名人应该是年轻人学习的好榜样。", i: "名人", f: "名人的言行 (factor)", o: "年轻人学习的【好】榜样 (outcome)" },
    { cat: "Case A: Proving relationship", q: "科技使社会变得冷漠。", f: "科技的使用 (factor)", o: "社会变得【冷漠】 (outcome)" },
    { cat: "Case A: Proving relationship", q: "电影能塑造青少年的价值观。", f: "电影内容 (factor)", o: "【塑造】青少年的价值观 (outcome)" },
    { cat: "Case A: Proving relationship", q: "只有目标而没有计划，是不可能成功的。", f: "【只有】目标而【没有】计划 (factor)", o: "【不可能】成功 (outcome)" },
    { cat: "Case A: Proving relationship", q: "受人尊敬取决于是否能坚守正确的价值观。", f: "坚守【正确】的价值观 (factor)", o: "【受人尊敬】 (outcome)" },
    { cat: "Case A: Proving relationship", q: "只有学校才能培养学生的品格。", f: "【只有】学校教育 (factor)", o: "【培养】学生的品格 (outcome)" },
    { cat: "Case A: Proving relationship", q: "只有身处困境才明白友情的真正意义。", f: "【身处困境】 (factor)", o: "明白友情的【真正】意义 (outcome)" },
    { cat: "Case A: Proving relationship", q: "在住宅区兴建购物中心利大于弊。", f: "在【住宅区】兴建购物中心 (factor)", o: "【利大于弊】 (outcome)" },
    { cat: "Case A: Proving relationship", q: "能适应变化的人，才可以在人生取得成功。", f: "【适应变化】的能力 (factor)", o: "在人生【取得成功】 (outcome)" },
    { cat: "Case A: Proving relationship", q: "人生中最重要的并不是要胜过别人。", f: "胜过别人 (factor)", o: "人生中【最重要】的事 (outcome)" },
    { cat: "Case A: Proving relationship", q: "上网买东西是最佳的购物方式。", f: "【上网】买东西 (factor)", o: "【最佳】的购物方式 (outcome)" },
    { cat: "Case A: Proving relationship", q: "现今的青少年害怕失败。", f: "现今社会环境/教育方式 (factor)", o: "青少年【害怕失败】 (outcome)" },
    { cat: "Case A: Proving relationship", q: "线上课程让学习新技能变得更容易。", f: "【线上】课程 (factor)", o: "学习新技能变得【更容易】 (outcome)" },
    { cat: "Case A: Proving relationship", q: "只要学习成绩好，就可以得到同学们的喜爱。", f: "【学习成绩好】 (factor)", o: "【得到】同学们的喜爱 (outcome)" },
    { cat: "Case A: Proving relationship", q: "要在这个快速发展的时代中生存，必须有效使用科技。", f: "【有效】使用科技 (factor)", o: "在【快速发展】的时代中生存 (outcome)" },
    
    { cat: "Case B: Finding factors", q: "老师往往是学生学习的榜样。你认为老师应该具备哪些条件才能成为学生的好榜样？", i: "老师", f: "老师具备的条件 (factor)", o: "成为学生的【好榜样】 (outcome)" },
    { cat: "Case B: Finding factors", q: "我们应该为国家的成就感到骄傲。试举例并说明理由。", f: "国家的【成就】 (factor)", o: "【感到骄傲】 (outcome)" },
    { cat: "Case B: Finding factors", q: "如何鼓励更多新加坡人做善事", f: "鼓励的方法/手段 (factor)", o: "【更多】新加坡人做善事 (outcome)" },
    { cat: "Case B: Finding factors", q: "如果你是一名学生领袖，你希望为学校带来怎样的改变?", i: "学生领袖", f: "领袖的行动/措施 (factor)", o: "为学校带来【改变】 (outcome)" },
    { cat: "Case B: Finding factors", q: "现今新加坡青年所面对的挑战", f: "【现今】社会环境/因素 (factor)", o: "新加坡青年面对的【挑战】 (outcome)" },
    { cat: "Case B: Finding factors", q: "要让一个人变得更好，给予爱还是纪律约束？", f: "给予爱 vs 纪律约束 (factor)", o: "让一个人变得【更好】 (outcome)" }
]
    },

    // 模块库与题型 (保持不变)
    bank: {
        title: "万能论据库 (子弹库)",
        modules: [
            {
                name: "模块 A：科技的力量 (手机/社交媒体)",
                content: "现在人们即使身处世界两端，也能通过屏幕实时交流。但聚餐时，随处可见年轻人埋头看手机（低头族），忽略了身边真实的人际互动。",
                logic: "科技是原因，好结果是打破距离，坏结果是人际关系疏离。取决于使用者的态度。"
            },
            {
                name: "模块 B：核心价值观 (海伦·凯勒/特蕾莎修女)",
                content: "海伦·凯勒在失明失聪下凭坚韧意志成为作家；特蕾莎修女一生在贫民窟服务，用伟大的爱做微小的事。",
                logic: "成功的结果是因为‘坚韧’（原因）；受人尊敬的结果是因为‘奉献’（原因）。"
            },
            {
                name: "模块 C：环境与人的关系 (新加坡转型)",
                content: "新加坡建国初期只是小渔村，资源匮乏。但长辈们面对缺少工作机会和水源不足等挑战，学习工业技术，积极吸引外国人投资，短时间内让经济发展得更好。",
                logic: "环境一直在变，只有愿意学习新技术、吸引投资（原因），才能让国家变好（结果）。"
            }
        ]
    },
    opinion: { title: "看法类 (论证相关性)", method: "利用 5W1H 写出【原因】的具体表现，看它能否导向【结果】。", example: "新加坡社会有爱心吗？年轻人(Who)在地铁上看到老人立刻(When)让座(What)。老人感受到尊重，氛围和谐。这证明了点滴举动(原因)能导出爱心社会(结果)。" },
    suggestion: { title: "建议类 (论证可行性)", method: "写出这个方法（因素）具体怎么操作，操作后会产生什么直接结果。", example: "如何鼓励运动？政府在组屋区(Where)增加免费健身器材(What)。居民下楼就能使用(How)，看到邻居都在动，自己也会参与。这证明方便的设施(原因)能达成全民健康(结果)。" },
    proscons: { title: "利与弊 (论证权重比)", method: "2利1弊=利大于弊；1利2弊=弊大于利；2利2弊=有利有弊。", example: "网购利大于弊吗？利是省时间、价格便宜；弊是容易买到不对的东西。由于节省时间对现代人更重要，所以利大于弊。" }
};
