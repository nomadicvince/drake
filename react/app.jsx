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
      const r = 23
      const fp = 56 / 100;
      const ne = 100;
      const fl = 5 / 100;
      const fi = 5 / 100;
      const fc = 5 / 100;
      const l = 1000000;
      
      const solve = Math.floor(r * fp * ne * fl * fi * fc * l);
      const calculate = document.querySelector('#calculate');
      calculate.innerHTML =   `N = ${solve.toLocaleString()} detectable civilizations in the Milky Way.`;
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
          <input type="text" id="R" name="R" value="" placeholder="R* - Annual formation rate of suitable stars in the Milky Way" />
          <input type="text" id="Fp" name="Fp" value="" placeholder="Fp - Percentage of stars that have planets" />
          <input type="text" id="Ne" name="Ne" value="" placeholder="Ne - Number of planets per star that can support life" />
          <input type="text" id="Fl" name="Fl"  value="" placeholder="Fl - Percentage of planets where life emerges" />
          <input type="text" id="Fi" name="Fi" value="" placeholder="Fi - Percentage of planets where intelligent life evolves" />
          <input type="text" id="Fc" name="Fc" value="" placeholder="Fc - Percentage of civilizations that will develop communication" />
          <input type="text" id="L" name="L" value="" placeholder="L - Years a civilization will last" />
          <input type="submit" value="Calculate" />
      </form>
    
    );  
  }
}

ReactDOM.render(<DrakeForm />, document.getElementById('root'));


