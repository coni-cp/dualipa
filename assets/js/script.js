//swiper
var galeriaBio= new Swiper(".galeria-fotos", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 2,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      
    });

    var discoCubo = new Swiper(".cuboDisco", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });


//premios
$.get({
  url: './assets/js/premios-awards.json',
  dataType: 'json',
  success: function(respuesta) {
    console.log(respuesta);
    let infoPremios = ''; 

    $.each(respuesta.premios, function(index, item) {
        infoPremios += '<div class="premio">';
        infoPremios += '<img src="' + item.premio.logo1 + '" alt="Logo de los premios awards">';
        infoPremios += '<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#reconocimientos" data-img="'+item.premio.imagen+'" data-nombre="'+item.premio.nombre1+'"  data-premio1="'+item.premio.premioG1+'"   data-premio2="'+item.premio.premioG2+'" data-premio3="'+item.premio.premioG3+'" >Saber Mas</button>';
        infoPremios += '</div>';
      });

   
    $('#premio1').append(infoPremios);
    
  },
  error: function() {
    console.error('Error al cargar el archivo JSON.');
  }
});
$.get({
  url: './assets/js/premios-brit.json',
  dataType: 'json',
  success: function(respuesta) {
    console.log(respuesta);
    let infoPremios = ''; 

    $.each(respuesta.premios, function(index, item) {
      infoPremios += '<div class="premio">';
        infoPremios += '<img src="' + item.premio.logo2 + '" style="object-fit:fill;"  alt="Logo de los premios brit">';
        infoPremios += '<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#reconocimientos" data-img="'+item.premio.imagen+'" data-nombre="'+item.premio.nombre2+'"  data-premio1="'+item.premio.premioB1+'"   data-premio2="'+item.premio.premioB2+'" data-premio3="'+item.premio.premioB3+'" >Saber Mas</button>';
       infoPremios += '</div>';
      });
   
    $('#premio2').append(infoPremios);
    
  },
  error: function() {
    console.error('Error al cargar el archivo JSON.');
  }
});
$.get({
  url: './assets/js/premios-mtv.json',
  dataType: 'json',
  success: function(respuesta) {
    console.log(respuesta);
    let infoPremios = ''; 

    $.each(respuesta.premios, function(index, item) {
      infoPremios += '<div class="premio">';
        infoPremios += '<img src="' + item.premio.logo3 + '" style="object-fit:fill;"  alt="Logo de los premios brit">';
        infoPremios += '<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#reconocimientos" data-img="'+item.premio.imagen+'" data-nombre="'+item.premio.nombre3+'"  data-premio1="'+item.premio.premioM1+'"   data-premio2="'+item.premio.premioM2+'" data-premio3="'+item.premio.premioM3+'" >Saber Mas</button>';
      infoPremios += '</div>';
      });
   
    $('#premio3').append(infoPremios);
    
  },
  error: function() {
    console.error('Error al cargar el archivo JSON.');
  }
});
$.get({
  url: './assets/js/premios-bill.json',
  dataType: 'json',
  success: function(respuesta) {
    console.log(respuesta);
    let infoPremios = ''; 

    $.each(respuesta.premios, function(index, item) {
        infoPremios += '<div class="premio">';
        infoPremios += '<img src="' + item.premio.logo4 + '"  alt="Logo de los premios brit">';
        infoPremios += '<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#reconocimientos" data-img="'+item.premio.imagen+'" data-nombre="'+item.premio.nombre4+'"  data-premio1="'+item.premio.premiob1+'" data-premio2="'+item.premio.premiob2+'" data-premio3="'+item.premio.premiob3+'">Saber Mas</button>';
       infoPremios += '</div>';
      });
   
    $('#premio4').append(infoPremios);
    
  },
  error: function() {
    console.error('Error al cargar el archivo JSON.');
  }
});




