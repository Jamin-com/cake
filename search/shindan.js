const cakes = [
 
  { name: "ショートケーキ", description: "こだわりの生クリームにいちごがぴったり！いちごはたっぷり二層",instagramUrl:"https://www.instagram.com/p/DDlYzvyvjjW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  { name: "生チョコショート",  description: "チョコレートクリームとバナナの相性ぴったりいちごも乗ってるよ",instagramUrl:"https://www.instagram.com/p/DFNFyXHv2Ap/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  { name: "紅茶のロールケーキ", description: "紅茶アールグレイが香るロールケーキ！女性に人気" },
  { name: "オペラ",  description: "コーヒーとガナッシュ、特製バタークリームの三重奏",instagramUrl:"https://www.instagram.com/p/DGFk8nKxtTq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "ジャマイカ",  description: "ラム酒のかおりがコーヒーの風味に合う大人な味",instagramUrl:"https://www.instagram.com/p/DB3L9rhx3cx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "ジャージープリン",  description: "とろとろプリンの上にはおいしい生クリーム！キャラメルソース付き",instagramUrl:" https://www.instagram.com/p/DGaWhGQRcIm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  { name: "ジャージープリン",  description: "美味しいジャージークリームを味わうためのシンプルなロールケーキ！",instagramUrl:"https://www.instagram.com/p/DC6WVytvwSN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "スフレ", description: "チーズケーキの定番。シンプルな蔵王チーズのおいしさが味わえるスフレ" },
  { name: "シューアラクレーム",  description: "カスタードたっぷり毎日出来立てのシュークリーム！",instagramUrl:"https://www.instagram.com/p/DGVOLfGPjnV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "ベリーベリーロール【季節限定】",  description: "実は昔のブッシュドノエルを商品化したベリークリームとチョコスポンジのロールケーキ" },
  { name: "すだちのタルト【季節限定】", description: "優しい甘みのメレンゲと酸味のあるすだちが相性抜群のタルト！",instagramUrl:"https://www.instagram.com/p/DBS7y1dPJkB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "タルト・オ・ポンム【季節限定】", description: "ボリューム満点キャラメルとリンゴのオリジナルタルト！",instagramUrl:"https://www.instagram.com/p/DBvk-8ZvMNf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "イチジクの焼きこみタルト【季節限定】", description: "イチジクの香りと甘みを引き出したきれいな焼込みタルト",instagramUrl:"https://www.instagram.com/p/DAsrYspvB5p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "洋ナシのタルト【季節限定】", description: "旬のおいしい洋ナシをしっかり追熟させタルトに！くるみを入れて焼きこみました" ,instagramUrl:"https://www.instagram.com/p/DBS6u7yv9d4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  { name: "かぼちゃプリン【季節限定】", description: "かぼちゃと生クリームがぴったりの濃厚プリン" ,instagramUrl:"https://www.instagram.com/p/DBVvBwVPi2C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  { name: "モンブラン【季節限定】",  description: "フランス本場洋栗使用の濃厚なモンブラン",instagramUrl: "https://www.instagram.com/p/DANyTwyvsaA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="  },
  { name: "和栗のモンブラン【季節限定】",  description: "和栗の優しい甘みをメレンゲと生クリームで引き出すモンブラン ",instagramUrl:"https://www.instagram.com/p/DAnaoH5PKUS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  { name: "エクレア【季節限定】",  description: "かぼちゃクリームが濃厚なエクレア！" ,instagramUrl:"https://www.instagram.com/p/DBQARIsvY3F/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  { name: "厚切りロール",  description: "厚切りのバタークリームロールケーキ！" },
  { name: "ガトーショコラ", description: "チョコレート系王道ガトーショコラ！生クリームも添えて" },
  { name: "ナルシス", description: "アプリコットとレアチーズが相性抜群の一品。チーズは濃厚なフランス産クリームチーズ",instagramUrl:"https://www.instagram.com/p/DCdxmnIR5jR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "ルモンテ", description: "キャラメルムースとチョコレートの濃厚だけど重くない絶妙なケーキ！" },
  { name: "ユウジュ【季節限定】",  description: "ココナッツと柑橘の組み合わせ！クリームが苦手な方でも食べれます" },
  { name: "ミントエバニーユ",  description: "クレープ生地の中にミントのクリーム" },
  { name: "ジュメル",  description: "かわいらしいビジュアルと中にはいちごのムース！" },
  { name: "バナナキャラメル",  description: "バナナ・チョコレート・キャラメルの濃厚なケーキ！" },
  { name: "レトロフランボワーズ", description: "チョコレートとベリーの組み合わせがお好きな方はこれ！上にはフランボワーズソース" },
  { name: "フォレノワール", description: "ちりばめられたグリオットと洋酒キルシュが効いた大人向けチョコケーキ。", instagramUrl:"https://www.instagram.com/p/DFg_XNsPK8C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "カフェオレロール", description: "チョコスポンジでカフェオレ風味のホワイトチョコクリームを包んだロールケーキ"  },
  { name: "クレームブリュレ",  description: "注文から裏で二度炙り、表面カリカリなかはとろとろ！",instagramUrl:"https://www.instagram.com/p/C_nbFAMPKsx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "ふわふわクレープ",  description: "クレープ生地の中にはいろんなフルーツと生クリーム！" },
  { name: "はっちくんのベイクドレモン",  description: "レモンが香る濃厚で小さいチーズケーキ",instagramUrl:"https://www.instagram.com/p/C_navRIPt8Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "オレンジのタルト【季節限定】",  description: "期間限定さわやかな甘さのオレンジタルト。中にはカスタード" },
  { name: "ドゥブルフロマージュ",  description: "蔵王チーズを使ったチーズケーキ、上にはフランボワーズソース",instagramUrl:"https://www.instagram.com/p/DEpChRlPyfj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { name: "いちごのタルト【季節限定】",  description: "いちごたっぷりのタルト！中にはカスタード",instagramUrl:"https://www.instagram.com/p/DGuSGJzvy16/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },  
  { name: "デリスオショコラ",  description: "中にはブリュレとチョコレートムースが入った濃厚チョコケーキ。洋酒キルシュに漬けたグリオットのアクセント",instagramUrl:"https://www.instagram.com/p/DALQskovxtJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },   
  { name: "ミックスベリーのタルト【季節限定】",  description: "ベリーたっぷりのタルト！あえてクリームはなくタルトを生かした味わい",instagramUrl:"https://www.instagram.com/p/DFHxMslRX4-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }, 
  { name: "安納芋のタルト【季節限定】",  description: "とっても甘いさつまいも安納芋をタルトに！中にはリンゴのコンポート",instagramUrl:"https://www.instagram.com/p/DClnr7fPAPN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
   { name: "パリブレスト",  description: "シュー生地に濃厚なアーモンドクリームをサンドしたフランス伝統菓子",instagramUrl:"https://www.instagram.com/p/DClVrjVP7aV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }, 
   { name: "レミーマルタン",  description: "洋酒レミーマルタンを味わうためのケーキ。バタークリームとガナッシュ！",instagramUrl:"https://www.instagram.com/p/DEKIAcnPDgW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
 { name: "ミルフレーズ【季節限定】",  description: "いちごの層が三層になったショートケーキの進化版！北海道産生クリーム使用。" },
{ name: "ロワイヤルフレーズ【季節限定】",  description: "いちごムースの上にはホワイトチョコムース。さらにフレッシュないちご！",instagramUrl:"https://www.instagram.com/p/DF7VqSQRV3H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
{ name: "ショコラアムール【季節限定】",  description: "ハート型のガトーショコラの中にフランボワーズとチョコチップを入れ焼きこみました！",instagramUrl:"https://www.instagram.com/p/DFzuuJSPnkp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
{ name: "カシスエマロン【季節限定】",  description: "相性の良いカシスとマロンのムースをクレープで包みました。寒い時期にぴったり" },
{ name: "タルト・オ・ショコラ・フランボワーズ【季節限定】",  description: "ビターなチョコとフランボワーズを贅沢に合わせました！仕上げは軽いシブーストクリーム",instagramUrl:"https://www.instagram.com/p/DF91-NSRAK-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
{ name: "シュワルツヴェルダー",  description: "シュワルツヴェルダーキルシュ酒をふんだんに使用した大人向けケーキ！チョコレートとフランボワーズのムースと相性抜群",instagramUrl:"https://www.instagram.com/p/DG-TVl_xfNA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
{ name: "アムール",  description: "マカロンの間にフレッシュライムのムースをサンドした一品。甘いマカロンにいちごの酸味がぴったりマッチします",instagramUrl:"https://www.instagram.com/p/DJ_XUdgxZWV/?utm_source=ig_web_copy_link" },
{ name: "マリブマンゴー",  description: "マンゴー＆ココナッツムースにココナッツリキュール(お酒)を効かせ、アクセントにはチョコムース！",instagramUrl:"https://www.instagram.com/p/DJ_XUdgxZWV/?utm_source=ig_web_copy_link" },
{ name: "ジャンジャンブル",  description: "チーズケーキとチョコムースの組み合わせ。ショウガの風味がアクセント！マカロンの帽子で飾りました",instagramUrl:"https://www.instagram.com/p/DJbPUEVxC83/?utm_source=ig_web_copy_link" },];

const searchBox = document.getElementById('searchBox');
const cakeList = document.getElementById('cakeList');

function renderCakes(filteredCakes) {
  cakeList.innerHTML = '';
  filteredCakes.forEach(cake => {
      const cakeItem = document.createElement('li');
      cakeItem.className = 'cake-item';
      cakeItem.innerHTML = `
          <h3>${cake.name}</h3>
          <p>${cake.description}</p>
      `;
      cakeItem.addEventListener('click', () => {
          // ケーキがクリックされたときにInstagramリンクに移動
          window.open(cake.instagramUrl, '_blank');
      });
      cakeList.appendChild(cakeItem);
  });
}

function filterCakes(query) {
  const lowerCaseQuery = query.toLowerCase();
  const queryWords = lowerCaseQuery.split('　').filter(word => word.length > 0); // 空白で区切ったキーワードを配列に

  return cakes.filter(cake => 
    queryWords.every(word => 
      cake.name.toLowerCase().includes(word) || 
      cake.description.toLowerCase().includes(word)
    )
  );
}

searchBox.addEventListener('input', (e) => {
  const query = e.target.value;
  const filteredCakes = filterCakes(query);
  renderCakes(filteredCakes);
});

// 初期表示ですべてのケーキを表示
renderCakes(cakes);
document.addEventListener('DOMContentLoaded', () => {
  const backToTopButton = document.querySelector('.back-to-top');

  // スクロールイベントを監視
  window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // スクロール量が300pxを超えたら表示
      if (scrollY > 300) {
          backToTopButton.classList.add('show');
      } else {
          backToTopButton.classList.remove('show');
      }
  });

  // ボタンをクリックしたらトップ
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // スムーズにスクロール
      });
  });
});
