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
            id: "useful_expressions",
            title: "⚫ 实用词语与考试表达",
            titleEn: "Useful Terms and Exam Expressions",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "日期和时间",
                    titleEn: "Date and Time",
                    explanationEn: "Chinese dates and time expressions are often ordered from big to small: year → month → day. Pay attention to natural Chinese phrasing.",
                    contentHtml: `
<p><b><u>日期的写法</u></b></p>

<p>（✗）：我<b><u>9月10日2020年</u></b>开始学习汉语。</p>
<p>（✓）：我<b><u>2020年9月10日</u></b>开始学习汉语。</p>

<p><b>English Help:</b> English writes dates as September 10, 2020. Chinese usually writes from big to small: year → month → day.</p>

<table class="error-table">
<tr><th>华文</th><th>英文</th></tr>
<tr><td>2020年2月2日</td><td>2nd February 2020</td></tr>
<tr><td>例句：校方将于<b><u>2020年2月2日</u></b>举办一年一度的运动会。</td><td>The school will be organising the annual sports carnival on <b><u>2nd February 2020</u></b>.</td></tr>
</table>

<p><b><u>常见时间词的中英用词</u></b></p>

<table class="error-table">
<tr><th>概念</th><th>表示词</th></tr>
<tr><td>年</td><td>去年 [last year] - 今年 [this year] - 明年 [next year]</td></tr>
<tr><td>月</td><td>上个月 [last month] - 这个月 [this month] - 下个月 [next month]</td></tr>
<tr><td>星期</td><td>上个星期/上周 [last week] - 这个星期/这周 [this week] - 下个星期/下周 [next week]</td></tr>
<tr><td>天</td><td>前天 [2 days ago/the day before yesterday] - 昨天 [yesterday] - 今天 [today] - 明天 [tomorrow] - 后天 [the day after tomorrow]</td></tr>
<tr><td></td><td>三天前 [3 days ago] - 三天后 [3 days later]</td></tr>
<tr><td></td><td>第二天、隔天 [the next day]</td></tr>
<tr><td></td><td>周末（星期六、星期天）[weekend]</td></tr>
<tr><td></td><td>周日、星期日、星期天 [Sunday]</td></tr>
</table>

<p><b><u>常见的错误</u></b></p>

<p>例子1：12 midnight</p>
<p>（✗）：如果<b><u>十二点早上</u></b>才睡觉，怎么能拥有充足的睡眠呢？</p>
<p>（✓）：如果<b><u>午夜十二点</u></b>才睡觉，怎么能拥有充足的睡眠呢？</p>

<p>例子2：weekend</p>
<p>（✗）：新加坡人很习惯在<b><u>星期六和七</u></b>补充睡眠。</p>
<p>（✓）：新加坡人很习惯在<b><u>星期六和日/周末</u></b>补充睡眠。</p>

<p>例子3：</p>
<p>（✗）：我吃了饭就马上温习<b><u>那天</u></b>学到的东西。</p>
<p>（✓）：我吃了饭就马上温习<b><u>当天</u></b>学到的东西。</p>

<p>例子4：</p>
<p>（✗）：<b><u>是比赛天了</u></b>。</p>
<p>（✓）：<b><u>比赛当天</u></b></p>
`
                },

                {
                    title: "教育相关词语",
                    titleEn: "Education-Related Terms",
                    explanationEn: "Useful school-related terms and common mistakes in school-context sentences.",
                    contentHtml: `
<p><b><u>跟教育相关的词语</u></b></p>

<table class="error-table">
<tr><th>华文词汇</th><th>英文词汇</th></tr>
<tr><td>考试</td><td>examination</td></tr>
<tr><td>测验</td><td>test, assessment</td></tr>
<tr><td>及格</td><td>pass</td></tr>
<tr><td>不及格</td><td>fail</td></tr>
<tr><td>进步</td><td>improve</td></tr>
<tr><td>上学/上课</td><td>go to school / attend lesson</td></tr>
<tr><td>放学/下课</td><td>after school / lesson ended</td></tr>
<tr><td>休息时间</td><td>recess</td></tr>
<tr><td>小六会考</td><td>Primary School Leaving Examination (PSLE)</td></tr>
<tr><td>“O”水准会考</td><td>O Level Examination</td></tr>
<tr><td>“N”水准会考</td><td>N Level Examination</td></tr>
<tr><td>品格与公民教育</td><td>Character and Citizenship Education (CCE)</td></tr>
<tr><td>体育课</td><td>P.E lesson</td></tr>
<tr><td>美术课</td><td>Arts lesson</td></tr>
<tr><td>周会/早会</td><td>Assembly</td></tr>
<tr><td>班际比赛</td><td>Inter-class competition</td></tr>
<tr><td>纪律主任</td><td>Discipline Master (DM)</td></tr>
<tr><td>“德育在于行动”</td><td>Values in Action (VIA)</td></tr>
<tr><td>课程辅助活动/课外活动</td><td>CCA</td></tr>
</table>

<p>例子1：#进步</p>
<p>（✗）：我<b><u>进步成绩了</u></b>。</p>
<p>（✓）：我<b><u>的成绩进步了</u></b>。</p>

<p>例子2：#进步</p>
<p>（✗）：我最喜欢李老师，因为她会<b><u>变我从不及格到及格</u></b>。</p>
<p>（✓）：我最喜欢李老师，因为<b><u>在她的教导之下，我的成绩进步了</u></b>。</p>

<p>例子3：#不及格</p>
<p>（✗）：这是因为我<b><u>不及格华文在中学</u></b>。/我<b><u>不及格华文</u></b>。</p>
<p>（✓）：这是因为我<b><u>中学的华文不及格</u></b>。/我(的)华文<b><u>不及格</u></b>。</p>

<p>（✗）：我感到心急如焚，怕我<b><u>不及格我的考试</u></b>。</p>
<p>（✓）：我感到心急如焚，怕我的考试<b><u>不及格</u></b>。</p>

<p>例子4：#考试</p>
<p>（✗）：我<b><u>做完了我的考试</u></b>的时候 / 同学们准备进课室<b><u>做考试</u></b>。</p>
<p>（✓）：我<b><u>考完试后</u></b> / 同学们准备进课室<b><u>考试</u></b>。</p>

<p>例子5：#发成绩</p>
<p>（✗）：老师<b><u>发考试成绩</u></b>时……</p>
<p>（✓）：老师<b><u>发成绩单/分发考卷</u></b>时……/老师<b><u>公布考试成绩</u></b>时……</p>

<p>例子7：#放学</p>
<p>（✗）：如果<b><u>完了学校</u></b>还有时间</p>
<p>（✓）：<b><u>放学后还有时间的话，</u></b></p>

<p>例子8：#上课</p>
<p>（✗）：今天有<b><u>学校</u></b>。</p>
<p>（✓）：今天（有）<b><u>上课</u></b>。</p>
`
                }
            ]
        },

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
                    explanationEn: "和 / 以及 should connect words or phrases, not two complete clauses.",
                    contentHtml: `
<p><b><u>“和”（AND）</u></b></p>
<p>“和”、“以及”等连词不可用于连接分句，仅能连接词语和短语。</p>

<p>例子1：【用“，”分成2个分句】</p>
<p>（✗）：我们应该有感恩的心<b><u>和</u></b>尊敬老师。</p>
<p>（✓）：我们应该有感恩的心<b><u>，懂得</u></b>尊重老师。</p>

<p>例子2：【用“，”分成2个分句，用“也”做为第二个分句的开头】</p>
<p>（✗）：他们吃太多快餐<b><u>和他们</u></b>没有时间去运动。</p>
<p>（✓）：他们吃太多快餐<b><u>，也</u></b>没有时间去运动。</p>

<p>例子3：</p>
<p>（✗）：老师可以解释这为什么是错的，<b><u>和跟他讲他</u></b>不再犯同样的错误。</p>
<p>（✓）：老师可以解释这为什么是错的，<b><u>并且告诫他</u></b>不再犯同样的错误。</p>

<p>例子4：</p>
<p>（✗）：新加坡人喜欢使用塑料袋，因为塑料袋<b><u>方便和便宜</u></b>。</p>
<p>（✓）：新加坡人喜欢使用塑料袋，因为塑料袋<b><u>又方便，又便宜</u></b>。</p>

<p>例子5：</p>
<p>（✗）：保健局呼吁国人多吃蔬菜、水果<b><u>和减少吃很多油的食物</u></b>。</p>
<p>（✓）：保健局呼吁国人多吃蔬菜、水果，<b><u>少吃油炸食物</u></b>。</p>

<p>例子6：【英文句式直译的问题】</p>
<p>英文：Every day I go to the cafe and drink coffee.</p>
<p>（✗）：我每天去咖啡馆<b><u>和喝咖啡</u></b>。</p>
<p>（✓）：我每天去咖啡馆<b><u>喝咖啡</u></b>。</p>
`
                },

                {
                    title: "“不”和“没”",
                    titleEn: "不 and 没",
                    explanationEn: "不 usually negates intention, habits, states, or non-past actions. 没 usually negates something that did not happen.",
                    contentHtml: `
<p><b><u>“不”和“没”的用法</u></b></p>

<table class="error-table">
<tr><th></th><th>不</th><th>没</th></tr>
<tr><td>1</td><td>侧重于否定意愿<br>例如：他<b><u>不</u></b>太喜欢足球，昨天的世界杯他都不看。</td><td>侧重于否定客观表述<br>例如：他太忙了，昨天的世界杯都<b><u>没</u></b>看。</td></tr>
<tr><td>2</td><td>主要用于非过去事件<br>例如：明天我<b><u>不</u></b>去。</td><td>用于过去事件<br>例如：昨天我<b><u>没</u></b>去。</td></tr>
<tr><td>3</td><td>可用于否定经常性/习惯性的动作或状态<br>例如：他从来<b><u>不</u></b>喝酒。</td><td>用于否定过去某一行为动作的发生<br>例如：他最近几天<b><u>没</u></b>喝酒。</td></tr>
<tr><td>4</td><td>可以否定情态助动词<br>我<b><u>不能</u></b>去、我<b><u>不知道</u></b>、我<b><u>不认识</u></b></td><td>一般不可以否定情态助动词（只有少数）<br>我<b><u>没能</u></b>去</td></tr>
<tr><td>5</td><td>否定形容词时否定的是性质<br>这个苹果<b><u>不红</u></b></td><td>否定的是变化<br>苹果还<b><u>没红</u></b></td></tr>
</table>

<p>例子1：</p>
<p>（✗）：他们认为这项活动一点<b><u>也不会帮助他们</u></b>。</p>
<p>（✓）：他们认为这项活动一点<b><u>帮助也没有</u></b>。</p>

<p>例子2：【“不”应该】</p>
<p>（✗）：我们<b><u>应该不</u></b>乱丢垃圾。</p>
<p>（✓）：我们<b><u>不应该</u></b>乱丢垃圾。</p>

<p>例子3：【“不一样”】</p>
<p>（✗）：他们<b><u>不</u></b>跟我们的想象中的一样。</p>
<p>（✓）：他们跟我们想象中的<b><u>不一样</u></b>。</p>

<p>例子4：</p>
<p>（✗）：使用塑料袋是一个<b><u>不良好</u></b>的习惯。</p>
<p>（✓）：使用塑料袋是一个<b><u>不好</u></b>的习惯。</p>
`
                },

                {
                    title: "“会”、“可以”、“能”",
                    titleEn: "会, 可以 and 能",
                    explanationEn: "会 often means know how / likely to; 可以 means may / allowed / possible; 能 means able to or conditions allow.",
                    contentHtml: `
<p><b><u>“会”、“可以”、“能”（CAN / MAY）</u></b></p>

<p><b>English Help:</b></p>
<p><b>可以</b>: can / may / be worth doing / pretty good</p>
<p><b>能</b>: able to / capable / conditions allow</p>
<p><b>会</b>: know how / be likely to / be good at</p>

<p>例子1：</p>
<p>（✗）：塑料<b><u>可以伤害动物</u></b>。</p>
<p>（✓）：塑料<b><u>会对动物造成伤害</u></b>。</p>

<p>例子2：</p>
<p>（✗）：你<b><u>能</u></b>跟你的妈妈说……/你也<b><u>能</u></b>买个能够重复使用的袋子。</p>
<p>（✓）：你<b><u>可以</u></b>跟妈妈说……/你也<b><u>可以</u></b>买个能够重复使用的袋子。</p>

<p>例子3：</p>
<p>（✗）：那里有间书店，你<b><u>能</u></b>到那里看看。</p>
<p>（✓）：那里有间书店，你<b><u>可以</u></b>到那里看看。</p>
`
                },

                {
                    title: "“从”",
                    titleEn: "从 / from",
                    explanationEn: "从 marks the starting point of time or place. Do not force it into every English 'from' structure.",
                    contentHtml: `
<p><b><u>“从”（from）</u></b></p>
<p>作为介词的“从”，表示动作开始的时间、动作行为的起点或通过的处所。</p>

<p>例子1：</p>
<p>（✗）：爸爸每天<b><u>从九到六做工</u></b>，七点回到家。</p>
<p>（✓）：爸爸每天<b><u>从九点上班到六点</u></b>，七点回到家。</p>

<p>例子2：</p>
<p>（✗）：我们两个<b><u>从一点到三点温习功课</u></b>。</p>
<p>（✓）：我们两个<b><u>从一点开始温习功课，三点才结束</u></b>。</p>

<p>例子3：</p>
<p>（✗）：<b><u>从这次的经历之后</u></b>，我让家人感到骄傲。</p>
<p>（✓）：<b><u>这次的经历让家人为我感到骄傲</u></b>。</p>
`
                },

                {
                    title: "“对于”、“对”",
                    titleEn: "对于 and 对",
                    explanationEn: "对 / 对于 introduces the object or issue being discussed. Pay attention to natural Chinese word order.",
                    contentHtml: `
<p><b><u>“对于”、“对”</u></b></p>
<p>作为介词，“对”和“对于”都能用来引进动作行为的对象或关系者。</p>

<table class="error-table">
<tr><th>用法</th><th>对</th><th>对于</th></tr>
<tr><td>表示人际关系</td><td>老师对他很关心</td><td>老师对于他很关心</td></tr>
<tr><td>构成“对……来说”</td><td>对新加坡人来说</td><td>对于新加坡人来说</td></tr>
<tr><td>含有“对待”、“向”的意思</td><td>老师对我可好啦</td><td>老师对于我可好啦</td></tr>
<tr><td>引进与动作有关的事物</td><td>对这个问题</td><td>对于这个问题</td></tr>
</table>

<p>例子1：</p>
<p>（✗）：<b><u>对你跟你妈妈的事情</u></b>，你可以……</p>
<p>（✓）：<b><u>对于/针对你跟妈妈的事情</u></b>，你可以……</p>

<p>例子2：【语序不当】</p>
<p>（✗）：我有些想法，<b><u>对为什么新加坡人会使用那么多塑料袋</u></b>。</p>
<p>（✓）：<b><u>对于/针对新加坡人使用过多塑料袋的问题</u></b>，我有一些个人见解。</p>
`
                },

                {
                    title: "“很多”、“很”",
                    titleEn: "很多 and 很",
                    explanationEn: "很多 means many / a lot of. 很 means very. Do not translate 'a lot' directly every time.",
                    contentHtml: `
<p><b><u>“很多”、“很”（A lot）</u></b></p>

<p>例子1：</p>
<p>英文：I like fried chicken a lot.</p>
<p>（✗）：我喜欢炸鸡<b><u>很多</u></b>。</p>
<p>（✓）：我<b><u>很</u></b>喜欢炸鸡。</p>

<p>例子2：</p>
<p>（✗）：训练时，我们会<b><u>跑很多</u></b>。</p>
<p>（✓）：训练时，我们<b><u>跑了好多圈</u></b>。</p>

<p>例子3：【压力不能用“多少”来形容】</p>
<p>（✗）：现代人<b><u>有很多压力</u></b>。/如果我<b><u>有很多压力</u></b></p>
<p>（✓）：现代人<b><u>压力大</u></b>。/我<b><u>压力大的时候</u></b>，</p>

<p>例子4：</p>
<p>（✗）：运动会让你感到你<b><u>有很多力</u></b>。</p>
<p>（✓）：运动会让你<b><u>精力充沛</u></b>。</p>
`
                },

                {
                    title: "“如果”",
                    titleEn: "如果 / if",
                    explanationEn: "Not every English 'if' should become 如果. Use natural Chinese sentence order such as ……时, 只要……就, 当……时.",
                    contentHtml: `
<p><b><u>“如果”（IF）</u></b></p>
<p>学生经常将“if”直接翻译成“如果”，但不是所有的句子都适用于假设关系。</p>

<p>例子1：</p>
<p>（✗）：我也做一些华文练习，<b><u>如果我的功课做完了</u></b>。</p>
<p>（✓）：<b><u>功课做完后</u></b>，我也做一些华文练习。</p>

<p>例子2：</p>
<p>（✗）：你可以去公园跑步<b><u>如果你心情不好</u></b>。</p>
<p>（✓）：<b><u>心情不好时</u></b>，你可以去公园跑步。</p>

<p>例子3：</p>
<p>（✗）：青少年会愿意参与社区活动<b><u>如果父母鼓励他们</u></b>。</p>
<p>（✓）：<b><u>只要父母多鼓励</u></b>，青少年会愿意参与社区活动。</p>

<p>例子4：</p>
<p>（✗）：我会问爸爸妈妈，<b><u>如果我遇到困难</u></b>，请他们帮助我。</p>
<p>（✓）：<b><u>当我遇到困难时</u></b>，我会请爸爸妈妈帮助我。</p>

<p>例子5：</p>
<p>（✗）：我希望你能告诉我<b><u>如果办法可以</u></b>！</p>
<p>（✓）：希望你能告诉我这些方法<b><u>是否可行</u></b>。/这些方法<b><u>是否行得通</u></b>。</p>

<p>例子6：</p>
<p>（✗）：你也可以跟她说带自己的袋<b><u>如果她去买东西</u></b>。</p>
<p>（✓）：你也可以跟她说，<b><u>买东西时最好自行携带环保袋</u></b>。</p>
`
                },

                {
                    title: "“进步”",
                    titleEn: "进步 / improve",
                    explanationEn: "进步 is often used as an intransitive verb. To say improve something, use 提高.",
                    contentHtml: `
<p><b><u>“进步”（improve）</u></b></p>

<p>例子1：</p>
<p>（✗）：运动会<b><u>进步我们的睡眠品质</u></b>。</p>
<p>（✓）：运动会<b><u>提高我们的睡眠品质</u></b>。</p>

<p>例子2：</p>
<p>（✗）：我每天放学后去参加训练，<b><u>要我的跑步进步</u></b>。</p>
<p>（✓）：我每天放学后去参加训练，<b><u>以提高跑步速度</u></b>。</p>
`
                },

                {
                    title: "“是”",
                    titleEn: "是 / is",
                    explanationEn: "Do not translate every English 'is' into 是. Chinese often uses 有, 发生, or another natural phrase.",
                    contentHtml: `
<p><b><u>“是”（is; to be）</u></b></p>

<p>例子1：</p>
<p>（✗）：新加坡人<b><u>是有</u></b>健康的饮食习惯。</p>
<p>（✓）：新加坡人<b><u>有</u></b>健康的饮食习惯。</p>

<p>例子2：“是”的误用</p>
<p>（✗）：一件令我心酸的事，<b><u>是在我小五的时候</u></b>。</p>
<p>（✓）：一件令我心酸的事，<b><u>发生在小五的时候</u></b>。</p>

<p>例子3：“是”的误用</p>
<p>（✗）：我们应该清楚<b><u>是来学校做什么的</u></b>。</p>
<p>（✓）：我们应该清楚，<b><u>来学校的目的是什么</u></b>。</p>
`
                },

                {
                    title: "“停”",
                    titleEn: "停 / stop",
                    explanationEn: "Stop is not always 停. Use 停止, 改掉, or another natural verb depending on context.",
                    contentHtml: `
<p><b><u>“停”（stop）</u></b></p>

<p>例子1：</p>
<p>（✗）：学校食堂<b><u>停卖</u></b>油炸的食物，开始售卖更多的蔬菜和水果。</p>
<p>（✓）：学校食堂<b><u>停止卖</u></b>油炸的食物，开始售卖更多的蔬菜和水果。</p>

<p>例子2：</p>
<p>（✗）：他们不接受他人给的建议来<b><u>停下这个坏习惯</u></b>。</p>
<p>（✓）：他们不接受他人给的建议来<b><u>改掉这个坏习惯</u></b>。</p>
`
                },

                {
                    title: "“完”",
                    titleEn: "完 / finish",
                    explanationEn: "完 usually follows a verb, such as 上完课. For events ending, use 结束.",
                    contentHtml: `
<p><b><u>“完”（finish-ed）</u></b></p>

<p>例子1：</p>
<p>（✗）：星期一到了，周末<b><u>完了</u></b>。</p>
<p>（✓）：星期一到了，周末<b><u>结束了</u></b>。</p>

<p>例子2：</p>
<p>（✗）：我已经<b><u>上课完了</u></b>。</p>
<p>（✓）：我已经<b><u>上完课了</u></b>。</p>
`
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
                    explanationEn: "的 usually goes before nouns; 地 before verbs; 得 after verbs to describe degree or result.",
                    contentHtml: `
<p><b><u>助词“的、地、得”的用法</u></b></p>

<table class="error-table">
<tr><th>助词</th><th>用法</th><th>例子</th></tr>
<tr><td>的</td><td>一般接名词，用于主语或宾语之前<br>Usually followed by a noun.</td><td>红红的太阳、美丽的花朵、优美的环境、我的书包、讨论的问题</td></tr>
<tr><td>地</td><td>一般接动词，用于谓语之前<br>Usually followed by a verb.</td><td>静静地等、开心地笑、痛快地玩</td></tr>
<tr><td>得</td><td>一般接形容词，用于补充说明“得”前面的动作怎么样<br>Usually followed by an adjective to complement the verb before it.</td><td>高兴得手舞足蹈、难过得哭了起来、红得发紫、好得很</td></tr>
</table>

<p>例子1：</p>
<p>（✗）：同学们慢慢<b><u>的</u></b>安静下来。/我从小一到小四都好好<b><u>的</u></b>读书。</p>
<p>（✓）：同学们慢慢<b><u>地</u></b>安静下来。/我从小一到小四都好好<b><u>地</u></b>读书。</p>

<p>例子2：</p>
<p>（✗）：他不知所措<b><u>得</u></b>站在那里。</p>
<p>（✓）：他不知所措<b><u>地</u></b>站在那里。</p>

<p>例子3：</p>
<p>（✗）：我希望我提出的建议能让结果变<b><u>的</u></b>更好。</p>
<p>（✓）：我希望我提出的建议能让结果变<b><u>得</u></b>更好。</p>
`
                },

                {
                    title: "“了”",
                    titleEn: "了",
                    explanationEn: "Do not place 了 wrongly after prepositions.",
                    contentHtml: `
<p><b><u>助词“了”的用法</u></b></p>

<p>例子1：误加于介词后</p>
<p>（✗）：我<b><u>让了</u></b>父母和家人都感到骄傲，也学到了帮助别人的<b><u>重要</u></b>。</p>
<p>（✓）：我<b><u>让</u></b>父母和家人都感到骄傲，也学到了帮助别人的<b><u>重要性</u></b>。</p>
`
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
                    explanationEn: "In Chinese, time, place, manner, and reason usually come before the verb.",
                    contentHtml: `
<p><b><u>语序不当</u></b></p>
<p>华文中说明“什么时候”、“哪里”、“怎么样”、“为什么”等的成分，通常要放在动词前面。</p>

<p>例子1：</p>
<p>英文：We play at the playground.</p>
<p>（✗）：我们<b><u>玩耍在游乐场</u></b>。</p>
<p>（✓）：我们<b><u>在游乐场玩耍</u></b>。</p>

<p>例子2：</p>
<p>（✗）：老师要和他<b><u>见面在学校</u></b>。</p>
<p>（✓）：老师要和他<b><u>在学校见面</u></b>。</p>

<p>例子3：</p>
<p>（✗）：我们<b><u>买了很多东西在购物中心</u></b>。</p>
<p>（✓）：我们<b><u>在购物中心买了很多东西</u></b>。</p>

<p>例子4：</p>
<p>（✗）：我是一名学生<b><u>来自2A班</u></b>。</p>
<p>（✓）：我是<b><u>一名来自2A班的学生</u></b>。</p>

<p>例子5：</p>
<p>（✗）：朋友因为玩游戏，结果<b><u>没有上学三天</u></b>。</p>
<p>（✓）：朋友因为玩游戏，结果<b><u>三天没有上学</u></b>。</p>

<p>例子6：</p>
<p>（✗）：我<b><u>也有时</u></b>因为懒惰，就没带自己的袋子。</p>
<p>（✓）：我<b><u>有时也</u></b>因为懒惰，就没带自己的袋子。</p>

<p>例子7：</p>
<p>（✗）：他们认为一个塑料袋不会<b><u>有坏处对地球</u></b>。</p>
<p>（✓）：他们认为只用一个塑料袋不会<b><u>对地球有伤害</u></b>。</p>

<p>例子8：</p>
<p>（✗）：你可以多准备<b><u>那些科目你做得不好</u></b>。</p>
<p>（✓）：你可以多准备<b><u>那些你做得不好的科目</u></b>。</p>

<p>例子9：</p>
<p>（✗）：今天想和你谈谈<b><u>学习上遇到的困难怎么解决</u></b>。</p>
<p>（✓）：今天想和你谈谈<b><u>怎么解决学习上遇到的困难</u></b>。</p>

<p>例子10：</p>
<p>（✗）：我的哥哥很完美，是<b><u>男朋友每个女生都想要</u></b>。</p>
<p>（✓）：我的哥哥很完美，是<b><u>每个女生都想要的男朋友</u></b>。</p>

<p>例子11：</p>
<p>（✗）：我有一个<b><u>老师我不喜欢</u></b>。</p>
<p>（✓）：我有一个<b><u>不喜欢的老师</u></b>。</p>

<p>例子12：</p>
<p>（✗）：我们<b><u>留在学校到了四点半</u></b>。</p>
<p>（✓）：我们<b><u>在学校留到四点半</u></b>。</p>

<p>例子13：【受方言/英文影响，属于不规范的华语表达】</p>
<p>（✗）：我<b><u>冲凉先才吃饭</u></b>。</p>
<p>（✓）：我<b><u>先冲凉才吃饭</u></b>。</p>

<p>例子14：</p>
<p>（✗）：我们要<b><u>吃多</u></b>纤维的食物。/校方鼓励学生<b><u>做多</u></b>运动。</p>
<p>（✓）：我们要<b><u>多吃</u></b>纤维的食物。/校方鼓励学生<b><u>多做</u></b>运动。</p>

<p>例子15：</p>
<p>（✗）：<b><u>多吃油炸的食物，可以影响身体</u></b>。</p>
<p>（✓）：<b><u>油炸的食物吃多了，会影响身体健康</u></b>。</p>
`
                },

                {
                    title: "成分多余",
                    titleEn: "Redundant Words",
                    explanationEn: "Remove repeated or unnecessary words to make the sentence clearer.",
                    contentHtml: `
<p><b><u>成分多余</u></b></p>

<p>例子1：</p>
<p>（✗）：我正在拿出<b><u>我的</u></b>手机时 / 我回家之后，给<b><u>我的</u></b>父母看<b><u>我的</u></b>成绩。</p>
<p>（✓）：我正在拿出手机时 / 我回家之后，给父母看成绩。</p>

<p>例子2：</p>
<p>（✗）：他们很忙，所以<b><u>他们</u></b>抽不出时间去做<b><u>他们的</u></b>运动。</p>
<p>（✓）：他们很忙，所以抽不出时间去做运动。</p>

<p>例子3：</p>
<p>（✗）：我对<b><u>我自己</u></b>说，我一定不要让<b><u>我的</u></b>父母担心我了。</p>
<p>（✓）：我对自己说，一定不要让父母担心我了。</p>

<p>例子4：【“我的看法”=“我觉得”，应该删去】</p>
<p>（✗）：<b><u>我的看法是觉得</u></b>他们这样做是错的。</p>
<p>（✓）：<b><u>我觉得</u></b>他们这样做是错的。</p>

<p>例子5：</p>
<p>（✗）：怕他会回来打<b><u>你和我</u></b>。</p>
<p>（✓）：怕他会回来打<b><u>我们</u></b>。</p>

<p>例子6：修饰语多余【“很”和“极了”都是形容程度的】</p>
<p>（✗）：这是我第一次和朋友出去看电影，我<b><u>很开心极了</u></b>。</p>
<p>（✓）：这是我第一次和朋友出去看电影，我<b><u>很开心</u></b>/我<b><u>开心极了</u></b>。</p>

<p>例子7：【“很多”表示数量多，所以“学生”后不用再加“们”】</p>
<p>（✗）：<b><u>很多学生们</u></b>/新加坡人们都很忙碌。</p>
<p>（✓）：<b><u>很多学生</u></b>/学生们/新加坡人都很忙碌。</p>

<p>例子8：【“新加坡人”是一个泛指性的名词，不能受数量词修饰】</p>
<p>（✗）：<b><u>新加坡人们</u></b>都很忙碌。</p>
<p>（✓）：<b><u>新加坡人</u></b>都很忙碌。</p>

<p>例子9：</p>
<p>（✗）：我<b><u>心里吓了一大跳</u></b>。</p>
<p>（✓）：我<b><u>吓了一跳</u></b>。</p>
`
                },

                {
                    title: "搭配不当",
                    titleEn: "Wrong Collocation",
                    explanationEn: "Some Chinese words must go with the correct matching words. Use natural word combinations.",
                    contentHtml: `
<p><b><u>搭配不当</u></b></p>

<p>例子1：词汇搭配不当</p>
<p>（✗）：他们这样做会<b><u>阻止</u></b>其他同学学习。</p>
<p>（✓）：他们这样会<b><u>影响</u></b>其他同学学习。</p>

<p>例子2：</p>
<p>（✗）：我<b><u>学了</u></b>不要和别人生气。</p>
<p>（✓）：我<b><u>学到了/明白了</u></b>不要和别人生气。</p>

<p>例子3：</p>
<p>（✗）：我外出和教练一起训练自己的身体和跑步的速度。</p>
<p>（✓）：我外出和教练一起训练，<b><u>提高跑步速度</u></b>。</p>

<p>例子4：【“关眼睛”是方言的说法】</p>
<p>（✗）：我一<b><u>关眼睛</u></b>，他就会叫我的名字。</p>
<p>（✓）：我一<b><u>闭眼睛</u></b>，他就会叫我的名字。</p>

<p>例子5：</p>
<p>（✗）：我有一些<b><u>改变这问题</u></b>的建议。</p>
<p>（✓）：我有一些<b><u>解决这一问题</u></b>的建议。</p>

<p>例子6：</p>
<p>（✗）：在组屋楼下<b><u>放海报</u></b>。</p>
<p>（✓）：在组屋楼下<b><u>张贴海报</u></b>。</p>

<p>例子7：【family】</p>
<p>（✗）：我和<b><u>我的家庭</u></b>也无法阻止。</p>
<p>（✓）：我和<b><u>家人</u></b>也无法阻止。</p>

<p>例子8：【teammate】</p>
<p>（✗）：赛后的某一天，我和<b><u>我的团队</u></b>一起出去吃大餐。</p>
<p>（✓）：赛后的某一天，我和<b><u>队友</u></b>一起出去吃大餐。</p>

<p>例子9：</p>
<p>（✗）：小明最喜欢<b><u>玩篮球</u></b>了。/玩足球</p>
<p>（✓）：小明最喜欢<b><u>打篮球</u></b>了。/踢足球</p>

<p>例子10：</p>
<p>（✗）：你可以<b><u>教</u></b>她为什么应该少用塑料袋。</p>
<p>（✓）：你可以<b><u>告诉</u></b>她为什么应该少用塑料袋。</p>

<p>例子11：</p>
<p>（✗）：请一些<b><u>运动人</u></b>，来教老人一些简单的运动。</p>
<p>（✓）：请一些<b><u>教练/经常运动的人</u></b>，来教老人一些简单的运动。</p>

<p>例子12：</p>
<p>（✗）：他们为了<b><u>不要浪费时间和很忙碌</u></b>，就选择到快餐店吃快餐。</p>
<p>（✓）：他们<b><u>工作忙碌，为了不浪费时间</u></b>，就选择到快餐店吃快餐。</p>

<p>例子13：</p>
<p>（✗）：我<b><u>不可以看和听老师写的和说的</u></b>。</p>
<p>（✓）：我<b><u>看不清楚老师在白板上写的，也听不清楚老师所说的</u></b>。</p>
`
                },

                {
                    title: "关联词的运用",
                    titleEn: "Connective Words",
                    explanationEn: "Students do not need to memorise the grammar categories deeply. Focus on matching the connective words with the example sentence patterns.",
                    contentHtml: `
<p><b><u>关联词的运用</u></b></p>
<p>按：学生不需要理解句子的类型，只要参考关联词和例句就可以了。</p>

<table class="error-table">
<tr><th>类型</th><th>关联词语</th><th>例句</th></tr>
<tr><td>并列</td><td>也 / 又 / 一面……一面 / 既……也</td><td>姐姐喜欢跳舞，妹妹也喜欢跳舞。<br>他学法语，又学韩语。<br>我们一面听课，一面做笔记。<br>它既不需要谁来施肥，也不需要谁来灌溉。</td></tr>
<tr><td>承接</td><td>就 / 一……就 / 然后 / 接着 / 于是 / 才 / 起先……后来</td><td>爷爷一生气，血压就升高了。<br>小明仔细看了一遍，然后/接着一字不漏地把句子默写出来。<br>上课钟声响了，他才急匆匆地冲进教室。<br>他起先有些紧张，后来就慢慢适应了。</td></tr>
<tr><td>选择</td><td>或者 / 不是……就是 / 要么……要么</td><td>你或者进修，或者努力突破自己，千万不可满足于现状。<br>他不是在图书馆，就是在咖啡馆。<br>我们要么去参观用餐，要么在家里吃饭，大家赶快做个决定！</td></tr>
<tr><td>递进</td><td>不但……而且 / 不但……反而</td><td>领导者不但需要有见识，还要说到做到。<br>这篇作文不但内容充实，而且表达生动。<br>他不但没有感激我的帮忙，反而说我多管闲事。</td></tr>
<tr><td>转折</td><td>但 / 却 / 尽管……还是 / 虽然……但是</td><td>他年纪虽小，但说话却很有条理。<br>尽管工作忙碌，他还是坚持抽出时间陪伴家人。<br>虽然这是我出生的地方，但是我已经十几年没回来了。</td></tr>
<tr><td>因果</td><td>因为……所以 / 由于……因此 / 既然……就 / 由于……才</td><td>因为淋了雨，所以她感冒了。<br>由于团队发挥了高度的合作精神，因此小组作业比预期早完成了。<br>你既然答应了人家，就不应该轻易反悔。<br>由于长期沉迷电子游戏，才导致他近视加深。</td></tr>
<tr><td>假设</td><td>如果……就 / 要是……就 / 就算……还是 / 要不是</td><td>如果妈妈不同意，我就不能参加这次的比赛了。<br>要是你有心改过，那就该认真检讨自己。<br>就算他不肯听我的解释，我还是要当面向他解释清楚。<br>要不是你把事情说出去，他也不会知道真相。</td></tr>
<tr><td>条件</td><td>只有……才 / 只要……就 / 无论……都 / 任凭……都</td><td>只有不断地努力，才有成功的一天。<br>只要你答应帮忙，这个计划就有希望。<br>无论我怎么解释，他都不肯接受我的道歉。<br>任凭你怎么游说，我们的决心都不会动摇。</td></tr>
</table>

<p><b><u>常见错误</u></b></p>

<p>例子1：</p>
<p>（✗）：他们也不感谢他，<b><u>而说</u></b>老师这样做在浪费学生的时间。</p>
<p>（✓）：他们<b><u>不但不感谢他，反而说</u></b>老师这样做是在浪费学生的时间。</p>

<p>例子2：</p>
<p>（✗）：假如我有特异功能，我希望能过目不忘，<b><u>所以</u></b>不用担心考试了。</p>
<p>（✓）：假如我有特异功能，我希望能过目不忘，<b><u>就</u></b>不用担心考试了。</p>

<p>例子3：</p>
<p>（✗）：<b><u>如果</u></b>没有时间，我们要抽出时间来运动。</p>
<p>（✓）：<b><u>就算</u></b>没有时间，我们<b><u>也</u></b>要抽出时间来运动。</p>

<p>例子4：</p>
<p>（✗）：<b><u>如果</u></b>我努力用功，就可以得到我要的。</p>
<p>（✓）：<b><u>只要</u></b>我努力用功，就可以得到我要的。</p>

<p>例子5：</p>
<p>（✗）：你<b><u>不但</u></b>看课本，<b><u>反而</u></b>跟老师讨论问题。</p>
<p>（✓）：你<b><u>不只</u></b>看课本，<b><u>还要</u></b>跟老师讨论问题。</p>

<p>例子6：关联词搭配不当</p>
<p>（✗）：我们去学校是因为要学习，如果不尊敬老师，老师不可以好好教课，然后我们不能学习。</p>
<p>（✓）：我们去学校是为了学习，如果不尊敬老师，老师不可以好好教课，那么我们就无法学习。</p>
`
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
                    explanationEn: "Use 把 when a definite object changes position or state because of an action. Do not overuse it.",
                    contentHtml: `
<p><b><u>“把”字句</u></b></p>

<p>“把”字句的类型，常见的有：</p>
<p>1. 他把<b><u>书包</u></b>放在桌子上。</p>
<p>2. 他把<b><u>作业</u></b>发给大家。</p>
<p>3. 他把<b><u>水瓶</u></b>捡起来扔进垃圾桶里。</p>
<p>4. 他把<b><u>黑板</u></b>擦干净了。</p>
<p>5. 他把<b><u>那句话</u></b>告诉了老师。</p>
<p>6. 他把<b><u>肉</u></b>切成片。</p>

<p>例子1：【表示文具因动作而发生位置的转移】</p>
<p>（✗）：我就<b><u>放我的文具在书包里</u></b>。</p>
<p>（✓）：我就<b><u>把文具放进书包</u></b>。</p>

<p>例子2：【表示手因动作而发生位置的转移】</p>
<p>（✗）：我以为他会骂我，可是他只<b><u>放他们的手在我的肩膀</u></b>。</p>
<p>（✓）：我以为他会骂我，可是他只<b><u>把手轻轻地放在我的肩上</u></b>。</p>

<p>例子3：【成分残缺+表示某确定的事物因动作发生某种变化】</p>
<p>（✗）：同学们都回家了，老师偏偏<b><u>留我</u></b>。</p>
<p>（✓）：同学们都回家了，老师偏偏<b><u>把我留下来</u></b>。</p>

<p>例子4：（过度使用，这里不需要用“把”）</p>
<p>（✗）：希望我提出的建议能<b><u>把这件事变得更好</u></b>。</p>
<p>（✓）：希望我提出的建议能<b><u>解决现有的问题</u></b>。</p>

<p>例子5：（过度使用，这里不需要用“把”）</p>
<p>（✗）：我<b><u>把我疲惫的身躯拖进课室</u></b>。</p>
<p>（✓）：我<b><u>拖着疲惫的身躯走进课室</u></b>。</p>
`
                },

                {
                    title: "“被”字句",
                    titleEn: "被 Sentence",
                    explanationEn: "Do not overuse 被 because of English passive voice. Active Chinese sentences are often more natural.",
                    contentHtml: `
<p><b><u>被字句</u></b></p>

<p>“被”的格式是 Y 被 X 怎么样。由于受英语影响，我们“被”字用得太多，这里主要提醒同学们注意这种情况。</p>

<p>例子1：</p>
<p>（✗）：他们<b><u>被朋友介绍</u></b>去吃有名的快餐。</p>
<p>（✓）：<b><u>朋友介绍他们</u></b>去吃有名的快餐。</p>

<p>例子2：</p>
<p>（✗）：这些观念从小<b><u>被灌输到小朋友身上</u></b>。</p>
<p>（✓）：<b><u>家长从小就给小朋友灌输这些观念</u></b>。</p>

<p>例子3：</p>
<p>（✗）：当她知道别人在这样做，她会<b><u>被这个看法鼓励到</u></b>。</p>
<p>（✓）：当她知道别人也这样做，她会<b><u>受到鼓舞</u></b>。</p>

<p>例子4：【“克服”是有完结义的双音节词，不宜用“被”】</p>
<p>（✗）：困难已经<b><u>被克服了</u></b>。</p>
<p>（✓）：困难已经<b><u>克服了</u></b>。</p>

<p>例子5：</p>
<p>（✗）：他的书<b><u>被放在桌子上了</u></b>。</p>
<p>（✓）：他的书<b><u>放在桌子上了</u></b>。</p>

<p>例子6：【含有“我”的被动性，说明“我”受到怎样的遭遇】</p>
<p>（✗）：<b><u>他骂了我最多</u></b>，是因为他知道我对数学<b><u>要最多的帮忙</u></b>。</p>
<p>（✓）：<b><u>我被他骂的次数最多</u></b>，因为他知道我的数学<b><u>最需要帮助</u></b>。</p>
`
                },

                {
                    title: "欧化问题",
                    titleEn: "English-Influenced Chinese",
                    explanationEn: "Avoid word-for-word translation from English. Use natural Chinese expressions.",
                    contentHtml: `
<p><b><u>欧化问题</u></b></p>

<p>例子1：</p>
<p>（✗）：每当老师<b><u>有困难做东西时</u></b>，我们应该伸出援手。</p>
<p>（✓）：每当老师<b><u>遇到困难时</u></b>，我们应该伸出援手。</p>

<p>例子2：</p>
<p>（✗）：他们很忙，所以不能<b><u>找时间去做他们的运动</u></b>。</p>
<p>（✓）：他们很忙，所以<b><u>没有时间去运动</u></b>。</p>

<p>例子3：</p>
<p>（✗）：我认为你应该跟你妈妈<b><u>坐下就告诉她</u></b>用太多塑料袋对地球不好。</p>
<p>（✓）：我认为你应该<b><u>告诉你妈妈</u></b>用太多塑料袋对地球有害。</p>

<p>例子4：</p>
<p>（✗）：我这才明白为什么我们不应该<b><u>从别人的表现觉得他们是那样</u></b>。</p>
<p>（✓）：我这才明白为什么我们不应该<b><u>以表面判断他人</u></b>。</p>

<p>例子5：</p>
<p>（✗）：希望这些会<b><u>帮助你在考试</u></b>。</p>
<p>（✓）：希望这些会<b><u>对你的考试有帮助</u></b>。</p>
`
                }
            ]
        },

        {
            id: "typos",
            title: "⚫ 常见错别字",
            titleEn: "Commonly Confused Characters",
            reminderZh: "请点击红色卡片查看正确表达和说明。",
            reminderEn: "Tap the red cards to see the correct expression and explanation.",
            items: [
                {
                    title: "常见错别字快查",
                    titleEn: "Quick Reference for Commonly Confused Characters",
                    explanationEn: "These are commonly confused characters. Read the examples carefully.",
                    contentHtml: `
<p><b><u>常见错别字</u></b></p>

<table class="error-table">
<tr><th>组别</th><th>字</th><th>例子</th></tr>

<tr><td>1</td><td>拔 bá</td><td>拔除、拔牙、拔刀相助、出类拔萃</td></tr>
<tr><td></td><td>拨 bō</td><td>拨款、拨出时间</td></tr>

<tr><td>2</td><td>薄 bó</td><td>微薄、刻薄、薄弱、薄荷、薄饼</td></tr>
<tr><td></td><td>簿 bù</td><td>簿子、电话簿、练习簿、记事簿</td></tr>

<tr><td>3</td><td>才 cái</td><td>才能、成才、才华、天生我才必有用、人才、多才多艺</td></tr>
<tr><td></td><td>材 cái</td><td>木材、材料、教材、器材、题材、因材施教</td></tr>

<tr><td>4</td><td>拆 chāi</td><td>拆掉、拆除、拆散、拆信、拆开、拆礼物</td></tr>
<tr><td></td><td>折 zhé</td><td>折磨、折扣、百折不挠、折断</td></tr>

<tr><td>5</td><td>处 chù / chǔ</td><td>到处、好处、益处、停车处、处罚、处理、处置</td></tr>
<tr><td></td><td>外 wài</td><td>外面、外表、此外、除此之外、另外</td></tr>

<tr><td>6</td><td>此 cǐ</td><td>因此、此外、由此可见、多此一举</td></tr>
<tr><td></td><td>些 xiē</td><td>这些、一些、多些、那些、有些</td></tr>

<tr><td>7</td><td>错 cuò</td><td>错误、错怪、错过、错觉、过错、一错再错、知错能改</td></tr>
<tr><td></td><td>措 cuò</td><td>不知所措、措手不及、惊慌失措、措施</td></tr>

<tr><td>8</td><td>带 dài</td><td>领带、一带、带领、带队、携带、拖泥带水、忘了带</td></tr>
<tr><td></td><td>代 dài</td><td>代表、代替、取代、代沟、代价、代劳</td></tr>
<tr><td></td><td>戴 dài</td><td>戴帽子、戴眼镜、爱戴</td></tr>

<tr><td>9</td><td>但 dàn</td><td>但是、不但、但愿</td></tr>
<tr><td></td><td>担 dān</td><td>担心、负担、分担、担忧、承担</td></tr>
<tr><td></td><td>旦 dàn</td><td>一旦、危在旦夕、元旦、通宵达旦</td></tr>
<tr><td></td><td>当 dāng</td><td>当然、当天、应当、当年、当时、当我正走进来</td></tr>

<tr><td>10</td><td>的 de</td><td>他的、你的、幸福的生活、美好的愿望、目的地、的确</td></tr>
<tr><td></td><td>得 de</td><td>吃得、玩得、说得非常好、做得对、觉得</td></tr>

<tr><td>11</td><td>发 fā / fà</td><td>发展、发现、发奋图强、分发、发扬光大、头发、发型</td></tr>
<tr><td></td><td>法 fǎ</td><td>无法、办法、没法、设法、无法无天、法律</td></tr>

<tr><td>12</td><td>分 fēn / fèn</td><td>分数、分别、分享、分析、恐怖分子、分量、分外、本分、过分、水分</td></tr>
<tr><td></td><td>份 fèn</td><td>年份、一份杂志、股份</td></tr>

<tr><td>13</td><td>该 gāi</td><td>应该、活该、该是、该当、本该</td></tr>
<tr><td></td><td>刻 kè</td><td>立刻、深刻、刻骨铭心、刻苦耐劳、时刻、刻不容缓、刻薄、刻板、刻意</td></tr>

<tr><td>14</td><td>跟 gēn</td><td>跟着、跟踪、跟随、跟前</td></tr>
<tr><td></td><td>根 gēn</td><td>根本</td></tr>
<tr><td></td><td>更 gèng</td><td>更好、更加、更进一步、更上一层楼</td></tr>

<tr><td>15</td><td>工 gōng</td><td>工作、工厂、工人、工程、工具、字体工整、加工</td></tr>
<tr><td></td><td>功 gōng</td><td>功课、用功、成功、功夫、功劳、功用、大功告成、功亏一篑</td></tr>
<tr><td></td><td>公 gōng</td><td>办公室、公园、公共场所</td></tr>

<tr><td>16</td><td>后 hòu</td><td>后面、后来、后果、然后、后悔、后天、一个小时后</td></tr>
<tr><td></td><td>候 hòu</td><td>时候、小时候、等候、候补、气候、候选人</td></tr>

<tr><td>17</td><td>即 jí</td><td>即使、即便、即刻、即兴（写作）</td></tr>
<tr><td></td><td>既 jì</td><td>既然、既而</td></tr>

<tr><td>18</td><td>己 jǐ</td><td>自己、舍己为人</td></tr>
<tr><td></td><td>已 yǐ</td><td>已经、一个而已</td></tr>

<tr><td>19</td><td>蓝 lán</td><td>蓝色、蓝天、蓝图、蔚蓝、青出于蓝</td></tr>
<tr><td></td><td>篮 lán</td><td>篮球、篮子、投篮、花篮、竹篮</td></tr>

<tr><td>20</td><td>今 jīn</td><td>今天、今日、今后</td></tr>
<tr><td></td><td>令 lìng</td><td>令人不满、命令</td></tr>
<tr><td></td><td>另 lìng</td><td>另外、另一点、另眼相看、另一条路</td></tr>

<tr><td>21</td><td>买 mǎi</td><td>购买、买进</td></tr>
<tr><td></td><td>卖 mài</td><td>出卖、售卖、卖出去、倚老卖老</td></tr>
<tr><td></td><td>读 dú</td><td>读书、阅读</td></tr>

<tr><td>22</td><td>没 méi / mò</td><td>没有、没法、没空、没了、没精打采、出没</td></tr>
<tr><td></td><td>每 měi</td><td>每天、每次、每当</td></tr>

<tr><td>23</td><td>那 nà</td><td>那天、那样、那时、那是、那里、那些、那个、那也好</td></tr>
<tr><td></td><td>哪 nǎ</td><td>哪天？哪里？哪会？</td></tr>

<tr><td>24</td><td>气 qì</td><td>生气、气球、气体、气喘、气度、气氛、气功、气恼、气馁、气味、煤气、力气、天气、勇气、朝气、气急败坏</td></tr>
<tr><td></td><td>弃 qì</td><td>放弃、抛弃、废弃、遗弃、弃权、自暴自弃</td></tr>

<tr><td>25</td><td>让 ràng</td><td>让座、让位、让开、让他走</td></tr>
<tr><td></td><td>认 rèn</td><td>认为、认真、认识、认错、认得、否认、认输</td></tr>

<tr><td>26</td><td>身 shēn</td><td>身为、身体、身材、身高、身心、身孕、身临其境、身体力行、言传身教、感同身受</td></tr>
<tr><td></td><td>生 shēng</td><td>人生、生病、生动、生活、生硬、生意、生长、陌生、谋生、产生、发生、自力更生、娇生惯养</td></tr>

<tr><td>27</td><td>时 shí</td><td>时候、那时、时常、时代、时光、时间、时尚、时钟</td></tr>
<tr><td></td><td>实 shí</td><td>其实、实话、实际、实践、实力、实现、实验、老实、真实</td></tr>
<tr><td></td><td>始 shǐ</td><td>开始、始终</td></tr>

<tr><td>28</td><td>通 tōng</td><td>通常、普通、通过、通知、通告、四通八达</td></tr>
<tr><td></td><td>同 tóng</td><td>同学、同窗、同班、同等、同情、同事、共同、一同、陪同、同心协力、有福同享，有难同当</td></tr>

<tr><td>29</td><td>相 xiāng</td><td>相似、相信、相识、相处、互相、好言相劝、不相上下、自相矛盾、实不相瞒</td></tr>
<tr><td></td><td>象 xiàng</td><td>大象、想象、气象、象棋、象牙、象征、包罗万象</td></tr>
<tr><td></td><td>像 xiàng</td><td>相像、好像、偶像、佛像、不像话</td></tr>
<tr><td></td><td>向 xiàng</td><td>向往、向你说、向左走、一向来</td></tr>

<tr><td>30</td><td>心 xīn</td><td>心血、心理、心事、心态、心爱、心灵、心情、心虚、心平气和、心服口服、心不在焉、心满意足、一心一意</td></tr>
<tr><td></td><td>辛 xīn</td><td>辛苦、辛酸、千辛万苦、辛辣、辛勤、艰辛</td></tr>
<tr><td></td><td>幸 xìng</td><td>幸福、幸运、不幸、幸好、幸亏、侥幸、荣幸、幸灾乐祸</td></tr>

<tr><td>31</td><td>原 yuán</td><td>原因、原来、原本、原谅、平原、高原</td></tr>
<tr><td></td><td>愿 yuàn</td><td>愿意、愿望、志愿、自愿、情愿、许愿</td></tr>

<tr><td>32</td><td>引 yǐn</td><td>引起、引发、指引、引导</td></tr>
<tr><td></td><td>印 yìn</td><td>印象（impression）、影印</td></tr>
<tr><td></td><td>影 yǐng</td><td>影响（effect）、阴影</td></tr>

<tr><td>33</td><td>在 zài</td><td>在这里、现在、在籍学生、在哪里</td></tr>
<tr><td></td><td>再 zài</td><td>再见、再次、再来一次、别再这样、再接再厉</td></tr>

<tr><td>34</td><td>造 zào</td><td>造成、制造、造谣</td></tr>
<tr><td></td><td>照 zhào</td><td>照常、照顾、照料、依照、照片</td></tr>

<tr><td>35</td><td>这 zhè</td><td>这个、这里、这样、这次、这本书、这么难</td></tr>
<tr><td></td><td>着 zhe</td><td>看着、听着、站着、拿着、走着【VERB+着】</td></tr>
<tr><td></td><td>怎 zěn</td><td>怎么办？怎样？</td></tr>

<tr><td>36</td><td>只 zhī / zhǐ</td><td>一只（鸡）、不只、只好、只要、只管、只是</td></tr>
<tr><td></td><td>直 zhí</td><td>一直（走）、简直、直接、直播、正直、笔直、理直气壮</td></tr>

<tr><td>37</td><td>做 zuò</td><td>做功课、做工、做事、做梦、做人、做完了、小题大做</td></tr>
<tr><td></td><td>作 zuò</td><td>工作、作业、作用、合作、作弊、作怪、作者、作文、作家、杰作、振作、写作、装模作样、以身作则</td></tr>
</table>
`
                }
            ]
        }
    ]
};
