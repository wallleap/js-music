const playList = [
  {
    title: 'Valder Fields',
    artist: 'Tamas Wells',
    link: '//cdn.wallleap.cn/musics/1.mp3',
    cover: 'https://cdn.wallleap.cn/musics/1.jpg',
    lyric: 'WzAwOjAwLjAwXVZhbGRlciBGaWVsZHMgLSBUYW1hcyBXZWxscwpbMDA6MDIuMDNdSSB3YXMgZm91bmQgb24gdGhlIGdyb3VuZCBieSB0aGUgZm91bnRhaW4gYXQgVmFsZGVyClswMDowNy4zNl1GaWVsZHMgYW5kIHdhcyBhbG1vc3QgZHJ5ClswMDoxMC40N11MeWluZyBpbiB0aGUgc3VuIGFmdGVyIEkgaGFkIHRyaWVkClswMDoxMy45MF0KWzAwOjE0LjUwXUx5aW5nIGluIHRoZSBzdW4gYnkgdGhlIHNpZGUKWzAwOjIxLjYzXVdlIGhhZCBhZ3JlZWQgdGhhdCB0aGUgY291bmNpbCB3b3VsZCBlbmQgYXQKWzAwOjI1Ljc3XVRocmVlIGhvdXJzIG92ZXIgdGltZQpbMDA6MjguODJdU2hvZWxhY2VzIHdlcmUgdGllZCBhdCB0aGUgdHJhZmZpYyBsaWdodHMKWzAwOjMyLjI0XQpbMDA6MzIuODZdSSB3YXMgcnVubmluZyBsYXRlIEkgY291bGQgYXBwbHkKWzAwOjM4Ljc0XQpbMDA6MzkuMzFdRm9yIGFub3RoZXIgb25lIEkgZ3Vlc3MKWzAwOjQyLjY2XQpbMDA6NDMuMThdSWYgZGVwYXJ0bWVudCBzdG9yZXMgYXJlIGJlc3QKWzAwOjQ2Ljg2XQpbMDA6NDcuMzZdVGhleSBzYWlkIHRoZXJlIHdvdWxkIGJlIGRlbGF5cyAKWzAwOjUxLjY3XU9ubHkgdGVtcG9yYXJ5IHBheQpbMDA6NTUuNDldClswMTozNC43N11Gb3IgYW5vdGhlciBvbmUgSSBndWVzcwpbMDE6MzguNjBdSWYgZGVwYXJ0bWVudCBzdG9yZXMgYXJlIGJlc3QKWzAxOjQyLjY1XVRoZXkgc2FpZCB0aGVyZSB3b3VsZCBiZSBkZWxheXMgClswMTo0Ni45NV1Pbmx5IHRlbXBvcmFyeSBwYXkKWzAxOjUwLjQ2XQpbMDE6NTEuODhdU2hlIHdhcyBmb3VuZCBvbiB0aGUgZ3JvdW5kIGluIGEgZ293biBtYWRlIGF0IFZhbGRlcgpbMDE6NTguMjZdRmllbGRzIGFuZCB3YXMgc291bmQgYXNsZWVwClswMjowMC43Ml0KWzAyOjAxLjI3XU9uIHRoZSBzdGFpcnMgb3V0c2lkZSB0aGUgZG9vciB0byB0aGUgbWFuIHdobyBjcmllZApbMDI6MDQuNzldClswMjowNS4zNV1XaGVuIGhlIHNhaWQgdGhhdCBoZSBsb3ZlZCBoaXMgbGlmZQpbMDI6MTEuMDldClswMjoxMi40OV1XZSBoYWQgYWdyZWVkIHRoYXQgdGhlIGNvdW5jaWwgc2hvdWxkIHRha2UgaGlzClswMjoxNi42N11LZXlzIHRvIHRoZSBiZWRyb29tIGRvb3IKWzAyOjE5LjE1XQpbMDI6MTkuNjldSW5jYXNlIGhlIHNsZWVwZWQgb3V0c2lkZSBhbmQgd2FzIGZvdW5kIGluIHR3bwpbMDI6MjMuMTBdClswMjoyMy42N11EYXlzIGluIFZhbGRlciBmaWVsZHMgd2l0aCBhIG1vdW50YWluIHZpZXcK'
  },
  {
    title: '仰望',
    artist: '明望组合',
    link: '//cdn.wallleap.cn/musics/2.mp3',
    cover: '//cdn.wallleap.cn/musics/2.jpg',
  },
  {
    title: '笑',
    artist: '太一',
    link: '//cdn.wallleap.cn/musics/3.mp3',
    cover: '//cdn.wallleap.cn/musics/3.jpg',
    lyric: ''
  },
  {
    title: '藏',
    artist: '徐梦圆/双笙',
    link: '//cdn.wallleap.cn/musics/4.mp3',
    cover: '//cdn.wallleap.cn/musics/4.jpg',
  },
  {
    title: '桥路不相逢',
    artist: '浩蓝',
    link: '//cdn.wallleap.cn/musics/5.mp3',
    cover: '//cdn.wallleap.cn/musics/5.jpg',
  },
  {
    title: '情话微甜',
    artist: '王圣锋/李朝',
    link: '//cdn.wallleap.cn/musics/6.mp3',
    cover: '//cdn.wallleap.cn/musics/6.jpg',
  },
  {
    title: '最美情侣',
    artist: '白小白',
    link: '//cdn.wallleap.cn/musics/7.mp3',
    cover: '//cdn.wallleap.cn/musics/7.jpg',
  },
  {
    title: '拜托',
    artist: '孙晨',
    link: '//cdn.wallleap.cn/musics/8.mp3',
    cover: '//cdn.wallleap.cn/musics/8.jpg',
  },
  {
    title: '恶人',
    artist: '孙子涵/Xun(易硕成)',
    link: '//cdn.wallleap.cn/musics/9.mp3',
    cover: '//cdn.wallleap.cn/musics/9.jpg',
  },
  {
    title: '城外',
    artist: '蔡旻佑',
    link: '//cdn.wallleap.cn/musics/10.mp3',
    cover: '//cdn.wallleap.cn/musics/10.jpg',
  },
  {
    title: '洋葱',
    artist: '王俊凯/王源',
    link: '//cdn.wallleap.cn/musics/11.mp3',
    cover: '//cdn.wallleap.cn/musics/11.jpg',
  },
  {
    title: '烈酒',
    artist: '屈原',
    link: '//cdn.wallleap.cn/musics/12.mp3',
    cover: '//cdn.wallleap.cn/musics/12.jpg',
  },
  {
    title: '透明',
    artist: '郑国锋',
    link: '//cdn.wallleap.cn/musics/13.mp3',
    cover: '//cdn.wallleap.cn/musics/13.jpg',
  },
  {
    title: '再见了我的爱',
    artist: '至上励合',
    link: '//cdn.wallleap.cn/musics/14.mp3',
    cover: '//cdn.wallleap.cn/musics/14.png',
  },
]


