function Aviao() {

  const decolar = ({ altitude }) => new Promise( (resolve, reject) => {
    console.log('\n\tDecolando...');

    setTimeout( () => {
      if( altitude > 5000 ) {
        reject(`\n\tAtingimos a altitude de ${altitude} metros! O paraquedista ficou com medo. Ele desistiu.`);
      } else if( altitude < 3500 ) {
        reject(`\n\tAcho que o paraquedista não quer suicidar hoje. Ele desistiu.`);
      }

      resolve(`\n\tEstamos à ${altitude} metros de altitude. Ideal para o salto!`);
    }, 1000);

  });

  const abrirPorta = ({ forca }) => new Promise( (resolve, reject) => {
    console.log('\n\tAbrindo a porta...');

    setTimeout(() => {
      if( forca < 7 ) {
        reject('\n\tMuito fraco! Stronga mais!');
      }

      resolve('\n\tA porta foi aberta!');
    }, 1000);

  });

  return {
    decolar,
    abrirPorta
  };
}

function Paraquedista() {

  const pular = ({ altitude }) => new Promise( (resolve, reject) => {
    console.log('\n\tO paraquedista saltou!');

    setTimeout(() => {
      if( altitude < 2000 ) {
        reject('\n\tO paraquedas não abriu a tempo. Você matou o jovem dinâmico.');
      } else if( altitude > 4000 ) {
        reject('\n\tVai mesmo ficar tanto tempo no ar? O paraquedista morreu de tédio');
      }

      resolve('\n\tO paraquedas foi aberto!');
    });
  });

  const pousar = () => new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve('\n\t');
    }, 2000);

  });

  return {
    pular
  };
}

module.exports = {
  Aviao,
  Paraquedista
};
