// function showalert(message,alerttype) {
//
//   $('#alert_placeholder').replaceWith(
//     '<button id="alertdiv" type="submit" class="btn btn-default alert-success">Formats enregistrés !</button>'
//   );
//
//   setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
//     $("#alertdiv").remove();
//   }, 2000);
//
//   $('#appendform').append(
//     '<button id="alert_placeholder" type="submit" class="btn btn-default">Enregistrer les formats</button>'
// );
//
// };

  $('#format-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      'url' : '/chimn/webapi/myresource/formats',
      'type' : 'POST',
      'data' : {
          shp: $('[name="shp"]').prop('checked'),
          dxf: $('[name="dxf"]').prop('checked'),
          gml: $('[name="gml"]').prop('checked'),
          png: $('[name="png"]').prop('checked'),
          geotiff: $('[name="geotiff"]').prop('checked'),
          jpeg: $('[name="jpeg"]').prop('checked')
        }
    })
    .done(function(data) {

      //showalert("Enregistrement effectué avec succès !", "alert-success");
    	alert("Enregistrement effectué avec succès !");
      console.log(data);
    });
  });



  $('#srs-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      'url' : '/chimn/webapi/myresource/srs',
      'type' : 'POST',
    'data' : {
      WebMercator: $('[name="WebMercator"]').prop('checked'),
      l93: $('[name="l93"]').prop('checked'),
      wgs84UTM: $('[name="wgs84UTM"]').prop('checked'),
      wgs84: $('[name="wgs84"]').prop('checked')

        }
    })
    .done(function(data) {
    	alert("Enregistrement effectué avec succès !");
    	console.log(data);
    });
  });



  $('#service-form').submit(function(e) {
    e.preventDefault();

    $.ajax({
      'url' : '/chimn/webapi/myresource/services',
      'type' : 'POST',
    'data' : {
          wfs: $('[name="wfs"]').prop('checked'),
          wms: $('[name="wms"]').prop('checked'),
          wmts: $('[name="wmts"]').prop('checked'),
          style: $('[name="style"]').val()

        }
    })
    .done(function(data) {
    	alert("Enregistrement effectué avec succès !");
      console.log(data);
    });
  });


  $('#critere-form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        'url' : '/chimn/webapi/myresource/critere',
        'type' : 'POST',
      'data' : {
            license: $('[name="optionsRadios"]:checked').val(),
            keyword: $('[name="keywordSelect"]').val(),
            periodicity:$('[name="periodicite"]').val()

          }
      })
      .done(function(data) {
    	  alert("Enregistrement effectué avec succès !");
        console.log(data);
      });
    });


    $('#runtraitement').submit(function(e) {
        e.preventDefault();
        $.ajax({
          'url' : '/chimn/webapi/myresource/run',
          'type' : 'GET',
          'data' : {}
        })
        .done(function(data) {
      	  if(data=="the end of get run!"){
            alert("Traitement effectué !");
            console.log(data);
            }
          else
            {
              alert("Echec : les traitements n'ont pas été lancés !");
            console.log(data);
            }

        });
      })
