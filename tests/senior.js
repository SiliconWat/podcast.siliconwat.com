fixture `Seniors Division`
    .page `https://scoreboard.siliconwat.com/scoreboards/seniors/division.html`;

test('Click Ninja Monk', async user => {
    await user.click("th:nth-of-type(1)").takeScreenshot();
});