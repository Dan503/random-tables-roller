(this["webpackJsonprandom-tables-roller"]=this["webpackJsonprandom-tables-roller"]||[]).push([[0],[,,,,,,,,,,,,function(e,l,a){},function(e,l,a){},function(e,l,a){},function(e,l,a){},function(e,l,a){},function(e,l,a){"use strict";a.r(l);var t,r=a(0),o=a(1),n=a(5),s=(a(12),a(13),a(3)),i=a(6),h=a(2),c=(a(14),function(e){return"number"===typeof e?"".concat(e,"px"):e});var u=function(e){var l=e.Elem,a=void 0===l?"div":l,t=e.direction,o=void 0===t?"horizontal":t,n=e.align,s=void 0===n?"stretch":n,i=e.justify,u=e.grow,d=e.nestChildren,v=void 0===d||d,m=e.wrap,y=void 0===m?"horizontal"===o:m,f=e.style,p=e.gap,g=e.vGap,b=void 0===g?p:g,w=e.hGap,j=void 0===w?p:w,k=e.gapSupport,x=void 0===k||k,O=e.children,C=c(b),S=c(j),A=["ul","ol"].includes(a),T={vertical:"column","vertical-reverse":"column-reverse",horizontal:void 0,"horizontal-reverse":"row-reverse"},P={center:"center",top:"flex-start",bottom:"flex-end",stretch:void 0};return Object(r.jsxs)(a,{className:"FlexGap","data-grow":u,"data-wrap":y,"data-nested-children":v,"data-flex-gap-support":x,style:Object(h.a)({"--gap-v":C,"--gap-h":S,flexDirection:T[o],justifyContent:i,alignItems:P[s]},f),children:[!v&&O,v&&(null===O||void 0===O?void 0:O.filter(Boolean).map((function(e,l){var a=A?"li":"div";return Object(r.jsx)(a,{className:"C-FlexGap__child",children:e},l)})))]})},d=function(e){var l=e.forcePolyfill,a=e.PolyfillElem,n=void 0===a?"div":a,c=Object(i.a)(e,["forcePolyfill","PolyfillElem"]),d=Object(o.useState)(!0),v=Object(s.a)(d,2),m=v[0],y=v[1];return Object(o.useLayoutEffect)((function(){y(!l&&function(){var e;if(void 0!==t)return t;var l=document.createElement("div");return l.style.display="flex",l.style.flexDirection="column",l.style.rowGap="1px",l.style.position="fixed",l.style.minHeight="0",l.appendChild(document.createElement("div")),l.appendChild(document.createElement("div")),document.body.appendChild(l),t=1===l.scrollHeight,null===(e=l.parentNode)||void 0===e||e.removeChild(l),t}())}),[l]),m?Object(r.jsx)(u,Object(h.a)({gapSupport:m},c)):Object(r.jsx)(n,{className:"C-FlexGap__polyfillWrapper",children:Object(r.jsx)(u,Object(h.a)({gapSupport:m},c))})},v={d100:100,d20:20,d12:12,d10:10,d8:8,d6:6,d4:4},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"d20";return Math.ceil(Math.random()*v[e])},y=function(e){return Object.keys(e||{}).includes("roll")},f=(a(15),function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"d20";return 1===e?"crit crit-fail":v[l]===e?"crit crit-success":""}),p=function(e){var l=e.label,a=e.tableData,t=e.dSize,n=Object(o.useState)(),i=Object(s.a)(n,2),c=i[0],u=i[1],d=Object(o.useState)(!1),v=Object(s.a)(d,2),p=v[0],g=v[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("tr",{className:"RollResult",children:[Object(r.jsx)("th",{children:l}),Object(r.jsx)("td",{children:a&&Object(r.jsxs)("span",{className:f(null===c||void 0===c?void 0:c.actualRoll,t),children:["[ ",null===c||void 0===c?void 0:c.actualRoll," ]"]})}),Object(r.jsx)("td",{children:null===c||void 0===c?void 0:c.value}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){if(a)u(function(e){var l=m(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"d20"),a=function(e){if(Array.isArray(e.roll)){var a=e.roll[0]<=l,t=e.roll[1]>=l;return a&&t}return e.roll===l};if(y(e[0])){var t=e.find((function(e){return a(e)}));return Object(h.a)(Object(h.a)({},t),{},{actualRoll:l})}return{roll:l,value:e[l-1],actualRoll:l}}(a,t));else{var e=m(t);u({roll:e,value:"".concat(e),actualRoll:e})}},children:"Roll"})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{onClick:function(){g(!p)},"aria-expanded":p,"aria-label":"Toggle table"})})]}),p&&a&&Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:5,children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"right",children:"Number"}),Object(r.jsx)("th",{align:"left",children:"Result"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e,l){if(y(e)){var a=e,t=a.value,o=a.roll,n=Array.isArray(o)?"".concat(o[0]," - ").concat(o[1]):o;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"right",children:n}),Object(r.jsx)("td",{align:"left",children:t})]},n)}return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"right",children:l+1}),Object(r.jsx)("td",{align:"left",children:e})]},l)}))})]})})})]})},g=(a(16),function(e){var l=e.heading,a=e.children;return Object(r.jsx)("div",{className:"RollTableSet",children:Object(r.jsxs)(d,{direction:"vertical",children:[Object(r.jsx)("h2",{children:l}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Trait"}),Object(r.jsx)("th",{children:"Roll value"}),Object(r.jsx)("th",{children:"Result"}),Object(r.jsx)("th",{children:"Action"}),Object(r.jsx)("th",{children:"Table"})]})}),Object(r.jsx)("tbody",{children:a})]})]})})}),b=[Object(r.jsx)("a",{href:"https://www.dndbeyond.com/sources/idrotf/icewind-dale#Arveiaturace",children:"Arveiaturace (Ancient white dragon)"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/remorhaz",children:"Remorhaz"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/frost-giant",children:"Frost Giant(s)"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/water-elemental",children:"Ice (water) Elemental"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/ice-troll",children:"Ice Troll"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/yeti",children:"Yeti"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/snow-golem",children:"Snow Golem"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/dire-wolf",children:"Pack of 5 Arctic Dire Wolves"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/gnoll",children:"Squad of 4 Gnolls"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/saber-toothed-tiger",children:"Awakened Saber Toothed Tiger"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/crag-cat",children:"Crag Cat"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/snowy-owlbear",children:"Snowy Owlbear"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/gelatinous-cube-giant-ooze-variant",children:"Frost Ooze"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/polar-bear",children:"Polar Bear"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/yeti-tyke",children:"Yeti tyke"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/ice-mephit",children:"3 Ice Mephits"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/giant-owl",children:"Giant Snow Owl"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/sources/idrotf/appendix-c-creatures#Reindeer",children:"Reindeer"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/fox",children:"Snow Fox"}),Object(r.jsx)("a",{href:"https://www.dndbeyond.com/monsters/chwinga",children:"Chwinga"})],w=["Spot the PCs and attack","Patrolling / Standing guard","Chasing / fighting a creature","Inspecting a map","Gambling / playing games","Sparring / fighting each other","Cooking / eating / drinking","Singing / joking / laughing","Drunk on alcohol","Arguing with each other","Tending to their wounds (injured)","Sleeping"],j=["Sees the PCs and charges","Has the sent of the PCs","Sniffing around for food","Freshly killed something","Fighting a creature (roll creature table again)","Burrowing in the snow","Nesting / about to sleep","Eating a carcass","Roaming around","Grooming another of it's kind","Licking wounds (injured)","Sleeping"],k=[{roll:1,value:"Half-orc"},{roll:[2,40],value:"Human"},{roll:[41,70],value:"Dwarf"},{roll:[71,85],value:"Goliath"},{roll:[86,90],value:"Triton"},{roll:[91,95],value:"Halfling"},{roll:96,value:"Gnome"},{roll:97,value:"Tiefling"},{roll:98,value:"Dragonborn"},{roll:99,value:"Half-Elf"},{roll:100,value:"Elf"}],x=[{roll:[1,2],value:"Male"},{roll:[3,4],value:"Female"}],O=[{roll:1,value:"Addict"},{roll:2,value:"Adorable"},{roll:3,value:"Annoyed"},{roll:4,value:"Authoritative"},{roll:5,value:"Massive mood swings (Bi-Polar)"},{roll:6,value:"Blunt (no filter)"},{roll:7,value:"Bossy"},{roll:8,value:"Show no sympathy (Callous)"},{roll:9,value:"Careless"},{roll:10,value:"Casual"},{roll:11,value:"Charitable"},{roll:12,value:"Cheerful"},{roll:13,value:"Childlike"},{roll:14,value:"Clean Freak"},{roll:15,value:"Clumsy"},{roll:16,value:"Cocky"},{roll:17,value:"Crazy"},{roll:18,value:"Curious"},{roll:19,value:"Daring / Determined"},{roll:20,value:"Deaf"},{roll:21,value:"Demanding"},{roll:22,value:"Dignified"},{roll:23,value:"Disagreeable"},{roll:24,value:"Elegant"},{roll:25,value:"Overly emotional"},{roll:26,value:"Emotionless"},{roll:27,value:"Empathetic"},{roll:28,value:"Envious"},{roll:29,value:"Excited"},{roll:30,value:"Fanciful"},{roll:31,value:"Drunk"},{roll:32,value:"Foolish"},{roll:33,value:"Forgetful"},{roll:34,value:"Friendly"},{roll:35,value:"Frightened"},{roll:36,value:"Frugal (hates spending money)"},{roll:37,value:"Gambles over everything"},{roll:38,value:"Generous"},{roll:39,value:"Gossiper"},{roll:40,value:"Greedy"},{roll:41,value:"Gullible"},{roll:42,value:"Hates Adventurers"},{roll:43,value:"Helpful"},{roll:44,value:"Honest (too honest)"},{roll:45,value:"Humble"},{roll:46,value:"Humorous"},{roll:47,value:"Mysterious"},{roll:48,value:"Impatient"},{roll:49,value:"Impressionable"},{roll:50,value:"Insecure"},{roll:51,value:"Insulting"},{roll:52,value:"Irritated by specific PC"},{roll:53,value:"Know-It-All"},{roll:54,value:"Maternal"},{roll:55,value:"Mellow / Chill / Layed back"},{roll:56,value:"Misguided / Wrong about something"},{roll:57,value:"Morbid / Gloomy"},{roll:58,value:"Murderous"},{roll:59,value:"Has no friends"},{roll:60,value:"Negotiator"},{roll:61,value:"Nurturing"},{roll:62,value:"Old Fashioned"},{roll:63,value:"Ominous"},{roll:64,value:"Organized / OCD"},{roll:65,value:"Overly Genuine / Attentive"},{roll:66,value:"Overly Feminine"},{roll:67,value:"Overly Masculine"},{roll:68,value:"Overly Nurturing"},{roll:69,value:"Paranoid"},{roll:70,value:"Perfectionist"},{roll:71,value:"Perverted"},{roll:72,value:"Physically Affectionate"},{roll:73,value:"Polite"},{roll:74,value:"Possessive"},{roll:75,value:"Prejudiced"},{roll:76,value:"Presumptuous"},{roll:77,value:"Quiet"},{roll:78,value:"Reckless / Risky"},{roll:79,value:"Religious"},{roll:80,value:"Avoids eye contact (Reserved)"},{roll:81,value:"Rowdy (party animal)"},{roll:82,value:"Sarcastic"},{roll:83,value:"Sassy"},{roll:84,value:"Scared of Adventurers"},{roll:85,value:"Secretive"},{roll:86,value:"Self-Conscious"},{roll:87,value:"Self-loathing"},{roll:88,value:"Shy"},{roll:89,value:"Slob / Sloppy"},{roll:90,value:"Sly / Smooth"},{roll:91,value:"Sorrowful (recent loss)"},{roll:92,value:"Stern (lots of rules)"},{roll:93,value:"Stubborn"},{roll:94,value:"Stylish"},{roll:95,value:"Superstitious"},{roll:96,value:"Thoughtful"},{roll:97,value:"Threatening"},{roll:98,value:"Vain (obsessed about how good they look)"},{roll:99,value:"Well-Traveled (knows locations)"},{roll:100,value:"World is Ending"}],C=[{roll:1,value:"Always very dirty and smells bad"},{roll:2,value:"Off their rocker... truly unique"},{roll:3,value:"Absolutely cannot swim"},{roll:4,value:"Pretends to have greater riches"},{roll:5,value:"Adrenaline junkie, always wants to be in danger"},{roll:6,value:"Addicted to some type of substance"},{roll:7,value:"Afraid of *element* (1 water / 2 fire / 3 lightning / 4 forests)"},{roll:8,value:"Afraid of animal (harmless or not)"},{roll:9,value:"Afraid of heights"},{roll:10,value:"Terrified of the dark"},{roll:11,value:"In debt to bad people"},{roll:12,value:"Bad memory"},{roll:13,value:"Believes literally everything they hear"},{roll:14,value:"Can see dead people / spirits"},{roll:15,value:"Only speaks a non-common language"},{roll:16,value:"Cannot tell a lie"},{roll:17,value:"Character gets very emotional very easily"},{roll:18,value:"Character is a HUGE flirt"},{roll:19,value:"Is a compulsive hoarder"},{roll:20,value:"Animal lover who is inept with animals"},{roll:21,value:"Claustrophobic / Afraid of heights"},{roll:22,value:"Compulsive Liar"},{roll:23,value:"Deathly Allergic to (*specific common food item*)"},{roll:24,value:"Borderline fatal allergy to something common"},{roll:25,value:"Ambivalent to gold, not moved by money at all"},{roll:26,value:"Photo-sensitive epileptic seizures"},{roll:27,value:'Everything is "magical" and they say so'},{roll:28,value:"Everything is mundane, magic doesn't exist"},{roll:29,value:"Extremely religious, praises their deity"},{roll:30,value:"Trouble focusing on one thing at a time (ADD)"},{roll:31,value:"Extremely old, possibly senile"},{roll:32,value:"Has multiple personalities, shifts between them (roll 2+ personality traits)"},{roll:33,value:"Evangelical, always trying to convert others"},{roll:34,value:"Extremely short temper / anger issues"},{roll:35,value:"Is always unprepared and never ready"},{roll:36,value:"Extremely sceptical, distrusts everyone"},{roll:37,value:"Eyes glow when they tell a lie"},{roll:38,value:"Addicted to magical healing"},{roll:39,value:"Gluttonous, always eating or drinking"},{roll:40,value:"Has a crush on one of the Players"},{roll:41,value:"Cursed (Roll on curses table)"},{roll:42,value:"Paranoid their Dark Secret will come out"},{roll:43,value:"Is posing as someone they're not"},{roll:44,value:"Has a nervous tick / shaky hands"},{roll:45,value:"Thinks their stuffed pet is alive"},{roll:46,value:"Secretly royalty in hiding"},{roll:47,value:"Extremely over the top attractive"},{roll:48,value:"Has two competing personalities (Roll personality trait twice)"},{roll:49,value:"Has vivid auditory hallucinations"},{roll:50,value:"Has vivid visual hallucinations"},{roll:51,value:"Has a terminal illness (is there even a cure?)"},{roll:52,value:"Veteran of many wars, possible PTSD"},{roll:53,value:"Hates all non-humanoid living creatures"},{roll:54,value:"Hears voices in their head (real or imagined)"},{roll:55,value:"Anterograde amnesia (can't form new memories)"},{roll:56,value:"Always carries a fragile, sentimental heirloom"},{roll:57,value:"Insomniac that\u2019s afraid to go to sleep"},{roll:58,value:"Must make monthly payments to square a debt"},{roll:59,value:"Is a convicted felon that is hiding from authorities"},{roll:60,value:"Utterly unbelievably unlucky. Possibly cursed?"},{roll:61,value:"Is completely Blind"},{roll:62,value:"Is completely Deaf"},{roll:63,value:"Is completely Mute"},{roll:64,value:"Demonic possession, gives another quirk (reroll)"},{roll:65,value:"Secret celestial, watching one of the Players"},{roll:66,value:"Illiterate / speaks with a low vocabulary"},{roll:67,value:"Jumpy and easily startled, uneasy"},{roll:68,value:"Kleptomaniac and always looks to steal things"},{roll:69,value:"Knows something secret about the party or a PC"},{roll:70,value:"Time is nearly up on their Devil's Bargain"},{roll:71,value:"Severe scarring causes them pain when ___"},{roll:72,value:"Missing a limb / body part of some kind"},{roll:73,value:"Must always be clean and HATES being dirty"},{roll:74,value:"Narcoleptic (Can fall asleep at any moment)"},{roll:75,value:"Extremely near sighted"},{roll:76,value:"Oddly sweaty for no reason"},{roll:77,value:"Paranoid of something after them (crazy)"},{roll:78,value:"Plotting to kill one of the other party members"},{roll:79,value:"Poor Hearing"},{roll:80,value:"Non-Paladin who follows a paladin's code of honor"},{roll:81,value:"Mocks others through mimicry"},{roll:82,value:"They know you are being hunted by an assassin"},{roll:83,value:"Secretly works for a secret group / organization"},{roll:84,value:"Shaky hands, but only when _____ happens"},{roll:85,value:"Take far too long to say anything"},{roll:86,value:"Speaks only telepathically through touch"},{roll:87,value:"Literally JUST killed a man, still cleaning up"},{roll:88,value:"Squeamish and vomits easily"},{roll:89,value:"Strong dislike of cold"},{roll:90,value:"Strong dislike of heat"},{roll:91,value:"Pyromaniac"},{roll:92,value:"Severe burns across a large section of their body"},{roll:93,value:"Unreliable and clumsy, always breaking stuff"},{roll:94,value:"Very confident in their poor instrument playing"},{roll:95,value:"Vocal cord injury and has restricted speech"},{roll:96,value:"Will not speak to the opposite sex"},{roll:97,value:"Would do just about anything for gold"},{roll:98,value:"Refuses to speak to magic users"},{roll:99,value:"Compulsive altruist, must always help the needy"},{roll:100,value:"Is to blame for a PC's tragedy"}],S=[{roll:1,value:"Baby"},{roll:[2,5],value:"Young child"},{roll:[6,25],value:"Teenager"},{roll:[26,55],value:"Young Adult"},{roll:[56,80],value:"Middle aged"},{roll:[81,99],value:"Old"},{roll:100,value:"Ancient"}],A=[{roll:1,value:"The character cannot turn right until the curse is lifted. "},{roll:2,value:"Characters feet always sink at least 1 inch into any surface they walk on (this at least accounts for walking on water, as in if they try to walk on water they sink normally)"},{roll:3,value:"All [food] type becomes tasteless (meat, vegetables, fruit)"},{roll:4,value:"When the character fires a ranged weapon, the ammunition always breaks on impact (no effect on damage)"},{roll:5,value:"Until the curse is lifted, when the character falls to 0hp, roll a D100. If you roll equal to or below the CR of the creature that cursed you, you instantly die."},{roll:6,value:"A player must close every door they walk through, even if there are people behind them."},{roll:7,value:"A player\u2019s weapon becomes lodged inside the body of their enemy after any stab attack, a strength check (DC 15) is needed to free the weapon."},{roll:8,value:"A player\u2019s weapons become twice as heavy, requiring two actions to strike once, until the curse is lifted."},{roll:9,value:"A player is stalked by an imp, who simply follows him, saying nothing, always staring. No one else can see the imp. "},{roll:10,value:"The player\u2019s backpack is enchanted, to always give the player an item they needed in the past, but never what they will need in the future or present."},{roll:11,value:"The next item the cursed player grabs is bound to them forever, they can never get rid of it."},{roll:12,value:"Everytime the cursed character kills someone stealthily, the slain thing lets out an incredibly loud scream that can be heard from 500 ft away, even if it wouldn\u2019t be possible for the dead thing to scream."},{roll:13,value:"Character takes on the appearance and smell of being undead, but isn\u2019t."},{roll:14,value:"Characters must only answer questions with lies, unless they are asked about the reason for their behaviour (ex: \u201care you cursed?\u201d \u201cAre you lying on purpose?\u201d) In which case they must respond in the affirmative."},{roll:15,value:"Characters must agree to every suggestion or request made within 30 feet of them. Curse is broken after a week."},{roll:16,value:"The cursed character takes 1 damage whenever a creature within 30 feet of them takes any damage."},{roll:17,value:"Character cannot willingly kill/spare the life of any living creature (choose depending on character personality)."},{roll:18,value:"Character becomes incapable of visually perceiving living creatures."},{roll:19,value:"Characters low-light vision and high-light vision switch (i.e. sunlight is effectively dark, but can see areas in shadow as if they were brightly lit)."},{roll:20,value:"Roll a d100. After the amount of dies shown on dice, the character explodes for (as per a 5th level Fireball) the next time they take a long rest, then is immediately put under the effects of a Reincarnation spell. The cycle continues until a Wish spell dispels it."},{roll:21,value:"Character is struck with blindness, but can accurately identify objects by taste through the air up to 60 feet away."},{roll:22,value:"Butt switches place with face. Switches every time either orifice expels any substance."},{roll:23,value:"Your CHA stat becomes your CHAR stat, determining your effectiveness at cooking up a mean barbeque. Reflavour spells and skill checks accordingly."},{roll:24,value:"When the target of the curse next goes to sleep, they dream of a burning lake. The dreams progress, becoming nightmares over time. The target instinctively becomes aware of the direction of the lake, and must save vs Wis or spend that day trying to reach the lake. The target must save every day to prevent the condition progressing, taking a penalty to mental rolls for every stage it advances. To completely recover, the target must make 3 saves in a row, if they fail a save it regresses to its initial condition, and if they fail 3 times in a row the target becomes maddened until they reach the lake. Upon reaching the lake they will see it is not engulfed in flames, and will take d6 Psychic damage for the number of days they have been affected by the urges."},{roll:25,value:"The first ritual performed after being cursed succeeds instantly, but when they next sleep the target must save vs. Con. If they fail, their skin dries and their body catches alight, taking d6 damage per turn. The fire can be put out by magical or mundane conventions."},{roll:26,value:"The cursed begins aging at 5 years an hour. When they reach 100 years, they die, and an infant crawls from their body\u2019s clothing. It continues to age at the same rate until it reaches 20. Same character, same memories."},{roll:27,value:"As the curse is activated, the target\u2019s hands detach from their wrists and scuttle away, and new hands grow in their place. For the rest of the day, every time they cast a spell, the same thing happens. The hands remain animate until destroyed, and will do their best to make terrible mischief."},{roll:28,value:"A thunderous voice narrates everything the cursed does, says, or thinks for the next d4 hours."},{roll:29,value:"For the next d4 days, every time the cursed attempts to speak, including to cast a spell, they must Save vs Int or instead deliver a lengthy and discursive monologue on: 1: bean cultivation; 2: the daily schedule of an emperor who died thousands of years ago; 3: the spiritual beliefs of spiders; 4: the life cycle of the cherub; 5: the various manias, phobias, or perversions of the nearest, most powerful monarch; 6: the correct method of preparing, storing, and administering a heretofore unknown and spectacularly deadly poison; 7: the best tourist destinations in the nearest village; 8: famous fish poets; 9: the dangers of breathing; 10: the magical properties of cheese; On a repeated roll, the target must continue their lecture from where they left off before."},{roll:30,value:"Until the curse is lifted the character constantly sniffs and has a runny nose. Disadvantage on stealth, persuasion and deception checks."},{roll:31,value:"Character can not control the volume at which he speaks. Player rolls a D6 every time their character speaks, even rolls are spoken in a whisper, odd rolls are shouting."},{roll:32,value:"Animals and children are always aware of your presence and are able to locate you without difficulty."},{roll:33,value:"\u201cCurse of Popularity\u201d \u2013 In populated area with non-hostile NPCs, everyone knows who you are and will not leave you alone. Roll a charisma check/save (DC varies). If failed, you are viewed in an unfavorable light. If passed, you are viewed in a favorable one."},{roll:34,value:"Everytime a player deals damage the same amount is reflected back to a random party member."},{roll:35,value:"All food and drink consumed immediately tastes of rotten flesh a successful con save of DC 15 can overcome this taste. "},{roll:36,value:"Whenever the PC comes into a hallway/corridor they are compelled to Sprint at full speed to the end. Will save to resist at DMs discretion."},{roll:37,value:"The PC must only speak in rhyme."},{roll:38,value:"The PC gains a new fear based on popular vote of the party until dispelled."},{roll:39,value:"All the player\u2019s equipment glows brightly for 24 hours. All of it."},{roll:40,value:"The player becomes magnetic."},{roll:41,value:"It is always raining in a 5ft cube around the player. The intensity randomly varies from a drizzle to a downpour and can exist even underwater or indoors."},{roll:42,value:"The character finds themselves unable to open any containers or doors which require a twisting motion."},{roll:43,value:"The character perceives traps everywhere where none exist."},{roll:44,value:"The cursed becomes lactose intolerant. Consuming any dairy leads to 1d4 hour(s) of insufferable gas & diarrhea."},{roll:45,value:"The player must compulsively juggle items any time the player has two or more of an object in easy reach. DC 10+the number of items being juggled Acrobatics check, or an item gets dropped, with appropriate consequences."},{roll:46,value:"Boots squeak loudly with each step."},{roll:47,value:"Effects of alcohol are heavily amplified, so that even drinking one drop of a fairly weak alcoholic beverage will make the PC drunk. Drinking a full glass of a strong alcoholic beverage could potentially cause death."},{roll:48,value:"All of the PC\u2019s armor and clothing teleported off their body and always floats just out of reach. Any attempt to put on other clothing or armor produces the same effect."},{roll:49,value:"Character\u2019s known languages are randomly determined after a long rest. Roll 1d8 per standard language known & 1d8 per exotic language known. You decide whether to exclude common from these rolls or not."},{roll:50,value:"After a long rest a random amount of GP the character is carrying is randomly changed to an amount of either Electrum, Silver or Copper pieces of the same worth, increasing number of coins. eg. (1d20 Amount, Roll 1d6 to determine type) Won\u2019t take long for pockets to become overflowing if character doesn\u2019t spend loose change."},{roll:51,value:"Any divination spells where the caster or target is within a certain range of a character are retargeted to that character."},{roll:52,value:"The cursed begins to weep tears of blood uncontrollably, reducing their hit point maximum by 1 for every hour the curse remains active. The cursed dies if this effect reduces its hit point maximum to 0."},{roll:53,value:"The cursed is compelled to repeat the last word of each sentence they say 3 times, each time speaking a little bit softer than the last. If the curse remains active for more than 24 hours, the cursed is compelled to dramatically flick their hands open and closed with each echo."},{roll:54,value:"Cursed characters are hated by all cats until cured. Every cat will hiss and attempt to swipe and bite the character. Irregardless of the cat is successful or not the cat will run away and hide. If the cat is successful in the attack any wounds caused will not heal (even with healing spells and potions) and will continuously weep foul smelling pus."},{roll:55,value:"The character cannot be convinced by any means that magic exists. They rationalize magical events away by using insane, impossible logic."},{roll:56,value:"The character believes themselves to have swapped bodies with the nearest person. Nothing has happened."},{roll:57,value:"One of the character\u2019s limbs no longer has any bones. It flops around uselessly until the bones have successfully regrown in 1d4 days."},{roll:58,value:"The character is unable to sleep when others are sleeping in a 60\u2032 radius."},{roll:59,value:"Once the character has fallen asleep they cannot be awoken by any non-magical means until 8 hours have passed."},{roll:60,value:"The character must consume 1d4+1 times the amount of food and drink a normal person does do sustain themselves. They experience terrible thirst and hunger pains. Treat as exhaustion if they do not actively maintain this regimen."},{roll:61,value:"The character cannot see anyone within 10 feet of them."},{roll:62,value:"The character finds a wooden spoon in their bag. Every time they retrieve an item they find another wooden spoon. Every time they investigate an area they find another wooden spoon. Every time the search a body they find another wooden spoon. If they intentionally attempt to locate, retrieve, or use a spoon the task is impossible."},{roll:63,value:"Incapable of ignoring direct orders given to their person."},{roll:64,value:"When splashed with cold water transforms the character into the opposite gender. Warm water temporarily reverses the transition."},{roll:65,value:"Must make one significant lie per day."},{roll:66,value:"Automatically fails all swimming checks; it\u2019s as if the character weights 10 times their normal weight while in water."},{roll:67,value:"Turned into a lycanthrope\u2026 with the form of a rabbit."},{roll:68,value:"All creatures of a specific species are invisible to the character."},{roll:69,value:"A perpetually magical darkness surrounds the character for 25 feet. It is transmittable by touch."},{roll:70,value:"When killed for the first time each day, the wounds heal and they instead stabilize. If they are not killed once a day, they are permanently slain."},{roll:71,value:"Makes an unarmed attack against themselves whenever they say \u2018what\u2019."},{roll:72,value:"Characters ears and eyes switch place. PC cannot look straight ahead. This lasts until the next full day ends."},{roll:73,value:"PC summons a little foot tall naked man with a hat that goofs around and makes as much noise as possible. Everyone can hear him and see his impact in the area, but cannot see him. He has no name and will not speak back. He just speaks in sounds and screams."},{roll:74,value:"PC thinks their eyes have the same effect as a beholder and use them as much as possible in combat."},{roll:75,value:"PCs teeth are as weak as glass."},{roll:76,value:"PCs weapon changes to the next material they touch."},{roll:77,value:"PC is followed by all bugs within 20 yards. (Bonus points if there are ant hills around)."},{roll:78,value:"PC grows a mouth in their chest. You can feed the mouth but you do not know what it will do. Overtime the mouth will grow if unfed."},{roll:79,value:"PCs money all goes down a material (gold turns to silver) until curse is lifted. Copper turns into wooden toy coins that children would play with."},{roll:80,value:"All plants the PC touches turn to dust for the next week. (Bonus points if a druid gets this)"},{roll:81,value:"All potions being held by PC give a delusion effect (example: PC thinks they are invisible but are not.)"},{roll:82,value:"All damage given to the PC for the next 12 minutes are irreversible."},{roll:83,value:"The next person the PC touches switches all items."},{roll:84,value:"PC\u2019s armor or clothing (whichever applicable) is made entirely out of shards of glass magically held together."},{roll:85,value:"Character must kill one humanoid per week or die themselves."},{roll:86,value:"Character must read one book per week or die, it must be a book they have not read before."},{roll:87,value:"Every dawn, gravity reverses for the character for one hour."},{roll:88,value:"Whenever the character physically harms another sentient being the character must apologize."},{roll:89,value:"Whenever the character is on a sea vehicle of any kind the character vomits anything he/she eats and cannot sleep."},{roll:90,value:"The PCs hand\u2019s tense up, and are stuck in a fist until the curse is removed."},{roll:91,value:"The character\u2019s left and right hands, and/or left and right feet switch sides until the curse is lifted."},{roll:92,value:"This curse hardens all food this character tries to eat like stone, unless they have the correct eating utensil to eat it. (ie They need a spoon to eat soup, a fork to eat pie, a knife to cut meat, etc)."},{roll:93,value:"The player believes that their mentor/parent has just died."},{roll:94,value:"The player receives at least one false vision from their deity a day."},{roll:95,value:"The cursed player can no longer fail the expectations of those they come across. (For example, if an NPC learns the player\u2019s name and they believe their name to be elfish, they will become an elf. If they expect that he is a weakling due to rumors they have heard of him losing an important fight, the player looses some of his strength. If they thought he would be taller, the character would become taller, etc...)"},{roll:96,value:"The player is cursed to look down at the ground; they can no longer make eye contact with others, unless they are able to look down on them..."},{roll:97,value:"Until this player\u2019s curse is lifted, as long as they wear shoes/boots, they will feel as if their feet are walking on burning hot coals."},{roll:98,value:"This player has been cursed to be afraid of the sun."},{roll:99,value:"This curse makes the player compelled to hug all characters they come across, even if it would be inappropriate or awkward."},{roll:100,value:"This curse makes the character forcibly say gibberish every time they cast a spell (or some other common action)."}],T=[{roll:1,value:"Blizzard (-5 next weather roll)"},{roll:2,value:"Hail storm (-2 next weather roll)"},{roll:[3,5],value:"Snow storm (-2 next weather roll)"},{roll:[6,7],value:"Frigid winds"},{roll:[8,9],value:"Dense Fog"},{roll:[10,11],value:"Light fog"},{roll:[12,14],value:"Light snow fall"},{roll:[15,19],value:"Clear skies (+2 next weather roll)"},{roll:20,value:"Rays of Hope (+5 next weather roll)"}],P=["Blizzard","Hail storm","Snow storm","Frigid winds"];var D=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"App-inner",children:[Object(r.jsx)("h1",{children:"Random Table Rollers"}),Object(r.jsxs)(d,{direction:"vertical",children:[Object(r.jsxs)(g,{heading:"NPC Characters",children:[Object(r.jsx)(p,{label:"Race",tableData:k,dSize:"d100"}),Object(r.jsx)(p,{label:"Sex",tableData:x,dSize:"d4"}),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{colSpan:5,children:Object(r.jsx)("p",{children:'Use the "Fantasy Name Generator" app to generate character names.'})})}),Object(r.jsx)(p,{label:"Personality trait",tableData:O,dSize:"d100"}),Object(r.jsx)(p,{label:"Quirk",tableData:C,dSize:"d100"}),Object(r.jsx)(p,{label:"Age (appearance)",tableData:S,dSize:"d100"})]}),Object(r.jsxs)(g,{heading:"Arctic encounter generator",children:[Object(r.jsx)(p,{label:"Creature(s)",tableData:b,dSize:"d20"}),Object(r.jsx)(p,{label:"Activity (Beast)",tableData:j,dSize:"d12"}),Object(r.jsx)(p,{label:"Activity (Humanoid)",tableData:w,dSize:"d12"})]}),Object(r.jsxs)(g,{heading:"Weather & Storms",children:[Object(r.jsx)(p,{label:"Weather",tableData:T,dSize:"d20"}),Object(r.jsx)(p,{label:"Storm",tableData:P,dSize:"d4"})]}),Object(r.jsx)(g,{heading:"Other aspects",children:Object(r.jsx)(p,{label:"Curses",tableData:A,dSize:"d100"})}),Object(r.jsxs)("p",{children:["Personality traits and Quirks from"," ",Object(r.jsx)("a",{href:"https://www.dmsguild.com/product/317982/PC-and-NPC-Creation-Tables",children:"PC and NPC Creation Tables"})]}),Object(r.jsxs)("p",{children:["Arctic activities and weather table from"," ",Object(r.jsx)("a",{href:"https://www.dmsguild.com/product/332576/Arctic-Survival-House-Rules-for-Icewind-Dale",children:"Arctic Survival House Rules for Icewind Dale"})]}),Object(r.jsxs)("p",{children:["Curses from"," ",Object(r.jsx)("a",{href:"http://dndspeak.com/2017/12/100-curses/",children:"D&D speak.com"}),"."]})]})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(l){var a=l.getCLS,t=l.getFID,r=l.getFCP,o=l.getLCP,n=l.getTTFB;a(e),t(e),r(e),o(e),n(e)}))};Object(n.render)(Object(r.jsx)(o.StrictMode,{children:Object(r.jsx)(D,{})}),document.getElementById("root")),I()}],[[17,1,2]]]);
//# sourceMappingURL=main.91b951b6.chunk.js.map