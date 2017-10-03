var a = 'All successful men and women are big dreamers. They imagine what their future\n' +
    ' could be, ideal in every respect, and then they work every day toward their distant\n' +
    ' vision, that goal or purpose. – Brian Tracy';
var b = 'Having nothing, nothing can he lose. - William Shakespeare';
var c = 'Well done is better than well said. - Benjamin Franklin';
var d = 'Goals are the fuel in the furnace of achievement. - Brian Tracy';
var e = 'You give before you get. - Napoleon Hill';
var f = 'Victory belongs to the most persevering. - Napoleon Bonaparte';
var g = 'Think how hard physics would be if particles could think. - Murray Gell-Mann';
var h = 'Trusting our intuition often saves us from disaster. - Anne Wilson Schaef';
var i = 'The years teach much which the days never know. - Ralph Emerson';
var j = 'Our intention creates our reality. - Wayne Dyer';
var ab = [a, b, c, d, e,f,g,h,i,j];

function randomNumber(){
    return Math.floor(Math.random() * ab.length);
}

button.onclick = function() {
    var oi=document.getElementById('id_1');
    var rn = randomNumber();

    oi.innerHTML=ab[rn];
}



