NamedNPC.add(
    new NamedNPC( 'Carter', ['Lantern', '灯之长生者'], ['Carter', '迪伦·卡特'], 'Name' ).Init('m', 'adult').isImportant(),
    new NamedNPC( 'Kinoshita', ['Empress', '女王'], ['Kinoshita', '树下凌音'], 'Name' ).Init('f', 'adult'),
    new NamedNPC( 'Covert', ['History', '秘史之长生者'], ['Covert', '克拉克·柯维尔特'], 'human' ).Init('m', 'adult').isImportant(),
    new NamedNPC( 'Ashita', ['Edge?', '刃之长生者？'], ['Ashita', '艾诗塔'], 'Hour' ).Init('f', 'adult'),
    new NamedNPC( 'Reveal', ['Grail', '杯之长生者'], ['Reveal', '蕾薇尔·赛尔芙'], 'Long' ).Init('f', 'adult'),
    new NamedNPC( 'Alexander', ['Winter', '冬之长生者'], ['Alexander', '亚历山大·米尔图'], 'Long' ).Init('m', 'adult'),
    new NamedNPC( 'Morphy', ['Heart', '心之长生者'], ['Morphy', '艾尔玛·墨菲'], 'Long' ).Init('f', 'adult'),
    new NamedNPC( 'Ariel', ['Ex-Priest', '前神父'], ['Ariel', '艾利尔·图纳'], 'human' ).Init('m', 'adult'),
    new NamedNPC( 'Noct', ['Knock', '启之长生者'], ['Noct', '诺忒·昂德'], 'Long' ).Init('m', 'adult')
)
let myNpcSetting = {
    Carter : {
        important : true,
        love : { maxValue : 50 },
        lust : { name : "求知欲", activeIcon : "img/ui/confidence.png", color: "blue" },
        dom : { maxValue : 50 }
    },
    Covert: {
        important : true,
        love : { maxValue : 50 },
        lust : { maxValue : 50 },
        dom : { maxValue : 50 }
    },
    Kinoshita: {
        love : { maxValue : 50 }
    },
    Ashita: {
        love : { maxValue : 50 }
    },
    Reveal: {
        love : { maxValue : 50 }
    },
    Alexander: {
        love : { maxValue : 50 }
    },
    Morphy: {
        love : { maxValue : 50 }
    },
    Ariel: {
        love : { maxValue : 50 }
    },
    Noct: {
        love : { maxValue : 50 }
    }
}
Object.assign(setup.ModNpcSetting, myNpcSetting)

let myTraits = [

    {
        addto: 'General Traits', //which genre of traits to add. must write the vanilla name(english)
        name : ['Formulae Voluptuous', '销魂法术' ], // the trait name,
        cond : ()=>{ return V.GrailSecret !== undefined }, // the condition for get the trait
        text : ['There exist some pleasures intense enough to corrupt the laws of the physical world.', '有些快感如此强烈，足以侵蚀现实世界的法则。'], // the display text
        colour : 'green', //not necessary, optional for display color

    }

]

//then push to the setup
setup.ModTraits.push(...myTraits)

// add new Traits Display zone
setup.ModTraitTitle.push({
    title: 'General Traits', //the id for code
    display: ['Formulae Voluptuous', '销魂法术'] // the text for display
})