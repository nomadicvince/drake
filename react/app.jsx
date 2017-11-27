// create our Button component as a functional component
const Button = (props) => {
  return (
    <input
      type="button"
      className={props.type === 'action' ? 'button action-button' : 'button input-button'}
      onClick={props.handleClick}
      value={props.label}
    />
  );
}


ReactDOM.render(
<form action="#">
  <input type="text" id="R" name="field1" value="" placeholder="R* - Annual formation rate of suitable stars in the Milky Way" />
  <input type="text" id="Fp" name="field2" value="" placeholder="Fp - Percentage of stars that have planets" />
  <input type="text" id="Ne" name="field3" value="" placeholder="Ne - Number of planets per star that can support life" />
  <input type="text" id="Fl" name="field3"  value=""placeholder="Fl - Percentage of planets where life emerges" />
  <input type="text" id="Fi" name="field3" value="" placeholder="Fi - Percentage of planets where intelligent life evolves" />
  <input type="text" id="Fc" name="field3" value="" placeholder="Fc - Percentage of civilizations that will develop communication" />
  <input type="text" id="L" name="field3" value="" placeholder="L - Years a civilization will last" />
  <input type="submit" value="Calculate" />
</form>,

  document.getElementById('root')
);
