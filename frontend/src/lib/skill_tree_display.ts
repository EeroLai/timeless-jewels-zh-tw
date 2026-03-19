const nodeNameTranslations: Record<string, string> = {
  'Strength': '力量',
  'Dexterity': '敏捷',
  'Intelligence': '智慧',
  'Life': '生命',
  'Mana': '魔力',
  'Energy Shield': '能量護盾',
  'Armour': '護甲',
  'Evasion': '閃避',
  'Block': '格擋',
  'Accuracy': '命中',
  'Attack Speed': '攻擊速度',
  'Cast Speed': '施放速度',
  'Spell Damage': '法術傷害',
  'Fire Damage': '火焰傷害',
  'Cold Damage': '冰冷傷害',
  'Lightning Damage': '閃電傷害',
  'Chaos Damage': '混沌傷害',
  'Physical Damage': '物理傷害',
  'Elemental Damage': '元素傷害',
  'Projectile Damage': '投射物傷害',
  'Melee Damage': '近戰傷害',
  'Attack Damage': '攻擊傷害',
  'Physical Attack Damage': '物理攻擊傷害',
  'Minion Damage': '召喚物傷害',
  'Minion Life': '召喚物生命',
  'Life Regeneration': '生命回復',
  'Life Leech': '生命偷取',
  'Mana Regeneration': '魔力回復',
  'Reservation Efficiency': '保留效率',
  'Aura Effect': '光環效果',
  'Aura Area of Effect': '光環範圍效果',
  'Area of Effect': '範圍效果',
  'Critical Strike Chance': '暴擊率',
  'Spell Critical Strike Chance': '法術暴擊率',
  'Curse Effect': '詛咒效果',
  'Attack Mana Cost': '攻擊魔力消耗',
  'Attack and Cast Speed': '攻擊與施放速度',
  'Armour and Energy Shield': '護甲與能量護盾',
  'Armour and Evasion': '護甲與閃避',
  'Life and Armour': '生命與護甲',
  'Life and Energy Shield': '生命與能量護盾',
  'Evasion and Energy Shield': '閃避與能量護盾',
  'Elemental Damage and Resistances': '元素傷害與抗性',
  'Minion Damage and Life': '召喚物傷害與生命',
  'Mana and Mana Regeneration': '魔力與魔力回復',
  'Position Proxy': '位置代理',
  'Passive Point': '天賦點',
  'Basic Jewel Socket': '基礎珠寶插槽',
  'Small Jewel Socket': '小型珠寶插槽',
  'Medium Jewel Socket': '中型珠寶插槽',
  'Large Jewel Socket': '大型珠寶插槽',
  'Attack Mastery': '攻擊精通',
  'Life Mastery': '生命精通',
  'Mana Mastery': '魔力精通',
  'Fire Mastery': '火焰精通',
  'Cold Mastery': '冰冷精通',
  'Lightning Mastery': '閃電精通',
  'Elemental Mastery': '元素精通',
  'Physical Mastery': '物理精通',
  'Critical Mastery': '暴擊精通',
  'Caster Mastery': '施法精通',
  'Bow Mastery': '弓精通',
  'Axe Mastery': '斧精通',
  'Sword Mastery': '劍精通',
  'Mace Mastery': '錘杖精通',
  'Staff Mastery': '長杖精通',
  'Shield Mastery': '盾牌精通',
  'Totem Mastery': '圖騰精通',
  'Curse Mastery': '詛咒精通',
  'Warcry Mastery': '戰吼精通',
  'Banner Mastery': '戰旗精通',
  'Mine Mastery': '地雷精通',
  'Flask Mastery': '藥劑精通',
  'Reservation Mastery': '保留精通',
  'Armour Mastery': '護甲精通',
  'Evasion Mastery': '閃避精通',
  'Energy Shield Mastery': '能量護盾精通',
  'Leech Mastery': '偷取精通',
  'Bleeding Mastery': '流血精通',
  'Impale Mastery': '穿刺精通',
  'Recovery Mastery': '回復精通',
  'Protection Mastery': '防禦精通',
  'Tincture Mastery': '酊劑精通',
  'Tincture Effect': '酊劑效果',
  'Slower Mana Burn': '較慢魔力燃燒',
  'Slower Rage Decay': '較慢盛怒衰減',
  'Rage on Hit': '擊中獲得盛怒',
  'Damage Over Time Mastery': '持續傷害精通',
  'Minion Offence Mastery': '召喚物攻擊精通',
  'Minion Defence Mastery': '召喚物防禦精通',
  'Block Mastery': '格擋精通',
  'Warcry Buff Effect': '戰吼增益效果',
  'Warcry Duration': '戰吼持續時間',
  'Banner Valour Gained': '戰旗英勇值獲得',
  'Spell Suppression': '法術傷害壓制',
  'Armour and Elemental Resistances': '護甲與元素抗性',
  'Armour and Life': '護甲與生命',
  'Armour and Life Regeneration': '護甲與生命回復',
  'Armour, Attack Speed': '護甲、攻擊速度',
  'Armour, Chaos Resistance': '護甲、混沌抗性',
  'Armour, Movement Speed': '護甲、移動速度',
  'Axe Damage': '斧傷害',
  'Axe Damage and Attack Speed': '斧傷害與攻擊速度',
  'Bleed Chance': '流血機率',
  'Bow Damage': '弓傷害',
  'Chaos Damage Over Time Multiplier': '混沌持續傷害加成',
  'Evasion and Life': '閃避與生命',
  'Evasion and Spell Suppression': '閃避與法術傷害壓制',
  'Minion Attack and Cast Speed': '召喚物攻擊與施放速度',
  'Physical and Chaos Damage': '物理與混沌傷害',
  'Primal Wisps found': '發現的原始微光',
  'Rage Mastery': '盛怒精通',
  'Staff Block': '長杖格擋',
  'Wand Damage': '法杖傷害',
  'Weapon Elemental Damage': '武器元素傷害',
  'Wild Wisps found': '發現的狂野微光',
  'Vivid Wisps found': '發現的鮮明微光'
};

