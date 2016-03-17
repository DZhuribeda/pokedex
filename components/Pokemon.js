import React, { PropTypes } from 'react';
import Radium from 'radium';

const styles = {
  card: {
    border: '2px solid black',
    padding: '10px',
    marginBottom: '20px',
    width: '25%',
  },
  button: {
    margin: '5px',
    padding: '6px 12px',
    fontSize: '14px',
    border: '1px solid transparent',
    borderRadius: '4px',
  },
  menu: {
    color: '#fff',
  },
  img: {
    height: '120px',
    width: '120px',
  },
};

const Pokemon = (props) => {
  const { name, img, types } = props;
  return (
    <div style={styles.card}>
      <div>
        <img src={img} style = {styles.img} />
        <h4 >{name}</h4>
      </div>
      <div>
        {types.map(type => (
          <button style={styles.button}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};

export default Radium(Pokemon);
