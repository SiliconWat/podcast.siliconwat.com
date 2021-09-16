fixture `Senior Page`
    .page `https://siliconwat.com/senior.html`;

test('Click Ninja Monk', async user => {
    await user.click("th:nth-of-type(1)").takeScreenshot();
});