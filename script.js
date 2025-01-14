// 获取显示时间的元素
const timeDisplay = document.getElementById('time-display');

function updateTime() {
    // 创建一个新的 Date 对象来获取当前时间
    const now = new Date();
    // 获取小时、分钟和秒
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 确保小时、分钟和秒始终是两位数字
    hours = hours < 10? '0' + hours : hours;
    minutes = minutes < 10? '0' + minutes : minutes;
    seconds = seconds < 10? '0' + seconds : seconds;

    // 组合时间字符串
    const timeString = `${hours}:${minutes}:${seconds}`;

    // 更新元素的文本内容
    timeDisplay.textContent = timeString;
}

// 页面加载时立即调用一次 updateTime 函数，确保初始时间正确显示
updateTime();

// 每隔一秒调用一次 updateTime 函数，更新时间显示
setInterval(updateTime, 1000);
