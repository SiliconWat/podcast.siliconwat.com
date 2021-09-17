fixture `Juniors Division`
    .page `https://scoreboard.siliconwat.com/scoreboards/juniors/division.html`;

test('Click Ninja Monk', async user => {
    await user.click("th:nth-of-type(1)").takeScreenshot();
});