const termTranslations: Array<[string, string]> = [
  ['Chance to Block Attack Damage while Dual Wielding or holding a Shield', '雙持或持盾時的攻擊傷害格擋率'],
  ['Chance to Block Attack Damage while holding a Shield', '持盾時的攻擊傷害格擋率'],
  ['Chance to Block Attack Damage while Dual Wielding', '雙持時的攻擊傷害格擋率'],
  ['Chance to Block Spell Damage while wielding a Staff', '持長杖時的法術傷害格擋率'],
  ['Chance to Block Attack Damage while wielding a Staff', '持長杖時的攻擊傷害格擋率'],
  ['Mana Reservation Efficiency of Skills', '技能魔力保留效率'],
  ['Chance to Block Attack Damage', '攻擊傷害格擋率'],
  ['Chance to Block Spell Damage', '法術傷害格擋率'],
  ['Chance to Suppress Spell Damage', '法術傷害壓制率'],
  ['Critical Strike Multiplier', '暴擊加成'],
  ['Critical Strike Chance', '暴擊率'],
  ['Spell Critical Strike Chance', '法術暴擊率'],
  ['Damage Over Time Multiplier', '持續傷害加成'],
  ['Damage Over Time with Bow Skills', '弓技能持續傷害'],
  ['Damage with Ailments', '異常狀態傷害'],
  ['effect of Non-Curse Auras from your Skills', '來自你的技能的非詛咒光環效果'],
  ['Area of Effect of Aura Skills', '光環技能範圍效果'],
  ['maximum Energy Shield', '最大能量護盾'],
  ['Energy Shield', '能量護盾'],
  ['maximum Mana', '最大魔力'],
  ['maximum Life', '最大生命'],
  ['maximum Elemental Resistances', '最大元素抗性'],
  ['Mana Regeneration Rate', '魔力回復速度'],
  ['Life Regeneration Rate', '生命回復速度'],
  ['Energy Shield Recharge Rate', '能量護盾充能速度'],
  ['Global Accuracy Rating', '全域命中值'],
  ['Accuracy Rating', '命中值'],
  ['Evasion Rating', '閃避值'],
  ['Attack Speed', '攻擊速度'],
  ['Cast Speed', '施放速度'],
  ['Skill Effect Duration', '技能效果持續時間'],
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
  ['Flask Charges gained', '藥劑充能獲得量'],
  ['Flask Effect Duration', '藥劑效果持續時間'],
  ['Flasks applied to you have', '施加於你的藥劑有'],
  ['Movement Speed', '移動速度'],
  ['Minions', '召喚物'],
  ['Armour', '護甲'],
  ['Life Leech', '生命偷取'],
  ['Mana Leech', '魔力偷取'],
  ['Life Recovery from Flasks', '來自藥劑的生命回復'],
  ['total Recovery per second from Life Leech', '每秒生命偷取總回復'],
  ['Enemy Stun Threshold', '敵人暈眩門檻'],
  ['Totem Placement speed', '圖騰放置速度'],
  ['Warcry Buff Effect', '戰吼增益效果'],
  ['Warcry Duration', '戰吼持續時間'],
  ['Valour gained', '獲得的英勇值'],
  ['Quantity of Wild Wisps found in the Viridian Wildwood', '在碧綠林野中發現的狂野微光數量'],
  ['Quantity of Vivid Wisps found in the Viridian Wildwood', '在碧綠林野中發現的鮮明微光數量'],
  ['Quantity of Primal Wisps found in the Viridian Wildwood', '在碧綠林野中發現的原始微光數量'],
  ['Two Handed Melee Weapons', '雙手近戰武器'],
  ['holding a Shield', '持盾'],
  ['Dual Wielding', '雙持'],
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
  ['while wielding a Staff', '持長杖時'],
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
  ['Stun Duration', '暈眩持續時間'],
  ['Bleed Chance', '流血機率'],
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
  [/^\+(\d+(?:\.\d+)?)% to all Elemental Resistances$/i, (value) => `+#% 全元素抗性`.replace('#', value)],
  [/^\+(\d+(?:\.\d+)?)% to all maximum Elemental Resistances$/i, (value) => `+#% 全部最大元素抗性`.replace('#', value)],
  [/^(\d+(?:\.\d+)?)% of Attack Damage Leeched as Life$/i, (value) => `${value}% 攻擊傷害偷取生命`],
  [/^(\d+(?:\.\d+)?)% increased effect of Non-Curse Auras from your Skills$/i, (value) => `增加 ${value}% 你技能的非詛咒光環效果`],
  [/^(\d+(?:\.\d+)?)% increased Quantity of (.+) found in the Viridian Wildwood$/i, (value, wisp) => `增加 ${value}% 在碧綠林野中發現的${replaceTerms(wisp)}`],
  [/^Attacks have (\d+(?:\.\d+)?)% chance to (.+)$/i, (value, effect) => `攻擊有 ${value}% 機率${replaceTerms(effect)}`],
  [/^Flasks applied to you have (\d+(?:\.\d+)?)% increased Effect$/i, (value) => `施加於你的藥劑增加 ${value}% 效果`],
  [/^Tinctures applied to you have (\d+(?:\.\d+)?)% increased Effect$/i, (value) => `施加於你的酊劑增加 ${value}% 效果`],
  [/^Tinctures applied to you have (\d+(?:\.\d+)?)% reduced Mana Burn rate$/i, (value) => `施加於你的酊劑降低 ${value}% 魔力燃燒速度`],
  [/^Regenerate (\d+(?:\.\d+)?)% of Mana per second$/i, (value) => `每秒回復 ${value}% 魔力`],
  [/^Regenerate (\d+(?:\.\d+)?)% of Life per second$/i, (value) => `每秒回復 ${value}% 生命`],
  [/^Grants (\d+) Passive Skill Point(?:s)?$/i, (value) => `給予 ${value} 點天賦點`],
  [/^Minions deal (\d+(?:\.\d+)?)% increased Damage$/i, (value) => `召喚物造成 ${value}% 增加傷害`],
  [/^Minions have (\d+(?:\.\d+)?)% increased maximum Life$/i, (value) => `召喚物有 ${value}% 增加最大生命`],
  [/^Minions have (\d+(?:\.\d+)?)% increased Attack Speed$/i, (value) => `召喚物有 ${value}% 增加攻擊速度`],
  [/^Minions have (\d+(?:\.\d+)?)% increased Cast Speed$/i, (value) => `召喚物有 ${value}% 增加施放速度`],
  [/^\+(\d+(?:\.\d+)?)% Chance to Block Attack Damage while (.+)$/i, (value, condition) => `+${value}% ${replaceTerms(`Chance to Block Attack Damage while ${condition}`)}`],
  [/^\+(\d+(?:\.\d+)?)% Chance to Block Spell Damage while (.+)$/i, (value, condition) => `+${value}% ${replaceTerms(`Chance to Block Spell Damage while ${condition}`)}`],
  [/^(\d+(?:\.\d+)?)% increased Damage with Bows$/i, (value) => `增加 ${value}% 使用弓時的傷害`],
  [/^(\d+(?:\.\d+)?)% increased Damage Over Time with Bow Skills$/i, (value) => `增加 ${value}% 弓技能持續傷害`],
  [/^(\d+(?:\.\d+)?)% increased Physical Damage with (.+)$/i, (value, weapon) => `增加 ${value}% 使用${replaceTerms(weapon)}時的物理傷害`],
  [/^(\d+(?:\.\d+)?)% increased Damage while wielding a Wand$/i, (value) => `增加 ${value}% 持法杖時的傷害`],
  [/^(\d+(?:\.\d+)?)% increased Attack Speed with Wands$/i, (value) => `增加 ${value}% 使用法杖時的攻擊速度`],
  [/^(\d+(?:\.\d+)?)% increased Life Recovery from Flasks$/i, (value) => `增加 ${value}% 來自藥劑的生命回復`],
  [/^(\d+(?:\.\d+)?)% increased Flask Charges gained$/i, (value) => `增加 ${value}% 藥劑充能獲得量`],
  [/^(\d+(?:\.\d+)?)% increased Flask Effect Duration$/i, (value) => `增加 ${value}% 藥劑效果持續時間`],
  [/^(\d+(?:\.\d+)?)% increased total Recovery per second from Life Leech$/i, (value) => `增加 ${value}% 每秒生命偷取總回復`],
  [/^(\d+(?:\.\d+)?)% increased effect of Non-Curse Auras from your Skills$/i, (value) => `增加 ${value}% 你技能的非詛咒光環效果`],
  [/^(\d+(?:\.\d+)?)% increased Area of Effect of Aura Skills$/i, (value) => `增加 ${value}% 光環技能範圍效果`],
  [/^(\d+(?:\.\d+)?)% reduced Enemy Stun Threshold$/i, (value) => `降低 ${value}% 敵人暈眩門檻`],
  [/^(\d+(?:\.\d+)?)% chance to Impale Enemies on Hit with Attacks$/i, (value) => `攻擊擊中時有 ${value}% 機率使敵人受到穿刺`],
  [/^(\d+(?:\.\d+)?)% increased Totem Placement speed$/i, (value) => `增加 ${value}% 圖騰放置速度`],
  [/^Attacks used by Totems have (\d+(?:\.\d+)?)% increased Attack Speed$/i, (value) => `圖騰使用的攻擊有 ${value}% 增加攻擊速度`],
  [/^Gain (\d+) Rage on Melee Hit$/i, (value) => `近戰擊中時獲得 ${value} 點盛怒`],
  [/^\+(\d+) to Maximum Power Charges$/i, (value) => `+${value} 最大暴擊球數量`]
];

