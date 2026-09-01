/* Seven Kilo Enterprises - mobile drawer only */
(function(){
  var b = document.getElementById('hbg'), d = document.getElementById('md');
  if(!b || !d) return;
  b.addEventListener('click', function(){
    var open = d.classList.toggle('op');
    b.classList.toggle('op', open);
    b.setAttribute('aria-expanded', String(open));
  });
})();
