class AudioPlayer {
  constructor(options = {}) {
    // 默认配置
    const defaultOptions = {
      tracks: [],
      currentIndex: 0,
      autoPlay: false,
      volume: 0.7,
      loop: false
    }

    // 合并配置
    this.options = {
      ...defaultOptions,
      ...options
    }
    // 创建 audio 实例
    this.audio = new Audio(this.options.tracks[this.options.currentIndex] || '')
    // 初始化状态
    this.init()
  }

  /** 初始化音频属性和事件 */
  init() {
    // 设置初始属性
    this.audio.src = this.options.tracks[this.options.currentIndex] || ''
    this.audio.currentTime = 0
    this.audio.volume = this.options.volume
    this.audio.loop = this.options.loop
    this.audio.preload = 'auto' // 预加载

    // 自动播放（受浏览器策略限制，可能需要用户交互后才能生效）
    if (this.options.autoPlay) {
      this.play().catch(err => {
        console.warn('自动播放失败（需用户交互）：', err)
      })
    }

    // 绑定事件（可通过 on 方法监听）
    this.events = {
      canplay: [],  // 可以播放时触发
      play: [], // 播放时触发
      playing: [], // 正在播放时触发
      pause: [], // 暂停时触发
      ended: [], // 播放结束时触发
      timeupdate: [], // 进度更新时触发
      volumechange: [], // 音量变化时触发
      error: [] // 错误时触发
    }

    // 绑定原生事件到自定义事件队列
    Object.keys(this.events).forEach(eventName => {
      this.audio.addEventListener(eventName, (e) => {
        this.events[eventName].forEach(cb => cb(e, this.getState()))
      })
    })
  }

  get currentIndex() {
    return this.options.currentIndex
  }

  set currentIndex(index) {
    if (index < 0 || index >= this.options.tracks.length) {
      console.warn('索引超出范围')
      return
    }
    this.options.currentIndex = index
    this.audio.src = this.options.tracks[index]
  }

  get currentTrack() {
    const src = this.audio.src
    return {
      src: src,
      index: this.options.currentIndex
    }
  }

  set currentTrack(track) {
    this.options.currentIndex = track.index
    this.audio.src = track.src
  }

  /**
   * 播放音频
   * @returns {Promise}
   */
  play() {
    return this.audio.play()
  }

  /** 暂停音频 */
  pause() {
    this.audio.pause()
  }

  /** 切换播放/暂停状态 */
  togglePlay() {
    return this.audio.paused ? this.play() : this.pause()
  }

  /** 停止播放 */
  stop() {
    this.audio.pause()
    this.audio.currentTime = 0
  }

  /** 切换下一首 */
  next() {
    this.options.currentIndex = (this.options.currentIndex + 1) % this.options.tracks.length
    this.audio.src = this.options.tracks[this.options.currentIndex]
    this.play()
  }

  /** 切换上一首 */
  prev() {
    this.options.currentIndex = (this.options.currentIndex - 1 + this.options.tracks.length) % this.options.tracks.length
    this.audio.src = this.options.tracks[this.options.currentIndex]
    this.play()
  }

  /** 切换随机播放 */
  rand() {
    const randomIndex = Math.floor(Math.random() * this.options.tracks.length)
    this.options.currentIndex = randomIndex
    this.audio.src = this.options.tracks[randomIndex]
    this.play()
  }

  /**
   * 设置音量
   * @param {number} value - 音量值（0-1）
   */
  setVolume(value) {
    if (value < 0 || value > 1) {
      console.warn('音量值必须在 0-1 之间')
      return
    }
    this.audio.volume = value
  }

  setMuted(muted) {
    this.audio.muted = muted
  }

  /**
   * 设置播放进度
   * @param {number} time - 目标时间（秒）
   */
  setProgress(time) {
    if (time < 0 || time > this.audio.duration) {
      console.warn('进度值超出范围')
      return
    }
    this.audio.currentTime = time
  }

  /**
   * 跳转到指定百分比位置
   * @param {number} percent - 百分比（0-100）
   */
  seek(percent) {
    if (percent < 0 || percent > 100) return
    const time = (percent / 100) * this.audio.duration
    this.setProgress(time)
  }

  /**
   * 监听事件
   * @param {string} eventName - 事件名（play/pause/ended/timeupdate/volumechange/error）
   * @param {Function} callback - 回调函数
   */
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      console.warn(`不支持的事件：${eventName}`)
    }
  }

  /**
   * 移除事件监听
   * @param {string} eventName - 事件名
   * @param {Function} callback - 要移除的回调（不传则移除所有）
   */
  off(eventName, callback) {
    if (!this.events[eventName]) return
    if (callback) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
    } else {
      this.events[eventName] = []
    }
  }

  /** 获取当前播放状态 */
  getState() {
    return {
      isLoading: this.audio.readyState !== 4, 
      isPaused: this.audio.paused,
      isEnded: this.audio.ended,
      isError: this.audio.error,
      isPlaying: !this.audio.paused, // 是否正在播放
      currentTime: this.audio.currentTime, // 当前播放时间（秒）
      duration: this.audio.duration || 0, // 总时长（秒）
      volume: this.audio.volume, // 当前音量
      muted: this.audio.muted, // 是否静音
      progress: this.audio.duration ? (this.audio.currentTime / this.audio.duration) * 100 : 0, // 播放进度（%）
      src: this.audio.src // 音频地址
    }
  }

  /** 销毁播放器（释放资源） */
  destroy() {
    this.pause()
    // 移除所有事件监听
    Object.keys(this.events).forEach(eventName => {
      this.audio.removeEventListener(eventName)
      this.events[eventName] = []
    })
    this.audio = null
  }
}

export default AudioPlayer