import "./Button.css";

const Button = ({ href, icon, username }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button className="about-btn">
        <i className={icon}></i> {username}
      </button>
    </a>
  );
};

export default Button;