// #region 工具函数，放在前面
const formatSec = (secTime) => {
  return `${parseInt(parseInt(secTime) / 60)}:${parseInt(secTime) % 60 >= 10 ? parseInt(secTime) % 60 : '0' + parseInt(secTime) % 60}`
}
const getRand = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start
}
const getStorage = (key, value) => {
  let result = value
  localStorage.getItem(key) ? (result = localStorage.getItem(key)) : localStorage.setItem(key, value)
  // TODO: 删除
  /* if (key !== 'currentTime') {
    console.log('get', key, result)
  } */
  return result
}
const setStorage = (key, value) => {
  // TODO: 删除
  /* if (key !== 'currentTime') {
    console.log('set', key, value)
  } */
  localStorage.setItem(key, value)
}
const setTips = (text, type) => {
  let $tipWrap = document.createElement('div')
  let $tipText = document.createElement('h2')
  let $style = document.createElement('style')
  $tipWrap.classList.add('tip-wrap')
  $style.innerText = `
    @keyframes fromTop {
      0% {
        top: -10%
      }
      100% {
        top: 50%
      }
    }
  `
  $tipWrap.style.cssText = `
    box-sizing: border-box;
    text-align: center;
    font-size: 24px;
    padding: 1em 2em;
    border-radius: 16px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    animation: fromTop .3s ease;
  `
  $tipText.innerText = text
  switch (type) {
    case 'error':
      $tipText.style.color = 'rgb(255,0,0)'
      $tipWrap.style.backgroundColor = 'rgba(255,0,0,.1)'
      break
    case 'warn':
      $tipText.style.color = 'rgb(250,128,2)'
      $tipWrap.style.backgroundColor = 'rgba(250,128,2,.1)'
      break
    case 'success':
      $tipText.style.color = 'rgb(0,255,0)'
      $tipWrap.style.backgroundColor = 'rgba(0,255,0,.1)'
      break
    case 'toast':
    default:
      $tipText.style.color = 'rgb(0,0,0)'
      $tipWrap.style.backgroundColor = 'rgba(0,0,0,.1)'
      break
  }
  $tipWrap.append($tipText)
  document.body.append($tipWrap)
  document.head.append($style)
  let tipTimer = setTimeout(function () {
    $tipWrap.remove()
    clearTimeout(tipTimer)
  }, 1000)
}
const decodeBase64 = (str) => {
  return decodeURIComponent(escape(window.atob(str)));
}
// #endregion

