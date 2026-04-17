const p3Data = {
    title: "卷三 口试与听力练习",

    // 口试练习
    oralPractice: {
        title: "口试练习",
        topics: [
            { year: "2018", topic: "潜能", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/da78c201-9b03-41b8-a8b7-d3beb41acc7a/cover" },
            { year: "2018", topic: "骨痛热症", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/3eb8c629-aa6d-47b6-b5f3-bbaa1ce297e3/cover" },
            { year: "2018", topic: "安全", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/a82807fd-13f2-4dd7-9779-2befc9320ca7/cover" },
            { year: "2018", topic: "涂鸦", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/20ae8253-263b-4eee-a594-fbec622c0de3/cover" },
            { year: "2019", topic: "守时", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/a61edc1e-374b-458d-9632-c38854327eb7/cover" },
            { year: "2019", topic: "快餐店", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/6a89789d-7e50-4e0c-8f56-7fa6a56e5719/cover" },
            { year: "2019", topic: "浪费", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/f356bd38-d811-4c9a-8b5d-bd7d31799047/cover" },
            { year: "2019", topic: "活跃乐龄", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/3d1e38b0-64af-4fbb-8fa0-b37f774c4411/cover" },
            { year: "2020", topic: "好榜样", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/f2201525-855b-46de-b472-f7ee635e0995/cover" },
            { year: "2020", topic: "假期工作", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/bb6410a8-c1d9-43a2-a081-d4c66e5aec4c/cover" },
            { year: "2020", topic: "网络欺凌", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/5c5b5aa6-e80e-4bda-805c-7f2c0ac2bd42/cover" },
            { year: "2020", topic: "河流清洁", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/f11b936c-a97f-4610-86ea-69c9350f29d1/cover" },
            { year: "2021", topic: "优雅社会", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/ed54e8db-763b-42bf-be58-0ed46492ab7c/cover" },
            { year: "2021", topic: "尊重", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/e0807223-5eea-46e4-a8b4-5caa1aa0f93b/cover" },
            { year: "2021", topic: "储蓄与分享", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/7b698316-265a-4413-99dd-dc45f53f535c/cover" },
            { year: "2021", topic: "公路安全", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/28e1c81b-b246-4d9b-8c69-6847a953d974/cover" },
            { year: "2022", topic: "滥用设施", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/af061de7-2ba0-4ee5-82ca-af98024f64cf/cover" },
            { year: "2022", topic: "运动", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/29dcf93d-f8b9-4ff7-ba56-bf0adeb3b312/cover" },
            { year: "2022", topic: "阅读", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/865a9816-633f-4a9c-863e-043117919be3/cover" },
            { year: "2022", topic: "浪费食物", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/569ac85f-0765-4f90-831d-5472ed18bf94/cover" },
            { year: "2023", topic: "用餐场所", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/52fe1b57-a52e-4ede-9cb7-d2a4fc398c7e/cover" },
            { year: "2023", topic: "组屋底层", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/dd721db0-6c4e-4637-9a7a-7acbff88f7c6/cover" },
            { year: "2023", topic: "鸽子", url: "https://vle.learning.moe.edu.sg/moe-library/lesson/view/8dc08c90-4c65-48a2-8ac4-57df7c3e3f1e/cover" }
        ]
    },

    // 听力练习
    listeningPractice: {
        title: "听力练习",
        exercises: [
            { name: "听力1", url: "https://vle.learning.moe.edu.sg/mrv/moe-library/lesson/view/10de82f4-700f-4d18-bbc5-de1171e3661c/cover" },
            { name: "听力2", url: "https://vle.learning.moe.edu.sg/mrv/moe-library/lesson/view/edcdd7c3-06b7-4676-9ffb-e6b41eb54103/cover" },
            { name: "听力3", url: "https://vle.learning.moe.edu.sg/mrv/moe-library/lesson/view/c35170c1-b195-4aba-aeca-93e185055de3/cover" }
        ]
    },

    // ===== 新增：口试课题笔记 =====
    topicNotes: {
        care: {
            title: "关怀弱势群体",
            sections: [
                {
                    title: "为什么要关怀弱势群体？",
                    content: `新加坡正面临<b>人口老化 Aging population</b>的趋势，预计到2030年，每四个人中就有一位老人。同时，社会中还有残障人士、低收入家庭和客工，他们都在为国家做出贡献。建立一个包容的社会，能增强<b>凝聚力 Cohesiveness</b>，让每个人都觉得这里是温暖的家。`
                },
                {
                    title: "重点关注群体",
                    content: `<b>乐龄人士 The Elderly：</b>随着年纪增加，老人的身体容易生病，行动不便。很多老人的子女工作忙碌，他们常感到<b>孤独 Lonely</b>，而且因为<b>不会使用新科技 Don't know how to use new technology</b>，在生活中遇到很多麻烦。<br><br>
<b>残障人士 Persons with disabilities：</b>他们在求职时可能遇到困难，或者在公共场所走动不方便。<br><br>
<b>客工 Migrant workers：</b>他们是为新加坡建设房屋和地铁的<b>幕后英雄 Unsung heroes</b>。他们离家很远，工作辛苦，需要我们的尊重和体谅。<br><br>
<b>低收入群体 Low-income groups</b>与<b>社会边缘群体 Marginalized groups：</b>例如独居老人、<b>流浪者 Homeless people</b>、单亲家庭，以及<b>前罪犯 Ex-convicts</b>。`
                },
                {
                    title: "SGHAS框架",
                    content: `<b>Society（社会）：</b>提供活动和社交机会，减少孤独。<br>
<b>Government（政府）：</b>增加<b>无障碍设施 Barrier-free facilities</b>，提供<b>津贴 Subsidy</b>。<br>
<b>Home（家庭）：</b>陪伴长辈，避免<b>孤独</b>，帮助他们使用科技。<br>
<b>Advertisement（宣传）：</b>提高公众意识，减少歧视。<br>
<b>School（学校）：</b>组织义工活动，培养同理心。`
                },
                {
                    title: "实战PEEL 1（关怀老人）",
                    content: `<b>点：</b>关怀老人是每个人的<b>责无旁贷 Bounden duty</b>。<br>
<b>解释：</b>人口老化，老人容易<b>和社会脱节</b>。<br>
<b>例子：</b>探访老人、教他们用手机。<br>
<b>总结：</b><b>老吾老以及人之老</b>，让老人更有<b>尊严 Dignity</b>。`
                }
            ]
        },

        health: {
            title: "健康生活与休闲",
            sections: [
                {
                    title: "为什么要重视健康生活？",
                    content: `现代人常有<b>久坐不动 Sedentary lifestyle</b>的问题。健康生活能提高<b>生活品质 Quality of life</b>，增强免疫力。`
                },
                {
                    title: "健康生活的重要元素",
                    content: `<b>饮食：</b>避免<b>加工食品</b>和<b>快餐</b>，多吃蔬果。<br>
<b>运动：</b>增强<b>心肺功能</b>，释放压力。<br>
<b>睡眠：</b>避免<b>熬夜</b>。<br>
<b>压力管理：</b>减少<b>焦虑</b>与<b>失眠</b>。`
                },
                {
                    title: "SGHAS框架",
                    content: `<b>社会：</b>健康活动。<br>
<b>政府：</b>建设公园连道。<br>
<b>家庭：</b>培养健康饮食。<br>
<b>宣传：</b>推广健康意识。<br>
<b>学校：</b>体育与健康教育。`
                }
            ]
        },

        school: {
            title: "校园生活与成长",
            sections: [
                {
                    title: "为什么校园生活重要？",
                    content: `校园培养<b>全面发展 All-round development</b>和<b>终身学习 Lifelong learning</b>能力。`
                },
                {
                    title: "校园生活的重要方面",
                    content: `<b>自主学习：</b>避免<b>填鸭式教学</b>，使用PLD学习。<br>
<b>潜能发展：</b>通过CCA发现<b>强项</b>。<br>
<b>假期工作：</b>培养<b>责任感</b>。<br>
<b>升学路径：</b>Full Subject Based Banding。`
                },
                {
                    title: "SGHAS框架",
                    content: `<b>社会：</b>培养<b>人际关系技巧</b>。<br>
<b>政府：</b>学习型国家政策。<br>
<b>历史：</b>转向<b>全面发展</b>。<br>
<b>体育：</b>培养<b>体育精神</b>。`
                }
            ]
        }
    }
};
