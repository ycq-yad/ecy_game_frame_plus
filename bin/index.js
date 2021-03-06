//-----libs-begin-----
loadLib("libs/laya.core.js")
//-----libs-end-------
/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
// window.screenOrientation = "sensor_landscape";
window.screenOrientation = "portrait";

// loadLib("../bLib/system.js");

// setTimeout(() => {
//     System.import('../bLib/bLib.js').then(function (m) {
//         console.log("yes bLib"); // yay

let jsUrlArr =
    [
        "libsN/laya.core.js",
        "libsN/laya.ui.js",
        "libsN/laya.ani.js",
        "libsN/bLib.js",
        "libsN/promise.min.js",
        "js/bundle.js"
    ];
var nPercent = 0;
var len = jsUrlArr.length;
for (let i = 0, len = jsUrlArr.length; i < len; i++) {
    loadLib(jsUrlArr[i]);
    if (window.loadingView) {
        nPercent += Math.floor(100 / len) + 2;
        if (nPercent >= 100) {
            nPercent = 90;
        }
        window.loadingView.loading(nPercent);
    }
}
//     });
// }, 1000);


//测试appmsg
// setInterval(()=>{
//     if (window.loadingView) {
//         window.loadingView.showSomeLabel("cc dd aa");
//     }
// },1000);
