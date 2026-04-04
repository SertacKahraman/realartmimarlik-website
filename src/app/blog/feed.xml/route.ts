import { blogPosts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/site-config";

export async function GET() {
  const baseUrl = siteConfig.url;

  const rssItems = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
      <category>${post.category}</category>
      <enclosure url="${baseUrl}${post.image}" type="image/webp" />
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Real Art Mimarlık Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Mimari trendler, kentsel dönüşüm rehberleri ve inşaat içerikleri. Real Art Mimarlık blog yazıları.</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/real-logo.webp</url>
      <title>Real Art Mimarlık</title>
      <link>${baseUrl}</link>
    </image>
${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
