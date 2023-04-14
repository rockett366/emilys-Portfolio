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
    document.getElementById("header").style.paddingTop = "0";
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("title").style.backgroundColor = "#b187d3af";
  } else {
    //when normal
    document.getElementById("header").style.paddingTop = "40vh";
    document.getElementById("header").style.fontSize = "60px";
    document.getElementById("title").style.backgroundColor = "transparent";
  }
}
export default Header;
