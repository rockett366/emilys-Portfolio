function Header() {
  return (
    <div className="App">
      <header className="App-header" id="header">
        <div className="title" id="title">
          <h1>emily</h1>
        </div>
      </header>
    </div>
  );
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //when scroll
    document.getElementById("header").style.backgroundSize = "150%";
  } else {
    //when normal
    document.getElementById("header").style.backgroundSize = "100%";
  }
}

export default Header;
