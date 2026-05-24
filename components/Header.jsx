import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>
        <p className="theme-changer">
          <span className="icon">
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          </span>
          &nbsp;
          <span
            className="text"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            {isDark ? "Light Mood" : "Dark Mood"}
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
