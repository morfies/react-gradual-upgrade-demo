import { connect } from 'react-redux';
function Header({ counter, text, dispatch }) {
  return (
    <header style={{ display: 'flex' }}>
      <p style={{ margin: 0, paddingRight: '2rem' }}>
        Counter: {counter}{' '}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </p>
      <div>
        <span>Text to global state:</span>
        <input
          value={text}
          onChange={(e) => dispatch({ type: 'text', text: e.target.value })}
        ></input>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    text: state.text,
  };
}

export default connect(mapStateToProps)(Header);
