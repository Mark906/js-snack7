var vett = [];
var i = 0;

var n = parseInt(prompt('indicare quanti numeri si vogliono inserire: '));

for(i=0; i<n; i++){
    vett[i] = parseInt(prompt('Digita il ' + (i+1) + 'numero: '));
    console.log(vett[i]);
}

var work = 0;

for(i=0; i<n; i++){
    work = work + vett[i];
}

console.log('la somma dei numeri è: ' + work);

work = work/n;

console.log('la media è: ' + work);
