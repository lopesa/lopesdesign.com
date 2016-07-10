var React = require('react');

var Main = React.createClass({
  getInitialState: function() {
    return {
      menuState: 'home'
    }
  },
  render: function(){
    var setMenuState = function setMenuState(state) {
      this.setState({menuState: state});
    };

    var setMenuWidth = function setMenuWidth() {
      if (this.state.menuState !== 'home') {
        return {
          width: '10%'
        }
      }

      else {
        return {
          width: '23%'
        }
      }
    };

    this.setMenuState = setMenuState;
    this.setMenuWidth = setMenuWidth
 

    return (
      <div className="">
        <nav
          role="navigation"
          className='menu'
          style={this.setMenuWidth()}>
          <ul>
            <a href="#/" onClick={this.setMenuState.bind(this, 'home')}>
              <li>
                home
              </li>
            </a>
            <li>
              <a href="#/work" onClick={this.setMenuState.bind(this, 'work')}>work</a>
            </li>
            <li>
              <a href="#/about" onClick={this.setMenuState.bind(this, 'about')}>about</a>
            </li>
            <li>
              <a href="#/blog" onClick={this.setMenuState.bind(this, 'blog')}>blog</a>
            </li>
          </ul>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;