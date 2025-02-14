// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
  kana: string;
}

export const countries: Country[] = [
  {
    code: "01101",
    name: "札幌市中央区",
    kana: "さっぽろしちゅうおうく",
    latitude: 43.05528,
    longitude: 141.34083,
  },
  {
    code: "01102",
    name: "札幌市北区",
    kana: "さっぽろしきたく",
    latitude: 43.09083,
    longitude: 141.34111,
  },
  {
    code: "01103",
    name: "札幌市東区",
    kana: "さっぽろしひがしく",
    latitude: 43.07611,
    longitude: 141.36361,
  },
  {
    code: "01104",
    name: "札幌市白石区",
    kana: "さっぽろししろいしく",
    latitude: 43.04556,
    longitude: 141.39639,
  },
  {
    code: "01105",
    name: "札幌市豊平区",
    kana: "さっぽろしとよひらく",
    latitude: 43.03139,
    longitude: 141.38,
  },
  {
    code: "01106",
    name: "札幌市南区",
    kana: "さっぽろしみなみく",
    latitude: 42.99,
    longitude: 141.35361,
  },
  {
    code: "01107",
    name: "札幌市西区",
    kana: "さっぽろしにしく",
    latitude: 43.07444,
    longitude: 141.30083,
  },
  {
    code: "01108",
    name: "札幌市厚別区",
    kana: "さっぽろしあつべつく",
    latitude: 43.03639,
    longitude: 141.47472,
  },
  {
    code: "01109",
    name: "札幌市手稲区",
    kana: "さっぽろしていねく",
    latitude: 43.12194,
    longitude: 141.24583,
  },
  {
    code: "01110",
    name: "札幌市清田区",
    kana: "さっぽろしきよたく",
    latitude: 42.99944,
    longitude: 141.44389,
  },
  {
    code: "01202",
    name: "函館市",
    kana: "はこだてし",
    latitude: 41.76861,
    longitude: 140.72889,
  },
  {
    code: "01203",
    name: "小樽市",
    kana: "おたるし",
    latitude: 43.19083,
    longitude: 140.99444,
  },
  {
    code: "01204",
    name: "旭川市",
    kana: "あさひかわし",
    latitude: 43.77083,
    longitude: 142.365,
  },
  {
    code: "01205",
    name: "室蘭市",
    kana: "むろらんし",
    latitude: 42.31528,
    longitude: 140.97361,
  },
  {
    code: "01206",
    name: "釧路市",
    kana: "くしろし",
    latitude: 42.985,
    longitude: 144.38167,
  },
  {
    code: "01207",
    name: "帯広市",
    kana: "おびひろし",
    latitude: 42.92417,
    longitude: 143.19611,
  },
  {
    code: "01208",
    name: "北見市",
    kana: "きたみし",
    latitude: 43.80278,
    longitude: 143.89472,
  },
  {
    code: "01209",
    name: "夕張市",
    kana: "ゆうばりし",
    latitude: 43.05667,
    longitude: 141.97389,
  },
  {
    code: "01210",
    name: "岩見沢市",
    kana: "いわみざわし",
    latitude: 43.19611,
    longitude: 141.77583,
  },
  {
    code: "01211",
    name: "網走市",
    kana: "あばしりし",
    latitude: 44.02056,
    longitude: 144.27361,
  },
  {
    code: "01212",
    name: "留萌市",
    kana: "るもいし",
    latitude: 43.94111,
    longitude: 141.63694,
  },
  {
    code: "01213",
    name: "苫小牧市",
    kana: "とまこまいし",
    latitude: 42.63417,
    longitude: 141.60556,
  },
  {
    code: "01214",
    name: "稚内市",
    kana: "わっかないし",
    latitude: 45.41556,
    longitude: 141.67306,
  },
  {
    code: "01215",
    name: "美唄市",
    kana: "びばいし",
    latitude: 43.33278,
    longitude: 141.85389,
  },
  {
    code: "01216",
    name: "芦別市",
    kana: "あしべつし",
    latitude: 43.51833,
    longitude: 142.18944,
  },
  {
    code: "01217",
    name: "江別市",
    kana: "えべつし",
    latitude: 43.10361,
    longitude: 141.53611,
  },
  {
    code: "01218",
    name: "赤平市",
    kana: "あかびらし",
    latitude: 43.55806,
    longitude: 142.04417,
  },
  {
    code: "01219",
    name: "紋別市",
    kana: "もんべつし",
    latitude: 44.35639,
    longitude: 143.35444,
  },
  {
    code: "01220",
    name: "士別市",
    kana: "しべつし",
    latitude: 44.17806,
    longitude: 142.40083,
  },
  {
    code: "01221",
    name: "名寄市",
    kana: "なよろし",
    latitude: 44.35583,
    longitude: 142.46306,
  },
  {
    code: "01222",
    name: "三笠市",
    kana: "みかさし",
    latitude: 43.24556,
    longitude: 141.87528,
  },
  {
    code: "01223",
    name: "根室市",
    kana: "ねむろし",
    latitude: 43.33,
    longitude: 145.58278,
  },
  {
    code: "01224",
    name: "千歳市",
    kana: "ちとせし",
    latitude: 42.82111,
    longitude: 141.65111,
  },
  {
    code: "01225",
    name: "滝川市",
    kana: "たきかわし",
    latitude: 43.55778,
    longitude: 141.91028,
  },
  {
    code: "01226",
    name: "砂川市",
    kana: "すながわし",
    latitude: 43.49472,
    longitude: 141.90333,
  },
  {
    code: "01227",
    name: "歌志内市",
    kana: "うたしないし",
    latitude: 43.52139,
    longitude: 142.03444,
  },
  {
    code: "01228",
    name: "深川市",
    kana: "ふかがわし",
    latitude: 43.72333,
    longitude: 142.05361,
  },
  {
    code: "01229",
    name: "富良野市",
    kana: "ふらのし",
    latitude: 43.34194,
    longitude: 142.38306,
  },
  {
    code: "01230",
    name: "登別市",
    kana: "のぼりべつし",
    latitude: 42.41278,
    longitude: 141.10667,
  },
  {
    code: "01231",
    name: "恵庭市",
    kana: "えにわし",
    latitude: 42.8825,
    longitude: 141.57778,
  },
  {
    code: "01233",
    name: "伊達市",
    kana: "だてし",
    latitude: 42.47194,
    longitude: 140.86472,
  },
  {
    code: "01234",
    name: "北広島市",
    kana: "きたひろしまし",
    latitude: 42.98556,
    longitude: 141.56278,
  },
  {
    code: "01235",
    name: "石狩市",
    kana: "いしかりし",
    latitude: 43.17139,
    longitude: 141.31556,
  },
  {
    code: "01236",
    name: "北斗市",
    kana: "ほくとし",
    latitude: 41.82417,
    longitude: 140.65306,
  },
  {
    code: "01303",
    name: "当別町",
    kana: "とうべつちょう",
    latitude: 43.22361,
    longitude: 141.51694,
  },
  {
    code: "01304",
    name: "新篠津村",
    kana: "しんしのつむら",
    latitude: 43.22528,
    longitude: 141.64917,
  },
  {
    code: "01331",
    name: "松前町",
    kana: "まつまえちょう",
    latitude: 41.43,
    longitude: 140.11028,
  },
  {
    code: "01332",
    name: "福島町",
    kana: "ふくしまちょう",
    latitude: 41.48389,
    longitude: 140.25139,
  },
  {
    code: "01333",
    name: "知内町",
    kana: "しりうちちょう",
    latitude: 41.59833,
    longitude: 140.41889,
  },
  {
    code: "01334",
    name: "木古内町",
    kana: "きこないちょう",
    latitude: 41.67833,
    longitude: 140.43778,
  },
  {
    code: "01337",
    name: "七飯町",
    kana: "ななえちょう",
    latitude: 41.89583,
    longitude: 140.69444,
  },
  {
    code: "01343",
    name: "鹿部町",
    kana: "しかべちょう",
    latitude: 42.03861,
    longitude: 140.81583,
  },
  {
    code: "01345",
    name: "森町",
    kana: "もりまち",
    latitude: 42.105,
    longitude: 140.57639,
  },
  {
    code: "01346",
    name: "八雲町",
    kana: "やくもちょう",
    latitude: 42.25611,
    longitude: 140.26528,
  },
  {
    code: "01347",
    name: "長万部町",
    kana: "おしゃまんべちょう",
    latitude: 42.51361,
    longitude: 140.38028,
  },
  {
    code: "01361",
    name: "江差町",
    kana: "えさしちょう",
    latitude: 41.86917,
    longitude: 140.1275,
  },
  {
    code: "01362",
    name: "上ノ国町",
    kana: "かみのくにちょう",
    latitude: 41.80111,
    longitude: 140.12139,
  },
  {
    code: "01363",
    name: "厚沢部町",
    kana: "あっさぶちょう",
    latitude: 41.92083,
    longitude: 140.22528,
  },
  {
    code: "01364",
    name: "乙部町",
    kana: "おとべちょう",
    latitude: 41.96861,
    longitude: 140.13528,
  },
  {
    code: "01367",
    name: "奥尻町",
    kana: "おくしりちょう",
    latitude: 42.17222,
    longitude: 139.51417,
  },
  {
    code: "01370",
    name: "今金町",
    kana: "いまかねちょう",
    latitude: 42.42944,
    longitude: 140.00861,
  },
  {
    code: "01371",
    name: "せたな町",
    kana: "せたなちょう",
    latitude: 42.41694,
    longitude: 139.88333,
  },
  {
    code: "01391",
    name: "島牧村",
    kana: "しままきむら",
    latitude: 42.70056,
    longitude: 140.06167,
  },
  {
    code: "01392",
    name: "寿都町",
    kana: "すっつちょう",
    latitude: 42.79111,
    longitude: 140.22889,
  },
  {
    code: "01393",
    name: "黒松内町",
    kana: "くろまつないちょう",
    latitude: 42.66778,
    longitude: 140.30778,
  },
  {
    code: "01394",
    name: "蘭越町",
    kana: "らんこしちょう",
    latitude: 42.80917,
    longitude: 140.52833,
  },
  {
    code: "01395",
    name: "ニセコ町",
    kana: "にせこちょう",
    latitude: 42.80472,
    longitude: 140.6875,
  },
  {
    code: "01396",
    name: "真狩村",
    kana: "まっかりむら",
    latitude: 42.76306,
    longitude: 140.80361,
  },
  {
    code: "01397",
    name: "留寿都村",
    kana: "るすつむら",
    latitude: 42.73722,
    longitude: 140.87556,
  },
  {
    code: "01398",
    name: "喜茂別町",
    kana: "きもべつちょう",
    latitude: 42.79556,
    longitude: 140.93444,
  },
  {
    code: "01399",
    name: "京極町",
    kana: "きょうごくちょう",
    latitude: 42.85833,
    longitude: 140.88417,
  },
  {
    code: "01400",
    name: "倶知安町",
    kana: "くっちゃんちょう",
    latitude: 42.90167,
    longitude: 140.75889,
  },
  {
    code: "01401",
    name: "共和町",
    kana: "きょうわちょう",
    latitude: 42.98028,
    longitude: 140.61139,
  },
  {
    code: "01402",
    name: "岩内町",
    kana: "いわないちょう",
    latitude: 42.97972,
    longitude: 140.51472,
  },
  {
    code: "01403",
    name: "泊村",
    kana: "とまりむら",
    latitude: 43.06306,
    longitude: 140.49889,
  },
  {
    code: "01404",
    name: "神恵内村",
    kana: "かもえないむら",
    latitude: 43.14389,
    longitude: 140.43083,
  },
  {
    code: "01405",
    name: "積丹町",
    kana: "しゃこたんちょう",
    latitude: 43.29861,
    longitude: 140.59806,
  },
  {
    code: "01406",
    name: "古平町",
    kana: "ふるびらちょう",
    latitude: 43.26528,
    longitude: 140.63889,
  },
  {
    code: "01407",
    name: "仁木町",
    kana: "にきちょう",
    latitude: 43.15167,
    longitude: 140.76611,
  },
  {
    code: "01408",
    name: "余市町",
    kana: "よいちちょう",
    latitude: 43.19528,
    longitude: 140.78361,
  },
  {
    code: "01409",
    name: "赤井川村",
    kana: "あかいがわむら",
    latitude: 43.08361,
    longitude: 140.81361,
  },
  {
    code: "01423",
    name: "南幌町",
    kana: "なんぽろちょう",
    latitude: 43.06389,
    longitude: 141.65056,
  },
  {
    code: "01424",
    name: "奈井江町",
    kana: "ないえちょう",
    latitude: 43.42528,
    longitude: 141.88278,
  },
  {
    code: "01425",
    name: "上砂川町",
    kana: "かみすながわちょう",
    latitude: 43.4825,
    longitude: 141.98417,
  },
  {
    code: "01427",
    name: "由仁町",
    kana: "ゆにちょう",
    latitude: 42.99972,
    longitude: 141.79028,
  },
  {
    code: "01428",
    name: "長沼町",
    kana: "ながぬまちょう",
    latitude: 43.01028,
    longitude: 141.69528,
  },
  {
    code: "01429",
    name: "栗山町",
    kana: "くりやまちょう",
    latitude: 43.05639,
    longitude: 141.78417,
  },
  {
    code: "01430",
    name: "月形町",
    kana: "つきがたちょう",
    latitude: 43.33833,
    longitude: 141.66944,
  },
  {
    code: "01431",
    name: "浦臼町",
    kana: "うらうすちょう",
    latitude: 43.43028,
    longitude: 141.81861,
  },
  {
    code: "01432",
    name: "新十津川町",
    kana: "しんとつかわちょう",
    latitude: 43.54861,
    longitude: 141.87694,
  },
  {
    code: "01433",
    name: "妹背牛町",
    kana: "もせうしちょう",
    latitude: 43.70028,
    longitude: 141.96139,
  },
  {
    code: "01434",
    name: "秩父別町",
    kana: "ちっぷべつちょう",
    latitude: 43.76694,
    longitude: 141.95778,
  },
  {
    code: "01436",
    name: "雨竜町",
    kana: "うりゅうちょう",
    latitude: 43.64389,
    longitude: 141.88972,
  },
  {
    code: "01437",
    name: "北竜町",
    kana: "ほくりゅうちょう",
    latitude: 43.73139,
    longitude: 141.87917,
  },
  {
    code: "01438",
    name: "沼田町",
    kana: "ぬまたちょう",
    latitude: 43.80667,
    longitude: 141.93361,
  },
  {
    code: "01452",
    name: "鷹栖町",
    kana: "たかすちょう",
    latitude: 43.84333,
    longitude: 142.35444,
  },
  {
    code: "01453",
    name: "東神楽町",
    kana: "ひがしかぐらちょう",
    latitude: 43.69639,
    longitude: 142.45167,
  },
  {
    code: "01454",
    name: "当麻町",
    kana: "とうまちょう",
    latitude: 43.82806,
    longitude: 142.50833,
  },
  {
    code: "01455",
    name: "比布町",
    kana: "ぴっぷちょう",
    latitude: 43.875,
    longitude: 142.47778,
  },
  {
    code: "01456",
    name: "愛別町",
    kana: "あいべつちょう",
    latitude: 43.90667,
    longitude: 142.57778,
  },
  {
    code: "01457",
    name: "上川町",
    kana: "かみかわちょう",
    latitude: 43.84722,
    longitude: 142.77056,
  },
  {
    code: "01458",
    name: "東川町",
    kana: "ひがしかわちょう",
    latitude: 43.69889,
    longitude: 142.51028,
  },
  {
    code: "01459",
    name: "美瑛町",
    kana: "びえいちょう",
    latitude: 43.58833,
    longitude: 142.46694,
  },
  {
    code: "01460",
    name: "上富良野町",
    kana: "かみふらのちょう",
    latitude: 43.45556,
    longitude: 142.46694,
  },
  {
    code: "01461",
    name: "中富良野町",
    kana: "なかふらのちょう",
    latitude: 43.40556,
    longitude: 142.425,
  },
  {
    code: "01462",
    name: "南富良野町",
    kana: "みなみふらのちょう",
    latitude: 43.16417,
    longitude: 142.56833,
  },
  {
    code: "01463",
    name: "占冠村",
    kana: "しむかっぷむら",
    latitude: 42.98,
    longitude: 142.39861,
  },
  {
    code: "01464",
    name: "和寒町",
    kana: "わっさむちょう",
    latitude: 44.02306,
    longitude: 142.41333,
  },
  {
    code: "01465",
    name: "剣淵町",
    kana: "けんぶちちょう",
    latitude: 44.09583,
    longitude: 142.36139,
  },
  {
    code: "01468",
    name: "下川町",
    kana: "しもかわちょう",
    latitude: 44.3025,
    longitude: 142.63528,
  },
  {
    code: "01469",
    name: "美深町",
    kana: "びふかちょう",
    latitude: 44.48111,
    longitude: 142.34306,
  },
  {
    code: "01470",
    name: "音威子府村",
    kana: "おといねっぷむら",
    latitude: 44.725,
    longitude: 142.26222,
  },
  {
    code: "01471",
    name: "中川町",
    kana: "なかがわちょう",
    latitude: 44.81139,
    longitude: 142.07139,
  },
  {
    code: "01472",
    name: "幌加内町",
    kana: "ほろかないちょう",
    latitude: 44.00972,
    longitude: 142.15389,
  },
  {
    code: "01481",
    name: "増毛町",
    kana: "ましけちょう",
    latitude: 43.85611,
    longitude: 141.525,
  },
  {
    code: "01482",
    name: "小平町",
    kana: "おびらちょう",
    latitude: 44.01556,
    longitude: 141.66278,
  },
  {
    code: "01483",
    name: "苫前町",
    kana: "とままえちょう",
    latitude: 44.30611,
    longitude: 141.65278,
  },
  {
    code: "01484",
    name: "羽幌町",
    kana: "はぼろちょう",
    latitude: 44.36056,
    longitude: 141.69722,
  },
  {
    code: "01485",
    name: "初山別村",
    kana: "しょさんべつむら",
    latitude: 44.53222,
    longitude: 141.76639,
  },
  {
    code: "01486",
    name: "遠別町",
    kana: "えんべつちょう",
    latitude: 44.7225,
    longitude: 141.79222,
  },
  {
    code: "01487",
    name: "天塩町",
    kana: "てしおちょう",
    latitude: 44.88806,
    longitude: 141.74528,
  },
  {
    code: "01511",
    name: "猿払村",
    kana: "さるふつむら",
    latitude: 45.33056,
    longitude: 142.10889,
  },
  {
    code: "01512",
    name: "浜頓別町",
    kana: "はまとんべつちょう",
    latitude: 45.12389,
    longitude: 142.35972,
  },
  {
    code: "01513",
    name: "中頓別町",
    kana: "なかとんべつちょう",
    latitude: 44.96972,
    longitude: 142.28667,
  },
  {
    code: "01514",
    name: "枝幸町",
    kana: "えさしちょう",
    latitude: 44.93861,
    longitude: 142.58139,
  },
  {
    code: "01516",
    name: "豊富町",
    kana: "とよとみちょう",
    latitude: 45.10278,
    longitude: 141.7775,
  },
  {
    code: "01517",
    name: "礼文町",
    kana: "れぶんちょう",
    latitude: 45.30306,
    longitude: 141.04778,
  },
  {
    code: "01518",
    name: "利尻町",
    kana: "りしりちょう",
    latitude: 45.18694,
    longitude: 141.13944,
  },
  {
    code: "01519",
    name: "利尻富士町",
    kana: "りしりふじちょう",
    latitude: 45.2475,
    longitude: 141.21472,
  },
  {
    code: "01520",
    name: "幌延町",
    kana: "ほろのべちょう",
    latitude: 45.01778,
    longitude: 141.84944,
  },
  {
    code: "01543",
    name: "美幌町",
    kana: "びほろちょう",
    latitude: 43.82361,
    longitude: 144.10722,
  },
  {
    code: "01544",
    name: "津別町",
    kana: "つべつちょう",
    latitude: 43.70639,
    longitude: 144.02472,
  },
  {
    code: "01545",
    name: "斜里町",
    kana: "しゃりちょう",
    latitude: 43.91139,
    longitude: 144.67083,
  },
  {
    code: "01546",
    name: "清里町",
    kana: "きよさとちょう",
    latitude: 43.83528,
    longitude: 144.59472,
  },
  {
    code: "01547",
    name: "小清水町",
    kana: "こしみずちょう",
    latitude: 43.85667,
    longitude: 144.46222,
  },
  {
    code: "01549",
    name: "訓子府町",
    kana: "くんねっぷちょう",
    latitude: 43.72528,
    longitude: 143.74167,
  },
  {
    code: "01550",
    name: "置戸町",
    kana: "おけとちょう",
    latitude: 43.67639,
    longitude: 143.58639,
  },
  {
    code: "01552",
    name: "佐呂間町",
    kana: "さろまちょう",
    latitude: 44.01778,
    longitude: 143.77472,
  },
  {
    code: "01555",
    name: "遠軽町",
    kana: "えんがるちょう",
    latitude: 44.06194,
    longitude: 143.52806,
  },
  {
    code: "01559",
    name: "湧別町",
    kana: "ゆうべつちょう",
    latitude: 44.15167,
    longitude: 143.57306,
  },
  {
    code: "01560",
    name: "滝上町",
    kana: "たきのうえちょう",
    latitude: 44.19222,
    longitude: 143.0775,
  },
  {
    code: "01561",
    name: "興部町",
    kana: "おこっぺちょう",
    latitude: 44.47,
    longitude: 143.12389,
  },
  {
    code: "01562",
    name: "西興部村",
    kana: "にしおこっぺむら",
    latitude: 44.32889,
    longitude: 142.94444,
  },
  {
    code: "01563",
    name: "雄武町",
    kana: "おうむちょう",
    latitude: 44.5825,
    longitude: 142.96194,
  },
  {
    code: "01564",
    name: "大空町",
    kana: "おおぞらちょう",
    latitude: 43.91194,
    longitude: 144.1725,
  },
  {
    code: "01571",
    name: "豊浦町",
    kana: "とようらちょう",
    latitude: 42.58333,
    longitude: 140.71194,
  },
  {
    code: "01575",
    name: "壮瞥町",
    kana: "そうべつちょう",
    latitude: 42.55222,
    longitude: 140.88583,
  },
  {
    code: "01578",
    name: "白老町",
    kana: "しらおいちょう",
    latitude: 42.55111,
    longitude: 141.35583,
  },
  {
    code: "01581",
    name: "厚真町",
    kana: "あつまちょう",
    latitude: 42.72361,
    longitude: 141.87806,
  },
  {
    code: "01584",
    name: "洞爺湖町",
    kana: "とうやこちょう",
    latitude: 42.55111,
    longitude: 140.76417,
  },
  {
    code: "01585",
    name: "安平町",
    kana: "あびらちょう",
    latitude: 42.76278,
    longitude: 141.81806,
  },
  {
    code: "01586",
    name: "むかわ町",
    kana: "むかわちょう",
    latitude: 42.57472,
    longitude: 141.92667,
  },
  {
    code: "01601",
    name: "日高町",
    kana: "ひだかちょう",
    latitude: 42.48028,
    longitude: 142.07417,
  },
  {
    code: "01602",
    name: "平取町",
    kana: "びらとりちょう",
    latitude: 42.58528,
    longitude: 142.12861,
  },
  {
    code: "01604",
    name: "新冠町",
    kana: "にいかっぷちょう",
    latitude: 42.3625,
    longitude: 142.31833,
  },
  {
    code: "01607",
    name: "浦河町",
    kana: "うらかわちょう",
    latitude: 42.16833,
    longitude: 142.76833,
  },
  {
    code: "01608",
    name: "様似町",
    kana: "さまにちょう",
    latitude: 42.12778,
    longitude: 142.93389,
  },
  {
    code: "01609",
    name: "えりも町",
    kana: "えりもちょう",
    latitude: 42.01639,
    longitude: 143.14833,
  },
  {
    code: "01610",
    name: "新ひだか町",
    kana: "しんひだかちょう",
    latitude: 42.34139,
    longitude: 142.36861,
  },
  {
    code: "01631",
    name: "音更町",
    kana: "おとふけちょう",
    latitude: 42.99417,
    longitude: 143.19778,
  },
  {
    code: "01632",
    name: "士幌町",
    kana: "しほろちょう",
    latitude: 43.16806,
    longitude: 143.24139,
  },
  {
    code: "01633",
    name: "上士幌町",
    kana: "かみしほろちょう",
    latitude: 43.2325,
    longitude: 143.29611,
  },
  {
    code: "01634",
    name: "鹿追町",
    kana: "しかおいちょう",
    latitude: 43.09889,
    longitude: 142.98889,
  },
  {
    code: "01635",
    name: "新得町",
    kana: "しんとくちょう",
    latitude: 43.07972,
    longitude: 142.83889,
  },
  {
    code: "01636",
    name: "清水町",
    kana: "しみずちょう",
    latitude: 43.01139,
    longitude: 142.88444,
  },
  {
    code: "01637",
    name: "芽室町",
    kana: "めむろちょう",
    latitude: 42.91194,
    longitude: 143.05083,
  },
  {
    code: "01638",
    name: "中札内村",
    kana: "なかさつないむら",
    latitude: 42.6975,
    longitude: 143.1325,
  },
  {
    code: "01639",
    name: "更別村",
    kana: "さらべつむら",
    latitude: 42.65028,
    longitude: 143.18778,
  },
  {
    code: "01641",
    name: "大樹町",
    kana: "たいきちょう",
    latitude: 42.4975,
    longitude: 143.27889,
  },
  {
    code: "01642",
    name: "広尾町",
    kana: "ひろおちょう",
    latitude: 42.28583,
    longitude: 143.31167,
  },
  {
    code: "01643",
    name: "幕別町",
    kana: "まくべつちょう",
    latitude: 42.90861,
    longitude: 143.35611,
  },
  {
    code: "01644",
    name: "池田町",
    kana: "いけだちょう",
    latitude: 42.92889,
    longitude: 143.44861,
  },
  {
    code: "01645",
    name: "豊頃町",
    kana: "とよころちょう",
    latitude: 42.80111,
    longitude: 143.50583,
  },
  {
    code: "01646",
    name: "本別町",
    kana: "ほんべつちょう",
    latitude: 43.12472,
    longitude: 143.61056,
  },
  {
    code: "01647",
    name: "足寄町",
    kana: "あしょろちょう",
    latitude: 43.24472,
    longitude: 143.55417,
  },
  {
    code: "01648",
    name: "陸別町",
    kana: "りくべつちょう",
    latitude: 43.46889,
    longitude: 143.74722,
  },
  {
    code: "01649",
    name: "浦幌町",
    kana: "うらほろちょう",
    latitude: 42.80889,
    longitude: 143.65861,
  },
  {
    code: "01661",
    name: "釧路町",
    kana: "くしろちょう",
    latitude: 42.99611,
    longitude: 144.46611,
  },
  {
    code: "01662",
    name: "厚岸町",
    kana: "あっけしちょう",
    latitude: 43.05194,
    longitude: 144.8475,
  },
  {
    code: "01663",
    name: "浜中町",
    kana: "はまなかちょう",
    latitude: 43.07722,
    longitude: 145.12944,
  },
  {
    code: "01664",
    name: "標茶町",
    kana: "しべちゃちょう",
    latitude: 43.30333,
    longitude: 144.60056,
  },
  {
    code: "01665",
    name: "弟子屈町",
    kana: "てしかがちょう",
    latitude: 43.48528,
    longitude: 144.45944,
  },
  {
    code: "01667",
    name: "鶴居村",
    kana: "つるいむら",
    latitude: 43.23,
    longitude: 144.32111,
  },
  {
    code: "01668",
    name: "白糠町",
    kana: "しらぬかちょう",
    latitude: 42.95611,
    longitude: 144.07167,
  },
  {
    code: "01691",
    name: "別海町",
    kana: "べつかいちょう",
    latitude: 43.39389,
    longitude: 145.11722,
  },
  {
    code: "01692",
    name: "中標津町",
    kana: "なかしべつちょう",
    latitude: 43.55528,
    longitude: 144.97139,
  },
  {
    code: "01693",
    name: "標津町",
    kana: "しべつちょう",
    latitude: 43.66139,
    longitude: 145.13139,
  },
  {
    code: "01694",
    name: "羅臼町",
    kana: "らうすちょう",
    latitude: 44.02194,
    longitude: 145.18944,
  },
];

