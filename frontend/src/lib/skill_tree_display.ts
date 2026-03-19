const nodeNameTranslations: Record<string, string> = {
  Strength: '力量',
  Dexterity: '敏捷',
  Intelligence: '智慧',
  Life: '生命',
  Mana: '魔力',
  Energy Shield: '能量護盾',
  Armour: '護甲',
  Evasion: '閃避',
  Block: '格擋',
  Accuracy: '命中',
  Attack Speed: '攻擊速度',
  Cast Speed: '施放速度',
  Spell Damage: '法術傷害',
  Fire Damage: '火焰傷害',
  Cold Damage: '冰冷傷害',
  Lightning Damage: '閃電傷害',
  Chaos Damage: '混沌傷害',
  Physical Damage: '物理傷害',
  Elemental Damage: '元素傷害',
  Projectile Damage: '投射物傷害',
  Melee Damage: '近戰傷害',
  Attack Damage: '攻擊傷害',
  Physical Attack Damage: '物理攻擊傷害',
  Minion Damage: '召喚物傷害',
  Minion Life: '召喚物生命',
  Life Regeneration: '生命回復',
  Life Leech: '生命偷取',
  Mana Regeneration: '魔力回復',
  Reservation Efficiency: '保留效率',
  Aura Effect: '光環效果',
  Aura Area of Effect: '光環範圍效果',
  Area of Effect: '範圍效果',
  Critical Strike Chance: '暴擊率',
  Spell Critical Strike Chance: '法術暴擊率',
  Curse Effect: '詛咒效果',
  Attack Mana Cost: '攻擊魔力消耗',
  Attack and Cast Speed: '攻擊與施放速度',
  Armour and Energy Shield: '護甲與能量護盾',
  Armour and Evasion: '護甲與閃避',
  Life and Armour: '生命與護甲',
  Life and Energy Shield: '生命與能量護盾',
  Evasion and Energy Shield: '閃避與能量護盾',
  Elemental Damage and Resistances: '元素傷害與抗性',
  Minion Damage and Life: '召喚物傷害與生命',
  Mana and Mana Regeneration: '魔力與魔力回復',
  Position Proxy: '位置代理',
  Passive Point: '天賦點',
  Basic Jewel Socket: '基礎珠寶插槽',
  Small Jewel Socket: '小型珠寶插槽',
  Medium Jewel Socket: '中型珠寶插槽',
  Large Jewel Socket: '大型珠寶插槽',
  Attack Mastery: '攻擊精通',
  Life Mastery: '生命精通',
  Mana Mastery: '魔力精通',
  Fire Mastery: '火焰精通',
  Cold Mastery: '冰冷精通',
  Lightning Mastery: '閃電精通',
  Elemental Mastery: '元素精通',
  Physical Mastery: '物理精通',
  Critical Mastery: '暴擊精通',
  Caster Mastery: '施法精通',
  Bow Mastery: '弓精通',
  Axe Mastery: '斧精通',
  Sword Mastery: '劍精通',
  Mace Mastery: '錘杖精通',
  Staff Mastery: '長杖精通',
  Shield Mastery: '盾牌精通',
  Totem Mastery: '圖騰精通',
  Curse Mastery: '詛咒精通',
  Warcry Mastery: '戰吼精通',
  Banner Mastery: '戰旗精通',
  Mine Mastery: '地雷精通',
  Flask Mastery: '藥劑精通',
  Reservation Mastery: '保留精通',
  Armour Mastery: '護甲精通',
  Evasion Mastery: '閃避精通',
  Energy Shield Mastery: '能量護盾精通',
  Leech Mastery: '偷取精通',
  Bleeding Mastery: '流血精通',
  Impale Mastery: '穿刺精通',
  Recovery Mastery: '回復精通',
  Protection Mastery: '防禦精通',
  Tincture Mastery: '酊劑精通',
  Tincture Effect: '酊劑效果',
  Slower Mana Burn: '較慢魔力燃燒',
  Slower Rage Decay: '較慢盛怒衰減',
  Rage on Hit: '擊中獲得盛怒',
  Damage Over Time Mastery: '持續傷害精通',
  Minion Offence Mastery: '召喚物攻擊精通',
  Minion Defence Mastery: '召喚物防禦精通',
  Block Mastery: '格擋精通',
  Warcry Buff Effect: '戰吼增益效果',
  Warcry Duration: '戰吼持續時間',
  Banner Valour Gained: '戰旗英勇值獲得',
  Spell Suppression: '法術傷害壓制'
};

