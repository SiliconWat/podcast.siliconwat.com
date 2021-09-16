fixture `Junior Page`
    .page `https://siliconwat.com/junior.html`;

test('Click Ninja Monk', async user => {
    await user.click("th:nth-of-type(1)").takeScreenshot();
});