// #region 已加载的 DOM 元素获取
const $ = el => document.querySelector(el)
const $$ = els => document.querySelectorAll(els)
const $title = $('.title'),
  $artist = $('.artist'),
  $cover = $('.cover'),
  $playBtn = $('.play-btn'),
  $playIcon = $('.icon-play'),
  $pauseIcon = $('.icon-pause'),
  $preBtn = $('.pre-btn'),
  $nextBtn = $('.next-btn'),
  $controls = $('.controls'),
  $progress = $('.progress'),
  $currentBar = $('.current-bar'),
  $current = $('.time>.current'),
  $total = $('.time>.total'),
  $songs = $('.songs'),
  $lyricInner = $('.lyric-inner'),
  $orderBtn = $('.order-btn'),
  $$orderIcons = $orderBtn.querySelectorAll('.music-icon'),
  $orderIcon = $('.icon-order'),
  $loopIcon = $('.icon-loop'),
  $repeatIcon = $('.icon-repeat'),
  $randIcon = $('.icon-rand'),
  $volBtn = $('.vol-btn'),
  $$volIcons = $$('.vol-btn>.music-icon'),
  $loudIcon = $('.icon-loud'),
  $volumeIcon = $('.icon-volume'),
  $quietIcon = $('.icon-quiet'),
  $muteIcon = $('.icon-mute'),
  $menuIcon = $('.icon-menu'),
  $volBar = $('.vol-progress')
// #endregion

// #region 播放前的一些变量和函数
const audioObj = new Audio()
let playTimer = null
let index = parseInt(getStorage('index', 0), 10)
let angle = 0
let isPlaying = getStorage('isPlaying', 'no')
let orderFlag = parseInt(getStorage('orderFlag', 0), 10)
let volFlag = parseInt(getStorage('volFlag', 3))
let isMuted = getStorage('isMuted', 'no')
let volValue = getStorage('volValue', 1)
let orderList = ['顺序播放', '列表循环', '单曲循环', '随机播放']
let isDraging = false
let dragTimer = null

