console.log("Hello World!");

let heading = document.getElementsByTagName('h1');

for (elt of heading) {
    elt.style['color'] = 'cyan';
}