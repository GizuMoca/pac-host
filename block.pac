function FindProxyForURL(url, host) {
  // YouTube
  if (
    dnsDomainIs(host, "youtube.com") ||
    shExpMatch(host, "*.youtube.com") ||
    shExpMatch(host, "*.ytimg.com") ||
    shExpMatch(host, "*.googlevideo.com") ||
    dnsDomainIs(host, "youtu.be")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // TikTok
  if (
    dnsDomainIs(host, "tiktok.com") ||
    shExpMatch(host, "*.tiktok.com") ||
    shExpMatch(host, "*.tiktokcdn.com") ||
    shExpMatch(host, "*.bytecdn.com") ||
    shExpMatch(host, "*.muscdn.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // Instagram
  if (
    dnsDomainIs(host, "instagram.com") ||
    shExpMatch(host, "*.instagram.com") ||
    dnsDomainIs(host, "cdninstagram.com") ||
    shExpMatch(host, "*.cdninstagram.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // Facebook
  if (
    dnsDomainIs(host, "facebook.com") ||
    shExpMatch(host, "*.facebook.com") ||
    dnsDomainIs(host, "fbcdn.net") ||
    shExpMatch(host, "*.fbcdn.net")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // Twitter / X
  if (
    dnsDomainIs(host, "twitter.com") ||
    shExpMatch(host, "*.twitter.com") ||
    dnsDomainIs(host, "x.com") ||
    shExpMatch(host, "*.x.com") ||
    dnsDomainIs(host, "twimg.com") ||
    shExpMatch(host, "*.twimg.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // ブラウザゲームサイト
  if (
    dnsDomainIs(host, "poki.com") ||
    shExpMatch(host, "*.poki.com") ||
    dnsDomainIs(host, "coolmathgames.com") ||
    shExpMatch(host, "*.coolmathgames.com") ||
    dnsDomainIs(host, "crazygames.com") ||
    shExpMatch(host, "*.crazygames.com") ||
    dnsDomainIs(host, "miniclip.com") ||
    shExpMatch(host, "*.miniclip.com") ||
    dnsDomainIs(host, "y8.com") ||
    shExpMatch(host, "*.y8.com") ||
    dnsDomainIs(host, "kizi.com") ||
    shExpMatch(host, "*.kizi.com") ||
    dnsDomainIs(host, "friv.com") ||
    shExpMatch(host, "*.friv.com") ||
    dnsDomainIs(host, "agame.com") ||
    shExpMatch(host, "*.agame.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // 無料マンガサイト（合法・違法問わずブロック）
  if (
    dnsDomainIs(host, "piccoma.com") ||
    shExpMatch(host, "*.piccoma.com") ||
    dnsDomainIs(host, "manga.line.me") ||
    dnsDomainIs(host, "line.me") ||
    dnsDomainIs(host, "cmoa.jp") ||
    shExpMatch(host, "*.cmoa.jp") ||
    dnsDomainIs(host, "mechacomic.jp") ||
    shExpMatch(host, "*.mechacomic.jp") ||
    dnsDomainIs(host, "mangaraw.to") ||
    dnsDomainIs(host, "mangaraw.org") ||
    dnsDomainIs(host, "mangaraw.site") ||
    dnsDomainIs(host, "manga1001.com") ||
    dnsDomainIs(host, "manga13.com") ||
    dnsDomainIs(host, "manga11.com") ||
    dnsDomainIs(host, "rawdevart.com") ||
    dnsDomainIs(host, "mangadex.org")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // アダルト系
  if (
    dnsDomainIs(host, "pornhub.com") ||
    dnsDomainIs(host, "xvideos.com") ||
    dnsDomainIs(host, "youporn.com") ||
    dnsDomainIs(host, "fc2.com") ||
    shExpMatch(host, "*.fc2.com") ||
    dnsDomainIs(host, "erocool.net") ||
    dnsDomainIs(host, "ero-video.net") ||
    dnsDomainIs(host, "adult.contents.fc2.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // 出会い系・チャット系
  if (
    dnsDomainIs(host, "tinder.com") ||
    dnsDomainIs(host, "pairs.lv") ||
    dnsDomainIs(host, "with.is") ||
    dnsDomainIs(host, "pcmax.jp") ||
    dnsDomainIs(host, "waku2.com") ||
    dnsDomainIs(host, "chatpad.jp") ||
    dnsDomainIs(host, "omegle.com") ||
    dnsDomainIs(host, "chatroulette.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // ギャンブル・オンラインカジノ
  if (
    dnsDomainIs(host, "pinnacle.com") ||
    dnsDomainIs(host, "stake.com") ||
    dnsDomainIs(host, "1xbet.com") ||
    dnsDomainIs(host, "22bet.com") ||
    dnsDomainIs(host, "joycasino.com") ||
    dnsDomainIs(host, "bitcasino.io") ||
    dnsDomainIs(host, "casumo.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // リスクのあるコミュニティ投稿サイト
  if (
    dnsDomainIs(host, "tumblr.com") ||
    dnsDomainIs(host, "reddit.com") ||
    dnsDomainIs(host, "ask.fm") ||
    dnsDomainIs(host, "4chan.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // 2ちゃんねる・5ちゃんねる系
  if (
    dnsDomainIs(host, "5ch.net") || shExpMatch(host, "*.5ch.net") ||
    dnsDomainIs(host, "2ch.sc") || shExpMatch(host, "*.2ch.sc") ||
    dnsDomainIs(host, "open2ch.net") || shExpMatch(host, "*.open2ch.net") ||
    dnsDomainIs(host, "2chblog.jp") || dnsDomainIs(host, "2chmatome.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // 日本語のゲーム攻略サイト（代表例）
  if (
    dnsDomainIs(host, "gamewith.jp") || shExpMatch(host, "*.gamewith.jp") ||
    dnsDomainIs(host, "appmedia.jp") || shExpMatch(host, "*.appmedia.jp") ||
    dnsDomainIs(host, "altema.jp") || shExpMatch(host, "*.altema.jp") ||
    dnsDomainIs(host, "game8.jp") || shExpMatch(host, "*.game8.jp") ||
    dnsDomainIs(host, "kamigame.jp") || shExpMatch(host, "*.kamigame.jp")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  // 悪意ある／フィッシング・マルウェア配布ドメイン（抜粋）
  if (
    dnsDomainIs(host, "malicious‑example1.com") ||
    dnsDomainIs(host, "malicious‑example2.net") ||
    shExpMatch(host, "*.badsitexyz.org") ||
    dnsDomainIs(host, "phishingsite123.xyz")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  return "DIRECT";
}