const termTranslations: Array<[string, string]> = [
  ['Mana Reservation Efficiency of Skills', '技能魔力保留效率'],
  ['Chance to Block Attack Damage', '攻擊傷害格擋率'],
  ['Chance to Block Spell Damage', '法術傷害格擋率'],
  ['Chance to Suppress Spell Damage', '法術傷害壓制率'],
  ['Critical Strike Multiplier', '暴擊加成'],
  ['Critical Strike Chance', '暴擊率'],
  ['Spell Critical Strike Chance', '法術暴擊率'],
  ['Damage Over Time Multiplier', '持續傷害加成'],
  ['Damage with Ailments', '異常狀態傷害'],
  ['maximum Energy Shield', '最大能量護盾'],
  ['Energy Shield', '能量護盾'],
  ['maximum Mana', '最大魔力'],
  ['maximum Life', '最大生命'],
  ['Mana Regeneration Rate', '魔力回復速度'],
  ['Life Regeneration Rate', '生命回復速度'],
  ['Global Accuracy Rating', '全域命中值'],
  ['Accuracy Rating', '命中值'],
  ['Evasion Rating', '閃避值'],
  ['Attack Speed', '攻擊速度'],
  ['Cast Speed', '施放速度'],
  ['Spell Damage', '法術傷害'],
  ['Projectile Damage', '投射物傷害'],
  ['Melee Physical Damage', '近戰物理傷害'],
  ['Physical Damage', '物理傷害'],
  ['Fire Damage', '火焰傷害'],
  ['Cold Damage', '冰冷傷害'],
  ['Lightning Damage', '閃電傷害'],
  ['Chaos Damage', '混沌傷害'],
  ['Elemental Damage', '元素傷害'],
  ['Area of Effect', '範圍效果'],
  ['Area Damage', '範圍傷害'],
  ['Aura Skills', '光環技能'],
  ['Non-Curse Auras', '非詛咒光環'],
  ['your Curses', '你的詛咒'],
  ['Curse Duration', '詛咒持續時間'],
  ['Curse Effect', '詛咒效果'],
  ['Movement Speed', '移動速度'],
  ['Minions', '召喚物'],
  ['Armour', '護甲'],
  ['Attacks', '攻擊'],
  ['Attack', '攻擊'],
  ['Leeched as Life', '偷取生命'],
  ['Leeched as Mana', '偷取魔力'],
  ['with Bows', '使用弓時'],
  ['with Wands', '使用法杖時'],
  ['with Swords', '使用劍時'],
  ['with Axes', '使用斧時'],
  ['with Maces or Sceptres', '使用錘或權杖時'],
  ['with Two Handed Melee Weapons', '使用雙手近戰武器時'],
  ['while holding a Shield', '持盾時'],
  ['while Dual Wielding', '雙持時'],
  ['per Frenzy Charge', '每個狂怒球'],
  ['per Endurance Charge', '每個耐力球'],
  ['per Power Charge', '每個暴擊球'],
  ['Wild Wisps found', '發現的狂野微光'],
  ['Vivid Wisps found', '發現的鮮明微光'],
  ['Primal Wisps found', '發現的原始微光'],
  ['Valour gained', '獲得的英勇值'],
  ['Tinctures applied to you', '施加於你的酊劑'],
  ['Mana Burn rate', '魔力燃燒速度'],
  ['Rage', '盛怒'],
  ['Bleeding', '流血'],
  ['Ignite', '點燃'],
  ['Shock', '感電'],
  ['Freeze', '冰凍'],
  ['Blind', '致盲'],
  ['Fortified', '護體'],
  ['Block Recovery', '格擋回復'],
  ['Life', '生命'],
  ['Mana', '魔力'],
  ['Strength', '力量'],
  ['Dexterity', '敏捷'],
  ['Intelligence', '智慧']
];

const replaceTerms = (text: string): string => {
  let output = text;
  termTranslations.forEach(([source, target]) => {
    output = output.replaceAll(source, target);
  });
  return output;
};

const regexTransforms: Array<[RegExp, (...groups: string[]) => string]> = [
  [/^\+(\d+) to (.+)$/i, (value, stat) => `+# ${replaceTerms(stat)}`.replace('#', value)],
  [/^(\d+(?:\.\d+)?)% increased (.+)$/i, (value, stat) => `增加 ${value}% ${replaceTerms(stat)}`],
  [/^(\d+(?:\.\d+)?)% reduced (.+)$/i, (value, stat) => `降低 ${value}% ${replaceTerms(stat)}`],
  [/^(\d+(?:\.\d+)?)% chance to (.+)$/i, (value, effect) => `${value}% 機率${replaceTerms(effect)}`],
  [/^Attacks have (\d+(?:\.\d+)?)% chance to (.+)$/i, (value, effect) => `攻擊有 ${value}% 機率${replaceTerms(effect)}`],
  [/^Regenerate (\d+(?:\.\d+)?)% of Life per second$/i, (value) => `每秒回復 ${value}% 生命`],
  [/^Regenerate (\d+(?:\.\d+)?)% of Mana per second$/i, (value) => `每秒回復 ${value}% 魔力`],
  [/^Minions deal (\d+(?:\.\d+)?)% increased Damage$/i, (value) => `召喚物造成 ${value}% 增加傷害`],
  [/^Minions have (\d+(?:\.\d+)?)% increased maximum Life$/i, (value) => `召喚物有 ${value}% 增加最大生命`],
  [/^Gain (\d+) Rage on Melee Hit$/i, (value) => `近戰擊中時獲得 ${value} 點盛怒`]
];

export const translateSkillTreeNodeName = (name: string | undefined): string => {
  if (!name) {
    return '';
  }

  if (nodeNameTranslations[name]) {
    return nodeNameTranslations[name];
  }

  if (name.endsWith(' Mastery')) {
    const base = name.slice(0, -' Mastery'.length);
    return `${translateSkillTreeNodeName(base)}精通`;
  }

  return name;
};

export const translateSkillTreeStatText = (text: string): string => {
  for (const [pattern, formatter] of regexTransforms) {
    const match = text.match(pattern);
    if (match) {
      return formatter(...match.slice(1));
    }
  }

  return replaceTerms(text);
};
