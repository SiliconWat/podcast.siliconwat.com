fixture `Seniors Division`
    .page `https://scoreboard.siliconwat.com/scoreboards/seniors/division.html`;

test('Click Ninja Monk', async user => {
    await user.click("th:nth-of-type(1)").takeScreenshot();
});

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7B51M16P7H');