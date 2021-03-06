import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <div>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={keg.id}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
