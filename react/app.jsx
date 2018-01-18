const appRoot = document.getElementById('root');

const onFormSubmit = (e) => {
    e.preventDefault();

    const r = 23
    const fp = 3 / 100;
    const ne = 4;
    const fl = 5 / 100;
    const fi = 5 / 100;
    const fc = 5 / 100;
    const l = 1000000;

    alert(Math.floor(r * fp * ne * fl * fi * fc * l) + " detectable civilizations in the Milky Way.");

};

const renderForm = () => {
  const template = (
    <form onSubmit={onFormSubmit}>
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

  ReactDOM.render(template, appRoot);
}

renderForm();
