
let QueTitulo = ["C/C++", "PHP", "ASP", "CSS", "JS", "Python", "Java", "Java Android", "Config Server", "Photoshop", "Diseño Web", "Rotar Figuritas"];
let QueHaceTexto = ["Programador full time", "Programador y/o Diseñador", "Programador Web", "Programador Web y/o mobil", "No hace nada"];
var banderaDatos = 0;
var dAnios = 30;
//Datos iniciales/genericos
var fechaN = "1992-03-08T15:13:16.688Z";
var txtNombre = "Nombre Generico";
var txtQueHace = QueHaceTexto[Math.random() * QueHaceTexto.length | 0];
var txtLugarNa = "La cucha del perro de la esquina";
var txtEmail = "lacucha@ejemplos.com";
var txtTelefono = "+549000000000";
var txtImagen = "img/basica.jpg";

function IrA(donde) {
    let url = "";
    if (donde == "FA") url = "https://facebook.com/";
    if (donde == "TW") url = "https://twitter.com/";
    window.open(url);
}

function DameLorem(mini = 0) {
    var cual = [];
    cual[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dui vehicula, tincidunt dolor eget, dignissim quam. Praesent gravida eget nibh nec volutpat. Vivamus efficitur facilisis leo, ac convallis mauris accumsan in. Aenean nec tortor ac nisi eleifend auctor sed eget diam. Suspendisse iaculis auctor ipsum nec euismod. In accumsan purus vel egestas malesuada. In accumsan feugiat enim, quis sollicitudin nibh pulvinar a. Curabitur ligula velit, convallis sit amet mauris a, porta facilisis elit. Vivamus sit amet leo lacus. Vestibulum sed ante vel dolor molestie hendrerit ut in turpis. Etiam ipsum neque, facilisis sit amet suscipit nec, vehicula nec velit."
    cual[1] = "In faucibus ac lectus non mattis. Mauris ultricies nec libero a semper. Curabitur ipsum sem, condimentum id scelerisque quis, faucibus vitae lectus. Mauris finibus, est feugiat tincidunt sodales, orci dolor molestie nulla, eget ultrices arcu leo in turpis. Nulla vel dui in lorem interdum dapibus in sed lacus. Suspendisse porttitor efficitur nisi, ut maximus nunc vehicula in. Duis sit amet nisi ultricies, posuere tellus id, euismod urna. Nam ultricies porta dui sit amet vulputate. Morbi dignissim, libero sit amet pretium dictum, lorem nisl posuere felis, nec rutrum arcu leo ut justo. Duis id lacinia mi. Aenean facilisis nisi ac nibh imperdiet blandit ut a velit."
    cual[2] = "Mauris scelerisque, mi efficitur venenatis lobortis, tellus nunc vehicula tellus, ut finibus elit lacus ut nulla. Etiam rhoncus, orci ullamcorper condimentum blandit, augue augue congue odio, non commodo velit diam hendrerit purus. Aenean ultricies massa quis varius auctor. Vestibulum luctus dapibus efficitur. Sed lacinia, ipsum ut placerat porttitor, magna enim lacinia mi, eu sollicitudin erat odio porta lorem. Donec et consectetur nibh, ac cursus mi. Integer vel nisl urna. Ut est metus, aliquet sit amet tellus a, lacinia ornare ligula. Nam vel velit eu mi condimentum molestie. Curabitur turpis eros, pellentesque in auctor in, lacinia sit amet purus. Donec a euismod enim. Sed massa arcu, porta molestie porta sit amet, porttitor nec ligula. Aenean tortor sem, ornare eget faucibus quis, eleifend non quam. Mauris ut ipsum enim. Integer volutpat euismod purus ut ultrices. Sed molestie, enim sed faucibus sollicitudin, lectus orci efficitur tortor, a venenatis magna sem quis augue."
    cual[3] = "Mauris quis odio lorem. Curabitur nisi magna, rutrum nec ullamcorper at, sodales a urna. Duis justo neque, lobortis nec rhoncus ac, consectetur venenatis mauris. Suspendisse congue massa purus, congue dapibus mauris iaculis ac. Cras blandit justo massa, nec viverra mi volutpat tristique. Aenean eu risus tristique, eleifend neque a, finibus sapien. Phasellus condimentum mattis orci, ac imperdiet tellus rutrum quis. Donec ac suscipit lacus. Proin euismod tellus vel lectus facilisis lobortis. Nulla lobortis, tortor vitae gravida aliquam, ante sapien semper arcu, sed ornare lacus mi posuere risus. Sed vitae ultrices ante. In dapibus lectus quis quam cursus mattis. Suspendisse efficitur lobortis justo quis ultricies. Suspendisse vel diam sed lorem aliquam dignissim. Aenean pulvinar condimentum urna ut tempor."
    cual[4] = "Curabitur dictum ut elit ac ullamcorper. Vestibulum finibus consequat posuere. Maecenas turpis nisi, egestas vitae tortor ut, molestie cursus erat. Quisque ac enim sed dui feugiat posuere vel in leo. Maecenas a erat sed orci egestas lacinia. Vivamus facilisis ultricies dolor eu congue. Phasellus tristique commodo justo eu efficitur. Donec urna tortor, placerat sed porta quis, molestie ac ipsum. Vivamus blandit, justo ac lacinia elementum, lorem erat pellentesque lectus, eleifend volutpat nibh nisi tempor magna. Nunc a urna justo. Aliquam condimentum lorem odio, at dignissim tortor posuere vitae. Duis non arcu at eros maximus aliquam. Morbi ultricies commodo quam interdum lobortis. Curabitur mollis sit amet lorem nec eleifend. Praesent aliquam aliquet pretium. Integer fermentum sollicitudin lacus sit amet egestas."

    var rand = cual[Math.random() * cual.length | 0];
    if (mini == 1) {
        return rand.substring(0, 250) + "...";
    }
    return rand;
}

function AzarNumeros(minimo = 45, maximo = 85) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function GenerarHTMLBarras() {
    var c = $("#contenedorBarras");
    for (i = 0; i <= (QueTitulo.length - 1 | 0); i++) {
        cuanto = AzarNumeros();
        c.append(' <div class="col-4" style="float:left;"> ' + QueTitulo[i] + ' <div class="progress" role="progressbar" aria-label="' + QueTitulo[i] + '"> <div class="progress-bar bg-success barraP" style="width: ' + cuanto + '%">' + cuanto + '%</div> </div> </div>');
    }
}

//https://javascript.info/task/shuffle
//https://stackoverflow.com/a/9592758
function shuffleA(array) {
    return array.slice(0).sort(() => Math.random() - 0.5);
}

//https://stackoverflow.com/a/33070496
function GenerarFechas(fechaNacimiento) {

    const dAnioMayorEdad = new Date(fechaNacimiento);
    dAnioMayorEdad.setFullYear(dAnioMayorEdad.getFullYear() + 18); // cuando fue mayor de edad

    const dAnioInicio = new Date(dAnioMayorEdad.getFullYear(),AzarNumeros(1, 12),AzarNumeros(1, 29)); //solo vamos hasta el dia 29 para no incurrir en febrero
    dAnioInicio.setFullYear(dAnioInicio.getFullYear() + AzarNumeros(2, 5)); // desde cuando inicio la carrera
    
    const dAnioFin = new Date(dAnioInicio.getFullYear(),AzarNumeros(1, 12),AzarNumeros(1, 29));
    dAnioFin.setFullYear(dAnioFin.getFullYear() + AzarNumeros(2, 5)); // cuando la termino

    //regresamos un array con los dos valores (inicio y fin)
    return [dAnioInicio, dAnioFin];
}


function GenerarHTMLEdu() {
    let tmpQueTitulo = [];
    tmpQueTitulo = shuffleA(QueTitulo);

    var c = $("#contenedorEdu");
    //vaciamos el contenedor
    c.html("");
    var cMin = Math.floor(Math.random() * 2) + 1;
    var cMax = Math.floor(Math.random() * 6) + 1;
    var cTotal = cMax + cMin;
    for (i = 0; i < cTotal; i++) {
        var tmpFechas = GenerarFechas(fechaN);
        c.append('<h5 id="titulo2">' + tmpQueTitulo[i] + '</h5>\
        <p class="lineaBaja"><span id="lorem2">' + DameLorem(1) + '</span></p>\
        <p class="txtBlanco"><strong>Desde:</strong> \
            <span id="fDesde">'+ tmpFechas[0].toLocaleDateString() + '</span>\
         | <strong>Hasta:</strong> \
            <span id="fHasta">'+ tmpFechas[1].toLocaleDateString() + '</span>\
        <br /></p>\
        <hr class="border border-secondary border-2 opacity-50">');
    }
}

//https://mdbootstrap.com/docs/standard/extended/back-to-top/
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function GenerarInicio() {
    //Agregar el lorem
    $("#lorem").html(DameLorem(0));

    //Generar las barras de lo que aprendio
    GenerarHTMLBarras();
}

function SetearDatos() {
    banderaDatos = 1;
    $("#imagenUser").attr("src", txtImagen);
    $("#nombre").html(txtNombre);
    $("#nacimiento").html(txtLugarNa);

    var tmpFechaN = new Date(fechaN);
    $("#cumple").html(tmpFechaN.toLocaleDateString("es-ES"));

    $("#email").html(txtEmail);
    $("#NumTel").html(txtTelefono);

    $("#quehace").html(txtQueHace)

    //Generar educacion
    GenerarHTMLEdu();
}

$(document).ready(function () {
    var entro; //bandera
    //Usamos la api de https://randomuser.me/ para generar un perfil al azar, si hay algun problema con esto, usamos los datos genericos.
    $.ajax({
        url: 'https://randomuser.me/api/?format=json',
        dataType: 'json',
        success: function (data) {
            if (data.results) {
                var tmpV = data.results[0];
                fechaN = tmpV.dob.date;
                txtNombre = tmpV.name.first + " " + tmpV.name.last;
                txtLugarNa = tmpV.location.city + " - " + tmpV.location.state + " (" + tmpV.location.country + ")";
                txtEmail = tmpV.email;
                txtTelefono = tmpV.phone;
                txtImagen = tmpV.picture.large;
                dAnios = tmpV.dob.age;
            }
            SetearDatos();
        }
    });

    if (!banderaDatos) SetearDatos();


    GenerarInicio();
    tmpForm = $('#formularioContacto');
    tmpForm.on('submit', function (e) {
        e.preventDefault();
        //Como no enviaremos el formulario de contacto a ningun lado, solo le daremos las gracias al usuario y vaciaremos el formulario
        alert('Gracias por contactarse, tu mensaje será visto y/o respondido a la brevedad.');
        tmpForm.trigger("reset");
    });
});
