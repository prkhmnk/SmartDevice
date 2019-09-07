'use strict';

;(function () {

  var btnScrollDown = document.querySelector('#scroll_down');

  /**
   * Функция для перехода к разделу преимущществ.
   * @function
   */
  function scrollDown() {
    window.location.href = "#advantages";
  }

  if (btnScrollDown) {
    btnScrollDown.addEventListener('click', scrollDown);
  }

})();
