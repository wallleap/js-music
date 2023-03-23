const playList = [
  {
    title: 'Valder Fields',
    artist: 'Tamas Wells',
    link: '//cdn.wallleap.cn/musics/1.mp3',
    cover: 'https://cdn.wallleap.cn/musics/1.jpg',
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
  $progress = $('.progress'),
  $currentBar = $('.current-bar'),
  $current = $('.time>.current'),
  $total = $('.time>.total'),
  $songs = $('.songs'),
  $orderBtn = $('.order-btn'),
  $orderIcon = $('.icon-order'),
  $repeatIcon = $('.icon-repeat'),
  $randIcon = $('.icon-rand'),
  $volBtn = $('.vol-btn'),
  $$volIcons = $$('.vol-btn>.music-icon')
  $loudIcon = $('.icon-loud'),
  $volumeIcon = $('.icon-volume'),
  $quietIcon = $('.icon-quiet'),
  $muteIcon = $('.icon-mute'),
  $menuIcon = $('.icon-menu'),
  $volBar = $('.vol-progress')

const audioObj = new Audio()
let playTimer = null
let index = 0
let angle = 0
let playFlag = false
let orderFlag = 0
let volFlag = 3

const setSong = (index) => {
  $current.innerText = '0:00'
  angle = 0
  $title.innerText = playList[index].title
  $artist.innerText = playList[index].artist
  audioObj.src = playList[index].link
  $cover.style.backgroundImage = `url(${playList[index].cover})`
}

const initPlayer = (index) => {
  let $fragment = document.createDocumentFragment()
  playList.forEach((song, index) => {
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
  setSong(index)
}


/**
 * 两个元素，去掉第一个的 hide，增加第二个的 hide 类
 */
const changeHideEl = (hideEl, showEl) => {
  hideEl.classList.remove('hide')
  showEl.classList.add('hide')
}
const formatSec = (secTime) => {
  return `${parseInt(parseInt(secTime) / 60)}:${parseInt(secTime) % 60 >= 10 ? parseInt(secTime) % 60 : '0' + parseInt(secTime) % 60}`
}
const getRand = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start
}

initPlayer(index)

const $$song = $$('.song'),
  $songBtn = $(`.song-btn`)

$playBtn.onclick = function () {
  if ($pauseIcon.classList.contains('hide')) {
    audioObj.play()
    $$song[index].classList.add('current')
  } else {
    audioObj.pause()
    $$song[index].classList.remove('current')
  }
  $cover.classList.add('transition')
  $pauseIcon.classList.toggle('hide')
  $playIcon.classList.toggle('hide')
}
$preBtn.onclick = function () {
  clearInterval(playTimer)
  $cover.classList.remove('transition')
  angle = 0
  $$song.forEach((csong, cindex) => {
    csong.classList.remove('current')
  })
  $playIcon.classList.add('hide')
  $pauseIcon.classList.remove('hide')
  switch (orderFlag) {
    case 0:
    case 1:
      index === 0 ? index = playList.length - 1 : index--
      break
    case 2:
      let randNum = getRand(0, playList.length)
      index = (randNum === index ? (index === 0 ? index = playList.length - 1 : --index) : randNum)
      break
  }
  $$song[index].classList.add('current')
  setSong(index)
  audioObj.play()
}
$nextBtn.onclick = function () {
  clearInterval(playTimer)
  $cover.classList.remove('transition')
  angle = 0
  audioObj.pause()
  $$song.forEach((csong, cindex) => {
    csong.classList.remove('current')
  })
  $playIcon.classList.add('hide')
  $pauseIcon.classList.remove('hide')
  switch (orderFlag) {
    case 0:
    case 1:
      index >= playList.length - 1 ? index = 0 : index++
      break
    case 2:
      let randNum = getRand(0, playList.length)
      index = (randNum === index ? (index >= playList.length - 1 ? index = 0 : ++index) : randNum)
      break
  }
  $$song[index].classList.add('current')
  setSong(index)
  audioObj.play()
}
audioObj.addEventListener('playing', function () {
  $cover.classList.add('transition')
  $total.innerText = formatSec(audioObj.duration)
  playTimer = setInterval(function () {
    $current.innerText = formatSec(audioObj.currentTime)
    $currentBar.style.width = `${audioObj.currentTime / audioObj.duration * 100}%`
    angle += 180
    $cover.style.transform = `rotate(${angle}deg)`
  }, 1000)
})
audioObj.addEventListener('pause', function () {
  clearInterval(playTimer)
  $cover.style.transform = `rotate(${angle}deg)`
  $$song.forEach((csong, cindex) => {
    csong.classList.remove('current')
  })
  audioObj.pause()
  $pauseIcon.classList.add('hide')
  $playIcon.classList.remove('hide')
})
audioObj.addEventListener('ended', function () {
  clearInterval(playTimer)
  $$song.forEach((csong, cindex) => {
    csong.classList.remove('current')
  })
  $pauseIcon.classList.add('hide')
  $playIcon.classList.remove('hide')
  angle = 0
  audioObj.pause()
  $$song[index].classList.remove('current')
  switch (orderFlag) {
    case 0:
      index >= playList.length - 1 ? index = 0 : index++
      setSong(index)
      audioObj.play()
      $playIcon.classList.add('hide')
      $pauseIcon.classList.remove('hide')
      $$song[index].classList.add('current')
      break
    case 1:
      setSong(index)
      audioObj.play()
      $playIcon.classList.add('hide')
      $pauseIcon.classList.remove('hide')
      $$song[index].classList.add('current')
      break
    case 2:
      index = getRand(0, playList.length)
      setSong(index)
      audioObj.play()
      $playIcon.classList.add('hide')
      $pauseIcon.classList.remove('hide')
      $$song[index].classList.add('current')
      break
  }
})
audioObj.onvolumechange = function () {
  $volBar.value = audioObj.volume * 10
  $$volIcons.forEach((vol, i)=>{
    vol.classList.add('hide')
  })
  if (audioObj.volume >= 0.8) { // loud
    volFlag = 3
    $loudIcon.classList.remove('hide')
  } else if (audioObj.volume >= 0.5) { // volume
    volFlag = 2
    $volumeIcon.classList.remove('hide')
  } else if (audioObj.volume > 0) { // quiet
    volFlag = 1
    $quietIcon.classList.remove('hide')
  } else {
    $muteIcon.classList.remove('hide')
  }
}
$$song.forEach((song, currentIndex) => {
  song.onclick = function () {
    clearInterval(playTimer)
    $$song.forEach((csong, cindex) => {
      csong.classList.remove('current')
      audioObj.pause()
      $pauseIcon.classList.add('hide')
      $playIcon.classList.remove('hide')
    })
    setSong(currentIndex)
    if (currentIndex === index) {
      console.log(playFlag)
      if (playFlag) {
        audioObj.play()
        song.classList.add('current')
        $pauseIcon.classList.remove('hide')
        $playIcon.classList.add('hide')
      } else {
        audioObj.pause()
        song.classList.remove('current')
        $pauseIcon.classList.add('hide')
        $playIcon.classList.remove('hide')
      }
      playFlag = !playFlag
    } else {
      angle = 0
      audioObj.play()
      song.classList.add('current')
      $pauseIcon.classList.remove('hide')
      $playIcon.classList.add('hide')
    }
    index = currentIndex
  }
})
$progress.addEventListener('click', function (event) {
  let per = (event.offsetX / this.clientWidth) * 100 + "%"
  $currentBar.style.width = per
  audioObj.currentTime = audioObj.duration * event.offsetX / this.clientWidth
  $current.innerText = formatSec(audioObj.currentTime)
  $total.innerText = formatSec(audioObj.duration)
})
$orderBtn.addEventListener('click', function () {
  if (orderFlag >= 3) {
    orderFlag = 0
  }
  switch (orderFlag) {
    case 0:
      $orderIcon.classList.add('hide')
      $repeatIcon.classList.remove('hide')
      $randIcon.classList.add('hide')
      break
    case 1:
      $orderIcon.classList.add('hide')
      $repeatIcon.classList.add('hide')
      $randIcon.classList.remove('hide')
      break
    case 2:
      $orderIcon.classList.remove('hide')
      $repeatIcon.classList.add('hide')
      $randIcon.classList.add('hide')
      break
  }
  orderFlag++
})
$volBtn.addEventListener('click', function (e) {
  console.log('clicked')

  if (e.target.classList.contains('music-icon')) {
    $muteIcon.classList.toggle('hide')
    switch (volFlag) {
      case 3:
        $loudIcon.classList.toggle('hide')
        break
      case 2:
        $volumeIcon.classList.toggle('hide')
        break
      case 1:
        $quietIcon.classList.toggle('hide')
        break
    }
    if (!$muteIcon.classList.contains('hide')) {
      audioObj.volume = 0
    } else {
      audioObj.volume = 1
    }
  }
})
$volBar.oninput = function () {
  audioObj.volume = this.value / 10
  $$volIcons.forEach((vol, i)=>{
    vol.classList.add('hide')
  })
  if (this.value >= 8) { // loud
    $loudIcon.classList.remove('hide')
  } else if (this.value >= 5) { // volume
    $volumeIcon.classList.remove('hide')
  } else if (this.value > 0) { // quiet
    $quietIcon.classList.remove('hide')
  } else {
    $muteIcon.classList.remove('hide')
  }
}
