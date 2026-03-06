const p2Data = {
    title: "卷二 语文应用与阅读理解",

    // 1. 阅读理解技巧
    readingTips: {
        title: "阅读理解：先“阅读”后“理解”",
        subtitle: "不要在对短文不理解之前，就回答问题！",
        steps: [
            { step: "① 快速阅读题目", detail: "掌握文章主题（带着问题看短文）" },
            { step: "② 快速阅读短文", detail: "将不太明白的词语画出来" },
            { step: "③ 仔细阅读短文", detail: "利用上下文猜出不明白词语的意思" },
            { step: "④ 形成印象", detail: "思考：这篇文章内容是在说什么？" }
        ]
    },

    // 2. 修辞手法
    rhetoric: [
        {
            name: "比喻 (Simile)",
            desc: "两种不同事物有共同之处，把一个事物比作另一个更容易理解的事物。",
            examples: ["她的笑容就像灿烂的阳光，照亮了病人暗淡的心灵。", "老师仿佛蜡烛，燃烧自己照亮他人。"]
        },
        {
            name: "拟人 (Personification)",
            desc: "把事物当作人来写，使事物具有人的言谈举止和思想感情。",
            examples: ["月亮一露面，满天的星星都惊散了。", "花草树木随着风婆娑起舞，好看极了。"]
        },
        {
            name: "反问",
            desc: "使用“怎么”、“难道”、“何必”等词加强语气，表达与问话相反的意思。",
            examples: ["怎么不行？（意思：行，可以。）", "你毁了它的家，它岂能放过你？（意思：它不会放过你。）"]
        }
    ],

    // 3. 说明文 (Expository)
    expository: {
        orders: [
            { type: "时间顺序 (Chronological sequence)", detail: "按先后过程。例：大熊猫的演变（800万年前 -> 现代）。" },
            { type: "空间顺序 (Space sequence)", detail: "按地理方位。例：介绍乌敏岛的地理位置、形状、面积。" },
            { type: "逻辑顺序 (Logical sequence)", detail: "按认识规律（现象到本质）。例：说明土壤颜色及其背后的化学成因。" }
        ],
        methods: [
            { name: "举例子 (List example)", detail: "通过具体实例让读者明白重点。例：举出吃辣习惯与气候潮湿的关系。" },
            { name: "列数字 (Give statistic)", detail: "列出具体数字使说明更准确、更有说服力。例：面积1020公顷、员工1000多名。" }
        ]
    },

    // 4. 人物描写
    characterPortrayal: [
        { 
            type: "外貌描写 (Appearance)", 
            effect: "反映人物的性格或身份（含穿着、神态）。", 
            example: "她个子高高，面容清秀，细细弯弯的眼睛满是笑意。", 
            analysis: "表现了她亲切的一面。" 
        },
        { 
            type: "行动描写 (Action)", 
            effect: "反映人物的性格或心理活动。", 
            example: "几次伸手要去按门铃，又几次把手缩了回来。", 
            analysis: "表现出“我”为难的心理。" 
        },
        { 
            type: "语言描写 (Language/Dialogue)", 
            effect: "反映人物的思想感情和内心状态。", 
            example: "“没有什么的，你走你的吧！”", 
            analysis: "表现出“我”的冷漠和缺乏同情心。" 
        },
        { 
            type: "心理描写 (Psychological activity)", 
            effect: "表现人物的性格特征 and 思想感情。", 
            example: "我想，在这风雪之夜，母亲还要工作好几个小时，真难为她了。", 
            analysis: "表现了“我”对母亲的关切。" 
        }
    ],

    // --- 以下为新加入的补充资料，一字未改 ---

    // 一、综合填空 & 词语替换
    clozeAndReplacement: {
        cloze: {
            title: "一、综合填空（Cloze Passage）",
            time: "[ Suggested time: ~ 5 min ]",
            desc: "阅读一篇短文，从提供的词语中选出最适合的词语，填入文中的空格，考查学生对词语意思、搭配以及文章内容的理解能力。",
            tips: [
                "不要逐字逐句慢慢读，先了解文章的大意（main idea）。",
                "根据上下文判断每个空格需要的词语类型，例如：动词（verb）、名词（noun）、形容词（adjective）或成语（idiom）。",
                "注意常见的词语搭配（collocations），例如：“引起注意”、“造成影响”、“表达意见”等。",
                "代入法：把选项放入句子中，看看句子是否通顺、意思是否合理（reasonable）。",
                "排除法：先排除明显不符合语境（does not suit the context）的选项，再从剩下的词语中选择最合适的答案。"
            ]
        },
        replacement: {
            title: "词语替换（Replacement of Vocabulary）",
            time: "[ Suggested time: ~ 10 min (If you confirm that you don't know, don't spend so much time) ]",
            desc: "阅读一篇短文，文中有些词语已经填入，但这些词语是错误的。每个错误词语中有一个字与正确答案相同（顺序可能不同）。学生需要根据上下文，写出正确、合适的词语来替换它。",
            tips: [
                "先快速阅读短文，了解文章的大意（main idea）。",
                "注意错误词语中已经给出的那个字，思考有哪些常见词语可能包含这个字。",
                "根据上下文判断词语的意思，以及需要的词语类型，例如：动词（verb）、名词（noun）、形容词（adjective）或成语（idiom）。",
                "想到可能的词语后，把它代入句子中，看看句子是否通顺、意思是否合理（reasonable）。",
                "如果想到多个可能的词语，选择最符合文章意思和语境的答案。"
            ]
        }
    },

    // 二、阅读理解（一）
    comp1: {
        title: "二、阅读理解（一）（Comprehension MCQ）",
        time: "[ Suggested time: ~ 30 min ]",
        desc: "阅读一则实用文本，如报章、活动说明，题目以选择题（MCQ）为主，有时也可能是以故事形式呈现，题目也可能问到人物性格。",
        tips: [
            "1. 先读题目，再读文章：带着问题找答案（read with purpose）。",
            "2. 关键词定位（key words）：从题目中找关键词，再回到原文找相关句子。(Please use highlighter/pen to mark the key words.)",
            "3. 看清选项，排除(Eliminate)不符合意思的选项，或文中没有提到的选项。",
            "4. 对比选项和文章，有没有相似(similar)的句子。",
            "5. 阅读理解如果说的是故事，注意take note人物的行为、语言和心理，来判断人物的性格特点（personality）。"
        ]
    },

    // 三、阅读理解（二）
    comp2: {
        title: "三、阅读理解（二）（Comprehension Open ended）",
        time: "[ Suggested time: ~ 40 min ]",
        desc: "阅读两篇文章，回答相关理解题。",
        tips: [
            "1. 略读全文了解大意，再细读每一段找细节。",
            "2. 问题导向阅读：带着题目中的关键词回到原文寻找对应内容。((Please use highlighter/pen to mark the key words.)",
            "3. 答题时记得修改一些词汇（rephrase），不要整段抄写原文。比如“我”要改成作者。问题（？）要改成陈述句(Declarative statement)。",
            "4. 理解题 vs 推理题：",
            "• 理解题通常答案直接在文中，可以直接抄写(copy)，但是要记得把“我”这些字改成“作者”。",
            "• 推理题（inference）则需要从人物行为、语气、结果中分析出答案，你也可能要看上下文去找线索。",
            "• 自由发挥题(free response)需要你用生活的例子（你可以编make up story）来说明你同不同意故事里的一句话。如果你不知道写什么，就改编故事的例子，把一些细节换过来。",
            "• 改变/变化题，需要你横跨段落(cross paragraphs)去找答案，回答问题的时候应该写“一开始”和“后来”，说明有变化。 例如：作者一开始不喜欢吃粥，因为他觉得吃不饱。后来，他发现吃粥是为了纪念战争，就愿意吃粥了，觉得吃粥很有意义。"
        ],
        commonQuestions: [
            { q: "作者的心情为什么一下子跌到谷底？/ XX为什么XXXXX（keyword/keyphrase）？", a: "寻找心情变化的转折点及原因。" },
            { q: "为什么作者要进行一次探索自己的尝试？/ 为什么XX要XXXXX（keyword/keyphrase）？", a: "定位动机和背景。" },
            { 
                q: "解释“XXXXX”（第X段）在文中的意思。", 
                a: "这个问题需要你解释XXXXX这个短语在文章中的意思，你需要理解它本来的意思，以及文中要表达的具体意思（literal meaning + inferred meaning）如果你不知道就猜一猜，还是不知道就去XXXXX前后找一两句抄下来。" 
            },
            {
                q: "文中最后一段提到“XXXXX（keyword/keyphrase）。”你同意吗？试结合你的生活经验，谈谈你的看法。",
                a: "这种问题需要你用生活的例子（你可以编故事make up story）来说明你同不同意故事里的一句话。如果你不知道写什么，就改编故事的例子，把一些细节换过来。（Tips: Copy the sentence before and after the keyword/key phrase if you don’t understand and try to make up an example）"
            }
        ],
        remind: "每道题都要尝试，不留空白。实在不会就抄 (copy)",
        requirementVocab: [
            { cn: "主要内容", en: "main content" }, { cn: "信息", en: "information" }, { cn: "说明重点", en: "Main point" }, { cn: "提到", en: "mention" },
            { cn: "目的", en: "purpose" }, { cn: "看法", en: "opinion / viewpoint" }, { cn: "表达", en: "express" },
            { cn: "启示", en: "insight / revelation" }, { cn: "意义", en: "significance / meaning" },
            { cn: "例子", en: "example" }, { cn: "生活经验", en: "life experience" },
            { cn: "好处", en: "benefit / advantage" }, { cn: "挑战", en: "challenge" },
            { cn: "原因（为什么）", en: "reason (why)" }, { cn: "发现", en: "discovery / finding" },
            { cn: "变化", en: "change" }, { cn: "改变", en: "change" },
            { cn: "道理", en: "moral / lesson learnt" }, { cn: "决定", en: "decision" }
        ]
    }
};