const setVolume = () => {
  audioObj.volume = getStorage('volValue')
  isMuted = 'no'
  $$volIcons.forEach((vol, i) => {
    vol.classList.remove('show')
  })
  if (audioObj.volume >= 0.8) { // loud
    volFlag = 3
    $loudIcon.classList.add('show')
  } else if (audioObj.volume >= 0.5) { // volume
    volFlag = 2
    $volumeIcon.classList.add('show')
  } else if (audioObj.volume > 0) { // quiet
    volFlag = 1
    $quietIcon.classList.add('show')
  } else {
    volFlag = 0
    isMuted = 'yes'
    $muteIcon.classList.add('show')
  }
  setStorage('isMuted', isMuted)
  setStorage('volFlag', volFlag)
}
const setSong = (cIndex) => {
  angle = 0
  $title.innerText = playList[cIndex].title
  $artist.innerText = playList[cIndex].artist
  audioObj.src = playList[cIndex].link
  $cover.style.backgroundImage = `url(${playList[cIndex].cover})`
}
const getLyric = cIndex => {
  let lrcArr = decodeBase64(playList[cIndex].lyric).split('\n')
  let lrcs = []
  lrcArr.forEach((item) => {
    let temp = item.split('\]')
    if(temp[1]) {
      lrcs.push(JSON.parse(`{"time": "${temp[0].slice(1)}", "text": "${temp[1]}"}`))
    }
  })
  return lrcs
}
let lyricArr = getLyric(0)
console.log(lyricArr[0]);
const initPlayer = (cIndex) => {
  clearInterval(playTimer)
  let $fragment = document.createDocumentFragment()
  let $lrcFragment = document.createDocumentFragment()
  playList.forEach(song => {
    let $songItem = document.createElement('li')
    $songItem.classList.add('song')
    $songItem.innerHTML = `
      <div class="song-info">
        <div class="song-cover">
          <img src="${song.cover}" alt="cover">
        </div>
        <div class="song-text">
          <h3 class="song-title">${song.title}</h3>
          <p class="song-artist">${song.artist}</p>
        </div>
      </div>
      <div class="song-btn">
        <svg class="music-icon icon-play">
          <use xlink:href="./assets/icons.svg#play" />
        </svg>
        <svg class="music-icon icon-pause hide">
          <use xlink:href="./assets/icons.svg#pause" />
        </svg>
      </div>
    `
    $fragment.appendChild($songItem)
  })
  $songs.append($fragment)
  lyricArr.forEach(lrc => {
    let $lrc = document.createElement('p')
    $lrc.textContent = lrc.text
    $lrcFragment.append($lrc)
  })
  $lyricInner.append($lrcFragment)
  $lyricInner.querySelector('p').classList.add('on')
  $$orderIcons.forEach((icon) => {
    icon.classList.remove('show')
  })
  $$orderIcons[orderFlag].classList.add('show')
  if (!$playIcon.classList.contains('hide')) {
    isPlaying = 'no'
    setStorage('isPlaying', isPlaying)
  }
  $volBar.value = volValue
  audioObj.volume = volValue
  setVolume()
  setSong(cIndex)
}
// #endregion

// #region 初始化
initPlayer(index)
audioObj.addEventListener('canplay', function () {
  $current.innerText = formatSec(getStorage('currentTime', 0))
  $total.innerText = formatSec(audioObj.duration)
  $currentBar.style.width = `${getStorage('currentTime') / audioObj.duration * 100}%`
})
// #endregion

// #region 初始化后才有的 DOM 元素
const $$song = $$('.song'),
  $songBtn = $(`.song-btn`),
  $$lrcs = $$('.lyric-inner>p')
// #endregion

// #region 封装后面常用的函数
const playMusic = (audioObject, idx) => {
  audioObject.play()
  $$song[idx].classList.add('current')
  $cover.classList.add('transition')
  $pauseIcon.classList.remove('hide')
  $playIcon.classList.add('hide')
}
const pauseMusic = (audioObject, idx) => {
  audioObject.pause()
  $$song[idx].classList.remove('current')
  $pauseIcon.classList.add('hide')
  $playIcon.classList.remove('hide')
}
// #endregion

