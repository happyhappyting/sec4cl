const p2Data = {
    title: "卷二 语文应用与阅读理解 (Paper 2)",

    // --- 一、综合填空与词语替换 ---
    vocabularyApps: {
        cloze: {
            title: "综合填空 (Cloze Passage)",
            time: "[ Suggested time: ~ 5 min ]",
            desc: "阅读一篇短文，从提供的词语中选出最适合的词语，填入文中的空格，考查学生对词语意思、搭配以及文章内容的理解能力。",
            tips: [
                "不要逐字逐句慢慢读，先了解文章的大意 (main idea)。",
                "根据上下文判断每个空格需要的词语类型，例如：动词 (verb)、名词 (noun)、形容词 (adjective) 或成语 (idiom)。",
                "注意常见的词语搭配 (collocations)，例如：“引起注意”、“造成影响”、“表达意见”等。",
                "代入法：把选项放入句子中，看看句子是否通顺、意思是否合理 (reasonable)。",
                "排除法：先排除明显不符合语境 (does not suit the context) 的选项，再从剩下的词语中选择最合适的答案。"
            ]
        },
        replacement: {
            title: "词语替换 (Replacement of Vocabulary)",
            time: "[ Suggested time: ~ 10 min (If you confirm that you don't know, don't spend so much time) ]",
            desc: "阅读一篇短文，文中有些词语已经填入，但这些词语是错误的。每个错误词语中有一个字与正确答案相同（顺序可能不同）。学生需要根据上下文，写出正确、合适的词语来替换它。",
            tips: [
                "先快速阅读短文，了解文章的大意 (main idea)。",
                "注意错误词语中已经给出的那个字，思考有哪些常见词语可能包含这个字。",
                "根据上下文判断词语的意思，以及需要的词语类型，例如：动词 (verb)、名词 (noun)、形容词 (adjective) 或成语 (idiom)。",
                "想到可能的词语后，把它代入句子中，看看句子是否通顺、意思是否合理 (reasonable)。",
                "如果想到多个可能的词语，选择最符合文章意思和语境的答案。"
            ]
        }
    },

    // --- 二、阅读理解（一） ---
    comprehension1: {
        title: "阅读理解（一）（Comprehension MCQ）",
        time: "[ Suggested time: ~ 30 min ]",
        desc: "阅读一则实用文本，如报章、活动说明，题目以选择题 (MCQ) 为主，有时也可能是以故事形式呈现，题目也可能问到人物性格。",
        tips: [
            "1. 先读题目，再读文章：带着问题找答案 (read with purpose)。",
            "2. 关键词定位 (key words)：从题目中找关键词，再回到原文找相关句子。(Please use highlighter/pen to mark the key words.)",
            "3. 看清选项，排除 (Eliminate) 不符合意思的选项，或文中没有提到的选项。",
            "4. 对比选项和文章，有没有相似 (similar) 的句子。",
            "5. 阅读理解如果说的是故事，注意 take note 人物的行为、语言和心理，来判断人物的性格特点 (personality)。"
        ]
    },

    // --- 三、阅读理解（二） ---
    comprehension2: {
        title: "阅读理解（二）（Comprehension Open ended）",
        time: "[ Suggested time: ~ 40 min ]",
        desc: "阅读两篇文章，回答相关理解题。",
        keyStrategies: [
            { type: "基本策略", content: "略读全文了解大意，再细读每一段找细节。带着题目中的关键词回到原文寻找对应内容。(Please use highlighter/pen to mark the key words.)" },
            { type: "转换人称", content: "答题时记得修改一些词汇 (rephrase)，不要整段抄写原文。比如“我”要改成“作者”。问题（？）要改成陈述句 (Declarative statement)。" },
            { type: "理解题", content: "通常答案直接在文中，可以直接抄写 (copy)，但记得转换人称。" },
            { type: "推理题 (Inference)", content: "需要从人物行为、语气、结果中分析出答案，也可能要看上下文去找线索。" },
            { type: "自由发挥题 (Free response)", content: "需要你用生活的例子（可以编 make up story）来说明。如果你不知道写什么，就改编故事的例子，把一些细节换过来。" },
            { type: "改变/变化题", content: "需要你横跨段落 (cross paragraphs) 找答案，回答时应写“一开始”和“后来”，说明有变化。例：作者一开始不喜欢吃粥...后来发现是为了纪念战争...觉得很有意义。" }
        ],
        commonQuestions: [
            { q: "作者的心情为什么一下子跌到谷底？/ XX 为什么 XXXX？", a: "结合关键词定位原因。" },
            { q: "为什么作者要进行一次探索自己的尝试？", a: "结合文中背景分析动机。" },
            { q: "解释“XXXXX”（第X段）在文中的意思。", a: "解释该短语在本来的意思及文中的具体意思 (literal + inferred meaning)。不知道就猜，或去前后找一两句抄下来。" },
            { q: "文中最后一段提到“XXXXX”，你同意吗？谈谈看法。", a: "表达同意/不同意 + 生活例子。若不会写，就 copy 关键词前后的句子并尝试改编例子。Tips: 每道题都要尝试，不留空白。实在不会就抄 (copy)。" }
        ],
        requirementVocab: [
            { cn: "主要内容", en: "main content" }, { cn: "信息", en: "information" },
            { cn: "目的", en: "purpose" }, { cn: "看法", en: "opinion / viewpoint" },
            { cn: "启示", en: "insight / revelation" }, { cn: "意义", en: "significance / meaning" },
            { cn: "例子", en: "example" }, { cn: "生活经验", en: "life experience" },
            { cn: "好处", en: "benefit / advantage" }, { cn: "挑战", en: "challenge" },
            { cn: "原因（为什么）", en: "reason (why)" }, { cn: "发现", en: "discovery / finding" },
            { cn: "变化 / 改变", en: "change" }, { cn: "道理", en: "moral / lesson learnt" },
            { cn: "决定", en: "decision" }
        ]
    },

    // --- 四、修辞手法 ---
    rhetoric: [
        {
            name: "比喻 (Simile)",
            desc: "两种不同的事物有共同之处，把一个事物比作另一个更容易理解的事物。",
            examples: [
                "她的笑容就像灿烂的阳光，照亮了病人暗淡的心灵。",
                "我觉得自己像一只气球，气装得满满的，却又爆不了。",
                "老师仿佛蜡烛，燃烧自己照亮他人。"
            ]
        },
        {
            name: "拟人 (Personification)",
            desc: "把事物当作人来写，使事物具有人的言谈举止和思想感情。",
            examples: [
                "月亮一露面，满天的星星都惊散了。",
                "那些弱不禁风的玻璃酒杯一排排站立在那里……",
                "花草树木随着风婆娑起舞，好看极了。"
            ]
        },
        {
            name: "反问",
            desc: "常使用“怎么”、“难道”、“何必”、“岂”等，表达与问话相反的意思，加强语气。",
            examples: [
                "怎么不行？（表达意思：行，可以。）",
                "你毁了它的家，它岂能放过你？（表达意思：它是不可能放过你的。）"
            ]
        }
    ],

    // --- 五、议论文 (Argumentative) ---
    argumentative: {
        analysis: {
            title: "议论文实例分析：《走上美好的人生路》",
            table: [
                { point: "1. 把握时间", evidence: "祖逖“闻鸡起舞”的故事和爱迪生珍惜时间的故事", method: "举例证明把握时间的重要性" },
                { point: "2. 勤于奋斗", evidence: "韩愈“业精于勤，荒于嬉”和熟语“勤能补拙”", method: "引用名言熟语证明勤于奋斗的重要性" },
                { point: "3. 不畏艰辛", evidence: "熟语“宝剑锋从磨砺出”、贝多芬克服困难的故事", method: "引用及举例证明不畏艰辛的重要性" }
            ],
            structure: [
                { s: "引论", f: "提出论点", c: "第1段：提出做什么事都不应该轻言放弃。" },
                { s: "本论", f: "分析论证", c: "第2-3段：证明不放弃能克服困难，且需要决心与恒心。" },
                { s: "结论", f: "总括全文", c: "第4段：呼吁大家遇到困难不要轻言放弃。" }
            ]
        },
        methods: [
            { name: "举例论证法 (Example)", detail: "列举确凿事例。如：陈嘉庚、霍金、贝多芬、叶品秀为国争光。" },
            { name: "引用论证法 (Quote)", detail: "引用名言。如：孔子说“知之者不如好之者”、俗语“一寸光阴一寸金”。" },
            { name: "对比论证法 (Comparison)", detail: "正反两面对比。例：《勇于尝试》中弟弟（正面）与哥哥（反面）的对比。" }
        ]
    },

    // --- 六、说明文 (Expository) ---
    expository: {
        orders: [
            { type: "时间顺序 (Chronological sequence)", detail: "按先后过程。例：《大熊猫》从800万年前到现在的演化。" },
            { type: "空间顺序 (Space sequence)", detail: "按地理方位。例：《乌敏岛》描述其位置、形状、面积。" },
            { type: "逻辑顺序 (Logical sequence)", detail: "按认识规律（现象到本质）。例：《大地的色彩》说明土壤颜色及化学成因。" }
        ],
        methods: [
            { name: "举例子 (List example)", detail: "让读者更明白重点。例：说明口味地区差异（南甜北咸东辣西酸）。" },
            { name: "列数字 (Give statistic)", detail: "使说明更准确。例：乌敏岛东西长约8公里，员工1000多名。" }
        ]
    },

    // --- 七、人物描写 ---
    characterPortrayal: [
        { type: "外貌描写 (Appearance)", effect: "肖像、神态描写，反映人物性格或身份。", example: "她个子高高，细细弯弯的眼睛满是笑意。", analysis: "表现了她亲切的一面。" },
        { type: "行动描写 (Action)", effect: "行为动作描写，反映性格或心理活动。", example: "几次伸手按门铃，又几次把手缩了回来。", analysis: "表现出“我”为难的心理。" },
        { type: "语言描写 (Language / Dialogue)", effect: "对话、独白描写，反映思想感情和品质。", example: "“没有什么的，你走你的吧！”", analysis: "表现出“我”的冷漠和缺乏同情心。" },
        { type: "心理描写 (Psychological activity)", effect: "内心状态描写，表现性格特征和思想感情。", example: "我想，在这风雪之夜，母亲和弟弟要工作好几个小时...真难为他们了。", analysis: "表现了“我”对家人的关切。" }
    ],

    // --- 八、新闻结构 ---
    newsStructure: {
        title: "新闻倒金字塔结构",
        parts: [
            { name: "导语 (Lead)", content: "新闻的第一段，让读者快速掌握主要内容 (5W1H)。" },
            { name: "主体 (Body)", content: "新闻的主要部分，进一步详细报道解说导语内容。" },
            { name: "结语 (Conclusion)", content: "新闻的最后一段，交代背景或补充相关信息。" }
        ]
    }
};
