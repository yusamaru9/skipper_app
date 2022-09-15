/* global $*/

let title = "javascriptが使えました";
alert(title);


$(document).ready(function(){
  $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
});

$(document).ready(function () {
  $("#theTarget").skippr({
    //スライドショーの変化
    transition : 'slide',
    //変化にかかる時間
    speed : 1000,
    //easingの種類
    easing : 'easeOutQuart',
    //ナビゲーションの形
    navType : 'block',
    //子要素の種類
    childrenElementType : 'div',
    //ナビゲーション矢印の表示
    arrows : true,
    //スライドショーの自動再生
    autoPlay : true,
    //自動再生時のスライド切り替え間隔
    autoPlay : true,
    //自動再生時のスライド切り替え間隔
    autoPlayDuration : 3000,
    //キーボードの矢印キーによるスライド送りの設定
    keyboardOnAlways : true,
    //一枚前のスライド表示時に戻る矢印を表示するかどうか
    hidePrevious : false
  });
});