// #region 系统事件
audioObj.addEventListener('playing', function () {
  clearInterval(playTimer)
  $cover.classList.add('transition')
  $total.innerText = formatSec(audioObj.duration)
  playTimer = setInterval(function () {
    setStorage('currentTime', audioObj.currentTime)
    $current.innerText = formatSec(audioObj.currentTime)
    $currentBar.style.width = `${audioObj.currentTime / audioObj.duration * 100}%`
    angle += 180
    $cover.style.transform = `rotate(${angle}deg)`
  }, 1000)
})
audioObj.addEventListener('pause', function () {
  clearInterval(playTimer)
  $cover.style.transform = `rotate(${angle}deg)`
  $$song.forEach((cSong) => {
    cSong.classList.remove('current')
  })
  $pauseIcon.classList.add('hide')
  $playIcon.classList.remove('hide')
})
audioObj.addEventListener('ended', function () {
  clearInterval(playTimer)
  $$song.forEach((cSong) => {
    cSong.classList.remove('current')
  })
  $pauseIcon.classList.add('hide')
  $playIcon.classList.remove('hide')
  angle = 0
  audioObj.pause()
  $$song[index].classList.remove('current')
  switch (parseInt(getStorage('orderFlag'), 10)) {
    case 0:
      if (index === playList.length - 1) {
        $current.innerText = formatSec(audioObj.duration)
        audioObj.pause()
      } else {
        index = index >= playList.length - 1 ? index = 0 : ++index
        setStorage('index', index)
        setSong(index)
        audioObj.play()
        $playIcon.classList.add('hide')
        $pauseIcon.classList.remove('hide')
        $$song[index].classList.add('current')
      }
      break
    case 1:
      index = index >= playList.length - 1 ? index = 0 : ++index
      setStorage('index', index)
      setSong(index)
      audioObj.play()
      $playIcon.classList.add('hide')
      $pauseIcon.classList.remove('hide')
      $$song[index].classList.add('current')
      break
    case 2:
      setSong(index)
      audioObj.play()
      $playIcon.classList.add('hide')
      $pauseIcon.classList.remove('hide')
      $$song[index].classList.add('current')
      break
    case 3:
      index = getRand(0, playList.length)
      setStorage('index', index)
      setSong(index)
      audioObj.play()
      $playIcon.classList.add('hide')
      $pauseIcon.classList.remove('hide')
      $$song[index].classList.add('current')
      break
  }
})
audioObj.onvolumechange = function () {
  $volBar.value = audioObj.volume
  setVolume()
}
// #endregion

