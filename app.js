let themes = undefined;
(function load_theme(){
    fetch('themes.json')
        .then(res => res.json())
        .then(json => themes = json);
})();

function theme() {
    if (typeof themes === 'undefined')
        console.error('[App Error] Failed to load themes');


	let current_mode = document.querySelector('input[name=\"theme\"]:checked').id;
    if (typeof current_mode === 'undefined')
        console.error('[App Error] Failed to load current theme');



    document.documentElement.style.setProperty('--bg', themes[current_mode].bg);
    document.documentElement.style.setProperty('--del', themes[current_mode].del);
    document.documentElement.style.setProperty('--text', themes[current_mode].text);
}

let list = {}
