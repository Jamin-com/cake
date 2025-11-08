
/* --- モーダル (ポップアップ詳細画面) のスタイル終 --- */



/**

 * kurisumasu.js

 * クリスマスケーキ詳細表示機能

 */



document.addEventListener('DOMContentLoaded', function() {

    // ----------------------------------------------------

    // 1. ケーキアイテムをクリックしたときのイベント設定

    // ----------------------------------------------------

   

    // 全てのケーキアイテム（.cake-item）を取得

    const cakeItems = document.querySelectorAll('.cake-item');

   

    // 各アイテムにクリックイベントリスナーを設定

    cakeItems.forEach(item => {

        item.addEventListener('click', function() {

            // クリックされたアイテムのIDを取得 (例: 'cake1')

            const cakeId = item.id;

           

            // 詳細情報をモーダルにセットして表示

            showCakeDetailModal(cakeId);

        });

    });



    // ----------------------------------------------------

    // 2. モーダル（詳細ポップアップ）の表示/非表示ロジック

    // ----------------------------------------------------



    // モーダル要素を取得 (HTML側で後ほど追加します)

    const modal = document.getElementById('cakeDetailModal');

    const closeButton = document.querySelector('.modal-close');



    // モーダルを閉じるイベント

    if (closeButton) {

        closeButton.addEventListener('click', hideCakeDetailModal);

    }

   

    // モーダルのオーバーレイ部分をクリックしても閉じるイベント

    if (modal) {

        modal.addEventListener('click', function(e) {

            // モーダル自体がクリックされ、中身（modal-content）ではない場合に閉じる

            if (e.target === modal) {

                hideCakeDetailModal();

            }

        });

    }



    /**

     * 詳細モーダルを表示する関数

     * @param {string} id - クリックされたケーキのID

     */

    function showCakeDetailModal(id) {

        // ここで実際の詳細情報（説明文、材料など）をIDに基づいて取得・生成します。

        // 簡単化のため、ここではダミーデータを表示します。



        // 実際の詳細データ（本来は外部ファイルやオブジェクトから取得）

        const details = getCakeDetails(id);



        // モーダルのコンテンツを更新

        document.querySelector('.modal-title').textContent = details.name;

        document.querySelector('.modal-image').src = details.image;

        document.querySelector('.modal-detail').innerHTML = details.description;

        document.querySelector('.modal-prices').innerHTML = details.prices;





        // モーダルを表示

        if (modal) {

            modal.style.display = 'flex';

            // スクロールバーを隠し、背景のスクロールを止める

            document.body.style.overflow = 'hidden';

        }

    }



    /**

     * 詳細モーダルを非表示にする関数

     */

    function hideCakeDetailModal() {

        if (modal) {

            modal.style.display = 'none';

            // スクロールを元に戻す

            document.body.style.overflow = '';

        }

    }



    // ----------------------------------------------------

    // 3. 詳細データの定義 (仮データ)

    // ----------------------------------------------------



    function getCakeDetails(id) {

        switch (id) {

            case 'cake1':

                return {

                    name: '生クリームデコレーション',

                    image: '1ku.jpeg',

                    description: 'フレッシュないちごをサンドしたクリスマス定番のいちごショートのホールケーキ。<br>北海道産の産地指定道東(根釧地区)の生クリームをたっぷりと使用しています。',

                    prices: '4号 (12cm) / ¥4,104(税込)<br>5号 (15cm) / ¥4,806(税込)<br>6号 (18cm) / ¥5,724(税込)'

                };

            case 'cake2':

                return {

                    name: 'ミックスベリーのタルト',

                    image: '2ku.jpeg',

                    description: 'ジャマン冬の定番、根強い人気のミックスベリータルトのクリスマスバージョン。<br>しっかり焼きこんだタルト生地とアーモンドクリームの上に、たっぷりのベリーが乗った贅沢タルトです。',

                    prices: '16cm / ¥4,903(税込)<br>18cm / ¥5,578(税込)'

                };

            case 'cake3':

                return {

                    name: 'ブッシュドノエル',

                    image: '3ku.jpeg',

                    description: 'フワフワのチョコスポンジとチョコクリーム、中には自家製キャラメルバナーヌをアクセントで忍ばせました。<br>キャラメルとバナナとチョコレートが最高の組み合わせです。',

                    prices: '16cm / ¥4,644(税込)<br>18cm / ¥5,205(税込)'

                };

            case 'cake4':

                return {

                    name: 'ドゥジエム ショコラ',

                    image: '4ku.jpeg',

                    description: '2025シェフのスペシャリテ<br>軽いバニラムースと濃厚なラム酒の効いたマロンムースと、オールドジャマイカラムで香り付けしたマロングラッセをチョコムースで包み込みました。<br>大人のための聖夜の一台です。',

                    prices: '18cm / ¥6,264(税込)'

                };

            default:

                return { name: '詳細情報', image: '', description: '情報がありません。', prices: '' };

        }

    }


});
