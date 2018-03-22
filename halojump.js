/*
  VAMOS SALTAR DE PARAQUEDAS? KEK
  A vida do aventureiro está em suas mãos, certifique-se de acertar os valores :)

  have a lot of fun!
*/

const {
  Aviao,
  Paraquedista
} = require('./skydiver.js');

const aviao = Aviao();
const paraquedista = Paraquedista();

aviao.decolar({ altitude: 0 }).then( res => {
  console.log(res);
  aviao.abrirPorta({ forca: 0 }).then( res => {
    console.log(res);
    paraquedista.pular({ altitude: 0 }).then( res => {
      console.log(res);
      paraquedista.pousar().then( res => {
        console.log(res);
      });
    }).catch( falha => console.error(falha) );
  }).catch( falha => console.error(falha) );
}).catch( falha => console.error(falha) );
