# js-music

原生 JS 实现的极简音乐播放器

## 使用到的 API

获取或创建 audio 对象：

```html
<audio id="music"></audio>
<script>
let audioObject = document.querySelector('#music')
/* 或者不需要 HTML 直接创建 */
let audioObject = new Audio() // 可以传音乐地址
</script>
```

设置或获取音乐地址：

```js
audioObject.src = URL
let musicSrc = audioObject.src
```

播放和暂停：

```js
audioObject.play()
audioObject.pause()
```

音量：

```js
audioObject.volume = 1 // 设置声音大小，[0,1] 的值
audioObject.muted = true // 设置静音，false 为非静音
```

音乐总时长和当前时间：

```js
let totalTime = audioObject.duration
let currentTime = audioObject.currentTime
```

播放、暂停、结束、更新等事件：

```js
audioObject.addEventListener('playing', function(){
  console.log('playing')
})
audioObject.addEventListener('pause', function(){
  console.log('pause')
})
audioObject.addEventListener('ended', function(){
  console.log('ended')
})
audioObject.addEventListener('update', function(){
  console.log('update')
})
```

## 歌词处理

歌词是 lrc 的格式

```lrc
[00:00.00]歌词第一句
[00:03.50]歌词第二句
[00:07.00]歌词第三句
```

进行了 BASE64 编码，使用下述代码进行解码：

```js
const decodeBase64 = (str) => {
  return decodeURIComponent(escape(window.atob(str)));
}
```

把每一行都拆成时间和歌词的对象，然后所有行组成数组，播放时检测当前时间，用当前行和下一行歌词的时间和当前时间进行对比，在播放区间内就显示当前行歌词

## 顺序播放

循环可以使用自带的 API 实现，但是为了方便，统一自己处理

- 顺序播放
  - 歌曲结束后顺序播放下一曲
  - 播放完最后一曲之后自动暂停
- 列表循环
  - 顺序播放下一曲
  - 最后一曲播放完成后播放第一首
- 单曲循环
  - 一直重复播放当前歌曲
- 随机播放
  - 生成一个 [0, 列表长度) 的随机数（不为当前值）
  - 播放完当前歌曲后播放这个随机的歌曲
