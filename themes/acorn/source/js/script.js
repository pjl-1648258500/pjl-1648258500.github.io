document.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var headerShadow = document.getElementById("header");
  if (scrollTop > 10)
  // headerShadow.classList.add("header-fixed"); //增加
  // headerShadow.classList.remove("header-fixed"); //去除
  headerShadow.classList.replace("header-absolute","header-fixed"); //替换
  else
  headerShadow.classList.replace("header-fixed","header-absolute"); //替换
}

feather.replace()

var tesObj = document.getElementsByName("carousel");
	//设置 value 值为 0 选中
	for(var i=0; i < tesObj.length; i++){
		if (tesObj[i].value=="0"){
			tesObj[i].checked = true;
			break;
			}
	}

(function() {
  var hero = document.querySelector(".hero-figure");
  if (!hero || !window.requestAnimationFrame) return;

  var canvas = document.createElement("canvas");
  canvas.className = "hero-data-canvas";
  canvas.setAttribute("aria-hidden", "true");
  hero.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var width = 0;
  var height = 0;
  var targetX = 0;
  var targetY = 0;
  var driftX = 0;
  var driftY = 0;
  var lastTime = 0;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var nodes = [
    { x: .14, y: .30, r: 1.8 },
    { x: .22, y: .62, r: 2.5 },
    { x: .34, y: .45, r: 1.9 },
    { x: .48, y: .24, r: 2.2 },
    { x: .58, y: .58, r: 1.7 },
    { x: .72, y: .36, r: 2.7 },
    { x: .84, y: .66, r: 2.1 },
    { x: .91, y: .28, r: 1.7 }
  ];

  function resize() {
    var rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawGrid(offsetX, offsetY) {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(214, 229, 240, .17)";
    ctx.fillStyle = "rgba(214, 229, 240, .38)";
    ctx.font = "12px Arial, sans-serif";

    for (var i = 1; i < 6; i++) {
      var x = width * i / 6 + offsetX * .34;
      ctx.beginPath();
      ctx.moveTo(x, height * .12);
      ctx.quadraticCurveTo(x + offsetX * .18, height * .5, x - offsetX * .12, height * .9);
      ctx.stroke();
      if (width > 760) ctx.fillText((106 + i * 3).toFixed(2) + "E", x + 8, height * .16);
    }

    for (var j = 1; j < 5; j++) {
      var y = height * j / 5 + offsetY * .26;
      ctx.beginPath();
      ctx.moveTo(width * .06, y);
      ctx.quadraticCurveTo(width * .5, y - offsetY * .16, width * .94, y + offsetY * .12);
      ctx.stroke();
      if (width > 760) ctx.fillText((18 + j * 4).toFixed(2) + "N", width * .07, y - 8);
    }
    ctx.restore();
  }

  function drawNetwork(offsetX, offsetY, time) {
    ctx.save();
    var points = nodes.map(function(node, index) {
      return {
        x: node.x * width + offsetX * (index % 2 ? .42 : -.28),
        y: node.y * height + offsetY * (index % 3 ? .32 : -.22),
        r: node.r
      };
    });

    ctx.lineWidth = 1.4;
    ctx.strokeStyle = "rgba(150, 180, 205, .22)";
    ctx.beginPath();
    points.forEach(function(point, index) {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.stroke();

    points.forEach(function(point, index) {
      var pulse = 1 + Math.sin(time / 650 + index) * .22;
      ctx.beginPath();
      ctx.fillStyle = index % 4 === 0 ? "rgba(139, 46, 46, .42)" : "rgba(198, 218, 233, .46)";
      ctx.arc(point.x, point.y, point.r * pulse + 2.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = index % 4 === 0 ? "rgba(180, 62, 62, .68)" : "rgba(210, 230, 244, .72)";
      ctx.arc(point.x, point.y, point.r * pulse, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  }

  function draw(time) {
    if (!lastTime) lastTime = time;
    if (reduceMotion && time - lastTime < 900) {
      requestAnimationFrame(draw);
      return;
    }
    lastTime = time;

    driftX += (targetX - driftX) * .045;
    driftY += (targetY - driftY) * .045;
    ctx.clearRect(0, 0, width, height);
    drawGrid(driftX, driftY);
    drawNetwork(driftX, driftY, time);
    requestAnimationFrame(draw);
  }

  function updatePointer(event) {
    var rect = hero.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - .5) * 42;
    targetY = ((event.clientY - rect.top) / rect.height - .5) * 32;
  }

  resize();
  window.addEventListener("resize", resize);
  hero.addEventListener("mousemove", updatePointer);
  hero.addEventListener("mouseleave", function() {
    targetX = 0;
    targetY = 0;
  });
  requestAnimationFrame(draw);
})();
