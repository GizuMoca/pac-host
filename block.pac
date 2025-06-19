function FindProxyForURL(url, host) {
  if (
    dnsDomainIs(host, "youtube.com") ||
    shExpMatch(host, "*.youtube.com") ||
    shExpMatch(host, "*.ytimg.com") ||
    shExpMatch(host, "*.googlevideo.com") ||
    dnsDomainIs(host, "youtu.be")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  if (
    dnsDomainIs(host, "tiktok.com") ||
    shExpMatch(host, "*.tiktok.com") ||
    shExpMatch(host, "*.tiktokcdn.com") ||
    shExpMatch(host, "*.bytecdn.com") ||
    shExpMatch(host, "*.muscdn.com")
  ) {
    return "PROXY 127.0.0.1:0";
  }

  return "DIRECT";
}