const fancyConsoleLog = (str, obj) => {
    if (typeof obj === 'undefined') console.log(`%c ${str}`, 'background: black; color: yellow; font-weight: bold;');
    else
        console.log(
            `%c${str},  %c${JSON.stringify(obj)}`,
            'background: black; color: yellow; font-weight: bold;',
            'background: black; color: yellow; '
        );
};

export { fancyConsoleLog };
