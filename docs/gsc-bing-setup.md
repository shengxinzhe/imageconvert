# Google Search Console & Bing Webmaster — HeicSave 操作清单

站点：**https://heicsave.com**  
更新新页面或重定向后，按本清单提交，加快收录与排名刷新。

---

## 一、Google Search Console (GSC)

### 1. 确认资源已添加

1. 打开 [Google Search Console](https://search.google.com/search-console)
2. 左上角选择属性 **heicsave.com**（域名资源或 URL 前缀 `https://heicsave.com`）
3. 若未添加：「添加资源」→ 推荐 **网域** `heicsave.com`（DNS TXT 验证）或 **URL 前缀** `https://heicsave.com`（HTML 文件 / DNS / GA）

### 2. 提交 Sitemap

1. 左侧 **站点地图**
2. 输入：`https://heicsave.com/sitemap.xml`
3. 点击 **提交**
4. 状态应为「成功」；若失败，检查 Vercel 部署是否包含 `public/sitemap.xml`（`npm run build` 后 `postbuild` 生成）

### 3. 请求编入索引（本次更新重点）

对 **每个新 URL** 做一次 URL 检查：

| 页面 | 完整 URL |
|------|----------|
| AVIF 专题博客 | `https://heicsave.com/blog/convert-avif-to-jpg-windows` |
| AVIF 工具（已有，刷新） | `https://heicsave.com/avif-to-jpg` |
| 德文博客 | `https://heicsave.com/de/blog/convert-avif-to-jpg-windows` |
| 法文博客 | `https://heicsave.com/fr/blog/convert-avif-to-jpg-windows` |

**步骤（每个 URL 重复）：**

1. 顶部搜索框粘贴完整 URL → 回车
2. 等待「URL 不在 Google 索引中」或「URL 已在 Google 中」结果
3. 点击 **请求编入索引**
4. 队列通常几分钟到几天；勿对同一 URL 一天内重复点十几次

### 4. 验证 301 重定向

在 GSC URL 检查中测试别名是否指向规范 URL：

| 测试 URL（应 301 到右侧） |
|---------------------------|
| `https://heicsave.com/avif-to-jpeg` → `https://heicsave.com/avif-to-jpg` |
| `https://heicsave.com/heic-to-jpeg` → `https://heicsave.com/heic-to-jpg` |
| `https://heicsave.com/de/avif-to-jpeg` → `https://heicsave.com/de/avif-to-jpg` |

「页面抓取」结果应显示 **重定向** 且最终 URL 为 canonical。

### 5. 监控「avif to jpg」查询

1. 左侧 **效果** → 搜索类型 **网络**
2. 筛选 **查询** 包含 `avif` 或 `avif to jpg`
3. 对比部署前后 2–4 周的 **展示次数、平均排名、点击率**
4. 若展示高、CTR 仍 0：在 GSC **网页** 中打开 `/avif-to-jpg`，看 **标题链接** 是否吸引点击，必要时再改 meta title（前 60 字符）

### 6. 可选：移除过时 URL

若旧域名或错误 URL 曾被收录：

1. **移除** → **新的请求** → **暂时移除网址**
2. 仅用于紧急去索引；长期仍依赖 301 + canonical

---

## 二、Bing Webmaster Tools

### 1. 添加站点

1. 打开 [Bing Webmaster](https://www.bing.com/webmasters)
2. **添加站点** → `https://heicsave.com`
3. 验证方式（任选）：
   - **XML 文件** 放到 `public/`（Bing 提供文件名）
   - **DNS CNAME**
   - **从 GSC 导入**（若已连 Google 账号，最快）

### 2. 提交 Sitemap

1. **站点配置** → **Sitemaps**
2. 提交：`https://heicsave.com/sitemap.xml`
3. 可选再提交：`https://heicsave.com/sitemap-0.xml`（若存在分片）

### 3. URL 提交（Bing 无 GSC 式单 URL 检查时）

1. **URL 提交** → **手动提交**
2. 粘贴（每行一个）：
   ```
   https://heicsave.com/blog/convert-avif-to-jpg-windows
   https://heicsave.com/avif-to-jpg
   https://heicsave.com/blog/convert-avif-to-jpg-windows
   ```
3. 每日有配额；优先提交博客 + 核心工具页

### 4. IndexNow（可选，需后续开发）

Bing 支持 [IndexNow](https://www.indexnow.org/) 主动推送。当前项目未集成；若日后添加 API key，可在发布时自动 ping Bing/Yandex。

### 5. 重定向检查

**Site Explorer** → 输入 `https://heicsave.com/avif-to-jpeg` → 确认 HTTP **301** 到 `/avif-to-jpg`。

---

## 三、部署后自检（本地或生产）

```bash
# 博客 200
curl -I https://heicsave.com/blog/convert-avif-to-jpg-windows

# 重定向 301
curl -I https://heicsave.com/avif-to-jpeg
curl -I https://heicsave.com/heic-to-jpeg
```

期望：`HTTP/1.1 301` 且 `Location: .../avif-to-jpg`（或 heic-to-jpg）。

---

## 四、建议时间线

| 时间 | 动作 |
|------|------|
| 部署当天 | GSC + Bing 提交 sitemap；URL 检查 4 个重点 URL |
| 第 3–7 天 | GSC 看「avif to jpg」展示/排名是否变化 |
| 第 14 天 | 若博客已收录、工具页 CTR 仍低，改 title/description 再请求编入索引 |
| 持续 | 新博文发布后重复 §1.3 + Bing URL 提交 |

---

## 五、内链提醒（无需 GSC）

部署后确认站内已链到新文：

- `/blog/convert-avif-to-jpg-windows` 链到 `/avif-to-jpg`
- `/blog/avif-explained` 文末链到新指南
- 首页「最新博客」按日期排序后会显示新文
