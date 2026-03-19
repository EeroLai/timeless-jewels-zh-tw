const jewelDisplayNames: Record<string, string> = {
  'Glorious Vanity': '輝煌的虛榮',
  'Lethal Pride': '致命的驕傲',
  'Brutal Restraint': '殘酷的紀律',
  'Militant Faith': '激進的信仰',
  'Elegant Hubris': '優雅的高傲'
};

const conquerorDisplayNames: Record<string, string> = {
  Xibaqua: '賽巴昆',
  Zerphi: '澤佛伊',
  Ahuana: '阿呼阿娜',
  Doryani: '多里亞尼',
  Kaom: '岡姆',
  Rakiata: '拉其塔',
  Kiloava: '基洛阿瓦',
  Akoya: '阿冦亞',
  Deshret: '迪虛瑞特',
  Balbala: '貝爾巴拉',
  Asenath: '安賽娜絲',
  Nasima: '納西瑪',
  Venarius: '維那利斯',
  Maxarius: '瑪薩里歐斯',
  Dominus: '神主',
  Avarius: '伊爾莉斯',
  Cadiro: '卡迪羅',
  Victario: '維多里奧',
  Chitus: '切特斯',
  Caspiro: '卡斯皮羅'
};

export const translateTimelessJewelName = (name: string | null | undefined): string => {
  if (!name) {
    return '';
  }

  return jewelDisplayNames[name] || name;
};

export const translateTimelessConquerorName = (name: string | null | undefined): string => {
  if (!name) {
    return '';
  }

  return conquerorDisplayNames[name] || name;
};
