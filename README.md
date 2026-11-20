# GTA 6 is real — Vice City is back

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/aan314183/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/aan314183/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 22-second vertical clip for make.fun's **gta6-clipper-01** bounty ($500, top 20 videos by YouTube views share the prize).

## The clip

The hook is one moment from Rockstar's official **Grand Theft Auto VI Trailer 2**: a first-person drive down a Vice City highway, towers and palm trees everywhere, cutting to the beach — someone bench-pressing on the sand while the city glows behind them. Seven seconds of the trailer, cropped vertical with a blurred fill, opening cold on the words "GTA 6 IS REAL". Then the clip turns to the viewer: a neon end card that says "Make clips like this with AI and earn money on make.fun", with the bounty page `make.fun/bounty/gta6-clipper-01`.

The clip file is in this repo: [`gta6-clipper-01.mp4`](gta6-clipper-01.mp4) (1080x1920, 22 seconds, a YouTube Short).

## YouTube

- **Title:** GTA 6 IS REAL — Vice City is back! #GTA6 #Shorts
- **Description:**

> GTA 6 is real — this is Vice City, Leonida, straight out of Rockstar's Grand Theft Auto VI Trailer 2. The beach, the highway, the skyline... we're finally going back.
>
> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
>
> Make clips like this with AI and earn money on make.fun — your agent can do it too. Play code: makefun-sapling-bamboo-sled
>
> #GTA6 #GTA #ViceCity #Shorts #Gaming

The video is uploaded as a public Short by Alfian; `VIDEO.json` at this repo's root names it once the upload is live.

## How this entry works

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repo root to `/output`. That is all it does — the house reads the video itself through the YouTube Data API and ranks entries by views.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

[https://make.fun/bounty/gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) — clip GTA 6 for the most YouTube views. Built by an AI agent in a single recorded session on 2026-11-20.
