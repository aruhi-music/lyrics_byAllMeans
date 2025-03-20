// 是是是と非非非
const byAllMeans = {
    songs: {
        song1: {
            songId: "trigger",
            songName: "trigger",
            titleLang: "songs__song__en"
        },
        song2: {
            songId: "just_moment",
            songName: "一瞬一閃",
            titleLang: "songs__song__jp"
        },
        song3: {
            songId: "sutras",
            songName: "経",
            titleLang: "songs__song__jp"
        },
        song4: {
            songId: "smugness",
            songName: "ヒトリヨガリ",
            titleLang: "songs__song__jp"
        },
        song5: {
            songId: "reunion",
            songName: "再会",
            titleLang: "songs__song__jp"
        },
        song6: {
            songId: "thief",
            songName: "Thief",
            titleLang: "songs__song__en"
        },
        song7: {
            songId: "king",
            songName: "王様",
            titleLang: "songs__song__jp"
        },
        song8: {
            songId: "start_start",
            songName: "ハジマリノハジマリ",
            titleLang: "songs__song__jp"
        },
    }
}
// 経
const sutras = {
    songs: {
        song1: {
            songId: "sutras",
            songName: "経",
            titleLang: "songs__song__jp"
        },
    }
}
// 生死
const deadAlive = {
    songs: {
        song1: {
            songId: "dead_alive",
            songName: "生き様と死に様",
            titleLang: "songs__song__jp"
        },
        song2: {
            songId: "joker",
            songName: "Joker",
            titleLang: "songs__song__en"
        },
        song3: {
            songId: "want",
            songName: "ホシカッタモノ",
            titleLang: "songs__song__jp"
        },
        song4: {
            songId: "summer",
            songName: "夏が来るたび",
            titleLang: "songs__song__jp"
        },
        song5: {
            songId: "friend_lover",
            songName: "友達以上恋人未満",
            titleLang: "songs__song__jp"
        },
        song6: {
            songId: "witch",
            songName: "Witch",
            titleLang: "songs__song__en"
        },
    }
}
// 正義
const justice = {
    songs: {
        song1: {
            songId: "red_shoes",
            songName: "赤い靴",
            titleLang: "songs__song__jp"
        },
        song2: {
            songId: "qed",
            songName: "Q.E.D",
            titleLang: "songs__song__en"
        },
        song3: {
            songId: "justice",
            songName: "正義",
            titleLang: "songs__song__jp"
        },
    }
}
// 変身
const transformation = {
    songs: {
        song1: {
            songId: "transformation",
            songName: "変身",
            titleLang: "songs__song__jp"
        },
    }
}
// HERO
const hero = {
    songs: {
        song1: {
            songId: "hero",
            songName: "HERO",
            titleLang: "songs__song__en"
        },
    }
}
// Wolf
const wolf = {
    songs: {
        song1: {
            songId: "wolf",
            songName: "Wolf",
            titleLang: "songs__song__en"
        },
    }
}
// anata
const anata = {
    songs: {
        song1: {
            songId: "anata",
            songName: "anata",
            titleLang: "songs__song__en"
        },
    }
}
// 新世界
const newworld = {
    songs: {
        song1: {
            songId: "newworld",
            songName: "newworld",
            titleLang: "songs__song__jp"
        },
    }
}
function aniPause (aniClass) {
    aniClass.currentTime = 0;
    aniClass.pause();
}

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
window.onload = function () {
    // コピーライト年設定
    const currentDateElement = document.getElementById('current-date');
    const today = new Date(); // 現在の年月日を取得
    const formattedYear = today.getFullYear(); // 年のみを取得
    currentDateElement.textContent = formattedYear;

    // songs__songクラスを持つul要素を取得
    const songsList = document.querySelector('.songs__song');

    let album = ""
    // URLのクエリ文字列を取得
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('album');

    if (param === 'byAllMeans') {
        album = JSON.parse(JSON.stringify(byAllMeans));
    } else if (param === 'sutras') {
        album = JSON.parse(JSON.stringify(sutras));
    } else if (param === 'deadAlive') {
        album = JSON.parse(JSON.stringify(deadAlive));
    } else if (param === 'justice') {
        album = JSON.parse(JSON.stringify(justice));
    } else if (param === 'transformation') {
        album = JSON.parse(JSON.stringify(transformation));
    } else if (param === 'hero') {
        album = JSON.parse(JSON.stringify(hero));
    } else if (param === 'wolf') {
        album = JSON.parse(JSON.stringify(wolf));
    } else if (param === 'anata') {
        album = JSON.parse(JSON.stringify(anata));
    } else if (param === 'newworld') {
        album = JSON.parse(JSON.stringify(newworld));
    }
    for (const songId in album.songs) {
        const song = album.songs[songId];

        // li要素を作成
        const li = document.createElement('li');
        li.classList.add(song.titleLang); // titleLangの値をクラスとして追加

        // a要素を作成
        const a = document.createElement('a');
        a.href = '#'; // リンク先（必要に応じて変更）
        a.id = song.songId;
        a.textContent = song.songName;

        // li要素にa要素を追加
        li.appendChild(a);

        // ul要素にli要素を追加
        songsList.appendChild(li);
    }

    // 歌詞表示
    // trigger
    if(document.getElementById('trigger')) {
        document.getElementById("trigger").onclick = function() {
            displayLyric(
                "trigger",
                "室山颯",
                "室山颯",
                "いつの間にか人々には常識が刷り込まれてる<br>考える事を放棄してしまう程に<br>あれは煩悩 それは洗脳 本能はもう失くしてる<br>これは妄想？どれが本当のことなの？<br><br>引き金を引いたのは他の誰でもなく自分<br>責任を問われてしまう事は当然で<br>探してる 求めてる その答えはどこにある？<br>決断を下すべき時が迫る<br><br>決められたルールには従わず<br>はみ出した者が悪になる<br>それでも信念だけは貫いてゆけ<br>嫌いな者は嫌いなままで<br>心に仕舞い込まなくたっていい<br>進む道を選ぶのは自分だけさ<br><br>他人の目や 顔色を常に伺って生きる<br>どうでもいい くだらない 保身と世間体<br>犠牲になる事は何？人は誰？何を失う？<br>構わない 厭わない 今天秤にかけろ<br><br>決められたルールには従わず<br>はみ出した者が悪になる<br>それでも信念だけは貫いてゆけ<br>嫌いな者は嫌いなままで<br>心に仕舞い込まなくたっていい<br>進む道を選ぶのは自分だけさ<br><br>時には嘘も必要になり<br>正直者が馬鹿を見る<br>それでも信念だけは貫いて貫いて貫き続けて<br><br>譲れないものは捻じ曲げず<br>他人に何を思われたっていい<br>それでも信念だけは貫いてゆけ<br>これをすべき それは違う 考えを改めろ<br>うるせえ事ばっかり<br>今こそ誰の指図も受けるな"
            )
        };
    }
    // 一瞬一閃
    if(document.getElementById('just_moment')) {
        document.getElementById("just_moment").onclick = function() {
            displayLyric(
                "一瞬一閃",
                "室山颯",
                "室山颯",
                "刻刻と時代は移り変わって<br>流される者 逆らい続ける者<br>日に日にと自然に淘汰されて<br>そんな中で生き抜く為今必要なことを<br><br>燦燦と目映い程 煌煌と目眩く程の光を<br>今一途に研ぎ澄まして<br>煌めく一瞬の為 はためく一閃の為<br>どんな事があろうとも 燈 消さないで<br><br>どうなってしまうの？<br>これから先の未来<br>ないものねだり<br>他人任せじゃもう先はない<br>何もかも捨てて飛び出して<br>闇に溶け込んでしまっても<br><br>燦燦と目映い程 煌煌と目眩く程の光を<br>今その手に宿して<br>儚き一瞬で或れ 轟く一閃で存れ<br>遥か先まで響き渡る 光 撃ち放て<br><br>"
            )
        };
    }
    // 経
    if(document.getElementById('sutras')) {
        document.getElementById("sutras").onclick = function() {
            displayLyric(
                "経",
                "室山颯",
                "室山颯",
                "羯諦 羯諦 波羅羯諦 波羅僧羯諦<br>波羅羯諦 波羅僧羯諦<br><br>羯諦 羯諦 波羅羯諦 波羅僧羯諦<br>波羅羯諦 波羅僧羯諦<br><br>智慧こそ世の救い 導きし彼の岸<br>経もまた慈しみ 辿り着きは其の境地<br><br>羯諦 羯諦 波羅羯諦 波羅僧羯諦<br>波羅羯諦 波羅僧羯諦<br><br>般若波羅蜜多 照見五蘊皆空<br>諸行無常 諸法無我<br><br>智慧こそ世の救い 導きし彼の岸<br>経もまた慈しみ 辿り着きは其の境地"
            )
        };
    }
    // ヒトリヨガリ
    if(document.getElementById('smugness')) {
        document.getElementById("smugness").onclick = function() {
            displayLyric(
                "ヒトリヨガリ",
                "山﨑博士",
                "山﨑博士",
                "目が覚めてもカフェインが足りなくて<br>流れるように作ったブラックコーヒー<br>飲み干した記念のペアグラスは片一方だけ<br><br>何も期待してないわけじゃない<br>だけど大切にされている<br>実感が少しでも欲しいだけ<br>特別扱いしてよ<br><br>愛してるなんて　曖昧な<br>言葉並べて　わかったって顔しないで<br>何一つ当たってない　ちょっともかすってない<br>今まで　何見てたの？<br>大丈夫って口癖のように聞いてくるのに<br>助けての声は届かない<br>酔いしれてないで　もっと傍にいて<br>まだまだヒトリヨガリ<br><br>立ち止まる　振り向くことなく　離れる　十足半<br>わざとでも慌てて一目散に駆けつけてくれた<br>あの頃と何かが　変わっているのかな<br><br>愛してるなんて　曖昧な<br>言葉並べて　諭すようなことしないで<br>そんなこと頼んでない　ちょっとも分かってない<br>今まで　何してたの？<br>大丈夫って口癖のように聞いてくるから<br>ありがとうの声を絞ったの<br>酔いしれてないで　もっと傍にいて<br>まだまだヒトリヨガリ<br><br>優しいだけじゃ甘くてつまらない<br>苦みも楽しめるようなスリルが<br>混ざりあうとおもっていたのに<br>空回るマドラーの先を見つめてる<br><br>アイシテルなんて　言わないで<br>心のない　ロボットみたいで変だよ<br>あざとくてごめんね　天邪鬼だったね<br>気づかないふりはやめるわ<br>大丈夫って口癖がうつって<br>使うたび思い出してしまいそう<br>酔いを醒ますように<br>注いだコーヒー<br>グラスは　ひとつでいい<br>まだまだ ヒトリヨガリ"
            )
        };
    }
    // 再会
    if(document.getElementById('reunion')) {
        document.getElementById("reunion").onclick = function() {
            displayLyric(
                "再会",
                "室山颯",
                "室山颯",
                "「変わらないね」と久しぶりの君は言う<br>「分からないよ」と戸惑いながら言葉を返す<br><br>巻き戻る時間 甦る記憶<br>今更何を望んだって未来は変わりはしないけど<br><br>もしも過去に戻れるというのなら 何を伝えよう<br>手紙だけではなく少しでも話しができたらいいな<br><br>「さようなら」の手紙が最後の別れを告げる<br>「変わらない」といつまでも思っていたけど<br><br>止まらない時間 薄れゆく記憶<br>こんな日が訪れるなんて一つも思わなかった<br><br>今こうしてまた出逢えて<br>話が出来たこと嬉しく思ったけど<br>変わってしまったこともある<br><br>忘れてしまいたかった 忘れられなかった<br><br>こんなにも胸を打つ再会がこの僕の人生に<br>残されていたなら<br>過去も これからの別れも<br>そんなに悪くはないのかな"
            )
        };
    }
    // Thief
    if(document.getElementById('thief')) {
        document.getElementById("thief").onclick = function() {
            displayLyric(
                "Thief",
                "室山颯",
                "室山颯",
                "風の様に現れ その手口は鮮やか<br>常識なんて通じない 予告も手の内<br><br>大胆不敵で<br>英雄と呼ぶか向けられた敵意か<br>決めるのは人々だ<br>紳士な為人<br>それさえも演じているのか解らないが<br>意 までは身に纏えない<br><br>煙の様に消えてしまい その手品は種明かし<br>国家権力はきりきり舞 裏の裏をかき<br><br>神出鬼没で<br>盗 は善なのか はたまた悪なのか<br>誰に決められる理由はない<br>利他的 義賊的<br>正義の味方気取りか それとも不義か<br>答 は何処にも在りゃしない"
            )
        };
    }
    // 王様
    if(document.getElementById('king')) {
        document.getElementById("king").onclick = function() {
            displayLyric(
                "王様",
                "室山颯",
                "室山颯",
                "『私はこの国を治める王様だ<br>好きな服の為ならお金なんて厭わない<br>そんな私の元へ男たちはやってきた』<br>【この布で作る服は世界一綺麗だ】<br><br>『それならば私の服を作ってみせなさい』<br>【すぐにとりかかりますが先に対価をもらいます】<br>《それとこの布は馬鹿や間抜けには見えません》<br>【きっと素晴らしいモノをお見せ出来る事でしょう】<br><br>見えていないモノを誰もが<br>見えてるようなフリをしていた<br>疑いながら嘘の方を信じるのさ<br><br>『ついに頼んでいた服が完成したみたいだ』<br>【この服はとても軽くて着ているかどうかも分からない程です】<br>『では早速着替えては街に繰り出してみようか<br>もっと羨望の眼差しを向けられる事でしょう』<br><br>「王様は裸だ」 一人が口にして皆の目は覚めた<br>騙されていた私は愚かな王だ<br><br>真実から目を逸らして<br>批判も反対も受け入れる器の無いお前は<br>何も出来ない 何も成せない 無様な王だ"
            )
        };
    }
    // ハジマリノハジマリ
    if(document.getElementById('start_start')) {
        document.getElementById("start_start").onclick = function() {
            displayLyric(
                "ハジマリノハジマリ",
                "山﨑博士",
                "山﨑博士",
                "それは突然現れた竜巻のような何か<br>期待と不安を握りしめ胸の前に当ててみるけど<br><br>覚悟はあるか？と自問自答している間に<br>全て飲み込んで　あ〜　日常は崩れていく<br>そんな世界が広がっても<br>立ち向かえる勇気はあるのか<br><br>君の側にいることが叶うなら<br>何もないこの世界でも生きていける<br>戻らないものに怯えて歩みを止めるな<br>何もない僕にだって手を伸ばせば輝けるさ<br>エメラルドのように<br><br>どんな出会いがあるのかはわからないけど<br>旅は続けなくちゃ　いけないな<br>帰る場所がある　そこできっと<br>待ち望む人もいるだろう<br><br>大切にしまっておいた宝物のノート<br>守り切れないとわかって1枚ずつ破り捨てた<br>そうさ　選んだのは僕だ<br>何かを得る代わりに失う<br><br>足りない物語のはじまりに<br>綴りたい君と僕のこれからのこと<br>戻らない時の中で手と手を取り合い<br>何もない僕らだって立ち上がれば輝けるさ<br>エメラルドのように<br><br>君の側にいるって誓ったから<br>何もないこの世界でも色鮮やかだ<br>戻らないものもあるけど今を生きている<br>どこへだって　何をしたって　誰も邪魔は出来ない<br>戻らない時の中で手と手を取り合い<br>何もない僕らからはじめようその輝きは<br>エメラルドのように"
            )
        };
    }
    // Joker
    if(document.getElementById('joker')) {
        document.getElementById("joker").onclick = function() {
            displayLyric(
                "Joker",
                "室山颯",
                "室山颯",
                "時にモノクロで 時に最悪な<br>人々が恐れ慄いていくジョーカー<br><br>時にカラフルで 時に最強な<br>誰しもが一度は手にしてみたいもんさ<br><br>決して触れてはいけないこと<br>でも私には関係ない<br>何でもありよ<br>恐れなんて知らない<br>唯一無二の存在<br>私があなたの切り札よ<br><br>誰も触れてはいけないこと<br>でも私には関係ない<br>何でもありよ<br>恐れなんて知らない<br>唯一無二の存在<br>私があなたの切り札よ<br>"
            )
        };
    }
    // 友達以上恋人未満
    if(document.getElementById('friend_lover')) {
        document.getElementById("friend_lover").onclick = function() {
            displayLyric(
                "友達以上恋人未満",
                "山﨑博士",
                "山﨑博士",
                "夜の街を歩く彼氏彼女は今日も<br>偽りとプライドの似通った加工で<br>騙し騙され合いなんて日常茶飯事<br><br>自らの欲望を満たすために明日も<br>取っ替え引っ替え相手をかえて <br>満足げにビールを飲んで眠る日々<br><br>それだけでは癒されないでも<br>温もりを感じていたいから <br>寂しくないようにそっと<br>君の名を呼ぶんだ<br><br>ねぇ ふたりの間に愛以上の感情はない<br>このまま燃えるような夜を過ごそうよ<br>ほらただ重なって繋ぎ合わせて<br>見えない快楽に溺れてしまっても <br>ふたりはそれでも求めるよ 「愛」<br><br>新宿の街を染め上げる灯り<br>今日もどこか寂しげなふたり<br>照らし続けるネオンの光<br>寄り添って惑わし引き裂く<br>価値観のずれ違和感の群れ <br>飛び込んだ上でもなお<br>何も残らない胸の奥　穴が空く<br><br>はじめましてこんにちは<br>出会いを求めて会いにきました<br>寂しさを紛らわすための関係で良いのか?<br><br>ふたりの間に、、、<br>このまま燃え尽きて<br>全てを忘れてしまいたいのに<br><br>ふたりの間に愛以上の感情はない<br>このまま燃えるような夜を過ごそうよ<br>ほらただ重なって繋ぎ合わせて<br>見えない快楽に溺れてしまっても<br>ふたりはそれでも求めるよ「愛」<br>"
            )
        };
    }
    // Witch
    if(document.getElementById('witch')) {
        document.getElementById("witch").onclick = function() {
            displayLyric(
                "Witch",
                "室山颯",
                "室山颯",
                "十五になると広がる外の世界で<br>美しくも儚い出会いの物語<br><br>お前が来ること私は分かっていたわ<br>願い事なら全部叶えてあげる<br><br>ただしその代償に大事なもの頂くよ<br><br>【例えどんな痛みもどんな苦しみも<br>あたし受け入れる覚悟はあるわ】<br>それならこの薬を口にしてみなよ<br>その代わりもう二度とは戻れないよ<br><br>【お願い気付いてあたしはここよ<br>このままでは消えてしまうわ】<br>助かる為のただ唯一の方法<br>そのナイフを胸にひと突きするの<br><br>【愛する貴方との日々終わってしまうの？】<br>どちらにせよこれでもうお終いさ<br>【別れを告げてそのナイフも捨てて】<br>最後は海に身を投げ泡となるの<br>"
            )
        };
    }
    // 夏が来るたび
    if(document.getElementById('summer')) {
        document.getElementById("summer").onclick = function() {
            displayLyric(
                "夏が来るたび",
                "室山颯",
                "室山颯",
                "雨の日が続いてる 少し重たいな<br>予報によればやっと梅雨が明けるみたいだ<br>何日か眠ればもうすぐ季節が巡る<br><br>空は青く高くどこまでも遠くて<br>光を仰ぎ目を閉じる<br><br>夏が来るたび思い出がそこにはあって<br>懐かしい日々に僕を連れ出してくれる<br><br>焼けるような暑い日が続いていた<br>疲れは溜まり無駄な日を過ごしてしまうけど<br>日が短くなる壁のカレンダーをめくる<br><br>海は碧く冷たくどこまでも深くて<br>闇に飛び込み泳いでいく<br><br>夏の終わりに薄れゆく記憶<br>今年の最後の花火が夜空に上がる<br><br>夏が来るたび思い出がそこにはあって<br>懐かしい日々に僕を連れ出してくれる<br><br>夏が来るたび<br>新しい日々に僕を連れて出してくれる<br>"
            )
        };
    }
    // ホシカッタモノ
    if(document.getElementById('want')) {
        document.getElementById("want").onclick = function() {
            displayLyric(
                "ホシカッタモノ",
                "山﨑博士",
                "山﨑博士",
                "ホシカッタモノって何だっけ？<br>気付いているうちに　消えていた<br>どうして　君はそばに　<br>このままいてくれないのかな<br><br>あんなに　大事にしてたものは　<br>どこへいったのかわからない<br>どうして　触れた数だけ　あなたの痛みが　<br>増えていった<br><br>消えない思い　苦しいこと　始めたものは　<br>星の数あるよ<br>初めてだ　それは初めてだ　どうやら<br>この先も　この先も　この先も　残るよ<br><br>いつの日にか　この意味も変わり<br>同じように　締め付ける日々は<br>いつの間にか　隣に追いやって ほら<br>僕らは　描いた傷を眺めていた<br><br>ホシカッタモノって　何だっけ？<br>与えられても　まだ　遠い目をしている<br>上書きしたくて　塗り潰すごとに<br>何が何だか　わからないんだよ　　<br><br>足りない思い　生まれる孤独　初めから全部　<br>指折り数えたら<br>そこにいた　いつも　そばにいた　ような<br>気がしてる　気がしてる　気がしてる　だけなんだ<br><br>いつの日にか　この意味も変わり<br>同じように　締め付ける日々は<br>いつの間にか　隣に追いやって ほら<br>僕らは　描いた傷を眺めていた<br><br>このままじゃ　いけないからって　言われたって<br>答えてよ　教えてよ　消してよ<br><br>大事なものは　いつもそばにあって<br>きっと　二択を　迫られる日々に<br>ずっと　悩むこと　これからも　続くから　<br>僕らは　互いに　傷を　蝕んでいく<br><br>いつの日にか　この意味も変わり<br>同じように　締め付ける日々は<br>いつの間にか　隣に追いやって ほら<br>僕らは　描いた傷を眺めていた<br>"
            )
        };
    }
    // 生き様と死に様
    if(document.getElementById('dead_alive')) {
        document.getElementById("dead_alive").onclick = function() {
            displayLyric(
                "生き様と死に様",
                "室山颯",
                "室山颯",
                "上手くいかないこともある<br>その度にイライラがつのる<br>他人を変えることなんて<br>誰にもできやしないよ<br><br>嫌いな上司の機嫌が悪かった<br>態度の悪い客にムカついた<br>そんな毎日に嫌気が差した <br><br>気楽にいこうぜ<br>誰が何を言おうとしようと関係ないのさ<br>所詮他所は他所、好きなようにやるんだ<br>僕は僕らしく、君は君らしく、<br>ありのままで生きていけばいいさ<br><br>なるようになるとただ生きてきた<br>将来なんてどうでもよかった<br>普通の人になれればよかった<br><br>誰のせいでもない<br>自分で選んだ道は 自分のせいだ<br>ただ辿り着く先に待ってるものは同じだ<br>いつか必ず、誰しも必ず、<br>死にゆくなら今は楽しもうか<br>"
            )
        };
    }
    // 正義
    if(document.getElementById('justice')) {
        document.getElementById("justice").onclick = function() {
            displayLyric(
                "正義",
                "室山颯",
                "室山颯",
                "いつになっても<br>間違った奴らの主張が罷り通る<br>嫌気が差すほど<br>腐った世の中の常識に押し潰されていく<br><br>何の為の正義で誰を守り<br>犠牲には目を瞑って何が正義だ<br><br>表の顔と裏の顔を<br>上手いこと人は使い分ける<br>金と権力と地位と名誉を<br>大義名分に奪い合い<br><br>誰かを守る振りをして自分を守り<br>多勢の見方の上で何をかざす<br><br>何の為の正義で誰を守り<br>犠牲には目を瞑って何が正義だ<br>"
            )
        };
    }
    // Q.E.D
    if(document.getElementById('qed')) {
        document.getElementById("qed").onclick = function() {
            displayLyric(
                "Q.E.D",
                "山﨑博士",
                "山﨑博士",
                "静寂を奪い取ってしまう君は<br>僕にとっての天使か悪魔か<br>どちらに転んでも<br>害はない故にわからない<br>あ〜どうすればいい<br><br>声かけてただ遠のいてしまわぬように<br>スタイルを決めて<br>それでもさ上手くいかなくて<br>ただ季節が流れてく<br><br>あの時あの場所で<br>出会えたことが今の僕の証明<br>小さな波紋が広がってゆくように<br>また君を好きになるから<br>明日には昨日のことを<br>笑いあって話せたら良いな<br>この気持ちを恋と呼ぶなら<br>僕はその問いの解答者<br>Q.E.D. Q.E.D. 見つけなくちゃ<br><br>ひとり＋ひとりの答えはふたり<br>こんな公式じゃ<br>君＋僕に当てはまらない<br>だから足して引いて掛けて割ってみたけど<br>あ〜どうすればいい<br><br>声もかけず<br>ただ遠巻きに見ているだけでは<br>何も始まらない<br>それではさ上手くいくことも<br>確率は0%<br><br>あの時あの場所で<br>出会えたことが今の僕の証明<br>小さな奇跡が重なってく度に<br>また君を好きになるから<br><br>明日には昨日のことを<br>笑いあって話せたら良いな<br>この気持ちを恋と呼ぶなら<br>僕はその問いの解答者<br>Q.E.D. Q.E.D. 探さなくちゃ<br><br>あの時あの場所で<br>出会えたことが今の僕の証明<br>小さな波紋が広がってゆくように<br>また君を好きになるから<br>だから僕は君の眼の前で<br>その答えを最後に解こうか<br>この気持ちを恋と呼ぶなら<br>僕はその問いの解答者<br>Q.E.D. Q.E.D.  君が好き<br>"
            )
        };
    }
    // 赤い靴
    if(document.getElementById('red_shoes')) {
        document.getElementById("red_shoes").onclick = function() {
            displayLyric(
                "赤い靴",
                "室山颯",
                "室山颯",
                "家は貧しく、裸足で過ごして<br>足を怪我した、そんなある時<br>一人の靴屋が恵んでくれた<br>赤い靴をボロボロになるまで履いた<br><br>母が亡くなり引き取られた私は<br>町で一番の美人に育った<br>王女が身につけた、一つの憧れ<br>ある時に靴屋で同じモノ見つけて<br><br>その美しさに、心奪われ<br>欲望に打ち負けた私は抑えきれなかった<br><br>どこへ行く時も、どんな時でも、<br>いつも履いて出かけて<br>何をする時も、考えること<br>頭の中赤い靴のことだけ<br><br>誰の注意にも聞く耳はもたず<br>我儘、思いのままに過ごした<br>そんな私には呪いがかけられ<br>靴が脱げない足が止まらない<br><br>踊り狂って、疲れ果てたわ<br>この赤い呪いと一緒に私の足切り落として<br><br>いくら償っても、祈り捧げても<br>赦されることはなくて<br>受けた恩忘れ、自分勝手で<br>そんな奴に天国も地獄もない<br>"
            )
        };
    }
    // 変身
    if(document.getElementById('transformation')) {
        document.getElementById("transformation").onclick = function() {
            displayLyric(
                "変身",
                "室山颯",
                "室山颯",
                "人には誰もが皆 見せられぬモノがある<br>押さえつけた欲望が 時に顔を出す<br><br>人には誰しもが皆 魅せられたモノがある<br>抑えきれないこの衝動が 体を突き動かせる<br>私の意思なのか 違う誰かなのか 揺らぐ心が今<br>私は 【貴方】あなたは？ 【わたし】<br>表が 【裏に】 裏は表になる<br><br>本当の私がもう 分からなくなる<br>姿や中身さえも変貌を遂げる<br>元々の私にはもう 戻りはしない？<br>その姿 鏡の中の 貴方こそが 私 か<br><br>人は生まれながらにして 変えられぬ性格もある<br>人当たりの良さの陰に 身を潜める<br><br>その薬を飲めば 隠れた側面が 何もかも脱ぎ捨てた<br>私は【奴隷】 苦しみも【痛みも】<br>自由と【引換】 その力に溺れてゆく<br><br>私の中の善悪を 例え切り離せたとしても<br>その人格に 飲み込まれていく<br>元々の私にはもう 戻ることはない<br>この姿 鏡の前の 私こそが 【私ならば】<br>ここで終止符、打つのさ<br>"
            )
        };
    }
    // HERO
    if(document.getElementById('hero')) {
        document.getElementById("hero").onclick = function() {
            displayLyric(
                "HERO",
                "室山颯",
                "室山颯",
                "僕はヒーローに いつかヒーローに<br>なれると信じているから<br><br>あぁ悔しくてたまらない<br>そんな日々に 肩を落としてる暇は無い<br>どんな困難な出来事もプラスに変えて<br><br>(チャンスはそこに転がってる)<br>顔上げてさらにその先へ<br><br>僕はヒーローに いつかヒーローに <br>最高に光輝く人に<br>そんなヒーローに きっとなれるから<br>前へ 前へ 進め<br><br>もう迷いは必要無い <br>信じた道へ 立ち止まってる暇はない<br><br>(準備は いつでも出来ている？)<br>前見続けさらにその先へ <br><br>僕はヒーローに いつかヒーローに<br>最高に熱く心を燃やし<br>今はヒーローに まだなれずとも<br>前へ 前へ 進め<br><br>僕の人生も 誰の人生も<br>最高のヒーローになる為に<br>君もヒーローに きっとなれるから<br>前へ 前へ 進め<br><br>僕はヒーローに いつかヒーローに <br>最高に光輝く人に<br>そんなヒーローに きっとなれるから<br>前へ 前へ 進め<br>未来へ 未来へ 進め<br><br>いつかヒーローに きっとヒーローに<br>誰も代わりはいない 僕だけの命だ"
            )
        };
    }
    // Wolf
    if(document.getElementById('wolf')) {
        document.getElementById("wolf").onclick = function() {
            displayLyric(
                "Wolf",
                "室山颯",
                "室山颯",
                "見た目だけでは何も信じてはいけない<br>月明かりが元の姿を照らす<br>「その違いには誰も気づく事は無い<br>今夜の犠牲は誰だ」<br></br>「騙し合いと騙され合いの中」<br>疑いの目は誰に向くのか<br>「その言葉は」嘘か「本当か」真実はどこだ<br>「疑心暗鬼に陥ったのなら」<br>お互いの顔はどう映るのか<br>「生き残るは」人か「魔物か」<br>その正体はどちらだ<br></br>どれだけの深い間柄でも関係ない<br>怪しい奴が選ばれるのさ<br>「自分を守る為にそれは仕方ない<br>今夜の犠牲は誰だ」<br><br>「騙し合いと騙され合いの中」<br>疑いの目は誰に向くのか<br>「その言葉は」嘘か「本当か」真実はどこだ<br>「疑心暗鬼に陥ったのなら」<br>お互いの顔はどう映るのか<br>「生き残るは」人か「魔物か」<br>その正体はどっちだ<br></br>「欺き偽り誤魔化しては」<br>疑いの目を誰に向けるのか<br>「その答えが」導く未来は幸か不幸かどちらだ"
            )
        };
    }
    // anata
    if(document.getElementById('anata')) {
        document.getElementById("anata").onclick = function() {
            displayLyric(
                "anata",
                "山﨑博士",
                "山﨑博士",
                "あなたが　これから　私を変えたら　今までのように　いてはくれない<br>それでも　いつかは　戻ると信じていた　二人で描いた夢は消えないはずだ<br><br>どんなに　私が　あなたを　愛していても　あなたはとぼけた顔をしている<br>笑ってよ　怒ってよ　私を見てよ　それだけでいい　あとは何もいらない<br>だから どうか ほっとかないでよ <br>ねぇもしも 私が一番にならなくても これからの二人になれなくても<br>そばにいたいんだよ 願いは届くと 信じて信じていたいだけだよ<br>私がどんなに泣き叫んでも あなたは無表情 眠ったままで<br>どうして何も言ってくれないの<br>わがままな 私に 何か言うことくらい あるでしょう<br><br>やっと 口を 開いた 何を言い出すかと　思えばごめんね<br>何それ　そんな言葉　聞きたかったわけじゃないよ　<br>謝らないでよ　空しくなるよ　だから　どうか　寂しくさせないで<br>ねぇ今の　私は何のためにいるの　今までの日々は嘘だったの<br>そばにいたいんだよ　それでもずっと　信じて　信じて　笑って見せてよ<br>私がどんな言葉 紡いでも　あなたの心は動かないの<br>どうして何も　感じてくれないの<br>わがままな　あたしを　抱きしめることくらい　出来るでしょう<br><br>どんなに　近づいても　あなたはこの手を握らない<br>小さく　蹲る　くらいなら　やめてよ<br>ねぇもしも　これが最後の思い出なら　これからの二人になれないなら<br>そばにいさせてよ　別れの時まで　信じて　信じていられるように<br>私の頬を伝う涙を見て　あなたはやっとめをさました<br>今まで　ありがとう　今まで　ありがとう<br>何度も　繰り返す　その言葉に私も ありがとう"
            )
        };
    }
    // 新世界
    if(document.getElementById('newworld')) {
        document.getElementById("newworld").onclick = function() {
            displayLyric(
                "新世界",
                "室山颯",
                "室山颯",
                "この頭脳で この知能で<br>腐り果てた 世を正す<br>邪魔する者は 逆らう者は<br>正義の名の下に裁く<br><br>この思想が この理想が<br>悪を暴き 世を変える<br>恐怖ではなく 支配でもない<br>目指すのは新世界の神だ<br>新世界の神だ<br><br>死神が僕を導いていく この力があれば<br>手を染めてしまったら 後には引けない<br>もう戻れない<br><br>おかしくなっていく 正義感も<br>暴走していく<br>狂い狂っていく 価値観も<br>壊れてしまう<br><br>歪んだ お月様<br>己こそが正義か<br>淀んだ 明かりが<br>世界を照らした<br><br>おかしくなっていく 正義感も<br>暴走していく<br>狂い狂っていく 価値観も<br>壊れてしまう<br>イカれてしまっている 神様も<br>見放している<br>名が刻まれる 鼓動はもう<br>すぐに止まる<br><br>砕けた お月様<br>最後の最後は足掻き<br>汚れた 明かりは<br>世界から消えた"
            )
        };
    }
    // 
    if(document.getElementById('')) {
        document.getElementById("").onclick = function() {
            displayLyric(
                "",
                "",
                "",
                ""
            )
        };
    }
}