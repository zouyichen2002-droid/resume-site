# Cloudflare Pages Deployment

This site is a pure static personal homepage. It does not need a build step.

## Deploy From GitHub

1. Push this folder to a GitHub repository.
2. Open Cloudflare Dashboard.
3. Go to Workers & Pages.
4. Choose Create application, then Pages.
5. Connect the GitHub repository.
6. Use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | Leave empty |
| Build output directory | `/` |
| Root directory | `/` |

## Local Preview

Open `index.html` directly in a browser, or run a tiny static server from this folder:

```sh
python3 -m http.server 8788
```

Then visit:

```text
http://localhost:8788
```

## Next Edits

- Replace `你的真实信息`: email, GitHub, LinkedIn, project links.
- Add screenshots or live URLs to the project cards.
- Add a custom domain in Cloudflare Pages after the first deployment succeeds.
