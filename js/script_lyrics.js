// 文字点滅
let flash = document.querySelector(".flash").animate (
    [
        {opacity:1},
        {opacity:0}
    ], 
    {
        duration: 1500,
        // イーズイン/イーズアウト設定
        easing: 'linear',
        // 無限に動作する
        iterations: Infinity,
        // 1 → 0 0 → 1で動作
        direction: 'alternate'
    }
);

function aniPause (aniClass) {
    aniClass.currentTime = 0;
    aniClass.pause();
}

// 歌詞表示
// trigger
// trigger押下時に動作
document.getElementById("trigger").onclick = function() {
    displayLyric(
        "trigger",
        "室山颯",
        "室山颯",
        "いつの間にか人々には常識が刷り込まれてる<br>考える事を放棄してしまう程に<br>あれは煩悩 それは洗脳 本能はもう失くしてる<br>これは妄想？どれが本当のことなの？<br><br>引き金を引いたのは他の誰でもなく自分<br>責任を問われてしまう事は当然で<br>探してる 求めてる その答えはどこにある？<br>決断を下すべき時が迫る<br><br>決められたルールには従わず<br>はみ出した者が悪になる<br>それでも信念だけは貫いてゆけ<br>嫌いな者は嫌いなままで<br>心に仕舞い込まなくたっていい<br>進む道を選ぶのは自分だけさ<br><br>他人の目や 顔色を常に伺って生きる<br>どうでもいい くだらない 保身と世間体<br>犠牲になる事は何？人は誰？何を失う？<br>構わない 厭わない 今天秤にかけろ<br><br>決められたルールには従わず<br>はみ出した者が悪になる<br>それでも信念だけは貫いてゆけ<br>嫌いな者は嫌いなままで<br>心に仕舞い込まなくたっていい<br>進む道を選ぶのは自分だけさ<br><br>時には嘘も必要になり<br>正直者が馬鹿を見る<br>それでも信念だけは貫いて貫いて貫き続けて<br><br>譲れないものは捻じ曲げず<br>他人に何を思われたっていい<br>それでも信念だけは貫いてゆけ<br>これをすべき それは違う 考えを改めろ<br>うるせえ事ばっかり<br>今こそ誰の指図も受けるな"
    )
};
// 一瞬一閃
// 一瞬一閃押下時に動作
document.getElementById("just_moment").onclick = function() {
    displayLyric(
        "一瞬一閃",
        "室山颯",
        "室山颯",
        "刻刻と時代は移り変わって<br>流される者 逆らい続ける者<br>日に日にと自然に淘汰されて<br>そんな中で生き抜く為今必要なことを<br><br>燦燦と目映い程 煌煌と目眩く程の光を<br>今一途に研ぎ澄まして<br>煌めく一瞬の為 はためく一閃の為<br>どんな事があろうとも 燈 消さないで<br><br>どうなってしまうの？<br>これから先の未来<br>ないものねだり<br>他人任せじゃもう先はない<br>何もかも捨てて飛び出して<br>闇に溶け込んでしまっても<br><br>燦燦と目映い程 煌煌と目眩く程の光を<br>今その手に宿して<br>儚き一瞬で或れ 轟く一閃で存れ<br>遥か先まで響き渡る 光 撃ち放て<br><br>"
    )
};
// 経
// 経押下時に動作
document.getElementById("sutras").onclick = function() {
    displayLyric(
        "経",
        "室山颯",
        "室山颯",
        "羯諦 羯諦 波羅羯諦 波羅僧羯諦<br>波羅羯諦 波羅僧羯諦<br><br>羯諦 羯諦 波羅羯諦 波羅僧羯諦<br>波羅羯諦 波羅僧羯諦<br><br>智慧こそ世の救い 導きし彼の岸<br>経もまた慈しみ 辿り着きは其の境地<br><br>羯諦 羯諦 波羅羯諦 波羅僧羯諦<br>波羅羯諦 波羅僧羯諦<br><br>般若波羅蜜多 照見五蘊皆空<br>諸行無常 諸法無我<br><br>智慧こそ世の救い 導きし彼の岸<br>経もまた慈しみ 辿り着きは其の境地"
    )
};
// ヒトリヨガリ
// ヒトリヨガリ押下時に動作
document.getElementById("smugness").onclick = function() {
    displayLyric(
        "ヒトリヨガリ",
        "山﨑博士",
        "山﨑博士",
        "目が覚めてもカフェインが足りなくて<br>流れるように作ったブラックコーヒー<br>飲み干した記念のペアグラスは片一方だけ<br><br>何も期待してないわけじゃない<br>だけど大切にされている<br>実感が少しでも欲しいだけ<br>特別扱いしてよ<br><br>愛してるなんて　曖昧な<br>言葉並べて　わかったって顔しないで<br>何一つ当たってない　ちょっともかすってない<br>今まで　何見てたの？<br>大丈夫って口癖のように聞いてくるのに<br>助けての声は届かない<br>酔いしれてないで　もっと傍にいて<br>まだまだヒトリヨガリ<br><br>立ち止まる　振り向くことなく　離れる　十足半<br>わざとでも慌てて一目散に駆けつけてくれた<br>あの頃と何かが　変わっているのかな<br><br>愛してるなんて　曖昧な<br>言葉並べて　諭すようなことしないで<br>そんなこと頼んでない　ちょっとも分かってない<br>今まで　何してたの？<br>大丈夫って口癖のように聞いてくるから<br>ありがとうの声を絞ったの<br>酔いしれてないで　もっと傍にいて<br>まだまだヒトリヨガリ<br><br>優しいだけじゃ甘くてつまらない<br>苦みも楽しめるようなスリルが<br>混ざりあうとおもっていたのに<br>空回るマドラーの先を見つめてる<br><br>アイシテルなんて　言わないで<br>心のない　ロボットみたいで変だよ<br>あざとくてごめんね　天邪鬼だったね<br>気づかないふりはやめるわ<br>大丈夫って口癖がうつって<br>使うたび思い出してしまいそう<br>酔いを醒ますように<br>注いだコーヒー<br>グラスは　ひとつでいい<br>まだまだ ヒトリヨガリ"
    )
};
// 再会
// 再会押下時に動作
document.getElementById("reunion").onclick = function() {
    displayLyric(
        "再会",
        "室山颯",
        "室山颯",
        "「変わらないね」と久しぶりの君は言う<br>「分からないよ」と戸惑いながら言葉を返す<br><br>巻き戻る時間 甦る記憶<br>今更何を望んだって未来は変わりはしないけど<br><br>もしも過去に戻れるというのなら 何を伝えよう<br>手紙だけではなく少しでも話しができたらいいな<br><br>「さようなら」の手紙が最後の別れを告げる<br>「変わらない」といつまでも思っていたけど<br><br>止まらない時間 薄れゆく記憶<br>こんな日が訪れるなんて一つも思わなかった<br><br>今こうしてまた出逢えて<br>話が出来たこと嬉しく思ったけど<br>変わってしまったこともある<br><br>忘れてしまいたかった 忘れられなかった<br><br>こんなにも胸を打つ再会がこの僕の人生に<br>残されていたなら<br>過去も これからの別れも<br>そんなに悪くはないのかな"
    )
};
// Thief
// Thief押下時に動作
document.getElementById("thief").onclick = function() {
    displayLyric(
        "Thief",
        "室山颯",
        "室山颯",
        "風の様に現れ その手口は鮮やか<br>常識なんて通じない 予告も手の内<br><br>大胆不敵で<br>英雄と呼ぶか向けられた敵意か<br>決めるのは人々だ<br>紳士な為人<br>それさえも演じているのか解らないが<br>意 までは身に纏えない<br><br>煙の様に消えてしまい その手品は種明かし<br>国家権力はきりきり舞 裏の裏をかき<br><br>神出鬼没で<br>盗 は善なのか はたまた悪なのか<br>誰に決められる理由はない<br>利他的 義賊的<br>正義の味方気取りか それとも不義か<br>答 は何処にも在りゃしない"
    )
};
// 王様
// 王様押下時に動作
document.getElementById("king").onclick = function() {
    displayLyric(
        "王様",
        "室山颯",
        "室山颯",
        "『私はこの国を治める王様だ<br>好きな服の為ならお金なんて厭わない<br>そんな私の元へ男たちはやってきた』<br>【この布で作る服は世界一綺麗だ】<br><br>『それならば私の服を作ってみせなさい』<br>【すぐにとりかかりますが先に対価をもらいます】<br>《それとこの布は馬鹿や間抜けには見えません》<br>【きっと素晴らしいモノをお見せ出来る事でしょう】<br><br>見えていないモノを誰もが<br>見えてるようなフリをしていた<br>疑いながら嘘の方を信じるのさ<br><br>『ついに頼んでいた服が完成したみたいだ』<br>【この服はとても軽くて着ているかどうかも分からない程です】<br>『では早速着替えては街に繰り出してみようか<br>もっと羨望の眼差しを向けられる事でしょう』<br><br>「王様は裸だ」 一人が口にして皆の目は覚めた<br>騙されていた私は愚かな王だ<br><br>真実から目を逸らして<br>批判も反対も受け入れる器の無いお前は<br>何も出来ない 何も成せない 無様な王だ"
    )
};
// ハジマリノハジマリ
// ハジマリノハジマリ押下時に動作
document.getElementById("start_start").onclick = function() {
    displayLyric(
        "ハジマリノハジマリ",
        "山﨑博士",
        "山﨑博士",
        "それは突然現れた竜巻のような何か<br>期待と不安を握りしめ胸の前に当ててみるけど<br><br>覚悟はあるか？と自問自答している間に<br>全て飲み込んで　あ〜　日常は崩れていく<br>そんな世界が広がっても<br>立ち向かえる勇気はあるのか<br><br>君の側にいることが叶うなら<br>何もないこの世界でも生きていける<br>戻らないものに怯えて歩みを止めるな<br>何もない僕にだって手を伸ばせば輝けるさ<br>エメラルドのように<br><br>どんな出会いがあるのかはわからないけど<br>旅は続けなくちゃ　いけないな<br>帰る場所がある　そこできっと<br>待ち望む人もいるだろう<br><br>大切にしまっておいた宝物のノート<br>守り切れないとわかって1枚ずつ破り捨てた<br>そうさ　選んだのは僕だ<br>何かを得る代わりに失う<br><br>足りない物語のはじまりに<br>綴りたい君と僕のこれからのこと<br>戻らない時の中で手と手を取り合い<br>何もない僕らだって立ち上がれば輝けるさ<br>エメラルドのように<br><br>君の側にいるって誓ったから<br>何もないこの世界でも色鮮やかだ<br>戻らないものもあるけど今を生きている<br>どこへだって　何をしたって　誰も邪魔は出来ない<br>戻らない時の中で手と手を取り合い<br>何もない僕らからはじめようその輝きは<br>エメラルドのように"
    )
};

// 歌詞情報表示
function displayLyric(title,write,make,lyric) {
    // フェードイン用にdisplay:noneを設定
    document.getElementById("display_title").style ="display:none";
    document.getElementById("display_write").style ="display:none";
    document.getElementById("display_make").style ="display:none";
    document.getElementById("display_lyric").style ="display:none";
    document.getElementById("display_title").innerHTML = title;
    document.getElementById("display_write").innerHTML = "作詞:" + write;
    document.getElementById("display_make").innerHTML = "作曲:" + make;
    document.getElementById("display_lyric").innerHTML = lyric;
    $('p').fadeIn(900); 
    aniPause (flash);
};