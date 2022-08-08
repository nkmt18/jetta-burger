// // ================================
// // 
// // ハンバーガーメニュー
// // 
// // ================================





// // ================================
// // 
// // トップページのナビゲーションの変更
// // 
// // ================================


// var headerH = $("#header").outerHeight(true);//headerの高さを取得    

// //スクロール途中からヘッダーの高さを変化させるための設定を関数でまとめる
// function FixedAnime() {
//   //ヘッダーの高さを取得
//   var scroll = $(window).scrollTop();
//   if (scroll >= headerH) {//ヘッダーの高さを超えたら
//     $('#header').addClass('HeightMin');//#headerについているHeightMinというクラス名を付与
//   } else {
//     $('#header').removeClass('HeightMin');//HeightMinというクラス名を除去
//   }
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//   FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
//   FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
// });


// //リンク先のidまでスムーススクロール
// //※ページ内リンクを行わない場合は不必要なので削除してください
// $('#g-navi li a').click(function () {
//   var headerVal = $("#header").outerHeight(true);	//現在のheaderの高さを取得    

//   //ヘッダーが高さの状態を取得してスクロールする範囲を調整する
//   var scroll = $(window).scrollTop();	//スクロール
//   var adjust = 0						//調整の変数
//   if (scroll <= headerVal) {			//スクロールとヘッダーの高さを取得
//     adjust = 70;					//スクロール値がヘッダーの高さ以内であれば調整変数に70を入れる
//   }

//   var elmHash = $(this).attr('href'); //hrefを取得
//   var pos = $(elmHash).offset().top - headerVal - adjust;	//クリックしたheader分の高さと調整分を引いた高さまでスクロール

//   $('body,html').animate({ scrollTop: pos }, 1000);
//   return false;
// });



// // ================================
// // 
// // トップページのスリックスライダー
// // 
// // ================================

$('.home-slider').slick({
  fade: true,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed: 800,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: false,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
  $('.slider').slick('slickPlay');
});


// ================================
// 
// メニューページのスリックスライダー
// 
// ================================

$('.slider').slick({
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: false,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
});


// ================================
// 
// アバウトページのスリックスライダー
// 
// ================================



$('.about-slider').slick({
  fade: true,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed: 800,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: false,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: false,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
  $('.slider').slick('slickPlay');
});