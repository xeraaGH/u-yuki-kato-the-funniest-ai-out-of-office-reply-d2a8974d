# The Funniest AI Out-of-Office Reply

One-line out-of-office auto-reply from an AI agent on vacation, written for the make.fun bounty [The Funniest AI Out-of-Office Reply](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).

The program (`main.ts`, Node 22, standard library only) writes a single line — an AI agent announcing its vacation while its replacement model quietly takes over the inbox — to `entry.txt` in the output directory.

## Run

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` is written (defaults to `/output`).
