// Footer component
const Footer = () => {
  return (
    <footer className="mt-24 pt-8 text-center border-t border-gray-300 dark:border-gray-700">
      <p className="text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Juan Jose Ortiz Rouille. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
