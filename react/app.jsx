class DrakeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      R: '',
      Fp: '',
      Ne: '',
      Fl: '',
      Fi: '',
      Fc: '',
      L: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      R: event.target.R,
      Fp: event.target.Fp,
      Ne: event.target.Ne,
      Fl: event.target.Fl,
      Fi: event.target.Fi,
      Fc: event.target.Fc,
      L: event.target.L
    });
  }

   onFormSubmit = (e) => {
      e.preventDefault();

      //Drake variables
      const r  = document.getElementById('R').value;
      const fp = document.getElementById('Fp').value / 100;
      const ne = document.getElementById('Ne').value;
      const fl = document.getElementById('Fl').value / 100;
      const fi = document.getElementById('Fi').value / 100;
      const fc = document.getElementById('Fc').value / 100;
      const l  = document.getElementById('L').value;

      //Equation solutions      
      const solve = Math.floor(r * fp * ne * fl * fi * fc * l);
      const calculate = document.querySelector('#calculate');

      //Result conditionals
      if (solve == 0) {
        calculate.innerHTML = `Unable to solve equation. Please try again.`;
      } else if (solve == 1) {
        calculate.innerHTML = `N = ${solve.toLocaleString()} detectable civilization in the Milky Way.`;
      } else {
        calculate.innerHTML = `N = ${solve.toLocaleString()} detectable civilizations in the Milky Way.`;
      }

      //Error handling
      
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
          <input type="text" id="R" name="R" value={this.state.R} onChange={this.handleChange} placeholder="R* - Annual formation rate of suitable stars in the Milky Way" />
          <input type="text" id="Fp" name="Fp" value={this.state.Fp} onChange={this.handleChange} placeholder="Fp - Percentage of stars that have planets" />
          <input type="text" id="Ne" name="Ne" value={this.state.Ne} onChange={this.handleChange} placeholder="Ne - Number of planets per star that can support life" />
          <input type="text" id="Fl" name="Fl"  value={this.state.Fl} onChange={this.handleChange} placeholder="Fl - Percentage of planets where life emerges" />
          <input type="text" id="Fi" name="Fi" value={this.state.Fi}  onChange={this.handleChange}placeholder="Fi - Percentage of planets where intelligent life evolves" />
          <input type="text" id="Fc" name="Fc" value={this.state.Fc} onChange={this.handleChange} placeholder="Fc - Percentage of civilizations that will develop communication" />
          <input type="text" id="L" name="L" value={this.state.L}  onChange={this.handleChange}placeholder="L - Years a civilization will last" />
          <input type="submit" value="Calculate" />
      </form>
    
    );  
  }
}

ReactDOM.render(<DrakeForm />, document.getElementById('root'));


