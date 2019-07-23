// some mock data

import jsf from 'json-schema-faker'

import chalk from 'chalk';

import fs from 'fs';

import {schema} from './mockDataSchema'


const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err)=>{
  if(err){
    console.log(chalk.red(err));

  }else{
    console.log(chalk.green('Mock Data generated successfully'));

  }
})