const genericNodeTermTranslations: Array<[string, string]> = [
  ['Attack and Cast Speed', '攻擊與施放速度'],
  ['Critical Strike Chance', '暴擊率'],
  ['Spell Critical Strike Chance', '法術暴擊率'],
  ['Damage Over Time Mastery', '持續傷害精通'],
  ['Reservation Efficiency', '保留效率'],
  ['Life Regeneration', '生命回復'],
  ['Energy Shield', '能量護盾'],
  ['Area of Effect', '範圍效果'],
  ['Attack Damage', '攻擊傷害'],
  ['Attack Speed', '攻擊速度'],
  ['Cast Speed', '施放速度'],
  ['Spell Damage', '法術傷害'],
  ['Projectile Damage', '投射物傷害'],
  ['Minion Damage', '召喚物傷害'],
  ['Minion Life', '召喚物生命'],
  ['Physical Damage', '物理傷害'],
  ['Elemental Damage', '元素傷害'],
  ['Chaos Damage', '混沌傷害'],
  ['Lightning Damage', '閃電傷害'],
  ['Cold Damage', '冰冷傷害'],
  ['Fire Damage', '火焰傷害'],
  ['Armour', '護甲'],
  ['Evasion', '閃避'],
  ['Accuracy', '命中'],
  ['Block', '格擋'],
  ['Mana', '魔力'],
  ['Life', '生命'],
  ['Strength', '力量'],
  ['Dexterity', '敏捷'],
  ['Intelligence', '智慧'],
  ['Attack', '攻擊'],
  ['Minion', '召喚物'],
  ['Axe', '斧'],
  ['Bow', '弓'],
  ['Sword', '劍'],
  ['Wand', '法杖'],
  ['Staff', '長杖'],
  ['Shield', '盾牌'],
  ['Totem', '圖騰'],
  ['Warcry', '戰吼'],
  ['Flask', '藥劑'],
  ['Tincture', '酊劑'],
  ['Rage', '盛怒'],
  ['Chaos', '混沌'],
  ['Lightning', '閃電'],
  ['Cold', '冰冷'],
  ['Fire', '火焰'],
  ['Physical', '物理'],
  ['Elemental', '元素'],
  ['Projectile', '投射物'],
  ['Melee', '近戰'],
  ['Damage', '傷害'],
  ['Mastery', '精通'],
  ['Socket', '珠寶插槽'],
  ['found', '發現'],
  ['Wisps', '微光']
];

const genericNodeConnectorTranslations: Array<[string, string]> = [
  [' and ', '與'],
  [', ', '、']
];

const tryTranslateGenericNodeName = (name: string): string | undefined => {
  let output = name;

  genericNodeTermTranslations.forEach(([source, target]) => {
    output = output.replaceAll(source, target);
  });

  genericNodeConnectorTranslations.forEach(([source, target]) => {
    output = output.replaceAll(source, target);
  });

  return /[A-Za-z]/.test(output) ? undefined : output;
};

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

  const generic = tryTranslateGenericNodeName(name);
  if (generic) {
    return generic;
  }

  return name;
};

export const translateSkillTreeStatText = (text: string): string => {
  for (const [pattern, formatter] of regexTransforms) {
    const match = text.match(pattern);
    if (match) {
      const translated = formatter(...match.slice(1));
      if (!/[A-Za-z]/.test(translated)) {
        return translated;
      }
    }
  }

  const translated = replaceTerms(text);
  return /[A-Za-z]/.test(translated) ? text : translated;
};
