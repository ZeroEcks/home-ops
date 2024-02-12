// Note: Cross-Seed vars should be escaped with $${VAR_NAME} to avoid interpolation by Flux
module.exports = {
  delay: 20,
  qbittorrentUrl: "http://qbittorrent.default.svc.cluster.local",
  torznab: [
    `http://prowlarr.default.svc.cluster.local/1/api?apikey=$${process.env.PROWLARR_API_KEY}`, // tl
  ],
  port: process.env.CROSSSEED_PORT || 80,
  apiAuth: false,
  action: "inject",
  includeEpisodes: false,
  includeSingleEpisodes: true,
  includeNonVideos: true,
  duplicateCategories: true,
  matchMode: "safe",
  skipRecheck: true,
  linkType: "hardlink",
  linkDir: "/media/downloads/torrent/complete/cross-seed",
  dataDirs: [
    "/media/downloads/torrent/complete/radarr",
    "/media/downloads/torrent/complete/tv-sonarr",
    "/media/downloads/torrent/complete/music",
    "/media/downloads/torrent/complete/manual",
    "/media/movies",
    "/media/music",
    "/media/tv"
  ],
  maxDataDepth: 2,
  outputDir: "/config/xseeds",
  torrentDir: "/media/downloads/torrent/complete/meta-info",
};
