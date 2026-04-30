const errorData = {
    title: "🔥 常见错误 + 高分表达",
    subtitle: "Common Mistakes + High-Scoring Expressions",

    cardDisplay: {
        defaultCardStyle: "error-red",
        openedCardStyle: "normal",
        reminderZh: "请点击红色卡片查看正确表达和说明。",
        reminderEn: "Tap the red cards to see the correct expression and explanation."
    },

    modules: [
        {
            id: "high_frequency",
            title: "🔴 超高频错误",
            titleEn: "High-Frequency Mistakes",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "“和”不能连接两个句子",
                    titleEn: "Do not use 和 to connect two full clauses",
                    rule: "“和”、“以及”等连词只能连接词语或短语，不能连接两个完整分句。",
                    englishHelp: "和 means “and”, but it should not be used to join two full sentences.",
                    examples: [
                        { wrong: "我们应该有感恩的心和尊敬老师。", correct: "我们应该有感恩的心，懂得尊重老师。" },
                        { wrong: "他们吃太多快餐和他们没有时间去运动。", correct: "他们吃太多快餐，也没有时间去运动。" },
                        { wrong: "老师可以解释这为什么是错的，和跟他讲他不再犯同样的错误。", correct: "老师可以解释这为什么是错的，并且告诫他不再犯同样的错误。" },
                        { wrong: "新加坡人喜欢使用塑料袋，因为塑料袋方便和便宜。", correct: "新加坡人喜欢使用塑料袋，因为塑料袋又方便，又便宜。" },
                        { wrong: "保健局呼吁国人多吃蔬菜、水果和减少吃很多油的食物。", correct: "保健局呼吁国人多吃蔬菜、水果，少吃油炸食物。" },
                        { wrong: "我每天去咖啡馆和喝咖啡。", correct: "我每天去咖啡馆喝咖啡。" }
                    ]
                },
                {
                    title: "“不”和“没”",
                    titleEn: "不 and 没",
                    rule: "“不”多用于意愿、习惯、非过去；“没”多用于过去没有发生的事情。",
                    englishHelp: "不 usually negates intention, habits, or non-past actions. 没 usually means something did not happen.",
                    examples: [
                        { wrong: "他们认为这项活动一点也不会帮助他们。", correct: "他们认为这项活动一点帮助也没有。" },
                        { wrong: "我们应该不乱丢垃圾。", correct: "我们不应该乱丢垃圾。" },
                        { wrong: "他们不跟我们的想象中的一样。", correct: "他们跟我们想象中的不一样。" },
                        { wrong: "使用塑料袋是一个不良好的习惯。", correct: "使用塑料袋是一个不好的习惯。" }
                    ]
                },
                {
                    title: "“会”、“可以”、“能”",
                    titleEn: "会, 可以 and 能",
                    rule: "“会”多表示技能或可能；“可以”多表示允许、可行；“能”多表示能力或条件允许。",
                    englishHelp: "会 = know how / likely to; 可以 = may / can / allowed to; 能 = able to / capable of.",
                    examples: [
                        { wrong: "塑料可以伤害动物。", correct: "塑料会对动物造成伤害。" },
                        { wrong: "你能跟你的妈妈说……", correct: "你可以跟妈妈说……" },
                        { wrong: "你也能买个能够重复使用的袋子。", correct: "你也可以买个能够重复使用的袋子。" },
                        { wrong: "那里有间书店，你能到那里看看。", correct: "那里有间书店，你可以到那里看看。" }
                    ]
                },
                {
                    title: "“很多”和“很”",
                    titleEn: "很多 and 很",
                    rule: "“很多”表示数量多；“很”表示程度。不能直接把 a lot 翻成“很多”。",
                    englishHelp: "很多 = a lot of / many. 很 = very. Do not translate “a lot” directly every time.",
                    examples: [
                        { wrong: "我喜欢炸鸡很多。", correct: "我很喜欢炸鸡。" },
                        { wrong: "训练时，我们会跑很多。", correct: "训练时，我们跑了好多圈。" },
                        { wrong: "现代人有很多压力。", correct: "现代人压力大。" },
                        { wrong: "如果我有很多压力", correct: "我压力大的时候，" },
                        { wrong: "运动会让你感到你有很多力。", correct: "运动会让你精力充沛。" }
                    ]
                },
                {
                    title: "“如果”不一定要直译",
                    titleEn: "Do not always translate “if” as 如果",
                    rule: "很多英文 if 句在华文中应改成“……时”、“只要……就”、“当……时”等。",
                    englishHelp: "Not every English “if” should become 如果. Use natural Chinese sentence order.",
                    examples: [
                        { wrong: "我也做一些华文练习，如果我的功课做完了。", correct: "功课做完后，我也做一些华文练习。" },
                        { wrong: "你可以去公园跑步如果你心情不好。", correct: "心情不好时，你可以去公园跑步。" },
                        { wrong: "青少年会愿意参与社区活动如果父母鼓励他们。", correct: "只要父母多鼓励，青少年会愿意参与社区活动。" },
                        { wrong: "我会问爸爸妈妈，如果我遇到困难，请他们帮助我。", correct: "当我遇到困难时，我会请爸爸妈妈帮助我。" },
                        { wrong: "我希望你能告诉我如果办法可以！", correct: "希望你能告诉我这些方法是否可行。/这些方法是否行得通。" },
                        { wrong: "你也可以跟她说带自己的袋如果她去买东西。", correct: "你也可以跟她说，买东西时最好自行携带环保袋。" }
                    ]
                }
            ]
        },

        {
            id: "sentence_structure",
            title: "🟡 句子结构",
            titleEn: "Sentence Structure",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "语序不当",
                    titleEn: "Wrong Word Order",
                    rule: "时间、地点、方式、原因等成分通常要放在动词前面。",
                    englishHelp: "In Chinese, when/where/how/why usually comes before the verb.",
                    examples: [
                        { wrong: "我们玩耍在游乐场。", correct: "我们在游乐场玩耍。" },
                        { wrong: "老师要和他见面在学校。", correct: "老师要和他在学校见面。" },
                        { wrong: "我们买了很多东西在购物中心。", correct: "我们在购物中心买了很多东西。" },
                        { wrong: "我是一名学生来自2A班。", correct: "我是一名来自2A班的学生。" },
                        { wrong: "朋友因为玩游戏，结果没有上学三天。", correct: "朋友因为玩游戏，结果三天没有上学。" },
                        { wrong: "我也有时因为懒惰，就没带自己的袋子。", correct: "我有时也因为懒惰，就没带自己的袋子。" },
                        { wrong: "他们认为一个塑料袋不会有坏处对地球。", correct: "他们认为只用一个塑料袋不会对地球有伤害。" },
                        { wrong: "你可以多准备那些科目你做得不好。", correct: "你可以多准备那些你做得不好的科目。" },
                        { wrong: "今天想和你谈谈学习上遇到的困难怎么解决。", correct: "今天想和你谈谈怎么解决学习上遇到的困难。" },
                        { wrong: "我的哥哥很完美，是男朋友每个女生都想要。", correct: "我的哥哥很完美，是每个女生都想要的男朋友。" },
                        { wrong: "我有一个老师我不喜欢。", correct: "我有一个不喜欢的老师。" },
                        { wrong: "我们留在学校到了四点半。", correct: "我们在学校留到四点半。" },
                        { wrong: "我冲凉先才吃饭。", correct: "我先冲凉才吃饭。" },
                        { wrong: "我们要吃多纤维的食物。/校方鼓励学生做多运动。", correct: "我们要多吃纤维的食物。/校方鼓励学生多做运动。" },
                        { wrong: "多吃油炸的食物，可以影响身体。", correct: "油炸的食物吃多了，会影响身体健康。" }
                    ]
                },
                {
                    title: "成分多余",
                    titleEn: "Redundant Words",
                    rule: "句子已经完整时，不要重复主语、宾语或多余修饰语。",
                    englishHelp: "Remove repeated or unnecessary words to make the sentence cleaner.",
                    examples: [
                        { wrong: "我正在拿出我的手机时。", correct: "我正在拿出手机时。" },
                        { wrong: "我回家之后，给我的父母看我的成绩。", correct: "我回家之后，给父母看我的成绩。" },
                        { wrong: "他们很忙，所以他们抽不出时间去做他们的运动。", correct: "他们很忙，所以抽不出时间去做运动。" },
                        { wrong: "我对我自己说，我一定不要让我的父母担心我了。", correct: "我对自己说，一定不要让父母担心我了。" },
                        { wrong: "我的看法是觉得他们这样做是错的。", correct: "我觉得他们这样做是错的。" },
                        { wrong: "怕他会回来打你和我。", correct: "怕他会回来打我们。" },
                        { wrong: "这是我第一次和朋友出去看电影，我很开心极了。", correct: "这是我第一次和朋友出去看电影，我很开心。/我开心极了。" },
                        { wrong: "很多学生们/新加坡人们都很忙碌。", correct: "很多学生/学生们/新加坡人都很忙碌。" },
                        { wrong: "我心里吓了一大跳。", correct: "我吓了一跳。" }
                    ]
                },
                {
                    title: "搭配不当",
                    titleEn: "Wrong Collocation",
                    rule: "词语搭配要自然，例如“提高水平”、“改善生活”、“张贴海报”。",
                    englishHelp: "Some Chinese words must go with the correct matching words.",
                    examples: [
                        { wrong: "他们这样做会阻止其他同学学习。", correct: "他们这样会影响其他同学学习。" },
                        { wrong: "我学了不要和别人生气。", correct: "我学到了/明白了不要和别人生气。" },
                        { wrong: "我外出和教练一起训练自己的身体和跑步的速度。", correct: "我外出和教练一起训练，提高跑步速度。" },
                        { wrong: "我一关眼睛，他就会叫我的名字。", correct: "我一闭眼睛，他就会叫我的名字。" },
                        { wrong: "我有一些改变这问题的建议。", correct: "我有一些解决这一问题的建议。" },
                        { wrong: "在组屋楼下放海报。", correct: "在组屋楼下张贴海报。" },
                        { wrong: "我和我的家庭也无法阻止。", correct: "我和家人也无法阻止。" },
                        { wrong: "赛后的某一天，我和我的团队一起出去吃大餐。", correct: "赛后的某一天，我和队友一起出去吃大餐。" },
                        { wrong: "小明最喜欢玩篮球了。/玩足球", correct: "小明最喜欢打篮球了。/踢足球。" },
                        { wrong: "你可以教她为什么应该少用塑料袋。", correct: "你可以告诉她为什么应该少用塑料袋。" },
                        { wrong: "请一些运动人，来教老人一些简单的运动。", correct: "请一些教练/经常运动的人，来教老人一些简单的运动。" },
                        { wrong: "他们为了不要浪费时间和很忙碌，就选择到快餐店吃快餐。", correct: "他们工作忙碌，为了不浪费时间，就选择到快餐店吃快餐。" },
                        { wrong: "我不可以看和听老师写的和说的。", correct: "我看不清楚老师在白板上写的，也听不清楚老师所说的。" }
                    ]
                },
                {
                    title: "欧化问题",
                    titleEn: "English-Influenced Chinese",
                    rule: "不要直接照英文句式翻译，要改成自然华文表达。",
                    englishHelp: "Avoid word-for-word translation from English.",
                    examples: [
                        { wrong: "每当老师有困难做东西时，我们应该伸出援手。", correct: "每当老师遇到困难时，我们应该伸出援手。" },
                        { wrong: "他们很忙，所以不能找时间去做他们的运动。", correct: "他们很忙，所以没有时间去运动。" },
                        { wrong: "我认为你应该跟你妈妈坐下就告诉她用太多塑料袋对地球不好。", correct: "我认为你应该告诉你妈妈用太多塑料袋对地球有害。" },
                        { wrong: "我这才明白为什么我们不应该从别人的表现觉得他们是那样。", correct: "我这才明白为什么我们不应该以表面判断他人。" },
                        { wrong: "希望这些会帮助你在考试。", correct: "希望这些会对你的考试有帮助。" }
                    ]
                }
            ]
        },

        {
            id: "function_words",
            title: "🔵 功能词",
            titleEn: "Function Words",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "“从”",
                    titleEn: "从 / from",
                    rule: "“从”表示时间起点、地点起点或经过的处所。",
                    englishHelp: "从 marks the starting point of time or place.",
                    examples: [
                        { wrong: "爸爸每天从九到六做工，七点回到家。", correct: "爸爸每天从九点上班到六点，七点回到家。" },
                        { wrong: "我们两个从一点到三点温习功课。", correct: "我们两个从一点开始温习功课，三点才结束。" },
                        { wrong: "从这次的经历之后，我让家人感到骄傲。", correct: "这次的经历让家人为我感到骄傲。" }
                    ]
                },
                {
                    title: "“对”和“对于”",
                    titleEn: "对 and 对于",
                    rule: "“对/对于”可引出对象或相关问题，但语序要自然。",
                    englishHelp: "对 / 对于 introduces the object or issue being discussed.",
                    examples: [
                        { wrong: "对你跟你妈妈的事情，你可以……", correct: "对于/针对你跟妈妈的事情，你可以……" },
                        { wrong: "我有些想法，对为什么新加坡人会使用那么多塑料袋。", correct: "对于/针对新加坡人使用过多塑料袋的问题，我有一些个人见解。" }
                    ]
                },
                {
                    title: "“进步”",
                    titleEn: "进步 / improve",
                    rule: "“进步”通常是不及物用法；要表达 improve something，可用“提高”。",
                    englishHelp: "Use 提高 when you want to say “improve something”.",
                    examples: [
                        { wrong: "我进步成绩了。", correct: "我的成绩进步了。" },
                        { wrong: "我最喜欢李老师，因为她会变我从不及格到及格。", correct: "我最喜欢李老师，因为在她的教导之下，我的成绩进步了。" },
                        { wrong: "运动会进步我们的睡眠品质。", correct: "运动会提高我们的睡眠品质。" },
                        { wrong: "我每天放学后去参加训练，要我的跑步进步。", correct: "我每天放学后去参加训练，以提高跑步速度。" }
                    ]
                },
                {
                    title: "“是”",
                    titleEn: "是 / is",
                    rule: "华文不一定需要把 English “is” 翻成“是”。",
                    englishHelp: "Do not translate every English “is” into 是.",
                    examples: [
                        { wrong: "新加坡人是有健康的饮食习惯。", correct: "新加坡人有健康的饮食习惯。" },
                        { wrong: "一件令我心酸的事，是在我小五的时候。", correct: "一件令我心酸的事，发生在小五的时候。" },
                        { wrong: "我们应该清楚是来学校做什么的。", correct: "我们应该清楚，来学校的目的是什么。" }
                    ]
                },
                {
                    title: "“停”",
                    titleEn: "停 / stop",
                    rule: "有些英文 stop 不能直接翻成“停”，要看搭配。",
                    englishHelp: "Stop is not always 停. Use 停止, 改掉, or other natural verbs.",
                    examples: [
                        { wrong: "学校食堂停卖油炸的食物，开始售卖更多的蔬菜和水果。", correct: "学校食堂停止卖油炸的食物，开始售卖更多的蔬菜和水果。" },
                        { wrong: "他们不接受他人给的建议来停下这个坏习惯。", correct: "他们不接受他人给的建议来改掉这个坏习惯。" }
                    ]
                },
                {
                    title: "“完”",
                    titleEn: "完 / finish",
                    rule: "“完”常接在动词后，如“上完课”；有些情况要用“结束”。",
                    englishHelp: "Use 完 after a verb, or use 结束 when it means “ended”.",
                    examples: [
                        { wrong: "星期一到了，周末完了。", correct: "星期一到了，周末结束了。" },
                        { wrong: "我已经上课完了。", correct: "我已经上完课了。" }
                    ]
                }
            ]
        },

        {
            id: "particles",
            title: "🟢 助词",
            titleEn: "Particles",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "的、地、得",
                    titleEn: "的, 地, 得",
                    rule: "“的”接名词；“地”接动词；“得”补充说明动作的程度或结果。",
                    englishHelp: "的 usually before nouns; 地 before verbs; 得 after verbs to describe result or degree.",
                    examples: [
                        { wrong: "同学们慢慢的安静下来。", correct: "同学们慢慢地安静下来。" },
                        { wrong: "我从小一到小四都好好的读书。", correct: "我从小一到小四都好好地读书。" },
                        { wrong: "他不知所措得站在那里。", correct: "他不知所措地站在那里。" },
                        { wrong: "我希望我提出的建议能让结果变的更好。", correct: "我希望我提出的建议能让结果变得更好。" }
                    ]
                },
                {
                    title: "“了”",
                    titleEn: "了",
                    rule: "“了”不要误加在介词后。",
                    englishHelp: "Do not place 了 wrongly after prepositions.",
                    examples: [
                        { wrong: "我让了父母和家人都感到骄傲，也学到了帮助别人的重要。", correct: "我让父母和家人都感到骄傲，也学到了帮助别人的重要性。" }
                    ]
                }
            ]
        },

        {
            id: "sentence_patterns",
            title: "🟣 特殊句型",
            titleEn: "Special Sentence Patterns",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "“把”字句",
                    titleEn: "把 Sentence",
                    rule: "“把”字句表示某个确定的事物因动作而发生位置或状态变化。",
                    englishHelp: "把 sentence highlights what happens to a definite object.",
                    examples: [
                        { wrong: "我就放我的文具在书包里。", correct: "我就把文具放进书包。" },
                        { wrong: "我以为他会骂我，可是他只放他们的手在我的肩膀。", correct: "我以为他会骂我，可是他只把手轻轻地放在我的肩上。" },
                        { wrong: "同学们都回家了，老师偏偏留我。", correct: "同学们都回家了，老师偏偏把我留下来。" },
                        { wrong: "希望我提出的建议能把这件事变得更好。", correct: "希望我提出的建议能解决现有的问题。" },
                        { wrong: "我把我疲惫的身躯拖进课室。", correct: "我拖着疲惫的身躯走进课室。" }
                    ]
                },
                {
                    title: "“被”字句",
                    titleEn: "被 Sentence",
                    rule: "不要过度使用“被”，很多句子用主动表达更自然。",
                    englishHelp: "Do not overuse 被 because of English passive voice.",
                    examples: [
                        { wrong: "他们被朋友介绍去吃有名的快餐。", correct: "朋友介绍他们去吃有名的快餐。" },
                        { wrong: "这些观念从小被灌输到小朋友身上。", correct: "家长从小就给小朋友灌输这些观念。" },
                        { wrong: "当她知道别人在这样做，她会被这个看法鼓励到。", correct: "当她知道别人也这样做，她会受到鼓舞。" },
                        { wrong: "困难已经被克服了。", correct: "困难已经克服了。" },
                        { wrong: "他的书被放在桌子上了。", correct: "他的书放在桌子上了。" },
                        { wrong: "他骂了我最多，是因为他知道我对数学要最多的帮忙。", correct: "我被他骂的次数最多，因为他知道我的数学最需要帮助。" }
                    ]
                }
            ]
        },

        {
            id: "useful_expressions",
            title: "⚫ 实用词语与易错字",
            titleEn: "Useful Expressions and Commonly Confused Characters",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "日期和时间",
                    titleEn: "Date and Time",
                    rule: "华文日期从大到小写：年 → 月 → 日。",
                    englishHelp: "Chinese dates go from big to small: year → month → day.",
                    examples: [
                        { wrong: "我9月10日2020年开始学习汉语。", correct: "我2020年9月10日开始学习汉语。" },
                        { wrong: "如果十二点早上才睡觉，怎么能拥有充足的睡眠呢？", correct: "如果午夜十二点才睡觉，怎么能拥有充足的睡眠呢？" },
                        { wrong: "新加坡人很习惯在星期六和七补充睡眠。", correct: "新加坡人很习惯在星期六和日/周末补充睡眠。" },
                        { wrong: "我吃了饭就马上温习那天学到的东西。", correct: "我吃了饭就马上温习当天学到的东西。" },
                        { wrong: "是比赛天了。", correct: "比赛当天" }
                    ]
                },
                {
                    title: "教育相关词语",
                    titleEn: "Education-Related Terms",
                    rule: "考试作文中常用的教育词语要写准确。",
                    englishHelp: "Useful school-related terms for writing and oral exams.",
                    wordList: [
                        { word: "考试", meaning: "examination" },
                        { word: "测验", meaning: "test, assessment" },
                        { word: "及格", meaning: "pass" },
                        { word: "不及格", meaning: "fail" },
                        { word: "进步", meaning: "improve" },
                        { word: "上学/上课", meaning: "go to school / attend lesson" },
                        { word: "放学/下课", meaning: "after school / lesson ended" },
                        { word: "休息时间", meaning: "recess" },
                        { word: "小六会考", meaning: "Primary School Leaving Examination (PSLE)" },
                        { word: "“O”水准会考", meaning: "O Level Examination" },
                        { word: "“N”水准会考", meaning: "N Level Examination" },
                        { word: "品格与公民教育", meaning: "Character and Citizenship Education (CCE)" },
                        { word: "体育课", meaning: "P.E. lesson" },
                        { word: "美术课", meaning: "Arts lesson" },
                        { word: "周会/早会", meaning: "Assembly" },
                        { word: "班际比赛", meaning: "Inter-class competition" },
                        { word: "纪律主任", meaning: "Discipline Master (DM)" },
                        { word: "德育在于行动", meaning: "Values in Action (VIA)" },
                        { word: "课程辅助活动/课外活动", meaning: "CCA" }
                    ],
                    examples: [
                        { wrong: "我不及格华文在中学。/我不及格华文。", correct: "我中学的华文不及格。/我(的)华文不及格。" },
                        { wrong: "我感到心急如焚，怕我不及格我的考试。", correct: "我感到心急如焚，怕我的考试不及格。" },
                        { wrong: "我做完了我的考试的时候。/同学们准备进课室做考试。", correct: "我考完试后。/同学们准备进课室考试。" },
                        { wrong: "老师发考试成绩时……", correct: "老师发成绩单/分发考卷时……/老师公布考试成绩时。" },
                        { wrong: "如果完了学校还有时间", correct: "放学后还有时间的话，" },
                        { wrong: "今天有学校。", correct: "今天（有）上课。" }
                    ]
                }
            ]
        }
    ],

    typoCards: [
        { group: "拔 / 拨", cards: [{ word: "拔", pinyin: "bá", examples: "拔除、拔牙、拔刀相助、出类拔萃" }, { word: "拨", pinyin: "bō", examples: "拨款、拨出时间" }] },
        { group: "带 / 代 / 戴", cards: [{ word: "带", pinyin: "dài", examples: "领带、带领、携带、忘了带" }, { word: "代", pinyin: "dài", examples: "代表、代替、取代、代沟" }, { word: "戴", pinyin: "dài", examples: "戴帽子、戴眼镜、爱戴" }] },
        { group: "的 / 得", cards: [{ word: "的", pinyin: "de", examples: "他的、你的、幸福的生活、美好的愿望" }, { word: "得", pinyin: "de", examples: "吃得、玩得、说得非常好、做得对、觉得" }] },
        { group: "发 / 法", cards: [{ word: "发", pinyin: "fā", examples: "发展、发现、分发、发扬光大" }, { word: "法", pinyin: "fǎ", examples: "无法、办法、设法、法律" }] },
        { group: "己 / 已", cards: [{ word: "己", pinyin: "jǐ", examples: "自己、舍己为人" }, { word: "已", pinyin: "yǐ", examples: "已经、一个而已" }] },
        { group: "在 / 再", cards: [{ word: "在", pinyin: "zài", examples: "在这里、现在、在哪里" }, { word: "再", pinyin: "zài", examples: "再见、再次、再接再厉" }] },
        { group: "做 / 作", cards: [{ word: "做", pinyin: "zuò", examples: "做功课、做工、做事、做人" }, { word: "作", pinyin: "zuò", examples: "工作、作业、作用、作文、写作、以身作则" }] }
    ]
};