// #region 用户触发事件
$playBtn.onclick = function () {
  audioObj.currentTime = getStorage('currentTime')
  if (getStorage('isPlaying') === 'yes') {
    pauseMusic(audioObj, parseInt(getStorage('index'), 10))
    isPlaying = 'no'
  } else {
    playMusic(audioObj, parseInt(getStorage('index'), 10))
    isPlaying = 'yes'
  }
  setStorage('isPlaying', isPlaying)
}
$preBtn.onclick = function () {
  clearInterval(playTimer)
  angle = 0
  $$song.forEach((cSong) => {
    cSong.classList.remove('current')
  })
  setStorage('currentTime', 0)
  switch (parseInt(getStorage('orderFlag'), 10)) {
    case 0:
    case 1:
    case 2:
      index = index === 0 ? index = playList.length - 1 : --index
      setStorage('index', index)
      break
    case 3:
      let randNum = getRand(0, playList.length)
      index = (randNum === index ? (index === 0 ? index = playList.length - 1 : --index) : randNum)
      setStorage('index', index)
      break
  }
  isPlaying = 'yes'
  setSong(index)
  setStorage('isPlaying', isPlaying)
  setStorage('index', index)
  playMusic(audioObj, index)
}
$nextBtn.onclick = function () {
  clearInterval(playTimer)
  angle = 0
  audioObj.pause()
  $$song.forEach((cSong) => {
    cSong.classList.remove('current')
  })
  setStorage('currentTime', 0)
  switch (parseInt(getStorage('orderFlag'), 10)) {
    case 0:
    case 1:
    case 2:
      index = index >= playList.length - 1 ? index = 0 : ++index
      setStorage('index', index)
      break
    case 3:
      let randNum = getRand(0, playList.length)
      index = (randNum === index ? (index >= playList.length - 1 ? index = 0 : ++index) : randNum)
      setStorage('index', index)
      break
  }
  isPlaying = 'yes'
  setSong(index)
  setStorage('index', index)
  setStorage('isPlaying', isPlaying)
  playMusic(audioObj, index)
}
$$song.forEach((song, currentIndex) => {
  song.onclick = function () {
    clearInterval(playTimer)
    index = parseInt(getStorage('index'), 10)
    $$song.forEach((cSong, idx) => {
      cSong.classList.remove('current')
      pauseMusic(audioObj, idx)
    })
    setSong(currentIndex)
    if (currentIndex === index) {
      audioObj.currentTime = getStorage('currentTime')
      if (getStorage('isPlaying') === 'yes') {
        pauseMusic(audioObj, index)
        isPlaying = 'no'
      } else {
        playMusic(audioObj, index)
        isPlaying = 'yes'
      }
      setStorage('isPlaying', isPlaying)
    } else {
      angle = 0
      setStorage('currentTime', 0)
      playMusic(audioObj, currentIndex)
    }
    index = currentIndex
    setStorage('index', index)
  }
})
$progress.addEventListener('click', function (event) {
  let per = event.offsetX / this.clientWidth
  $currentBar.style.width = per * 100 + "%"
  audioObj.currentTime = audioObj.duration * per
  setStorage('currentTime', audioObj.currentTime)
  $current.innerText = formatSec(audioObj.currentTime)
  $total.innerText = formatSec(audioObj.duration)
})
const pressDown = (event) => {
  isDraging = true
  let clientX = 0
  let rect = $progress.getBoundingClientRect()
  let offsetX = 0
  let per = 0
  if (event.touches) {
    clientX = event.touches[0].clientX
  } else {
    clientX = event.clientX
  }
  offsetX = clientX - rect.x
  per = offsetX / $progress.clientWidth
  $currentBar.style.width = per * 100 + "%"
}
const pressUp = (event) => {
  isDraging = false
}
const onDraging = (event) => {
  if (isDraging) {
    let clientX = 0
    let rect = $progress.getBoundingClientRect()
    let offsetX = 0
    let per = 0
    if (event.touches) {
      clientX = event.touches[0].clientX
    } else {
      clientX = event.clientX
    }
    offsetX = clientX - rect.x
    per = offsetX / $progress.clientWidth
    $currentBar.style.width = per * 100 + "%"
    if (dragTimer) {
      clearTimeout(dragTimer)
    }
    dragTimer = setTimeout(() => {
      audioObj.currentTime = audioObj.duration * per
      setStorage('currentTime', audioObj.currentTime)
      $current.innerText = formatSec(audioObj.currentTime)
    }, 100)
  }
}
$progress.onmousedown = pressDown
$progress.ontouchstart = pressDown
$progress.onmouseup = pressUp
$progress.ontouchend = pressUp
$progress.onmousemove = onDraging
$progress.ontouchmove = onDraging
$orderBtn.addEventListener('click', function () {
  let cOrderFlag = parseInt(getStorage('orderFlag'), 10)
  $$orderIcons.forEach((icon) => {
    icon.classList.remove('show')
  })
  cOrderFlag = (cOrderFlag >= ($$orderIcons.length - 1)) ? 0 : (++cOrderFlag)
  $$orderIcons[cOrderFlag].classList.add('show')
  setStorage('orderFlag', cOrderFlag)
  setTips(`已切换到${orderList[cOrderFlag]}`, 'toast')
})
$volBtn.addEventListener('click', function (e) {
  let currentVol = getStorage('volValue')
  let currentMuted = getStorage('isMuted')
  if (e.target.classList.contains('music-icon') || e.target.classList.contains('vol-btn')) {
    $$volIcons.forEach((vol) => {
      vol.classList.remove('show')
    })
    console.log(currentMuted, '-----------------------')
    if (currentMuted === 'no') {
      isMuted = 'yes'
      audioObj.muted = true
      $muteIcon.classList.add('show')
    } else {
      isMuted = 'no'
      audioObj.muted = false
      $muteIcon.classList.remove('show')
      audioObj.volume = currentVol
    }
    setStorage('isMuted', isMuted)
  }
})
$volBar.oninput = function () {
  volValue = this.value
  if (volValue === 0) {
    isMuted = 'yes'
    setStorage('isMuted', isMuted)
  }
  audioObj.volume = this.value
  setStorage('volValue', volValue)
  setVolume()
}
// #endregion
