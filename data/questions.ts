import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "当遇到一个全新的流行趋势（如新的社交玩法、科技产品）时，你的第一反应是？",
    options: [
      { id: '1a', text: "非常兴奋，立刻去尝试并推荐给朋友", score: 1, dimension: 'openness' },
      { id: '1b', text: "稍微观望一下，如果大家都说好再尝试", score: 2, dimension: 'stability' },
      { id: '1c', text: "感觉有些疲惫，觉得现在的花样太多了", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 2,
    question: "原本计划好的周末出游因暴雨取消，你会？",
    options: [
      { id: '2a', text: "很失落，但马上找别的室内娱乐替代", score: 1, dimension: 'flexibility' },
      { id: '2b', text: "松了一口气，正好可以在家补觉休息", score: 3, dimension: 'energy' },
      { id: '2c', text: "按部就班地整理家务或阅读，享受独处", score: 2, dimension: 'stability' },
    ]
  },
  {
    id: 3,
    question: "在社交场合中，你通常扮演什么角色？",
    options: [
      { id: '3a', text: "气氛组，喜欢逗大家开心，不论熟不熟", score: 1, dimension: 'energy' },
      { id: '3b', text: "倾听者，大家愿意向我倾诉烦恼", score: 3, dimension: 'responsibility' },
      { id: '3c', text: "配合者，根据场合需要调整自己的状态", score: 2, dimension: 'flexibility' },
    ]
  },
  {
    id: 4,
    question: "关于金钱，你目前的真实想法更接近？",
    options: [
      { id: '4a', text: "钱是赚出来的，开心最重要，想买就买", score: 1, dimension: 'openness' },
      { id: '4b', text: "需要有一定的积蓄来应对未来的风险", score: 2, dimension: 'responsibility' },
      { id: '4c', text: "够用就好，物欲很低，更看重精神富足", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 5,
    question: "如果让你学习一项新技能，你的动力通常来源于？",
    options: [
      { id: '5a', text: "单纯觉得好玩、有趣、酷", score: 1, dimension: 'openness' },
      { id: '5b', text: "这项技能对我的工作或生活有实际帮助", score: 2, dimension: 'responsibility' },
      { id: '5c', text: "为了修身养性，提升内在境界", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 6,
    question: "面对朋友的迟到，你通常的忍耐极限是？",
    options: [
      { id: '6a', text: "很不耐烦，会直接发信息催促或生气", score: 1, dimension: 'flexibility' },
      { id: '6b', text: "15-30分钟吧，谁都有急事的时候", score: 2, dimension: 'flexibility' },
      { id: '6c', text: "无所谓，正好利用这段时间观察周围或发呆", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 7,
    question: "你如何看待“过年回家被催婚/催生”这种现象？",
    options: [
      { id: '7a', text: "非常反感，会激烈争辩或选择不回家", score: 1, dimension: 'openness' },
      { id: '7b', text: "理解长辈的想法，但会坚持自己的节奏", score: 2, dimension: 'responsibility' },
      { id: '7c', text: "左耳进右耳出，笑笑就过去了", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 8,
    question: "当你犯了一个比较低级的错误被指出时？",
    options: [
      { id: '8a', text: "脸红心跳，感到非常羞愧，想找地缝钻", score: 1, dimension: 'stability' },
      { id: '8b', text: "迅速承认错误，并思考如何补救", score: 2, dimension: 'responsibility' },
      { id: '8c', text: "坦然接受，人非圣贤孰能无过", score: 3, dimension: 'openness' },
    ]
  },
  {
    id: 9,
    question: "你更喜欢的电影类型是？",
    options: [
      { id: '9a', text: "科幻、动作、漫威等视觉冲击强的", score: 1, dimension: 'openness' },
      { id: '9b', text: "悬疑、剧情、传记等逻辑性强的", score: 2, dimension: 'responsibility' },
      { id: '9c', text: "纪录片、文艺片、经典老电影", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 10,
    question: "对于“梦想”这个词，你现在的感觉是？",
    options: [
      { id: '10a', text: "热血沸腾，我相信我能改变世界", score: 1, dimension: 'energy' },
      { id: '10b', text: "梦想很重要，但要建立在现实基础之上", score: 2, dimension: 'responsibility' },
      { id: '10c', text: "平平淡淡才是真，过好每一天就是梦想", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 11,
    question: "如果必须选择一种生活方式，你会选？",
    options: [
      { id: '11a', text: "在大城市打拼，充满机遇和挑战", score: 1, dimension: 'energy' },
      { id: '11b', text: "在二线城市拥有一份稳定的体制内工作", score: 2, dimension: 'responsibility' },
      { id: '11c', text: "归隐田园，种花养草，远离喧嚣", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 12,
    question: "看到比自己年轻很多的人取得巨大成功，你会？",
    options: [
      { id: '12a', text: "很羡慕，甚至有点嫉妒，觉得自己落后了", score: 1, dimension: 'openness' },
      { id: '12b', text: "分析他们成功的原因，看能不能借鉴", score: 2, dimension: 'flexibility' },
      { id: '12c', text: "由衷祝福，每个人都有自己的时区", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 13,
    question: "你现在的睡眠质量如何？",
    options: [
      { id: '13a', text: "倒头就睡，但经常熬夜玩手机", score: 1, dimension: 'energy' },
      { id: '13b', text: "偶尔失眠，主要因为工作或生活压力", score: 2, dimension: 'responsibility' },
      { id: '13c', text: "睡眠很浅，醒得很早，作息很规律", score: 3, dimension: 'energy' },
    ]
  },
  {
    id: 14,
    question: "对于“遗憾”，你的态度是？",
    options: [
      { id: '14a', text: "经常后悔，如果当时...就好了", score: 1, dimension: 'flexibility' },
      { id: '14b', text: "有些遗憾，但也是成长的代价", score: 2, dimension: 'openness' },
      { id: '14c', text: "一切都是最好的安排，没有遗憾", score: 3, dimension: 'stability' },
    ]
  },
  {
    id: 15,
    question: "测试即将结束，你现在的心情是？",
    options: [
      { id: '15a', text: "好奇，迫不及待想看结果", score: 1, dimension: 'openness' },
      { id: '15b', text: "平静，只是作为一个参考", score: 2, dimension: 'stability' },
      { id: '15c', text: "无论结果如何，我都接受真实的自己", score: 3, dimension: 'responsibility' },
    ]
  }
];