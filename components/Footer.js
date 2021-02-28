import footerStyles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <a href="/home">
        Created by &nbsp;<span> Abanoub</span>
      </a>
    </div>
  );
};
export default Footer;