const excludeBecauseSVGIsBrokenIDs: string[] = [
  "01202",
  "01205",
  "01331",
  "01332",
  "01346",
  "01362",
  "01364",
  "01367",
  "01371",
  "01403",
  "01404",
  "01481",
  "01482",
  "01517",
  "01518",
  "01571",
  "01578",
  "01581",
  "01584",
  "01604",
  "01609",
  "01610",
  "01695",
  "01697",
  "01699",
  "01700",
];

export const countriesWithImage = countries.filter(
  (country) => !excludeBecauseSVGIsBrokenIDs.includes(country.code)
);

// Source: https://fr.wikipedia.org/wiki/ISO_3166
const frenchCountryNames: Record<string, string> = {
  AF: "Afghanistan",
  AX: "Åland",
  AL: "Albanie",
  DZ: "Algérie",
  AS: "Samoa américaines",
  AD: "Andorre",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctique",
  AG: "Antigua-et-Barbuda",
  AR: "Argentine",
  AM: "Arménie",
  AW: "Aruba",
  AU: "Australie",
  AT: "Autriche",
  AZ: "Azerbaïdjan",
  BS: "Bahamas",
  BH: "Bahreïn",
  BD: "Bangladesh",
  BB: "Barbade",
  BY: "Bélarus",
  BE: "Belgique",
  BZ: "Belize",
  BJ: "Bénin",
  BM: "Bermudes",
  BT: "Bhoutan",
  BO: "Bolivie",
  BQ: "Bonaire, Saint-Eustache et Saba",
  BA: "Bosnie-Herzégovine",
  BW: "Botswana",
  BV: "Bouvet",
  BR: "Brésil",
  IO: "Indien",
  BN: "Brunéi Darussalam",
  BG: "Bulgarie",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodge",
  CM: "Cameroun",
  CA: "Canada",
  KY: "Caïmans",
  CF: "République centrafricaine",
  TD: "Tchad",
  CL: "Chili",
  CN: "Chine",
  CX: "Christmas",
  CC: "Cocos",
  CO: "Colombie",
  KM: "Comores",
  CD: "République démocratique du Congo",
  CG: "Congo",
  CK: "Cook",
  CR: "Costa Rica",
  HR: "Croatie",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Chypre",
  CZ: "Tchéquie",
  DK: "Danemark",
  DJ: "Djibouti",
  DM: "Dominique",
  DO: "République dominicaine",
  EC: "Équateur",
  EG: "Égypte",
  SV: "Salvador",
  GQ: "Guinée équatoriale",
  ER: "Érythrée",
  EE: "Estonie",
  SZ: "Eswatini",
  ET: "Éthiopie",
  FK: "Îles Falkland (Malvinas)",
  FO: "Féroé",
  FJ: "Fidji",
  FI: "Finlande",
  FR: "France",
  GF: "Guyane française",
  PF: "Polynésie française",
  TF: "Terres australes françaises",
  GA: "Gabon",
  GM: "Gambie",
  GE: "Géorgie",
  DE: "Allemagne",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Grèce",
  GL: "Groenland",
  GD: "Grenade",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernesey",
  GN: "Guinée",
  GW: "Guinée-Bissau",
  GY: "Guyana",
  HT: "Haïti",
  HM: "Heard-et-Îles MacDonald",
  VA: "Saint-Siège",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hongrie",
  IS: "Islande",
  IN: "Inde",
  ID: "Indonésie",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Irlande",
  IM: "Île de Man",
  IL: "Israël",
  IT: "Italie",
  CI: "Côte d'Ivoire",
  JM: "Jamaïque",
  JP: "Japon",
  JE: "Jersey",
  JO: "Jordanie",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Corée du Nord",
  KR: "Corée du Sud",
  KW: "Koweït",
  KG: "Kirghizistan",
  LA: "Lao",
  LV: "Lettonie",
  LB: "Liban",
  LS: "Lesotho",
  LR: "Libéria",
  LY: "Libye",
  LI: "Liechtenstein",
  LT: "Lituanie",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaisie",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malte",
  MH: "Marshall",
  MQ: "Martinique",
  MR: "Mauritanie",
  MU: "Maurice",
  YT: "Mayotte",
  MX: "Mexique",
  FM: "Micronésie",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolie",
  ME: "Monténégro",
  MS: "Montserrat",
  MA: "Maroc",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibie",
  NR: "Nauru",
  NP: "Népal",
  NL: "Pays-Bas",
  NC: "Nouvelle-Calédonie",
  NZ: "Nouvelle-Zélande",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigéria",
  NU: "Niue",
  NF: "Norfolk",
  MK: "Macédoine du Nord",
  MP: "Mariannes du Nord",
  NO: "Norvège",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palaos",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papouasie-Nouvelle-Guinée",
  PY: "Paraguay",
  PE: "Pérou",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Pologne",
  PT: "Portugal",
  PR: "Porto Rico",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Roumanie",
  RU: "Russie",
  RW: "Rwanda",
  BL: "Saint-Barthélemy",
  SH: "Sainte-Hélène, Ascension et Tristan da Cunha",
  KN: "Saint-Kitts-et-Nevis",
  LC: "Sainte-Lucie",
  MF: "Saint-Martin",
  PM: "Saint-Pierre-et-Miquelon",
  VC: "Saint-Vincent-et-les Grenadines",
  WS: "Samoa",
  SM: "Saint-Marin",
  ST: "Sao Tomé-et-Principe",
  SA: "Arabie saoudite",
  SN: "Sénégal",
  RS: "Serbie",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapour",
  SX: "Saint-Martin",
  SK: "Slovaquie",
  SI: "Slovénie",
  SB: "Salomon",
  SO: "Somalie",
  ZA: "Afrique du Sud",
  GS: "Géorgie du Sud-et-les Îles Sandwich du Sud",
  SS: "Soudan du Sud",
  ES: "Espagne",
  LK: "Sri Lanka",
  SD: "Soudan",
  SR: "Suriname",
  SJ: "Svalbard et l'Île Jan Mayen",
  SE: "Suède",
  CH: "Suisse",
  SY: "Syrie",
  TW: "Taïwan",
  TJ: "Tadjikistan",
  TZ: "Tanzanie",
  TH: "Thaïlande",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinité-et-Tobago",
  TN: "Tunisie",
  TR: "Turquie",
  TM: "Turkménistan",
  TC: "Turks-et-Caïcos",
  TV: "Tuvalu",
  UG: "Ouganda",
  UA: "Ukraine",
  AE: "Émirats arabes unis",
  GB: "Royaume-Uni",
  UM: "Îles mineures éloignées des États-Unis",
  US: "États-Unis d'Amérique",
  UY: "Uruguay",
  UZ: "Ouzbékistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Vierges britanniques",
  VI: "Vierges des États-Unis",
  WF: "Wallis-et-Futuna",
  EH: "Sahara occidental",
  YE: "Yémen",
  ZM: "Zambie",
  ZW: "Zimbabwe",
  AN: "Antilles néerlandaises",
  GZ: "Bande de Gaza",
  XK: "Kosovo",
};

export function getCountryName(language: string, country: Country) {
  if (language === "fr") {
    return frenchCountryNames[country.code];
  }
  return country.name;
}

export function getCountryKana(language: string, country: Country) {
  if (language === "fr") {
    return frenchCountryNames[country.code];
  }
  return country.kana;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
