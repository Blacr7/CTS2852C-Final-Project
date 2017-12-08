function navBar(navigation) {
    var multiArray = [
        ['aboutme', 'gallery', 'contactme', 'mypage'],
        ['index', 'gallery', 'contactme', 'mypage'],
        ['index', 'aboutme', 'contactme', 'mypage'],
        ['index', 'aboutme', 'gallery', 'mypage'],
        ['index', 'aboutme', 'gallery', 'contactme']
    ];
    var nav = document.createElement('nav');
    var ul = document.createElement('ul');
    
    for (i = 0; i < 4; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        var br = document.createElement('br');
        var capitilize = multiArray[navigation][i].charAt(0).toUpperCase() + multiArray[navigation][i].slice(1);
        a.setAttribute('href', `${multiArray[navigation][i]}.html`);
        a.setAttribute('class', 'links');
        a.innerText = capitilize;
        li.appendChild(a);
        ul.appendChild(li);
        ul.appendChild(br);
    }
    nav.appendChild(ul);
    document.querySelector('#header').appendChild(nav); 
}

