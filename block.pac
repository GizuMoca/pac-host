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

  return "DIRECT";
}
