import 'babel-polyfill';
import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import {beforeAndAfter, app} from './../environment';

chai.use(chaiAsPromised);

describe('React application', () => {

  beforeAndAfter();

  describe('open page', () => {
    it('should display title', async () => {
      await browser.get(app.getUrl('/'));
      expect($('h2').getText()).to.eventually.eq('Hello World!');
    });
  });
});
