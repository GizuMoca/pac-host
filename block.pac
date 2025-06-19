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

  return "DIRECT";
}
