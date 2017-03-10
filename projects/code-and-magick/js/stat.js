'use strict';

function drawCloud(ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(ctx, 110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  drawCloud(ctx, 100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили', 120, 45);
  ctx.fillText('Список результатов: ', 120, 65);

  var max = times[0];
  var min = times[0];

  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
    if (times[i] < min) {
      min = times[i];
    }
    var histoX = 140;
    var histoHeight = 150;
    var histoWidth = 40;
    var histoMargin = 50 + histoWidth;
    var step = histoHeight / max;
    var name = names[i];
    var time = times[i];
    var height = step * time;

    ctx.fillStyle = '#000000';
    ctx.fillText(time.toFixed(0), histoX + histoMargin * i, 90 + histoHeight - height);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0,0, 255, ', Math.random(), ')'].join('');
    }

    ctx.fillRect(histoX + histoMargin * i, 100 + histoHeight - height, histoWidth, height);

    ctx.fillStyle = '#000000';
    ctx.fillText(name, histoX + histoMargin * i, 100 + histoHeight + 20);
  }

};
