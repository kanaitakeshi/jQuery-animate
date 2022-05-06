$(function(){

  
  // SNSボタンのhoverイベント
  $('.social-icon').hover(
    function(){
      // アニメーションでフォントサイズを30pxに拡大
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      // アニメーションでフォントサイズを24pxに縮小
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );
  

  // トップへ戻るボタンのclickイベント
  $('#top-btn').click(function(){

    // アニメーション500msでトップに戻る
    $('html, body').animate({ 
      'scrollTop': 0 
    }, 500);
  });
  

  // ヘッダー内の<a>タグをクリックしたときのclickイベント
  $('header a').click(function(){

    // クリックされた'href'属性を変数「id」に代入
    var id = $(this).attr('href');

    // 「id」までの距離を取得し変数「position」に代入
    var position = $(id).offset().top;

    // 「position」までアニメーション500msでスクロール
    $('html,body').animate({
      'scrollTop': position
    }, 500);
  });
  
});