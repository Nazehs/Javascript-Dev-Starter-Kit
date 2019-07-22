import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'

describe('This our first test', ()=>{
  it('This should pass', ()=>{
    expect(true).to.equal(true)
  })
});

describe('Second test should pass',()=>{
  it('checking for hellow world', (done)=>{
    const index = fs.readFileSync('./src/index.html', 'utf-8');

    jsdom.env(index, (error, window)=>{
      const text = window.document.getElementsByTagName('h1')[0];
      expect(text.innerHTML).to.equal('Hello World');
      done();
      window.close();
    })
  })
})