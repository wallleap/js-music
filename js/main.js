import AudioPlayer from './audioPlayer.js'

const playList = [{
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
    lyric: ''
  },
  {
    title: '笑',
    artist: '太一',
    link: '//cdn.wallleap.cn/musics/3.mp3',
    cover: '//cdn.wallleap.cn/musics/3.jpg',
    lyric: 'WzAwOjAwLjAwXe+8iOeske+8iSAtIOWkquS4gApbMDA6MDMuMTJd6K+N77ya5aSq5LiAClswMDowNi4yNF3mm7LvvJrlpKrkuIAKWzAwOjA5LjM2XeaIkeaDs+imgeeci+aYpeWkqeeahOmbqOa8qwpbMDA6MTMuMTdd5Lmf5oOz6KaB6Ze75aSP5aSp55qE5YKN5pmaClswMDoxNy4zMl3miJHmg7Pmi6XmirHnp4vlpKnnmoTokL3ljZUKWzAwOjIxLjU0Xei/meS6m+WcqOWGrOmHjOWTkeWjsOWRvOWWigpbMDA6MjcuNDBd5L6d56iA55yL6KeB5LmM5LqR5Y6L6L+H5p2l6L2w6ZqG6ZqGClswMDozMC44NF3mnpznhLbmnJ/lvoXnmoTkuovlj4jokL3nqboKWzAwOjM1LjUyXeegtOeijueahOWimeearuiFkOacveeahOagkeacqOepuua0ngpbMDA6MzkuMDJd6YeM6Z2i55qE5p6v5p6d5qGg5L2V5pe25byA5LiK6IqxClswMDo0My41Ml3nu5Pmnpzku47pu5Hmmpfph4znmoTml7bpl7Tph4znmoTmjIflsJbph4wKWzAwOjQ2LjkzXeaIkOS4ugpbMDA6NDcuNzBd5LiA5bm05a2k5a+h55qE56yR5Zi75Zi755qE5peg6IGK55qE5aSa5LiA5bKBClswMDo1MS43OV3nlJ/mtLvkuI3kvJrlho3ns5/ns5Xns5/ns5XnmoTlj6rmnInkurrlkI7mgpQKWzAwOjU2LjAwXeWQjuaClOayoeaciSDmsqHmnIkg5rKh5pyJIOKApuKApgpbMDA6NTkuODBd5oiR5oOz6KaB55yLClswMTowMC43Nl3mmKXlpKnnmoTpm6jmvKsKWzAxOjAzLjM3XeS5n+aDs+imgemXu+Wkj+WkqeeahOWCjeaZmgpbMDE6MDcuNDdd5oiR5oOz5oul5oqx56eL5aSp55qE6JC95Y2VClswMToxMS42OF3ov5nkupvlnKjlhqzph4zlk5Hlo7DlkbzllooKWzAxOjE2LjI5XeaIkeaDs+imgeWUseS4nOi+ueeahOWRouWWgwpbMDE6MTkuOThd5Lmf5oOz6KaB6Lip6KW/6L6555qE5rW35bK4ClswMToyNC4yOF3miJHmg7PpnaDov5HljZfovrnnmoTmuKnmmpYKWzAxOjI4LjMyXei/meS6m+WcqOWMl+i+uemdmemdmeS4iuiIuQpbMDE6MzQuMTZd5LuO5p2lIOWPquS4uiDkuIDkurog55ub5byAClswMTozOC4yMF3kuZ/ku44g5Y+q5Li6IOS4gOS6uiDlnoLotKUKWzAxOjQyLjY4Xee7j+i/h+eahOWPtuWtkOi3r+mDveavlOiusOW/hui/mOa4healmgpbMDE6NDYuNDJd5o6Y5pat55qE5qC56IyOClswMTo0Ny45MF3nlJ/noazliLDlv7XkuI3muIUKWzAxOjUwLjExXee7k+aenOS7jueZveaYvOmHjOeahOaKmuaFsOmHjOeahOassuacm+mHjApbMDE6NTMuNjJd5ZCO6YCAClswMTo1NC40Ml3kuIDlubTlj6/niLHnmoTmtYHkuobms6rnmoTnmb3nl7TnmoTlpJrkuIDlsoEKWzAxOjU4LjUxXeaXpeiQveS4jeS8muWGjemAg+i3kQpbMDI6MDEuMTJd6YCD6LeR55qE5Y+q5pyJ576O5aW9ClswMjowMi45N13nn6XkuI3nn6XpgZPvvZ4KWzAyOjA2LjIzXeaIkeaDs+imgeeci+aYpeWkqeeahOmbqOa8qwpbMDI6MTAuMDZd5Lmf5oOz6KaB6Ze75aSP5aSp55qE5YKN5pmaClswMjoxNC4yOV3miJHmg7Pmi6XmirHnp4vlpKnnmoTokL3ljZUKWzAyOjE4LjQ1Xei/meS6m+WcqOWGrOmHjOWTkeWjsOWRvOWWigpbMDI6MjMuMDBd5oiR5oOz6KaB5ZSx5Lic6L6555qE5ZGi5ZaDClswMjoyNi43Nl3kuZ/mg7PopoHouKnopb/ovrnnmoTmtbflsrgKWzAyOjMwLjkwXeaIkeaDs+mdoOi/keWNl+i+ueeahOa4qeaalgpbMDI6MzUuMDVd6L+Z5Lqb5Zyo5YyX6L656Z2Z6Z2Z5LiK6Ii5ClswMjo0MS4yNV3lkZDlkZDlkZDlkZDlkZDlkZDlkZAuLi4uClswMjo0OS4xNl3lkZDlkZDlkZDlkZDlkZDlkZDlkZAuLi4u'
  },
  {
    title: '藏',
    artist: '徐梦圆/双笙',
    link: '//cdn.wallleap.cn/musics/4.mp3',
    cover: '//cdn.wallleap.cn/musics/4.jpg',
    lyric: 'WzAwOjAwLjAxXeiXjyAtIOW+kOaipuWchi/lj4znrJkKWzAwOjAwLjAyXeivje+8mua4qeiOqApbMDA6MDAuMDNd5puy77ya5b6Q5qKm5ZyGClswMDowMC4wNF3nvJbmm7LvvJrlvpDmoqblnIYKWzAwOjAwLjMwXeeUt++8mgpbMDA6MDAuNjJd5pma6aOO6L276L27IOW4puedgOWIneaYpeeahOWHiQpbMDA6MDMuMDFdClswMDowMy43OV3ohLjlvq7ng6sg5piv6Z2S5qKF5a2Q55qE5b+n5LykClswMDowNi40OF0KWzAwOjA3LjE1XeWQrOmXu+acgOi/kSDkvaDopoHliY3ljrvmtJvpmLMKWzAwOjEwLjM3XeWcqOW/g+S4rSDnu5PkuIDlsYLmlbDkuZ3lr5LpnJwKWzAwOjEzLjY5XeWls++8mgpbMDA6MTQuMTNd5Lmm6Zmi5YWI55SfIOi0o+aIkeW/g+a4uOelnuaZgwpbMDA6MTcuMzVd5omN5LiN5pivIOWboOS4uuS9oOS4jeWcqOivvuWgggpbMDA6MjAuNDRdClswMDoyMS4wMV3miJHkuZ/lj6rmmK/mgbDlpb3ot6/ov4fkvaDnqpcKWzAwOjI0LjE2XeaNjuW4puedgCDpgIHkvaDmnKzor5fpm4blhajllJAKWzAwOjI3LjQwXeeUt++8mgpbMDA6MjcuNzJd5pyJ5q2M6LCj6LWg5ZCM56qXIOWumuS4jeimgemBl+W/mApbMDA6MzAuODld6JK56JGt5ZGA6IuN6IuNIOeZvemcsuWRgOS4uumcnApbMDA6MzQuMjNd5oiR5omN5LiN5piv5paH55uyIOiOq+eskeaIkeiNkuWUkApbMDA6MzcuNjhd5p2l5LiN5Y+K6IOM54miIOWwseWSjOS9oOWIhuS6qwpbMDA6NDEuMDFd5aWz77yaClswMDo0MS4zNV3onYnlo7DmuIXlk40g5Ly0552A6YKj54KO54KO5pqR5YWJClswMDo0NC43NV3ohLjlvq7ng6sg5oCq5aSP5pel6Ze354Ot6Zq+5ombClswMDo0Ny43OV0KWzAwOjQ4LjM4XeS4gOWwgeS/oeesuiDkvaDor7Tmg7Plv7XlrrbkuaEKWzAwOjUxLjU4XeWPruWYseaIkSDli6Tli6TmgbPmgbPkuIrlrabloIIKWzAwOjU0Ljc3XeWQiO+8mgpbMDA6NTQuNzhd5ZWm5ZWm5ZWm5ZWm5ZWm5ZWmClswMDo1Ni4yOV0KWzAxOjA4Ljg0XeacieS4gOiogOi1oOWQjOeqlyDkvaDlrpropoHnj43ol48KWzAxOjEyLjA4XeS4vuWktOacm+aYjuaciCDojqvopoHlpKrmgJ3kuaEKWzAxOjE1LjM3Xem4v+mbgeadpeadpeW+gOW+gCDmiY3kuI3kvJrnm7zmnJsKWzAxOjE4Ljc2XeS9oOS/oeS4reeahOivnSDku47mnKrmlL7lv4PkuIoKWzAxOjIyLjY0XQpbMDE6MzUuMThd55S377yaClswMTozNS41MV0KWzAxOjM2LjQ4XeaZmumjjueRn+eRnyDluKbnnYDlhaXnp4vnmoTlh4kKWzAxOjM5LjY0XeiEuOW+rueDqyDmmK/nga/kvJrnhLDngavnmoTlhYkKWzAxOjQzLjIxXeS4reeni+W9kuS5oSDlubbogqnlsIbmnIjlhL/otY8KWzAxOjQ2LjM4XeWNtOayoeabvuaDsyDnorDop4HlhavkuKrlkIznqpcKWzAxOjQ5LjY3XeWls++8mgpbMDE6NDkuOTRd5YW25Lit5pyJ5Liq5aeR5aiYIOecvOedm+Wkp+WPiOS6rgpbMDE6NTIuOTld5a+55L2g6K+05LuA5LmIIOWJjei3r+i/mOa8q+mVvwpbMDE6NTYuNDBd5oCS54Gr5Yay56C06IO46IabIOWNtOihjOW+l+err+W6hApbMDE6NTkuODNd5paf6YWM552A5byA5ZeTIOWlueWlveeUn+a8guS6rgpbMDI6MDMuMjFd5ZCI77yaClswMjowMy41M13kuK3luq3ln4vkuIsg5LiA5Z2b6YaJ5qKo56eL6YW/ClswMjowNi44MV3lv4Plv4Plv7Ug5LiO5L2g5Li+55uP6K+d6KG36IKgClswMjowOS45NF0KWzAyOjEwLjYyXeiXj+S9j+S4jeivtCDmnIDmmK/mhI/lkbPnu7Xplb8KWzAyOjEzLjcxXeS9oOWBj+WBjyDmh4LlvpfmiJHmiYDmnInkva/oo4UKWzAyOjE3LjE4XeWQiO+8mgpbMDI6MTcuMTld5ZWm5ZWm5ZWm5ZWm5ZWm5ZWmClswMjoxOC40MV0KWzAyOjMwLjkwXeS9leS4jei1tuW/q+mCgOS4iiDlpKfnnLznnZvlp5HlqJgKWzAyOjM0LjI0XeaXpeWQjui3r+a8q+mVvyDkuZ/lpb3nm7jmibbluK4KWzAyOjM3LjYzXeW/mOS6huaIkei/meWQjOeqlyDmiJHkuZ/lsIbkvaDlv5gKWzAyOjQxLjA0XeS9oOWPr+imgeWQrOWlvSDmiJHku47kuI3mkpLosI4='
  },
  {
    title: '桥路不相逢',
    artist: '浩蓝',
    link: '//cdn.wallleap.cn/musics/5.mp3',
    cover: '//cdn.wallleap.cn/musics/5.jpg',
    lyric: 'WzAwOjAwLjAwXeahpei3r+S4jeebuOmAoiAtIOa1qeiTnQpbMDA6MDMuMzZd6K+N77ya6ams5Y+M5LqRClswMDowNi43M13mm7LvvJrkuo7lrZDlsIYKWzAwOjEwLjA5Xee8luabsu+8muWMl+S6rOmRq+aYn+axhwpbMDA6MTMuNDZd5b2V6Z+z55uR5Yi277ya6LW16ZGrClswMDoxNi44Ml3lkozlo7DvvJrljZflsI/lpq4KWzAwOjIwLjE5Xea3t+mfs++8mumYv0tFTgpbMDA6MjMuNTVd5Yi25L2c5Lq677ya6LW16ZGrClswMDoyNi45Ml3lh7rlk4HvvJrljJfkuqzpkavmmJ/msYfmlofljJbkvKDlqpIKWzAwOjMwLjI4XeaXtumXtOWcqOWPmCDkvaDkuZ/lnKjlj5gKWzAwOjM3LjAzXeS9oOeahOa4qeaaluS4uuS9lea2iOWkseS4jeingQpbMDA6NDMuNzld5rOq5rC05Luj5pu/5LqGIOS6ieWQteeahOWNg+iogApbMDA6NTAuMzBd5Lik5Lq65LiA5qC36Zm35YWl5a2k5Y2V55qE5bGA6Z2iClswMDo1Ny41NV3lsLHlnKjov5nlpKkg5Zyo6L+Z5LiA5aSpClswMTowNC4yMl3miJHku6znmoTnvJjku73pmbflhaXkuobnlrLlgKYKWzAxOjExLjA3XeWcqOS4gOi1t+eahOaXpeWtkCDkuI3plb/kuZ/kuI3nn60KWzAxOjE3LjcyXemBl+aGvuaYr+aIkeS7rOWDj+mjjuS4gOagt+i/h+iCqQpbMDE6MjQuMThd5qGl6Lev5LiN55u46YCiIOS9oOaIkeS4jeebuOaBiwpbMDE6MzEuODld5aSn6Lev5pyd5aSpIOaIkeS7rOWQhOS4gOi+uQpbMDE6MzcuODNd5Lul5ZCO55qE5Lul5ZCOIOS4pOW/g+S4jeWGjeebuOi/ngpbMDE6NDUuNThd5LiA5aSp5Lik5aSpIOaCsuS8pOeahOayiem7mOWvoeiogApbMDE6NTEuNTRd5qGl6Lev5LiN55u46YCiIOS9oOaIkeS4jeebuOaBiwpbMDE6NTkuMjld5L2g6LWw5qGl6YKj5pa5IOaIkei1sOi3r+i/mei+uQpbMDI6MDUuMzBd6Jm96K+05LiA5Yir5Lik5a69IOWQhOeUn+asouWWnApbMDI6MTIuOTdd5Y+v5oiR5Li65LuA5LmI6L+Y5Lya5oqK5L2g5oOz5b+1ClswMjo0Ny4zMF3lsLHlnKjov5nlpKkg5Zyo6L+Z5LiA5aSpClswMjo1My45N13miJHku6znmoTnvJjku73pmbflhaXkuobnlrLlgKYKWzAzOjAwLjc3XeWcqOS4gOi1t+eahOaXpeWtkCDkuI3plb/kuZ/kuI3nn60KWzAzOjA3LjQ1XemBl+aGvuaYr+aIkeS7rOWDj+mjjuS4gOagt+i/h+iCqQpbMDM6MTMuODVd5qGl6Lev5LiN55u46YCiIOS9oOaIkeS4jeebuOaBiwpbMDM6MjEuNThd5aSn6Lev5pyd5aSpIOaIkeS7rOWQhOS4gOi+uQpbMDM6MjcuNzJd5Lul5ZCO55qE5Lul5ZCOIOS4pOW/g+S4jeWGjeebuOi/ngpbMDM6MzUuMjVd5LiA5aSp5Lik5aSpIOaCsuS8pOeahOayiem7mOWvoeiogApbMDM6NDEuMzVd5qGl6Lev5LiN55u46YCiIOS9oOaIkeS4jeebuOaBiwpbMDM6NDkuMDRd5L2g6LWw5qGl6YKj5pa5IOaIkei1sOi3r+i/mei+uQpbMDM6NTQuOTVd6Jm96K+05LiA5Yir5Lik5a69IOWQhOeUn+asouWWnApbMDQ6MDIuNjhd5Y+v5oiR5Li65LuA5LmI6L+Y5Lya5oqK5L2g5oOz5b+1ClswNDowOS42OF3lj6/miJHkuLrku4DkuYjov5jkvJrmiorkvaDmg7Plv7UK'
  },
  {
    title: '情话微甜',
    artist: '王圣锋/李朝',
    link: '//cdn.wallleap.cn/musics/6.mp3',
    cover: '//cdn.wallleap.cn/musics/6.jpg',
    lyric: 'WzAwOjAwLjAwXeaDheivneW+rueUnCAtIOadjuacnS/njovlnKPplIsKWzAwOjAxLjI2Xeivje+8muacsei0ui/lrovmmZPmnbAKWzAwOjAyLjUzXeabsu+8muacsei0ui/lrovmmZPmnbAKWzAwOjAzLjc5Xee8luabsu+8mueOi+afj+m4vwpbMDA6MDUuMDZd5b2V6Z+z77ya5rWU5rWUClswMDowNi4zM13nvKnmt7fvvJrnjovmn4/puL8KWzAwOjA3LjU5XeWQieS7lu+8mueOi+afj+m4vwpbMDA6MDguODZd5ZKM5aOw77ya546L5p+P6bi/ClswMDoxMC4xMl3lkozlo7DnvJblhpnvvJrnjovmn4/puL8KWzAwOjExLjM5XeWItuS9nOS6uu+8muacsei0ui/njovmn4/puL8KWzAwOjEyLjY2XemFjeWUseWItuS9nOS6uu+8muacsei0ugpbMDA6MTMuOTJd5b2V6Z+z5a6k77yaMTgwMyBTdHVkaW8KWzAwOjE1LjE5Xea3t+mfs+WupO+8mkhvdCBNdXNpYyBTdHVkaW8KWzAwOjE2LjQ1XeebkeWItu+8muS4ieWNgy/pn6nml63kuLkKWzAwOjE3LjcyXeS8geWIkuiQpemUgO+8muaipuerpeWoseS5kApbMDA6MTguOTldT1DvvJrpvpnlpKnohb7mlofljJYKWzAwOjIwLjI3XeS7luS7rOivtOaIkei3n+S4jeS4iuS9oOeahOatpeS8kApbMDA6MjMuOTBdClswMDoyNC43OF3kvaDor7TmsqHlhbPns7voh7PlsJHnjrDlnKjmiJHku6zlvojmkK0KWzAwOjI5LjE0XeS7luS7rOivtOaIkeacqOe6s+eahOWDj+WPquWCu+eTnApbMDA6MzMuNTld6L+Z5qC35a2Q5L2g55qE5b+D5omN5LiN5Lya5aSq6IqxClswMDozNy44NV0KWzAwOjM4LjM2XeaIkeaEn+inieaIkeeahOi/kOawlOS4jeS8muWkquW3rgpbMDA6NDIuMzZdClswMDo0Mi45OV3liJrlpb3lnKjkuIvkuIDnp5LlsLHnorDop4HkvaDkuoYKWzAwOjQ2Ljc5XQpbMDA6NDcuMzRd5piv5oiR5oOz5b6X5aSN5p2C6L+Y5piv5oiR55yf55qE5aSq5beuClswMDo1MS40Ml0KWzAwOjUxLjk3XeaHkuW+l+WOu+euoeaIkeW/g+mHjOWPquacieS9oOS6hgpbMDA6NTYuNDBd5oiR6K+05bCx6K6p5oiR5LuO5L2g55qE5YWo5LiW55WM6Lev6L+HClswMTowMS4wNF3kvaDor7TmiJHor7TnmoTor53pg73lj6/ku6Xlhpnov5vlsI/or7QKWzAxOjA1LjQ2XeWFtuWunuaIkeWCu+WCu+WPiOigouigoueahOivneS4jeWkmgpbMDE6MTAuMTBd5L2G5q+P5Y+l6YO96IO95oiz5Lit5L2g55qE5b+D56qdClswMToxNC44MF3miJHop4nlvpfliJrlpb3kvaDlkozmiJHnmoToioLmi43lvojlkIgKWzAxOjE5LjM1XeS9oOivtOWwseeskeedgOmZquS9oOmAg+S6oeS5n+W+iOWAvOW+lwpbMDE6MjMuNzdd5Lqy54ix55qE5Yir5YK75LqG5b+r6YaS6YaS5ZCnClswMToyOC4zM13kvaDliJrmiY3lpb3lg4/or7Tmoqbor53kuoYKWzAxOjMzLjk0XQpbMDE6NTEuNzNd5oiR5oSf6KeJ5oiR55qE6L+Q5rCU5LiN5Lya5aSq5beuClswMTo1NS4zOV0KWzAxOjU2LjE5XeWImuWlveWcqOS4i+S4gOenkuWwseeisOingeS9oOS6hgpbMDI6MDAuNDJd5piv5oOz5b6X5aSN5p2C6L+Y5piv5oiR55yf55qE5aSq5beuClswMjowNC41Ml0KWzAyOjA1LjEyXeayoeaXtumXtOWOu+euoSDmiJHlsLHmmK/orqTlh4bkvaDkuoYKWzAyOjA5LjQzXeaIkeivtOWwseiuqeaIkeS7juS9oOeahOWFqOS4lueVjOi3r+i/hwpbMDI6MTQuMTBd5L2g6K+05oiR6K+055qE6K+d6YO95Y+v5Lul5YaZ6L+b5bCP6K+0ClswMjoxOC42M13lhbblrp7miJHlgrvlgrvlj4jooKLooKLnmoTor53kuI3lpJoKWzAyOjIzLjMyXeS9huavj+WPpemDveiDveaIs+S4reS9oOeahOW/g+eqnQpbMDI6MjcuODFd5oiR6KeJ5b6X5Yia5aW95L2g5ZKM5oiR55qE6IqC5ouN5b6I5ZCIClswMjozMi4zMF3kvaDor7TlsLHnrJHnnYDpmarkvaDpgIPkuqHkuZ/lvojlgLzlvpcKWzAyOjM2Ljg5XeS6sueIseeahOWIq+WCu+S6huW/q+mGkumGkuWQpwpbMDI6NDEuNDRd5L2g5Yia5omN5aW95YOP6K+05qKm6K+d5LqG'
  },
  {
    title: '最美情侣',
    artist: '白小白',
    link: '//cdn.wallleap.cn/musics/7.mp3',
    cover: '//cdn.wallleap.cn/musics/7.jpg',
    lyric: 'WzAwOjAwLjcwXeacgOe+juaDheS+oyAtIOeZveWwj+eZvQpbMDA6MDUuMjFd6K+N77ya55m95bCP55m9ClswMDowOC40M13mm7LvvJrnmb3lsI/nmb0KWzAwOjEzLjE1XQpbMDA6MTguMTFd6YKj5aSp5L2g5om+5oiR6LCI5b+DClswMDoyMC44MF0KWzAwOjIxLjM3XemYs+WFieS4i+eci+WIsOS9oOe+nua2qeeahOihqOaDhQpbMDA6MjUuMjZdClswMDoyNS43OV3lubbmsqHmnInlpKrlpJrlpKrlpJrnmoTor53or60KWzAwOjI5LjQ1XQpbMDA6MzAuMDNd5Y+v5oiR5bey57uP5oSP6K+G5Yiw6L+Z5q615oSf5oOFClswMDozNC4zN10KWzAwOjM0Ljk0XeaIkeS7rOS4gOi1t+WdkOWcqOWSluWVoeWOhQpbMDA6MzguNzVd5oiR5Lus5LiA6LW35ZCD5L2g54ix5ZCD55qE5Yaw5reH5reLClswMDo0My4yMF3miJHku6zmmK/lr7nmlrnmnIDnvo7nmoTorrDlv4YKWzAwOjQ3LjM5XeS9oOaMveedgOaIkeeahOaJi+iHguW5uOemj+eahOi1sOWcqOS6uue+pOmHjApbMDA6NTMuMTBdClswMDo1Ni4wOV3lsLHlnKjkuIDotbfosIHorqnmiJHku6znm7jpgYcKWzAxOjAwLjUzXeS7peWQjueahOaXpeWtkOaIkeS7rOS4gOi1t+ebuOS+nQpbMDE6MDQuNTldClswMTowNS4xMF3miJHkvJrlrqDnnYDkvaDmiJHkvJrnurXlrrnkvaAKWzAxOjA5LjQ1Xeiwgeimgeasuui0n+S9oOaIkeWwseermeWHuuS/neaKpOS9oApbMDE6MTMuNjld5bCx5Zyo5LiA6LW35LiA55Sf55u45a6I5LiN5byDClswMToxNy42OV0KWzAxOjE4LjIwXeWwseWcqOS4gOi1t+iwgemDveS4jeiuuOivtOWIhuemuwpbMDE6MjIuNjVd6L+Z5q615oGL5oOF5piv5LiK5aSp57uZ5LqIClswMToyNi45MF3kvJrorqnmiJHku6zmiJDkuLrov5nkuKrkuJbnlYzkuIoKWzAxOjMyLjMyXQpbMDE6MzMuMzhd5pyA576O55qE5oOF5L6jClswMTozNS44OV0KWzAxOjM4LjkyXeS9oOeskeaIkemZquedgOS9oOeskQpbMDE6NDEuNDddClswMTo0Mi4wMF3kvaDlk63miJHlsLHlnKjkvaDouqvovrnpgJfkvaDlvIDlv4MKWzAxOjQ2LjQ0XeWmguaenOS9oOeUn+awlOS4jeeQhuaIkQpbMDE6NTAuNzBd5oiR5bCx5Lya5Y6a552A6IS455qu5ZCR5L2g6LS06L+RClswMTo1NS4wN10KWzAxOjU1Ljg5XeWcqOi/meaIkeS7rOWFseWQjOWRvOWQuApbMDE6NTguODddClswMTo1OS40Ml3kuI3nrqHmnKrmnaXmgI7moLfpg73ml6DmiYDnlY/mg6cKWzAyOjAzLjc2XeS4gOi+iOWtkOmDveivtOaIkeeIseS9oApbMDI6MDguMjBd6K6p5pW05Liq5Z+O5biC6IGG5ZCs552A5oiR5Lus5bm456aP55qE5aOw6Z+zClswMjoxNC43M13lsLHlnKjkuIDotbfosIHorqnmiJHku6znm7jpgYcKWzAyOjE5LjA4XeS7peWQjueahOaXpeWtkOaIkeS7rOS4gOi1t+ebuOS+nQpbMDI6MjMuNjdd5oiR5Lya5a6g552A5L2g5oiR5Lya57q15a655L2gClswMjoyOC4wMl3osIHopoHmrLrotJ/kvaDmiJHlsLHnq5nlh7rkv53miqTkvaAKWzAyOjMyLjIyXeWwseWcqOS4gOi1t+S4gOeUn+ebuOWuiOS4jeW8gwpbMDI6MzYuMjNdClswMjozNi43NV3lsLHlnKjkuIDotbfosIHpg73kuI3orrjor7TliIbnprsKWzAyOjQxLjE3Xei/meauteaBi+aDheaYr+S4iuWkqee7meS6iApbMDI6NDUuNDRd5Lya6K6p5oiR5Lus5oiQ5Li66L+Z5Liq5LiW55WM5LiKClswMjo1MS43OF3mnIDnvo7nmoTmg4XkvqMKWzAyOjU0LjYzXQpbMDI6NTYuNjRd5Zyo5LiA6LW36LCB6K6p5oiR5Lus55u46YGHClswMzowMC41N13ku6XlkI7nmoTml6XlrZDmiJHku6zkuIDotbfnm7jkvp0KWzAzOjA0LjcyXQpbMDM6MDUuMzRd5oiR5Lya5a6g552A5L2g5oiR5Lya57q15a655L2gClswMzowOS40OV3osIHopoHmrLrotJ/kvaDmiJHlsLHnq5nlh7rkv53miqTkvaAKWzAzOjEzLjc2XeWwseWcqOS4gOi1t+S4gOeUn+ebuOWuiOS4jeW8gwpbMDM6MTguMTFd5bCx5Zyo5LiA6LW36LCB6YO95LiN6K646K+05YiG56a7ClswMzoyMi42Ml3ov5nmrrXmgYvmg4XmmK/kuIrlpKnnu5nkuogKWzAzOjI2Ljk0XeS8muiuqeaIkeS7rOaIkOS4uui/meS4quS4lueVjOS4igpbMDM6MzIuNjRdClswMzozMy4yM13mnIDnvo7nmoTmg4XkvqMKWzAzOjM2LjM1XQpbMDM6MzcuOTVd5Lya6K6p5oiR5Lus5oiQ5Li66L+Z5Liq5LiW55WM5LiKClswMzo0Mi43OF0KWzAzOjQzLjk4XeacgOe+jueahOaDheS+ow=='
  },
  {
    title: '拜托',
    artist: '孙晨',
    link: '//cdn.wallleap.cn/musics/8.mp3',
    cover: '//cdn.wallleap.cn/musics/8.jpg',
    lyric: 'WzAwOjAwLjAwXeaLnOaJmCAtIOWtmeaZqApbMDA6MDMuNjZd6K+N77ya5a2Z5pmoL+acsei0ugpbMDA6MDcuMzNd5puy77ya5pyx6LS6ClswMDoxMS4wMF3nvJbmm7LvvJrnjovmn4/puL8KWzAwOjE0LjY3Xea3t+mfs++8mueOi+afj+m4vwpbMDA6MTguMzRd5Ye65ZOB77ya5Y2D5ZKM5LiW57qqClswMDoyMi4wMV3lt7flj6PnmoTpgqPlj6rnjKvov5jkvp3nhLbmsqHnnYDokL0KWzAwOjI3LjA1XQpbMDA6MjguNzNd55y856We6L+Y5piv5LiA5qC36L+36Iyr55qE6Lev6L+HClswMDozNC4wMl0KWzAwOjM1Ljc0XemCo+S4quaDs+S7lueahOWls+S6uuWcqOW8guWcsOa8guazigpbMDA6NDEuMTJd6KKr5ZG96L+Q5p2f57ya552A5LuW5bm05bCR55qE6L2754uC5ZGiClswMDo0Ni44N10KWzAwOjQ3LjczXeS7luaDs+imgemjnuaLnOaJmOWIq+iuqeS7luWPl+WkquWkmueahOe9qgpbMDA6NTQuNzVd5LuW5Y+I5LiN5piv5rKh5pyJ5YuH5rCU5Y676Z2i5a+56YKj5LmI5Y2R5b6uClswMTowMC40Ml0KWzAxOjAxLjMyXeS7luaDs+WOu+i/veWwseaUvuS4i+ivpeaUvueahOiuqeS7luWOu+i/vQpbMDE6MDguNDBd5LuW6K+05aaC5p6c6YKj5qC35LiA5a6a5b6I576OClswMToxNC41MV0KWzAxOjE1Ljc2XeaLnOaJmOWIq+iuqeS7luS4gOeVquWKquWKm+WQjuaNouadpeaYr+WlouaxggpbMDE6MjIuMTVd5a+55LuW5aW954K55ZCn5LuW6IiN5b6X6K6p5L2g6LWwClswMToyNy45MF0KWzAxOjI5LjI2XeaLnOaJmOWIq+iuqeS7luaVtOWknOmDveaDs+edgOaAjuS5iOaJjeiDveWknwpbMDE6MzYuMDNd5Yir562J5LuW6ICB5LqG6YO95LiN5pWi5Zue5aS0ClswMTo0Mi4yOF0KWzAyOjEwLjA3XeS7luaDs+imgemjnuaLnOaJmOWIq+iuqeS7luWPl+WkquWkmueahOe9qgpbMDI6MTcuMTNd5LuW5Y+I5LiN5piv5rKh5pyJ5YuH5rCU5Y676Z2i5a+56YKj5LmI5Y2R5b6uClswMjoyMi43N10KWzAyOjIzLjU3XeS7luaDs+WOu+i/veWwseaUvuS4i+ivpeaUvueahOiuqeS7luWOu+i/vQpbMDI6MzAuNjld5LuW6K+05aaC5p6c6YKj5qC35LiA5a6a5b6I576OClswMjozNi44OV0KWzAyOjM3Ljk4XeaLnOaJmOWIq+iuqeS7luS4gOeVquWKquWKm+WQjuaNouadpeaYr+WlouaxggpbMDI6NDQuNDZd5a+55LuW5aW954K55ZCn5LuW6IiN5b6X6K6p5L2g6LWwClswMjo1MC40N10KWzAyOjUxLjUyXeaLnOaJmOWIq+iuqeS7luaVtOWknOmDveaDs+edgOaAjuS5iOaJjeiDveWknwpbMDI6NTguMjFd5Yir562J5LuW6ICB5LqG6YO95LiN5pWi5Zue5aS0ClswMzowNC40MF0KWzAzOjA1LjM4XeaLnOaJmOWIq+iuqeS7luS4gOeVquWKquWKm+WQjuS7gOS5iOmDveayoeaciQpbMDM6MTEuODJd5LuW6K+05bCx5ou85ZCn5bmy5LqG6L+Z5p2v6YWSClswMzoxNy43MV0KWzAzOjE5LjEwXeaLnOaJmOWIq+iuqeS7luaVtOWknOmDveaDs+edgOaAjuS5iOaJjeiDveWknwpbMDM6MjUuNjFd5p2l55Sf5YGa5pil6aOOIOa1gea1quWPiOiHqueUsQ=='
  },
  {
    title: '恶人',
    artist: '孙子涵/Xun(易硕成)',
    link: '//cdn.wallleap.cn/musics/9.mp3',
    cover: '//cdn.wallleap.cn/musics/9.jpg',
    lyric: 'WzAwOjAwLjAwXeaBtuS6uiAtIOWtmeWtkOa2tSAoTmlrbyBTdW4pL1h1bgpbMDA6MDYuMjFd6K+N77ya5bq35qKT5bOwClswMDoxMi40Ml3mm7LvvJrlurfmopPls7AKWzAwOjE4LjYzXeWtme+8mumCo+WkqeaIkei6suWcqOS9oOWutumXqOWPowpbMDA6MjQuODVd5b6I5aSa6K+d5oOz6KaB6K+05oCO5LmI6K+0ClswMDozMS4xN13opoHmjL3nlZnov5jmmK/nnIHnnIHlkKcKWzAwOjM2LjEwXVh1bu+8mumjnuacuui1t+mjnuS7peWQjuWJqeS4i+WtpOWNleeahOaIkQpbMDA6NDMuMjFdClswMDo0NS40NF3lj6PooovkuK3kvaDnmoTnhafniYflgqzmiJHmg7PkvaDkuoYKWzAwOjUyLjg3XQpbMDA6NTUuMjdd5ZCI77ya5aW95ZWm5oiR5pWw5Yiw5LiJ5oiR5Lus6YO95LiN6K645ZOt5LqGClswMDo1OS41N13liLDpgqPovrnoh6rlt7HopoHlrabnnYDnhafpob7oh6rlt7HkuoYKWzAxOjAzLjg3Xeabvue7j+aJk+mSqee6puWumumDveaYr+aIkemql+S9oOeahApbMDE6MDcuNzVdClswMTowOC4zMF3pgqPkupvmiJHniLHkvaDpg73mmK/or7TnnYDlk4TkvaDnmoQKWzAxOjEyLjUwXeWlveWVpuaIkeaVsOWIsOS4ieS4gOi1t+aKiuaJi+aUvuW8gOS6hgpbMDE6MTcuMDJd6YKj5Lqb55Sc6Jyc5YW25a6e5oiR5pep5bCx5LiN5Zyo5LmO5LqGClswMToyMS4zM13lpb3lkKfmiJHmib/orqTmiJHlt7LkuI3lho3niLHkvaDkuoYKWzAxOjI1Ljc0Xei/meS4i+S9oOWPr+S7peatu+W/g+eahOi1sOS6hgpbMDE6MjkuODFdClswMTo0OS41OF3lrZnvvJrmgI7kuYjor7TmgI7kuYjor7TmiJHlj4jlupTor6XmgI7kuYjor7QKWzAxOjU2LjY3XVh1bu+8mumjnuacuuiQveWcsOS7peWQjuiusOW+l+S8oOeugOiur+e7meaIkQpbMDI6MDQuMzRdClswMjowNi4wNl3pobrkvr/liKDmjonmiJHnmoTlj7fnoIHnhLblkI7lv5jkuobmiJEKWzAyOjEzLjc5XQpbMDI6MTYuMDFd5ZCI77ya5aW95ZCn5L2g6LWw5Lul5ZCO55y85rOq57uI5LqO5Yaz5aCk5LqGClswMjoyMC4yMF3ov5nph4znmoTmiJHopoHmgI7kuYjkuaDmg6/msqHmnInkvaDlkaIKWzAyOjI0LjYwXeabvue7j+eahOe6puWumuaIkeavj+S4qumDveS8muiusOW+lwpbMDI6MjguNTJdClswMjoyOS4wNF3miJHniLHkvaDnjrDlnKjkvaDov5jog73mhJ/op4nliLDlkJcKWzAyOjMzLjMzXeWlveWQp+S9oOi1sOS7peWQjuaIkeW8gOWni+aBqOiHquW3seS6hgpbMDI6MzcuNjdd6YKj55Sc6Jyc55yf55qE5rKh5Lq65q+U5oiR5pu054+N5oOc5LqGClswMjo0Mi4wNV3kuLrkvaDku5jlh7rkuIDliIfmiJHpg73kuI3lnKjkuY7kuoYKWzAyOjQ2LjQ5XeS9leWGteWBmui/meS4gOasoeaBtuS6uuWRogpbMDI6NTAuMTZdClswMjo1MS43Nl3lrZnvvJrpgqPlubjnpo/miJHkvJrmm7/miJHku6zkv53nrqEKWzAyOjU0Ljk5Xea3sea3seeahOiXj+WcqOaIkeeahOW/g+acgOa3seWkhApbMDM6MDAuNDJdWHVu77ya5Yir566h5oiR6L+Z5qC355qE5LiA5Liq5peg6LWWClswMzowMy42OF3lj6rlvZPmiJHmmK/kuIDkuKrlhajkuJbnlYzkvaDmnIDmgajnmoTmgbbkuroKWzAzOjEwLjg0XQpbMDM6MTQuODZd5ZCI77ya5aW95ZCn5L2g6LWw5Lul5ZCO55y85rOq57uI5LqO5Yaz5aCk5LqGClswMzoxOS4wOV3ov5nph4znmoTmiJHopoHmgI7kuYjkuaDmg6/msqHmnInkvaDlkaIKWzAzOjIzLjQ1Xeabvue7j+eahOe6puWumuaIkeavj+S4qumDveS8muiusOW+lwpbMDM6MjcuODld5oiR54ix5L2g546w5Zyo5L2g6L+Y6IO95oSf6KeJ5Yiw5ZCXClswMzozMi4zM13lpb3lkKfkvaDotbDku6XlkI7miJHlvIDlp4vmgajoh6rlt7HkuoYKWzAzOjM2LjU4XemCo+eUnOicnOecn+eahOayoeS6uuavlOaIkeabtOePjeaDnOS6hgpbMDM6NDAuOTZd5Li65L2g5LuY5Ye65LiA5YiH5oiR6YO95LiN5Zyo5LmO5LqGClswMzo0NS40M13kvZXlhrXlgZrov5nkuIDmrKHmgbbkurrlkaI='
  },
  {
    title: '城外',
    artist: '蔡旻佑',
    link: '//cdn.wallleap.cn/musics/10.mp3',
    cover: '//cdn.wallleap.cn/musics/10.jpg',
    lyric: 'WzAwOjAwLjAwXeWfjuWkliAtIOiUoeaXu+S9kSAoRXZhbiBZbykKWzAwOjA1LjgzXeivje+8muWRqOeCnOadsApbMDA6MTEuNjdd5puy77ya6JSh5pe75L2RClswMDoxNy41MV3nvJbmm7LvvJrmtKrkv6HmnbAKWzAwOjIzLjM0XeS9oOeahCDniLHmg4Xlg4/mmK/kuIDluqfloKHlnpIKWzAwOjI4LjE1XQpbMDA6MzEuMTBd5aW95aSa5aOr5YW15Zyo6Ziy5Y2rClswMDozMy44N10KWzAwOjM3LjI5Xei/meagt+eahCDlkozlubMg5aSq54u854uIClswMDo0MC42OF0KWzAwOjQzLjU0XemavumBk+S9oOS4jeinieW+l+e0rwpbMDA6NDYuMzJdClswMDo0OC41OF3ln47lpJbpnaIg5oiR5bCx5b+r6KaB5bSp5rqDClswMDo1My45MF0KWzAwOjU0Ljc0XeWfjumHjCDkvaDkuI3kuobop6MKWzAwOjU4Ljg2XQpbMDE6MDEuMDRd54uC6aOO5LitIOmjmOedgCDmiJHnmoTnnLzms6oKWzAxOjA2LjQ5XQpbMDE6MDcuMjNd5L2g5pyJ5rKh5pyJ5oSf6KeJClswMToxMi4xNV0KWzAxOjMxLjk0XeaIkeeahCDkvKTlj6Pml6nlt7Lnu48g5peg5omA6LCTClswMTozNy4wNl0KWzAxOjM5LjU1XemGkuS6hiDkvp3nhLbnu6fnu63ov70KWzAxOjQyLjUzXQpbMDE6NDUuNzdd5YmN57q/5LiKIOe7neWvueS4jeaSpOmAgApbMDE6NDkuNDZdClswMTo1Mi4wMl3lsL3nrqHlr4Llr54g5aSq5ryG6buRClswMTo1Ni4zM10KWzAxOjU3LjE2XeWfjuWklumdouaIkeiiq+mHjemHjeWMheWbtApbMDI6MDIuNzNdClswMjowMy40Ml3kvJrkuI3kvJrpl63kuIrnnLwKWzAyOjA4LjY5XQpbMDI6MDkuNjZd5oiY54Gr6YeM5oiR5rKh5pyJ5LqG55+l6KeJClswMjoxNS4wNl0KWzAyOjE1LjgxXeS5n+W/mOS6hiDkvaDmmK/osIEKWzAyOjIxLjIxXQpbMDI6MzYuMjVd5Z+O5aSW6Z2iIOaIkeWwseW/q+imgeW0qea6gwpbMDI6NDEuNzBdClswMjo0Mi4zMF3ln47ph4wg5L2g5LiN5LqG6KejClswMjo0Ny45N10KWzAyOjQ4LjY5XeeLgumjjuS4rSDpo5jnnYDmiJHnmoTnnLzms6oKWzAyOjU0LjExXQpbMDI6NTQuODJd5L2g5pyJ5rKh5pyJ5oSf6KeJClswMzowMC4zOF0KWzAzOjAxLjA3XeWfjuWklumdouaIkeiiq+mHjemHjeWMheWbtApbMDM6MDYuNTVdClswMzowNy4zNF3kvJrkuI3kvJrpl63kuIrnnLwKWzAzOjEyLjgzXQpbMDM6MTMuNjBd5oiY54Gr6YeM5oiR5rKh5pyJ5LqG55+l6KeJClswMzoxOC45NV0KWzAzOjE5LjczXeS5n+W/mOS6huS9oOaYr+iwgSBvaA=='
  },
  {
    title: '洋葱',
    artist: '王俊凯/王源',
    link: '//cdn.wallleap.cn/musics/%E6%B4%8B%E8%91%B1.mp3',
    cover: '//cdn.wallleap.cn/musics/11.jpg',
    lyric: 'WzAwOjAwLjAwXea0i+iRsSAtIOeOi+a6kC/njovkv4rlh68KWzAwOjA0LjAyXeivje+8mumYv+S/oQpbMDA6MDguMDRd5puy77ya6Zi/5L+hClswMDoxMi4wNl3mupDvvJoKWzAwOjE2LjA5XeWmguaenOS9oOecvOelnuiDveWkn+S4uuaIkQpbMDA6MTguOThdClswMDoxOS44NV3niYfliLvnmoTpmY3kuLQKWzAwOjIxLjkzXQpbMDA6MjUuMjZd5aaC5p6c5L2g6IO95ZCs5YiwClswMDoyNy4yM13lv4Pnoo7nmoTlo7Dpn7MKWzAwOjI5LjE5XQpbMDA6MzEuNjdd5rKJ6buY55qE5a6I5oqk552A5L2gClswMDozMy44OF0KWzAwOjM1LjE3Xeayiem7mOeahOetieWlh+i/uQpbMDA6MzcuMjVdClswMDozNy44OF3msonpu5jnmoTorqnoh6rlt7EKWzAwOjM5Ljg3XQpbMDA6NDAuODld5YOP5piv56m65rCUClswMDo0My44MV3lh6/vvJoKWzAwOjQ0LjU4XQpbMDA6NDUuODFd5aSn5a626YO95ZCD552A6IGK552A56yR552AClswMDo0OC41NV0KWzAwOjQ5LjI3XeS7iuaZmuWkmuW8gOW/gwpbMDA6NTEuMjldClswMDo1NC45M13mnIDop5LokL3ph4znmoTmiJEKWzAwOjU2LjY2XeeskeW+l+WkmuWQiOe+pApbMDA6NTguNjldClswMTowMS4xNF3nm5jlupXnmoTmtIvokbHlg4/miJEKWzAxOjAzLjI4XQpbMDE6MDQuNzdd5rC46L+c5piv6LCD5ZGz5ZOBClswMTowNi43Nl0KWzAxOjA3LjUyXeWBt+WBt+WcsOeci+edgOS9oApbMDE6MDkuNjddClswMToxMC40M13lgbflgbflnLDpmpDol4/nnYDoh6rlt7EKWzAxOjE2LjM5Xea6kO+8mgpbMDE6MTYuOTJdClswMToyMC4wN13lpoLmnpzkvaDmhL/mhI8KWzAxOjIxLjI5XeS4gOWxguS4gOWxguS4gOWxguWcsOWJpeW8gOaIkeeahOW/gwpbMDE6MjYuNTVdClswMToyNy4zN13kvaDkvJrlj5HnjrDkvaDkvJrorrblvIIKWzAxOjMwLjA1XQpbMDE6MzAuOTVd5L2g5piv5oiR5pyA5Y6L5oqRClswMTozMi41NF3mnIDmt7HlpITnmoTnp5jlr4YKWzAxOjM0LjQ3XeWHr++8mgpbMDE6MzQuODZd5aaC5p6c5L2g5oS/5oSPClswMTozNS45MF3kuIDlsYLkuIDlsYLkuIDlsYLlnLDliaXlvIDmiJHnmoTlv4MKWzAxOjQxLjA5XQpbMDE6NDIuMDZd5L2g5Lya6by76YW45L2g5Lya5rWB5rOqClswMTo0NS4xOV0KWzAxOjQ1Ljg1XeWPquimgeS9oOiDveWQrOWIsOaIkQpbMDE6NDcuNzdd55yL5Yiw5oiR55qE5YWo5b+D5YWo5oSPClswMTo1MC45N10KWzAxOjU3LjkwXea6kO+8mgpbMDE6NTguNjVdClswMjowOC41Nl3lkKzkvaDor7TkvaDlkozkvaDnmoTku5bku6wKWzAyOjExLjc2XQpbMDI6MTIuNTFd5pqn5pin55qE56m65rCUClswMjoxNC4zNV0KWzAyOjE3LjgwXeaIkeWSjOaIkeeahOe7neacmwpbMDI6MTkuODJd6KOF5b6X5b6I6aOO6LajClswMjoyMi4zNF3lh6/vvJoKWzAyOjIyLjgyXQpbMDI6MjQuMjhd5oiR5bCx5YOP5LiA6aKX5rSL6JGxClswMjoyNi40NF0KWzAyOjI3Ljg0XeawuOi/nOaYr+mFjeinkuaIjwpbMDI6MjkuODhdClswMjozMC42MF3lpJrluIzmnJvog73kuI7kvaDmnInkuIDnp5IKWzAyOjM0LjM2XeS4k+WxnueahOWJp+aDhQpbMDI6MzguNDRd5rqQ77yaClswMjozOS4xOV0KWzAyOjQzLjI1XeWmguaenOS9oOaEv+aEjwpbMDI6NDQuMzld5LiA5bGC5LiA5bGC5LiA5bGC5Zyw5Yml5byA5oiR55qE5b+DClswMjo0OS40Nl0KWzAyOjUwLjQ4XeS9oOS8muWPkeeOsOS9oOS8muiutuW8ggpbMDI6NTMuMzBdClswMjo1NC4xN13kvaDmmK/miJHmnIDljovmipEKWzAyOjU1LjYwXeacgOa3seWkhOeahOenmOWvhgpbMDI6NTcuNDRd5Yev77yaClswMjo1Ny44Nl3lpoLmnpzkvaDmhL/mhI8KWzAyOjU5LjE3XeS4gOWxguS4gOWxguS4gOWxguWcsOWJpeW8gOaIkeeahOW/gwpbMDM6MDQuMzVdClswMzowNS4yMV3kvaDkvJrpvLvphbjkvaDkvJrmtYHms6oKWzAzOjA4LjgzXeWPquimgeS9oOiDveWQrOWIsOaIkQpbMDM6MTAuNzdd55yL5Yiw5oiR55qE5YWo5b+D5YWo5oSPClswMzoxNC42OV3lkIjvvJoKWzAzOjE1LjI5XQpbMDM6NDIuNDdd5aaC5p6c5L2g5oS/5oSPClswMzo0NC4wMF3kuIDlsYLkuIDlsYLkuIDlsYLlnLDliaXlvIDmiJHnmoTlv4MKWzAzOjQ5LjIzXeWHr++8mgpbMDM6NTAuMDhd5L2g5Lya5Y+R546w5L2g5Lya6K625byCClswMzo1Mi45NV3mupDvvJoKWzAzOjUzLjcwXeS9oOaYr+aIkeacgOWOi+aKkQpbMDM6NTUuMTZd5pyA5rex5aSE55qE56eY5a+GClswMzo1Ny4wMF3lkIjvvJoKWzAzOjU3LjQzXeWmguaenOS9oOaEv+aEjwpbMDM6NTguNzZd5LiA5bGC5LiA5bGC5LiA5bGC5Zyw5Yml5byA5oiR55qE5b+DClswNDowMy44N10KWzA0OjA0Ljc1XeS9oOS8mum8u+mFuOS9oOS8mua1geazqgpbMDQ6MDcuOTFdClswNDowOC41Ml3lj6ropoHkvaDog73lkKzliLDmiJEKWzA0OjEwLjQwXeeci+WIsOaIkeeahOWFqOW/g+WFqOaEjwpbMDQ6MTMuODNd5Yev77yaClswNDoxNC4yMF0KWzA0OjE1Ljk2XeS9oOS8mum8u+mFuApbMDQ6MTYuODdd5rqQ77yaClswNDoxNy43MV3kvaDkvJrmtYHms6oKWzA0OjE4LjkwXeWHr++8mgpbMDQ6MTkuNjVd5Y+q6KaB5L2g6IO95ZCs5Yiw5oiRClswNDoyMS4yNl3mupDvvJoKWzA0OjIxLjYxXeeci+WIsOaIkeeahApbMDQ6MjIuNjNd5ZCI77yaClswNDoyMi45OV3lhajlv4PlhajmhI8='
  },
  {
    title: '烈酒',
    artist: '殷世航',
    link: '//cdn.wallleap.cn/musics/12.mp3',
    cover: '//cdn.wallleap.cn/musics/12.jpg',
    lyric: 'WzAwOjAwLjAwXeeDiOmFkiAtIOaut+S4luiIqgpbMDA6MDEuNDhd6K+N77ya6JKL6JKLClswMDowMi45N13mm7LvvJrokovokosKWzAwOjA0LjQ1Xee8luabsu+8mueOi+afj+m4vwpbMDA6MDUuOTRd5re36Z+z77yaRXRoYW4KWzAwOjA3LjQzXeWSjOWjsO+8mueajuaciApbMDA6MDguOTFd5b2V6Z+z77ya5rWU5rWUClswMDoxMC40MF3liLbkvZzkurrvvJrmtZTmtZQKWzAwOjExLjg4XeS6uuWjsOW9lemfs+WupO+8mkhvdCBNdXNpYyBTdHVkaW8KWzAwOjEzLjM3Xea3t+mfs+WupO+8mkhvdCBNdXNpYyBTdHVkaW8KWzAwOjE0Ljg2XeebkeWItu+8muS4ieWNgwpbMDA6MTYuMzRd5LyB5YiS6JCl6ZSA77ya5qKm56ul5aix5LmQClswMDoxNy44M11PUO+8muWNg+WSjOS4lue6qgpbMDA6MTkuMzJd5YiG5byA5ZCO5oC75Zad5LiN5aSfClswMDoyMS4xNV3phonkuoblkI7mgLvkvJrpmr7lj5cKWzAwOjIzLjUxXeaIkeWDj+S4qui/h+ihl+Wwj+S4kQpbMDA6MjUuODVd5Lmf5YOP5Liq5ruR56i9546p5YG2ClswMDoyOC4wOF3ov5jmiorkvaDmlL7lnKjlv4PkuIoKWzAwOjMwLjM4XeacieWlveWkmuivnei/mOayoeiusgpbMDA6MzIuNzJd55So5LiN552A5pGG5oiR55qE5Lq65aKZClswMDozNS4zOV0KWzAwOjM3LjM5XeS4jeWbnuWktOS4jeiCr+e9ouS8kQpbMDA6MzkuNjVd6KaB5Lqy5omL5pKS5oiR5Lyk5Y+jClswMDo0MS45Nl3miJHmg7Pov4flpJrlubTku6XlkI4KWzAwOjQ0LjI3XeS5n+aDs+i/h+mVv+ebuOWOruWuiApbMDA6NDYuNTJd5Y+N6amz5aOw5aSa5LmI6auY5LqiClswMDo0OC44Ml3lpb3lh6Dlia/lkJPkurrmqKHmoLcKWzAwOjUxLjE4XeS9oOaQnuW+l+aIkeS5n+W+iOW9t+W+qApbMDA6NTQuMjJd5Zad6L+H5pyA54OI55qE6YWSIOaJjeaYvuW+l+aIkeaCsuS8pApbMDA6NTguNTld5LiK5LqG5aS054On5LqG5ZaJIOiuqeebuOaAneaEgeaWreiCoApbMDE6MDIuNzNdClswMTowMy4zNl3pgqPplb/kuq3nmoTpgoLpgIUg56a75Yir5oC75Zyo5rex56eLClswMTowNy4zOF0KWzAxOjA4Ljc4Xee7iOS6jumHiuaAgCDnu4jkuo7mlL7kuobmiYsKWzAxOjEyLjU1XemCo+WjtuacgOeDiOeahOmFkiDmsqHmnInor5flkozov5zmlrkKWzAxOjE2LjYwXQpbMDE6MTcuMTNd5bCP6ZiB5qW86ICB6buE54uXIOW3suiiq+WygeaciOmBl+W/mApbMDE6MjEuNzld6YKj5peg5oSP55qE5Zue55y4IOa3seaDheaAu+imgeiFkOacvQpbMDE6MjYuMzVdClswMToyNy4yNV3nu4jkuo7mkYrniYwg57uI5LqO5pS+5LqG5omLClswMTozMS41OF0KWzAxOjUxLjU4XeWIhuW8gOWQjuaAu+WWneS4jeWknwpbMDE6NTMuNTFd6YaJ5LqG5ZCO5oC75Lya6Zq+5Y+XClswMTo1NS43Nl3miJHlg4/kuKrov4fooZflsI/kuJEKWzAxOjU4LjEyXeS5n+WDj+S4qua7keeoveeOqeWBtgpbMDI6MDAuMzld6L+Y5oqK5L2g5pS+5Zyo5b+D5LiKClswMjowMi43MV3mnInlpb3lpJror53ov5jmsqHorrIKWzAyOjA1LjAwXeeUqOS4jeedgOaRhuaIkeeahOS6uuWimQpbMDI6MDcuNTNdClswMjowOS43OV3kuI3lm57lpLTkuI3ogq/nvaLkvJEKWzAyOjExLjk0XeimgeS6suaJi+aSkuaIkeS8pOWPowpbMDI6MTQuMjNd5oiR5oOz6L+H5aSa5bm05Lul5ZCOClswMjoxNi41N13kuZ/mg7Pov4fplb/nm7jljq7lrogKWzAyOjE4LjgyXeWPjemps+WjsOWkmuS5iOmrmOS6ogpbMDI6MjEuMDhd5aW95Yeg5Ymv5ZCT5Lq65qih5qC3ClswMjoyMy40MV3kvaDmkJ7lvpfmiJHkuZ/lvojlvbflvqgKWzAyOjI2LjQ2XeWWnei/h+acgOeDiOeahOmFkiDmiY3mmL7lvpfmiJHmgrLkvKQKWzAyOjMwLjg5XeS4iuS6huWktOeDp+S6huWWiSDorqnnm7jmgJ3mhIHmlq3ogqAKWzAyOjM1LjU0XemCo+mVv+S6reeahOmCgumAhSDnprvliKvmgLvlnKjmt7Hnp4sKWzAyOjM5Ljc3XQpbMDI6NDAuOTZd57uI5LqO6YeK5oCAIOe7iOS6juaUvuS6huaJiwpbMDI6NDQuNzdd6YKj5aO25pyA54OI55qE6YWSIOayoeacieivl+WSjOi/nOaWuQpbMDI6NDguOTNdClswMjo0OS40NF3lsI/pmIHmpbzogIHpu4Tni5cg5bey6KKr5bKB5pyI6YGX5b+YClswMjo1NC4wM13pgqPml6DmhI/nmoTlm57nnLgg5rex5oOF5oC76KaB6IWQ5py9ClswMjo1OC4xN10KWzAyOjU5LjU3Xee7iOS6juaRiueJjCDnu4jkuo7mlL7kuobmiYsKWzAzOjAyLjkwXQpbMDM6MDMuNTFd5Zad6L+H5pyA54OI55qE6YWSIOaJjeaYvuW+l+aIkeaCsuS8pApbMDM6MDcuODdd5LiK5LqG5aS054On5LqG5ZaJIOiuqeebuOaAneaEgeaWreiCoApbMDM6MTIuMDVdClswMzoxMi42MV3pgqPplb/kuq3nmoTpgoLpgIUg56a75Yir5oC75Zyo5rex56eLClswMzoxNi42NF0KWzAzOjE4LjAxXee7iOS6jumHiuaAgCDnu4jkuo7mlL7kuobmiYsKWzAzOjIxLjc2XemCo+WjtuacgOeDiOeahOmFkiDmsqHmnInor5flkozov5zmlrkKWzAzOjI2LjI4XeWwj+mYgealvOiAgem7hOeLlyDlt7LooqvlsoHmnIjpgZflv5gKWzAzOjMxLjAxXemCo+aXoOaEj+eahOWbnuecuCDmt7Hmg4XmgLvopoHohZDmnL0KWzAzOjM1LjExXQpbMDM6MzYuNTFd57uI5LqO5pGK54mMIOe7iOS6juaUvuS6huaJiw=='
  },
  {
    title: '透明',
    artist: '郑国锋',
    link: '//cdn.wallleap.cn/musics/13.mp3',
    cover: '//cdn.wallleap.cn/musics/13.jpg',
    lyric: 'WzAwOjAwLjAwXemAj+aYjiAtIOmDkeWbvemUiwpbMDA6MDQuNjBd6K+N77ya6YOR5Zu96ZSLClswMDowOS4yMF3mm7LvvJrpopzlsI/lgaUKWzAwOjEzLjgwXeaIkeaDs+aIkeimgeWPmOW+l+mAj+aYjgpbMDA6MjAuNDVd5omN6IO956ql5o6i5L2g55qE5b+DClswMDoyNS42M13mg7PnnIvnnIvkvaDnmoTlv4MKWzAwOjI4Ljk4XeiusOW9leiwgeeahOihqOaDhQpbMDA6MzMuNDVd6K6h566X5oiR5beu5aSa5bCR55qE6Led56a7ClswMDo0MC44Ml3miJHmg7PmiJHlt7Llj5jlvpfpgI/mmI4KWzAwOjQ3LjM3XeWcqOS9oOecvOmHjOaYr+epuuawlApbMDA6NTIuNzBd5LiA5Y+l6K+d5LiA5Liq5L2gClswMDo1NS44MF3pg73ourLlnKjohJHmtbfph4wKWzAxOjAwLjg3XeWPr+S9oOaAu+aYr+aDs+mAg+emuwpbMDE6MDkuMTVd6Zuo5LiL5LqG5aSa5LmF5omN5Lya5YGcClswMToxMy4xNl3lv4PmiY3og73lpJ/mlL7mmbQKWzAxOjE2LjQ2XeS6keS4uuS9lei6suWcqOWkqeepuumHjApbMDE6MjIuNjRd5L2g57uP6L+H5oiR55qE5YaF5b+D6YeMClswMToyNi42NV3ljbTlj4jorqnmiJHmipPkuI3ntKcKWzAxOjMwLjkyXeaIkeS/neeVmeS9oOWcqOW/g+mHjApbMDE6MzYuNDBd6Zuo5LiL5LqG5aSa5LmF5omN5Lya5YGcClswMTo0MC4wNl3lv4PmiY3og73lpJ/lronpnZkKWzAxOjQzLjUxXeaIkeaJjeWtmOWcqOS9oOeahOecvOmHjApbMDE6NDkuNjBd5oiR6LWw6L+HIOS6huWkmuWwkeS4qumbqOWtowpbMDE6NTMuNjFd5omN6IO95aSf5ZKM5L2g55u46YGHClswMTo1OC4wOF3kvaDljbTlgYfoo4XnnIvkuI3muIUKWzAyOjAyLjA5XemAieaLqeS6humAg+mBvwpbMDI6MTQuNjhdClswMjoxOC42MF3miJHmg7PmiJHlt7Llj5jlvpfpgI/mmI4KWzAyOjI1LjQwXeWcqOS9oOecvOmHjOaYr+epuuawlApbMDI6MzAuNDhd5LiA5Y+l6K+d5LiA5Liq5L2gClswMjozMy44M13pg73ourLlnKjohJHmtbfph4wKWzAyOjM4LjkzXeWPr+S9oOaAu+aYr+aDs+mAg+emuwpbMDI6NDMuNTVd6Zuo5LiL5LqG5aSa5LmF5omN5Lya5YGcClswMjo0Ny43MV3lv4PmiY3og73lpJ/mlL7mmbQKWzAyOjUxLjMyXeS6keS4uuS9lei6suWcqOWkqeepuumHjApbMDI6NTcuMTFd5L2g57uP6L+H5oiR55qE5YaF5b+D6YeMClswMzowMS4yN13ljbTlj4jorqnmiJHmipPkuI3ntKcKWzAzOjA1Ljc0XeaIkeS/neeVmeS9oOWcqOW/g+mHjApbMDM6MTAuNjdd6Zuo5LiL5LqG5aSa5LmF5omN5Lya5YGcClswMzoxNS44MF3lv4PmiY3og73lpJ/lronpnZkKWzAzOjE4LjI4XeaIkeaJjeWtmOWcqOS9oOeahOecvOmHjApbMDM6MjQuMjJd5oiR6LWw6L+HIOS6huWkmuWwkeS4qumbqOWtowpbMDM6MjguMjld5omN6IO95aSf5ZKM5L2g55u46YGHClswMzozMi42Nl3kvaDljbTlgYfoo4XnnIvkuI3muIUKWzAzOjM2Ljc3XemAieaLqeS6humAg+mBvwpbMDM6MzkuMjVdClswMzo1NS4wOF3pm6jkuIvkuoblpJrkuYXmiY3kvJrlgZwKWzAzOjU4LjY5XeW/g+aJjeiDveWkn+aUvuaZtApbMDQ6MDIuMDld5LqR5Li65L2V6Lqy5Zyo5aSp56m66YeMClswNDowNy45OF3kvaDnu4/ov4fmiJHnmoTlhoXlv4Pph4wKWzA0OjEyLjIwXeWNtOWPiOiuqeaIkeaKk+S4jee0pwpbMDQ6MTYuNzJd5oiR5L+d55WZ5L2g5Zyo5b+D6YeMClswNDoyMS42NF3pm6jkuIvkuoblpJrkuYXmiY3kvJrlgZwKWzA0OjI1Ljc2XeW/g+aJjeiDveWkn+WuiemdmQpbMDQ6MjkuMTFd5oiR5omN5a2Y5Zyo5L2g55qE55y86YeMClswNDozNS4xNV3miJHotbDov4cg5LqG5aSa5bCR5Liq6Zuo5a2jClswNDozOS4yNl3miY3og73lpJ/lkozkvaDnm7jpgYcKWzA0OjQzLjc4XeS9oOWNtOWBh+ijheeci+S4jea4hQpbMDQ6NDcuODBd6YCJ5oup5LqG6YCD6YG/ClswNDo1Mi4wNl0KWzA0OjUyLjk3XeaDs+S4gOS4quS6ug=='
  },
  {
    title: '再见了我的爱',
    artist: '至上励合',
    link: '//cdn.wallleap.cn/musics/14.mp3',
    cover: '//cdn.wallleap.cn/musics/14.png',
    lyric: 'WzAwOjAwLjAwXeWGjeingeS6huaIkeeahOeIsSAtIOiHs+S4iuWKseWQiApbMDA6MDAuOTld6K+N77ya5YiY5rSy5oiQClswMDowMS4xNl3mm7LvvJrliJjmtLLmiJAKWzAwOjAyLjA0XQpbMDA6MjQuNjhd5rSy77yaClswMDoyNS4yNF0KWzAwOjMxLjIyXeaIkeS4gOebtOmakOeekuayoeacieWFrOW8gApbMDA6MzUuMzFdClswMDozNi40M13mgJXkvaDmib/lj5fkuI3mnaUKWzAwOjM4LjY1XQpbMDA6NDEuMDdd5LiN5pWi55u45L+h5LiN6IO95o6l5Y+X6L+Z5oSP5aSWClswMDo0NS44Ml0KWzAwOjQ3LjM5XeaCsueXm+WSjOaJk+WHu+S4gOS4gOaOpei4teiAjOadpQpbMDA6NTQuNDhdClswMDo1NS44M13luKbnu5nkvaDmm7TlpJrkvKTlrrMgd29vClswMTowMC4xNV0KWzAxOjAwLjczXeiMgu+8mgpbMDE6MDEuNTNd6aqX5L2g5piv6L+r5LqO5peg5aWIClswMTowNC4yNF0KWzAxOjA1LjEyXeS4jeefpemBk+WmguS9leS6pOS7owpbMDE6MDguMDFdClswMTowOC44Ml3kuIDliIfmnaXkuI3lj4rlronmjpIKWzAxOjEyLjU4XQpbMDE6MTMuNDJd5q6L6YW355qE5ZG96L+Q5rKh6aKE5pyf6K+05p2l5bCx5p2lClswMToyMC4zNF3kupTvvJoKWzAxOjIwLjgzXeWGjeingeS6huaIkeeahOeIsQpbMDE6MjQuMzdd55Sf5ZG95Lit55qE55yf54ixClswMToyOC4xM13lvZPkvaDmiorov5nlsIHkv6Hmi4blvIAKWzAxOjMxLjc1XeaIkeS6uuW3suS4jeWcqApbMDE6MzUuMjNd6L+c77yaClswMTozNS41Nl3lho3op4HkuobmiJHnmoTniLEKWzAxOjM4LjU5XQpbMDE6MzkuMTdd6K+35Y6f6LCF5oiR5a+55L2g55qE5LiN5Z2m55m9ClswMTo0My4zOV0KWzAxOjQ0LjMwXeiIjeS4jeW+l+S5n+S4jeW+l+S4jeemu+W8gApbMDE6NDkuMDZdClswMTo0OS44NF1Hb29kYnllIG15IGxvdmUKWzAxOjUzLjE5XQpbMDI6MjEuMDld6Ziz77yaClswMjoyMS4zNF0KWzAyOjIyLjcwXeS9oOimgeivleedgOWOu+W/mOaAgApbMDI6MjUuNDddClswMjoyNi4zNV3orrDlv4booqvml7bpl7Tmt7Hln4sKWzAyOjI5LjM3XQpbMDI6MzAuMDBd5pen54ix6KKr5paw5qyi5Y+W5LujClswMjozMy4wOF0KWzAyOjM0LjcwXeWPquacieW/mOS6hui/h+WOu+aJjeiDveaLpeacieacquadpQpbMDI6NDEuODVd5LqU77yaClswMjo0Mi4xMl3lho3op4HkuobmiJHnmoTniLEKWzAyOjQ1LjczXeeUn+WRveS4reeahOecn+eIsQpbMDI6NDguNzFdClswMjo0OS4zNV3lkozkvaDnroDljJblpb3lpJrpmpznoo0KWzAyOjUzLjAzXeWPquiDveWkn+e8heaAgApbMDI6NTYuMzJd6L+c77yaClswMjo1Ni42NF3lho3op4HkuobmiJHnmoTniLEKWzAyOjU5LjkxXQpbMDM6MDAuNDVd6K+35Y6f6LCF5oiR5a+55L2g55qE5LiN5Z2m55m9ClswMzowNS41MV3mipvkuI3kuIvljbTkuI3lvpfkuI3mlL7lvIAKWzAzOjEwLjM1XQpbMDM6MTEuMDld5YaN5oKy55eb5bCx5p2lClswMzoxMy4wNl3mtLLvvJoKWzAzOjEzLjM0XeWGjeingeS6huaIkeeahOeIsQpbMDM6MTYuMzJdClswMzoxNy4wM13mnIDlkI7kuIDmrKHpu5jlk4AKWzAzOjIwLjM3XemYs++8mgpbMDM6MjAuNzNd5bCx566X5piv5Li65LqG5oiR5L2g5Lmf6KaB5oyv5L2c6LW35p2lClswMzoyNy43Ml3ov5zvvJoKWzAzOjI4LjE1XeWGjeingeS6huaIkeeahOeIsQpbMDM6MzEuMzFdClswMzozMS44M13liKvovpzotJ/miJHlr7nkvaDnmoTmnJ/lvoUKWzAzOjM2LjQzXeS6lO+8mgpbMDM6MzYuODld56Wd56aP5L2g6YeN5paw5om+5Yiw55yf54ixClswMzo0Mi4xMF3ojILvvJoKWzAzOjQyLjQyXUZvcmV2ZXIgbG92ZQpbMDM6NDUuNDBdClswMzo1Ny4zMl1Hb29kYnllIG15IGxvdmU='
  },
]

