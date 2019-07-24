import {Selector} from 'testcafe';

fixture `login`

.page `http://localhost:8080/login`;

test('login AC', async t => {

    await t.click(Selector('input#username.form-control'));

    await t.typeText(Selector('input#username.form-control'), 'bananas');

    await t.click(Selector('input#password.form-control'));

    await t.typeText(Selector('input#password.form-control'), 'bananas');

    await t.click(Selector('button.btn.btn-lg.btn-primary.btn-block'));

    await t.expect(Selector('div.alert.alert-danger').withText('Bad credentials').exists).ok();



});

