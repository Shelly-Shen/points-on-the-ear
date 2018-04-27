var timer;
var link;
var mods;
var allData = [];
window.onload = function() {
    data1 = [{
            systemId: 1,
            systemName: "皮肤病",
            diseaseCategoryList: [
                { diseaseCategoryId: 1, diseaseCategoryName: "湿疹" },
                { diseaseCategoryId: 2, diseaseCategoryName: "荨麻疹" },
                { diseaseCategoryId: 3, diseaseCategoryName: "神经性皮炎(牛皮癣)" },
                { diseaseCategoryId: 4, diseaseCategoryName: "剥脱性皮炎 " },
                { diseaseCategoryId: 5, diseaseCategoryName: "白塞综合征（狐惑） " }
            ]
        },
        {
            systemId: 2,
            systemName: "外科疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 6, diseaseCategoryName: "颈部淋巴结结核（瘰疬）" },
                { diseaseCategoryId: 7, diseaseCategoryName: "脉管炎（脱疽）" },
                { diseaseCategoryId: 8, diseaseCategoryName: "痈" },
                { diseaseCategoryId: 9, diseaseCategoryName: "蜂窝织炎" },
                { diseaseCategoryId: 10, diseaseCategoryName: "丹毒" },
                { diseaseCategoryId: 11, diseaseCategoryName: "疖疮" },
                {
                    diseaseCategoryId: 12,
                    diseaseCategoryName: "枕骨下硬结性毛囊炎（发际疮）"
                },
                { diseaseCategoryId: 13, diseaseCategoryName: "腋臭" },
                { diseaseCategoryId: 14, diseaseCategoryName: "冻疮" },
                { diseaseCategoryId: 15, diseaseCategoryName: "扭挫伤" },
                { diseaseCategoryId: 16, diseaseCategoryName: "疣" },
                { diseaseCategoryId: 17, diseaseCategoryName: "灰指甲" },
                { diseaseCategoryId: 18, diseaseCategoryName: "静脉曲张" }
            ]
        },
        {
            systemId: 3,
            systemName: "妇产科疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 19, diseaseCategoryName: "乳腺炎" },
                { diseaseCategoryId: 20, diseaseCategoryName: "不孕症" },
                { diseaseCategoryId: 21, diseaseCategoryName: "盆腔炎" },
                { diseaseCategoryId: 22, diseaseCategoryName: "子宫脱垂" },
                { diseaseCategoryId: 23, diseaseCategoryName: "乳汁过少" },
                { diseaseCategoryId: 24, diseaseCategoryName: "子宫出血（崩漏）" }
            ]
        },
        {
            systemId: 4,
            systemName: "运动系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 25, diseaseCategoryName: "关节炎" },
                { diseaseCategoryId: 26, diseaseCategoryName: "腰椎后突" },
                { diseaseCategoryId: 27, diseaseCategoryName: "痉挛性斜颈" },
                { diseaseCategoryId: 28, diseaseCategoryName: "骨结核" }
            ]
        },
        {
            systemId: 5,
            systemName: "消化系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 29, diseaseCategoryName: "胃及十二指肠溃疡" },
                { diseaseCategoryId: 30, diseaseCategoryName: "肠炎、痢疾" },
                { diseaseCategoryId: 31, diseaseCategoryName: "阑尾炎" },
                { diseaseCategoryId: 32, diseaseCategoryName: "肠痉挛" },
                { diseaseCategoryId: 33, diseaseCategoryName: "肝炎" },
                { diseaseCategoryId: 34, diseaseCategoryName: "肝硬化" },
                { diseaseCategoryId: 35, diseaseCategoryName: "胆囊炎" }
            ]
        },
        {
            systemId: 6,
            systemName: "呼吸系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 36, diseaseCategoryName: "感冒" },
                {
                    diseaseCategoryId: 37,
                    diseaseCategoryName: "急、慢性咽炎（兼喉炎）"
                },
                { diseaseCategoryId: 38, diseaseCategoryName: "急、慢性扁桃体炎" },
                { diseaseCategoryId: 39, diseaseCategoryName: "肺炎" },
                { diseaseCategoryId: 40, diseaseCategoryName: "支气管炎（兼哮喘）" },
                { diseaseCategoryId: 41, diseaseCategoryName: "肺结核" },
                { diseaseCategoryId: 42, diseaseCategoryName: "胸膜炎、胸水" },
                { diseaseCategoryId: 43, diseaseCategoryName: "腮腺炎" }
            ]
        },
        {
            systemId: 7,
            systemName: "循环系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 44, diseaseCategoryName: "风湿性心脏病 " },
                { diseaseCategoryId: 45, diseaseCategoryName: "冠心病" },
                { diseaseCategoryId: 46, diseaseCategoryName: "高血压" }
            ]
        },
        {
            systemId: 8,
            systemName: "血液系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 47, diseaseCategoryName: "再生障碍性贫血" }
            ]
        },
        {
            systemId: 9,
            systemName: "五官科及口腔科疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 48, diseaseCategoryName: "牙痛" },
                { diseaseCategoryId: 49, diseaseCategoryName: "眼科病" },
                { diseaseCategoryId: 50, diseaseCategoryName: "麦粒肿" },
                { diseaseCategoryId: 51, diseaseCategoryName: "泪囊炎" }
            ]
        },
        {
            systemId: 10,
            systemName: "泌尿与生殖系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 52, diseaseCategoryName: "肾炎" },
                { diseaseCategoryId: 53, diseaseCategoryName: "膀胱炎" },
                { diseaseCategoryId: 54, diseaseCategoryName: "遗尿症" },
                { diseaseCategoryId: 55, diseaseCategoryName: "阳痿、早泄、遗精" },
                { diseaseCategoryId: 56, diseaseCategoryName: "前列腺炎" },
                { diseaseCategoryId: 57, diseaseCategoryName: "睾丸炎 " }
            ]
        },
        {
            systemId: 11,
            systemName: "神经与精神系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 58, diseaseCategoryName: "神经衰弱" },
                { diseaseCategoryId: 59, diseaseCategoryName: "盗汗" },
                { diseaseCategoryId: 60, diseaseCategoryName: "癫痫" },
                { diseaseCategoryId: 61, diseaseCategoryName: "头痛" },
                { diseaseCategoryId: 62, diseaseCategoryName: "三叉神经痛" },
                { diseaseCategoryId: 63, diseaseCategoryName: "面神经麻痹" },
                { diseaseCategoryId: 64, diseaseCategoryName: "内耳眩晕症" },
                { diseaseCategoryId: 65, diseaseCategoryName: "脑卒中（半身不遂）" }
            ]
        },
        {
            systemId: 12,
            systemName: "内分泌和代谢系统疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 66, diseaseCategoryName: "甲状腺功能亢进" },
                { diseaseCategoryId: 67, diseaseCategoryName: "糖尿病" }
            ]
        },
        {
            systemId: 13,
            systemName: "儿科疾病",
            diseaseCategoryList: [
                { diseaseCategoryId: 68, diseaseCategoryName: "小儿麻痹症" },
                { diseaseCategoryId: 69, diseaseCategoryName: "小儿惊厥" },
                { diseaseCategoryId: 70, diseaseCategoryName: "水痘" }
            ]
        },
        {
            systemId: 13,
            systemName: "十四经腧穴及经外奇穴",
            diseaseCategoryList: [
                { diseaseCategoryId: 71, diseaseCategoryName: "十四经腧穴及经外奇穴" }
            ]
        }
    ];
    var arr = [];
    var mod = [];
    var num = 0;
    timer = data1.length;
    for (var i = 0; i < data1.length; i++) {
        arr.push(data1[i].systemName);
    }
    for (var i = 0; i < timer; i++) {
        $(".section1").append(
            '<dl class="am-accordion-item"><dt class="am-accordion-title">' +
            arr[i] +
            '</dt><dd class="am-accordion-bd am-collapse"><div class="am-accordion-content"><div class="am-list-news-bd mes"></div></div></dd></dl>'
        );
        num++;
        for (var j = 0; j < data1[i].diseaseCategoryList.length; j++) {
            $(".mes")
                .eq(i)
                .append(
                    '<li  class="am-btn am-btn-danger" data-am-modal="{target:' +
                    "'#" +
                    data1[i].diseaseCategoryList[j].diseaseCategoryId +
                    "'" +
                    '}">' +
                    data1[i].diseaseCategoryList[j].diseaseCategoryName +
                    '</li><div class="am-popup" id="' +
                    data1[i].diseaseCategoryList[j].diseaseCategoryId +
                    '"><div class="am-popup-inner"><div class="am-popup-hd"><h4 class="am-popup-title">' +
                    data1[i].diseaseCategoryList[j].diseaseCategoryName +
                    '</h4><span data-am-modal-close class="am-close">&times;</span></div><div class="am-popup-bd mes-html"></div></div></div>'
                );
        }
        var flag = false;
    }

    var a = document.getElementsByTagName("li");
    for (var i = 0; i < a.length; i++) {
        a[i].index = i;

        a[i].onclick = function() {
            var index = this.index + 1;
            $("#" + index)
                .find(".mes-html")
                .load("./files/" + index + ".html");
        };
    }
};