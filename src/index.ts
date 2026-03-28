#!/usr/bin/env node
import { program } from "commander";
import { checkCode } from "./commands/stat.js";
import { checkXSS } from "./commands/xss.js";

program
  .name('codecheck')
  .version('1.0.0')
  .description('An example CLI tool');

program
  .command("stat")
  .description("统计代码行数、字符数等信息")
  .option("--path <path>", "指定代码所在目录", "src")
  .action((options) => {
    const { path } = options;
    checkCode(`${path}/**/*.{js,jsx,ts,tsx,json,css,scss,html,md,mdx,vue}`);
  });

program
  .command("xss")
  .description("检查 XSS 漏洞")
  .option("--path <path>", "指定代码所在目录", "src")
  .action((options) => {
    const { path } = options;
    checkXSS(`${path}/**/*.{js,jsx,ts,tsx,vue,html}`);
  });

program.parse(process.argv);
