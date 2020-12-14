import arg from 'arg';
import inquirer from 'inquirer'
import { createProject } from './main';
import chalk from 'chalk'
import { success } from 'signale';
const signale = require('signale')

function parseArgumentsIntoOptions(rawArgs) {
 const args = arg(
   {
     '--git': Boolean,
     '--yes': Boolean,
     '--install': Boolean,
     '--server': Boolean,
     '-g': '--git',
     '-y': '--yes',
     '-i': '--install',
     '-s': '--server'
   },
   {
     argv: rawArgs.slice(2),
   }
 );
 return {
   skipPrompts: args['--yes'] || false,
   git: args['--git'] || false,
   template: args._[0],
   runInstall: args['--install'] || false,
   server: args['--server'] || false
 };
}

function WorldServers(rawArgs) {
    const args = arg(
        {
            '--server': Boolean,
            '-s': '--server'
        },
        {
            argv: rawArgs.slice(2)
        }
    );
    return {
      server: args._[0]
    }
}

function BotServers(rawArgs) {
  const args = arg(
    {
      '--bots': Boolean,
      '-b': '--bots'
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    bots: args['--bots'] || false
  }
}

function WebsiteServers(rawArgs) {
  const args = arg(
    {
      '--websites': Boolean,
      '-w': '--websites'
    },
    {
      argv: rawArgs.slice(2)
    }
  )

  return {
    websites: args['--websites'] || false
  }
}

async function promptForMissingOptions(options) {
    const defaultTemplate = 'JavaScript';
    if (options.skipPrompts) {
      return {
        ...options,
        template: options.template || defaultTemplate,
      };
    }
   
    const questions = [];
    if (!options.template) {
      questions.push({
        type: 'list',
        name: 'template',
        message: 'Please choose which project template to use',
        choices: ['JavaScript', 'TypeScript'],
        default: defaultTemplate,
      });
    }
   
    if (!options.git) {
      questions.push({
        type: 'confirm',
        name: 'git',
        message: 'Initialize a git repository?',
        default: false,
      });
    }

    //if(!options.server) {
        //questions.push({
          //  type: 'confirm',
          //  name: 'server',
           // message: 'Do You Have a Server?',
            //default: false,
       // })
   // }
   
    const answers = await inquirer.prompt(questions);
    return {
      ...options,
      template: options.template || answers.template,
      git: options.git || answers.git,
    };
   }

async function serverSelection(options) {
    const defaultTemplate = 'EU';
    const questions = [];
    if (!options.server) {
      questions.push({
        type: 'list',
        name: 'server',
        message: 'Please choose which server are you in:',
        choices: ['EU', 'NA', 'ASIA', 'AFRICA', 'AUSTRALIA'],
        default: defaultTemplate
      });
    }
    const answers = await inquirer.prompt(questions);
 return console.log(`Saved To Database! Your Server Is ${options.server || answers.server}. To Change It Type pyloncreate.`);
}

async function AddBot(options) {
  const questions = []
  if(!options.token) {
    questions.push({
      type: 'password',
      name: 'token',
      message: 'Enter Your Discord Bot’s Token:'
    })
  }

  if(!options.id) {
    questions.push({
      type: 'text',
      name: 'id',
      message: 'Enter Your Discord Bot’s ID:'
    })
  }
   
  if(!options.prefix) {
    questions.push({
      type: 'text',
      name: 'prefix',
      message: 'Enter Your Bot’s Prefix:'
    });
  }

  const answers = await inquirer.prompt(questions)
  return console.log(`✅ Successfully Got The Token
✅ Successfully Got Your Bot ID
✅ Successfully Got Your Bot Prefix.
${green('Your Bot Successfully Added To Pylon Servers. Always Remember: We Dont Do Something With Your Bot Because You Authorized Your Token ETC. Our System Automatically Dont Shows To Us Your Token. For More Join In Pylon’s Discord Server.')}`)
}

async function addWebsite(options) {
  const questions = []

  if(!options.url) {
    questions.push({
      type: 'text',
      name: 'url',
      message: 'Enter Your Website URL:'
    });
  }

  const answers = await inquirer.prompt(questions)
  return console.log(`✅ Successfully Got The URL
${green('Successfully Saved Website In Pylon Servers. For More Information Join In Our Discord Server!')}`)
}

export async function cli(args) {
 let options = parseArgumentsIntoOptions(args);
 options = await promptForMissingOptions(options);
 await createProject(options);
}

//const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("Hello!");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
};

const msgBox = boxen( greeting, boxenOptions )
const options = {
  types: {
    santa: {
      badge: '',
      color: 'green',
      label: '',
      logLevel: 'succes'
    }
  }
}

const custom = new signale.Signale(options);
const error = chalk.bold.red;
const green = chalk.bold.green;

export async function help(args) {
  console.log(`Pylon CLI Help
  
  List Of Our Commands In Terminal! All Commands Are Without The -!

  Commands:

  -pyloncreate: Creates a project in your folder (discord bot)
  -pylonhelp: Shows the help command
  -pylonselectserver: Selects at what server are you in

  
  Pylon©️ 2020, all rights reserved.
  `)
}

export async function server(args) {
    let options = WorldServers(args)
    options = await serverSelection(options)
    await console.log(options)
}

export async function bot(args) {
  let options = BotServers(args)
  options = await AddBot(options)
  await console.log(options)
}

export async function website(args) {
  let options = WebsiteServers(args)
  options = await addWebsite(options)
  await console.log(options)
}