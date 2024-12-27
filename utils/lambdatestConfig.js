const args = process.argv.slice(2); // Get command line arguments
const browserName = args[0] || 'chrome'; // Default to 'chrome' if no argument is provided

const capabilities = {
    browserName: browserName,
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'LT:Options': {
        username: 'tushar54mane',
        accessKey: 'EQFrwGyeViIegkLbgAybbRAjHtA4EyBVhbAIZzF7w4lqeW26uJ',
        build: 'Selenium 101 Assignment',
        name: 'LambdaTest Execution',
        network: true,
        console: true,
        video: true,
    },
};

module.exports = capabilities;
