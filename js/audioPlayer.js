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
      abort: [], // 音频加载被中止时触发（如突然切换资源）
      canplay: [], // 音频已缓冲到可以播放（但可能未完成全部缓冲）
      canplaythrough: [], // 音频已缓冲到预计可流畅播放至结束（无需再缓冲）
      durationchange: [], // 音频总时长（duration）发生变化时触发
      emptied: [], // 音频资源被清空时触发（如加载错误或abort后）
      encrypted: [], // 检测到加密媒体数据时触发（用于DRM加密内容）
      ended: [], // 音频播放完成时触发
      error: [], // 加载或播放出错时触发
      loadeddata: [], // 音频第一帧数据加载完成时触发
      loadedmetadata: [], // 音频元数据（时长、编码等）加载完成时触发
      loadstart: [], // 开始加载音频资源时触发
      pause: [], // 暂停播放时触发
      play: [], // 调用play()方法时触发（无论是否成功播放）
      playing: [], // 音频实际开始播放时触发（已解决缓冲等问题）
      progress: [], // 浏览器正在下载音频数据时触发（周期性触发）
      ratechange: [], // 播放速率（playbackRate）改变时触发
      seeked: [], // 跳转（seek）操作完成时触发
      seeking: [], // 开始跳转（seek）操作时触发
      stalled: [], // 浏览器尝试加载但未获得数据时触发（可能缓冲停滞）
      suspend: [], // 浏览器暂停加载音频（但并非因错误）时触发
      timeupdate: [], // 播放位置（currentTime）更新时触发（周期性）
      volumechange: [], // 音量（volume）或静音（muted）状态改变时触发
      waiting: [], // 播放因缓冲等原因需要暂停时触发
      waitingforkey: [] // 等待加密密钥时触发（用于DRM）
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