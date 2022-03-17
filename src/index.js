#!/usr/bin/env node
const inquirer = require("inquirer");
const { writeFileSync } = require("fs");
const reactTsconfig = require("./config/tsconfig.react.json");
const reactNativeTsconfig = require("./config/tsconfig.react-native.json");
const nodeTsconfig = require("./config/tsconfig.node.json");

const tsconfigs = {
  react: JSON.stringify(reactTsconfig),
  "react-native": JSON.stringify(reactNativeTsconfig),
  node: JSON.stringify(nodeTsconfig),
};

inquirer
  .prompt([
    {
      type: "list",
      message: "Pick the framework you are using:",
      name: "framework",
      choices: ["react", "react-native", "node"],
    },
  ])
  .then(({ framework }) => {
    let tsConfigToWrite = "";
    if (framework === "react") {
      tsConfigToWrite = tsconfigs[framework];
    } else if (framework === "react-native") {
      tsConfigToWrite = tsconfigs[framework];
    } else {
      tsConfigToWrite = tsconfigs[framework];
    }

    const cwd = process.cwd();
    writeFileSync(`${cwd}/tsconfig.json`, tsConfigToWrite);
    console.log("tsconfig.json successfully created");
  });