// #region 工具函数，放在前面
const formatSec = (secTime) => {
  return `${parseInt(parseInt(secTime) / 60)}:${parseInt(secTime) % 60 >= 10 ? parseInt(secTime) % 60 : '0' + parseInt(secTime) % 60}`
}
const formatTime = (time) => {
  let min = parseInt(time.split(':')[0])
  let sec = parseInt(time.split(':')[1].split('.')[0]) + parseFloat(time.split(':')[1].split('.')[1]) * 0.01
  return min * 60 + sec
}
const getRand = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start
}
const setStorage = (key, value) => {
  localStorage.setItem(key, value)
}
const getStorage = (key, value) => {
  const storedValue = localStorage.getItem(key)
  if (storedValue !== null) {
    return storedValue
  }
  setStorage(key, value)
  return value
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
const $ = el => document.querySelector(el)
const $$ = els => document.querySelectorAll(els)
// #endregion

// 整体加载完成
window.addEventListener('load', () => {
  const audioPlayer = new AudioPlayer({
    tracks: playList.map(music => (music.link)),
    volume: parseFloat(getStorage('volValue', 1)),
    currentIndex: parseInt(getStorage('index', 0), 10),
  })

  // #region 已加载的 DOM 元素获取
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
    $lyricBox = $('.lyric-box'),
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
  let playTimer = null
  let index = parseInt(getStorage('index', 0), 10)
  let orderFlag = parseInt(getStorage('orderFlag', 0), 10)
  let volFlag = parseInt(getStorage('volFlag', 3))
  let isMuted = getStorage('isMuted', 'no')
  let volValue = getStorage('volValue', 1)
  let orderList = ['顺序播放', '列表循环', '单曲循环', '随机播放']
  let isDraging = false
  let dragTimer = null

  const toggleVolIcon = (volValue) => {
    $$volIcons.forEach((vol) => {
      vol.classList.remove('show')
    })
    if (volValue >= 0.8) { // loud
      volFlag = 3
      $loudIcon.classList.add('show')
    } else if (volValue >= 0.5) { // volume
      volFlag = 2
      $volumeIcon.classList.add('show')
    } else if (volValue > 0) { // quiet
      volFlag = 1
      $quietIcon.classList.add('show')
    } else {
      volFlag = 0 // mute
      $muteIcon.classList.add('show')
    }
    setStorage('volFlag', volFlag)
  }
  const toggleMuted = () => {
    audioPlayer.setMuted(!audioPlayer.getState().muted)
    isMuted = audioPlayer.getState().muted ? 'yes' : 'no'
    setStorage('isMuted', isMuted)
    if (isMuted === 'yes') {
      toggleVolIcon(0)
    } else {
      audioPlayer.setVolume(getStorage('volValue', 1))
      const volValue = audioPlayer.getState().volume
      if (volValue === 0) {
        audioPlayer.setVolume(0.5)
        setStorage('volValue', 0.5)
      }
      toggleVolIcon(volValue)
    }
  }
  const setVolume = () => {
    audioPlayer.setVolume(getStorage('volValue', 1))
    setStorage('isMuted', 'no')
    toggleVolIcon(audioPlayer.getState().volume)
  }
  const setSong = () => {
    $title.innerText = playList[audioPlayer.currentIndex].title
    $artist.innerText = playList[audioPlayer.currentIndex].artist
    $cover.style.backgroundImage = `url(${playList[audioPlayer.currentIndex].cover})`
  }
  const getLyric = () => {
    let lrcs = []
    const lyric = playList[audioPlayer.currentIndex].lyric
    if (!lyric) {
      lrcs.push(JSON.parse(`{"time": "${formatTime('00:00.00')}", "text": "此歌曲暂时没有适配歌词"}`))
    } else {
      let lrcArr = decodeBase64(lyric).split('\n')
      lrcArr.forEach((item) => {
        let temp = item.split('\]')
        if (temp[1]) {
          lrcs.push(JSON.parse(`{"time": "${formatTime(temp[0].slice(1))}", "text": "${temp[1]}"}`))
        }
      })
    }
    return lrcs
  }
  const setLyricInner = cIndex => {
    if ($('.lyric-inner')) {
      $('.lyric-inner').remove()
    }
    let lyricArr = getLyric(cIndex)
    let $lrcFragment = document.createDocumentFragment()
    let $lyricInner = document.createElement('div')
    $lyricInner.classList.add('lyric-inner')
    $lyricInner.style.transform = "translateY(80px)"
    lyricArr.forEach((lrc) => {
      let $lrc = document.createElement('p')
      let $text = document.createElement('span')
      $text.textContent = lrc.text
      $lrc.classList.add('on')
      $lrc.append($text)
      $lrcFragment.append($lrc)
    })
    $lyricInner.append($lrcFragment)
    $lyricBox.append($lyricInner)
  }
  const initLyric = () => {
    let lrcs = getLyric(parseInt(getStorage('index'), 10))
    let cTime = getStorage('currentTime', 0)
    $$('.lyric-inner p').forEach(($lrc) => {
      if ($lrc.classList.contains('on')) {
        $lrc.classList.remove('on')
      }
    })
    lrcs.forEach((lrc, idx) => {
      if (cTime === 0) {
        $$('.lyric-inner p')[lrcs.length - 1].classList.add('on')
      }
      if (idx < (lrcs.length - 1)) {
        if (lrc.time <= cTime && cTime <= lrcs[idx + 1].time) {
          $('.lyric-inner').style.transform = `translateY(${80 - 35 * idx}px)`
          $$('.lyric-inner p')[idx], $$('.lyric-inner p')[idx].classList.add('on')
        }
      }
      if (cTime >= (lrcs[lrcs.length - 1].time)) {
        $('.lyric-inner').style.transform = `translateY(${80 - 35 * idx}px)`
        $$('.lyric-inner p')[lrcs.length - 1].classList.add('on')
      }
    })
  }
  const updateLyric = () => {
    let lrcs = getLyric(parseInt(getStorage('index'), 10))
    $$('.lyric-inner p').forEach(($lrc) => {
      if ($lrc.classList.contains('on')) {
        $lrc.classList.remove('on')
      }
    })
    lrcs.forEach((lrc, idx) => {
      if (audioPlayer.getState().currentTime === 0) {
        $$('.lyric-inner p')[lrcs.length - 1].classList.add('on')
      }
      if (idx < (lrcs.length - 1)) {
        if (lrc.time <= audioPlayer.getState().currentTime && audioPlayer.getState().currentTime <= lrcs[idx + 1].time) {
          $('.lyric-inner').style.transform = `translateY(${80 - 35 * idx}px)`
          $$('.lyric-inner p')[idx], $$('.lyric-inner p')[idx].classList.add('on')
        }
      }
      if (audioPlayer.getState().currentTime >= (lrcs[lrcs.length - 1].time)) {
        $('.lyric-inner').style.transform = `translateY(${80 - 35 * idx}px)`
        $$('.lyric-inner p')[lrcs.length - 1].classList.add('on')
      }
    })
  }
  const initPlayer = (cIndex) => {
    clearInterval(playTimer)
    let $fragment = document.createDocumentFragment()
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
    setLyricInner(cIndex)
    initLyric()
    $$orderIcons.forEach((icon) => {
      icon.classList.remove('show')
    })
    $$orderIcons[orderFlag].classList.add('show')
    $volBar.value = volValue
    setVolume()
    setSong()
    $('body').style.backgroundImage = `url(${playList[audioPlayer.currentIndex].cover})`
  }
  // #endregion

  // #region 初始化
  initPlayer(index)
  audioPlayer.on('canplay', () => {
    $current.innerText = formatSec(getStorage('currentTime', 0))
    $total.innerText = formatSec(audioPlayer.getState().duration)
    $currentBar.style.width = `${getStorage('currentTime') / audioPlayer.getState().duration * 100}%`
  })
  // #endregion

  // #region 初始化后才有的 DOM 元素
  const $$song = $$('.song'),
    $songBtn = $(`.song-btn`),
    $$lrcs = $$('.lyric-inner>p')
  // #endregion

  // #region 封装后面常用的函数
  const playMusic = () => {
    const idx = audioPlayer.currentIndex
    audioPlayer.play()
    $('body').style.backgroundImage = `url(${playList[audioPlayer.currentIndex].cover})`
    $$song[idx].classList.add('current')
    $pauseIcon.classList.remove('hide')
    $playIcon.classList.add('hide')
  }
  const pauseMusic = () => {
    audioPlayer.pause()
    $$song[audioPlayer.currentIndex].classList.remove('current')
    $pauseIcon.classList.add('hide')
    $playIcon.classList.remove('hide')
  }
  // #endregion

  // #region 系统事件
  audioPlayer.on('playing', function () {
    clearInterval(playTimer)
    $total.innerText = formatSec(audioPlayer.getState().duration)
    playTimer = setInterval(function () {
      setStorage('currentTime', audioPlayer.getState().currentTime)
      $current.innerText = formatSec(audioPlayer.getState().currentTime)
      $currentBar.style.width = `${getStorage('currentTime') / audioPlayer.getState().duration * 100}%`
      $cover.classList.add('play-animation')
    }, 1000)
  })
  audioPlayer.on('pause', function () {
    clearInterval(playTimer)
    $cover.classList.remove('play-animation')
    $$song.forEach((cSong) => {
      cSong.classList.remove('current')
    })
    $pauseIcon.classList.add('hide')
    $playIcon.classList.remove('hide')
  })
  audioPlayer.on('ended', function () {
    clearInterval(playTimer)
    $$song.forEach((cSong) => {
      cSong.classList.remove('current')
    })
    $pauseIcon.classList.add('hide')
    $playIcon.classList.remove('hide')
    audioPlayer.pause()
    switch (parseInt(getStorage('orderFlag'), 10)) {
      case 0:
        // 顺序播放，如果当前是最后一首，则停止播放，否则播放下一首
        if (audioPlayer.currentIndex === playList.length - 1) {
          $current.innerText = formatSec(audioPlayer.getState().duration)
          audioPlayer.pause()
        } else {
          audioPlayer.next()
        }
        break
      case 1:
        // 列表循环，播放下一首，最后一首则从头开始
        audioPlayer.next()
        break
      case 2:
        // 单曲循环，重新播放当前歌曲
        audioPlayer.setProgress(0)
        audioPlayer.play()
        break
      case 3:
        // 随机播放，随机选择一首歌曲播放
        audioPlayer.rand()
        break
    }
    if (audioPlayer.getState().isPlaying) {
      $$song[audioPlayer.currentIndex].classList.add('current')
      $playIcon.classList.add('hide')
      $pauseIcon.classList.remove('hide')
      setSong()
      setStorage('index', audioPlayer.currentIndex)
      setLyricInner(audioPlayer.currentIndex)
      initLyric()
    }
  })
  audioPlayer.on('timeupdate', function () {
    updateLyric()
  })
  audioPlayer.on('volumechange', function () {
    $volBar.value = audioPlayer.getState().volume
    setStorage('volValue', audioPlayer.getState().volume)
    if (!audioPlayer.getState().muted) {
      toggleVolIcon(audioPlayer.getState().volume)
    }
    if (audioPlayer.getState().volume === 0) {
      audioPlayer.setMuted(true)
      isMuted = 'yes'
      setStorage('isMuted', isMuted)
    }
  })
  // #endregion

  // #region 用户触发事件
  $playBtn.onclick = function () {
    audioPlayer.setProgress(getStorage('currentTime'))
    if (audioPlayer.getState().isPlaying) {
      pauseMusic()
    } else {
      playMusic()
    }
  }
  // 切换音乐
  const changeMusic = (callback) => {
    clearInterval(playTimer)
    $$song.forEach((cSong) => {
      cSong.classList.remove('current')
    })
    setStorage('currentTime', 0)
    switch (parseInt(getStorage('orderFlag'), 10)) {
      case 0:
      case 1:
      case 2:
        callback()
        break
      case 3:
        audioPlayer.rand()
        break
    }
    const cIndex = audioPlayer.currentIndex
    setLyricInner(cIndex)
    setSong()
    setStorage('index', cIndex)
    updateLyric()
    playMusic()
  }
  $preBtn.onclick = function () {
    changeMusic(() => {
      audioPlayer.prev()
    })
  }
  $nextBtn.onclick = function () {
    changeMusic(() => {
      audioPlayer.next()
    })
  }
  $$song.forEach((song, currentIndex) => {
    song.onclick = function () {
      clearInterval(playTimer)
      audioPlayer.pause()
      index = parseInt(getStorage('index'), 10)
      $$song.forEach((cSong) => {
        if (cSong && cSong.classList) {
          cSong.classList.remove('current')
        }
      })
      audioPlayer.currentIndex = currentIndex
      if (currentIndex === index) {
        audioPlayer.setProgress(getStorage('currentTime'))
        if (audioPlayer.getState().isPlaying) {
          pauseMusic()
        } else {
          playMusic()
        }
      } else {
        setStorage('currentTime', 0)
        playMusic()
      }
      index = currentIndex
      setLyricInner(index)
      setSong()
      updateLyric()
      setStorage('index', index)
    }
  })
  $progress.addEventListener('click', function (event) {
    let per = event.offsetX / this.clientWidth
    $currentBar.style.width = per * 100 + "%"
    audioPlayer.seek(per * 100)
    const {
      duration,
      currentTime
    } = audioPlayer.getState()
    setStorage('currentTime', currentTime)
    $current.innerText = formatSec(currentTime)
    $total.innerText = formatSec(duration)
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
  const pressUp = () => {
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
        const {
          currentTime,
          duration
        } = audioPlayer.getState()
        audioPlayer.setProgress(duration * per)
        setStorage('currentTime', currentTime)
        $current.innerText = formatSec(currentTime)
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
    if (e.target.classList.contains('vol-progress')) return
    toggleMuted()
  })
  $volBar.oninput = function () {
    volValue = this.value
    audioPlayer.setVolume(this.value)
    setStorage('volValue', volValue)
    setVolume()
  }
  // #endregion
})