const q3Data = {
    // 1. 写作技巧与模板
    strategies: {
        examTips: "用到所有的关键词！不要想太久，可以写一个很普通的故事，但是一定要写完。最后记得写感想。",
        openings: [
            { 
                title: "1. 用时间(time)开头", 
                example: "那是一个___________的（下午/雨天/周末），我永远记得______发生的那一刻，它让学会了______的道理。", 
                case: "例句：那是一个放学后的雨天，我永远记得好友明文对我大叫的那一刻，它让我学会了不要冲动的道理。" 
            },
            { 
                title: "2. 用对比(comparison)开头", 
                example: "我以前总觉得______（错误的想法），直到那次______（事件），才真正懂得了______（正确的想法）。", 
                case: "例句：我以前总觉得朋友之间不用道歉，直到那次和小明吵架吵了两天，才真正懂得了友情也要两个人努力维系。" 
            },
            { 
                title: "3. 用场景(scene)开头", 
                example: "（动作/物品）还静静地躺在（地点），我看着它，______（事件画面）又浮现在眼前。", 
                case: "例句：那张皱巴巴的试卷还静静地躺在抽屉里，我看着它，数学老师失望的表情又浮现在眼前。" 
            },
            { 
                title: "4. 用环境(environment)开头", 
                example: "（时间）的（地点）总是______（氛围），但那天，______（异常事件）打破了平静。", 
                case: "例句：我们一家人的饭桌总是热闹的，但那天，弟弟愤怒的大喊大叫打破了平静。" 
            },
            { 
                title: "5. 用对话(dialogue)开头", 
                example: "“（突然的话语/声响）”我转过头，看到（人物/场景），接下来，______（事件开端）……", 
                case: "例句：“有人抢劫啊！”我转过头，看到一位阿姨正指着一名迅速跑走的黑衣男人，接下来，我做了一个让自己都惊讶的决定……" 
            },
            { 
                title: "6. 用题目(question)开头", 
                example: "把题目中的“你”全部换成“我”，抄完题目后，加上一句“事情是这样发生的……”", 
                case: "例句：把“你是一个做事有计划和有条理的人...”变成“我是一个做事有计划和有条理的人... 事情是这样发生的……”" 
            }
        ],
        conclusions: [
            { title: "1. 成长道理", content: "这件事让我学会了一个道理：输赢不重要，重要的是我们努力的过程。只要不放弃，每次失败都会让我们变得更坚强。" },
            { title: "2. 友情道理", content: "现在我知道了，好朋友之间吵架很正常。只要互相理解、好好道歉，感情反而会更好。" },
            { title: "3. 帮助他人", content: "都说助人为快乐之本，得到感谢令我感到很高兴。我以后如果有能力，一定要回报社会，帮助更多人！" },
            { title: "4. 解决问题", content: "从那以后，我学会了有事好好说的道理。遇到冲突，我会想办法解决它。不管有什么事情，只要愿意解决问题，而不是发脾气，最后都会有好的结果。" },
            { title: "5. 团队合作", content: "其实，每个人都有自己的长处。不要让运动员写作，也不要让作家去跑步，我们要找出自己的优点，好好利用，互相配合，就能交一份满分的答卷。" }
        ]
    },

    // 2. 性格特征
    traits: [
        { word: "开朗", pinyin: "kāi lǎng", meaning: "cheerful" },
        { word: "勤劳", pinyin: "qín láo", meaning: "hardworking" },
        { word: "懒惰", pinyin: "lǎn duò", meaning: "lazy" },
        { word: "活泼", pinyin: "huó pō", meaning: "lively" },
        { word: "细心", pinyin: "xì xīn", meaning: "careful" },
        { word: "粗心", pinyin: "cū xīn", meaning: "careless" },
        { word: "害羞", pinyin: "hài xiū", meaning: "shy" },
        { word: "勇敢", pinyin: "yǒng gǎn", meaning: "brave" },
        { word: "固执", pinyin: "gù zhí", meaning: "stubborn" },
        { word: "自信", pinyin: "zì xìn", meaning: "confident" },
        { word: "谦虚", pinyin: "qiān xū", meaning: "modest" },
        { word: "幽默", pinyin: "yōu mò", meaning: "humorous" },
        { word: "冷静", pinyin: "lěng jìng", meaning: "calm" },
        { word: "有耐心", pinyin: "yǒu nài xīn", meaning: "patient" },
        { word: "爱发脾气", pinyin: "ài fā pí qì", meaning: "short-tempered" },
        { word: "聪明", pinyin: "cōng mìng", meaning: "smart" },
        { word: "贪心", pinyin: "tān xīn", meaning: "greedy" },
        { word: "胆小", pinyin: "dǎn xiǎo", meaning: "timid" },
        { word: "善良", pinyin: "shàn liáng", meaning: "kind" },
        { word: "自私", pinyin: "zì sī", meaning: "selfish" },
        { word: "乐于助人", pinyin: "lè yú zhù rén", meaning: "helpful" }
    ],

    // 3. 好词好句
    emotions: [
        { word: "心里乐开了花", pinyin: "xīn lǐ lè kāi le huā", meaning: "Inner joy blossoming like flowers" },
        { word: "心里像吃了蜜糖一样甜", pinyin: "xīn lǐ xiàng chī le mì táng yī yàng tián", meaning: "Heart feels as sweet as honey" },
        { word: "怒气冲冲", pinyin: "nù qì chōng chōng", meaning: "Full of rage; fuming" },
        { word: "气得满脸通红", pinyin: "qì dé mǎn liǎn tōng hóng", meaning: "Face turns red with anger" },
        { word: "笑得见牙不见眼", pinyin: "xiào dé jiàn yá bù jiàn yǎn", meaning: "Laughing so hard (eyes squeezed shut)" },
        { word: "眼泪像断了线的珍珠", pinyin: "yǎn lèi xiàng duàn le xiàn de zhēn zhū", meaning: "Tears flowing like broken pearls" },
        { word: "脸变得像番茄一样红", pinyin: "liǎn biàn dé xiàng fān qié yī yàng hóng", meaning: "Face turns as red as a tomato" },
        { word: "不敢看别人", pinyin: "bù gǎn kàn bié rén", meaning: "Doesn't dare to look at others" },
        { word: "惊讶地张大了口", pinyin: "jīng yà de zhāng dà le kǒu", meaning: "Surprised, with mouth wide open" },
        { word: "泪水模糊了我的视线", pinyin: "lèi shuǐ mó hu le wǒ de shì xiàn", meaning: "Tears blurred my vision" },
        { word: "哽咽", pinyin: "gěng yè", meaning: "To choke with sobs" },
        { word: "泣不成声", pinyin: "qì bù chéng shēng", meaning: "To sob uncontrollably" },
        { word: "急得像热锅上的蚂蚁", pinyin: "jí de xiàng rè guō shàng de mǎ yǐ", meaning: "Anxious like ants on a hot pan" },
        { word: "忐忑不安", pinyin: "tǎn tè bù ān", meaning: "Uneasy and restless" }
    ],

    // 4. 常用词汇
    commonVocab: [
        { word: "警察", pinyin: "jǐng chá", meaning: "police officer", cat: "职业" },
        { word: "医生", pinyin: "yī shēng", meaning: "Doctor", cat: "职业" },
        { word: "护士", pinyin: "hù shi", meaning: "Nurse", cat: "职业" },
        { word: "教导主任", pinyin: "jiào dǎo zhǔ rèn", meaning: "Discipline Master", cat: "职务" },
        { word: "清洁工", pinyin: "qīng jié gōng", meaning: "Cleaner", cat: "职业" },
        { word: "司机", pinyin: "sī jī", meaning: "Driver", cat: "职业" },
        { word: "民众俱乐部", pinyin: "mín zhòng jù lè bù", meaning: "community club", cat: "地名" },
        { word: "小贩中心", pinyin: "xiǎo fàn zhōng xīn", meaning: "hawker center", cat: "地名" },
        { word: "巴刹", pinyin: "bā shā", meaning: "wet market", cat: "地名" },
        { word: "组屋", pinyin: "zǔ wū", meaning: "HDB flat", cat: "地名" },
        { word: "学校食堂", pinyin: "xué xiào shí táng", meaning: "school canteen", cat: "地名" },
        { word: "图书馆", pinyin: "tú shū guǎn", meaning: "Library", cat: "地名" },
        { word: "地铁站", pinyin: "dì tiě zhàn", meaning: "MRT station", cat: "地名" },
        { word: "巴士站", pinyin: "bā shì zhàn", meaning: "bus stop", cat: "地名" }
    ],

    // 5. 范文
    modelEssay: {
        title: "题目：你一直是一个胆小的人。后来，发现自己也可以很勇敢。",
        content: "我一直是个胆小的人，直到有一天，我发现我也可以很勇敢。那是发生在休息时间的事。我看到一个高年级学生插队，直接站到了一个低年级同学前面。那个小同学看起来很不开心，眼泪快要流下来了，却不敢说话。周围的人都看到了，但大家都低下头，假装没看见。<br><br>我的心跳得很快。我看着那个高高大大的学生，也感到很害怕。我知道如果我上前说话，可能会有麻烦。但是看着小同学无助的样子，我觉得自己应该做点什么。<br><br>我深吸一口气，对自己说：不要怕，你可以做到的！然后我走上前，对那个插队的人说：“同学，请不要插队，大家都在排队。”我的声音有点发抖。那个高年级学生瞪了我一眼：“你在教我做事？”<br><br>我摇了摇头，又重复道：“请不要插队。”高年级的学生怒气冲冲，但也许是因为周围的人都看着，他最后还是抱怨着走到了队伍后面。小同学非常感激地看向我，笑得<b>见牙不见眼</b>。我的心里就像<b>吃了蜜糖一样甜</b>。<br><br>虽然只是一件小事，但我很高兴我站出来了。我学会了一个道理：只要有勇气，即使是很小的举动，也能带来改变。"
    }
};