$(document).ready(function () {

  let paginaActual = window.location.pathname.split("/").pop();
  $('.nav-link').each(function () {
    if ($(this).attr('href') === paginaActual) {
      $(this).addClass('active');
    }
  });

  // MODAL PREMIOS
  $('#reconocimientos').on('show.bs.modal', function (event) {
    const boton = $(event.relatedTarget);
    const nombre = boton.data('nombre');
    const premio1 = boton.data('premio1');
    const premio2 = boton.data('premio2');
    const premio3 = boton.data('premio3');
    const imagen = boton.data('img');

    $('.modal-header').addClass('text-black');
    $('.modal-title').text(nombre);
    $('.modal-body').html(`
      <img src="${imagen}" class="img-fluid mb-3 imgModal" alt="Imagen de ${nombre}">
      <p>${premio1}</p>
      <p>${premio2}</p>
      <p>${premio3}</p>
    `);
  });

  //INFO TABLA Y ACTIVACION DE PLUGIN
    $.get({
    url: './assets/js/fechas.json',
    dataType: 'json',
    success: function (respuesta) {
      let infoConciertos = '';

      $.each(respuesta.conciertos, function (index, item) {
        infoConciertos += '<tr class="tarjeta-evento">';
        infoConciertos += '<td><span>' + item.fechas.fecha + '</span></td>';
        infoConciertos += '<td><p>' + item.fechas.lugar + '</p></td>';
        infoConciertos += '<td><a href="#" data-bs-toggle="modal" data-bs-target="#detalleEvento" data-img="'+item.fechas.img+'" data-ciudad="'+item.fechas.ciudad+'" data-fecha="'+item.fechas.fecha+'" data-lugar="'+item.fechas.lugar+'"  data-entradas="'+item.fechas.entradas+'" data-hora="'+item.fechas.hora+'" >Ver detalles</a></td>';
        infoConciertos += '</tr>';
      });

      $('#fila-concierto').html(infoConciertos);

      $('#myTable').DataTable({
        language: {
          info: 'Mostrando _PAGE_ de _PAGES_',
          search: 'Filtros de datos:'
        }
      });
    },
    error: function () {
      console.error('Error al cargar el archivo JSON.');
    }
  });
  //MODAL INFO CONCIERTO
    $('#detalleEvento').on('show.bs.modal', function (event) {
    const boton = $(event.relatedTarget);
    const lugar = boton.data('lugar');
    const fecha = boton.data('fecha');
    const entradas = boton.data('entradas');
    const hora = boton.data('hora');
    const ciudad = boton.data('ciudad');
    const fotoDua = boton.data('img');

    $('.modal-title').css('font-size', '30px');
    $('.modal-title').css('color', '#AB236A');

    $('.modal-title').html(`Dua Lipa en ${ciudad}`);

    $('.modal-body').html(`
      <img src="${fotoDua}" class="img-fluid mb-3 imgModal" alt="Imagen de Dua lipa en concierto">
      <p>Prepárate para una noche única con Dua Lipa en ${ciudad}, presentando sus mayores éxitos y lo mejor de su nueva era.</p>
      <p>🗓 El ${fecha}</p>
      <p>📍En ${lugar} </p>
      <p>🕒A las ${hora}</p>
      <p>🎫 Entradas disponibles</p>
      <a class="btn mb-2"href="${entradas}">Comprar Entradas</a>
      <p>¡No te lo pierdas!</p>
      <p>📸 Usa #RadicalPopLive y sigue el tour en nuestras redes.</p>
      
    `);
  });


   // OWL CAROUSEL
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 3,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3}
    }
  }); 
//slider CONCIERTOS
  const myCarouselElement = document.querySelector('#landing-eventos')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 5000,
      touch: false
    })

 

});//final funcion


//TOAST
let bombaNoticia;

setTimeout(function () {
  const toastEl = document.getElementById('ultimoMin');
  bombaNoticia = new bootstrap.Toast(toastEl, {
    autohide: false
  });
  bombaNoticia.show();
}, 5000); // Aparece a los 5 segundos

document.getElementById('cerrarNoticia').addEventListener('click', function () {
  bombaNoticia.hide();//cerrar noticia ultimo minuto

})
